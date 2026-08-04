"use client"

import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Gauge,
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
    fitItems: [
      "正在投放 Meta Ads、Google Ads 或准备投放广告",
      "Shopify 后台有订单，但广告平台和 GA4 数据对不上",
      "GA4 没有正确记录 view_item、add_to_cart、purchase 等事件",
      "上线前希望一次性打好数据追踪、Schema 和测试基础",
    ],
    scopeTitle: "服务范围",
    scopeIntro: "目标不是堆标签，而是让关键成交路径可被追踪、验证和解释。",
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
    events: [
      ["view_item", "商品详情页浏览"],
      ["add_to_cart", "加入购物车"],
      ["begin_checkout", "开始结账"],
      ["purchase", "完成购买"],
      ["generate_lead", "提交咨询或诊断表单"],
      ["search", "站内搜索"],
    ],
    processTitle: "配置流程",
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
    fitItems: [
      "Stores running or preparing Meta Ads, Google Ads, or other paid channels",
      "Shopify shows orders, but ad platforms and GA4 do not match",
      "GA4 does not correctly record view_item, add_to_cart, purchase, or similar events",
      "Teams that want tracking, Schema, and test coverage ready before launch",
    ],
    scopeTitle: "Scope of work",
    scopeIntro: "The goal is not more tags. The goal is a conversion path that can be tracked, validated, and explained.",
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
    events: [
      ["view_item", "Product detail view"],
      ["add_to_cart", "Add to cart"],
      ["begin_checkout", "Begin checkout"],
      ["purchase", "Completed purchase"],
      ["generate_lead", "Consultation or diagnosis form"],
      ["search", "On-site search"],
    ],
    processTitle: "Setup process",
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
}

export function ShopifyGa4GtmPage() {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData
        breadcrumbs={ga4GtmStructuredData.breadcrumbs}
        faqItems={copy.zh.faqs}
        service={ga4GtmStructuredData.service}
      />
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#101010] to-[#050505]" />
          <div className="absolute inset-x-0 top-28 mx-auto h-80 max-w-5xl rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {text.eyebrow}
              </p>
              <h1 className="max-w-5xl text-[clamp(2.35rem,5vw,4.8rem)] font-bold leading-[1.04] tracking-normal">
                {text.title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-semibold leading-[1.45] text-foreground/90 md:text-2xl">
                {text.subtitle}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-[1.7] text-muted-foreground md:text-lg">
                {text.description}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/diagnosis"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]"
                >
                  {text.primaryCta}
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#scope"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
                >
                  {text.secondaryCta}
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur md:p-7">
              <div className="grid gap-3">
                {text.proof.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-5">
                <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Radar className="size-5" />
                </div>
                <h2 className="text-lg font-semibold">{text.fitTitle}</h2>
                <div className="mt-4 space-y-3">
                  {text.fitItems.map((item) => (
                    <p key={item} className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="scope" className="border-t border-white/10 bg-black px-6 py-16 md:px-10 md:py-24 scroll-mt-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 max-w-3xl">
              <Code2 className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.scopeTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.scopeIntro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {text.scopes.map((item) => {
                const Icon = item.icon

                return (
                  <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <Icon className="mb-5 size-6 text-primary" />
                    <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SearchCheck className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.eventsTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.eventsIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {text.events.map(([name, description]) => (
                <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-mono text-sm font-semibold text-primary">{name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Gauge className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.processTitle}</h2>
            </div>
            <div className="grid gap-4">
              {text.process.map((item, index) => (
                <div key={item} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-[auto_1fr] sm:items-center">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <p className="text-base leading-relaxed text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-10 flex items-center gap-3">
              <ShieldCheck className="size-7 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">{text.faqTitle}</h2>
            </div>
            <div className="grid gap-4">
              {text.faqs.map((item) => (
                <article key={item.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-semibold tracking-normal">{item.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-tight tracking-normal">{text.relatedTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{text.relatedIntro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {text.relatedLinks.map((link) => (
                <a key={link.href} href={link.href} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                  <h3 className="text-xl font-bold tracking-normal">{link.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{link.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {link.cta}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1100px] rounded-[1.5rem] border border-primary/20 bg-primary/10 p-7 text-center md:p-12">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.ctaText}</p>
            <a
              href="/diagnosis"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]"
            >
              {text.primaryCta}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
