"use client"

import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  FileText,
  Gauge,
  Layers3,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"
import { useLanguage } from "@/components/language-provider"

const copy = {
  zh: {
    eyebrow: "SHOPIFY WEBSITE BUILD",
    title: "Shopify 独立站建设服务",
    subtitle: "为跨境品牌搭建能承接广告流量、能成交、能追踪数据的 Shopify 销售系统。",
    description:
      "我们不只做页面视觉。建站前先判断产品、市场、价格、物流、支付和数据追踪，再把首页、商品页、集合页和转化路径做成可上线、可投放、可复盘的结构。",
    primaryCta: "免费诊断我的 Shopify 站",
    secondaryCta: "查看价格梯度",
    proof: ["Shopify 2.0 主题开发", "页面结构与转化路径", "GA4/GTM 与 Product Schema"],
    fitTitle: "适合这些情况",
    fitItems: [
      "准备从 0 搭建 Shopify 独立站的跨境品牌",
      "已有 Shopify 店铺，但广告点击和订单转化不匹配",
      "需要首页、商品页、集合页、内容页统一规划",
      "准备打通支付、物流、数据追踪和基础 SEO",
    ],
    serviceTitle: "服务内容",
    serviceIntro: "按真实销售链路拆解，而不是按页面数量堆功能。",
    services: [
      {
        title: "页面结构规划",
        text: "梳理首页、商品页、集合页、品牌页和帮助内容的承接关系。",
        icon: Layers3,
      },
      {
        title: "Shopify 主题开发",
        text: "基于 Shopify 2.0、Liquid、HTML/CSS/JS 实现可维护的主题模块。",
        icon: ShoppingBag,
      },
      {
        title: "支付物流配置",
        text: "配合业务范围确认支付方式、物流说明、配送政策和售后内容。",
        icon: Truck,
      },
      {
        title: "数据追踪基础",
        text: "配置 GA4、GTM、关键转化事件和商品结构化数据的基础方案。",
        icon: BarChart3,
      },
      {
        title: "基础 SEO",
        text: "处理标题、描述、页面层级、内部链接和可被搜索引擎理解的内容。",
        icon: Search,
      },
      {
        title: "上线检查",
        text: "检查移动端、核心页面、表单、支付链路、速度和上线前关键风险。",
        icon: Gauge,
      },
    ],
    plansTitle: "三档建站方案",
    plansIntro: "价格梯度参考当前合同模板，最终范围按诊断后的页面和功能确认。",
    plans: [
      {
        name: "文档模板方案",
        price: "¥20,000 起",
        text: "适合已有参考网站或模块需求明确的团队，优先把 Shopify 稳定上线。",
        points: ["参考站拆解", "模块化页面开发", "基础视觉适配", "2-4 周交付"],
      },
      {
        name: "设计图定制方案",
        price: "¥35,000 起",
        text: "适合需要完整品牌表达和转化路径的团队，先做 Figma，再开发主题。",
        points: ["4 个核心页面", "Desktop + Mobile 设计", "GA4/GTM 基础", "3-6 周交付"],
        featured: true,
      },
      {
        name: "复杂业务定制",
        price: "¥50,000 起",
        text: "适合 B2B、批发、询价、ERP/CRM、复杂物流或多市场业务。",
        points: ["业务流程梳理", "复杂功能开发", "第三方对接评估", "按范围排期"],
      },
    ],
    processTitle: "交付流程",
    process: [
      "诊断产品、市场、预算和上线目标",
      "确认页面结构、功能边界和报价范围",
      "完成设计或模块方案并进入 Shopify 主题开发",
      "配置支付物流、数据追踪和基础 SEO",
      "测试核心路径，上线并给出后续优化建议",
    ],
    faqTitle: "常见问题",
    faqs: [
      {
        q: "Shopify 建站一般多少钱？",
        a: "基础模板方案通常从 ¥20,000 起；需要 Figma UI/UX 和更完整转化路径的定制方案通常从 ¥35,000 起；涉及 B2B、ERP、CRM、复杂物流或多市场业务时，一般从 ¥50,000 起按范围评估。",
      },
      {
        q: "模板建站和定制开发怎么选？",
        a: "如果你已有清楚参考站、品牌表达要求不复杂，模板方案更快。如果你需要更强品牌差异、商品页说服力和投放承接路径，建议选择设计图定制方案。",
      },
      {
        q: "Shopify 独立站多久可以上线？",
        a: "模板方案通常 2-4 周；设计图定制方案通常 3-6 周；复杂业务需要根据功能、SKU、系统对接和内容准备情况单独确认。",
      },
      {
        q: "建站是否包含 SEO？",
        a: "包含基础 SEO，例如页面标题、描述、结构层级、核心内容组织和 Product Schema 基础配置。长期内容 SEO 和外链增长建议作为后续阶段单独推进。",
      },
      {
        q: "是否支持 GA4/GTM？",
        a: "支持。设计图定制方案会包含 GA4 电商追踪、GTM 容器和基础转化事件规划；更复杂的事件和广告平台回传需要按业务范围确认。",
      },
      {
        q: "上线后是否可以继续维护？",
        a: "可以。基础交付包含约定周期内的技术支持，后续维护、页面迭代、活动页、SEO 内容和数据优化可以按月或按项目继续合作。",
      },
      {
        q: "Shopify 建站流程通常怎么推进？",
        a: "通常先做业务诊断和范围确认，再确定页面结构、设计或模块方案、主题开发、支付物流配置、数据追踪、基础 SEO、测试和上线。复杂项目会先拆清系统边界和测试范围。",
      },
      {
        q: "交付范围如何确认？",
        a: "交付范围会按页面、模块、SKU、第三方 App、数据追踪、支付物流、系统对接和上线支持来确认。确认范围后再报价，避免后期把新增需求和已承诺交付混在一起。",
      },
      {
        q: "售后支持包含哪些内容？",
        a: "售后主要覆盖已交付范围内的技术问题排查、页面和功能异常修复、上线稳定性支持。新增页面、活动页、功能开发、长期运营优化和广告投放不属于免费售后范围。",
      },
      {
        q: "费用和周期主要受什么影响？",
        a: "主要受设计深度、页面数量、SKU 复杂度、主题定制程度、GA4/GTM 追踪、支付物流、多语言多市场、ERP/CRM 等系统对接影响。范围越复杂，报价和周期越需要单独评估。",
      },
      {
        q: "预算有限时应该先做什么？",
        a: "优先把首页、商品页、集合页、品牌信任内容、基础政策页和核心追踪跑通。先保证能上线、能承接流量、能看到数据，再逐步扩展内容 SEO、活动页和复杂功能。",
      },
    ],
    ctaTitle: "先判断你的 Shopify 站该怎么建。",
    ctaText: "提交产品、市场、预算和当前问题，我们先给出页面结构、功能范围和交付节奏建议。",
    costGuideTitle: "需要先了解 Shopify 建站多少钱？",
    costGuideText: "费用说明页会拆解 ¥20,000 起、¥35,000 起、¥50,000 起三档报价，以及影响建站费用的关键变量。",
    costGuideCta: "查看 Shopify 建站费用说明",
  },
  en: {
    eyebrow: "SHOPIFY WEBSITE BUILD",
    title: "Shopify Website Build Service",
    subtitle: "Build a Shopify sales system that captures paid traffic, converts visitors, and tracks what matters.",
    description:
      "We do not only design pages. Before building, we diagnose product, market, pricing, logistics, payments, and analytics, then structure homepage, product pages, collections, and conversion paths for launch and optimization.",
    primaryCta: "Get Free Store Diagnosis",
    secondaryCta: "View Pricing Tiers",
    proof: ["Shopify 2.0 theme development", "Page structure and conversion path", "GA4/GTM and Product Schema"],
    fitTitle: "Best fit",
    fitItems: [
      "Global brands building a Shopify store from zero",
      "Existing Shopify stores with weak traffic-to-order conversion",
      "Teams that need homepage, product, collection, and content pages planned together",
      "Stores that need payments, logistics, analytics, and basic SEO connected",
    ],
    serviceTitle: "What is included",
    serviceIntro: "Scoped around the actual selling path, not padded by page count.",
    services: [
      {
        title: "Page structure planning",
        text: "Map homepage, product pages, collections, brand content, and help content into one flow.",
        icon: Layers3,
      },
      {
        title: "Shopify theme development",
        text: "Build maintainable Shopify 2.0 theme modules with Liquid, HTML/CSS, and JavaScript.",
        icon: ShoppingBag,
      },
      {
        title: "Payments and logistics",
        text: "Shape payment methods, shipping policy, delivery details, and after-sales content around your business.",
        icon: Truck,
      },
      {
        title: "Analytics foundation",
        text: "Plan GA4, GTM, core conversion events, and product structured data basics.",
        icon: BarChart3,
      },
      {
        title: "Basic SEO",
        text: "Handle titles, descriptions, page hierarchy, internal links, and search-readable content.",
        icon: Search,
      },
      {
        title: "Launch QA",
        text: "Check mobile layout, core pages, forms, checkout path, speed, and launch risks.",
        icon: Gauge,
      },
    ],
    plansTitle: "Three build tiers",
    plansIntro: "Pricing follows the current contract structure. Final scope is confirmed after diagnosis.",
    plans: [
      {
        name: "Module-Based Build",
        price: "from ¥20,000",
        text: "For teams with clear references or module needs. The priority is a stable Shopify launch.",
        points: ["Reference breakdown", "Modular page build", "Basic visual adaptation", "2-4 week delivery"],
      },
      {
        name: "Custom Design Build",
        price: "from ¥35,000",
        text: "For teams that need stronger brand expression and conversion structure. We design in Figma before development.",
        points: ["4 core pages", "Desktop + mobile design", "GA4/GTM foundation", "3-6 week delivery"],
        featured: true,
      },
      {
        name: "Complex Business",
        price: "from ¥50,000",
        text: "For B2B, wholesale, quote flows, ERP/CRM, complex logistics, or multi-market operations.",
        points: ["Business flow planning", "Complex feature development", "Integration assessment", "Scoped timeline"],
      },
    ],
    processTitle: "Delivery process",
    process: [
      "Diagnose product, market, budget, and launch goals",
      "Confirm page structure, feature boundary, and quote range",
      "Finalize design or module plan and build the Shopify theme",
      "Configure payments, logistics, analytics, and basic SEO",
      "Test core paths, launch, and suggest the next optimization steps",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "How much does a Shopify website build cost?",
        a: "A basic module-based build usually starts from ¥20,000. A custom Figma UI/UX and conversion-focused build usually starts from ¥35,000. B2B, ERP, CRM, complex logistics, or multi-market builds usually start from ¥50,000 and are scoped individually.",
      },
      {
        q: "Should I choose a template build or custom development?",
        a: "Choose a template/module build if you have clear references and simpler brand needs. Choose custom development if you need stronger brand differentiation, product page persuasion, and paid-traffic conversion structure.",
      },
      {
        q: "How long does it take to launch?",
        a: "Module-based builds usually take 2-4 weeks. Custom design builds usually take 3-6 weeks. Complex builds depend on features, SKU count, integrations, and content readiness.",
      },
      {
        q: "Is SEO included?",
        a: "Basic SEO is included: titles, descriptions, page hierarchy, core content structure, and Product Schema basics. Long-term content SEO and backlinks should be handled as a later growth phase.",
      },
      {
        q: "Do you support GA4 and GTM?",
        a: "Yes. Custom design builds include GA4 ecommerce tracking, a GTM container, and basic conversion event planning. Advanced event modeling and ad platform feedback loops are scoped separately.",
      },
      {
        q: "Can you maintain the site after launch?",
        a: "Yes. Basic delivery includes technical support within the agreed period. Ongoing maintenance, page iteration, campaign pages, SEO content, and analytics optimization can continue monthly or by project.",
      },
      {
        q: "What does the Shopify build process look like?",
        a: "We usually start with business diagnosis and scope confirmation, then define page structure, design or module plan, theme development, payments and logistics, analytics, basic SEO, QA, and launch. Complex builds require system boundaries and testing scope first.",
      },
      {
        q: "How is the delivery scope confirmed?",
        a: "Scope is confirmed by pages, modules, SKU complexity, third-party apps, analytics, payments, logistics, integrations, and launch support. Pricing after scope confirmation prevents new requests from being mixed with the agreed delivery.",
      },
      {
        q: "What does post-launch support include?",
        a: "Post-launch support covers technical troubleshooting, bug fixes within delivered scope, and launch stability. New pages, campaign pages, feature development, ongoing optimization, and ads are not included in free support.",
      },
      {
        q: "What affects cost and timeline the most?",
        a: "The main factors are design depth, page count, SKU complexity, theme customization, GA4/GTM tracking, payments, logistics, multi-language or multi-market setup, and ERP/CRM integrations.",
      },
      {
        q: "What should a limited budget prioritize first?",
        a: "Prioritize homepage, product pages, collection pages, trust content, basic policy pages, and core tracking. Launch a stable conversion path first, then expand SEO content, campaign pages, and complex features.",
      },
    ],
    ctaTitle: "Diagnose how your Shopify site should be built first.",
    ctaText: "Submit your product, market, budget, and current blockers. We will suggest page structure, feature scope, and delivery rhythm first.",
    costGuideTitle: "Need to understand Shopify website cost first?",
    costGuideText: "The cost guide explains the ¥20,000, ¥35,000, and ¥50,000 tiers, plus the key variables that affect build scope.",
    costGuideCta: "Read Shopify Website Cost Guide",
  },
}

