"use client"

import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Compass,
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
    whatTitle: "我们做什么",
    whatIntro: "围绕 Shopify 店铺从上线到增长的关键环节提供服务。",
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
    notItems: [
      "不做只追求视觉但不考虑成交路径的页面",
      "不承诺不现实的 SEO、广告或销售结果",
      "不在需求、预算和上线目标不清楚时直接开发",
      "不依赖过度 App 堆功能来掩盖业务逻辑问题",
    ],
    principlesTitle: "交付原则",
    principles: [
      {
        title: "先诊断，再报价",
        text: "先看产品、市场、页面、功能和数据问题，再判断该做模板、定制还是复杂业务。",
        icon: FileSearch,
      },
      {
        title: "页面服务销售路径",
        text: "首页、商品页、集合页和内容页都应该服务用户理解、信任和下单。",
        icon: Route,
      },
      {
        title: "功能服务业务流程",
        text: "功能不是越多越好，重点是让支付、物流、询价、B2B 或数据流程跑得通。",
        icon: SlidersHorizontal,
      },
      {
        title: "数据服务后续优化",
        text: "GA4、GTM 和核心事件不是装饰项，而是后续判断页面和投放是否有效的基础。",
        icon: LineChart,
      },
      {
        title: "主题尽量可维护",
        text: "尽量用可配置 section、block 和清晰模板，减少一次性写死和无意义 App 依赖。",
        icon: Gauge,
      },
    ],
    clientTitle: "适合的客户",
    clientItems: [
      "已有产品，准备做跨境销售或品牌出海",
      "正在投放广告，或者准备让 Shopify 承接投放流量",
      "现有 Shopify 店铺转化不稳定，需要诊断和重构",
      "需要 GA4/GTM、转化事件和商品结构化数据支持复盘",
      "想长期迭代 Shopify，而不是一次性建完就没人维护",
    ],
    ctaTitle: "从一次诊断开始。",
    ctaText: "提交产品、市场、预算、当前店铺或目标，我们先判断 Shopify 该怎么建、怎么改、怎么追踪。",
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
    whatTitle: "What we do",
    whatIntro: "Services around the critical path from Shopify launch to growth.",
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
    notItems: [
      "We do not build pages that chase visuals while ignoring the sales path",
      "We do not promise unrealistic SEO, ad, or sales outcomes",
      "We do not start development when scope, budget, and launch goals are unclear",
      "We do not hide business logic problems behind excessive app stacking",
    ],
    principlesTitle: "Delivery principles",
    principles: [
      {
        title: "Diagnose before quoting",
        text: "Review product, market, pages, features, and data before deciding whether the project needs a module build, custom build, or complex scope.",
        icon: FileSearch,
      },
      {
        title: "Pages serve the sales path",
        text: "Homepage, product pages, collections, and content pages should help users understand, trust, and buy.",
        icon: Route,
      },
      {
        title: "Features serve the business flow",
        text: "More features are not always better. Payments, logistics, quotes, B2B, and data flows need to work clearly.",
        icon: SlidersHorizontal,
      },
      {
        title: "Data serves future optimization",
        text: "GA4, GTM, and core events are the foundation for judging whether pages and campaigns are working.",
        icon: LineChart,
      },
      {
        title: "Themes should stay maintainable",
        text: "Use configurable sections, blocks, and clear templates where possible, reducing hard-coded pages and unnecessary app dependencies.",
        icon: Gauge,
      },
    ],
    clientTitle: "Who we work best with",
    clientItems: [
      "Brands with products preparing for global sales",
      "Teams running or preparing paid traffic into Shopify",
      "Existing Shopify stores with unstable conversion that need diagnosis and restructuring",
      "Stores that need GA4/GTM, conversion events, and product structured data for review",
      "Teams that want to keep iterating Shopify instead of treating launch as a one-off project",
    ],
    ctaTitle: "Start with a focused review.",
    ctaText: "Share your product, market, budget, current store, or goal. We will recommend what to build, improve, or measure first.",
  },
}

