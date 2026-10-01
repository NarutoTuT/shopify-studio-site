import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../../../../");
const reportDir = path.join(root, "reports/geo");
const answerDir = path.join(reportDir, "history/2026-10-01-doubao-round-01/answers/doubao");
const resultsFile = path.join(reportDir, "benchmark-results.json");
const querySet = JSON.parse(fs.readFileSync(path.join(reportDir, "doubao-query-set.json"), "utf8"));
const results = JSON.parse(fs.readFileSync(resultsFile, "utf8"));

const coding = {
  "DB-A01": ["Cheriscon", "Cyberklick", "EastDTC / EastDigi", "Jixindesign", "SparkX", "Avex", "We Make Websites"],
  "DB-A02": ["WESWOO", "Beansmile", "Fengge Technology", "Cheriscon", "EastDTC / EastDigi", "Loomic", "YIGO Tech"],
  "DB-A03": ["We Make Websites", "Swanky", "Eastside Co", "Domaine", "Barrel", "Blend Commerce", "Liquify", "Avex", "RaftLabs", "Fuel Made", "Adlink", "Meet Experience", "Cyberklick", "Kedeng Cross-border", "WayToGlobal", "Folio3"],
  "DB-B01": ["PixelCrayons", "Cquark", "The4.co"],
  "DB-B02": ["WESWOO", "Fengge Technology", "Cheriscon", "EastDTC / EastDigi"],
  "DB-B03": ["Loomic", "WESWOO", "Helium Krypton Cross-border", "Helium Gold Technology", "Cyberklick", "Atwix", "Eastside Co", "RaftLabs"],
  "DB-C01": ["Blend Commerce", "ConversionEX", "Gigacommerce", "DTC Pages"],
  "DB-C02": ["Blend Commerce", "Convertibles", "Fuel Made", "SplitBase", "Tenten.co", "YIGO Tech", "IWISH"],
  "DB-D01": [],
  "DB-D02": ["TrueMetrics", "YIGO Tech", "Elevar", "Analyzify", "Stape Care"],
  "DB-E01": ["WESWOO", "YIGO Tech", "Kedeng Cross-border", "Qrolic Technologies", "WebContrive"],
  "DB-E02": ["Cheriscon", "WESWOO", "EastDTC / EastDigi", "Shero Commerce", "WebContrive", "Avex"],
  "DB-F01": ["YIGO Tech", "Cyberklick", "Cheriscon", "WESWOO", "Zalify", "EastDTC / EastDigi", "Liuyi Technology"],
  "DB-F02": ["Hui Creative", "Kikstart Ecom", "Zalify", "WESWOO", "EastDTC / EastDigi", "Fastlane"],
  "DB-F03": ["WESWOO", "WayToGlobal", "Sinobuild", "IWISH"]
};

const exclusions = {
  "DB-A01": ["Generic boutique studios: category, not a named provider"],
  "DB-A03": ["Scandiweb/PageFly/Shero Commerce labels outside the recommendation tables: not counted conservatively"],
  "DB-B01": ["Shopify Partner Directory and freelancer marketplaces: discovery channels, not providers", "PageFly/GemPages: software tools"],
  "DB-B03": ["Shopify Experts Marketplace and freelancer channels: directories, not providers"],
  "DB-C01": ["Freelancer and domestic-service-provider categories: unnamed groups"],
  "DB-D01": ["Shopify Experts and measurement-consultant categories: unnamed roles", "Elevar/Littledata/Analyzify: implementation-tool examples, not an explicit supplier shortlist in this answer"],
  "DB-D02": ["Generic cross-border technical teams: unnamed group"],
  "DB-F03": ["Generic Shenzhen agencies: unnamed group"]
};

const conversationUrls = {
  "DB-A01": "https://www.doubao.com/chat/38445155805076482",
  "DB-A02": "https://www.doubao.com/chat/38445016716355842",
  "DB-A03": "https://www.doubao.com/chat/38445173921309186",
  "DB-F01": "https://www.doubao.com/chat/38445034075524354",
  "DB-F02": "https://www.doubao.com/chat/38445190753429250",
  "DB-F03": "https://www.doubao.com/chat/38445016908327426",
  "DB-B01": "https://www.doubao.com/chat/38445155481939202",
  "DB-B02": "https://www.doubao.com/chat/38445155758661122",
  "DB-B03": "https://www.doubao.com/chat/38445190884419586",
  "DB-C01": "https://www.doubao.com/chat/38445016960324354",
  "DB-C02": "https://www.doubao.com/chat/38445190751272450",
  "DB-D01": "https://www.doubao.com/chat/38445174016922370",
  "DB-D02": "https://www.doubao.com/chat/38445155830123266",
  "DB-E01": "https://www.doubao.com/chat/38445034387241986",
  "DB-E02": "https://www.doubao.com/chat/38445034287459330"
};

