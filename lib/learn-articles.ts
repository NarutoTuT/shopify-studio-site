import type { LearnArticle } from "@/components/learn-article-page"

const date = "2026-10-09"

export const customDevelopmentCostArticle: LearnArticle = {
  slug: "shopify-custom-development-cost",
  eyebrow: "SHOPIFY CUSTOM DEVELOPMENT COST",
  title: "Shopify 定制开发多少钱？费用构成与报价逻辑说明",
  description: "从功能点、工时、技术风险与验收范围解释 Shopify 定制开发报价，帮助跨境品牌判断报价是否合理。",
  intro: "通用建站费用先看《Shopify 建站多少钱》。这篇不重复基础建站的三档费用，而是解释进入定制开发后，为什么同一个需求会出现明显不同的报价，以及品牌方应该怎样拆解和比较。",
  introLink: { label: "先看 Shopify 建站费用说明", href: "/learn/shopify-website-cost" },
  published: date, modified: date, readingTime: "约 12 分钟", about: ["Shopify 定制开发多少钱", "Shopify Liquid", "Shopify 主题定制"],
  sections: [
    {
      title: "定制开发 vs 主题定制的价格差在哪",
      lead: "价格差异不在于是否改了代码，而在于是否改变数据结构、业务规则和长期维护责任。先把交付类型分清，才能比较同一口径的报价。",
      blocks: [
        { title: "主题配置：在既有能力内组合", paragraphs: ["安装成熟主题、调整颜色字体、配置现成 Section，主要成本来自内容整理、配置和 QA。只要没有改变数据来源与交互规则，技术不确定性较低。", "这类工作适合产品结构简单、验证期明确的品牌。报价重点应写清页面数量、内容由谁录入、移动端检查范围，以及主题和 App 费用是否另付。"] },
        { title: "主题定制：扩展现有主题", paragraphs: ["新增 Liquid Section、Block、商品信息模块或响应式交互，属于主题定制。开发者需要理解原主题结构，并保证新模块能在 Theme Editor 中配置，而不是把文字和图片硬编码进模板。", "同一个视觉稿，如果要求商家后续能调整顺序、文案、图片和规格行，成本会高于一次性静态还原，但后续运营更可控。"] },
        { title: "业务定制：改变规则与数据流", paragraphs: ["批发价、询价、客户分级、复杂组合购、ERP/CRM 同步或特殊履约，会跨越主题、App、API 与后台数据。此时费用不再按页面计算，而要按业务规则、异常路径和系统责任边界计算。", "真正拉开价格的往往不是正常流程，而是登录状态、库存变化、接口失败、重复提交和权限错误等边界情况。"] },
      ],
    },
    {
      title: "三档报价对照：看范围，不只看总价",
      lead: "WhaleLeap 的三档公开价格用于判断项目级范围；定制功能仍需单独拆成可验收工作包。不要把项目起价直接理解为任意功能的包干价。",
      blocks: [
        { title: "基础项目中的轻量定制", paragraphs: ["如果需求只是少量可配置模块、样式调整和标准商品信息呈现，可以并入基础建站范围。关键是明确哪些页面复用同一模板，哪些模块需要独立 schema。"], points: ["每个功能对应一个明确页面或模板", "不改变订单、库存和客户权限规则", "验收可通过桌面与手机前台完成"] },
        { title: "设计驱动的主题开发", paragraphs: ["从 Figma 落地到 Shopify 2.0，费用通常包含设计拆解、Section schema、Liquid 输出、响应式 CSS/JS、Theme Editor 可编辑性和回归测试。视觉相似只是最低要求，运营可编辑和代码可维护同样属于交付。"], points: ["设计状态和交互状态是否齐全", "商品数据来自原生字段还是 Metafield", "同一模块需要支持多少内容变体"] },
        { title: "复杂业务的工程范围", paragraphs: ["跨系统项目应先做技术发现：确认 API、权限、同步频率、失败重试、数据归属和监控方式。没有这一步的固定总价往往只是把未知风险推迟到开发中。", "三档项目范围可在价格页对照，但最终合同仍应列出功能点、假设条件与变更机制。"], points: ["查看公开三档范围，而非只比较起价", "把第三方订阅与开发费分开", "为不可控接口保留发现阶段"] },
      ],
    },
    {
      title: "影响报价的 6 个因素",
      lead: "可靠报价会把功能拆成可估算单元，再加上测试、沟通和风险。下面六项比“做几个页面”更能解释真实成本。",
      blocks: [
        { title: "功能点与状态数量", paragraphs: ["一个筛选器不只是一个按钮，还包含默认、选中、无结果、加载、错误和移动端状态。报价应覆盖状态数量与数据来源。功能描述越模糊，风险缓冲越高。"] },
        { title: "数据模型与商家可编辑性", paragraphs: ["使用商品字段、Metafield、Metaobject 还是外部 API，会影响建模和迁移成本。要求 Theme Editor 可编辑，还需要 schema、默认值、限制和空内容降级。"] },
        { title: "设计完整度", paragraphs: ["只有一张桌面效果图，开发者必须补齐手机布局、hover、键盘焦点、错误状态和长文本规则。设计缺口不是免费消失，而是转化成开发决策与返工风险。"] },
        { title: "集成与依赖", paragraphs: ["支付、评论、订阅、物流、CRM 和 ERP 都可能改变主题行为。需要先确认官方接口、App 扩展点、速率限制和测试环境；无法稳定复现的依赖不能用普通模块工时估算。"] },
        { title: "QA 与兼容范围", paragraphs: ["只在一台电脑验收，与覆盖主流浏览器、390px 手机、平板、真实商品和购物车流程，成本不同。高客单商品还应检查规格、运输、保修和兼容信息是否持续可见。"] },
        { title: "交接、文档与售后", paragraphs: ["代码能运行不等于团队能维护。交付若包含编辑说明、版本记录、发布回滚和售后响应，就应在报价中单列。低价方案常省略的正是这些不可见工作。"] },
      ],
    },
    {
      title: "怎么判断报价是否合理",
      lead: "合理不等于最低。判断重点是范围是否可验证、风险是否透明，以及上线后由谁承担维护责任。",
      blocks: [
        { title: "要求功能清单对应验收标准", paragraphs: ["每项功能至少写明使用者、入口、数据来源、核心状态和验收设备。例如“商品对比”应说明可比较数量、字段、空值处理、移动端展示和分享需求。", "如果报价只有“定制开发一项”，品牌方无法判断删了什么、加了什么，也无法在延期时确认完成比例。"] },
        { title: "看清假设、排除项与变更流程", paragraphs: ["报价应说明内容是否就绪、App 是否已选定、接口文档是否可用，以及客户反馈时限。新增需求怎样估价、怎样影响排期，也要在开工前约定。", "对未知集成先做付费发现通常比直接承诺固定价更可靠，因为它把技术风险提前暴露。"] },
        { title: "用工时模型反推，而不是压单价", paragraphs: ["工时通常由需求澄清、实现、代码复核、QA、修复、发布与交接组成。若报价明显低于完成这些步骤所需时间，应确认是否只交视觉、是否省略移动端与测试、是否依赖未经说明的 App。", "最终比较表至少应包含功能、负责人、里程碑、验收、售后和第三方费用六列。这样不同供应商的数字才有可比性。"] },
      ],
    },
  ],
  faqs: [
    { q: "Shopify 定制开发一般怎么计价？", a: "通常按功能点拆解后估算工时，再加入需求澄清、QA、发布、文档和风险缓冲。复杂集成适合先做技术发现，不宜直接按页面包干。" },
    { q: "买现成主题后还需要定制费吗？", a: "如果只配置现成模块，费用较低；需要新增 Section、特殊商品逻辑、数据模型或第三方集成时，仍会产生设计、开发和测试费用。" },
    { q: "为什么同一份 Figma 报价差很多？", a: "差异通常来自响应式状态、Theme Editor 可编辑性、数据来源、交互细节、浏览器 QA 和售后范围。只还原静态桌面图的报价不能与完整工程交付直接比较。" },
    { q: "定制开发可以固定总价吗？", a: "需求和依赖明确时可以。涉及未知 API、遗留主题或复杂业务规则时，建议先完成发现阶段，再确认固定范围或分阶段报价。" },
    { q: "如何避免开发中不断加价？", a: "签约前明确功能清单、假设条件、排除项、验收标准与变更流程。新增需求必须先书面确认对费用和排期的影响。" },
  ],
  related: [
    { title: "Shopify 建站多少钱？", text: "先理解通用建站费用、三档范围与持续成本。", href: "/learn/shopify-website-cost" },
    { title: "找 Shopify 开发者还是工作室？", text: "继续判断交付模式、团队能力与合同边界。", href: "/learn/hire-shopify-developer" },
    { title: "Shopify 主题定制服务", text: "查看 Liquid、Section 与可编辑主题的实施范围。", href: "/services/shopify-theme-customization" },
  ],
  ctas: [{ label: "查看三档价格", href: "/pricing" }, { label: "诊断定制范围", href: "/diagnosis", primary: true }],
}

