import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const reportRoot = new URL("../../reports/geo/", import.meta.url);
const files = ["benchmark-queries", "doubao-query-set", "platform-replacement", "benchmark-results", "public-evidence-map", "geo-scorecard", "recommendation-gaps", "competitors"];
const platforms = ["ChatGPT", "Perplexity", "Doubao"];
const dimensions = ["commercial_intent", "whaleleap_fit", "recommendation_intent", "evidence_readiness"];

export async function loadReports(root = reportRoot) {
  const reports = {};
  for (const name of files) {
    reports[name] = JSON.parse(await readFile(new URL(`${name}.json`, root), "utf8"));
  }
  return reports;
}

export function validateReports(reports) {
  const queries = reports["benchmark-queries"];
  const evidence = reports["public-evidence-map"];
  const score = reports["geo-scorecard"];
  const results = reports["benchmark-results"];
  const doubao = reports["doubao-query-set"];
  const replacement = reports["platform-replacement"];
  const gaps = reports["recommendation-gaps"];
  const ids = new Set(queries.queries.map(q => q.id));
  const doubaoIds = new Set(doubao.queries.map(q => q.id));
  const evidenceIds = new Set(evidence.items.map(e => e.id));
  const sourceIds = new Set(evidence.sources.map(s => s.id));
  const validRefs = record => {
    assert(Array.isArray(record.evidence_ids), "Missing evidence references");
    for (const id of record.evidence_ids) assert(evidenceIds.has(id), `Unknown evidence ${id}`);
  };
  assert.equal(queries.queries.length, 30);
  assert.equal(doubao.platform, "Doubao");
  assert.equal(doubao.queries.length, 15);
  assert.equal(doubaoIds.size, 15, "Duplicate Doubao query IDs");
  assert.deepEqual(replacement.benchmark_platforms, platforms);
  assert.equal(replacement.total_expected_answers, 45);
  assert(replacement.replacements.some(r => r.platform === "Gemini" && r.status === "unavailable" && r.reason === "repeated_timeout" && r.replacement_platform === "Doubao" && r.historical_records_preserved === true && r.results_relabelled === false));
  for (const q of doubao.queries) {
    assert(q.query.trim() && !/whale\s*leap/i.test(q.query), "No brand priming in Doubao prompts");
    assert(Object.hasOwn(queries.clusters, q.cluster));
    assert(q.comparable_intent && Array.isArray(q.comparable_to) && q.comparable_to.length);
    for (const id of q.comparable_to) assert(ids.has(id), `Unknown comparable query ${id}`);
  }
  assert.equal(ids.size, 30, "Duplicate query IDs");
  for (const q of queries.queries) {
    assert(["zh", "en"].includes(q.language));
    assert(["broad", "mid_specific", "highly_specific"].includes(q.specificity));
    assert(Object.hasOwn(queries.clusters, q.cluster));
    assert(q.query.trim() && !/whale\s*leap/i.test(q.query), "No brand priming in prompts");
    assert(["BENCHMARK", "RESERVE"].includes(q.priority));
    for (const key of dimensions) {
      assert(Number.isInteger(q[key]) && q[key] >= 1 && q[key] <= 5, `Invalid ${key}`);
      assert(q.score_reasons[key]?.trim(), `Missing rationale for ${q.id}.${key}`);
    }
    assert.equal(q.priority_score, q.commercial_intent + q.whaleleap_fit + q.recommendation_intent);
    validRefs(q);
  }
  for (const cluster of Object.keys(queries.clusters)) {
    assert.equal(queries.queries.filter(q => q.cluster === cluster).length, 5);
  }
  const selected = queries.selection.top_15_ids.map(id => queries.queries.find(q => q.id === id));
  assert.equal(selected.length, 15);
  assert.equal(new Set(queries.selection.top_15_ids).size, 15);
  assert(selected.every(Boolean), "Unknown selected query");
  assert.equal(queries.queries.filter(q => q.priority === "BENCHMARK").length, 15);
  selected.forEach((q, i) => {
    assert.equal(q.priority, "BENCHMARK");
    assert.equal(q.selection_order, i + 1);
  });
  for (const q of queries.queries.filter(q => q.priority === "RESERVE")) assert.equal(q.selection_order, null);
  for (const specificity of ["broad", "mid_specific", "highly_specific"]) {
    assert.equal(selected.filter(q => q.specificity === specificity).length, 5);
  }
  for (const cluster of Object.keys(queries.clusters)) {
    const count = selected.filter(q => q.cluster === cluster).length;
    assert(count >= 2 && count <= 3);
  }
  assert(selected.filter(q => q.language === "en").length >= 5);
  for (const item of evidence.items) {
    assert(["STRONG", "MEDIUM", "WEAK", "MISSING"].includes(item.evidence_strength));
    for (const id of item.source_ids) assert(sourceIds.has(id));
  }
  assert.equal(score.dimensions.length, 10);
  assert.equal(new Set(score.dimensions.map(d => d.id)).size, 10);
  for (const d of score.dimensions) {
    assert(Number.isInteger(d.score) && d.score >= 0 && d.score <= 5);
    assert(d.rationale && d.change_reason);
    validRefs(d);
  }
  assert.equal(score.total, score.dimensions.reduce((sum, d) => sum + d.score, 0));
  assert.equal(score.max, 50);
  for (const gap of gaps.gaps) {
    assert(gaps.allowed_gap_types.includes(gap.gap_type));
    validRefs(gap);
  }
  assert.deepEqual(results.platforms.map(p => p.platform), platforms);
  assert.equal(results.benchmark_version, queries.benchmark_version);
  // Untested platforms belong in coverage metadata, never synthetic answer rows.
  const resultIds = new Set();
  for (const r of results.results) {
    assert(r.id && !resultIds.has(r.id), "Missing or duplicate result ID");
    resultIds.add(r.id);
    assert.equal(r.status, "completed");
    assert(platforms.includes(r.platform));
    const source = r.platform === "Doubao" ? doubao.queries.find(q => q.id === r.benchmark_id) : queries.queries.find(q => q.id === r.benchmark_id);
    assert(source, `Unknown query ${r.benchmark_id} for ${r.platform}`);
    assert.equal(r.query, source.query);
    assert(r.tested_at && Number.isFinite(Date.parse(r.tested_at)), "Actual timestamp required");
    assert(r.raw_response_file && r.run_id, "Raw answer and run provenance required");
    assert(results.runs.some(run => run.id === r.run_id && run.platform === r.platform), "Unknown run");
    assert.equal(typeof r.whaleleap_mentioned, "boolean");
    assert.equal(typeof r.whaleleap_recommended, "boolean");
    assert(!r.whaleleap_recommended || r.whaleleap_mentioned);
    assert(r.whaleleap_position === null || (r.whaleleap_mentioned && Number.isInteger(r.whaleleap_position) && r.whaleleap_position > 0));
    assert(Array.isArray(r.recommended_companies) && Array.isArray(r.cited_sources) && Array.isArray(r.evidence_gap));
  }
  if (results.results.length === 0) {
    assert.equal(results.status, "not_tested");
    assert(results.platforms.every(p => p.status === "not_tested" && p.tested_at === null));
    assert.equal(results.metrics.mention_rate, null);
    assert.equal(results.metrics.recommendation_rate, null);
    assert.equal(results.metrics.completed_answers, 0);
    assert.equal(reports.competitors.companies.length, 0);
  }
  return selected;
}

