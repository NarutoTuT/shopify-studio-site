# WhaleLeap AI Recommendation Benchmark: Initial Review

日期：2026-10-01。Benchmark v1.0：**FROZEN**。Human Review：**APPROVED**。GEO Score：**27/50**。Authority Sprint：**NOT YET IMPLEMENTED**。

本文件保留 Benchmark v1 测试发生时的公开证据判断。后续 Authority Evidence Audit 不反向修改本基线。

## 已确认的四项

1. 下列 TOP 15 是否准确代表希望获取的真实客户需求。
2. 公开证据映射是否正确区分服务声明、项目证据和独立背书。
3. 27/50 是否作为内部诊断基线接受；不是官方评分或推荐概率。
4. 优先补强现有案例归属与可核验交付，而不是继续新增页面，是否符合下一阶段投入方向。

## TOP 15

C/F/R/E 分别为购买意图、能力匹配、供应商推荐意图、公开证据准备度，每项 1-5。总分仅 C+F+R；E 不参与筛选。
分层选择：宽泛 5、中等具体 5、高度具体 5；每组 Intent 2-3 题；英文 5 题。不是机械取总分最高的 15 题，也不是预测排名。

| ID | 层级 | 问题 | C/F/R/E | 选择分 |
|---|---|---|---|---|
| A01 | broad | 推荐几家靠谱的 Shopify 建站公司，我想先比较一下各自适合什么项目。 | 4/4/5/3 | 13/15 |
| A02 | broad | 我们是小型 DTC 品牌，想找能长期合作的 Shopify 开发团队，有哪些值得聊聊？ | 4/4/5/3 | 13/15 |
| A04 | broad | Can you recommend a Shopify development agency for a small DTC brand? | 4/4/5/3 | 13/15 |
| C02 | broad | 有没有同时懂 Shopify 开发和转化优化的团队可以推荐？ | 4/4/5/3 | 13/15 |
| F02 | broad | 我们是中国品牌，准备做出海 Shopify 独立站，有哪些开发团队值得比较？ | 4/5/5/3 | 14/15 |
| B02 | mid_specific | Can you recommend a team for custom Shopify Liquid development rather than app-based workarounds? | 5/4/5/3 | 14/15 |
| B05 | mid_specific | 想找人开发 Shopify 2.0 自定义 Section，让运营自己改内容，有团队推荐吗？ | 5/4/5/3 | 14/15 |
| C01 | mid_specific | Shopify 广告有点击但订单少，想找团队先诊断再改页面，有谁合适？ | 5/4/5/3 | 14/15 |
| D02 | mid_specific | Can you recommend a team that understands Shopify, GTM and GA4 ecommerce tracking? | 5/4/5/4 | 14/15 |
| F03 | mid_specific | 我们团队用中文沟通，店铺卖给美国客户，能推荐懂 Shopify 的开发伙伴吗？ | 5/4/5/3 | 14/15 |
| B01 | highly_specific | 我已经有 Figma 设计稿，想找团队开发成可在后台编辑的 Shopify 主题，推荐谁？ | 5/4/5/2 | 14/15 |
| D01 | highly_specific | Shopify 后台订单金额和 GA4 对不上，想请人核对 purchase 参数和重复事件，找谁？ | 5/4/5/4 | 14/15 |
| D03 | highly_specific | Who can audit Shopify purchase tracking for Google Ads when conversions appear to be counted twice? | 5/4/5/3 | 14/15 |
| E01 | highly_specific | 有没有做过 eBike Shopify 网站的团队？想找懂车型规格和购买决策的开发伙伴。 | 5/3/5/2 | 13/15 |
| E03 | highly_specific | Can you recommend a Shopify team for a high-ticket consumer technology store with detailed specs and several product categories? | 5/4/5/4 | 14/15 |

其余 15 题及每一项得分原因见 [benchmark-queries.json](benchmark-queries.json)。未为了进入 Benchmark 抬分：eBike 只有 3 分能力匹配、2 分证据；服务端 CAPI/BigQuery 和 UK/EU VAT 复合需求仅 2 分匹配，保留在候选池而非强行当核心能力。

## Public Evidence Map

STRONG 是对具体主张的支持强度，不是独立第三方背书等级。

