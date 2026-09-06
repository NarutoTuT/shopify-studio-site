export const PACIFIC_TIME_ZONE = "America/Los_Angeles"

export function dateRangeForDays(days, now = new Date()) {
  if (!Number.isInteger(days) || days < 1) throw new Error("days must be a positive integer")

  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: PACIFIC_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now)
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]))
  const todayPacific = new Date(Date.UTC(Number(value.year), Number(value.month) - 1, Number(value.day)))
  const end = new Date(todayPacific)
  end.setUTCDate(end.getUTCDate() - 1)
  const start = new Date(end)
  start.setUTCDate(start.getUTCDate() - (days - 1))

  return { startDate: start.toISOString().slice(0, 10), endDate: end.toISOString().slice(0, 10) }
}

export function normalizeSiteUrl(value) {
  const trimmed = value.trim()
  if (trimmed.startsWith("sc-domain:")) return trimmed
  const url = new URL(trimmed)
  if (url.pathname === "") url.pathname = "/"
  url.hash = ""
  url.search = ""
  return url.toString()
}

export function parseBrandTerms(value = "") {
  return [...new Set(value.split(",").map((term) => term.trim().toLocaleLowerCase()).filter(Boolean))]
}

export function isBrandedQuery(query, brandTerms) {
  const normalized = query.toLocaleLowerCase().replace(/\s+/g, " ").trim()
  return brandTerms.some((term) => normalized.includes(term))
}

export function aggregateMetrics(rows) {
  const clicks = rows.reduce((sum, row) => sum + (Number(row.clicks) || 0), 0)
  const impressions = rows.reduce((sum, row) => sum + (Number(row.impressions) || 0), 0)
  const weightedPosition = rows.reduce(
    (sum, row) => sum + (Number(row.position) || 0) * (Number(row.impressions) || 0),
    0,
  )

  return {
    clicks,
    impressions,
    ctr: impressions > 0 ? clicks / impressions : null,
    averagePosition: impressions > 0 ? weightedPosition / impressions : null,
  }
}

export function summaryMetrics(row) {
  const clicks = Number(row?.clicks) || 0
  const impressions = Number(row?.impressions) || 0

  return {
    clicks,
    impressions,
    ctr: impressions > 0 && Number.isFinite(Number(row?.ctr)) ? Number(row.ctr) : null,
    averagePosition: impressions > 0 && Number.isFinite(Number(row?.position)) ? Number(row.position) : null,
  }
}

export function csvEscape(value) {
  if (value === null || value === undefined) return ""
  const string = String(value)
  return /[",\n\r]/.test(string) ? `"${string.replace(/"/g, '""')}"` : string
}

export function toCsv(rows, columns) {
  return [
    columns.join(","),
    ...rows.map((row) => columns.map((column) => csvEscape(row[column])).join(",")),
  ].join("\n") + "\n"
}

export function reportRows(responseRows = [], dimension) {
  return responseRows.map((row) => ({
    [dimension]: row.keys?.[0] ?? "",
    clicks: Number(row.clicks) || 0,
    impressions: Number(row.impressions) || 0,
    ctr: Number.isFinite(Number(row.ctr)) ? Number(row.ctr) : null,
    averagePosition: Number.isFinite(Number(row.position)) ? Number(row.position) : null,
  }))
}
