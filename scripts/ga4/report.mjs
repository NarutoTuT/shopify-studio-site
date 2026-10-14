import fs from "node:fs"
import path from "node:path"

import { loadLocalEnv, requireEnv } from "../gsc/env.mjs"

loadLocalEnv()
requireEnv(["GSC_CLIENT_ID", "GSC_CLIENT_SECRET", "GA4_PROPERTY_ID", "GA4_REFRESH_TOKEN"])

const propertyId = process.env.GA4_PROPERTY_ID?.trim()
const days = Math.max(1, Math.min(Number.parseInt(process.argv[2] || "90", 10) || 90, 365))

async function getAccessToken() {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GSC_CLIENT_ID,
      client_secret: process.env.GSC_CLIENT_SECRET,
      refresh_token: process.env.GA4_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  })
  const token = await response.json()
  if (!response.ok || !token.access_token) throw new Error(token.error_description || token.error || `OAuth refresh failed (${response.status})`)
  return token.access_token
}

const accessToken = await getAccessToken()

const endpoint = `https://analyticsdata.googleapis.com/v1beta/properties/${encodeURIComponent(propertyId)}:runReport`
let reportDateRange = { startDate: `${days}daysAgo`, endDate: "yesterday" }

async function runReport(body) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    body: JSON.stringify({ dateRanges: [reportDateRange], metricAggregations: ["TOTAL"], limit: "10000", ...body }),
  })
  if (!response.ok) throw new Error(`GA4 Data API request failed (${response.status}): ${await response.text()}`)
  return response.json()
}

function diagnostics(report) {
  return {
    rowCount: report.rowCount || 0,
    totals: report.totals || [],
    metadata: report.metadata || {},
  }
}

function formatDate(date) {
  return date.toISOString().slice(0, 10)
}

const metadataProbe = await runReport({ metrics: [{ name: "sessions" }] })
const propertyTimeZone = metadataProbe.metadata?.timeZone || "UTC"
const propertyToday = new Intl.DateTimeFormat("en-CA", {
  timeZone: propertyTimeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date())
const propertyTodayUtc = new Date(`${propertyToday}T00:00:00.000Z`)
const startDate = new Date(propertyTodayUtc)
const endDate = new Date(propertyTodayUtc)
startDate.setUTCDate(startDate.getUTCDate() - days)
endDate.setUTCDate(endDate.getUTCDate() - 1)
reportDateRange = { startDate: formatDate(startDate), endDate: formatDate(endDate) }

function rows(report) {
  return (report.rows || []).map((row) => ({
    dimensions: Object.fromEntries((report.dimensionHeaders || []).map((header, index) => [header.name, row.dimensionValues?.[index]?.value || ""])),
    metrics: Object.fromEntries((report.metricHeaders || []).map((header, index) => [header.name, row.metricValues?.[index]?.value || "0"])),
  }))
}

const [overview, channels, sources, landingPages, leads, events] = await Promise.all([
  runReport({ metrics: [{ name: "sessions" }, { name: "totalUsers" }, { name: "activeUsers" }, { name: "engagementRate" }, { name: "keyEvents" }] }),
  runReport({ dimensions: [{ name: "sessionDefaultChannelGroup" }], metrics: [{ name: "sessions" }, { name: "totalUsers" }, { name: "engagementRate" }] }),
  runReport({ dimensions: [{ name: "sessionSourceMedium" }], metrics: [{ name: "sessions" }, { name: "totalUsers" }, { name: "keyEvents" }] }),
  runReport({ dimensions: [{ name: "landingPagePlusQueryString" }], metrics: [{ name: "sessions" }, { name: "totalUsers" }, { name: "engagementRate" }, { name: "keyEvents" }] }),
  runReport({ dimensions: [{ name: "eventName" }], metrics: [{ name: "eventCount" }, { name: "keyEvents" }], dimensionFilter: { filter: { fieldName: "eventName", stringFilter: { matchType: "EXACT", value: "generate_lead" } } } }),
  runReport({ dimensions: [{ name: "eventName" }], metrics: [{ name: "eventCount" }, { name: "keyEvents" }], orderBys: [{ metric: { metricName: "eventCount" }, desc: true }] }),
])

const sourceRows = rows(sources)
const aiPattern = /(chatgpt|openai|perplexity|claude|anthropic|copilot|gemini|bard|deepseek|doubao|qianwen|yuanbao|metaso)/i
const result = {
  collectedAt: new Date().toISOString(),
  range: reportDateRange,
  propertyId,
  propertyTimeZone,
  overview: rows(overview),
  channels: rows(channels),
  sources: sourceRows,
  aiReferrals: sourceRows.filter((row) => aiPattern.test(row.dimensions.sessionSourceMedium)),
  landingPages: rows(landingPages),
  generateLead: rows(leads),
  events: rows(events),
  diagnostics: {
    overview: diagnostics(overview),
    channels: diagnostics(channels),
    sources: diagnostics(sources),
    landingPages: diagnostics(landingPages),
    generateLead: diagnostics(leads),
    events: diagnostics(events),
  },
}

const outputDir = path.resolve("reports/competitive-seo-geo-2026-10-14/v7.2-attribution")
fs.mkdirSync(outputDir, { recursive: true })
const outputPath = path.join(outputDir, "ga4-90d.json")
fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`, { mode: 0o600 })
console.log(`GA4 report saved to ${outputPath}`)
