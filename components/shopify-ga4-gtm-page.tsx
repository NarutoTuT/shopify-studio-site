"use client"

import { useState } from "react"
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Gauge,
  HelpCircle,
  LineChart,
  MousePointerClick,
  PackageSearch,
  Radar,
  SearchCheck,
  ShieldCheck,
  Tag,
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"
import { ServiceFaqPanel } from "@/components/service-faq-panel"
import { useLanguage } from "@/components/language-provider"

const copy = {
  zh: {
    eyebrow: "SHOPIFY GA4 / GTM TRACKING",
    title: "Shopify GA4 / GTM 数据追踪配置",
    subtitle: "让广告点击、浏览商品、加购、结账和购买事件能被正确记录、校验和复盘。",
    description:
      "Shopify 店铺能成交还不够，你需要知道订单从哪里来、哪一步掉了、广告平台和 GA4 为什么对不上。我们会围绕电商事件、GTM 容器、广告像素和上线前测试建立一套可复盘的数据追踪基础。",
    primaryCta: "免费诊断我的追踪问题",
    secondaryCta: "查看追踪范围",
    proof: ["GA4 电商事件", "GTM 容器配置", "Meta / Google Ads 基础转化"],
    fitTitle: "适合这些情况",
    fitIntro: "如果下面任一信号与你当前的店铺状态一致，就值得先检查追踪链路，而不是继续增加标签。",
    fitSignalTitles: ["正在投放或准备投放广告", "Shopify 与平台数据不一致", "核心电商事件记录异常", "上线前需要完整追踪基础"],
    fitResult: "符合其中一项，就值得先检查追踪链路",
    fitItems: [
      "正在投放 Meta Ads、Google Ads 或准备投放广告",
      "Shopify 后台有订单，但广告平台和 GA4 数据对不上",
      "GA4 没有正确记录 view_item、add_to_cart、purchase 等事件",
      "上线前希望一次性打好数据追踪、Schema 和测试基础",
    ],
    scopeTitle: "服务范围",
    scopeIntro: "目标不是堆标签，而是让关键成交路径可被追踪、验证和解释。",
    scopeGroupTitles: ["追踪基础", "信号采集", "质量校验"],
    scopeGroupDescriptions: ["GA4 + GTM", "Events + Ads", "Schema + QA"],
    scopeResults: ["可追踪", "可验证", "可解释"],
    scopes: [
      {
        title: "GA4 基础配置",
        text: "确认 GA4 属性、数据流、电商事件和关键转化指标的基础配置。",
        icon: BarChart3,
      },
      {
        title: "GTM 容器配置",
        text: "规划 GTM 容器、触发器、变量和标签，避免后续每次改代码都重新发版。",
        icon: Tag,
      },
      {
        title: "电商事件追踪",
        text: "覆盖 view_item、add_to_cart、begin_checkout、purchase 等核心路径。",
        icon: MousePointerClick,
      },
      {
        title: "广告转化基础",
        text: "配合 Meta Pixel、Google Ads 转化和基础受众数据，提升投放复盘能力。",
        icon: LineChart,
      },
      {
        title: "Product Schema",
        text: "整理商品结构化数据基础，帮助搜索引擎理解商品、价格和库存信息。",
        icon: PackageSearch,
      },
      {
        title: "上线前测试",
        text: "用调试工具检查事件触发、参数、重复触发和关键页面的埋点风险。",
        icon: ClipboardCheck,
      },
    ],
    eventsTitle: "建议优先追踪的事件",
    eventsIntro: "先保证核心成交路径准确，再扩展更细的营销事件。",
    eventsCoreLabel: "核心购买路径",
    eventsSupportLabel: "辅助行为信号",
    eventParams: [["item_id", "value", "currency"], ["items", "quantity", "value"], ["items", "coupon", "value"], ["transaction_id", "value", "currency"], ["form_id", "lead_source"], ["search_term"]],
    eventValidation: ["触发校验", "参数完整", "去重检查"],
    events: [
      ["view_item", "商品详情页浏览"],
      ["add_to_cart", "加入购物车"],
      ["begin_checkout", "开始结账"],
      ["purchase", "完成购买"],
      ["generate_lead", "提交咨询或诊断表单"],
      ["search", "站内搜索"],
    ],
    processTitle: "配置流程",
    processEyebrow: "Tracking implementation / 05",
    processIntro: "从接入检查到测试交付，每一步都有明确的实施范围与验证结果。",
    processStatus: "Measurement pipeline / online",
    processReady: "05 stages ready",
    processStageTitles: ["接入检查", "事件规划", "标签配置", "路径测试", "文档交付"],
    processStageCodes: ["Audit", "Plan", "Configure", "Validate", "Handoff"],
    process: [
      "确认当前 Shopify、GA4、GTM、广告平台的接入状态",
      "梳理需要追踪的成交路径、事件名称和关键参数",
      "配置或调整 GA4、GTM、像素和基础转化标签",
      "在商品页、购物车、结账和购买路径上测试事件",
      "交付追踪说明，标记已完成项、风险项和后续可优化项",
    ],
    faqTitle: "常见问题",
    faqs: [
      {
        q: "Shopify 自带 GA4 够不够？",
        a: "如果只是基础看订单来源，可能够用。但如果你要投放广告、分析加购和结账漏斗、或者统一管理多个平台标签，通常需要结合 GTM 和更明确的事件规划。",
      },
      {
        q: "GA4 和 GTM 有什么区别？",
        a: "GA4 是分析工具，用来接收和查看数据；GTM 是标签管理工具，用来管理事件、触发器和第三方追踪代码。两者职责不同，常常一起使用。",
      },
      {
        q: "为什么广告后台和 Shopify 订单对不上？",
        a: "常见原因包括归因窗口不同、浏览器隐私限制、重复或漏触发事件、结账域名变化、支付跳转、Cookie 限制和广告平台建模差异。追踪配置只能降低误差，不能保证所有平台完全一致。",
      },
      {
        q: "是否支持 Meta Pixel？",
        a: "支持基础 Meta Pixel 和标准事件检查。更复杂的 CAPI 服务端事件、去重和广告平台回传，需要单独评估技术方案和账号权限。",
      },
      {
        q: "是否包含服务端追踪？",
        a: "默认不包含服务端追踪。本页服务重点是浏览器端 GA4/GTM 和基础广告像素。服务端追踪涉及服务器、网关、事件去重和隐私合规，需要单独报价。",
      },
      {
        q: "多语言或多币种会影响追踪吗？",
        a: "会影响部分事件参数、货币、页面路径和报表归因。多市场站点需要在事件参数和报表维度里提前规划。",
      },
    ],
    ctaTitle: "先把数据问题说清楚，再决定怎么配置。",
    ctaText: "提交你的 Shopify 店铺、广告平台、GA4/GTM 状态和当前数据问题，我们先判断追踪链路哪里需要修。",
    relatedTitle: "相关 Shopify 服务",
    relatedIntro: "数据追踪通常要和建站结构、转化优化一起看，确保页面、事件和预算范围能互相支撑。",
    relatedLinks: [
      {
        title: "Shopify 独立站建设服务",
        text: "查看建站阶段如何规划页面结构、基础 SEO、GA4/GTM 和上线检查。",
        href: "/services/shopify-website-build",
        cta: "查看建站服务",
      },
      {
        title: "Shopify 建站价格",
        text: "了解建站、模块加购、GA4/GTM 和复杂业务定制的报价边界。",
        href: "/pricing",
        cta: "查看价格页",
      },
    ],
  },
  en: {
    eyebrow: "SHOPIFY GA4 / GTM TRACKING",
    title: "Shopify GA4 / GTM Tracking Setup",
    subtitle: "Track ad clicks, product views, add-to-cart, checkout, and purchase events accurately enough to review decisions.",
    description:
      "A Shopify store that sells is not enough. You need to know where orders come from, where visitors drop off, and why ad platforms and GA4 disagree. We build a trackable foundation around ecommerce events, GTM, ad pixels, and pre-launch testing.",
    primaryCta: "Diagnose My Tracking Issue",
    secondaryCta: "View Tracking Scope",
    proof: ["GA4 ecommerce events", "GTM container setup", "Meta / Google Ads conversion basics"],
    fitTitle: "Best fit",
    fitIntro: "If any of these signals match your current store, review the tracking path before adding more tags.",
    fitSignalTitles: ["Running or preparing paid media", "Shopify and platform data disagree", "Core ecommerce events are unreliable", "Tracking foundations are needed before launch"],
    fitResult: "One matching signal is enough to review the tracking path",
    fitItems: [
      "Stores running or preparing Meta Ads, Google Ads, or other paid channels",
      "Shopify shows orders, but ad platforms and GA4 do not match",
      "GA4 does not correctly record view_item, add_to_cart, purchase, or similar events",
      "Teams that want tracking, Schema, and test coverage ready before launch",
    ],
    scopeTitle: "Scope of work",
    scopeIntro: "The goal is not more tags. The goal is a conversion path that can be tracked, validated, and explained.",
    scopeGroupTitles: ["Foundation", "Signal collection", "Quality validation"],
    scopeGroupDescriptions: ["GA4 + GTM", "Events + Ads", "Schema + QA"],
    scopeResults: ["Trackable", "Validated", "Explainable"],
    scopes: [
      {
        title: "GA4 foundation",
        text: "Confirm GA4 property, data stream, ecommerce events, and key conversion basics.",
        icon: BarChart3,
      },
      {
        title: "GTM container setup",
        text: "Plan GTM container, triggers, variables, and tags so future tracking changes are easier.",
        icon: Tag,
      },
      {
        title: "Ecommerce events",
        text: "Cover core events such as view_item, add_to_cart, begin_checkout, and purchase.",
        icon: MousePointerClick,
      },
      {
        title: "Ad conversion basics",
        text: "Support Meta Pixel, Google Ads conversions, and basic audience data for campaign review.",
        icon: LineChart,
      },
      {
        title: "Product Schema",
        text: "Structure product data basics so search engines can understand product, price, and availability.",
        icon: PackageSearch,
      },
      {
        title: "Pre-launch testing",
        text: "Use debugging tools to check event firing, parameters, duplicates, and tracking risks.",
        icon: ClipboardCheck,
      },
    ],
    eventsTitle: "Priority events",
    eventsIntro: "Get the main sales path right first, then expand into deeper marketing events.",
    eventsCoreLabel: "Core commerce path",
    eventsSupportLabel: "Supporting signals",
    eventParams: [["item_id", "value", "currency"], ["items", "quantity", "value"], ["items", "coupon", "value"], ["transaction_id", "value", "currency"], ["form_id", "lead_source"], ["search_term"]],
    eventValidation: ["Trigger verified", "Parameters complete", "Deduplication checked"],
    events: [
      ["view_item", "Product detail view"],
      ["add_to_cart", "Add to cart"],
      ["begin_checkout", "Begin checkout"],
      ["purchase", "Completed purchase"],
      ["generate_lead", "Consultation or diagnosis form"],
      ["search", "On-site search"],
    ],
    processTitle: "Setup process",
    processEyebrow: "Tracking implementation / 05",
    processIntro: "From connection audit to validation and handoff, every stage has a clear implementation scope and outcome.",
    processStatus: "Measurement pipeline / online",
    processReady: "05 stages ready",
    processStageTitles: ["Connection audit", "Event planning", "Tag configuration", "Journey validation", "Documentation handoff"],
    processStageCodes: ["Audit", "Plan", "Configure", "Validate", "Handoff"],
    process: [
      "Review current Shopify, GA4, GTM, and ad platform setup",
      "Map the conversion path, event names, and key parameters",
      "Configure or adjust GA4, GTM, pixels, and conversion tags",
      "Test events across product, cart, checkout, and purchase paths",
      "Deliver tracking notes with completed items, risks, and next optimizations",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Is Shopify's built-in GA4 enough?",
        a: "It can be enough for basic order source reporting. If you run ads, analyze cart and checkout funnels, or manage multiple platform tags, GTM and clearer event planning are usually needed.",
      },
      {
        q: "What is the difference between GA4 and GTM?",
        a: "GA4 is the analytics tool that receives and reports data. GTM is the tag manager used to manage events, triggers, and third-party tracking scripts. They often work together.",
      },
      {
        q: "Why do ad platforms and Shopify orders not match?",
        a: "Common reasons include attribution windows, browser privacy limits, duplicate or missing events, checkout domain changes, payment redirects, cookie limits, and platform modeling differences. Tracking setup reduces error, but platforms will not always match perfectly.",
      },
      {
        q: "Do you support Meta Pixel?",
        a: "Yes, for basic Meta Pixel and standard event checks. More complex CAPI server-side events, deduplication, and platform feedback loops require separate scoping and account access.",
      },
      {
        q: "Is server-side tracking included?",
        a: "Not by default. This service focuses on browser-side GA4/GTM and basic ad pixels. Server-side tracking requires servers, gateways, deduplication, and privacy compliance planning, so it is quoted separately.",
      },
      {
        q: "Do multi-language or multi-currency stores affect tracking?",
        a: "Yes. They can affect event parameters, currency, page paths, and reporting dimensions. Multi-market stores should plan these fields before implementation.",
      },
    ],
    ctaTitle: "Clarify the data issue before changing tracking.",
    ctaText: "Send your Shopify store, ad platforms, GA4/GTM status, and current reporting problem. We will identify which part of the tracking path needs work.",
    relatedTitle: "Related Shopify Services",
    relatedIntro: "Tracking should be evaluated together with site structure and CRO so pages, events, and budget scope support each other.",
    relatedLinks: [
      {
        title: "Shopify Website Build Service",
        text: "See how page structure, basic SEO, GA4/GTM, and launch QA are planned during the build stage.",
        href: "/services/shopify-website-build",
        cta: "View Build Service",
      },
      {
        title: "Shopify Website Pricing",
        text: "Understand pricing boundaries for builds, add-on modules, GA4/GTM, and complex business customization.",
        href: "/pricing",
        cta: "View Pricing",
      },
    ],
  },
}

