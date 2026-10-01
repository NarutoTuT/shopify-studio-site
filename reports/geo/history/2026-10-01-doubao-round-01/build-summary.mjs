import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../../../../");
const reportDir = path.join(root, "reports/geo");
const benchmark = JSON.parse(fs.readFileSync(path.join(reportDir, "benchmark-results.json"), "utf8"));
const platforms = ["ChatGPT", "Perplexity", "Doubao"];
const aliases = new Map([
  ["eastdtc / eastdigi", "EastDTC / EastDigi"], ["eastdtc", "EastDTC / EastDigi"], ["eastdigi", "EastDTC / EastDigi"],
  ["翼果科技", "YIGO Tech"], ["yiguotech", "YIGO Tech"], ["yigo tech", "YIGO Tech"],
  ["cheriscon", "Cheriscon"], ["创意时空", "Cheriscon"],
  ["weswoo", "WESWOO"], ["西西木", "WESWOO"],
  ["avex design", "Avex"], ["avex", "Avex"],
  ["dtc-pages", "DTC Pages"], ["dtc pages", "DTC Pages"],
  ["shero", "Shero Commerce"], ["shero commerce", "Shero Commerce"]
]);
const canonical = (name) => aliases.get(name.toLowerCase()) || name;
const rows = benchmark.results.filter((result) => platforms.includes(result.platform) && result.status === "completed");
const companyMap = new Map();
for (const result of rows) {
  for (const item of result.recommended_companies || []) {
    const company = canonical(item.company);
    const key = `${result.platform}\0${company}`;
    const value = companyMap.get(key) || { platform: result.platform, company, appearance_count: 0, recommended_count: 0, query_clusters: new Set(), result_ids: [] };
    value.appearance_count += 1;
    value.recommended_count += 1;
    value.query_clusters.add(result.platform === "Doubao" ? result.benchmark_id.split("-")[1][0] : result.benchmark_id[0]);
    value.result_ids.push(result.id);
    companyMap.set(key, value);
  }
}
const companies = [...companyMap.values()].map((item) => ({ ...item, query_clusters: [...item.query_clusters].sort(), evidence: [], independent_endorsement: null })).sort((a, b) => platforms.indexOf(a.platform) - platforms.indexOf(b.platform) || b.appearance_count - a.appearance_count || a.company.localeCompare(b.company));
const crossMap = new Map();
for (const item of companies) {
  const value = crossMap.get(item.company) || { company: item.company, platforms: [], total_recommended_answers: 0, by_platform: {} };
  value.platforms.push(item.platform);
  value.total_recommended_answers += item.recommended_count;
  value.by_platform[item.platform] = item.recommended_count;
  crossMap.set(item.company, value);
}
const crossPlatform = [...crossMap.values()].filter((item) => item.platforms.length >= 2).sort((a, b) => b.platforms.length - a.platforms.length || b.total_recommended_answers - a.total_recommended_answers || a.company.localeCompare(b.company));
const output = {
  schema_version: "1.1",
  status: "assistant_coded_pending_human_review",
  counting_rule: "Once per archived answer and platform. Obvious display-name aliases are normalized provisionally. Only named recommended delivery providers are counted; directories, marketplaces, software, clients and generic categories are excluded.",
  companies,
  repeated_by_platform: Object.fromEntries(platforms.map((platform) => [platform, companies.filter((item) => item.platform === platform && item.recommended_count > 1)])),
  cross_platform_competitors: crossPlatform,
  all_three_platforms: crossPlatform.filter((item) => item.platforms.length === 3).map((item) => item.company),
  human_review_status: "pending"
};
fs.writeFileSync(path.join(reportDir, "competitors.json"), `${JSON.stringify(output, null, 2)}\n`);
fs.writeFileSync(path.join(reportDir, "history/2026-10-01-doubao-round-01/statistics.json"), `${JSON.stringify({ generated_at: new Date().toISOString(), metrics: benchmark.metrics, repeated_by_platform: output.repeated_by_platform, cross_platform_competitors: crossPlatform, all_three_platforms: output.all_three_platforms }, null, 2)}\n`);
console.log(JSON.stringify({ repeated: Object.fromEntries(platforms.map((p) => [p, output.repeated_by_platform[p].slice(0, 8).map((x) => [x.company, x.recommended_count])])), cross_platform: crossPlatform.slice(0, 20), all_three: output.all_three_platforms }, null, 2));
