import test from "node:test"
import assert from "node:assert/strict"

import { aggregateMetrics, buildFirstImpressionWatch, dateRangeForDays, datedDimensionRows, isBrandedQuery, normalizeSiteUrl, parseBrandTerms, summaryMetrics, toCsv } from "./utils.mjs"

test("normalizes Search Console URL-prefix and domain properties", () => {
  assert.equal(normalizeSiteUrl("https://whaleleap.studio"), "https://whaleleap.studio/")
  assert.equal(normalizeSiteUrl("sc-domain:whaleleap.studio"), "sc-domain:whaleleap.studio")
})

test("builds inclusive finalized reporting ranges from the previous Pacific day", () => {
  assert.deepEqual(dateRangeForDays(28, new Date("2026-09-06T08:00:00Z")), { startDate: "2026-08-09", endDate: "2026-09-05" })
})

test("classifies branded queries case-insensitively", () => {
  const terms = parseBrandTerms("whaleleap, whale leap, WhaleLeap Studio")
  assert.equal(isBrandedQuery("WhaleLeap shopify", terms), true)
  assert.equal(isBrandedQuery("shopify conversion optimization", terms), false)
})

test("returns null rate metrics when there are no impressions", () => {
  assert.deepEqual(aggregateMetrics([]), { clicks: 0, impressions: 0, ctr: null, averagePosition: null })
  assert.deepEqual(summaryMetrics({ clicks: 0, impressions: 0, ctr: 0, position: 0 }), {
    clicks: 0,
    impressions: 0,
    ctr: null,
    averagePosition: null,
  })
})

test("weights average position by impressions and escapes CSV", () => {
  assert.deepEqual(aggregateMetrics([{ clicks: 2, impressions: 10, position: 2 }, { clicks: 1, impressions: 20, position: 5 }]), { clicks: 3, impressions: 30, ctr: 0.1, averagePosition: 4 })
  assert.equal(toCsv([{ query: 'one, "two"' }], ["query"]), 'query\n"one, ""two"""\n')
})

test("keeps first-impression evidence empty when the API returns zero impressions", () => {
  const report = buildFirstImpressionWatch({
    generatedAt: "2026-09-07T00:00:00.000Z",
    siteUrl: "sc-domain:whaleleap.studio",
    period: { label: "28d", startDate: "2026-08-10", endDate: "2026-09-06" },
    metrics: { clicks: 0, impressions: 0, ctr: null, averagePosition: null },
    queries: [],
    nonBrandedQueries: [],
    pages: [],
    datedQueries: [],
    datedPages: [],
    previous: { firstObservedAt: "2026-09-06T00:00:00.000Z", firstSeenQuery: { query: "stale" } },
  })

  assert.equal(report.totalImpressions, 0)
  assert.deepEqual(report.nonBrandQueries, [])
  assert.deepEqual(report.pagesWithImpressions, [])
  assert.equal(report.firstSeenQuery, null)
  assert.equal(report.firstObservedAt, null)
  assert.equal(report.topPageByImpressions, null)
})

test("selects real first and top impression rows and preserves the first observation", () => {
  const datedQueries = datedDimensionRows([
    { keys: ["2026-09-05", "shopify tracking plan"], clicks: 0, impressions: 1, ctr: 0, position: 8 },
    { keys: ["2026-09-04", "ga4 shopify events"], clicks: 1, impressions: 2, ctr: 0.5, position: 4 },
  ], "query")
  const nonBrandedQueries = [
    { query: "shopify tracking plan", clicks: 0, impressions: 5, ctr: 0, averagePosition: 8 },
    { query: "ga4 shopify events", clicks: 1, impressions: 2, ctr: 0.5, averagePosition: 4 },
  ]
  const pages = [{ page: "https://whaleleap.studio/learn/shopify-ga4-gtm-tracking-plan", clicks: 1, impressions: 7, ctr: 1 / 7, averagePosition: 6 }]
  const report = buildFirstImpressionWatch({
    generatedAt: "2026-09-07T00:00:00.000Z",
    siteUrl: "sc-domain:whaleleap.studio",
    period: { label: "28d", startDate: "2026-08-10", endDate: "2026-09-06" },
    metrics: { clicks: 1, impressions: 7, ctr: 1 / 7, averagePosition: 6 },
    queries: nonBrandedQueries,
    nonBrandedQueries,
    pages,
    datedQueries,
    datedPages: [{ date: "2026-09-04", ...pages[0] }],
    previous: { firstObservedAt: "2026-09-06T00:00:00.000Z", firstSeenQuery: { date: "2026-09-03", query: "preserved", impressions: 1 } },
  })

  assert.equal(report.firstObservedAt, "2026-09-06T00:00:00.000Z")
  assert.equal(report.firstSeenQuery.query, "preserved")
  assert.equal(report.firstSeenPage.page, pages[0].page)
  assert.equal(report.topQueryByImpressions.query, "shopify tracking plan")
  assert.equal(report.topPageByImpressions.page, pages[0].page)
})