| 能力 | 证据强度 | 可核验事实与边界 |
|---|---|---|
| WhaleLeap Entity | MEDIUM | 有一致品牌域名、定位和公开服务入口。 不证明法定实体、Shopify 认证或独立声誉。 |
| Shopify Engineering | MEDIUM | 服务范围明确，SilkGear 有公开 storefront 实施叙述与截图。 案例不能核验所有技术实现、源代码或实际性能提升。 |
| Theme / Liquid | MEDIUM | 有技术交付描述和页面素材。 尚未在已检查页面找到可复核代码、Theme Editor 配置或命名项目模块对照。 |
| Figma to Shopify | WEAK | 明确服务声明；不是缺服务描述。 未见具名项目的 Figma 原稿、实现页面和职责范围对照；流程示意不算经历。 |
| CRO | MEDIUM | 有 CRO 方法与高客单 PDP 决策叙述。 没有在所查证据中证实转化提升；所有示意指标排除。 |
| GA4 / GTM | MEDIUM | 详细技术方法与边界可引用；Guide 包含自述实践。 无具名追踪修复案例或可复核客户验证结果；不能声称已证明收入归因修复成效。 |
| High-ticket ecommerce | STRONG | 具名案例将挑战、范围、实施截图与公开店铺链接连接起来。 STRONG 只针对展示该项目方法与交付面；不代表独立归属验证或商业业绩。 |
| Cross-border ecommerce | MEDIUM | 双语服务定位及澳大利亚科技零售案例提供语境。 不能推断 UK/EU 本地法规专长、办公室或客户覆盖。 |
| eBike | WEAK | 可观察到与垂直行业有关的项目截图和说明。 截图没有在所查文字中连接具名品牌、公开客户 URL 和明确职责；不能据此称 eBike 专家。 |
| Case Studies | MEDIUM | SilkGear 有具体决策与限制；具名 live store 链接是可访问对象。 客户站点链接本身不是客户对 WhaleLeap 的独立推荐；匿名项目不建立品牌归属。 |
| Founder / Naruto | WEAK | 人物与审阅署名都可见。 所查页面未明确建立 Naruto、创始人和独立专业档案的身份链；不猜真实姓名。 |
| Free Shopify Review | STRONG | 服务入口与适用范围具体且公开可见。 仅验证入口存在，未验证实际响应时效、提交成功或客户满意度。 |
| Independent third-party trust | MISSING | 两条定向搜索未提供可验证的独立背书；同名商标与注册实体不能关联。 MISSING 表示本次证据集中未找到，不等于全网不存在。 |

来源、链接、观察方式与可安全引用表述见 [public-evidence-map.json](public-evidence-map.json)。

