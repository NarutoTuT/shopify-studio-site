import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { loadReports, validateReports, renderManual, generateManual } from "./benchmark.mjs";

const initial = await loadReports();
test("30 queries, stratified 15, linked public evidence and honest baseline", () => {
  assert.equal(validateReports(initial).length, 15);
  assert.equal(initial["geo-scorecard"].total, 27);
  assert.equal(initial["benchmark-results"].metrics.completed_answers, initial["benchmark-results"].results.length);
});

for (const [name, mutate] of [
  ["duplicate query", r => { r["benchmark-queries"].queries[1].id = "A01"; }],
  ["missing score", r => { delete r["benchmark-queries"].queries[0].evidence_readiness; }],
  ["invalid score", r => { r["benchmark-queries"].queries[0].whaleleap_fit = 6; }],
  ["unknown evidence", r => { r["benchmark-queries"].queries[0].evidence_ids.push("invented"); }],
  ["brand-primed prompt", r => { r["benchmark-queries"].queries[0].query = "Recommend WhaleLeap"; }],
  ["bad score total", r => { r["geo-scorecard"].total = 50; }],
  ["untested is not zero percent", r => {
    const results = r["benchmark-results"];
    results.status = "not_tested";
    results.results = [];
    results.runs = [];
    results.platforms = results.platforms.map(p => ({...p, status: "not_tested", tested_at: null}));
    results.metrics.completed_answers = 0;
    results.metrics.recommendation_rate = null;
    results.metrics.mention_rate = 0;
    r.competitors.companies = [];
  }],
  ["synthetic result", r => { r["benchmark-results"].results.push({status: "not_tested"}); }],
]) {
  test(`reject ${name}`, () => {
    const reports = structuredClone(initial);
    mutate(reports);
    assert.throws(() => validateReports(reports));
  });
}

test("deterministic worksheet has 45 cells, preserves core prompts and includes localized Doubao prompts", () => {
  const text = renderManual(initial);
  assert.equal((text.match(/- \[ \] (ChatGPT|Perplexity|Doubao(?: DB-[A-F]\d{2})?): not_tested/g) || []).length, 45);
  for (const q of validateReports(initial)) assert(text.includes(q.query));
  for (const q of initial["doubao-query-set"].queries) assert(text.includes(q.query));
  assert(!text.includes("[ ] Gemini: not_tested"));
  assert.equal(text, renderManual(initial));
});

test("generator is offline, idempotent and preserves every JSON input", async () => {
  const dir = await mkdtemp(join(tmpdir(), "whaleleap-geo-"));
  const root = pathToFileURL(`${dir}/`);
  const fetchBefore = globalThis.fetch;
  globalThis.fetch = () => { throw new Error("Network must not be called"); };
  try {
    for (const [name, data] of Object.entries(initial)) await writeFile(new URL(`${name}.json`, root), JSON.stringify(data));
    const first = await generateManual(root);
    assert.equal(await generateManual(root), first);
    for (const [name, data] of Object.entries(initial)) {
      assert.equal(await readFile(new URL(`${name}.json`, root), "utf8"), JSON.stringify(data));
    }
  } finally {
    globalThis.fetch = fetchBefore;
    await rm(dir, { recursive: true, force: true });
  }
});