const websiteBuildStructuredData = {
  breadcrumbs: [
    { name: "首页", url: "https://whaleleap.studio/" },
    { name: "服务", url: "https://whaleleap.studio/#services" },
    { name: "Shopify 独立站建设服务", url: "https://whaleleap.studio/services/shopify-website-build" },
  ],
  service: {
    name: "Shopify 独立站建设服务",
    description: "为跨境品牌搭建能投放、能成交、能追踪的 Shopify 独立站，覆盖页面结构、主题开发、支付物流、基础 SEO 和数据追踪。",
    url: "https://whaleleap.studio/services/shopify-website-build",
  },
}

export function ShopifyWebsiteBuildPage() {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData
        breadcrumbs={websiteBuildStructuredData.breadcrumbs}
        faqItems={copy.zh.faqs}
        service={websiteBuildStructuredData.service}
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
              <h1 className="max-w-5xl text-[clamp(2.45rem,5vw,5rem)] font-bold leading-[1.04] tracking-normal">
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
                  href="#plans"
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
                  <PackageCheck className="size-5" />
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

        <section className="border-t border-white/10 bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.serviceTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.serviceIntro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {text.services.map((item) => {
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

        <section id="plans" className="bg-background px-6 py-16 md:px-10 md:py-24 scroll-mt-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 text-center">
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.plansTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.plansIntro}</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {text.plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`flex min-h-[420px] flex-col rounded-2xl border p-6 ${
                    plan.featured ? "border-primary/35 bg-white/[0.08] shadow-[0_0_70px_rgba(119,252,117,0.08)]" : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-primary">{plan.price}</p>
                    <h3 className="mt-3 text-2xl font-bold tracking-normal">{plan.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{plan.text}</p>
                  </div>
                  <div className="mt-auto space-y-3">
                    {plan.points.map((point) => (
                      <p key={point} className="flex items-center gap-3 text-sm text-foreground/85">
                        <CheckCircle2 className="size-4 shrink-0 text-primary" />
                        {point}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.08] p-6 text-center">
              <h3 className="text-xl font-bold tracking-normal">{text.costGuideTitle}</h3>
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">{text.costGuideText}</p>
              <a
                href="/learn/shopify-website-cost"
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/30 px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                {text.costGuideCta}
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <FileText className="mb-5 size-7 text-primary" />
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

        <section className="bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1100px] rounded-[1.5rem] border border-primary/20 bg-primary/10 p-7 text-center md:p-12">
            <Clock3 className="mx-auto mb-5 size-8 text-primary" />
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
