import type { LearnArticle } from "@/components/learn-article-page"

const date = "2026-11-02"

export const platformComparisonArticle: LearnArticle = {
  slug: "shopify-vs-shopline-vs-woocommerce",
  eyebrow: "独立站平台选型",
  title: "Shopify vs Shopline vs WooCommerce：独立站选型对比",
  description: "Shopify、Shopline、WooCommerce 哪个好？按预算、技术能力、海外销售和维护成本比较，帮刚起步的团队选适合自己的独立站平台。",
  intro: "准备做独立站，先别问哪个平台“最好”。先问：卖给谁、谁负责维护、准备花多少钱、以后要改多少东西。Shopify、Shopline 和 WooCommerce 都能开店，真正的差别在于你要自己承担多少技术工作，以及以后改动有多自由。",
  published: date,
  modified: date,
  readingTime: "约 10 分钟",
  about: ["Shopify Shopline WooCommerce 哪个好", "独立站平台选型", "Shopify vs Shopline", "Shopify vs WooCommerce"],
  sections: [
    {
      title: "一句话结论：不同阶段选不同平台",
      lead: "先按当前阶段做初选，再用后面的六个维度检查。这里的“适合”是选择方向，不是保证某个平台一定更便宜或更好卖。",
      table: {
        headers: ["你现在的情况", "优先看", "主要理由"],
        rows: [
          ["新团队，想尽快试卖", "Shopify 或 Shopline", "托管式开店，日常服务器维护较少；比较目标市场的支付和所需功能。"],
          ["已有稳定销量，准备做品牌定制", "Shopify", "主题、应用与开发者生态可支持逐步定制，仍需算清后续应用费用。"],
          ["有技术团队，想掌控网站与主机", "WooCommerce", "基于 WordPress 自建，代码和部署方式更自主，也要自己负责维护。"],
        ],
      },
      blocks: [
        { title: "先排除不适合的选择", paragraphs: ["没有技术负责人，却希望随时改插件、服务器和结账逻辑，WooCommerce 的维护工作可能被低估。已经决定做复杂的品牌体验，也别只比较三个平台的入门订阅价。"] },
      ],
    },
    {
      title: "三平台定位一张表",
      lead: "Shopline 不是 Shopify 的地区版本，WooCommerce 也不是“免维护的免费 Shopify”。先把建站方式和技术门槛分清。",
      table: {
        headers: ["平台", "适用人群", "建站方式", "技术门槛", "生态"],
        rows: [
          ["Shopify", "希望较快上线，后续逐步做品牌定制的团队", "平台托管；主题、应用和后台配置", "日常上架较低；深度定制需开发", "Shopify 应用、主题及开发者生态"],
          ["Shopline", "希望用托管式工具开店、重视现有功能适配的团队", "平台托管；模板、应用和后台配置", "日常运营较低；定制能力看套餐与接口", "Shopline 自有应用与服务生态"],
          ["WooCommerce", "有 WordPress 经验或技术团队的商家", "自选主机，在 WordPress 上安装与维护", "建站和长期维护要求较高", "WordPress 插件、主题与开发者生态"],
        ],
      },
      blocks: [
        { title: "表格怎么用", paragraphs: ["先写下你必须具备的功能，再分别去后台或官方文档核对。不要只凭“插件数量多”判断功能就能直接上线：插件之间也可能不兼容。"] },
      ],
    },
    {
      title: "六个维度对比",
      lead: "别只看第一年的订阅费。把开店、运营和将来换平台的成本放在一起比较。",
      blocks: [
        { title: "1. 上手成本", paragraphs: ["Shopify 和 Shopline 都提供托管式后台，通常不用自己维护服务器。WooCommerce 需要先有 WordPress 与主机，再处理安装、安全和更新；有现成技术团队时，这些工作可以自己控制。"] },
        { title: "2. 定制自由度", paragraphs: ["Shopify 可以定制主题和接入应用，但平台底层与结账能力受产品和套餐边界约束。Shopline 也提供模板、应用和部分开发能力，具体开放范围要看所选方案。WooCommerce 的代码和部署更可控，改动自由度高，但每次改动都要自己承担兼容和测试责任。"] },
        { title: "3. 费用结构：订阅、扩展、支付分开算", paragraphs: ["Shopify 与 Shopline 都有平台订阅费；主题、付费应用及支付相关费用可能另外产生。WooCommerce 核心软件免费，但主机、域名、付费扩展、维护和支付手续费不会自动免费。三家的地区、币种、付款周期、促销和支付方案不同，不能拿一个首页价格直接比较总成本。", "截至 2026 年 11 月 2 日已核对三家的官方价格页。具体数字会变化；签约或开店前，请按你的注册地区、月付或年付方式、支付方式，到下方官方链接重新核算。"] },
        { title: "4. 出海、多语言和多币种", paragraphs: ["Shopify 的 Markets 可按市场配置语言、币种等体验，但多币种结账受支付方式等条件限制。Shopline 提供跨境销售相关功能，能否满足目标国家的支付和本地化需求，应以实际方案及后台可用项为准。WooCommerce 可以通过插件组合实现多语言、多币种，插件选择和兼容由商家负责。"] },
        { title: "5. 日常运营维护负担", paragraphs: ["托管平台主要由平台维护基础设施，商家仍要管理商品、内容、应用、权限与追踪。WooCommerce 还要安排主机、WordPress、插件、安全备份和更新测试。团队里没人负责这些事时，所谓“软件免费”并不等于维护成本低。"] },
        { title: "6. 迁移与锁定成本", paragraphs: ["三个平台都可以导出部分数据，但页面结构、主题、应用和支付流程不能指望一键原样搬走。平台越依赖特定应用和自定义逻辑，未来换平台就越需要重新核对功能。选型前问清哪些数据可导出、哪些代码归自己，以及应用停用后功能会怎样。"] },
      ],
    },
    {
      title: "分场景选：先看你属于哪一类",
      lead: "同一平台对不同团队的答案会变。下面只给选择方向，实际仍要对照目标市场和功能清单。",
      blocks: [
        { title: "刚起步，小预算测品", paragraphs: ["先用 Shopify 或 Shopline 的合适入门方案试卖，比较目标市场的收款条件、物流接入和需要额外购买的应用。不要一开始就做大规模定制；先确认产品和订单流程能跑通。"] },
        { title: "已有稳定销量，要做品牌定制", paragraphs: ["Shopify 通常值得优先评估：主题可逐步改进，也能接入成熟应用。把商品页、内容管理、数据追踪和以后谁维护写进需求，再决定哪些功能需要定制开发。"] },
        { title: "有技术团队，要完全自主", paragraphs: ["如果团队能持续维护 WordPress、主机、插件和安全，WooCommerce 可提供更高的自主控制。自主也意味着出问题时，需要你们自己定位并修复。"] },
        { title: "国内团队做海外市场", paragraphs: ["不要根据团队在国内就直接选某个平台。先列目标国家、收款主体、币种、语言、税务与物流，再去各平台核对可用条件。海外 DTC 重点看客户下单体验和长期运营能力，而不只是中文后台是否顺手。"] },
      ],
    },
    {
      title: "选错的代价：换平台不只是搬商品",
      lead: "这一节只提醒换平台的成本，不提供迁移操作步骤。已经有店铺的团队，应先确认现有问题能否在原平台解决。",
      blocks: [
        { title: "数据要核对", paragraphs: ["商品、变体、客户、历史订单、优惠规则和页面内容的字段可能不同。即使能导出文件，也需要检查哪些信息能被新平台正确接收；某些应用里的数据还要单独评估。"] },
        { title: "主题往往要重做", paragraphs: ["旧平台的模板和模块通常不能直接放进新平台。商品页、导航、筛选、移动端交互与后台可编辑能力，都可能需要重新实现和验收。"] },
        { title: "追踪要重接", paragraphs: ["GA4、GTM、广告像素与购买事件依赖具体页面和结账流程。换平台后应重新核对事件是否触发、金额是否正确、是否重复发送。不要把旧店铺的追踪配置原样复制就认为数据可信。"] },
      ],
    },
    {
      title: "决策自测清单：回答这 5 个问题",
      lead: "把答案写下来。如果多数答案还不清楚，先做小范围验证，再决定平台和开发预算。",
      blocks: [
        { title: "问题 1–5", paragraphs: ["1. 未来一年主要卖到哪些国家，收款和发货主体在哪里？", "2. 现在是测品，还是已有稳定订单、准备做品牌体验？", "3. 谁来维护网站、插件、安全备份和日常更新？", "4. 必须自己改的页面或业务规则有哪些，现成工具能否满足？", "5. 平台费、插件费、支付费、开发费和维护费，你分别能承担多少？", "答案偏向“尽快试卖、没有技术负责人”，先比较 Shopify 和 Shopline；偏向“已有销量、需要主题定制”，优先评估 Shopify；偏向“有持续技术维护能力、要掌控主机与代码”，再认真评估 WooCommerce。"] },
      ],
    },
  ],
  faqs: [
    { q: "Shopline 是不是就是国内版 Shopify？", a: "不是。Shopline 和 Shopify 是不同公司的产品，各自有自己的后台、套餐、主题、应用和接口。不要把一个平台的功能或价格直接套到另一个平台。" },
    { q: "WooCommerce 免费是不是最便宜？", a: "不一定。WooCommerce 核心软件免费，但主机、域名、付费插件、支付手续费、安全和维护都可能收费。要比的是一段时间内的总成本。" },
    { q: "已经在 Shopline／WooCommerce 上了，值得迁到 Shopify 吗？", a: "先看现有平台是否真的限制了销售、编辑或追踪需求。迁移会涉及数据核对、主题重做和追踪重接；如果只是一个可以修复的问题，不应为了换平台而换平台。" },
    { q: "不懂代码能用 Shopify 吗？", a: "可以。上架商品、配置主题和处理订单通常可在后台完成。需要特殊页面、复杂交互或系统对接时，再找人开发，并确认交付和维护方式。" },
    { q: "三个平台哪个最适合做海外 DTC？", a: "没有对所有品牌都成立的答案。先核对目标市场的支付、币种、语言、物流和团队维护能力。想在托管平台上逐步做品牌定制，可优先评估 Shopify；也应让 Shopline 和 WooCommerce 按同一需求清单接受比较。" },
  ],
  related: [
    { title: "Shopify 定制开发多少钱？", text: "确定平台后，再判断定制功能会怎样影响开发范围。", href: "/learn/shopify-custom-development-cost" },
    { title: "Shopify 开发者怎么选？", text: "准备找人实施时，查看如何选择合作方。", href: "/learn/hire-shopify-developer" },
    { title: "Shopify 定制开发服务", text: "查看主题与店铺开发的实际服务范围。", href: "/services/shopify-website-build" },
  ],
  sources: [
    { label: "Shopify 官方价格与套餐", href: "https://www.shopify.com/pricing" },
    { label: "Shopify Markets 官方说明", href: "https://help.shopify.com/en/manual/markets" },
    { label: "Shopify 多币种条件", href: "https://help.shopify.com/en/manual/payments/shopify-payments/store-currency/multi-currency" },
    { label: "Shopline 官方价格与套餐", href: "https://www.shopline.com/pricing" },
    { label: "WooCommerce 官方价格说明", href: "https://woocommerce.com/pricing/" },
    { label: "WooCommerce 多币种说明", href: "https://woocommerce.com/document/shop-currency/" },
  ],
  ctaNote: "还没有店铺？先发产品方向和目标市场，初步判断 Shopify 是否适合你；已有店铺则说明目前的问题。免费阶段先沟通需求，不保证提供书面诊断报告。",
  ctas: [{ label: "免费 Shopify 店铺检查", href: "/diagnosis", primary: true }],
}