export const ga4PurchaseFixArticle: LearnArticle = {
  slug: "shopify-ga4-purchase-tracking-fix", eyebrow: "GA4 PURCHASE TROUBLESHOOTING",
  title: "Shopify GA4 购买事件追踪不到？排查清单与修复思路",
  description: "使用三层定位法排查 Shopify GA4 purchase 缺失、重复、金额异常与归因问题，并按证据顺序修复。",
  intro: "追踪方案设计看《Shopify GA4 电商追踪方案》，这篇只讲排查。目标不是再装一遍代码，而是先确认故障发生在哪一层，再做最小修复，避免多个脚本同时发送 purchase。",
  introLink: { label: "查看 Shopify GA4 电商追踪方案", href: "/learn/shopify-ga4-gtm-tracking-plan" },
  published: date, modified: date, readingTime: "约 11 分钟", about: ["Shopify GA4 购买转化追踪不到", "GA4 purchase", "Shopify GTM 排查"],
  sections: [
    { title: "先确认问题在哪一层", lead: "不要从 GA4 报表倒推全部链路。用浏览器、网络请求和 GA4 接收结果把问题切成三层，每一层只回答一个问题。", blocks: [
      { title: "第一层：Shopify 是否产生了可用订单事实", paragraphs: ["先用明确的测试订单记录订单号、币种、商品、折扣、运费、税费和实际支付金额。确认订单确实完成，而不是停留在付款跳转或测试失败状态。", "如果源数据本身与预期不一致，先处理 Shopify、支付或市场配置；此时调整 GA4 映射不会修复事实来源。"] },
      { title: "第二层：浏览器或像素是否发出请求", paragraphs: ["在允许分析同意的测试环境中完成一次订单，检查 Customer Events、GTM Preview 或浏览器 Network。关注是否出现 purchase、transaction_id 是否稳定，以及同一订单是否由多个来源重复发送。", "这一层没有请求，问题通常在触发条件、像素状态、同意模式、脚本错误或结账扩展范围。不要急着等待 GA4 报表。"] },
      { title: "第三层：GA4 是否接收并正确处理", paragraphs: ["请求发出后，再看 DebugView、Realtime 与标准报告。DebugView 能回答事件是否到达，标准报告有处理延迟，不能用几分钟内没看到就判断失败。", "若 DebugView 有事件但报告金额不对，重点检查参数类型、币种、收入字段、过滤器和重复 transaction_id，而不是重新安装追踪。"] },
    ]},
    { title: "6 个最常见坑", lead: "下面六类问题覆盖大多数 purchase 缺失、重复和金额异常。每次只改一个变量，并保留测试订单与请求证据。", blocks: [
      { title: "触发点仍依赖旧 Thank you page 脚本", paragraphs: ["旧 additional scripts 或订单状态页代码在结账架构更新后可能不再稳定执行。确认当前店铺使用的扩展点，不要因为历史上曾工作就假设现在仍有效。"] },
      { title: "GTM、App 与 Custom Pixel 重复发送", paragraphs: ["多个方案同时监听订单会产生重复 purchase。检查 Measurement ID、事件来源和 transaction_id；保留一个明确主路径，其余停用或限定条件。重复率不能靠 GA4 自动去重来掩盖。"] },
      { title: "Consent 阻断或状态更新太晚", paragraphs: ["用户拒绝分析、CMP 未正确传递状态，或 consent update 晚于页面离开，都可能让客户端事件缺失。先记录测试时的同意状态，再比较接受与拒绝路径。"] },
      { title: "transaction_id 缺失或不稳定", paragraphs: ["交易 ID 应来自稳定订单标识，不能每次渲染随机生成。缺失会削弱去重，不同系统使用不同格式也会让订单对账困难。"] },
      { title: "value、currency 或 items 类型错误", paragraphs: ["value 应为数字，currency 使用 ISO 代码，items 保持数组结构。把金额格式化字符串、货币符号或空数组发送出去，事件可能到达但收入和商品报告不可用。"] },
      { title: "测试环境和过滤器造成假阴性", paragraphs: ["内部流量过滤、开发者过滤、错误的数据流、广告拦截器与浏览器隐私设置，都可能让测试结果失真。先在 DebugView 确认目标数据流，再检查过滤器状态。"] },
    ]},
    { title: "按序排查步骤", lead: "排查顺序应从事实源到发送端，再到接收端和报表。跳步会让你无法证明修复发生在哪里。", blocks: [
      { title: "步骤 1–2：建立测试基线", paragraphs: ["记录当前 GA4 Measurement ID、GTM 容器、Customer Pixel、相关 App 和 Consent 工具。选择一个测试商品，固定币种、折扣和支付方式，只提交一笔标记清晰的测试订单。"], points: ["保存订单号与完成时间", "记录预期 value、currency 与商品", "标记同意状态和测试设备"] },
      { title: "步骤 3–4：验证发送", paragraphs: ["先看脚本错误，再看事件与请求。确认 purchase 只触发一次，参数与测试订单一致，并记录发送来源。若没有发送，沿触发条件向前检查；若重复，先列出所有发送者。"], points: ["控制台无阻断错误", "transaction_id 与订单一致", "请求目标为正确数据流", "刷新订单状态页不会再次发送"] },
      { title: "步骤 5–6：验证接收与对账", paragraphs: ["在 DebugView 找到测试事件，再等待标准报告处理。用订单号抽样对照 Shopify 与 GA4，不要只比较某一天的总收入，因为时区、退款、税费和运费口径可能不同。"], points: ["DebugView 收到一次 purchase", "value 与 currency 类型正确", "items 至少包含核心商品字段", "记录报表可见的实际延迟"] },
      { title: "步骤 7：最小修复后回归", paragraphs: ["只修确认的问题，例如移除重复发送者、修正参数映射或调整 consent 顺序。完成后再用新订单重复同一套步骤，并检查 view_item、add_to_cart、begin_checkout 没有受到连带影响。"] },
      { title: "建立可复核的排查记录", paragraphs: ["每次测试都记录时间、市场、设备、浏览器、同意状态、订单号、发送来源、请求结果和 GA4 可见位置。截图要包含页面与时间上下文，不能只截一个绿色成功提示。", "将观察事实与推断分开。例如“Network 中没有目标请求”是事实，“可能被 Consent 阻断”是待验证假设。下一步只设计一个能证伪该假设的测试。这样即使问题跨团队转交，也不会从头重复尝试。"] },
    ]},
    { title: "什么时候该找人代劳", lead: "当问题跨越 Shopify、GTM、GA4 与 Consent，或你无法稳定复现，就需要完整链路证据，而不是继续试装插件。", blocks: [
      { title: "适合内部处理的情况", paragraphs: ["如果问题只在一个明确标签、参数名称或数据流配置，且团队能访问 GTM Preview、GA4 DebugView 与测试订单，通常可以内部修复。前提是先备份版本并记录改动。"] },
      { title: "适合交给专业团队的情况", paragraphs: ["多市场币种、重复 purchase、Checkout Extensibility 迁移、Consent Mode、服务端发送或广告平台差异，往往涉及多个所有者。此时需要事件契约、来源清单、测试矩阵和发布回滚。", "代劳的价值不是替你点击配置，而是形成可复核的证据链：哪一层失败、改了什么、如何验证、还剩哪些客户端限制。"] },
      { title: "委托前准备什么", paragraphs: ["准备店铺 URL、问题开始时间、受影响市场、GA4 属性与 GTM 容器信息、匿名化订单样本和已尝试操作。不要通过普通文档发送密码或 Token，应使用平台授权。"] },
      { title: "怎样验收排查结果", paragraphs: ["验收不应只写“事件已修好”。至少用两个新测试订单验证单次 purchase、稳定 transaction_id、正确 value 与 currency，并说明标准报告的处理延迟。", "交付还应列出保留的发送路径、停用的旧路径、未能消除的浏览器或 Consent 限制，以及后续监控方法。这样品牌方才能判断未来差异是新故障还是已知边界。"] },
    ]},
  ],
  faqs: [
    { q: "GA4 看不到 purchase 要等多久？", a: "DebugView 和 Realtime 应先用于确认到达；标准报告可能有处理延迟。若发送端没有请求，等待不会解决问题。" },
    { q: "Shopify 有订单但 GA4 没有，先查哪里？", a: "先确认订单事实，再检查浏览器或 Customer Pixel 是否发出 purchase，最后检查 GA4 数据流、过滤器和处理结果。" },
    { q: "purchase 重复怎样判断？", a: "用同一测试订单检查 transaction_id、发送次数和来源。GTM、App、Custom Pixel 或旧脚本并存是常见原因。" },
    { q: "GA4 收入和 Shopify 为什么对不上？", a: "先统一时区、币种、税费、运费、折扣与退款口径，再抽样订单级对账。总额差异不一定等于 purchase 丢失。" },
    { q: "用户拒绝 Cookie 后还能完整追踪吗？", a: "不能承诺完整客户端数据。应遵守同意选择，并明确建模、浏览器限制和数据缺失边界。" },
  ],
  related: [
    { title: "Shopify GA4 / GTM Tracking Plan", text: "查看事件契约、参数来源与上线 QA 的方案设计。", href: "/learn/shopify-ga4-gtm-tracking-plan" },
    { title: "Shopify CRO 检查清单", text: "数据可信后，用 PDP 清单定位购买路径问题。", href: "/learn/shopify-cro-checklist" },
    { title: "GA4 / GTM 数据追踪服务", text: "查看故障定位、实施与验证范围。", href: "/services/shopify-ga4-gtm" },
  ],
  ctas: [{ label: "查看 GA4 / GTM 服务", href: "/services/shopify-ga4-gtm", primary: true }],
}

