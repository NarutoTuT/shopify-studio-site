import assert from "node:assert/strict";
import { readFile, writeFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";

const here = new URL("./", import.meta.url);
const geo = new URL("../../", here);
const read = async (base, file) => JSON.parse(await readFile(new URL(file, base), "utf8"));
const write = (base, file, data) => writeFile(new URL(file, base), JSON.stringify(data, null, 2) + "\n");
const captures = await read(here, "captures.json");
const coding = await read(here, "analyst-coding.json");
const resumed = await read(here, "resumed-capture-provenance.json");
const queries = await read(geo, "benchmark-queries.json");
const baseline = await read(here, "baseline/benchmark-queries.json");
assert.deepEqual(queries, baseline, "Frozen queries must not change");
const results = await read(geo, "benchmark-results.json");
const stamp = date => new Date(new Date(date).getTime() + 8 * 3600000).toISOString().replace("Z", "+08:00");
const finishedAt = stamp(new Date());
const hash = raw => createHash("sha256").update(raw).digest("hex");
const queryFor = id => queries.queries.find(q => q.id === id);
const normalize = url => {
  const parsed = new URL(url);
  for (const key of [...parsed.searchParams.keys()]) {
    if (key.startsWith("utm_") || key === "_cf_worker_selection") parsed.searchParams.delete(key);
  }
  parsed.hash = "";
  return parsed.href;
};
const sourceType = url => {
  const {hostname, pathname} = new URL(url);
  if (hostname.endsWith("shopify.com") && pathname.includes("/partners/directory")) return "platform_directory";
  if (hostname.endsWith("shopify.com")) return "platform_official_guidance";
  if (hostname.endsWith("trustpilot.com")) return "review_platform";
  if (hostname === "flux.agency") return "provider_owned_comparison";
  return "provider_owned_page";
};

for (const row of coding.rows) {
  const capture = captures.find(c => c.platform === row.platform && c.id === row.query_id && c.attempt === row.attempt);
  assert(capture || row.native_file, `Missing capture ${row.query_id}`);
  const relative = row.native_file || `answers/${row.platform.toLowerCase()}/${row.query_id}-attempt-${String(row.attempt).padStart(2, "0")}.md`;
  const raw = await readFile(new URL(relative, here), "utf8");
  assert(raw.length > 500 && !/whale\s*leap/i.test(raw), "Absence coding requires an inspected nonempty original");
  const capturedAt = capture?.captured_at || (await stat(new URL(relative, here))).mtime.toISOString();
  let links = capture?.links || row.cited_links;
  if (!links) {
    const urls = [...raw.matchAll(/https:\/\/[^\s,]+/g)].map(m => m[0]);
    // Native accessibility values omit the scheme for the Perplexity inline links.
    if (row.native_url_values) {
      urls.push(...[...raw.matchAll(/Value: ((?:[a-z0-9-]+\.)+[a-z]{2,}\/[^\s,]+)/gi)].map(m => `https://${m[1]}`));
    } else if (row.platform === "Perplexity") {
      urls.push(...[...raw.matchAll(/Value: (shopify\.com\/[^\s,]+)/g)].map(m => `https://www.${m[1]}`));
    }
    links = [...new Set(urls)].map(url => ({url, title: null}));
  }
  const seenSources = new Set();
  const cited = links.filter(link => {
    if (new URL(link.url).hostname.endsWith("mapbox.com")) return false;
    const canonical = normalize(link.url);
    if (seenSources.has(canonical)) return false;
    seenSources.add(canonical);
    return true;
  }).map(link => ({
    url: link.url, normalized_url: normalize(link.url), title: link.title,
    source_type: row.source_overrides?.[new URL(link.url).hostname] || sourceType(link.url), classification_basis: "Displayed URL and citation label; destination content not independently audited in this run",
    cited_for: "Supplier capability or selection guidance; refer to the original answer for exact context",
    independently_supports_whaleleap: null
  }));
  const id = `2026-10-01-${row.platform.toLowerCase()}-${row.query_id}-attempt-${String(row.attempt).padStart(2, "0")}`;
  const result = {
    id, run_id: `2026-10-01-continuation-${row.platform.toLowerCase()}`, benchmark_id: row.query_id,
    status: "completed", tested_at: stamp(capturedAt), timestamp_basis: "completed_response_capture",
    platform: row.platform, query: queryFor(row.query_id).query, whaleleap_mentioned: false,
    whaleleap_recommended: false, whaleleap_position: null, appearance_order: null,
    recommended_companies: row.companies.map(([company, appearance_order, recommendation_excerpt]) => ({company, website: null, appearance_order, recommendation_excerpt})),
    excluded_mentions: row.exclusions, cited_sources: cited, reason_whaleleap_appeared: null,
    possible_reason_whaleleap_missing: null, evidence_gap: [], notes: row.note,
    raw_response_file: `history/2026-10-01-benchmark-continuation/${relative}`, raw_response_sha256: hash(raw),
    capture_format: row.native_file ? "native_accessibility_tree" : "rendered_DOM_text_with_inline_links",
    citation_completeness: "visible_inline_only; collapsed grouped citations not expanded; not all retrieved sources are citations",
    assistant_review_status: "reviewed", human_review_status: "pending", human_reviewer: null, human_reviewed_at: null
  };
  const existing = results.results.findIndex(r => r.id === id);
  if (existing >= 0) assert.deepEqual(results.results[existing], result, "Do not overwrite an archived result");
  else results.results.push(result);
}

// Preserve the previous B01 answer and record a second, assistant-only coding pass.
const first = results.results.find(r => r.benchmark_id === "B01" && r.platform === "ChatGPT");
assert(first);
first.appearance_order = first.whaleleap_position;
first.assistant_review_status = "reviewed";
first.human_review_status = "pending";
first.human_reviewer = null;
first.human_reviewed_at = null;
first.excluded_mentions = ["MarkupFox: price comparison example, not a shortlist recommendation", "PageFly / GemPages: page-builder tools"];
first.raw_response_sha256 = hash(await readFile(new URL(first.raw_response_file, geo), "utf8"));
for (const source of first.cited_sources) {
  source.normalized_url = normalize(source.url);
  source.source_type = sourceType(source.url);
  source.classification_basis = "Displayed URL and answer context; not an independent content audit";
}

const platformNames = ["ChatGPT", "Gemini", "Perplexity"];
const runIds = Object.fromEntries(platformNames.map(p => [p, `2026-10-01-continuation-${p.toLowerCase()}`]));
const extraAttempts = {
  ChatGPT: [
    {query_id:"A01",attempt:1,status:"capture_failed",notes:"Response completed; stale clipboard detected and discarded. Separate retry retained, never represented as the original.",evidence_file:"answers/chatgpt/A01-attempt-01.md"},
    {query_id:"D02",attempt:1,status:"interrupted_unarchived",notes:"Question submission observed; control connection failed before a complete answer could be archived. Not counted. Do not silently re-use attempt 1."}
  ],
  Perplexity: [{query_id:"A01",attempt:1,status:"authentication_required",notes:"Returned 注册并重复您的请求 and sign-in modal. Excluded from all answer denominators."}],
  Gemini: [{query_id:null,attempt:1,status:"access_failed",notes:"Official app URL ERR_TIMED_OUT"},{query_id:null,attempt:2,status:"access_failed",notes:"Fresh-tab retry ERR_TIMED_OUT",evidence_file:"gemini-access-failure.png"},{query_id:null,attempt:3,status:"access_failed",notes:"User-authorized continuation: new official app tab again displayed ERR_TIMED_OUT; no query submitted."}]
};
for (const platform of platformNames) {
  const rows = results.results.filter(r => r.platform === platform);
  const current = rows.filter(r => r.run_id === runIds[platform]);
  const manifest = {
    id: runIds[platform], benchmark_version: queries.benchmark_version, platform,
    status: rows.length === 15 ? "collected_pending_human_review" : "partial_blocked_pending_human_review", model: null,
    reasoning_effort: null,
    product_surface: `${platform} consumer web in Chrome`,
    search_mode: platform === "Perplexity" ? "Search; free Pro preview displayed on some cells, not independently observed on every resumed cell" : null,
    account_tier: platform === "Perplexity" ? "free" : null, region: null, ui_language:"zh-CN",
    memory_state: platform === "ChatGPT" ? "disabled_for_each_temporary_chat" : null,
    personalization_state: platform === "ChatGPT" ? "non_personalized_each_chat" : platform === "Perplexity" ? "incognito; account profile influence not independently verifiable" : null,
    started_at: platform === "ChatGPT" ? "2026-10-01T14:40:24+08:00" : null,
    finished_at: finishedAt, query_ids: current.map(r => r.benchmark_id),
    attempts: [...extraAttempts[platform], ...current.map(r => ({query_id:r.benchmark_id,attempt:Number(r.id.slice(-2)),status:"completed",captured_at:r.tested_at,raw_response_file:r.raw_response_file}))],
    settings_notes: "Exact frozen query only. No brand, source URL or role hints. First complete available answer retained, except explicitly logged technical failures. No regeneration to improve mentions. Initial ChatGPT segment showed Medium; resumed segment model/effort selector not inspected. Do not assume a model identity or IP region. AX captures exclude account and sidebar content.",
    blocker: platform === "Gemini" ? "Repeated official app access timeout; user notified" : rows.length === 15 ? null : "Collection incomplete",
    human_review_status:"pending", coverage:{completed:rows.length,expected:15,remaining:15-rows.length},
    resumed_capture_provenance_file:"resumed-capture-provenance.json",
    frozen_query_sha256:hash(await readFile(new URL("benchmark-queries.json",geo),"utf8"))
  };
  const name = `run-manifest-${platform.toLowerCase()}.json`;
  await write(here, name, manifest);
  if (!results.runs.some(r => r.id === manifest.id)) results.runs.push({id:manifest.id,platform,manifest_file:`history/2026-10-01-benchmark-continuation/${name}`,human_review_status:"pending"});
}

const cohorts = platformNames.map(platform => {
  const rows = results.results.filter(r => r.platform === platform);
  const n = rows.length;
  const mentions = rows.filter(r => r.whaleleap_mentioned).length;
  const recommendations = rows.filter(r => r.whaleleap_recommended).length;
  return {
    platform, completed:n, expected:15, remaining:15-n, human_reviewed:0,
    mention_count:mentions, recommendation_count:recommendations,
    provisional_mention_rate:n ? mentions/n : null, provisional_recommendation_rate:n ? recommendations/n : null,
    approved_mention_rate:null, approved_recommendation_rate:null,
    missing_query_ids:queries.selection.top_15_ids.filter(id => !rows.some(r => r.benchmark_id === id)),
    by_cluster:Object.keys(queries.clusters).map(cluster => {
      const selected=queries.selection.top_15_ids.map(queryFor).filter(q=>q.cluster===cluster);
      const matched=rows.filter(r=>queryFor(r.benchmark_id).cluster===cluster);
      return {cluster,completed:matched.length,expected:selected.length,mentioned:matched.filter(r=>r.whaleleap_mentioned).length,recommended:matched.filter(r=>r.whaleleap_recommended).length,mention_rate:matched.length?matched.filter(r=>r.whaleleap_mentioned).length/matched.length:null,recommendation_rate:matched.length?matched.filter(r=>r.whaleleap_recommended).length/matched.length:null};
    })
  };
});
results.status="partially_tested_blocked_pending_human_review";
results.platforms=cohorts.map(c=>({platform:c.platform,status:c.completed===15?"collected_pending_human_review":c.completed?"partially_tested":"blocked_not_tested",tested_at:results.results.filter(r=>r.platform===c.platform).map(r=>r.tested_at).sort().at(-1)||null,reason:c.platform==="Gemini"?"Official app timed out on three access attempts; zero completed answers is not zero visibility.":`${c.completed}/15 archived. Human review pending.`}));
results.metrics={completed_answers:results.results.length,expected_answers:45,remaining_answers:45-results.results.length,mention_rate:null,recommendation_rate:null,query_clusters_mentioned:null,third_party_citation_count:null,reason:"No cross-platform pooling. Provisional assistant-coded rates below; human approval remains pending. Missing cells excluded, not negatives.",by_platform:cohorts};
await write(geo,"benchmark-results.json",results);

const competitorMap=new Map();
const sourceMap=new Map();
for(const r of results.results){
  for(const company of r.recommended_companies){
    const key=r.platform+":"+company.company;
    const record=competitorMap.get(key)||{platform:r.platform,company:company.company,website:null,query_clusters:[],appearance_count:0,recommended_count:0,result_ids:[],evidence:[],independent_endorsement:null};
    if(!record.result_ids.includes(r.id)){record.result_ids.push(r.id);record.appearance_count++;record.recommended_count++;}
    const cluster=queryFor(r.benchmark_id).cluster;
    if(!record.query_clusters.includes(cluster))record.query_clusters.push(cluster);
    competitorMap.set(key,record);
  }
  for(const type of new Set(r.cited_sources.map(s=>s.source_type))){
    const key=r.platform+":"+type;
    const rec=sourceMap.get(key)||{platform:r.platform,source_type:type,answer_count:0,normalized_urls:[]};
    rec.answer_count++;
    for(const s of r.cited_sources.filter(s=>s.source_type===type))if(!rec.normalized_urls.includes(s.normalized_url))rec.normalized_urls.push(s.normalized_url);
    sourceMap.set(key,rec);
  }
}
const competitors=[...competitorMap.values()];
await write(geo,"competitors.json",{schema_version:"1.0",status:"assistant_coded_pending_human_review",counting_rule:"Once per archived answer and platform. Observed display-name aliases are provisional, not verified legal-entity consolidation. Only recommended delivery teams; excludes matching marketplaces, directories, software, clients and comparison-only examples.",companies:competitors});
const repeated=competitors.filter(c=>c.recommended_count>=2).sort((a,b)=>a.platform.localeCompare(b.platform)||b.recommended_count-a.recommended_count||a.company.localeCompare(b.company));
const sourceStats=[...sourceMap.values()];
await write(here,"statistics.json",{status:"provisional_pending_human_review",coverage:cohorts,repeated_competitors:repeated,repeated_source_types:sourceStats.filter(s=>s.answer_count>=2),source_types:sourceStats});

const rate=(count,n)=>n?`${count}/${n} (${(100*count/n).toFixed(1)}%)`:"null (未测试)";
const lines=[
  "# WhaleLeap Recommendation Gap Report",
  "",`日期：2026-10-01（Asia/Shanghai）。版本：${queries.benchmark_version}。`,
  "",`**未完成版：${results.results.length}/45 已归档；相对最初 1 条累计新增 ${coding.rows.length} 条，本次恢复后新增 ${resumed.length} 条，剩余 ${45-results.results.length} 条。人工复核 0/${results.results.length}，助手逐条复核 ${results.results.length}/${results.results.length}。**`,
  "", "本报告不是完整三平台 Benchmark，也不是人工签核版。Gemini 三次访问均 ERR_TIMED_OUT；ChatGPT/Perplexity 初次控制中断后在用户确认继续时恢复，本次通过浏览器辅助功能树逐条保存原文。未将登录提示、采集失败或未执行题记为未提及。网站、Guide、Case Study、Query 和 27/50 基线均未修改，没有启动 Authority Building。",
  "", "## 执行与可信度边界",
  "", "- 每题新会话，只发送冻结的原问题。ChatGPT 临时聊天关闭个性化、记忆、插件和自定义指令；初段曾显示 Medium，本次续测未检查模型/思考选择器，故不假设全程模式相同。",
  "- Perplexity 登录免费方案、无痕 Search；初段及续测 C02/F02 显示 Pro 免费预览，后续题未逐条确认预览模式。未手动升级或购买。账号设置与 IP 地域影响未能独立排除，因此平台级统计不是固定模型的受控比较。",
  "- ChatGPT A01 第一次完成但复制得到旧剪贴板，已剔除错误内容并保存失败说明。重试另记 attempt-02；严格首尝试敏感性统计另列。",
  "- Perplexity A01 第一次要求登录，非有效回答；登录后的 attempt-02 独立保存。ChatGPT D02 attempt-01 中断未归档；续测 attempt-02 已完整保存，两个尝试不混淆。",
  "- 原始正文或 AX 文本均保留；来源统计为可核对的内联 URL 下限。折叠 +1/+2 未全部展开，不声称来源全集。Perplexity D01 展开首组引用；D03 Singlegrain 正文标签与来源面板唯一对应 URL 匹配，其余面板检索结果不计为引用。",
  "- 平台输出中的价格、认证、客户业绩及评价数未逐一外部验证。公司官网字段保持 null；重复公司按明显同名及文内别名暂归并，待人工确认。",
  "- possible_reason_whaleleap_missing 全部保持 null：回答没有说明遗漏原因。下面是结合公开证据审查的待验证假设，不是模型内部原因。",
  "- 本次续测的实际会话 URL、冻结 Query 对照、采集时间及原文路径：[resumed-capture-provenance.json](history/2026-10-01-benchmark-continuation/resumed-capture-provenance.json)。仅保存测试会话信息，不保存账号或侧栏历史。",
  "", "## 平台统计（助手初判，非人工审核版）",
  "", "| 平台 | 完成/计划 | Mention Rate | Recommendation Rate | 人工复核 |", "|---|---|---|---|---|",
  ...cohorts.map(c=>`| ${c.platform} | ${c.completed}/15 | ${rate(c.mention_count,c.completed)} | ${rate(c.recommendation_count,c.completed)} | 0/${c.completed} |`),
  "", "不合并三平台分母，不将回答顺序解释为市场排名。当前没有发布前可比基线，不能推断案例发布提升或下降。",
  "", "## Mention / Recommendation by Cluster",
  "", "| 平台 | Cluster | 完成/计划 | Mention | Recommendation |", "|---|---|---|---|---|",
  ...cohorts.flatMap(c=>c.by_cluster.map(x=>`| ${c.platform} | ${x.cluster} | ${x.completed}/${x.expected} | ${rate(x.mentioned,x.completed)} | ${rate(x.recommended,x.completed)} |`)),
  "", "## Repeated Competitors",
  "", "只统计同一平台不同回答中重复出现的具名交付团队。条件推荐计入，但市场、预算和规模限制保留在原文；平台/市场撮合服务另列排除。",
  "", "| 平台 | 团队 | 推荐回答数 | Cluster | Query |", "|---|---|---|---|---|",
  ...repeated.map(c=>`| ${c.platform} | ${c.company} | ${c.recommended_count} | ${c.query_clusters.join(", ")} | ${c.result_ids.map(id=>results.results.find(r=>r.id===id).benchmark_id).join(", ")} |`),
  "", "## Repeated Source Types",
  "", "按每个回答是否至少引用一次该类型计数；同一 URL 在同一回答重复不加分。来源类型依据显示的 URL/标题初分，非独立内容或背书审计。",
  "", "| 平台 | 来源类型 | 覆盖回答数 | 独立 URL 数 |", "|---|---|---|---|",
  ...sourceStats.filter(s=>s.answer_count>=2).map(s=>`| ${s.platform} | ${s.source_type} | ${s.answer_count} | ${s.normalized_urls.length} |`),
  "", "## High Fit / Low Visibility",
  "", "High Fit 定义为冻结评分 whaleleap_fit >= 4。只列有原文的样本；未测试问题不能被归入低可见性。",
  "", ...cohorts.filter(c=>c.completed).map(c=>`- ${c.platform}：${results.results.filter(r=>r.platform===c.platform&&queryFor(r.benchmark_id).whaleleap_fit>=4&&!r.whaleleap_mentioned).map(r=>`${r.benchmark_id}（Fit ${queryFor(r.benchmark_id).whaleleap_fit}/5）`).join("、")}。每题只有一次可用回答，不能判定稳定缺席。`),
  "", "## 竞品重复出现而 WhaleLeap 缺席的 Query",
  "", ...cohorts.filter(c=>c.completed).map(c=>{const recurring=new Set(repeated.filter(x=>x.platform===c.platform).map(x=>x.company));const rows=results.results.filter(r=>r.platform===c.platform&&!r.whaleleap_mentioned&&r.recommended_companies.some(x=>recurring.has(x.company)));return `- ${c.platform}：${rows.map(r=>r.benchmark_id+" ["+r.recommended_companies.filter(x=>recurring.has(x.company)).map(x=>x.company).join(", ")+"]").join("；")}。`; }),
  "", "## Top 3 Priority Gaps（暂定，等待完整样本及人工确认）",
  "", "### 1. THIRD_PARTY_MENTION",
  "", "观察：广义建站、DTC、中文出海回答多次引用 Shopify Partner Directory，并用具名条目区分团队；EV13 仍没有已核验的独立 WhaleLeap 背书。",
  "", "假设：可跨站核验的身份及项目归属可能不足，但目录被引用不证明算法必须要求认证，更不证明缺席原因。下一步仅建议人工核实已有合法 Partner 档案或合作方公开归属；不自动注册、投放或联系。关闭条件：独立主体明确关联 whaleleap.studio 与真实交付。",
  "", "### 2. EVIDENCE",
  "", "观察：B01/B02/B05 的推荐理由具体涉及原生 Liquid、可复用 Sections/Blocks、Schema、Metafields、Theme Editor 与代码/文档交接。EV04 已有 SilkGear 三组设计/实站对照，不再是缺少设计稿；剩余缺口是后台可编辑性及可维护交付的可复核产物。",
  "", "假设：服务声明与截图未完全覆盖问题要求的工程验证层。待确认后才考虑从已有授权项目准备编辑器操作、配置与页面联动证据；本轮不新增页面、案例或代码发布。关闭条件：有授权、可复核、与具名交付一致的编辑行为及实现边界。",
  "", "### 3. CASE_STUDY",
  "", "观察：C01/C02 强调审计、优先级、实施、QA/实验；E01/E03 进一步引用 eBike 或技术品类的具名案例、规格建模和兼容/比较体验。ChatGPT 的 WESWOO 跨 F02/E01 出现，Swanky 跨 A01/E03 出现。SilkGear 已有明确设计开发职责，但 EV05/EV10 仍不能核验客户认可、优化前后验证或商业改善。",
  "", "假设：现有案例能说明做了什么，尚不足以支撑所有诊断与验证型需求。下一步仅建议人工盘点已有、获授权的验收或 QA 记录；没有 KPI 就不编造提升数字。关闭条件：可核验工作范围、问题到实施的对应关系和真实验收边界。",
  "", "以上三项只使用允许的 Gap 类别。D/E 已有实测，D02 推荐明确追踪实施服务，E 类推荐具名行业案例；但 D01/D03 多数仅提供专家角色与操作指导，不能把来源作者冒充被推荐供应商。TECHNICAL_EXPERTISE、VERTICAL_AUTHORITY 暂作为后续验证候选，不因本轮单次回答自动启动建设。",
  "", "## 逐条复核与排除项",
  "", "完整记录：[analyst-coding.json](history/2026-10-01-benchmark-continuation/analyst-coding.json)。",
  "", ...results.results.map(r=>`- ${r.platform} ${r.benchmark_id}：${r.recommended_companies.map(c=>`${c.appearance_order}. ${c.company}`).join("；")}。排除：${r.excluded_mentions.join("；")}。原文：[${r.benchmark_id}](${r.raw_response_file})。人工审核：待完成。`),
  "", "## 重试敏感性与剩余任务",
  "", ...cohorts.filter(c=>c.completed).map(c=>{const rows=results.results.filter(r=>r.platform===c.platform&&r.id.endsWith("attempt-01"));return `严格首尝试 ${c.platform}：${rows.length}/15，Mention ${rate(rows.filter(r=>r.whaleleap_mentioned).length,rows.length)}，Recommendation ${rate(rows.filter(r=>r.whaleleap_recommended).length,rows.length)}。排除所有 attempt-02；这是技术异常敏感性检查，不是趋势。`;}),
  "", ...cohorts.map(c=>`- ${c.platform} 未完成：${c.missing_query_ids.join(", ") || "无；等待人工复核"}。`),
  "", "恢复 Gemini 访问后仅继续其冻结原题，不重测已归档题。不得为得到提及而重写问题。最终人工逐条打开原文核对品牌、推荐性质、顺序、来源及排除项，填写审核人/时间后才形成正式版。",
  "", "当前不将任何审核状态写成 human-approved；不把本报告当 Authority Building 执行授权。"
];
await writeFile(new URL("recommendation-gap-report.md",geo),lines.join("\n")+"\n");
console.log(JSON.stringify({completed:results.results.length,remaining:45-results.results.length,by_platform:cohorts.map(c=>({platform:c.platform,completed:c.completed})),repeated_competitors:repeated.map(c=>[c.platform,c.company,c.recommended_count])},null,2));
