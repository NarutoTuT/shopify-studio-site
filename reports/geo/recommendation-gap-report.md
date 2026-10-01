# WhaleLeap AI Recommendation Benchmark

日期：2026-10-01（Asia/Shanghai）  
版本：wl-geo-v1 + wl-geo-doubao-v1

## Status And Review Boundary

- Benchmark 已采集 45/45：ChatGPT 15、Perplexity 15、Doubao 15。
- Benchmark v1.0：**FROZEN**。
- Human Review：**APPROVED**。45/45 原始回答与结构化记录已逐条复核，`REVIEW_REQUIRED` 为 0。
- GEO Score：**27/50**，冻结不变。
- Authority Sprint：**NOT YET IMPLEMENTED**。
- Gemini 历史未删除：`platform: Gemini`、`status: unavailable`、`reason: repeated_timeout`、`replacement_platform: Doubao`。Doubao 结果没有改写成 Gemini 结果。
- 每条测试均保留原始回答、Query、时间、结构化判断和可用会话 URL。豆包用独立新会话执行中文本地化 Query。
- 未修改网站、Guide、Case Study、SilkGear、SEO 或 GEO 页面，也未启动 Authority Building。

## Platform Results

| Platform | Completed | WhaleLeap Mentions | Mention Rate | WhaleLeap Recommendations | Recommendation Rate |
|---|---:|---:|---:|---:|---:|
| ChatGPT | 15/15 | 0 | 0.0% | 0 | 0.0% |
| Perplexity | 15/15 | 0 | 0.0% | 0 | 0.0% |
| Doubao | 15/15 | 0 | 0.0% | 0 | 0.0% |
| Overall | 45/45 | 0 | 0.0% | 0 | 0.0% |

这些是一次受限样本的观察结果，不是市场排名，不证明 WhaleLeap 永远不会被推荐，也不能反推出模型遗漏原因。

## Cluster-level Visibility

| Cluster | Intent | ChatGPT | Perplexity | Doubao | Overall Mention / Recommendation |
|---|---|---:|---:|---:|---:|
| A | Shopify 服务商推荐 | 0/3 | 0/3 | 0/3 | 0/9 / 0/9 |
| B | Figma、Liquid、可编辑主题 | 0/3 | 0/3 | 0/3 | 0/9 / 0/9 |
| C | CRO 与转化优化 | 0/2 | 0/2 | 0/2 | 0/6 / 0/6 |
| D | GA4 / GTM / Tracking | 0/3 | 0/3 | 0/2 | 0/8 / 0/8 |
| E | eBike / 高客单技术产品 | 0/2 | 0/2 | 0/2 | 0/6 / 0/6 |
| F | 中国品牌出海 | 0/2 | 0/2 | 0/3 | 0/7 / 0/7 |

所有 Cluster 的 Visibility 都是 0。不能仅凭本轮区分哪个 Cluster 的缺口更严重；高 Fit Query 中 WhaleLeap 同样缺席。

## Repeated Competitors

### ChatGPT

Conspire 3 次。Cheriscon、Convertibles、DTC Pages、EastDTC / EastDigi、First and Third、Netalico、SDG、Subframe、Swanky、WESWOO 各 2 次。

### Perplexity

Netalico、Shinetech Software、WESWOO 各 3 次。EastDTC / EastDigi、SPLIT Development、YIGO Tech 各 2 次。

### Doubao

WESWOO 8 次；EastDTC / EastDigi 6 次；Cheriscon、YIGO Tech 各 5 次；Cyberklick 4 次；Avex、Blend Commerce 各 3 次。其余完整频次见 `competitors.json`。

这些次数表示“在多少个回答中被推荐”，不表示质量、份额或真实市场排名。豆包答案中的 Partner 等级、报价、客户案例和能力声明均未独立核验。

## Cross-platform Competitors

同时出现在三个平台：

| Provider | ChatGPT | Perplexity | Doubao | Total answers |
|---|---:|---:|---:|---:|
| WESWOO | 2 | 3 | 8 | 13 |
| EastDTC / EastDigi | 2 | 2 | 6 | 10 |
| Cheriscon | 2 | 1 | 5 | 8 |
| YIGO Tech | 1 | 2 | 5 | 8 |
| Swanky | 2 | 1 | 1 | 4 |