export const hireDeveloperArticle: LearnArticle = {
  slug: "hire-shopify-developer", eyebrow: "HIRING GUIDE", title: "找 Shopify 开发者还是工作室？选择指南与避坑",
  description: "对比 Freelancer、Agency 与 Studio 的适用场景、报价、交付周期和合同边界，帮助跨境品牌选择 Shopify 开发合作方。",
  intro: "选择合作方不是比较谁的服务列表更长，而是看项目风险由谁承担、沟通链路是否清楚、交付能否验收。下面以海外市场 Shopify 项目常见的设计、开发、数据和上线责任为基准。",
  published: date, modified: date, readingTime: "约 10 分钟", about: ["Shopify 开发者怎么选", "Shopify 工作室", "Shopify Agency"],
  sections: [
    { title: "Freelancer vs Agency vs Studio 对照", lead: "三种模式没有绝对优劣。品牌应根据需求稳定度、跨专业协作和上线风险选择，而不是根据团队人数判断。", blocks: [
      { title: "Freelancer：明确小范围更高效", paragraphs: ["适合单一模块、Bug 修复、样式调整或已有完整设计与技术说明的项目。沟通直接、启动快，但需求、设计、测试和发布往往需要品牌方自己管理。", "确认个人是否有替补机制、版本控制和发布流程。如果关键人员不可用，项目是否还能继续，是选择个人开发者前必须回答的问题。"] },
      { title: "Agency：适合大范围并行交付", paragraphs: ["Agency 通常覆盖策略、设计、开发、项目管理与运营，适合多市场、大量内容或并行推广。成本通常更高，品牌需要确认实际执行人员，而不只是销售阶段展示的资历。", "大型团队不自动等于更快。审批层级、外包比例和交接次数也会增加信息损耗，应要求明确每个阶段的负责人。"] },
      { title: "Studio：适合设计与工程紧密配合", paragraphs: ["小型专业工作室通常比个人覆盖面完整，又比大型 Agency 的沟通链更短，适合需要 Figma、Liquid、CRO、GA4/GTM 与上线 QA 连贯交付的成长型品牌。", "选择 Studio 时要看真实案例证据、代码与 Theme Editor 能力，以及能否说明不做什么。范围边界清楚比全能口号更重要。"] },
    ]},
    { title: "报价怎么看", lead: "先用《Shopify 定制开发多少钱》理解功能点与工时，再比较团队模式。不要把时薪、项目总价和长期 Retainer 放在同一张表直接排序。", blocks: [
      { title: "统一比较口径", paragraphs: ["让所有候选方基于同一份页面、功能、内容责任、集成、设备范围和上线时间报价。分别列出设计、开发、QA、发布、售后与第三方费用。", "一个报价包含内容录入和两个月支持，另一个只交代码，两者总价没有直接可比性。"] },
      { title: "识别过低报价", paragraphs: ["过低报价通常省略需求发现、移动端、可访问性、真实数据测试、版本管理或售后。询问对方如何处理长标题、无库存、折扣、错误状态和 App 冲突，比问“能不能做”更有效。"] },
      { title: "按里程碑付款", paragraphs: ["建议将付款绑定到范围确认、设计确认、功能完成、QA 和上线交接。里程碑应有可见产物和验收窗口，避免按模糊的完成百分比付款。"] },
      { title: "把沟通与管理成本算进去", paragraphs: ["品牌方指定一个有决策权的负责人，集中反馈并确认优先级。多人分别在聊天、Figma 和邮件提出意见，会让任何团队的工时失真。", "报价中有项目管理并不等于浪费。对跨设计、开发、内容和数据的项目，清晰的会议纪要、风险清单与版本状态能减少返工；但管理层级过多、实际执行人不参与沟通，同样会拖慢项目。"] },
    ]},
    { title: "建站要多久", lead: "一个中等范围的定制 Shopify 项目可按四阶段规划。以下是工作窗口，不是无条件承诺；内容延迟和新增需求会改变排期。", blocks: [
      { title: "设计：1–2 周", paragraphs: ["完成信息架构、关键页面、组件和桌面/移动规则。品牌需要及时提供商品资料、参考方向与反馈人。若设计稿没有真实内容，开发阶段容易因文案长度和图片比例返工。"] },
      { title: "开发：3–5 周", paragraphs: ["把设计拆成 Shopify 模板、Section、Block、Liquid 与响应式行为，同时配置商品数据和必要 App。复杂集成应在开发前完成技术发现，否则这一阶段最容易失控。"] },
      { title: "测试：3–5 天", paragraphs: ["使用真实商品检查导航、PDP、变体、购物车、支付前流程、表单、浏览器和主要视口。测试不是开发完成后的装饰，而是交付的一部分。"] },
      { title: "上线：2–3 天", paragraphs: ["包含备份、域名或主题发布、关键路径回读、分析验证与回滚准备。上线窗口应避开大型活动，并预留品牌方确认支付、物流和政策配置的时间。"] },
      { title: "哪些情况会让排期延长", paragraphs: ["内容未准备、关键负责人反馈延迟、设计阶段持续加入页面、第三方 App 选型变化，以及支付物流没有可测试账户，都会让阶段之间反复往返。", "排期表应标出客户依赖和冻结点：设计确认后新增结构按变更处理；开发完成前提供最终商品样本；上线前冻结非必要功能。把依赖写出来，比承诺一个漂亮但不可控的日期更可靠。"] },
    ]},
    { title: "签约前必问 5 个问题", lead: "问题应逼近真实交付方式，而不是让供应商重复营销介绍。答案最好进入合同或项目说明。", blocks: [
      { title: "谁实际完成设计、开发和 QA？", paragraphs: ["确认核心人员、外包部分、沟通对象和替补安排。要求说明谁有发布权限，以及谁对最终验收负责。"] },
      { title: "怎样把设计变成可编辑 Shopify 模块？", paragraphs: ["让对方解释 Section schema、商品字段、Metafield 与 Theme Editor。只谈像素还原，不谈商家编辑和数据来源，后续运营成本通常更高。"] },
      { title: "如何测试、发布和回滚？", paragraphs: ["答案至少包含测试主题、版本控制、设备范围、关键流程、发布后检查和回滚条件。直接在生产主题边改边看风险较高。"] },
      { title: "哪些内容和第三方费用不包含？", paragraphs: ["确认产品录入、翻译、图片处理、Shopify 套餐、主题、App、API、支付手续费和长期维护。没有排除项的报价通常不是范围更全，而是边界未定义。"] },
      { title: "新增需求和售后怎样处理？", paragraphs: ["约定变更评估、反馈时限、Bug 定义、支持周期与响应时间。区分已交付范围内修复和新增功能，避免上线后争议。"] },
      { title: "要求一次小型技术讲解", paragraphs: ["签约前选一个真实需求，请候选方口头说明会使用哪些 Shopify 数据、怎样让商家编辑、手机端如何处理、怎样测试和发布。目的不是索取免费方案，而是验证其思路是否具体。", "靠谱的回答会主动提到限制和需要确认的信息；只保证“都能做”、无法解释数据来源与验收方法，通常意味着范围尚未被理解。"] },
    ]},
  ],
  faqs: [
    { q: "Shopify 开发找个人还是找公司？", a: "小而明确的任务适合个人；跨设计、开发、追踪和上线的项目更适合有完整交付链的 Studio 或 Agency。" },
    { q: "怎么验证 Shopify 开发者靠谱？", a: "查看真实上线项目、代码或 Theme Editor 证据、问题解释能力、测试发布流程和客户归属说明，而不只看效果图。" },
    { q: "合同最需要注意什么？", a: "重点是范围、排除项、里程碑、验收、变更、知识产权、第三方费用、售后和发布权限。" },
    { q: "Shopify 定制建站一般多久？", a: "中等范围可参考设计 1–2 周、开发 3–5 周、测试 3–5 天、上线 2–3 天；内容与复杂集成会影响排期。" },
  ],
  related: [
    { title: "Shopify 定制开发多少钱？", text: "用功能点、工时和风险比较报价。", href: "/learn/shopify-custom-development-cost" },
    { title: "Shopify 建站多少钱？", text: "查看通用建站三档费用和范围。", href: "/learn/shopify-website-cost" },
    { title: "Shopify 独立站建设服务", text: "了解从设计到上线的完整交付范围。", href: "/services/shopify-website-build" },
  ],
  ctas: [{ label: "查看价格", href: "/pricing" }, { label: "提交项目范围", href: "/diagnosis", primary: true }],
}