关键公开页面：
- [SilkGear 案例](https://whaleleap.studio/case-studies/silkgear)：具名范围与页面截图；不证明转化提升或独立客户认可。
- [Tracking Plan](https://whaleleap.studio/learn/shopify-ga4-gtm-tracking-plan)：方法、参数、QA 和署名；不等于客户追踪修复结果。
- [Theme / Liquid](https://whaleleap.studio/services/shopify-theme-customization)：Figma 声明已经存在，缺的是项目对照证据，不是另建一个服务页。
- [About](https://whaleleap.studio/about)：eBike 页面素材已存在，不能写成“没有任何 eBike 证据”；但具名归属与职责仍弱。
- [CRO](https://whaleleap.studio/services/shopify-conversion-optimization)：示意漏斗数字排除，不作客户业绩引用。

## GEO Scorecard: 27/50

| 维度 | 得分 | 理由 |
|---|---|---|
| Entity Clarity | 4/5 | 品牌域名、定位和服务一致，缺独立实体/人物关联验证。 |
| Service Clarity | 4/5 | 服务范围、交付和排除项清楚。 |
| Experience Evidence | 3/5 | 有具名案例和公开截图，部分作品仍匿名。 |
| Case Study Strength | 3/5 | SilkGear 结构完整且诚实限定结果，证据集中在单一长案例。 |
| Technical Content | 4/5 | Guide 包含具体事件契约、参数、去重、QA、来源与边界。 |
| Original Information Gain | 2/5 | 有实施决策和验收组织方式，超出纯服务列表。 |
| Third-party Mentions | 0/5 | 限定检索内未核验独立提及；同名实体不计。 |
| Vertical Authority | 2/5 | 科技零售具名案例较强，eBike/户外证据仍弱。 |
| Author / Reviewer Identity | 2/5 | Guide 有 Naruto 审阅署名及日期，About 有创始人肖像。 |
| Citation Readiness | 3/5 | 服务和方法可单独引用，案例有具体边界。 |

这是首次基线，previous_score/delta 为 null。第三方提及 0 分只意味着本次未核验到相关证据，不代表已证明全网没有。完整阈值与引用见 [geo-scorecard.json](geo-scorecard.json)。

## Recommendation Gaps

以下是公开证据缺口，不是已观察到的 AI 漏推荐原因。所有 current_visibility 均为 unknown。

| ID | 类型 | 优先级 | 观察与建议 |
|---|---|---|---|
| G01 | ENTITY | P2 | 品牌定位存在，但未从所查公开材料闭合品牌、创始人与审阅者身份关系。 确认已有公开专业档案和真实姓名/品牌关系；优先在现有 About 与作者信息中清楚关联。 |
| G02 | EVIDENCE | P1 | Figma 服务声明明确，未见具名项目原稿到可配置 Shopify 实现的对照。 先核查可公开授权的现有项目，在现有案例或服务页补原稿/成品与模块职责对照，不新建服务页。 |
| G03 | CASE_STUDY | P1 | SilkGear 有方法和交付证据，但自有案例不等于客户验证或转化提升。 优先完善现有 SilkGear 的可核验职责、日期与客户确认；没有获授权 KPI 就不补数字。 |
| G04 | CONTENT | P2 | 服务和 Guide 已存在；更多类似文章不一定增加推荐依据。 先完成真实 Benchmark，保留现有 Guide；仅在实际回答暴露具体理解缺口后改善原文。 |
| G05 | THIRD_PARTY_MENTION | P1 | 本次定向搜索没有核验到相关独立提及。 经人工确认后，优先争取真实合作方对既有工作的公开归属确认；不买链接、不自动联系。 |
| G06 | VERTICAL_AUTHORITY | P2 | eBike 截图可见，但品牌、职责和 live 项目关联不足。 先核实素材所属项目与公开授权，在既有作品说明中补边界；不创建 eBike Pillar，不先自称专家。 |
| G07 | REVIEWS | P2 | 所查公开证据未提供可归属的独立客户评价。 先检查是否已有真实评价可验证；没有就保持未知，后续由人工在真实交付后征求自愿反馈。 |
| G08 | TECHNICAL_EXPERTISE | P1 | 方法文档较具体，但缺可复现实现产物或脱敏验证过程。 先从有授权的已有交付中挑一项，准备最小可复现模块或事件 QA 样例；待确认再公开，绝不提交客户订单数据。 |
| G09 | ORIGINAL_RESEARCH | P3 | 有方法组织与实施经验自述，无已核验原创实验/数据集。 暂不投入大规模研究；先运行多轮 Benchmark 和真实项目复盘，再决定是否有可授权的新信息。 |
| G10 | DISTRIBUTION | P2 | Guide 与案例可直接访问，当前工具的定向搜索未返回精确页面；原因未知。 先在干净会话完成首轮检索型 Benchmark，记录真实引用来源，再决定已有内容的人工分发；不据此做技术 SEO 修改。 |

建议先投入：**在取得授权前提下，补强现有 SilkGear 案例的项目归属/职责证据与可独立核验的客户确认。**
已有具名交付基础，优先提升证据可信度而非新增页面；尚非经 AI Benchmark 验证的增长结论。
这些建议尚未实施，也没有发出客户联系请求。

## 目前能回答什么

- 哪些问题最明确要求供应商：可按自然语言意图评分判断；实际触发推荐的比例尚未知。
- WhaleLeap 的公开匹配基础：工程、主题、Tracking 方法与科技零售项目。
- 哪些平台已经找到 WhaleLeap、推荐谁、为何遗漏：**全部待实测，当前不能回答。**
- 本次普通搜索和本对话不计 ChatGPT/Gemini/Perplexity 测试。

## Final Sign-off

45/45 已完成并逐条复核：ChatGPT 15、Perplexity 15、Doubao 15。WhaleLeap Mention Rate 与 Recommendation Rate 均为 0.0%。完整冻结结果见 [benchmark-v1-final.md](benchmark-v1-final.md)。

Post-baseline 已发现 LUOKAVRION 公开第三方归属、Terrawulf Level 4 工程证据及增强后的 SilkGear design-to-live 证据。这些只作为 Authority Sprint Input，不计入 27/50，不改变本文件记录的历史判断。