这五个实体值得后续做公开证据对照研究，但本轮不执行。名称别名归并仍需人工确认法律实体关系。

## Source And Citation Patterns

- ChatGPT 与 Perplexity 的可解析引用以服务商自有页面和 Shopify Partner Directory 为主：`provider_owned_page` 53、`platform_directory` 60、`platform_official_guidance` 11。
- 独立评价来源仅记录 1 条；现有样本更常用供应商自述和平台目录，而不是深度第三方评测。
- 豆包 15 条回答多次显示“参考资料”或来源文字标签，但主回答区域没有暴露可解析 URL，因此 `cited_sources` 保持空数组；没有根据文字标签猜测链接。
- 引用出现不等于引用内容真实，也不等于对应公司能力已被独立核验。

## Recommendation Gap Validation

### Confirmed As Public-evidence Gaps, Not Confirmed Causes

1. `THIRD_PARTY_MENTION`：Benchmark v1 测试时的公开证据审查未核验到独立主体对 WhaleLeap 的明确归属或背书。平台目录和可跨站识别实体在竞品回答中反复出现，但这只是相关模式，不是模型遗漏的已证实原因。
2. `EVIDENCE`：高 Fit 的 B、C、D、E Query 经常按具体可交付能力推荐服务商，包括 Liquid、Sections、Metafields、CRO 流程、追踪验收及品类规格建模。WhaleLeap 已有服务声明与 SilkGear 设计/实站对照，但后台可编辑交付、追踪 QA 和工程验收证据仍不完整。
3. `CASE_STUDY`：竞品经常以具名行业案例、明确职责和问题到实施的路径出现。SilkGear 案例真实且边界清楚，但单一案例不足以覆盖 CRO、Tracking、eBike 和高客单复杂产品意图；不存在获授权 KPI 时不得补造结果。

### Rejected Or Deferred As Top-three Causes

- `CONTENT`：已有服务页与 Guide，45 条结果没有证明“再写更多文章”是优先解法。
- `ENTITY`：品牌与服务实体基本清楚，仍可增强，但不如前三项直接对应回答中的推荐依据。
- `VERTICAL_AUTHORITY`：eBike/高客单回答支持继续验证该缺口，但它目前依赖案例与证据，暂不单独挤入 Top 3。
- `REVIEWS`、`TECHNICAL_EXPERTISE`、`ORIGINAL_RESEARCH`、`DISTRIBUTION`：保留为后续候选，本轮不足以确认其为主要因果因素。

## Revised GEO Scorecard

总分冻结为 **27/50**。推荐可见性基线不是新的公开权威证据，因此十个维度均不自动加分。Scorecard 已记录 45/45、三平台各 0/15，人工复核已批准。

## Post-Baseline Evidence Discoveries

以下发现发生于 Benchmark v1 baseline 之后，仅作为 Authority Sprint Input 记录，不计入 27/50，也不反向改写本报告的历史 Gap Hypotheses：

- LUOKAVRION public third-party attribution discovered。
- Terrawulf Level 4 engineering evidence confirmed。
- SilkGear design-to-live evidence strengthened。

## Evidence Files

- 结构化结果：`benchmark-results.json`
- 豆包 Query：`doubao-query-set.json`
- 平台替换历史：`platform-replacement.json`
- 竞品统计：`competitors.json`
- 豆包运行说明：`history/2026-10-01-doubao-round-01/run-manifest.json`
- 豆包原始回答：`history/2026-10-01-doubao-round-01/answers/doubao/`
- 豆包复核编码：`history/2026-10-01-doubao-round-01/analyst-coding.json`

## TOP 3 NEXT AUTHORITY INVESTMENTS

1. **THIRD_PARTY_MENTION**：先核查已有真实合作方、Shopify 生态档案或公开项目归属中，哪些可以合法、准确地把 WhaleLeap 与实际交付关联起来。
2. **EVIDENCE**：从已有授权项目中补齐可复核工程证据，优先后台可编辑 Section、Liquid/Metafield 实现、Tracking QA 与验收边界。
3. **CASE_STUDY**：增强现有真实案例的“问题 → 决策 → 实施 → 验收”链路；没有授权数据就不添加增长数字。

以上仅为冻结时的 Gap Hypotheses，不是已证实因果。Authority Sprint 尚未实施。