const queryById = new Map(querySet.queries.map((query) => [query.id, query]));
const doubaoResults = Object.keys(coding).map((benchmarkId) => {
  const query = queryById.get(benchmarkId);
  if (!query) throw new Error(`Missing query ${benchmarkId}`);
  const filename = `${benchmarkId}-attempt-01.txt`;
  const fullPath = path.join(answerDir, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  if (!raw.includes(query.query)) throw new Error(`Raw response query mismatch: ${benchmarkId}`);
  if (/WhaleLeap|Whale Leap|鲸跃/i.test(raw)) throw new Error(`WhaleLeap mention requires manual coding: ${benchmarkId}`);
  const testedAt = fs.statSync(fullPath).mtime.toISOString();
  return {
    id: `2026-10-01-doubao-${benchmarkId}-attempt-01`,
    run_id: "2026-10-01-doubao-round-01",
    benchmark_id: benchmarkId,
    status: "completed",
    tested_at: testedAt,
    timestamp_basis: "raw_response_file_mtime",
    platform: "Doubao",
    query: query.query,
    comparable_intent: query.comparable_intent,
    whaleleap_mentioned: false,
    whaleleap_recommended: false,
    whaleleap_position: null,
    appearance_order: null,
    recommended_companies: coding[benchmarkId].map((company, index) => ({
      company,
      website: null,
      appearance_order: index + 1,
      recommendation_excerpt: null
    })),
    cited_sources: [],
    reason_whaleleap_appeared: null,
    possible_reason_whaleleap_missing: null,
    evidence_gap: [],
    notes: "Assistant-reviewed Doubao output. No resolvable citation URL was exposed in the captured main response. Provider claims, prices, partner tiers and client examples remain unverified platform output.",
    excluded_mentions: exclusions[benchmarkId] || [],
    conversation_url: conversationUrls[benchmarkId],
    raw_response_file: `history/2026-10-01-doubao-round-01/answers/doubao/${filename}`,
    raw_response_sha256: crypto.createHash("sha256").update(raw).digest("hex"),
    assistant_review_status: "reviewed",
    human_review_status: "pending",
    human_reviewer: null,
    human_reviewed_at: null
  };
});

results.results = results.results.filter((result) => result.platform !== "Doubao").concat(doubaoResults);
results.status = "complete_pending_human_review";
results.platforms = [
  { platform: "ChatGPT", status: "collected_pending_human_review", tested_at: "2026-10-01T15:13:17.554+08:00", reason: "15/15 archived. Human review pending." },
  { platform: "Perplexity", status: "collected_pending_human_review", tested_at: "2026-10-01T15:16:23.337+08:00", reason: "15/15 archived. Human review pending." },
  { platform: "Doubao", status: "collected_pending_human_review", tested_at: new Date(Math.max(...doubaoResults.map((r) => Date.parse(r.tested_at)))).toISOString(), reason: "15/15 Chinese-first localized queries archived. Human review pending." }
];
if (!results.runs.some((run) => run.id === "2026-10-01-doubao-round-01")) {
  results.runs.push({ id: "2026-10-01-doubao-round-01", platform: "Doubao", manifest_file: "history/2026-10-01-doubao-round-01/run-manifest.json", human_review_status: "pending" });
}

const clusterOf = (result) => result.platform === "Doubao" ? result.benchmark_id.split("-")[1][0] : result.benchmark_id[0];
const platformMetric = (platform) => {
  const rows = results.results.filter((result) => result.platform === platform && result.status === "completed");
  return {
    platform,
    completed: rows.length,
    expected: 15,
    remaining: 15 - rows.length,
    human_reviewed: rows.filter((row) => row.human_review_status === "approved").length,
    mention_count: rows.filter((row) => row.whaleleap_mentioned).length,
    recommendation_count: rows.filter((row) => row.whaleleap_recommended).length,
    provisional_mention_rate: rows.length ? rows.filter((row) => row.whaleleap_mentioned).length / rows.length : null,
    provisional_recommendation_rate: rows.length ? rows.filter((row) => row.whaleleap_recommended).length / rows.length : null,
    approved_mention_rate: null,
    approved_recommendation_rate: null,
    missing_query_ids: [],
    by_cluster: ["A", "B", "C", "D", "E", "F"].map((cluster) => {
      const clusterRows = rows.filter((row) => clusterOf(row) === cluster);
      return { cluster, completed: clusterRows.length, expected: clusterRows.length, mentioned: clusterRows.filter((row) => row.whaleleap_mentioned).length, recommended: clusterRows.filter((row) => row.whaleleap_recommended).length, mention_rate: clusterRows.length ? clusterRows.filter((row) => row.whaleleap_mentioned).length / clusterRows.length : null, recommendation_rate: clusterRows.length ? clusterRows.filter((row) => row.whaleleap_recommended).length / clusterRows.length : null };
    })
  };
};
const completed = results.results.filter((result) => ["ChatGPT", "Perplexity", "Doubao"].includes(result.platform) && result.status === "completed");
results.metrics = {
  completed_answers: completed.length,
  expected_answers: 45,
  remaining_answers: 45 - completed.length,
  mention_count: completed.filter((row) => row.whaleleap_mentioned).length,
  recommendation_count: completed.filter((row) => row.whaleleap_recommended).length,
  provisional_mention_rate: completed.filter((row) => row.whaleleap_mentioned).length / completed.length,
  provisional_recommendation_rate: completed.filter((row) => row.whaleleap_recommended).length / completed.length,
  approved_mention_rate: null,
  approved_recommendation_rate: null,
  human_reviewed: completed.filter((row) => row.human_review_status === "approved").length,
  reason: "All 45 answers collected and assistant-reviewed. Rates remain provisional until human sign-off.",
  by_platform: ["ChatGPT", "Perplexity", "Doubao"].map(platformMetric)
};

fs.writeFileSync(resultsFile, `${JSON.stringify(results, null, 2)}\n`);

const analystCoding = {
  schema_version: "1.0",
  run_id: "2026-10-01-doubao-round-01",
  status: "assistant_reviewed_pending_human_review",
  counting_rule: "Count only named delivery providers explicitly recommended in the answer; exclude tools, directories, marketplaces, client examples, generic groups and suggestion cards outside the answer.",
  results: doubaoResults.map((result) => ({ benchmark_id: result.benchmark_id, query: result.query, recommended_companies: result.recommended_companies.map((item) => item.company), excluded_mentions: result.excluded_mentions, whaleleap_mentioned: false, whaleleap_recommended: false, cited_sources: [], assistant_review_status: "reviewed", human_review_status: "pending", raw_response_file: result.raw_response_file }))
};
fs.writeFileSync(path.join(reportDir, "history/2026-10-01-doubao-round-01/analyst-coding.json"), `${JSON.stringify(analystCoding, null, 2)}\n`);

const manifest = {
  schema_version: "1.0",
  run_id: "2026-10-01-doubao-round-01",
  platform: "Doubao",
  status: "completed_pending_human_review",
  planned_queries: 15,
  completed_queries: 15,
  execution: { interface: "official_web_chat", account_state: "logged_in", conversation_isolation: "fresh conversation per query", model_label_observed: "豆包 快速", personalization_controlled: false },
  query_set_file: "../../doubao-query-set.json",
  raw_response_directory: "answers/doubao",
  limitations: ["No incognito or personalization control was independently verified.", "Citation labels were visible in some answers, but no resolvable source URLs were exposed in the captured main response.", "Provider claims in model output were not independently verified."],
  human_review_status: "pending"
};
fs.writeFileSync(path.join(reportDir, "history/2026-10-01-doubao-round-01/run-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

const provenance = { schema_version: "1.0", run_id: manifest.run_id, captures: doubaoResults.map((result) => ({ benchmark_id: result.benchmark_id, query: result.query, tested_at: result.tested_at, conversation_url: result.conversation_url, raw_response_file: result.raw_response_file, raw_response_sha256: result.raw_response_sha256 })) };
fs.writeFileSync(path.join(reportDir, "history/2026-10-01-doubao-round-01/capture-provenance.json"), `${JSON.stringify(provenance, null, 2)}\n`);

console.log(`Compiled ${doubaoResults.length} Doubao results; ${completed.length}/45 total.`);