export function AboutPage() {
  const { language, localizedPath } = useLanguage()
  const text = copy[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="service-hero relative flex items-center overflow-hidden bg-[#020403] px-4 pb-12 pt-28 sm:px-6 md:px-10 md:pb-16 md:pt-32 lg:pb-10 lg:pt-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(119,252,117,0.08),transparent_36%),linear-gradient(145deg,#020403_0%,#07100b_48%,#020403_100%)]" />
          <div aria-hidden="true" className="absolute -inset-x-[18%] -top-[22%] h-[118%] animate-cro-signal-orbit bg-[radial-gradient(ellipse_at_68%_36%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(ellipse_at_32%_68%,rgba(119,252,117,0.22),transparent_31%)] opacity-85 blur-2xl will-change-transform motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(119,252,117,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(119,252,117,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
          <div aria-hidden="true" className="absolute left-[9%] top-[22%] size-3 animate-pulse rounded-full bg-primary shadow-[0_0_24px_rgba(119,252,117,0.8)] motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute bottom-[16%] right-[7%] size-2 animate-pulse rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.7)] motion-reduce:animate-none" />

          <div className="service-hero-layout relative mx-auto grid w-full max-w-[1500px] gap-9 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_0_28px_rgba(119,252,117,0.08)] backdrop-blur-sm">
                <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />
                {text.eyebrow}
              </p>
              <h1 className="max-w-5xl bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-[clamp(2.55rem,5.6vw,5rem)] font-bold leading-[1.02] tracking-[-0.025em] text-transparent animate-shimmer motion-reduce:animate-none">
                {text.title}
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-semibold leading-[1.45] text-foreground/90 md:text-2xl">
                {text.subtitle}
              </p>
              <p className="service-hero-description mt-5 max-w-3xl text-base leading-[1.75] text-muted-foreground md:text-lg">
                {text.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={localizedPath("/diagnosis")}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-[0_0_28px_rgba(119,252,117,0.25)] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98]"
                >
                  {text.primaryCta}
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#principles"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-black/15 px-8 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {text.secondaryCta}
                </a>
              </div>
            </div>

            <div className="service-hero-proof relative overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_28%_16%,rgba(119,252,117,0.14),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.018))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_42px_100px_rgba(0,0,0,0.42),0_0_70px_rgba(119,252,117,0.08)] backdrop-blur-2xl md:p-9">
              <div aria-hidden="true" className="absolute -right-20 -top-20 size-52 rounded-full border border-primary/15" />
              <div aria-hidden="true" className="absolute -right-10 -top-10 size-36 rounded-full border border-cyan-200/10" />
              <div className="relative mb-8 flex size-14 items-center justify-center rounded-[45%_55%_42%_58%/58%_40%_60%_42%] bg-primary text-primary-foreground shadow-[0_0_35px_rgba(119,252,117,0.28)]">
                <Compass className="size-7" />
              </div>
              <div className="relative grid gap-1">
                {text.proof.map((item, index) => (
                  <div key={item} className="flex min-h-16 items-center gap-4 rounded-[1.4rem] bg-black/18 px-5 py-4 first:bg-primary/[0.08]">
                    <span className="font-mono text-base text-primary/70">0{index + 1}</span>
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                    <span className="text-base font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-6 py-[50px] md:px-10 md:py-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <PackageCheck className="mx-auto mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.whatTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.whatIntro}</p>
            </div>
            <div className="relative overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_20%_18%,rgba(119,252,117,0.1),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(34,211,238,0.07),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.065),rgba(255,255,255,0.012))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_42px_110px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:p-5 lg:p-7">
              <div aria-hidden="true" className="absolute left-[8%] top-0 h-px w-[58%] animate-shimmer bg-gradient-to-r from-transparent via-primary/60 to-transparent bg-[length:200%_100%] motion-reduce:animate-none" />
              <div className="relative grid gap-2 md:grid-cols-2 xl:grid-cols-5">
              {text.whatItems.map((item, index) => {
                const Icon = item.icon

                return (
                  <article key={item.title} className={`min-h-[250px] rounded-[1.7rem] p-6 ${index === 1 ? "bg-primary/[0.07]" : index === 3 ? "bg-cyan-200/[0.045]" : "bg-black/18"}`}>
                    <div className="mb-7 flex items-center justify-between">
                      <Icon className="size-6 text-primary" />
                      <span className="font-mono text-base text-primary/55">0{index + 1}</span>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                    <p className="text-base leading-[1.75] text-muted-foreground">{item.text}</p>
                  </article>
                )
              })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <ShieldCheck className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.notTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.notIntro}</p>
            </div>
            <div className="relative grid gap-2 overflow-hidden rounded-[2.6rem_1.4rem_3rem_1.7rem] border border-white/18 bg-[radial-gradient(circle_at_18%_20%,rgba(119,252,117,0.08),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_35px_90px_rgba(0,0,0,0.28)] sm:grid-cols-2 sm:p-5">
              {text.notItems.map((item, index) => (
                <div key={item} className="flex min-h-32 items-start gap-4 rounded-[1.5rem] bg-black/18 p-5 even:bg-white/[0.025]">
                  <span className="font-mono text-base text-primary/60">0{index + 1}</span>
                  <p className="text-base leading-[1.75] text-foreground/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="principles" className="bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0 scroll-mt-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 max-w-3xl">
              <FileSearch className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.principlesTitle}</h2>
            </div>
            <div className="relative overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_50%_8%,rgba(119,252,117,0.1),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.012))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_42px_100px_rgba(0,0,0,0.34)] sm:p-5 lg:p-7">
              <div className="relative grid gap-2 md:grid-cols-2 xl:grid-cols-5">
              {text.principles.map((item, index) => {
                const Icon = item.icon

                return (
                  <article key={item.title} className={`min-h-[260px] rounded-[1.7rem] p-6 ${index === 2 ? "bg-primary/[0.07]" : "bg-black/18"}`}>
                    <div className="mb-7 flex items-center justify-between"><Icon className="size-6 text-primary" /><span className="font-mono text-base text-primary/55">0{index + 1}</span></div>
                    <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                    <p className="text-base leading-[1.75] text-muted-foreground">{item.text}</p>
                  </article>
                )
              })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <Target className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.clientTitle}</h2>
            </div>
            <div className="relative grid gap-1 overflow-hidden rounded-[2.7rem_1.45rem_3.1rem_1.8rem] border border-white/18 bg-[radial-gradient(circle_at_88%_16%,rgba(34,211,238,0.07),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_35px_90px_rgba(0,0,0,0.28)] sm:p-5">
              {text.clientItems.map((item, index) => (
                <div key={item} className="flex min-h-16 items-center gap-4 rounded-[1.4rem] bg-black/18 px-5 py-4 first:bg-primary/[0.07]">
                  <span className="font-mono text-base text-primary/60">0{index + 1}</span>
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  <p className="text-base leading-relaxed text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[3.2rem_1.5rem_3.6rem_1.8rem] border border-white/25 bg-[linear-gradient(115deg,rgba(255,255,255,0.075),rgba(255,255,255,0.015)_38%,rgba(34,211,238,0.045)_72%,rgba(119,252,117,0.075))] p-8 text-center shadow-[inset_0_2px_0_rgba(255,255,255,0.22),0_45px_110px_rgba(0,0,0,0.45),0_0_80px_rgba(119,252,117,0.08)] backdrop-blur-3xl md:p-12">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.ctaText}</p>
            <a
              href={localizedPath("/diagnosis")}
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