const ga4GtmStructuredData = {
  zh: {
    breadcrumbs: [
      { name: "首页", url: "https://whaleleap.studio/" },
      { name: "服务", url: "https://whaleleap.studio/#services" },
      { name: "Shopify GA4 / GTM 数据追踪配置", url: "https://whaleleap.studio/services/shopify-ga4-gtm" },
    ],
    service: {
      name: "Shopify GA4 / GTM 数据追踪配置",
      description: "为 Shopify 店铺配置 GA4、GTM、电商事件、广告转化基础、Product Schema 和上线前追踪测试。",
      url: "https://whaleleap.studio/services/shopify-ga4-gtm",
    },
  },
  en: {
    breadcrumbs: [
      { name: "Home", url: "https://whaleleap.studio/en" },
      { name: "Services", url: "https://whaleleap.studio/en#services" },
      { name: "Shopify GA4 / GTM Tracking Setup", url: "https://whaleleap.studio/en/services/shopify-ga4-gtm" },
    ],
    service: {
      name: "Shopify GA4 / GTM Tracking Setup",
      description: "GA4, GTM, ecommerce events, advertising conversions, product schema, and pre-launch tracking validation for Shopify stores.",
      url: "https://whaleleap.studio/en/services/shopify-ga4-gtm",
    },
  },
}

