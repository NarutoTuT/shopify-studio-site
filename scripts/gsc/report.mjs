import fs from "node:fs"
import path from "node:path"

import { loadLocalEnv, requireEnv } from "./env.mjs"
import { aggregateMetrics, buildFirstImpressionWatch, dateRangeForDays, datedDimensionRows, isBrandedQuery, normalizeSiteUrl, parseBrandTerms, reportRows, summaryMetrics, toCsv } from "./utils.mjs"

loadLocalEnv()
requireEnv(["GSC_CLIENT_ID", "GSC_CLIENT_SECRET", "GSC_REFRESH_TOKEN", "GSC_SITE_URL"])

const days = Number(process.argv[2])
if (![28, 90].includes(days)) throw new Error("Run this script with 28 or 90 days.")

const projectRoot = path.resolve(import.meta.dirname, "../..")
const outputDir = path.join(projectRoot, "reports/gsc")
const siteUrl = normalizeSiteUrl(process.env.GSC_SITE_URL)
const encodedSiteUrl = encodeURIComponent(siteUrl)
const configuredMaxRows = Number(process.env.GSC_MAX_ROWS || 100000)
if (!Number.isInteger(configuredMaxRows) || configuredMaxRows < 1) {
  throw new Error("GSC_MAX_ROWS must be a positive integer.")
}
const maxRows = configuredMaxRows
const brandTerms = parseBrandTerms(process.env.GSC_BRAND_TERMS || "whaleleap,whale leap,whaleleap studio")
const period = dateRangeForDays(days)
const generatedAt = new Date().toISOString()

async function getAccessToken() {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GSC_CLIENT_ID,
      client_secret: process.env.GSC_CLIENT_SECRET,
      refresh_token: process.env.GSC_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  })
  const payload = await response.json()
  if (!response.ok) throw new Error(payload.error_description || payload.error || `OAuth refresh failed (${response.status})`)
  if (!payload.access_token) throw new Error("Google OAuth refresh response did not include an access token.")
  return payload.access_token
}

const accessToken = await getAccessToken()

async function apiJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: { authorization: `Bearer ${accessToken}`, "content-type": "application/json", ...options.headers },
  })
  const payload = await response.json()
  if (!response.ok) {
    const message = payload.error?.message || payload.error_description || `Google API request failed (${response.status})`
    throw new Error(message)
  }
  return payload
}

const sites = await apiJson("https://www.googleapis.com/webmasters/v3/sites")
if (!(sites.siteEntry || []).some((site) => site.siteUrl === siteUrl)) {
  throw new Error(`GSC_SITE_URL ${siteUrl} is not accessible to this Google account. Use the exact URL-prefix or sc-domain property identifier shown in Search Console.`)
}

const analyticsEndpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodedSiteUrl}/searchAnalytics/query`

async function queryAnalytics(dimensions = [], startRow = 0, rowLimit = 25000) {
  return apiJson(analyticsEndpoint, {
    method: "POST",
    body: JSON.stringify({ ...period, dimensions, type: "web", dataState: "final", aggregationType: dimensions.includes("page") ? "auto" : "byProperty", rowLimit, startRow }),
  })
}

async function fetchDimension(dimension) {
  const rows = []
  let startRow = 0
  const pageSize = Math.min(25000, maxRows)

  while (rows.length < maxRows) {
    const response = await queryAnalytics([dimension], startRow, Math.min(pageSize, maxRows - rows.length))
    const batch = response.rows || []
    rows.push(...batch)
    if (batch.length < pageSize) return { rows: reportRows(rows, dimension), truncated: false }
    startRow += batch.length
  }

  return { rows: reportRows(rows, dimension), truncated: true }
}

async function fetchDatedDimension(dimension) {
  const rows = []
  let startRow = 0
  const pageSize = Math.min(25000, maxRows)

  while (rows.length < maxRows) {
    const response = await queryAnalytics(["date", dimension], startRow, Math.min(pageSize, maxRows - rows.length))
    const batch = response.rows || []
    rows.push(...batch)
    if (batch.length < pageSize) return { rows: datedDimensionRows(rows, dimension), truncated: false }
    startRow += batch.length
  }

  return { rows: datedDimensionRows(rows, dimension), truncated: true }
}

const [summaryResponse, queriesResult, pagesResult, countriesResult, devicesResult, sitemapResponse, datedQueriesResult, datedPagesResult] = await Promise.all([
  queryAnalytics([], 0, 1),
  fetchDimension("query"),
  fetchDimension("page"),
  fetchDimension("country"),
  fetchDimension("device"),
  apiJson(`https://www.googleapis.com/webmasters/v3/sites/${encodedSiteUrl}/sitemaps`),
  days === 28 ? fetchDatedDimension("query") : Promise.resolve({ rows: [], truncated: false }),
  days === 28 ? fetchDatedDimension("page") : Promise.resolve({ rows: [], truncated: false }),
])

