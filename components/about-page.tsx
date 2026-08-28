"use client"

import Image from "next/image"

import {
  ArrowUpRight,
  BarChart3,
  FileSearch,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  PackageCheck,
  Route,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Target,
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"

const aboutSectionTitleClass = "text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal text-foreground"

const copy = {
  zh: {
    eyebrow: "ABOUT WHALELEAP STUDIO",
    title: "WhaleLeap Studio",
    subtitle: "专注 Shopify 成交系统的设计与开发工作室。",
    description:
      "我们服务准备出海、正在投放或需要升级 Shopify 的品牌。工作重点不是把页面做热闹，而是把产品、页面、主题、支付物流和数据追踪组织成能上线、能成交、能继续优化的系统。",
    primaryCta: "免费诊断我的 Shopify 站",
    secondaryCta: "查看交付原则",
    proof: ["Shopify 建站与主题开发", "转化路径与数据追踪", "跨境品牌上线与迭代"],
    proofShort: ["主题开发", "转化追踪", "全球增长"],
    journey: ["产品", "店铺", "数据", "增长"],
    profileLabel: "STUDIO PROFILE / REAL WORK",
    profileTitle: "同一张工作台，贯通策略与交付。",
    profileText:
      "WhaleLeap Studio 把策略判断、页面结构、主题开发与数据验证放在同一条工作链路里。你看到的不只是最终页面，也包括真正参与项目的人与日常工作环境。",
    profileCapabilities: ["STRATEGY / 策略判断", "DEVELOPMENT / 主题开发", "MEASUREMENT / 数据验证"],
    founderCaption: "创始人 / WHALELEAP STUDIO",
    founderRole: "DESIGN · DEVELOPMENT · MEASUREMENT",
    founderAlt: "WhaleLeap Studio 创始人肖像",
    workspaceCaption: "真实工作环境 / DESIGN & DEVELOPMENT",
    workspaceAlt: "WhaleLeap Studio 的真实工作环境与开发设备",
    whatTitle: "我们做什么",
    whatIntro: "围绕 Shopify 店铺从上线到增长的关键环节提供服务。",
    whatCoreLabel: "STUDIO SYSTEM / 01",
    whatCoreTitle: "WhaleLeap Growth OS",
    whatCoreText: "把建站、主题、转化与数据组织成一套可以持续迭代的 Shopify 增长系统。",
    whatCorePhases: ["BUILD", "CONVERT", "MEASURE"],
    whatOutputLabel: "系统输出",
    workLabel: "SELECTED WORK / REAL PAGES",
    workTitle: "真实页面与开发成果",
    workIntro: "从高视觉密度品牌首页，到复杂商品详情与科技产品购买体验。这里展示的是实际页面素材，不用模板占位图代替项目证据。",
    workItems: [
      {
        title: "电动自行车品牌首页",
        type: "HOMEPAGE SYSTEM",
        text: "用真实骑行场景承接核心产品卖点、车型切换与品类入口，让用户在首屏快速理解产品定位并继续探索。",
        alt: "电动自行车品牌 Shopify 首页开发页面",
      },
      {
        title: "科技产品集合与分类体验",
        type: "PRODUCT EXPERIENCE",
        text: "用高对比分类矩阵组织机器人、智能设备、穿戴与配件，让复杂产品线保持清晰、直接的浏览路径。",
        alt: "科技产品 Shopify 集合与分类页面",
      },
      {
        title: "科技产品购买体验",
        type: "COMMERCE UI",
        text: "使用更克制的产品画廊、库存提示与购买操作，降低科技产品页面的信息负担。",
        alt: "智能眼镜 Shopify 商品详情页开发页面",
      },
      {
        title: "博客内容与骑行指南",
        type: "BRAND STOREFRONT",
        text: "用主文章与延伸指南建立清晰的内容层级，把专业知识、真实骑行场景和后续商品决策连接起来。",
        alt: "电动越野车品牌 Shopify 博客与骑行指南页面",
      },
      {
        title: "品牌页尾与订阅体系",
        type: "FOOTER SYSTEM",
        text: "把订阅入口、主导航、联系信息、社交渠道与政策链接集中到页尾，让最后一个浏览触点仍然完整、可信。",
        alt: "科技零售品牌 Shopify 页尾导航与邮件订阅模块",
      },
    ],
    whatItems: [
      {
        title: "Shopify 独立站建设",
        text: "从页面结构、主题开发、支付物流到上线检查，搭建可投放的 Shopify 店铺。",
        icon: ShoppingBag,
      },
      {
        title: "Shopify 主题定制",
        text: "开发 Liquid、section、block、商品页模块、集合页模板和移动端体验。",
        icon: Layers3,
      },
      {
        title: "Shopify 转化率优化",
        text: "诊断广告流量、商品页、购物车、结账和信任内容中的转化断点。",
        icon: Target,
      },
      {
        title: "GA4 / GTM 数据追踪",
        text: "配置电商事件、广告像素、Product Schema 和上线前追踪测试。",
        icon: BarChart3,
      },
      {
        title: "跨境品牌上线与迭代",
        text: "帮助有产品的团队把 Shopify 做成可维护、可复盘、可继续增长的资产。",
        icon: Globe2,
      },
    ],
    notTitle: "我们不做什么",
    notIntro: "这能减少错误预期，也能让项目从一开始就更清楚。",
    notLabel: "PROJECT BOUNDARIES / 02",
    notStencil: "BOUNDARIES",
    notManifesto: ["SCOPE", "BEFORE", "BUILD"],
    notManifestoText: "清晰的范围不是限制，而是保护预算、时间和最终交付质量。",
    notManifestoShort: "清晰范围，保护预算、时间与交付质量。",
    notItemTitles: ["视觉服务成交", "目标真实可验证", "先定义，再开发", "技术栈保持可维护"],
    notItemSummaries: [
      "视觉必须服务用户理解、信任与成交。",
      "不承诺无法验证的 SEO、广告或销售结果。",
      "目标、预算和范围明确后再进入开发。",
      "避免用过多 App 掩盖业务逻辑问题。",
    ],
    notItems: [
      "不做只追求视觉但不考虑成交路径的页面",
      "不承诺不现实的 SEO、广告或销售结果",
      "不在需求、预算和上线目标不清楚时直接开发",
      "不依赖过度 App 堆功能来掩盖业务逻辑问题",
    ],
    principlesTitle: "交付原则",
    principlesLabel: "DELIVERY RAIL / 03",
    principleStages: ["DIAGNOSE", "PLAN", "BUILD", "VALIDATE", "ITERATE"],
    principleSummaries: [
      "先看产品、市场、页面和数据，再判断方案与报价。",
      "让页面结构服务用户理解、信任和下单。",
      "只开发能让支付、物流与业务流程跑通的功能。",
      "用 GA4、GTM 和核心事件验证页面与投放效果。",
      "采用可配置结构，减少写死和无意义 App 依赖。",
    ],
    principles: [
      {
        title: "先诊断，再报价",
        text: "先看产品、市场、页面、功能和数据问题，再判断该做模板、定制还是复杂业务。",
        icon: FileSearch,
      },
      {
        title: "先明确销售路径",
        text: "首页、商品页、集合页和内容页都应该服务用户理解、信任和下单。",
        icon: Route,
      },
      {
        title: "让功能服务业务",
        text: "功能不是越多越好，重点是让支付、物流、询价、B2B 或数据流程跑得通。",
        icon: SlidersHorizontal,
      },
      {
        title: "用数据验证交付",
        text: "GA4、GTM 和核心事件不是装饰项，而是后续判断页面和投放是否有效的基础。",
        icon: LineChart,
      },
      {
        title: "保持主题可迭代",
        text: "尽量用可配置 section、block 和清晰模板，减少一次性写死和无意义 App 依赖。",
        icon: Gauge,
      },
    ],
    evidenceLabel: "DELIVERY EVIDENCE",
    evidenceTitle: "交付之前，先把关键路径验证清楚。",
    evidenceStages: ["MEASUREMENT", "LAUNCH QA"],
    evidenceChecks: [
      ["事件触发", "参数完整", "重复计数"],
      ["响应式体验", "购物路径", "上线清单"],
    ],
    evidenceItems: [
      {
        title: "GA4 / GTM 事件验证",
        text: "核对关键事件是否触发、参数是否完整，以及同一转化是否被重复记录。",
        alt: "GA4 与 GTM 电商事件验证工作场景示意",
      },
      {
        title: "多设备 QA 与上线检查",
        text: "检查桌面与移动端体验、核心购买路径，并关闭上线前的交接清单。",
        alt: "Shopify 多设备响应式 QA 与上线检查工作场景示意",
      },
    ],
    clientTitle: "适合认真做增长的团队",
    clientLabel: "CLIENT FIT / 04",
    clientDescription:
      "我们更适合已经有产品、准备跨境销售或品牌出海，正在投放或准备让 Shopify 承接流量的团队；也适合店铺转化不稳定、需要 GA4 / GTM 与结构化数据支持复盘，并计划长期迭代 Shopify 的品牌。",
    clientImageAlt: "跨境电商品牌团队共同查看商品页面、转化漏斗和店铺数据",
    ctaTitle: "从一次诊断开始。",
    ctaText: "提交产品、市场、预算、当前店铺或目标，我们先判断 Shopify 该怎么建、怎么改、怎么追踪。",
    ctaLabel: "NEXT STEP / 05",
    ctaSignals: ["诊断店铺现状", "判断优化优先级", "明确下一步"],
    ctaMobile: "开始免费诊断",
  },
  en: {
    eyebrow: "ABOUT WHALELEAP STUDIO",
    title: "WhaleLeap Studio",
    subtitle: "A design and development studio focused on Shopify sales systems.",
    description:
      "We work with brands that are preparing to sell globally, running paid traffic, or upgrading Shopify. The goal is not a busier-looking page. The goal is to connect product, pages, theme, payments, logistics, and analytics into a system that can launch, sell, and keep improving.",
    primaryCta: "Request a Free Store Review",
    secondaryCta: "View Delivery Principles",
    proof: ["Shopify builds and theme development", "Conversion paths and analytics", "Global brand launch and iteration"],
    proofShort: ["Theme builds", "Conversion data", "Global growth"],
    journey: ["Product", "Storefront", "Data", "Growth"],
    profileLabel: "STUDIO PROFILE / REAL WORK",
    profileTitle: "One desk. A connected path from strategy to delivery.",
    profileText:
      "WhaleLeap Studio keeps strategic judgment, page structure, theme development, and measurement validation in one working loop. What you see here is not only the final interface, but also the person and workspace behind the work.",
    profileCapabilities: ["STRATEGY / DIRECTION", "DEVELOPMENT / THEMES", "MEASUREMENT / VALIDATION"],
    founderCaption: "FOUNDER / WHALELEAP STUDIO",
    founderRole: "DESIGN · DEVELOPMENT · MEASUREMENT",
    founderAlt: "Portrait of the founder of WhaleLeap Studio",
    workspaceCaption: "REAL WORKSPACE / DESIGN & DEVELOPMENT",
    workspaceAlt: "The real WhaleLeap Studio workspace and development setup",
    whatTitle: "What we do",
    whatIntro: "Services around the critical path from Shopify launch to growth.",
    whatCoreLabel: "STUDIO SYSTEM / 01",
    whatCoreTitle: "WhaleLeap Growth OS",
    whatCoreText: "Connect storefront builds, themes, conversion, and measurement into one Shopify growth system built to keep evolving.",
    whatCorePhases: ["BUILD", "CONVERT", "MEASURE"],
    whatOutputLabel: "System output",
    workLabel: "SELECTED WORK / REAL PAGES",
    workTitle: "Real storefront and product work",
    workIntro: "From visually dense brand homepages to complex product detail and technology purchase experiences. These are real project screens, not placeholder mockups.",
    workItems: [
      {
        title: "E-bike brand homepage",
        type: "HOMEPAGE SYSTEM",
        text: "Use a real riding scene to connect the core product message, model selection, and category entry points so visitors can understand the offer and keep exploring.",
        alt: "A Shopify homepage developed for an electric bicycle brand",
      },
      {
        title: "Technology collection experience",
        type: "PRODUCT EXPERIENCE",
        text: "Use a high-contrast category matrix to organize robots, smart devices, wearables, and accessories into a clear path through a complex product range.",
        alt: "A Shopify collection and category experience for technology products",
      },
      {
        title: "Technology purchase experience",
        type: "COMMERCE UI",
        text: "Use a restrained product gallery, availability cues, and purchase controls to reduce cognitive load on a technical product page.",
        alt: "A Shopify product detail experience for smart glasses",
      },
      {
        title: "Editorial guides and blog content",
        type: "BRAND STOREFRONT",
        text: "Use a lead story and supporting guides to connect expertise, real riding scenarios, and the product decisions visitors make next.",
        alt: "A Shopify blog and rider guide page for an electric dirt bike brand",
      },
      {
        title: "Brand footer and subscription system",
        type: "FOOTER SYSTEM",
        text: "Bring newsletter signup, primary navigation, contact details, social channels, and policy links into one final touchpoint that still feels complete and trustworthy.",
        alt: "A Shopify footer navigation and email subscription system for a technology retailer",
      },
    ],
    whatItems: [
      {
        title: "Shopify website builds",
        text: "Build Shopify stores ready for paid traffic, from page structure and theme development to payments, logistics, and launch checks.",
        icon: ShoppingBag,
      },
      {
        title: "Shopify theme customization",
        text: "Develop Liquid, sections, blocks, product modules, collection templates, and mobile experiences.",
        icon: Layers3,
      },
      {
        title: "Shopify conversion optimization",
        text: "Diagnose conversion bottlenecks across paid traffic, product pages, cart, checkout, and trust content.",
        icon: Target,
      },
      {
        title: "GA4 / GTM tracking",
        text: "Configure ecommerce events, ad pixels, Product Schema, and pre-launch tracking tests.",
        icon: BarChart3,
      },
      {
        title: "Global launch and iteration",
        text: "Help product-led teams turn Shopify into a maintainable, measurable, and improvable asset.",
        icon: Globe2,
      },
    ],
    notTitle: "What we do not do",
    notIntro: "Clear boundaries set the right expectations and make projects sharper from the start.",
    notLabel: "PROJECT BOUNDARIES / 02",
    notStencil: "BOUNDARIES",
    notManifesto: ["SCOPE", "BEFORE", "BUILD"],
    notManifestoText: "Clear scope is not a limitation. It protects budget, time, and the quality of the final delivery.",
    notManifestoShort: "Clear scope protects budget, time, and delivery quality.",
    notItemTitles: ["Visuals serve conversion", "Goals stay verifiable", "Define before building", "Keep the stack maintainable"],
    notItemSummaries: [
      "Visuals must support clarity, trust, and conversion.",
      "No promises that SEO, ads, or sales cannot verify.",
      "Build starts only after goals, budget, and scope are clear.",
      "No excessive apps hiding weak business logic.",
    ],
    notItems: [
      "We do not build pages that chase visuals while ignoring the sales path",
      "We do not promise unrealistic SEO, ad, or sales outcomes",
      "We do not start development when scope, budget, and launch goals are unclear",
      "We do not hide business logic problems behind excessive app stacking",
    ],
    principlesTitle: "Delivery principles",
    principlesLabel: "DELIVERY RAIL / 03",
    principleStages: ["DIAGNOSE", "PLAN", "BUILD", "VALIDATE", "ITERATE"],
    principleSummaries: [
      "Review product, market, pages, and data before scoping or quoting.",
      "Structure every page to support clarity, trust, and purchase.",
      "Build only what keeps payments, logistics, and business flows working.",
      "Use GA4, GTM, and core events to validate delivery and campaigns.",
      "Favor configurable themes over hard-coded pages and unnecessary apps.",
    ],
    principles: [
      {
        title: "Diagnose before quoting",
        text: "Review product, market, pages, features, and data before deciding whether the project needs a module build, custom build, or complex scope.",
        icon: FileSearch,
      },
      {
        title: "Define the sales path",
        text: "Homepage, product pages, collections, and content pages should help users understand, trust, and buy.",
        icon: Route,
      },
      {
        title: "Build for the business flow",
        text: "More features are not always better. Payments, logistics, quotes, B2B, and data flows need to work clearly.",
        icon: SlidersHorizontal,
      },
      {
        title: "Validate with data",
        text: "GA4, GTM, and core events are the foundation for judging whether pages and campaigns are working.",
        icon: LineChart,
      },
      {
        title: "Keep the theme iterable",
        text: "Use configurable sections, blocks, and clear templates where possible, reducing hard-coded pages and unnecessary app dependencies.",
        icon: Gauge,
      },
    ],
    evidenceLabel: "DELIVERY EVIDENCE",
    evidenceTitle: "Before handoff, we verify the paths that matter.",
    evidenceStages: ["MEASUREMENT", "LAUNCH QA"],
    evidenceChecks: [
      ["Event firing", "Parameter integrity", "Deduplication"],
      ["Responsive experience", "Purchase path", "Launch checklist"],
    ],
    evidenceItems: [
      {
        title: "GA4 / GTM event validation",
        text: "Check whether critical events fire, parameters arrive intact, and the same conversion is not counted twice.",
        alt: "Illustrative GA4 and GTM ecommerce event validation workspace",
      },
      {
        title: "Multi-device QA and launch checks",
        text: "Review desktop and mobile experiences, the core purchase path, and every item on the pre-launch handoff list.",
        alt: "Illustrative Shopify responsive QA and launch checking workspace",
      },
    ],
    clientTitle: "For teams serious about sustainable growth",
    clientLabel: "CLIENT FIT / 04",
    clientDescription:
      "We work best with product-led brands preparing for global sales, running paid traffic, or getting Shopify ready to convert it. We are also a strong fit for stores that need conversion restructuring, GA4 / GTM and structured data for review, and a long-term plan for continuous Shopify iteration.",
    clientImageAlt: "A cross-border ecommerce team reviewing a product page, conversion funnel, and store analytics",
    ctaTitle: "Start with a focused review.",
    ctaText: "Share your product, market, budget, current store, or goal. We will recommend what to build, improve, or measure first.",
    ctaLabel: "NEXT STEP / 05",
    ctaSignals: ["Review store health", "Prioritize improvements", "Define the next step"],
    ctaMobile: "Start free review",
  },
}

export function AboutPage() {
  const { language, localizedPath } = useLanguage()
  const text = copy[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="about-hero service-hero service-hero-home-layout relative overflow-hidden bg-[#020403] px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 md:px-10 md:pb-12 md:pt-32 lg:pb-8 lg:pt-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(119,252,117,0.14),transparent_32%),radial-gradient(ellipse_at_78%_72%,rgba(34,211,238,0.1),transparent_31%),linear-gradient(145deg,#010202_0%,#07110b_48%,#010302_100%)]" />
          <div aria-hidden="true" className="absolute -inset-x-[18%] -top-[20%] h-[118%] animate-cro-signal-orbit bg-[radial-gradient(ellipse_at_70%_34%,rgba(34,211,238,0.2),transparent_27%),radial-gradient(ellipse_at_28%_64%,rgba(119,252,117,0.27),transparent_30%)] opacity-90 blur-2xl will-change-transform motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle,rgba(119,252,117,0.46)_1px,transparent_1.4px)] [background-size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_73%)]" />
          <div aria-hidden="true" className="absolute inset-x-[-12%] bottom-[-12%] h-[43%] bg-[radial-gradient(ellipse_at_30%_66%,rgba(119,252,117,0.23),transparent_34%),radial-gradient(ellipse_at_72%_62%,rgba(34,211,238,0.2),transparent_36%)] blur-2xl" />

          <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-90" viewBox="0 0 1600 900" preserveAspectRatio="none">
            <defs>
              <linearGradient id="aboutJourneyLine" x1="0" x2="1">
                <stop offset="0%" stopColor="var(--color-growth)" stopOpacity="0" />
                <stop offset="28%" stopColor="var(--color-growth)" stopOpacity="0.72" />
                <stop offset="68%" stopColor="var(--color-signal)" stopOpacity="0.78" />
                <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="0" />
              </linearGradient>
              <filter id="aboutJourneyGlow" x="-30%" y="-80%" width="160%" height="260%">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path d="M-80 730 C 270 530, 430 760, 760 585 S 1210 390, 1680 650" fill="none" stroke="url(#aboutJourneyLine)" strokeWidth="3" />
            <path className="about-journey-flow motion-reduce:hidden" d="M-80 730 C 270 530, 430 760, 760 585 S 1210 390, 1680 650" fill="none" stroke="url(#aboutJourneyLine)" strokeLinecap="round" strokeWidth="9" filter="url(#aboutJourneyGlow)" />
            <path className="about-journey-flow about-journey-flow-secondary motion-reduce:hidden" d="M-80 730 C 270 530, 430 760, 760 585 S 1210 390, 1680 650" fill="none" stroke="url(#aboutJourneyLine)" strokeLinecap="round" strokeWidth="5" filter="url(#aboutJourneyGlow)" />
            <path d="M-100 795 C 330 650, 520 820, 835 690 S 1290 530, 1700 735" fill="none" stroke="url(#aboutJourneyLine)" strokeOpacity="0.55" strokeWidth="2" />
          </svg>

          <div aria-hidden="true" className="about-journey-nodes absolute inset-0 hidden lg:block">
            {text.journey.map((item, index) => (
              <div key={item} className={`about-journey-node about-journey-node-${index + 1}`}>
                <span className="size-2.5 animate-pulse rounded-full bg-primary shadow-[0_0_20px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />
                <span className="font-mono text-base uppercase tracking-[0.02em] text-white/65">0{index + 1} · {item}</span>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,3,2,0.02)_22%,rgba(1,3,2,0.22)_66%,rgba(1,3,2,0.72)_100%)]" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

          <div className="service-hero-layout relative mx-auto flex w-full min-w-0 max-w-[1500px] flex-col justify-center lg:min-h-[calc(100svh-7.5rem)]">
            <div className="mx-auto w-full min-w-0 max-w-6xl text-center lg:-translate-y-7">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary shadow-[0_0_28px_rgba(119,252,117,0.08)] backdrop-blur-sm">
                <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />
                {text.eyebrow}
              </p>
              <h1 className="mx-auto max-w-[1050px] bg-gradient-to-r from-foreground via-primary to-signal bg-[length:200%_100%] bg-clip-text text-balance text-[clamp(2.15rem,9.2vw,4.5rem)] font-bold leading-[1.05] tracking-normal text-transparent animate-shimmer motion-reduce:animate-none">
                {text.title}
              </h1>
              <p className="mx-auto mt-5 max-w-[900px] text-[clamp(1rem,1.8vw,1.35rem)] font-semibold leading-[1.5] text-foreground/90 md:mt-7">
                {text.subtitle}
              </p>
              <p className="service-hero-description mx-auto mt-4 max-w-3xl [overflow-wrap:anywhere] text-base leading-[1.65] text-muted-foreground md:mt-6 md:text-lg">
                {text.description}
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-5">
                <a
                  href={localizedPath("/diagnosis")}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_0_28px_rgba(119,252,117,0.28)] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98] md:px-10"
                >
                  {text.primaryCta}
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#principles"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.035] px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-white/[0.075] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:px-10"
                >
                  {text.secondaryCta}
                </a>
              </div>

              <div className="service-hero-proof mx-auto mt-8 grid max-w-5xl gap-2 sm:mt-10 sm:grid-cols-3 sm:gap-3 md:mt-12">
                {text.proof.map((item, index) => (
                  <div key={item} className="flex min-h-14 min-w-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-3 text-center backdrop-blur-md first:border-primary/20 first:bg-primary/[0.07]">
                    <span className="font-mono text-base text-primary">0{index + 1}</span>
                    <span className="hidden min-w-0 text-base font-medium leading-snug text-foreground/78 sm:inline">{item}</span>
                    <span className="min-w-0 text-base font-medium leading-snug text-foreground/78 sm:hidden">{text.proofShort[index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="studio-profile" className="bg-black px-6 py-[50px] md:px-10 md:py-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="relative isolate overflow-hidden rounded-[2.65rem_1.5rem_3rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_18%_22%,rgba(119,252,117,0.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.065),rgba(255,255,255,0.012))] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_42px_100px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,rgba(119,252,117,0.7)_1px,transparent_1.5px)] [background-size:32px_32px] [mask-image:linear-gradient(90deg,black,transparent_70%)]" />
              <div aria-hidden="true" className="absolute left-[7%] top-0 h-px w-[48%] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

              <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch xl:grid-cols-[0.78fr_1.22fr]">
                <div className="flex flex-col justify-center px-6 py-9 text-center sm:px-10 sm:py-12 lg:min-h-[620px] lg:px-10 lg:py-16 lg:text-left xl:px-16">
                  <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">{text.profileLabel}</p>
                  <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.85rem)] font-bold leading-[1.12] tracking-normal text-foreground">{text.profileTitle}</h2>
                  <p className="mt-5 text-base leading-[1.75] text-muted-foreground sm:text-lg">{text.profileText}</p>

                  <ul className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 lg:justify-start" aria-label={text.profileLabel}>
                    {text.profileCapabilities.map((item) => (
                      <li key={item} className="inline-flex items-center gap-2 font-mono text-base font-semibold tracking-[0.02em] text-foreground/78">
                        <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.8)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative min-w-0 lg:min-h-[620px]">
                  <figure className="group relative isolate aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:absolute lg:inset-0 lg:aspect-auto">
                    <Image
                      src="/images/about/real-workspace.jpg"
                      alt={text.workspaceAlt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 62vw"
                      className="object-cover object-[50%_44%] transition-transform duration-700 group-hover:scale-[1.018]"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.4),transparent_38%),linear-gradient(0deg,rgba(0,0,0,0.78),transparent_46%),linear-gradient(180deg,rgba(0,0,0,0.14),transparent_30%)]" />
                    <figcaption className="absolute bottom-5 right-5 max-w-[70%] text-right font-mono text-base font-semibold uppercase tracking-[0.02em] text-white sm:bottom-7 sm:right-8">
                      {text.workspaceCaption}
                    </figcaption>
                  </figure>

                  <div className="relative mx-4 mb-5 mt-4 grid grid-cols-[104px_1fr] items-center overflow-hidden rounded-[1.4rem_0.9rem_1.65rem_1rem] border border-white/20 bg-black/75 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_20px_55px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:mx-7 sm:mt-5 sm:grid-cols-[128px_1fr] sm:p-3 lg:absolute lg:bottom-8 lg:left-8 lg:mx-0 lg:mb-0 lg:mt-0 lg:block lg:h-[72%] lg:w-[34%] lg:min-w-[220px] lg:rounded-[2.2rem_1.15rem_2.55rem_1.35rem] lg:p-0">
                    <div className="relative aspect-square overflow-hidden rounded-[1rem_0.65rem_1.2rem_0.75rem] lg:absolute lg:inset-0 lg:aspect-auto lg:rounded-[inherit]">
                      <Image
                        src="/images/about/founder-portrait.png"
                        alt={text.founderAlt}
                        fill
                        priority={false}
                        sizes="(max-width: 640px) 104px, (max-width: 1023px) 128px, 270px"
                        className="object-cover object-center transition-transform duration-700 hover:scale-[1.018]"
                      />
                      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/5" />
                    </div>
                    <div className="relative px-4 py-2 lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-6 lg:pb-7">
                      <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-white">{text.founderCaption}</p>
                      <p className="mt-2 font-mono text-base leading-snug tracking-[0.02em] text-primary">{text.founderRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="studio-system" className="bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <PackageCheck className="mx-auto mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.whatTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.whatIntro}</p>
            </div>
            <div className="relative isolate overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_17%_30%,rgba(119,252,117,0.13),transparent_28%),radial-gradient(circle_at_84%_68%,rgba(34,211,238,0.09),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.012))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.17),0_42px_110px_rgba(0,0,0,0.38),0_0_80px_rgba(119,252,117,0.045)] backdrop-blur-2xl sm:p-6 lg:p-8">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.09] [background-image:radial-gradient(circle,rgba(119,252,117,0.55)_1px,transparent_1.5px)] [background-size:34px_34px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
              <div aria-hidden="true" className="studio-system-scan absolute -bottom-[18%] -top-[18%] left-0 w-[22%] -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(119,252,117,0.07),rgba(34,211,238,0.12),transparent)] blur-xl will-change-transform motion-reduce:hidden" />
              <div aria-hidden="true" className="absolute left-[8%] top-0 h-px w-[58%] animate-shimmer bg-gradient-to-r from-transparent via-primary/65 to-transparent bg-[length:200%_100%] motion-reduce:animate-none" />

              <div className="relative grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch lg:gap-10">
                <div className="relative flex flex-col justify-between overflow-hidden rounded-[2.2rem_1.25rem_2.55rem_1.5rem] bg-[radial-gradient(circle_at_32%_28%,rgba(119,252,117,0.2),transparent_34%),linear-gradient(145deg,rgba(2,8,5,0.82),rgba(3,13,10,0.54))] p-5 sm:min-h-[280px] sm:p-8 lg:min-h-[570px] lg:p-10">
                  <div aria-hidden="true" className="absolute -left-[26%] -top-[28%] size-[82%] animate-theme-aurora-orbit rounded-full bg-[conic-gradient(from_80deg,transparent,rgba(119,252,117,0.2),transparent,rgba(34,211,238,0.14),transparent)] blur-2xl will-change-transform motion-reduce:animate-none" />
                  <div aria-hidden="true" className="absolute bottom-[18%] right-[12%] size-24 rounded-full bg-primary/10 blur-2xl sm:size-36" />
                  <div className="relative">
                    <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">{text.whatCoreLabel}</p>
                    <h3 className="mt-3 max-w-md text-[clamp(1.8rem,3vw,3rem)] font-bold leading-[1.08] tracking-normal text-foreground sm:mt-4">{text.whatCoreTitle}</h3>
                    <p className="mt-4 max-w-md text-base leading-[1.7] text-muted-foreground sm:text-lg">{text.whatCoreText}</p>
                  </div>
                  <div className="relative mt-8 grid grid-cols-3 gap-2 sm:mt-10">
                    {text.whatCorePhases.map((phase, index) => (
                      <span key={phase} className="relative inline-flex min-h-12 min-w-0 flex-col items-center justify-center rounded-full bg-white/[0.05] px-2 text-center font-mono text-base font-semibold tracking-[0.02em] text-foreground/78 sm:flex-row sm:gap-2 sm:px-4">
                        <span className="text-primary/70">0{index + 1}</span>
                        <span className="max-w-full truncate">{phase}</span>
                        {index < text.whatCorePhases.length - 1 && (
                          <span aria-hidden="true" className="absolute -right-2 top-1/2 h-px w-2 -translate-y-1/2 bg-primary/35" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative min-w-0 py-1 sm:py-2 lg:py-3">
                  <div aria-hidden="true" className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-primary/20 via-primary/70 to-signal/55 sm:left-7 lg:bottom-10 lg:top-10" />
                  <div aria-hidden="true" className="absolute bottom-8 left-[1.4rem] top-8 w-1 overflow-hidden rounded-full sm:left-[1.65rem] lg:bottom-10 lg:top-10">
                    <span className="block h-20 w-full animate-cro-data-flow-y rounded-full bg-gradient-to-b from-transparent via-primary to-signal shadow-[0_0_18px_rgba(119,252,117,0.45)] motion-reduce:hidden" />
                  </div>
                  <ol>
                  {text.whatItems.map((item, index) => {
                    const Icon = item.icon
                    const isOutput = index === text.whatItems.length - 1

                    return (
                      <li key={item.title} className={`group relative grid min-w-0 grid-cols-[3rem_1fr] gap-3 rounded-[1.45rem] px-0 py-3 transition-colors duration-300 hover:bg-white/[0.03] sm:grid-cols-[3.5rem_1fr_auto] sm:gap-4 sm:px-2 sm:py-4 lg:px-3 ${isOutput ? "mt-1 bg-[linear-gradient(90deg,rgba(119,252,117,0.07),rgba(34,211,238,0.045),transparent)]" : ""}`}>
                        <div className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border bg-[#061009] transition-all duration-300 group-hover:scale-[1.04] sm:size-14 ${isOutput ? "border-signal/45 text-signal shadow-[0_0_26px_rgba(34,211,238,0.16)]" : "border-primary/30 text-primary shadow-[0_0_22px_rgba(119,252,117,0.08)] group-hover:border-primary/55 group-hover:shadow-[0_0_28px_rgba(119,252,117,0.16)]"}`}>
                          <Icon className="size-6" />
                        </div>
                        <div className="min-w-0 self-center pr-8 sm:pr-0">
                          <p className={`font-mono text-base font-semibold uppercase tracking-[0.02em] ${isOutput ? "text-signal/80" : "text-primary/65"}`}>{isOutput ? text.whatOutputLabel : index < 2 ? text.whatCorePhases[0] : index === 2 ? text.whatCorePhases[1] : text.whatCorePhases[2]}</p>
                          <h3 className="mt-1 text-lg font-semibold leading-snug text-foreground sm:text-xl">{item.title}</h3>
                          <p className="mt-2 text-base leading-[1.55] text-muted-foreground">{item.text}</p>
                        </div>
                        <span className={`absolute right-0 top-3 font-mono text-base sm:static sm:self-center ${isOutput ? "text-signal/55" : "text-primary/45"}`}>0{index + 1}</span>
                      </li>
                    )
                  })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="selected-work" className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <header className="mx-auto mb-8 max-w-4xl text-center md:mb-10">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-signal">{text.workLabel}</p>
              <h2 className={`mt-4 ${aboutSectionTitleClass}`}>{text.workTitle}</h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-[1.75] text-muted-foreground sm:text-lg">{text.workIntro}</p>
            </header>

            <div className="relative isolate overflow-hidden rounded-[2.9rem_1.5rem_3.25rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_10%_12%,rgba(34,211,238,0.09),transparent_24%),radial-gradient(circle_at_88%_70%,rgba(119,252,117,0.1),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.012))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_42px_100px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:p-6 lg:p-10">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,rgba(34,211,238,0.48)_1px,transparent_1.4px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
              <div aria-hidden="true" className="absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-signal/70 to-primary/55" />
              <div className="relative space-y-8 sm:space-y-10 lg:space-y-14">
              {[
                "/images/about/project-ebike-home.png",
                "/images/about/project-tech-collection.png",
                "/images/about/project-smart-glasses-pdp.png",
                "/images/about/project-rider-guides-v2.png",
                "/images/about/project-footer-system.png",
              ].map((src, index) => (
                <article
                  key={src}
                  className={`group grid min-w-0 gap-5 sm:gap-6 lg:items-center lg:gap-10 xl:gap-14 ${index % 2 === 1 ? "lg:grid-cols-[0.66fr_0.34fr]" : "lg:grid-cols-[0.34fr_0.66fr]"}`}
                >
                  <div className={`min-w-0 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <p className={`font-mono text-base font-semibold uppercase tracking-[0.02em] ${index < 2 ? "text-primary" : "text-signal"}`}>
                      0{index + 1} / {text.workItems[index].type}
                    </p>
                    <h3 className="mt-3 text-[clamp(1.55rem,2.7vw,2.65rem)] font-bold leading-[1.12] tracking-normal text-foreground">
                      {text.workItems[index].title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
                      {text.workItems[index].text}
                    </p>
                    <div className="mt-6 flex items-center gap-3" aria-hidden="true">
                      <span className={`size-2 rounded-full ${index < 2 ? "bg-primary shadow-[0_0_12px_rgba(119,252,117,0.7)]" : "bg-signal shadow-[0_0_12px_rgba(34,211,238,0.7)]"}`} />
                      <span className={`h-px w-24 bg-gradient-to-r ${index < 2 ? "from-primary/60" : "from-signal/60"} to-transparent`} />
                    </div>
                  </div>

                  <figure className={`relative min-w-0 overflow-hidden border border-white/12 bg-[#020303] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_28px_70px_rgba(0,0,0,0.3)] ${index % 2 === 1 ? "lg:order-1" : ""} ${
                    index === 0
                      ? "rounded-[2.5rem_1.25rem_1.7rem_1.4rem]"
                      : index === 1
                        ? "rounded-[1.35rem_2.55rem_1.55rem_1.9rem]"
                        : index === 2
                          ? "rounded-[1.55rem_1.9rem_2.55rem_1.3rem]"
                          : index === 3
                            ? "rounded-[1.9rem_1.4rem_1.3rem_2.65rem]"
                            : "rounded-[2.45rem_1.3rem_1.85rem_1.55rem]"
                  }`}>
                    <div className={`relative overflow-hidden ${
                      index === 0
                        ? "aspect-[16/9] lg:aspect-[2/1]"
                        : index === 1
                          ? "aspect-[4/3]"
                          : index === 2
                            ? "aspect-[4/3] lg:aspect-[16/10]"
                            : index === 3
                              ? "aspect-[16/9] lg:aspect-[2/1]"
                              : "aspect-[16/9]"
                    }`}>
                    <Image
                      src={src}
                      alt={text.workItems[index].alt}
                      fill
                      sizes="(max-width: 1023px) 88vw, 62vw"
                      className={`transition-transform duration-700 group-hover:scale-[1.012] ${
                        index === 0
                          ? "object-cover object-center"
                          : index === 1
                            ? "object-cover object-top"
                            : index === 2
                              ? "object-contain object-center"
                              : "object-cover object-center"
                      }`}
                    />
                      <div aria-hidden="true" className={index === 2 ? "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(0,0,0,0.18)_100%)]" : "absolute inset-0 bg-black/[0.015]"} />
                      <div aria-hidden="true" className={`absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent to-transparent ${index < 2 ? "via-primary/70" : "via-signal/70"}`} />
                    </div>
                  </figure>
                </article>
              ))}
              </div>
            </div>
          </div>
        </section>

        <section id="boundaries" className="scroll-mt-24 bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <ShieldCheck className="mx-auto mb-5 size-8 text-boundary drop-shadow-[0_0_12px_rgba(255,154,60,0.4)]" />
              <p className="mb-3 font-mono text-base font-semibold uppercase tracking-[0.02em] text-boundary/80">{text.notLabel}</p>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.notTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.notIntro}</p>
            </div>

            <div className="relative isolate w-full overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_8%_46%,rgba(255,154,60,0.14),transparent_27%),radial-gradient(circle_at_92%_54%,rgba(119,252,117,0.12),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.068),rgba(255,255,255,0.012))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.17),0_40px_105px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:p-7 lg:p-10">
              <div aria-hidden="true" className="absolute -left-[10%] top-[28%] h-[46%] w-[120%] bg-[linear-gradient(90deg,rgba(255,154,60,0.16),rgba(255,154,60,0.07)_30%,rgba(119,252,117,0.09)_62%,rgba(119,252,117,0.12))] blur-3xl" />
              <div aria-hidden="true" className="studio-system-scan absolute -bottom-[45%] -top-[45%] left-0 w-[20%] -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,154,60,0.07),rgba(119,252,117,0.14),transparent)] blur-xl [animation-delay:-4.5s] will-change-transform motion-reduce:hidden" />
              <div aria-hidden="true" className="absolute -bottom-[5%] left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[clamp(4rem,10vw,9.5rem)] font-bold tracking-[-0.05em] text-white/[0.032]">{text.notStencil}</div>
              <div aria-hidden="true" className="absolute inset-x-[8%] top-0 h-px animate-shimmer bg-gradient-to-r from-transparent via-boundary/65 to-primary/65 bg-[length:200%_100%] motion-reduce:animate-none" />

              <div className="relative text-center">
                <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-boundary/80">BOUNDARY MANIFESTO</p>
                <h3 className="mt-4 flex flex-wrap items-center justify-center gap-x-[0.22em] gap-y-1 text-[clamp(2.75rem,6vw,6rem)] font-bold leading-[0.9] tracking-[-0.045em]">
                  {text.notManifesto.map((line, index) => (
                    <span key={line} className={index === 0 ? "text-boundary" : index === 2 ? "text-primary" : "text-foreground"}>{line}</span>
                  ))}
                </h3>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.65] text-muted-foreground md:text-lg">
                  <span className="sm:hidden">{text.notManifestoShort}</span>
                  <span className="hidden sm:inline">{text.notManifestoText}</span>
                </p>

                <div className="mt-7 grid gap-x-5 gap-y-1 text-left md:grid-cols-2 md:gap-y-3 xl:mt-9 xl:grid-cols-4 xl:text-center">
                  {text.notItems.map((item, index) => (
                    <article key={item} className="grid min-w-0 grid-cols-[3.25rem_1fr] items-start gap-x-3 py-3 xl:block xl:px-3 xl:py-0">
                      <span className={`pt-0.5 font-mono text-xl font-bold xl:block xl:pt-0 ${index < 2 ? "text-boundary/80" : "text-primary/75"}`}>0{index + 1}</span>
                      <div className="min-w-0 xl:mt-3">
                        <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">{text.notItemTitles[index]}</h3>
                        <p className="mt-1.5 text-base leading-[1.6] text-muted-foreground sm:leading-[1.65]">
                          <span className="sm:hidden">{text.notItemSummaries[index]}</span>
                          <span className="hidden sm:inline">{item}</span>
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="principles" className="bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0 scroll-mt-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <FileSearch className="mx-auto mb-5 size-8 text-primary" />
              <p className="mb-3 font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary/75">{text.principlesLabel}</p>
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.principlesTitle}</h2>
            </div>
            <div className="relative isolate overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_12%_34%,rgba(119,252,117,0.12),transparent_28%),radial-gradient(circle_at_90%_58%,rgba(34,211,238,0.1),transparent_31%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.012))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_42px_100px_rgba(0,0,0,0.34)] sm:p-5 lg:p-8">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,rgba(119,252,117,0.5)_1px,transparent_1.4px)] [background-size:32px_32px] [mask-image:linear-gradient(to_right,black,transparent_88%)]" />
              <div aria-hidden="true" className="absolute bottom-5 left-[2.55rem] top-5 w-1 overflow-hidden rounded-full bg-gradient-to-b from-primary/25 via-primary/70 to-signal/45 lg:hidden">
                <span className="block h-20 w-full animate-cro-data-flow-y rounded-full bg-gradient-to-b from-transparent via-primary to-signal shadow-[0_0_18px_rgba(119,252,117,0.55)] motion-reduce:hidden" />
                <span className="block h-12 w-full animate-cro-data-flow-y rounded-full bg-gradient-to-b from-transparent via-signal to-primary shadow-[0_0_14px_rgba(34,211,238,0.5)] [animation-delay:-2.75s] [animation-duration:7.2s] motion-reduce:hidden" />
              </div>

              <svg aria-hidden="true" className="absolute inset-x-[4%] top-0 hidden h-24 w-[92%] overflow-visible lg:block" viewBox="0 0 1000 96" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="deliveryRailLine" x1="0" x2="1">
                    <stop offset="0%" stopColor="var(--color-growth)" stopOpacity="0.22" />
                    <stop offset="54%" stopColor="var(--color-growth)" stopOpacity="0.72" />
                    <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="0.48" />
                  </linearGradient>
                  <filter id="deliveryRailGlow" x="-20%" y="-120%" width="140%" height="340%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                <path d="M100 76 C 280 73, 390 67, 500 64 S 725 52, 900 48" fill="none" stroke="url(#deliveryRailLine)" strokeLinecap="round" strokeWidth="3" />
                <path className="delivery-rail-flow motion-reduce:hidden" d="M100 76 C 280 73, 390 67, 500 64 S 725 52, 900 48" fill="none" stroke="url(#deliveryRailLine)" strokeLinecap="round" strokeWidth="8" filter="url(#deliveryRailGlow)" />
                <path className="delivery-rail-flow delivery-rail-flow-secondary motion-reduce:hidden" d="M100 76 C 280 73, 390 67, 500 64 S 725 52, 900 48" fill="none" stroke="url(#deliveryRailLine)" strokeLinecap="round" strokeWidth="5" filter="url(#deliveryRailGlow)" />
              </svg>

              <div className="relative grid lg:grid-cols-5">
                {text.principles.map((item, index) => {
                  const Icon = item.icon
                  const nodeOffset = ["lg:translate-y-4", "lg:translate-y-3", "lg:translate-y-1", "lg:-translate-y-1", "lg:-translate-y-3"][index]

                  return (
                    <article key={item.title} className="group relative flex min-w-0 gap-3 py-3.5 first:pt-1 last:pb-1 lg:block lg:px-4 lg:py-0 lg:text-center xl:px-5">
                      <div className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border bg-[#061009] text-primary transition-[border-color,box-shadow,transform] duration-200 ease-out group-hover:border-primary/65 group-hover:shadow-[0_0_30px_rgba(119,252,117,0.3)] lg:mx-auto lg:size-14 ${index === text.principles.length - 1 ? "border-primary/55 shadow-[0_0_30px_rgba(119,252,117,0.25)]" : "border-primary/30 shadow-[0_0_24px_rgba(119,252,117,0.1)]"} ${nodeOffset}`}>
                        <Icon className="size-6" />
                      </div>
                      <div className="min-w-0 lg:mt-7">
                        <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary/70">0{index + 1} · {text.principleStages[index]}</p>
                        <h3 className="mt-1 text-lg font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary lg:mt-2">{item.title}</h3>
                        <p className="mt-2 text-base leading-[1.55] text-muted-foreground transition-colors duration-200 group-hover:text-foreground/75 lg:mt-3 lg:leading-[1.6]">
                          <span className="sm:hidden">{text.principleSummaries[index]}</span>
                          <span className="hidden sm:inline">{item.text}</span>
                        </p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 lg:mt-10">
              <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
                <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-signal">{text.evidenceLabel}</p>
                <h3 className="mt-4 text-[clamp(1.75rem,3.5vw,3.2rem)] font-bold leading-[1.12] tracking-normal text-foreground">{text.evidenceTitle}</h3>
              </header>

              <div className="relative isolate overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_14%_24%,rgba(119,252,117,0.1),transparent_30%),radial-gradient(circle_at_88%_72%,rgba(34,211,238,0.08),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.012))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_38px_95px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:p-5 lg:p-6">
                <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(119,252,117,0.55)_1px,transparent_1.4px)] [background-size:32px_32px] [mask-image:linear-gradient(90deg,black,transparent_84%)]" />
                <div aria-hidden="true" className="studio-system-scan pointer-events-none absolute -bottom-[18%] -top-[18%] left-0 z-20 hidden w-[14%] -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(119,252,117,0.06),rgba(34,211,238,0.12),transparent)] blur-xl will-change-transform motion-reduce:hidden lg:block" />
                <div aria-hidden="true" className="absolute left-[10%] top-0 h-px w-[56%] bg-gradient-to-r from-transparent via-signal/65 to-transparent" />

                <div className="relative grid gap-8 lg:grid-cols-[1.16fr_0.84fr] lg:gap-3">
                  {[
                    "/images/about/generated-measurement-validation.png",
                    "/images/about/generated-launch-qa.png",
                  ].map((src, index) => (
                    <article key={src} className="flex min-w-0 flex-col">
                      <div className="order-1 px-2 pb-5 pt-2 sm:px-3 sm:pb-6 lg:order-2 lg:px-5 lg:pb-3 lg:pt-6">
                        <p className={`font-mono text-base font-semibold uppercase tracking-[0.02em] ${index === 0 ? "text-primary" : "text-signal"}`}>
                          0{index + 1} / {text.evidenceStages[index]}
                        </p>
                        <h4 className="mt-2 text-xl font-semibold leading-snug text-foreground sm:text-2xl">{text.evidenceItems[index].title}</h4>
                        <p className="mt-3 text-base leading-[1.65] text-muted-foreground sm:text-lg">{text.evidenceItems[index].text}</p>
                        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2" aria-label={text.evidenceItems[index].title}>
                          {text.evidenceChecks[index].map((item) => (
                            <li key={item} className="inline-flex items-center gap-2 text-base font-medium text-foreground/75">
                              <span aria-hidden="true" className={`size-1.5 shrink-0 rounded-full ${index === 0 ? "bg-primary shadow-[0_0_12px_rgba(119,252,117,0.7)]" : "bg-signal shadow-[0_0_12px_rgba(34,211,238,0.7)]"}`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <figure className={`group relative order-2 aspect-[1586/992] overflow-hidden lg:order-1 ${index === 0 ? "rounded-[2.2rem_1rem_1.45rem_1.15rem]" : "rounded-[1.15rem_2.15rem_1.25rem_1.55rem]"}`}>
                        <Image
                          src={src}
                          alt={text.evidenceItems[index].alt}
                          fill
                          sizes={index === 0 ? "(max-width: 1023px) 88vw, 56vw" : "(max-width: 1023px) 88vw, 40vw"}
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.018]"
                        />
                        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-black/5" />
                      </figure>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="client-fit" className="scroll-mt-24 bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <header className="mx-auto mb-6 max-w-[1000px] text-center sm:mb-8 lg:mb-10">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">{text.clientLabel}</p>
              <h2 className={`mt-4 ${aboutSectionTitleClass}`}>{text.clientTitle}</h2>
              <p className="mx-auto mt-5 max-w-[940px] text-base leading-[1.75] text-foreground/72 sm:text-lg sm:leading-[1.75] lg:mt-6">
                {text.clientDescription}
              </p>
            </header>

            <figure className="relative isolate overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[#030604] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_42px_105px_rgba(0,0,0,0.38)]">
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-[1918/820]">
                <Image
                  src="/images/about-client-fit-v2.png"
                  alt={text.clientImageAlt}
                  fill
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 92vw, 1500px"
                  className="object-cover object-[72%_center] sm:object-[68%_center] lg:object-center"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15" />
                <div aria-hidden="true" className="absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-primary/65 to-signal/45" />
              </div>
            </figure>
          </div>
        </section>

        <section id="next-step" className="scroll-mt-24 bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[3.2rem_1.5rem_3.6rem_1.8rem] border border-white/25 bg-[linear-gradient(115deg,rgba(255,255,255,0.08),rgba(255,255,255,0.018)_40%,rgba(34,211,238,0.055)_72%,rgba(119,252,117,0.075))] px-7 py-10 shadow-[inset_0_2px_0_rgba(255,255,255,0.23),inset_0_-1px_0_rgba(119,252,117,0.12),0_45px_110px_rgba(0,0,0,0.48),0_0_85px_rgba(34,211,238,0.08)] backdrop-blur-3xl sm:px-9 sm:py-12 md:px-14 md:py-16">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(119,252,117,0.12),transparent_30%),radial-gradient(circle_at_86%_74%,rgba(34,211,238,0.13),transparent_32%)]" />
            <div aria-hidden="true" className="absolute inset-x-[7%] top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

            <svg aria-hidden="true" viewBox="0 0 1500 420" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-75">
              <defs>
                <linearGradient id="aboutCtaLine" x1="0" x2="1">
                  <stop offset="0%" stopColor="var(--color-growth)" stopOpacity="0" />
                  <stop offset="30%" stopColor="var(--color-growth)" stopOpacity="0.82" />
                  <stop offset="72%" stopColor="var(--color-signal)" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="0" />
                </linearGradient>
                <filter id="aboutCtaGlow" x="-20%" y="-100%" width="140%" height="300%">
                  <feGaussianBlur stdDeviation="7" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <path d="M-80 385 C 260 310, 480 390, 760 310 S 1170 180, 1580 245" fill="none" stroke="url(#aboutCtaLine)" strokeOpacity="0.38" strokeWidth="2" />
              <path className="about-journey-flow motion-reduce:hidden" d="M-80 385 C 260 310, 480 390, 760 310 S 1170 180, 1580 245" fill="none" stroke="url(#aboutCtaLine)" strokeLinecap="round" strokeWidth="8" filter="url(#aboutCtaGlow)" />
              <path className="about-journey-flow about-journey-flow-secondary motion-reduce:hidden" d="M-80 350 C 300 255, 520 355, 820 260 S 1220 120, 1580 205" fill="none" stroke="url(#aboutCtaLine)" strokeLinecap="round" strokeWidth="5" filter="url(#aboutCtaGlow)" />
            </svg>

            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,4,3,0.2),rgba(2,4,3,0.04)_58%,rgba(2,4,3,0.18))]" />

            <div className="relative">
              <p className="text-center font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary lg:text-left">{text.ctaLabel}</p>
              <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
                <div className="text-center lg:text-left">
                  <h2 className={aboutSectionTitleClass}>{text.ctaTitle}</h2>
                  <p className="mx-auto mt-5 max-w-3xl text-base leading-[1.75] text-muted-foreground sm:text-lg lg:mx-0">{text.ctaText}</p>
                  <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-base text-foreground/70 lg:justify-start" aria-label={language === "zh" ? "诊断结果" : "Review outcomes"}>
                    {text.ctaSignals.map((signal, index) => (
                      <li key={signal} className="flex items-center gap-2">
                        <span className={`size-2 rounded-full ${index === text.ctaSignals.length - 1 ? "bg-signal shadow-[0_0_12px_rgba(34,211,238,0.7)]" : "bg-primary shadow-[0_0_12px_rgba(119,252,117,0.65)]"}`} />
                        {signal}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={localizedPath("/diagnosis")}
                  className="inline-flex min-h-14 w-fit items-center justify-center gap-2 justify-self-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-[0_0_34px_rgba(119,252,117,0.24)] transition-all hover:brightness-110 active:scale-[0.98] lg:justify-self-end"
                >
                  <span className="sm:hidden">{text.ctaMobile}</span>
                  <span className="hidden sm:inline">{text.primaryCta}</span>
                  <ArrowUpRight className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