export function renderManual(reports) {
  const selected = validateReports(reports);
  const doubao = reports["doubao-query-set"].queries;
  const sections = selected.map((q, index) => `## ${index + 1}. ${q.id} | ${q.cluster} | ${q.language} | ${q.specificity}

${q.query}

Scores C/F/R/E: ${q.commercial_intent}/${q.whaleleap_fit}/${q.recommendation_intent}/${q.evidence_readiness}; selection score: ${q.priority_score}/15.

- [ ] ChatGPT: not_tested
- [ ] Perplexity: not_tested
- [ ] Doubao ${doubao[index].id}: not_tested — ${doubao[index].query}
`);
  return `# WhaleLeap Manual AI Recommendation Benchmark

Version: ${reports["benchmark-queries"].benchmark_version}
Evidence baseline: ${reports["benchmark-queries"].baseline_date}
Status: pending human confirmation; no platform answers collected.

This is a generated blank worksheet, NOT a result report. This command makes no network requests.
Re-running replaces this worksheet only. Save answers and completion records in history, never in this generated file.
Approve the TOP 15 before starting. See README.md for scoring, result fields and interpretation rules.

## Human Protocol

1. Create a dated run folder under history with a unique run ID; record platform, visible model/mode, search setting, account tier, region, UI language, memory/personalization state and actual time with timezone. Use null when unknown.
2. For EACH prompt open a fresh conversation, disable memory/personalization where possible, and keep web-search mode fixed. Do not reuse this WhaleLeap-primed chat or paste evidence/brand names. Do not auto-submit prompts.
3. Copy only the exact question below. Capture the first complete answer, including no-provider answers or requests for clarification. No selective retries or follow-up nudges. Log tool errors separately, not as negative mentions.
4. Save the full answer and its actual source links in history. Redact account identifiers/private data before committing. Preserve enough context to distinguish recommendation, neutral mention and warning.
5. Human-code completed answers into benchmark-results.json with raw-response provenance. Coverage metadata stays not_tested for anything not run. Empty templates never become result rows.
6. Compare like-for-like platform/model/search/version and the same completed query IDs. Report coverage beside rates. No pooled platform ranking; no single-round trend. Read history/README.md before archiving.

Score key: C commercial intent; F capability fit; R provider recommendation intent; E current public evidence readiness.
Worksheet order is not a market ranking or probability estimate. All 45 platform/question cells remain untested initially.

${sections.join("\n")}
## Stop

No automatic calls, outreach, content publication, backlink generation or website changes.
Confirm this initial set and evidence baseline before running the first manual round.
`;
}

export async function generateManual(root = reportRoot) {
  const reports = await loadReports(root);
  const content = renderManual(reports);
  await writeFile(new URL("manual-benchmark.md", root), content, "utf8");
  return content;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await generateManual();
  console.log(`Validated 30 queries / 15 benchmark questions. Manual worksheet: ${fileURLToPath(new URL("manual-benchmark.md", reportRoot))}`);
  console.log("Offline only. No platform calls, result mutations or website changes.");
}