const summaryRow = summaryResponse.rows?.[0]
const metrics = summaryMetrics(summaryRow)

const queries = queriesResult.rows.map((row) => ({ ...row, segment: isBrandedQuery(row.query, brandTerms) ? "branded" : "non-branded" }))
const brandedQueries = queries.filter((row) => row.segment === "branded")
const nonBrandedQueries = queries.filter((row) => row.segment === "non-branded")
const sitemapRows = (sitemapResponse.sitemap || []).map((sitemap) => ({
  path: sitemap.path,
  type: sitemap.type,
  isPending: Boolean(sitemap.isPending),
  isSitemapsIndex: Boolean(sitemap.isSitemapsIndex),
  lastSubmitted: sitemap.lastSubmitted || null,
  lastDownloaded: sitemap.lastDownloaded || null,
  warnings: Number(sitemap.warnings) || 0,
  errors: Number(sitemap.errors) || 0,
  submittedUrls: (sitemap.contents || []).reduce((sum, content) => sum + (Number(content.submitted) || 0), 0),
  contentTypes: (sitemap.contents || []).map((content) => content.type).filter(Boolean),
}))
const sitemapSummary = {
  count: sitemapRows.length,
  pending: sitemapRows.filter((row) => row.isPending).length,
  warnings: sitemapRows.reduce((sum, row) => sum + row.warnings, 0),
  errors: sitemapRows.reduce((sum, row) => sum + row.errors, 0),
  submittedUrls: sitemapRows.reduce((sum, row) => sum + row.submittedUrls, 0),
  note: "The official Sitemaps API provides submission and processing health, not clicks or impressions by sitemap. Google also deprecated contents.indexed, so this report does not invent indexed URL counts or an index rate.",
}

const summary = {
  schemaVersion: 1,
  generatedAt,
  source: "Google Search Console API",
  siteUrl,
  searchType: "web",
  dataState: "final",
  period: { label: `${days}d`, days, ...period, timeZone: "America/Los_Angeles" },
  hasData: metrics.impressions > 0,
  metrics,
  querySegments: {
    branded: { terms: brandTerms, rowCount: brandedQueries.length, metrics: aggregateMetrics(brandedQueries) },
    nonBranded: { rowCount: nonBrandedQueries.length, metrics: aggregateMetrics(nonBrandedQueries) },
    note: "Segment metrics are calculated from exported query rows and may not equal property totals because Search Console applies privacy filtering and returns top rows.",
  },
  dimensions: {
    queries: { rowCount: queries.length, truncated: queriesResult.truncated },
    pages: { rowCount: pagesResult.rows.length, truncated: pagesResult.truncated },
    countries: { rowCount: countriesResult.rows.length, truncated: countriesResult.truncated },
    devices: { rowCount: devicesResult.rows.length, truncated: devicesResult.truncated },
  },
  sitemap: sitemapSummary,
}