const ga4GtmFaqMeta = [
  { code: "FOUNDATION", zh: ["Shopify", "GA4", "基础配置"], en: ["Shopify", "GA4", "Foundation"] },
  { code: "PLATFORM", zh: ["GA4", "GTM", "职责边界"], en: ["GA4", "GTM", "Responsibilities"] },
  { code: "ATTRIBUTION", zh: ["订单差异", "归因窗口", "数据校验"], en: ["Order variance", "Attribution", "Validation"] },
  { code: "META", zh: ["Meta Pixel", "标准事件", "广告转化"], en: ["Meta Pixel", "Standard events", "Ads"] },
  { code: "SERVER", zh: ["服务端追踪", "CAPI", "去重"], en: ["Server-side", "CAPI", "Deduplication"] },
  { code: "MARKETS", zh: ["多语言", "多币种", "事件参数"], en: ["Languages", "Currencies", "Parameters"] },
]

export function ShopifyGa4GtmPage() {
  const { language, localizedPath } = useLanguage()
  const text = copy[language]
  const structuredData = ga4GtmStructuredData[language]
  const [activeFaq, setActiveFaq] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData
        breadcrumbs={structuredData.breadcrumbs}
        service={structuredData.service}
        language={language}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="service-hero relative flex items-center justify-center overflow-hidden bg-[#020403] px-4 pb-10 pt-24 sm:px-6 sm:pb-16 sm:pt-28 md:px-10 md:pb-20 md:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_44%,rgba(119,252,117,0.12),transparent_30%),radial-gradient(ellipse_at_78%_34%,rgba(34,211,238,0.13),transparent_30%),linear-gradient(135deg,#020403,#07100b_52%,#010202)]" />
          <div aria-hidden="true" className="absolute -inset-x-[18%] -top-[22%] h-[118%] animate-cro-signal-orbit bg-[radial-gradient(ellipse_at_66%_34%,rgba(34,211,238,0.21),transparent_28%),radial-gradient(ellipse_at_34%_68%,rgba(119,252,117,0.23),transparent_31%)] opacity-90 blur-2xl will-change-transform motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(119,252,117,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.2)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 size-[min(76vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/14 shadow-[0_0_100px_rgba(119,252,117,0.08)]">
            <span className="absolute inset-[8%] animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-primary/20 motion-reduce:animate-none" />
            <span className="absolute inset-[21%] animate-[spin_38s_linear_infinite_reverse] rounded-full border border-cyan-300/16 motion-reduce:animate-none" />
            <span className="absolute inset-[35%] animate-pulse rounded-full bg-primary/[0.04] shadow-[0_0_90px_rgba(119,252,117,0.13)] motion-reduce:animate-none" />
            <Radar className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 text-primary/[0.08]" />
          </div>

          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-65" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
            <defs><linearGradient id="ga4-hero-event-flow" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#77fc75" stopOpacity="0" /><stop offset="30%" stopColor="#77fc75" stopOpacity="0.62" /><stop offset="72%" stopColor="#22d3ee" stopOpacity="0.32" /><stop offset="100%" stopColor="#77fc75" stopOpacity="0" /></linearGradient></defs>
            <g className="animate-cro-signal-orbit motion-reduce:animate-none">
              <path d="M-90 690 C230 510 430 790 760 670 S1250 430 1690 610" fill="none" stroke="url(#ga4-hero-event-flow)" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="112 36" vectorEffect="non-scaling-stroke" />
              <path d="M60 235 C310 360 470 180 800 325 S1270 500 1560 250" fill="none" stroke="rgba(34,211,238,0.27)" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="7 18" vectorEffect="non-scaling-stroke" />
              <path d="M260 30 C420 240 570 290 800 450 S1160 680 1410 860" fill="none" stroke="rgba(119,252,117,0.2)" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="4 22" vectorEffect="non-scaling-stroke" />
              <circle cx="255" cy="319" r="5" fill="#77fc75" opacity="0.7" /><circle cx="610" cy="278" r="5" fill="#22d3ee" opacity="0.65" /><circle cx="1030" cy="401" r="5" fill="#77fc75" opacity="0.7" /><circle cx="1335" cy="347" r="5" fill="#22d3ee" opacity="0.65" />
            </g>
          </svg>

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
            {text.events.slice(0, 4).map(([name, description], index) => {
              const position = index === 0 ? "left-[6%] top-[29%]" : index === 1 ? "right-[6%] top-[31%]" : index === 2 ? "bottom-[14%] left-[12%]" : "bottom-[12%] right-[12%]"
              return <div key={name} className={`absolute flex items-center gap-3 rounded-full bg-black/25 px-4 py-3 text-base text-white/38 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_28px_rgba(119,252,117,0.07)] backdrop-blur-sm ${position}`}><span className={`size-2 rounded-full ${index === 1 || index === 3 ? "bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.75)]" : "bg-primary shadow-[0_0_12px_rgba(119,252,117,0.75)]"}`} /><span><strong className="block font-mono text-base font-medium text-primary/70">0{index + 1} · {name}</strong><span className="mt-1 block text-base">{description}</span></span></div>
            })}
          </div>

          <span aria-hidden="true" className="absolute left-0 top-[34%] h-1.5 w-28 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] motion-reduce:hidden" />
          <span aria-hidden="true" className="absolute left-0 top-[70%] h-1.5 w-36 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-[1px] [animation-delay:1.8s] motion-reduce:hidden" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.22)_58%,rgba(0,0,0,0.64)_100%)]" />

          <div className="pointer-events-none relative z-10 mx-auto w-full max-w-[95%] px-2 text-center lg:max-w-6xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.08em] text-primary shadow-[0_0_28px_rgba(119,252,117,0.1)] backdrop-blur-sm sm:mb-5"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />{text.eyebrow}</p>
            <h1 className="mx-auto max-w-6xl bg-gradient-to-r from-white via-primary to-white bg-[length:200%_100%] bg-clip-text text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-normal text-transparent animate-shimmer motion-reduce:animate-none">{text.title}</h1>
            <p className="mx-auto mt-4 max-w-4xl text-base font-semibold leading-[1.6] text-white/86 sm:mt-5 md:mt-6 md:text-xl">{text.subtitle}</p>
            <p className="service-hero-description sr-only sm:not-sr-only sm:mx-auto sm:mt-5 sm:max-w-3xl sm:text-base sm:leading-[1.7] sm:text-white/58 md:text-lg">{text.description}</p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row">
              <a href={localizedPath("/diagnosis")} className="pointer-events-auto inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-[0_0_30px_rgba(119,252,117,0.28)] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98] sm:px-10">
                {text.primaryCta}
                <ArrowUpRight className="size-5" />
              </a>
              <a href="#scope" className="pointer-events-auto inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-black/15 px-8 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-10">
                {text.secondaryCta}
              </a>
            </div>

            <div className="service-hero-proof mt-6 grid gap-2 sm:mt-12 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
              {text.proof.map((item) => (
                <span key={item} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-base text-white/62 backdrop-blur-sm">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="tracking-fit" className="scroll-mt-24 bg-black px-4 py-[50px] sm:px-6 md:px-10 md:py-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.08em] text-cyan-300">Tracking fit / 04</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.fitTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground md:text-lg">{text.fitIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-[radial-gradient(circle_at_50%_45%,rgba(119,252,117,0.1),transparent_27%),radial-gradient(circle_at_82%_20%,rgba(34,211,238,0.07),transparent_27%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(34,211,238,0.11),0_40px_110px_rgba(0,0,0,0.34),0_0_48px_rgba(119,252,117,0.055)] ring-1 ring-primary/[0.07] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(119,252,117,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.28)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <span className="flex items-center gap-3 font-mono text-base uppercase text-primary"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />Tracking readiness scan</span>
                <span className="font-mono text-base uppercase text-white/35">04 signals online</span>
              </div>

              <div className="relative mt-7 hidden min-h-[500px] lg:block">
                <svg aria-hidden="true" viewBox="0 0 1200 500" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-60">
                  <defs><linearGradient id="tracking-fit-line" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#77fc75" stopOpacity="0.16" /><stop offset="0.5" stopColor="#77fc75" stopOpacity="0.72" /><stop offset="1" stopColor="#22d3ee" stopOpacity="0.2" /></linearGradient></defs>
                  <path d="M300 105 C420 105 470 185 540 220" fill="none" stroke="url(#tracking-fit-line)" strokeWidth="2" strokeDasharray="7 10" />
                  <path d="M900 105 C780 105 730 185 660 220" fill="none" stroke="url(#tracking-fit-line)" strokeWidth="2" strokeDasharray="7 10" />
                  <path d="M300 395 C420 395 470 315 540 280" fill="none" stroke="url(#tracking-fit-line)" strokeWidth="2" strokeDasharray="7 10" />
                  <path d="M900 395 C780 395 730 315 660 280" fill="none" stroke="url(#tracking-fit-line)" strokeWidth="2" strokeDasharray="7 10" />
                </svg>

                <div className="absolute left-1/2 top-1/2 flex size-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-[radial-gradient(circle_at_42%_34%,rgba(119,252,117,0.2),rgba(3,10,6,0.92)_60%)] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_72px_rgba(119,252,117,0.15)]">
                  <span aria-hidden="true" className="absolute inset-[-18px] animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-primary/18 motion-reduce:animate-none" />
                  <span aria-hidden="true" className="absolute inset-5 animate-pulse rounded-full border border-cyan-300/12 motion-reduce:animate-none" />
                  <div className="relative px-5"><Radar className="mx-auto size-8 text-primary" /><strong className="mt-3 block text-xl leading-tight text-white">Tracking Fit</strong><span className="mt-2 block font-mono text-base uppercase text-cyan-200">Scanning / 04</span></div>
                </div>

                <ol aria-label={text.fitTitle}>
                  {text.fitItems.map((item, index) => {
                    const Icon = [LineChart, BarChart3, MousePointerClick, ClipboardCheck][index]
                    const positions = ["left-0 top-5", "right-0 top-5", "bottom-5 left-0", "bottom-5 right-0"]
                    return (
                      <li key={item} className={`absolute w-[31%] px-4 py-4 ${positions[index]}`}>
                        <div className="flex items-start gap-4"><span className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-black/42 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07),0_0_26px_rgba(119,252,117,0.09)] ${index === 1 || index === 3 ? "text-cyan-200" : "text-primary"}`}><Icon className="size-5" /></span><div className="min-w-0"><span className="font-mono text-base text-primary/70">0{index + 1} / SIGNAL</span><h3 className="mt-1 text-lg font-bold leading-tight text-white">{text.fitSignalTitles[index]}</h3><p className="mt-2 text-base leading-[1.6] text-white/55">{item}</p></div></div>
                      </li>
                    )
                  })}
                </ol>
              </div>

              <div className="relative z-10 mt-7 lg:hidden">
                <div className="relative mx-auto flex size-44 items-center justify-center rounded-full border border-primary/30 bg-[radial-gradient(circle_at_42%_34%,rgba(119,252,117,0.2),rgba(3,10,6,0.92)_60%)] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_58px_rgba(119,252,117,0.13)]">
                  <span aria-hidden="true" className="absolute inset-[-14px] animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-primary/18 motion-reduce:animate-none" />
                  <div className="relative px-4"><Radar className="mx-auto size-7 text-primary" /><strong className="mt-2 block text-xl leading-tight text-white">Tracking Fit</strong><span className="mt-2 block font-mono text-base uppercase text-cyan-200">Scanning / 04</span></div>
                </div>

                <div className="relative mt-8">
                  <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-primary/20 via-primary/58 to-cyan-300/24"><span className="absolute left-1/2 top-0 h-16 w-1.5 -translate-x-1/2 animate-cro-data-flow-y rounded-full bg-gradient-to-b from-transparent via-primary to-transparent blur-[1px] motion-reduce:hidden" /></span>
                  <ol aria-label={text.fitTitle}>
                    {text.fitItems.map((item, index) => {
                      const Icon = [LineChart, BarChart3, MousePointerClick, ClipboardCheck][index]
                      return (
                        <li key={item} className="relative z-10 flex min-h-[138px] items-start gap-4 py-3"><span className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-[#050806] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07),0_0_24px_rgba(119,252,117,0.1)] ${index === 1 || index === 3 ? "text-cyan-200" : "text-primary"}`}><Icon className="size-5" /></span><div className="min-w-0 pt-0.5"><span className="font-mono text-base text-primary/70">0{index + 1} / SIGNAL</span><h3 className="mt-1 text-lg font-bold leading-tight text-white">{text.fitSignalTitles[index]}</h3><p className="mt-2 text-base leading-[1.6] text-white/55">{item}</p></div></li>
                      )
                    })}
                  </ol>
                </div>
              </div>

              <div className="relative z-10 mx-auto mt-5 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-[1.35rem] bg-black/24 px-5 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:flex-row sm:text-left lg:mt-1">
                <p className="text-base font-semibold leading-relaxed text-white">{text.fitResult}</p>
                <a href="#scope" className="inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-bold text-primary-foreground shadow-[0_0_26px_rgba(119,252,117,0.22)] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.98] sm:w-auto">{text.secondaryCta}<ArrowUpRight className="size-5" /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="scope" className="scroll-mt-24 bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.08em] text-cyan-300">Tracking scope / 06</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.scopeTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground md:text-lg">{text.scopeIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-[radial-gradient(circle_at_18%_26%,rgba(119,252,117,0.09),transparent_26%),radial-gradient(circle_at_82%_70%,rgba(34,211,238,0.075),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(34,211,238,0.11),0_40px_110px_rgba(0,0,0,0.34),0_0_48px_rgba(119,252,117,0.055)] ring-1 ring-primary/[0.07] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(119,252,117,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.28)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <span className="flex items-center gap-3 font-mono text-base uppercase text-primary"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />Measurement architecture / online</span>
                <span className="font-mono text-base uppercase text-white/35">06 capabilities connected</span>
              </div>

              <div className="relative z-10 mt-9 hidden lg:block">
                <span aria-hidden="true" className="absolute left-[16.5%] right-[16.5%] top-8 h-1 overflow-hidden rounded-full bg-gradient-to-r from-primary/22 via-primary/42 to-cyan-300/22 shadow-[0_0_18px_rgba(119,252,117,0.18)]">
                  <span className="absolute left-0 top-1/2 h-2 w-24 -translate-y-1/2 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-primary to-cyan-300/80 blur-[1px] motion-reduce:hidden" />
                </span>

                <ol className="relative grid grid-cols-3 gap-8" aria-label={text.scopeTitle}>
                  {text.scopeGroupTitles.map((groupTitle, groupIndex) => {
                    const GroupIcon = [Code2, MousePointerClick, SearchCheck][groupIndex]
                    const groupItems = text.scopes.slice(groupIndex * 2, groupIndex * 2 + 2)
                    return (
                      <li key={groupTitle} className="relative z-10 min-w-0 px-4 text-center">
                        <span className={`mx-auto flex size-16 items-center justify-center rounded-full bg-[#050806] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09),0_0_30px_rgba(119,252,117,0.14)] ${groupIndex === 2 ? "text-cyan-200" : "text-primary"}`}><GroupIcon className="size-7" /></span>
                        <p className="mt-5 font-mono text-base uppercase text-primary/70">0{groupIndex + 1} / {groupIndex === 0 ? "FOUNDATION" : groupIndex === 1 ? "SIGNALS" : "QUALITY"}</p>
                        <h3 className="mt-1 text-xl font-bold text-white">{groupTitle}</h3>
                        <p className="mt-2 font-mono text-base text-cyan-200/55">{text.scopeGroupDescriptions[groupIndex]}</p>

                        <div className="mt-6 space-y-6 text-left">
                          {groupItems.map((item) => {
                            const Icon = item.icon
                            return <article key={item.title} className="flex items-start gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-black/35 text-primary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]"><Icon className="size-5" /></span><div className="min-w-0"><h4 className="text-lg font-semibold leading-tight text-white">{item.title}</h4><p className="mt-2 text-base leading-[1.65] text-white/55">{item.text}</p></div></article>
                          })}
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </div>

              <div className="relative z-10 mt-7 lg:hidden">
                <span aria-hidden="true" className="absolute bottom-7 left-6 top-7 w-1 overflow-hidden rounded-full bg-gradient-to-b from-primary/22 via-primary/48 to-cyan-300/25 shadow-[0_0_16px_rgba(119,252,117,0.16)]">
                  <span className="absolute left-1/2 top-0 h-16 w-2 -translate-x-1/2 animate-cro-data-flow-y rounded-full bg-gradient-to-b from-transparent via-primary to-cyan-300/80 blur-[1px] motion-reduce:hidden" />
                </span>

                <ol aria-label={text.scopeTitle} className="space-y-4">
                  {text.scopeGroupTitles.map((groupTitle, groupIndex) => {
                    const GroupIcon = [Code2, MousePointerClick, SearchCheck][groupIndex]
                    const groupItems = text.scopes.slice(groupIndex * 2, groupIndex * 2 + 2)
                    return (
                      <li key={groupTitle} className="relative z-10 flex items-start gap-4 py-3">
                        <span className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-[#050806] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09),0_0_26px_rgba(119,252,117,0.12)] ${groupIndex === 2 ? "text-cyan-200" : "text-primary"}`}><GroupIcon className="size-5" /></span>
                        <div className="min-w-0 flex-1 pt-0.5">
                          <p className="font-mono text-base uppercase text-primary/70">0{groupIndex + 1} / {groupIndex === 0 ? "FOUNDATION" : groupIndex === 1 ? "SIGNALS" : "QUALITY"}</p>
                          <h3 className="mt-1 text-xl font-bold text-white">{groupTitle}</h3>
                          <p className="mt-1 font-mono text-base text-cyan-200/55">{text.scopeGroupDescriptions[groupIndex]}</p>
                          <div className="mt-5 space-y-5">
                            {groupItems.map((item) => {
                              const Icon = item.icon
                              return <article key={item.title} className="flex items-start gap-3"><span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-black/32 text-primary"><Icon className="size-5" /></span><div className="min-w-0"><h4 className="text-lg font-semibold leading-tight text-white">{item.title}</h4><p className="mt-2 text-base leading-[1.6] text-white/55">{item.text}</p></div></article>
                            })}
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </div>

              <div className="relative z-10 mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2 rounded-[1.35rem] bg-black/24 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:gap-3">
                {text.scopeResults.map((result, index) => <span key={result} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/[0.045] px-4 py-2 text-base font-semibold text-white/68"><CheckCircle2 className={`size-5 ${index === 2 ? "text-cyan-200" : "text-primary"}`} />{result}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="priority-events" className="scroll-mt-24 bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.08em] text-cyan-300">Priority events / 06</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.eventsTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground md:text-lg">{text.eventsIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-[radial-gradient(circle_at_15%_28%,rgba(119,252,117,0.09),transparent_26%),radial-gradient(circle_at_86%_68%,rgba(34,211,238,0.08),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(34,211,238,0.11),0_40px_110px_rgba(0,0,0,0.34),0_0_48px_rgba(119,252,117,0.055)] ring-1 ring-primary/[0.07] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(119,252,117,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.28)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <span className="flex items-center gap-3 font-mono text-base uppercase text-primary"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />Ecommerce event pipeline / online</span>
                <span className="font-mono text-base uppercase text-white/35">06 events mapped</span>
              </div>

              <div className="relative z-10 mt-9 hidden lg:block">
                <div className="mb-7 flex items-center justify-center gap-3 font-mono text-base uppercase text-cyan-200"><MousePointerClick className="size-5" />{text.eventsCoreLabel}</div>
                <span aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-[76px] h-1 overflow-hidden rounded-full bg-gradient-to-r from-primary/22 via-primary/45 to-cyan-300/25 shadow-[0_0_18px_rgba(119,252,117,0.18)]">
                  <span className="absolute left-0 top-1/2 h-2 w-24 -translate-y-1/2 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-primary to-cyan-300/80 blur-[1px] motion-reduce:hidden" />
                </span>

                <ol className="relative grid grid-cols-4 gap-5" aria-label={text.eventsCoreLabel}>
                  {text.events.slice(0, 4).map(([name, description], index) => {
                    const Icon = [PackageSearch, MousePointerClick, ClipboardCheck, CheckCircle2][index]
                    const isPurchase = index === 3
                    return (
                      <li key={name} className="relative z-10 min-w-0 px-3 text-center">
                        <span className={`mx-auto flex size-16 items-center justify-center rounded-full bg-[#050806] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09),0_0_30px_rgba(119,252,117,0.14)] ${isPurchase ? "bg-primary text-black shadow-[0_0_34px_rgba(119,252,117,0.3)]" : index === 2 ? "text-cyan-200" : "text-primary"}`}><Icon className="size-7" /></span>
                        <p className="mt-5 font-mono text-base uppercase text-primary/70">0{index + 1} / EVENT</p>
                        <h3 className={`mt-1 font-mono text-xl font-bold ${isPurchase ? "text-primary" : "text-white"}`}>{name}</h3>
                        <p className="mt-2 text-base text-white/58">{description}</p>
                        <div className="mt-4 flex flex-wrap justify-center gap-2">{text.eventParams[index].map((param) => <span key={param} className="rounded-full bg-black/28 px-3 py-2 font-mono text-base text-cyan-200/62">{param}</span>)}</div>
                      </li>
                    )
                  })}
                </ol>

                <div className="mx-auto mt-7 max-w-3xl rounded-t-[1.35rem] rounded-b-lg bg-black/24 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.065)]">
                  <p className="flex items-center gap-3 font-mono text-base uppercase text-cyan-200"><SearchCheck className="size-5" />{text.eventsSupportLabel}</p>
                  <div className="mt-4 grid grid-cols-2 divide-x divide-white/[0.08]">
                    {text.events.slice(4).map(([name, description], offset) => {
                      const index = offset + 4
                      const Icon = offset === 0 ? LineChart : SearchCheck
                      return <article key={name} className="flex items-start gap-3 px-4 first:pl-0 last:pr-0"><span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-black/35 text-primary"><Icon className="size-5" /></span><div className="min-w-0"><div className="flex flex-wrap items-baseline gap-x-3 gap-y-1"><h3 className="font-mono text-lg font-bold leading-tight text-white">{name}</h3><p className="text-base leading-snug text-white/55">{description}</p></div><div className="mt-2 flex flex-wrap gap-1.5">{text.eventParams[index].map((param) => <span key={param} className="rounded-full bg-white/[0.045] px-3 py-1.5 font-mono text-base text-cyan-200/58">{param}</span>)}</div></div></article>
                    })}
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-7 lg:hidden">
                <p className="mb-5 flex items-center gap-3 font-mono text-base uppercase text-cyan-200"><MousePointerClick className="size-5" />{text.eventsCoreLabel}</p>
                <span aria-hidden="true" className="absolute bottom-[252px] left-6 top-12 w-1 overflow-hidden rounded-full bg-gradient-to-b from-primary/22 via-primary/48 to-cyan-300/25 shadow-[0_0_16px_rgba(119,252,117,0.16)]">
                  <span className="absolute left-1/2 top-0 h-16 w-2 -translate-x-1/2 animate-cro-data-flow-y rounded-full bg-gradient-to-b from-transparent via-primary to-cyan-300/80 blur-[1px] motion-reduce:hidden" />
                </span>

                <ol aria-label={text.eventsCoreLabel}>
                  {text.events.slice(0, 4).map(([name, description], index) => {
                    const Icon = [PackageSearch, MousePointerClick, ClipboardCheck, CheckCircle2][index]
                    const isPurchase = index === 3
                    return (
                      <li key={name} className="relative z-10 flex min-h-[190px] items-start gap-4 py-3">
                        <span className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-[#050806] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09),0_0_26px_rgba(119,252,117,0.12)] ${isPurchase ? "bg-primary text-black shadow-[0_0_30px_rgba(119,252,117,0.27)]" : index === 2 ? "text-cyan-200" : "text-primary"}`}><Icon className="size-5" /></span>
                        <div className="min-w-0 flex-1 pt-0.5"><p className="font-mono text-base uppercase text-primary/70">0{index + 1} / EVENT</p><h3 className={`mt-1 font-mono text-lg font-bold ${isPurchase ? "text-primary" : "text-white"}`}>{name}</h3><p className="mt-2 text-base text-white/55">{description}</p><div className="mt-3 flex flex-wrap gap-2">{text.eventParams[index].map((param) => <span key={param} className="rounded-full bg-black/28 px-3 py-2 font-mono text-base text-cyan-200/62">{param}</span>)}</div></div>
                      </li>
                    )
                  })}
                </ol>

                <div className="mt-2 rounded-t-[1.35rem] rounded-b-lg bg-black/24 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.065)]">
                  <p className="flex items-center gap-3 font-mono text-base uppercase text-cyan-200"><SearchCheck className="size-5" />{text.eventsSupportLabel}</p>
                  <div className="mt-3 divide-y divide-white/[0.08]">
                    {text.events.slice(4).map(([name, description], offset) => {
                      const index = offset + 4
                      const Icon = offset === 0 ? LineChart : SearchCheck
                      return <article key={name} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"><span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-black/35 text-primary"><Icon className="size-5" /></span><div className="min-w-0"><h3 className="font-mono text-lg font-bold leading-tight text-white">{name}</h3><p className="mt-1 text-base leading-snug text-white/55">{description}</p><div className="mt-2 flex flex-wrap gap-1.5">{text.eventParams[index].map((param) => <span key={param} className="rounded-full bg-white/[0.045] px-3 py-1.5 font-mono text-base text-cyan-200/58">{param}</span>)}</div></div></article>
                    })}
                  </div>
                </div>
              </div>

              <div className="relative z-10 mx-auto mt-1 flex max-w-3xl flex-wrap items-center justify-center gap-2 rounded-t-lg rounded-b-[1.35rem] bg-black/24 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                {text.eventValidation.map((result, index) => <span key={result} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white/[0.045] px-3 py-1.5 text-base font-semibold text-white/68"><CheckCircle2 className={`size-5 ${index === 2 ? "text-cyan-200" : "text-primary"}`} />{result}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.08em] text-cyan-300">{text.processEyebrow}</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.processTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground md:text-lg">{text.processIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-[radial-gradient(circle_at_18%_30%,rgba(119,252,117,0.1),transparent_27%),radial-gradient(circle_at_82%_68%,rgba(34,211,238,0.08),transparent_29%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(34,211,238,0.1),0_40px_110px_rgba(0,0,0,0.36),0_0_48px_rgba(119,252,117,0.05)] ring-1 ring-primary/[0.07] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(119,252,117,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.28)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <span className="flex items-center gap-3 font-mono text-base uppercase text-primary"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />{text.processStatus}</span>
                <span className="font-mono text-base uppercase text-white/35">{text.processReady}</span>
              </div>

              <div className="relative z-10 mt-9 hidden lg:block">
                <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-8 h-1 overflow-hidden rounded-full bg-gradient-to-r from-primary/20 via-primary/42 to-cyan-300/24 shadow-[0_0_18px_rgba(119,252,117,0.18)]">
                  <span className="absolute left-0 top-1/2 h-2 w-24 -translate-y-1/2 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-primary to-cyan-300/80 blur-[1px] will-change-transform motion-reduce:hidden" />
                </span>
                <ol className="relative grid grid-cols-5" aria-label={text.processTitle}>
                  {text.process.map((item, index) => {
                    const Icon = [Gauge, Radar, Tag, ClipboardCheck, ShieldCheck][index]
                    const isValidation = index === 3
                    const isHandoff = index === 4
                    return (
                      <li key={item} className="relative z-10 flex min-w-0 flex-col items-center px-3 text-center">
                        <span className={`flex size-16 items-center justify-center rounded-full border bg-[#050806] shadow-[0_0_30px_rgba(119,252,117,0.13)] ${isValidation ? "border-cyan-300/55 text-cyan-200" : isHandoff ? "border-primary bg-primary text-black shadow-[0_0_34px_rgba(119,252,117,0.3)]" : "border-primary/45 text-primary"}`}><Icon className="size-6" /></span>
                        <span className="mt-5 font-mono text-base uppercase text-white/35">0{index + 1} / {text.processStageCodes[index]}</span>
                        <h3 className={`mt-2 text-lg font-bold leading-tight ${isValidation ? "text-cyan-200" : isHandoff ? "text-primary" : "text-white"}`}>{text.processStageTitles[index]}</h3>
                        <p className="mt-3 max-w-[230px] text-left text-base leading-[1.65] text-white/55">{item}</p>
                      </li>
                    )
                  })}
                </ol>
              </div>

              <div className="relative z-10 mt-6 lg:hidden">
                <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-1 overflow-hidden rounded-full bg-gradient-to-b from-primary/20 via-primary/42 to-cyan-300/24 shadow-[0_0_16px_rgba(119,252,117,0.16)]">
                  <span className="absolute left-1/2 top-0 h-16 w-2 -translate-x-1/2 animate-cro-data-flow-y rounded-full bg-gradient-to-b from-transparent via-primary to-cyan-300/80 blur-[1px] will-change-transform motion-reduce:hidden" />
                </span>
                <ol aria-label={text.processTitle}>
                  {text.process.map((item, index) => {
                    const Icon = [Gauge, Radar, Tag, ClipboardCheck, ShieldCheck][index]
                    const isValidation = index === 3
                    const isHandoff = index === 4
                    return (
                      <li key={item} className="relative z-10 flex min-h-[132px] items-start gap-4 py-3 last:min-h-0">
                        <span className={`flex size-12 shrink-0 items-center justify-center rounded-full border bg-[#050806] shadow-[0_0_26px_rgba(119,252,117,0.12)] ${isValidation ? "border-cyan-300/55 text-cyan-200" : isHandoff ? "border-primary bg-primary text-black shadow-[0_0_30px_rgba(119,252,117,0.27)]" : "border-primary/45 text-primary"}`}><Icon className="size-5" /></span>
                        <div className="min-w-0 flex-1 pt-0.5"><span className="font-mono text-base uppercase text-white/35">0{index + 1} / {text.processStageCodes[index]}</span><h3 className={`mt-1 text-lg font-bold leading-tight ${isValidation ? "text-cyan-200" : isHandoff ? "text-primary" : "text-white"}`}>{text.processStageTitles[index]}</h3><p className="mt-2 text-base leading-[1.6] text-white/55">{item}</p></div>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-5 text-center">
              <p className="flex items-center justify-center gap-2 font-mono text-base uppercase tracking-[0.08em] text-cyan-300"><HelpCircle className="size-5" />Knowledge base</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.faqTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground">{language === "zh" ? "关于 Shopify、GA4、GTM、广告归因与多市场追踪的关键答案。" : "Key answers about Shopify, GA4, GTM, ad attribution, and multi-market tracking."}</p>
            </div>

            <ServiceFaqPanel
              entries={text.faqs.map((item, index) => ({
                question: item.q,
                answer: item.a,
                category: ga4GtmFaqMeta[index].code,
                tags: ga4GtmFaqMeta[index][language],
              }))}
              activeIndex={activeFaq}
              onActiveIndexChange={setActiveFaq}
              panelId="ga4-gtm-faq-answer"
              accordionPrefix="faq"
              statusLabel="Measurement knowledge / online"
              directoryLabel={language === "zh" ? "常见问题目录" : "FAQ directory"}
              answerLabel={language === "zh" ? "当前问题答案" : "Current answer"}
            />
          </div>
        </section>

        <section className="bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="font-mono text-base uppercase tracking-[0.08em] text-cyan-300">Related services / 02</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.relatedTitle}</h2>
              <p className="mt-4 text-base leading-[1.75] text-muted-foreground md:text-lg">{text.relatedIntro}</p>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_18%_35%,rgba(119,252,117,0.085),transparent_28%),radial-gradient(circle_at_84%_68%,rgba(34,211,238,0.07),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.052),rgba(255,255,255,0.012))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_35px_100px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:rounded-[2.4rem_1.5rem_2.8rem_1.8rem] sm:p-6 lg:p-8">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(119,252,117,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.26)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div className="relative grid divide-y divide-white/[0.08] md:grid-cols-2 md:divide-x md:divide-y-0">
              {text.relatedLinks.map((link) => (
                <a key={link.href} href={localizedPath(link.href)} className="group min-w-0 rounded-[1.4rem] px-4 py-6 transition-colors hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-6 md:px-8 md:py-8">
                  <h3 className="text-xl font-bold tracking-normal">{link.title}</h3>
                  <p className="mt-3 text-base leading-[1.75] text-muted-foreground">{link.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-primary">
                    {link.cta}
                    <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[3.2rem_1.5rem_3.6rem_1.8rem] border border-white/25 bg-[linear-gradient(115deg,rgba(255,255,255,0.075),rgba(255,255,255,0.015)_38%,rgba(34,211,238,0.045)_72%,rgba(119,252,117,0.06))] px-7 py-12 shadow-[inset_0_2px_0_rgba(255,255,255,0.24),inset_0_-2px_0_rgba(119,252,117,0.1),0_45px_110px_rgba(0,0,0,0.5),0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-3xl md:px-14 md:py-16">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(34,211,238,0.15),transparent_28%),radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.08),transparent_32%)]" />
            <div aria-hidden="true" className="absolute inset-x-[7%] top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div aria-hidden="true" className="absolute -bottom-8 right-[8%] rotate-[-8deg] space-y-2 font-mono text-base leading-relaxed text-cyan-300/16"><p>{"dataLayer.push({ event: 'purchase' })"}</p><p>{"GA4 · GTM · Pixel · conversion QA"}</p><p>{"track / validate / explain"}</p></div>
            <div aria-hidden="true" className="absolute bottom-[22%] right-[2%] h-px w-[62%] rotate-[-8deg] animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.55),rgba(119,252,117,0.8),transparent)] bg-[length:200%_100%] shadow-[0_0_25px_rgba(119,252,117,0.35)] motion-reduce:animate-none" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div><ShieldCheck className="mb-5 size-8 text-primary" /><h2 className="max-w-4xl text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.ctaTitle}</h2><p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.ctaText}</p></div>
              <a href={localizedPath("/diagnosis")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-[0_0_28px_rgba(119,252,117,0.22)] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.98]">{text.primaryCta}<ArrowUpRight className="size-4" /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