export const croChecklistArticle: LearnArticle = {
  slug: "shopify-cro-checklist", eyebrow: "PDP CRO CHECKLIST", title: "Shopify 转化率优化从哪下手？PDP 检查清单",
  description: "用 GA4 报告定位商品页流失，再按 12 项 PDP 清单检查信息、规格、购买动作、信任与移动端体验。",
  intro: "转化率优化不是先换按钮颜色。先确认流失发生在哪个阶段，再检查商品页是否帮助用户理解产品、确认适配、评估风险并完成购买。以下清单适合有稳定流量、但 PDP 表现不确定的 Shopify 品牌。",
  published: date, modified: date, readingTime: "约 12 分钟", about: ["Shopify 转化率优化清单", "Shopify PDP", "电商 CRO"],
  sections: [
    { title: "先看数据：用 GA4 哪 3 个报告定位流失", lead: "数据只能告诉你哪里值得看，不能直接证明原因。先固定市场、设备和时间范围，再把报告发现带回真实页面验证。", blocks: [
      { title: "Landing page：流量是否落在正确入口", paragraphs: ["比较自然、广告、社交进入的落地页与参与度。若广告承诺与 PDP 首屏信息不一致，用户可能在理解产品前离开。按移动端和桌面端拆分，避免平均值掩盖设备问题。"] },
      { title: "Funnel exploration：卡在浏览、加购还是结账", paragraphs: ["使用 view_item、add_to_cart、begin_checkout 和 purchase 建立方向性漏斗。关注阶段变化和细分差异，不把未验证的事件当作绝对事实。若 add_to_cart 异常，先确认追踪是否可靠。"] },
      { title: "Pages and screens：哪些 PDP 值得先查", paragraphs: ["结合访问量、参与、加购和收入选择高影响页面。高流量低加购与高加购低购买是两种不同问题，前者优先看信息和商品决策，后者还要检查购物车、运费与结账。"] },
      { title: "先确认数据能否支持判断", paragraphs: ["检查 view_item 与 add_to_cart 是否覆盖同一商品范围，页面路径和商品 ID 是否稳定，内部访问与测试订单是否被识别。若事件近期改过，前后时间段不能直接比较。", "数据不足时，将结论写成“值得检查”，而不是“已经导致转化下降”。这能避免团队为了追一个不可靠数字，反而忽略页面上可以直接观察的购买阻力。"] },
    ]},
    { title: "PDP 12 项检查清单", lead: "逐项记录 Observed Fact、Evidence、Why It Matters 和 Confidence。不要一次改完十二项，先找到最清晰、最接近收入的一处阻力。", blocks: [
      { title: "1–3：首屏价值、商品主体、价格", paragraphs: ["首屏应回答这是什么、适合谁、核心差异是什么；主图应能看清真实产品和使用情境；价格、折扣条件、分期与税费提示不能互相矛盾。", "高客单商品如果只展示氛围图，却把规格和适配藏在很后面，会增加用户确认成本。"], points: ["H1 与广告承诺一致", "主图可检查产品细节", "价格与优惠条件清楚"] },
      { title: "4–6：规格、变体、兼容性", paragraphs: ["变体名称应让用户理解差异，缺货状态要明确，尺寸、型号、适用范围和不兼容情况应在购买前可见。不要让用户依赖客服才能判断基本适配。"], points: ["当前选项和价格同步", "关键规格可扫描", "兼容与限制有明确说明"] },
      { title: "7–9：CTA、配送、退换保修", paragraphs: ["Add to Cart 要在做完核心选择后清晰可达。配送范围、时效、费用、退换条件和保修决定风险感知，尤其对跨境与高客单商品。承诺应具体且与政策页一致。"], points: ["CTA 状态与变体有效性一致", "配送承诺在购买决策附近", "保修与退换入口可找到"] },
      { title: "10–12：证据、移动端、性能", paragraphs: ["评论、案例、认证和真实使用内容应靠近相关疑问，而不是集中堆在页尾。手机端检查固定元素、图片比例、长标题、折叠内容和键盘焦点；性能检查应结合真实 Core Web Vitals，而非只看单次实验室分数。"], points: ["信任证据回应具体疑问", "390px 下无横向溢出和遮挡", "关键内容不等待重脚本才显示"] },
    ]},
    { title: "3 个最常见转化杀手", lead: "这些问题常见，但仍需要页面证据和数据方向共同支持，不能直接宣称造成了多少转化损失。", blocks: [
      { title: "决策信息分散", paragraphs: ["规格在图片里、配送在 FAQ、保修在页脚、兼容性要问客服。用户必须不断跳转才能确认购买，尤其影响移动端和高客单决策。解决方向是按决策顺序重组，而不是继续增加模块。"] },
      { title: "选项复杂但没有引导", paragraphs: ["颜色、尺寸、配置、附件与套餐同时出现，却没有默认逻辑、推荐组合或差异说明。用户可能担心选错而暂停。可以先明确必要选择，再把可选升级延后。"] },
      { title: "承诺与风险信息不一致", paragraphs: ["广告写免费配送，PDP 没有市场条件；首页写轻松退货，政策页限制很多；折扣价与购物车不同。信任问题往往不是缺少徽章，而是信息之间互相冲突。"] },
      { title: "如何确定第一优先级", paragraphs: ["把问题按证据强度、受影响流量、离购买动作的距离和修复成本评分。优先选择证据明确、商业相关、能在一到两个迭代内验证的问题。", "例如移动端高流量 PDP 的关键规格被折叠，而客服反复收到适配问题，这通常比更换按钮颜色更值得先做。优先级应能解释为什么现在处理，而不是因为某个最佳实践清单这样写。"] },
    ]},
    { title: "改完怎么验证：最小可行 A/B", lead: "不是每次优化都需要大型实验平台，但必须提前定义假设、指标和停止条件，避免看到短期波动就宣布成功。", blocks: [
      { title: "一次只验证一个核心假设", paragraphs: ["例如：把配送与保修信息移到 CTA 附近，是否提高进入购物车的比例。不要同时改首图、价格、文案和按钮，否则结果无法归因。"] },
      { title: "选择主指标与护栏指标", paragraphs: ["主指标可选 add_to_cart rate 或 begin_checkout rate，护栏指标包括退款、客单价、错误率和页面性能。只看按钮点击可能把问题推到后续流程。"] },
      { title: "先做 QA，再开始计数", paragraphs: ["验证两个版本在主要设备、市场、变体和流量来源下正常工作，确保事件命名与分流一致。追踪不可信时，A/B 结果没有决策价值。"] },
      { title: "样本不足时用证据迭代", paragraphs: ["低流量站点不要追求虚假的统计显著。可结合可用性测试、客服问题、录屏、订单反馈和阶段指标，先修复明显阻力，再积累稳定数据。"] },
      { title: "形成变更记录与回滚条件", paragraphs: ["记录旧版截图、假设、上线时间、受影响模板、事件版本和观察窗口。若错误率、页面速度或后续漏斗明显恶化，应有明确回滚条件。", "实验结束后，不只保存赢家。还要记录未支持的假设和可能原因，避免几个月后另一位成员再次测试同一想法。CRO 的长期价值来自可积累的决策证据。"] },
    ]},
  ],
  faqs: [
    { q: "Shopify CRO 应该先优化哪个页面？", a: "优先检查高流量、高商业价值且阶段表现异常的页面。多数品牌先从核心 PDP 开始，但应由数据和流量入口决定。" },
    { q: "PDP 检查只看 Add to Cart 吗？", a: "不够。还要看商品理解、变体选择、配送保修信息、begin_checkout、purchase、退款和性能等护栏指标。" },
    { q: "低流量 Shopify 店能做 A/B 测试吗？", a: "可以做小范围验证，但不要轻易宣称统计结论。优先结合可用性、客服反馈和明显 UX 问题做证据驱动迭代。" },
    { q: "提高转化率是否一定要打折？", a: "不一定。清晰规格、适配、配送、保修和可信证据通常能降低决策阻力，而不必牺牲价格。" },
    { q: "改完多久判断有效？", a: "取决于流量和购买周期。先定义样本、时间窗口、主指标和护栏指标，并覆盖完整业务周期，避免按单日波动判断。" },
  ],
  related: [
    { title: "GA4 purchase 排查清单", text: "先确认购买事件与收入数据可信。", href: "/learn/shopify-ga4-purchase-tracking-fix" },
    { title: "Shopify GA4 / GTM Tracking Plan", text: "建立可验证的电商事件与参数方案。", href: "/learn/shopify-ga4-gtm-tracking-plan" },
    { title: "Shopify 转化率优化服务", text: "查看诊断、优先级与实施范围。", href: "/services/shopify-conversion-optimization" },
  ],
  ctas: [{ label: "查看转化率优化服务", href: "/services/shopify-conversion-optimization", primary: true }],
}

export const learnArticles = [customDevelopmentCostArticle, ga4PurchaseFixArticle, hireDeveloperArticle, croChecklistArticle]