fs.mkdirSync(outputDir, { recursive: true })
const writeJson = (filename, value) => fs.writeFileSync(path.join(outputDir, filename), `${JSON.stringify(value, null, 2)}\n`)
const writeCsv = (filename, rows, columns) => fs.writeFileSync(path.join(outputDir, filename), toCsv(rows, columns))
const prefix = `${days}d`
const dimensionColumns = (dimension) => [dimension, "clicks", "impressions", "ctr", "averagePosition"]
const dimensionDocument = (dimension, rows, truncated) => ({
  schemaVersion: 1,
  generatedAt,
  source: "Google Search Console API",
  siteUrl,
  period: summary.period,
  dimension,
  rowCount: rows.length,
  truncated,
  rows,
})

writeJson(`${prefix}-summary.json`, summary)
writeCsv(`${prefix}-summary.csv`, [{ ...period, hasData: summary.hasData, ...metrics }], ["startDate", "endDate", "hasData", "clicks", "impressions", "ctr", "averagePosition"])
writeJson(`${prefix}-queries.json`, dimensionDocument("query", queries, queriesResult.truncated))
writeCsv(`${prefix}-queries.csv`, queries, [...dimensionColumns("query"), "segment"])
writeJson(`${prefix}-branded-queries.json`, dimensionDocument("query", brandedQueries, queriesResult.truncated))
writeCsv(`${prefix}-branded-queries.csv`, brandedQueries, [...dimensionColumns("query"), "segment"])
writeJson(`${prefix}-non-branded-queries.json`, dimensionDocument("query", nonBrandedQueries, queriesResult.truncated))
writeCsv(`${prefix}-non-branded-queries.csv`, nonBrandedQueries, [...dimensionColumns("query"), "segment"])
for (const { filename, dimension, result } of [
  { filename: "pages", dimension: "page", result: pagesResult },
  { filename: "countries", dimension: "country", result: countriesResult },
  { filename: "devices", dimension: "device", result: devicesResult },
]) {
  writeJson(`${prefix}-${filename}.json`, dimensionDocument(dimension, result.rows, result.truncated))
  writeCsv(`${prefix}-${filename}.csv`, result.rows, dimensionColumns(dimension))
}
writeJson("sitemaps.json", { generatedAt, siteUrl, summary: sitemapSummary, sitemaps: sitemapRows })
writeCsv("sitemaps.csv", sitemapRows.map((row) => ({ ...row, contentTypes: row.contentTypes.join("|") })), ["path", "type", "isPending", "isSitemapsIndex", "lastSubmitted", "lastDownloaded", "warnings", "errors", "submittedUrls", "contentTypes"])

const latestPath = path.join(outputDir, "latest-summary.json")
let latest = { schemaVersion: 1, source: "Google Search Console API", siteUrl, generatedAt, windows: {}, sitemap: sitemapSummary }
if (fs.existsSync(latestPath)) {
  try {
    const previous = JSON.parse(fs.readFileSync(latestPath, "utf8"))
    if (previous.siteUrl === siteUrl) latest.windows = previous.windows || {}
  } catch {
    // Replace an invalid previous summary with the verified current response.
  }
}
latest.generatedAt = generatedAt
latest.windows[prefix] = summary
latest.sitemap = sitemapSummary
writeJson("latest-summary.json", latest)

if (days === 28) {
  const watchPath = path.join(outputDir, "first-impression-watch.json")
  let previousWatch = null
  if (fs.existsSync(watchPath)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(watchPath, "utf8"))
      if (parsed.siteUrl === siteUrl) previousWatch = parsed
    } catch {
      // Replace an invalid previous watch file with verified API data.
    }
  }
  writeJson("first-impression-watch.json", buildFirstImpressionWatch({
    generatedAt,
    siteUrl,
    period: summary.period,
    metrics,
    queries,
    nonBrandedQueries,
    pages: pagesResult.rows,
    datedQueries: datedQueriesResult.rows,
    datedPages: datedPagesResult.rows,
    previous: previousWatch,
  }))
}

console.log(`Wrote ${prefix} Google Search Console reports to ${path.relative(projectRoot, outputDir)}/`)
console.log(`Period: ${period.startDate} to ${period.endDate} (finalized data, Pacific Time)`)
console.log(`Clicks: ${metrics.clicks}; impressions: ${metrics.impressions}; queries exported: ${queries.length}`)
