import test from "node:test"
import assert from "node:assert/strict"

import { aggregateMetrics, dateRangeForDays, isBrandedQuery, normalizeSiteUrl, parseBrandTerms, summaryMetrics, toCsv } from "./utils.mjs"

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
