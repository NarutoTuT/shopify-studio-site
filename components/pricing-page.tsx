"use client"

import { useState } from "react"
import { ArrowUpRight, CheckCircle2, Clock3, FileWarning, HelpCircle, Layers3, Plus, ShieldCheck } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { ServiceFaqPanel } from "@/components/service-faq-panel"
import { useLanguage } from "@/components/language-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const copy = {
  zh: {
    eyebrow: "SHOPIFY PRICING",
    title: "Shopify 建站价格",
    subtitle: "按交付深度、页面复杂度和业务系统拆分报价，而不是简单按页面数量堆价格。",
    description:
      "下面价格参考当前合同梯度。最终报价会根据你的产品品类、SKU 数量、页面结构、支付物流、数据追踪和第三方系统对接范围确认。",
    primaryCta: "免费诊断我的 Shopify 站",
    secondaryCta: "查看价格方案",
    plansTitle: "三档建站价格",
    plansIntro: "售后支持最低 2 个月，复杂度越高，交付后的技术支持周期也会更长。",
    plans: [
      {
        name: "文档模板方案",
        price: "¥20,000 起",
        support: "上线后 2 个月免费技术支持",
        timeline: "约 2-4 周",
        bestFor: "适合已有参考网站或模块需求明确的团队。",
        points: ["1-3 个参考站与模块拆解", "Shopify 主题开发与内容填充", "品牌色与字体基础适配", "移动端与主流浏览器兼容", "基础 SEO 优化", "测试、性能优化与部署上线", "2 次整体页面修改"],
      },
      {
        name: "设计图定制方案",
        price: "¥35,000 起",
        support: "上线后 2 个月免费技术支持",
        timeline: "约 3-6 周",
        bestFor: "适合需要完整品牌表达和更强转化路径的团队。",
        points: ["4 个核心页面，Desktop + Mobile", "8 张 Figma 设计图与设计源文件", "品牌色、排版与间距设计系统", "Liquid 主题定制开发", "GSAP / Framer Motion 动效", "PC、平板与手机响应式适配", "GA4、GTM 与 Product Schema", "PageSpeed 优化目标 PC ≥ 90、移动 ≥ 80"],
        featured: true,
      },
      {
        name: "复杂业务定制",
        price: "¥50,000 起",
        support: "售后周期按范围确认，最低 3 个月",
        timeline: "按范围评估",
        bestFor: "适合 B2B、批发、询价、ERP/CRM、复杂履约业务。",
        points: ["复杂业务流程与权限梳理", "客户分级、批发或询价流程", "ERP / CRM 与第三方系统对接", "商品与客户数据迁移评估", "定制前端交互与多端适配", "性能优化与技术 SEO", "分阶段测试、上线与交接"],
      },
    ],
    modulesTitle: "模块加购参考",
    modulesIntro: "适合在基础方案上追加页面、追踪或动效。最终以确认范围为准。",
    moduleGroups: [
      {
        name: "页面建设",
        summary: "核心销售页面与品牌内容页面",
        modules: [
          { name: "首页模块", price: "¥3,500", description: "品牌 Banner、产品展示、KOL 区块、CTA 与页脚" },
          { name: "商品详情页", price: "¥3,500", description: "产品图、规格参数、购买流程与社交证明" },
          { name: "集合页", price: "¥2,500", description: "多维筛选、产品网格、悬停切换与快速加购" },
          { name: "About 页面", price: "¥2,000", description: "品牌故事、核心价值、团队模块与媒体背书" },
          { name: "Help Center", price: "¥2,000", description: "FAQ、运输、退换货、保修与联系信息" },
          { name: "Blog 模块", price: "¥1,500", description: "博客列表页与文章详情页" },
        ],
      },
      {
        name: "数据与体验",
        summary: "追踪、结构化数据与品牌动效",
        modules: [
          { name: "GA4 / GTM", price: "¥1,500", description: "电商事件追踪、GTM 容器与 Product Schema" },
          { name: "自定义动画", price: "¥2,000 起", description: "GSAP ScrollTrigger 或 Framer Motion 动效" },
        ],
      },
      {
        name: "商品扩展",
        summary: "现有商品结构之外的内容适配",
        modules: [
          { name: "额外 SKU", price: "¥1,000 / 3 个", description: "新增产品属性、素材与页面内容适配" },
        ],
      },
    ],
    excludedTitle: "费用不包含",
    excludedIntro: "这些通常属于第三方费用或业务系统费用，需要单独支付或按实际范围评估。",
    excludedGroups: [
      {
        name: "平台基础费用",
        summary: "由 Shopify、域名或支付服务商直接收取",
        items: [
          { name: "Shopify 官方订阅", description: "由 Shopify 按所选套餐周期收取" },
          { name: "域名和邮箱", description: "由域名注册商及邮箱服务商收取" },
          { name: "支付通道手续费", description: "由支付服务商按交易或结算收取" },
        ],
      },
      {
        name: "第三方运营费用",
        summary: "根据应用、接口或推广使用量单独结算",
        items: [
          { name: "第三方 App 费用", description: "由应用服务商按订阅或使用量收取" },
          { name: "第三方系统 API 费用", description: "由接口服务商按调用量或套餐收取" },
          { name: "广告投放费用", description: "直接支付给广告平台或推广服务商" },
        ],
      },
    ],
    excludedNote: "以上费用不会并入建站开发报价，实际金额以对应第三方服务商账单为准。",
    faqTitle: "价格 FAQ",
    faqs: [
      {
        q: "Shopify 建站为什么价格差异大？",
        a: "差异主要来自设计深度、页面数量、SKU 复杂度、第三方系统对接、数据追踪要求和上线后的维护范围。只套模板和完整定制销售路径，不是同一种交付。",
      },
      {
        q: "什么时候选 ¥20,000 起的方案？",
        a: "适合已有参考站、品牌视觉要求相对简单、希望尽快上线验证产品的团队。它重点解决稳定上线和基础销售路径。",
      },
      {
        q: "什么时候选 ¥35,000 起的方案？",
        a: "当你需要更完整的品牌表达、Figma UI/UX、商品页说服力和广告流量承接路径时，应该选择设计图定制方案。",
      },
      {
        q: "复杂业务为什么需要单独评估？",
        a: "B2B 批发、询价、客户分级、ERP/CRM、复杂物流和多市场会影响数据结构、权限、流程和测试范围，所以需要先诊断再确认报价。",
      },
      {
        q: "售后包含什么？",
        a: "售后主要包含已交付范围内的技术问题排查、页面和功能异常修复、上线稳定性支持。新增页面、活动、功能或长期运营优化不包含在免费售后内。",
      },
      {
        q: "后期维护怎么收费？",
        a: "可以按月维护或按项目报价。维护内容通常包括页面小改、活动页、数据追踪调整、SEO 内容上线、功能优化和技术排查。",
      },
    ],
    ctaTitle: "不确定选哪一档，先做诊断。",
    ctaText: "把产品、预算、上线时间和当前问题发来，我们会先判断应该用模板方案、设计图定制，还是复杂业务定制。",
    costGuideTitle: "想先理解 Shopify 建站费用怎么算？",
    costGuideText: "查看费用说明页，了解三档报价差异、影响价格的因素，以及哪些第三方费用通常不包含在建站报价里。",
    costGuideCta: "查看 Shopify 建站费用说明",
  },
  en: {
    eyebrow: "SHOPIFY PRICING",
    title: "Shopify Website Pricing",
    subtitle: "Pricing is structured by delivery depth, page complexity, and business systems, not by page count alone.",
    description:
      "The pricing below follows the current contract tiers. Final quotes depend on product category, SKU count, page structure, payments, logistics, analytics, and third-party integration scope.",
    primaryCta: "Request a Free Store Review",
    secondaryCta: "View Pricing Tiers",
    plansTitle: "Three Pricing Tiers",
    plansIntro: "Post-launch support starts at 2 months. More complex builds receive longer technical support after delivery.",
    plans: [
      {
        name: "Module-Based Build",
        price: "from ¥20,000",
        support: "2 months of post-launch technical support",
        timeline: "2-4 weeks",
        bestFor: "For teams with clear references or defined module needs.",
        points: ["1-3 reference sites and module breakdown", "Shopify theme build and content population", "Brand color and typography adaptation", "Mobile and major browser compatibility", "Basic SEO optimization", "Testing, performance work, and launch", "2 overall page revision rounds"],
      },
      {
        name: "Custom Design Build",
        price: "from ¥35,000",
        support: "2 months of post-launch technical support",
        timeline: "3-6 weeks",
        bestFor: "For teams that need stronger brand expression and conversion structure.",
        points: ["4 core pages in desktop and mobile", "8 Figma screens with source files", "Color, typography, and spacing system", "Custom Liquid theme development", "GSAP / Framer Motion interactions", "Desktop, tablet, and mobile responsive build", "GA4, GTM, and Product Schema", "PageSpeed targets: desktop ≥ 90, mobile ≥ 80"],
        featured: true,
      },
      {
        name: "Complex Business",
        price: "from ¥50,000",
        support: "Support scoped by project, minimum 3 months",
        timeline: "Scoped timeline",
        bestFor: "For B2B, wholesale, quote flows, ERP/CRM, or complex fulfillment.",
        points: ["Complex workflows and permissions", "Customer tiers, wholesale, or quote flow", "ERP / CRM and third-party integrations", "Product and customer data migration assessment", "Custom interactions and responsive delivery", "Performance and technical SEO", "Phased testing, launch, and handoff"],
      },
    ],
    modulesTitle: "Add-On Module Reference",
    modulesIntro: "Useful when extending a base build with extra pages, analytics, or animation. Final scope is confirmed before quote.",
    moduleGroups: [
      {
        name: "Page Builds",
        summary: "Core sales and brand content pages",
        modules: [
          { name: "Homepage module", price: "¥3,500", description: "Brand banner, product display, KOL blocks, CTAs, and footer" },
          { name: "Product page", price: "¥3,500", description: "Product media, specifications, purchase flow, and social proof" },
          { name: "Collection page", price: "¥2,500", description: "Multi-filtering, product grid, hover states, and quick add" },
          { name: "About page", price: "¥2,000", description: "Brand story, values, team modules, and media proof" },
          { name: "Help Center", price: "¥2,000", description: "FAQ, shipping, returns, warranty, and contact information" },
          { name: "Blog module", price: "¥1,500", description: "Blog index and article detail templates" },
        ],
      },
      {
        name: "Data & Experience",
        summary: "Measurement, structured data, and branded motion",
        modules: [
          { name: "GA4 / GTM", price: "¥1,500", description: "Ecommerce event tracking, GTM container, and Product Schema" },
          { name: "Custom animation", price: "from ¥2,000", description: "GSAP ScrollTrigger or Framer Motion interactions" },
        ],
      },
      {
        name: "Catalog Expansion",
        summary: "Content adaptation beyond the included product scope",
        modules: [
          { name: "Extra SKUs", price: "¥1,000 / 3 items", description: "Additional product attributes, media, and page content" },
        ],
      },
    ],
    excludedTitle: "Not Included",
    excludedIntro: "These are usually third-party or business system costs, paid separately or scoped case by case.",
    excludedGroups: [
      {
        name: "Platform Costs",
        summary: "Charged directly by Shopify, domain, or payment providers",
        items: [
          { name: "Shopify subscription", description: "Billed by Shopify on the selected plan cycle" },
          { name: "Domain and email", description: "Billed by domain registrars and email providers" },
          { name: "Payment provider fees", description: "Charged by payment providers per transaction or settlement" },
        ],
      },
      {
        name: "Third-Party Operations",
        summary: "Billed separately based on app, API, or advertising usage",
        items: [
          { name: "Third-party app fees", description: "Billed by app providers by subscription or usage" },
          { name: "Third-party API fees", description: "Billed by API providers by calls or service tier" },
          { name: "Advertising spend", description: "Paid directly to ad platforms or marketing providers" },
        ],
      },
    ],
    excludedNote: "These costs are not included in the website development quote. Final amounts follow each third-party provider's invoice.",
    faqTitle: "Pricing FAQ",
    faqs: [
      {
        q: "Why do Shopify build prices vary so much?",
        a: "The difference comes from design depth, page count, SKU complexity, third-party integrations, analytics requirements, and post-launch support. A template setup and a custom sales path are different deliveries.",
      },
      {
        q: "When should I choose the ¥20,000 tier?",
        a: "Choose it when you have references, simple brand requirements, and want to launch quickly to validate products. It focuses on stable launch and the basic sales path.",
      },
      {
        q: "When should I choose the ¥35,000 tier?",
        a: "Choose it when you need stronger brand expression, Figma UI/UX, product page persuasion, and a paid-traffic conversion path.",
      },
      {
        q: "Why are complex builds scoped separately?",
        a: "B2B wholesale, quote flows, customer tiers, ERP/CRM, complex logistics, and multi-market operations affect data structure, permissions, process, and testing scope.",
      },
      {
        q: "What does post-launch support include?",
        a: "It covers technical troubleshooting, bug fixes within delivered scope, and launch stability support. New pages, campaigns, features, or ongoing growth work are not included in free support.",
      },
      {
        q: "How is ongoing maintenance priced?",
        a: "Maintenance can be monthly or project-based. It often includes page edits, campaign pages, analytics updates, SEO content publishing, feature improvements, and technical troubleshooting.",
      },
    ],
    ctaTitle: "Not sure which tier fits? Start with diagnosis.",
    ctaText: "Send product, budget, timeline, and current blockers. We will judge whether you need a module build, custom design build, or complex business scope.",
    costGuideTitle: "Want to understand how Shopify build costs are scoped?",
    costGuideText: "Read the cost guide to compare pricing tiers, cost drivers, and third-party fees that are usually not included in a build quote.",
    costGuideCta: "Read Shopify Website Cost Guide",
  },
}

const pricingFaqMeta = [
  { code: "SCOPE", zh: ["报价结构", "交付范围", "复杂度"], en: ["Pricing", "Delivery scope", "Complexity"] },
  { code: "STARTER", zh: ["¥20K", "快速上线", "模板模块"], en: ["¥20K", "Quick launch", "Module build"] },
  { code: "CUSTOM", zh: ["¥35K", "Figma", "转化路径"], en: ["¥35K", "Figma", "Conversion path"] },
  { code: "SYSTEM", zh: ["B2B", "ERP / CRM", "单独评估"], en: ["B2B", "ERP / CRM", "Custom scope"] },
  { code: "SUPPORT", zh: ["至少 2 个月", "技术支持", "Bug 修复"], en: ["2+ months", "Technical support", "Bug fixes"] },
  { code: "CARE", zh: ["按月维护", "按项目", "持续优化"], en: ["Monthly care", "Per project", "Optimization"] },
]

export function PricingPage() {
  const { language, localizedPath } = useLanguage()
  const text = copy[language]
  const [activePlan, setActivePlan] = useState(1)
  const [activeModuleGroup, setActiveModuleGroup] = useState(0)
  const [activeFaq, setActiveFaq] = useState(0)
  const heroProof = language === "zh" ? ["三档公开价格", "按实际范围确认", "至少 2 个月售后"] : ["Three transparent tiers", "Scoped to actual requirements", "At least 2 months support"]
  const moduleLabels = language === "zh" ? { eyebrow: "ADD-ON MAP / 09", track: "模块轨道", items: "项可选模块" } : { eyebrow: "ADD-ON MAP / 09", track: "Module track", items: "optional modules" }
  const boundaryLabels = language === "zh" ? { eyebrow: "COST BOUNDARY / 06", core: "建站开发报价", coreText: "仅覆盖已确认的设计、开发与交付", groupCodes: ["平台费用 / 03", "运营费用 / 03"] } : { eyebrow: "COST BOUNDARY / 06", core: "Website build quote", coreText: "Covers confirmed design, development, and delivery", groupCodes: ["Platform costs / 03", "Operations / 03"] }
  const pricingLabels = language === "zh" ? {
    eyebrow: "PRICING ROUTES / 03",
    recommended: "推荐路线",
    deliveryDepth: "交付深度",
    suitable: "适合对象",
    scope: "包含范围",
    unsure: "不确定适合哪一档？先免费诊断确认范围。",
    closingEyebrow: "SCOPE CHECK",
    closingTitle: "让需求决定套餐，不让套餐限制需求。",
    closingText: "告诉我们产品、预算和上线时间，我们会先判断最适合的交付深度。",
    routes: ["快速上线", "品牌定制", "业务系统"],
  } : {
    eyebrow: "PRICING ROUTES / 03",
    recommended: "Recommended",
    deliveryDepth: "Delivery depth",
    suitable: "Best for",
    scope: "Included scope",
    unsure: "Not sure which route fits? Start with a free scope diagnosis.",
    closingEyebrow: "SCOPE CHECK",
    closingTitle: "Let the scope choose the route, not the other way around.",
    closingText: "Share your product, budget, and launch target. We will identify the right delivery depth first.",
    routes: ["Quick launch", "Brand custom", "Business system"],
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_32%,rgba(34,211,238,0.11),transparent_30%),radial-gradient(ellipse_at_24%_60%,rgba(119,252,117,0.15),transparent_35%),linear-gradient(135deg,#020403,#07100b_52%,#010202)]" />
          <div aria-hidden="true" className="absolute -inset-x-[18%] -top-[22%] h-[118%] animate-cro-signal-orbit bg-[radial-gradient(ellipse_at_68%_36%,rgba(34,211,238,0.15),transparent_28%),radial-gradient(ellipse_at_32%_68%,rgba(119,252,117,0.2),transparent_31%)] opacity-85 blur-2xl will-change-transform motion-reduce:animate-none" />
          <div aria-hidden="true" className="hero-flow-glow pointer-events-none absolute inset-x-[12%] top-[14%] h-[58%] rounded-full bg-primary/[0.085] opacity-75 blur-3xl" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.14] [background-image:radial-gradient(circle,rgba(119,252,117,0.42)_1px,transparent_1.4px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_92%,transparent)]" />

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden font-mono">
            <div className="absolute left-1/2 top-[52%] size-[520px] -translate-x-1/2 -translate-y-1/2 sm:size-[720px]"><span className="block size-full animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-primary/20 shadow-[0_0_90px_rgba(119,252,117,0.08)] motion-reduce:animate-none" /></div>
            <div className="absolute left-1/2 top-[52%] size-[360px] -translate-x-1/2 -translate-y-1/2 sm:size-[520px]"><span className="block size-full animate-[spin_20s_linear_infinite] rounded-full border border-cyan-300/15 motion-reduce:animate-none" /></div>
            <div className="absolute left-1/2 top-[52%] size-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/18 shadow-[inset_0_0_55px_rgba(119,252,117,0.045)] sm:size-[300px]" />

            <span className="absolute left-[4%] top-[24%] animate-theme-aurora-drift rounded-full bg-black/20 px-4 py-2 text-base text-primary/35 shadow-[0_0_22px_rgba(119,252,117,0.08)] backdrop-blur-sm motion-reduce:animate-none sm:left-[7%]">TIER 01 · ¥20K</span>
            <span className="absolute right-[3%] top-[31%] animate-cro-signal-orbit rounded-full bg-black/20 px-4 py-2 text-base text-cyan-200/30 shadow-[0_0_22px_rgba(34,211,238,0.08)] backdrop-blur-sm motion-reduce:animate-none sm:right-[7%]">TIER 02 · ¥35K</span>
            <span className="absolute bottom-[14%] right-[8%] animate-theme-aurora-drift rounded-full bg-black/20 px-4 py-2 text-base text-primary/32 shadow-[0_0_22px_rgba(119,252,117,0.08)] backdrop-blur-sm motion-reduce:animate-none sm:right-[15%]">TIER 03 · ¥50K+</span>

            <span className="absolute left-0 top-[28%] h-1.5 w-24 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] motion-reduce:hidden" />
            <span className="absolute left-0 top-[72%] h-1.5 w-32 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-[1px] [animation-delay:1.8s] motion-reduce:hidden" />

            <div className="absolute bottom-[8%] left-[5%] hidden items-center gap-4 text-base uppercase text-white/20 md:flex"><span>Design depth</span><span className="h-px w-12 bg-primary/30" /><span>Pages</span><span className="h-px w-12 bg-cyan-300/25" /><span>SKU</span><span className="h-px w-12 bg-primary/30" /><span>Data</span></div>
          </div>

          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-90" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
            <defs><linearGradient id="pricing-hero-flow-primary" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#77fc75" stopOpacity="0" /><stop offset="28%" stopColor="#77fc75" stopOpacity="0.62" /><stop offset="72%" stopColor="#dfffe0" stopOpacity="0.34" /><stop offset="100%" stopColor="#77fc75" stopOpacity="0" /></linearGradient><linearGradient id="pricing-hero-flow-secondary" x1="1" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22d3ee" stopOpacity="0" /><stop offset="45%" stopColor="#22d3ee" stopOpacity="0.42" /><stop offset="100%" stopColor="#77fc75" stopOpacity="0" /></linearGradient></defs>
            <path className="hero-flow-line" d="M-120 690 C230 500 430 820 760 720 S1260 430 1720 610" fill="none" stroke="url(#pricing-hero-flow-primary)" strokeWidth="2" strokeLinecap="round" strokeDasharray="140 38" vectorEffect="non-scaling-stroke" />
            <path className="hero-flow-particles" d="M-120 690 C230 500 430 820 760 720 S1260 430 1720 610" fill="none" stroke="#77fc75" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 42" opacity="0.72" vectorEffect="non-scaling-stroke" />
            <path className="hero-flow-line" d="M-100 825 C320 620 620 930 980 760 S1400 540 1700 700" fill="none" stroke="url(#pricing-hero-flow-secondary)" strokeWidth="1.7" strokeLinecap="round" strokeDasharray="105 46" vectorEffect="non-scaling-stroke" />
            <g className="hidden md:block"><path className="hero-flow-line" d="M1160 -80 C1470 150 1210 360 1710 510" fill="none" stroke="url(#pricing-hero-flow-primary)" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="90 52" opacity="0.65" vectorEffect="non-scaling-stroke" /><path className="hero-flow-particles" d="M1160 -80 C1470 150 1210 360 1710 510" fill="none" stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="1 54" opacity="0.35" vectorEffect="non-scaling-stroke" /></g>
          </svg>

          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.28)_58%,rgba(0,0,0,0.55)_100%)]" />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-12 pt-32 text-center md:px-10 md:pb-16">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.12em] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_0_28px_rgba(119,252,117,0.08)]"><span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />{text.eyebrow}</p>
            <h1 className="mx-auto bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-[clamp(2.55rem,5vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.025em] text-transparent animate-shimmer motion-reduce:animate-none">{text.title}</h1>
            <p className="mx-auto mt-6 max-w-4xl text-lg font-semibold leading-[1.55] text-foreground/90 md:text-xl">{text.subtitle}</p>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-[1.7] text-muted-foreground md:text-lg">{text.description}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-5">
              <a href={localizedPath("/diagnosis")} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-[0_0_28px_rgba(119,252,117,0.28)] transition-all hover:brightness-110 active:scale-[0.98]">{text.primaryCta}<ArrowUpRight className="size-4" /></a>
              <a href="#plans" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-black/12 px-8 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-white/[0.055]">{text.secondaryCta}</a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:mt-14">{heroProof.map((item) => <span key={item} className="rounded-full bg-white/[0.04] px-4 py-2 text-base text-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-sm">{item}</span>)}</div>
          </div>
        </section>

        <section id="plans" className="scroll-mt-24 overflow-hidden bg-black px-4 py-[50px] sm:px-6 md:px-10 md:py-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.08em] text-primary">{pricingLabels.eyebrow}</p>
              <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.12] tracking-normal">{text.plansTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.plansIntro}</p>
            </div>

            <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(119,252,117,0.09),transparent_36%),linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
              <div aria-hidden="true" className="absolute left-1/2 top-0 size-[34rem] -translate-x-1/2 -translate-y-[68%] rounded-full border border-primary/10 shadow-[0_0_90px_rgba(119,252,117,0.06)]" />
              <div aria-hidden="true" className="absolute left-1/2 top-0 size-[22rem] -translate-x-1/2 -translate-y-[66%] animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-cyan-300/12 motion-reduce:animate-none" />

              <div className="relative hidden lg:grid lg:grid-cols-3 lg:gap-3 lg:px-3 lg:pt-3 xl:gap-4">
                {text.plans.map((plan, index) => (
                  <article key={plan.name} className={`relative flex flex-col overflow-hidden rounded-[2rem] px-6 pb-10 pt-8 backdrop-blur-sm xl:px-8 ${plan.featured ? "bg-[radial-gradient(circle_at_50%_8%,rgba(119,252,117,0.15),transparent_38%),rgba(119,252,117,0.035)]" : index === 2 ? "bg-[radial-gradient(circle_at_50%_8%,rgba(34,211,238,0.08),transparent_36%),rgba(255,255,255,0.018)]" : "bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.055),transparent_36%),rgba(255,255,255,0.018)]"}`}>
                    <div className="flex min-h-16 items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className={`flex size-16 shrink-0 items-center justify-center rounded-full border font-mono text-base font-bold ${plan.featured ? "border-primary/50 bg-primary/12 text-primary shadow-[0_0_28px_rgba(119,252,117,0.16)]" : "border-white/15 bg-white/[0.035] text-foreground/75"}`}>0{index + 1}</span>
                        <p className="font-mono text-base font-semibold uppercase tracking-[0.05em] text-primary">{pricingLabels.routes[index]}</p>
                      </div>
                      {plan.featured && <span className="shrink-0 rounded-full bg-primary/12 px-3 py-1 text-base font-semibold text-primary">{pricingLabels.recommended}</span>}
                    </div>
                    <div className="mt-7">
                      <p className="text-[clamp(1.75rem,2.4vw,2.65rem)] font-bold leading-none tracking-[-0.02em] text-foreground">{plan.price}</p>
                      <h3 className="mt-5 text-2xl font-bold leading-tight tracking-normal">{plan.name}</h3>
                    </div>
                    <div className="mt-7 flex items-center justify-between gap-4">
                      <p className="text-base text-muted-foreground">{pricingLabels.deliveryDepth} <span className="ml-2 font-mono text-primary">{index + 1} / 3</span></p>
                      <div className="flex items-center gap-2">{[0, 1, 2].map((step) => <span key={step} className={`size-3.5 rounded-full border ${step <= index ? "border-primary bg-primary shadow-[0_0_14px_rgba(119,252,117,0.5)]" : "border-white/15 bg-white/[0.04]"}`} />)}</div>
                    </div>
                    <div className="mt-8 space-y-4 text-base">
                      <p className="flex items-start gap-3 leading-relaxed text-foreground/85"><Clock3 className="mt-1 size-4 shrink-0 text-primary" />{plan.timeline}</p>
                      <p className="flex items-start gap-3 leading-relaxed text-foreground/85"><ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />{plan.support}</p>
                    </div>
                    <div className="mt-8">
                      <p className="mb-3 text-base font-semibold text-foreground">{pricingLabels.suitable}</p>
                      <p className="text-base leading-relaxed text-muted-foreground">{plan.bestFor}</p>
                    </div>
                    <div className="mt-8 space-y-3">
                      <p className="text-base font-semibold text-foreground">{pricingLabels.scope}</p>
                      {plan.points.map((point) => <p key={point} className="flex items-start gap-3 text-base leading-relaxed text-foreground/80"><CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />{point}</p>)}
                    </div>
                  </article>
                ))}
              </div>

              <Accordion type="single" value={`plan-${activePlan}`} onValueChange={(value) => value && setActivePlan(Number(value.replace("plan-", "")))} className="relative space-y-2 px-2 pb-3 pt-3 lg:hidden [&_[data-slot=accordion-content]]:text-base">
                {text.plans.map((plan, index) => (
                  <AccordionItem key={plan.name} value={`plan-${index}`} className={`relative overflow-hidden rounded-[1.75rem] border-0 px-3 sm:px-5 ${activePlan === index ? "bg-[radial-gradient(circle_at_0%_0%,rgba(119,252,117,0.15),transparent_48%),rgba(119,252,117,0.035)]" : index === 2 ? "bg-cyan-300/[0.022]" : "bg-white/[0.025]"}`}>
                    <AccordionTrigger className="relative z-10 min-h-0 py-6 text-base hover:no-underline [&>svg]:mt-1 [&>svg]:size-5 [&>svg]:text-primary">
                      <div className="min-w-0 flex-1 pr-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`flex size-12 shrink-0 items-center justify-center rounded-full border font-mono text-base font-bold ${activePlan === index ? "border-primary/50 bg-primary/12 text-primary" : "border-white/15 bg-white/[0.035] text-foreground/70"}`}>0{index + 1}</span>
                          <p className="font-mono text-base font-semibold uppercase tracking-[0.04em] text-primary">{pricingLabels.routes[index]}</p>
                          {plan.featured && <span className="rounded-full bg-primary/12 px-3 py-1 text-base font-semibold text-primary">{pricingLabels.recommended}</span>}
                        </div>
                        <p className="mt-4 text-[1.75rem] font-bold leading-none tracking-[-0.02em] text-foreground">{plan.price}</p>
                        <p className="mt-3 text-xl font-bold leading-tight text-foreground">{plan.name}</p>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{plan.bestFor}</p>
                        <p className="mt-4 flex items-center gap-2 text-base text-foreground/80"><Clock3 className="size-4 shrink-0 text-primary" />{plan.timeline}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="relative z-10 pb-7 text-base">
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <p className="text-base text-muted-foreground">{pricingLabels.deliveryDepth} <span className="ml-2 font-mono text-primary">{index + 1} / 3</span></p>
                        <div className="flex items-center gap-2">{[0, 1, 2].map((step) => <span key={step} className={`size-3.5 rounded-full border ${step <= index ? "border-primary bg-primary shadow-[0_0_12px_rgba(119,252,117,0.45)]" : "border-white/15 bg-white/[0.04]"}`} />)}</div>
                      </div>
                      <p className="flex items-start gap-3 text-base leading-relaxed text-foreground/85"><ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />{plan.support}</p>
                      <p className="mb-3 mt-6 text-base font-semibold text-foreground">{pricingLabels.scope}</p>
                      <div className="space-y-3">{plan.points.map((point) => <p key={point} className="flex items-start gap-3 text-base leading-relaxed text-foreground/80"><CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />{point}</p>)}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="relative overflow-hidden px-5 py-12 text-center sm:px-7 lg:px-9 lg:py-16">
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/8" />
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-3xl" />
                <div className="relative mx-auto flex max-w-3xl flex-col items-center">
                  <span className="flex size-16 items-center justify-center rounded-full border border-primary/35 bg-primary/10 font-mono text-xl font-bold text-primary shadow-[0_0_32px_rgba(119,252,117,0.15)]">?</span>
                  <p className="mt-5 font-mono text-base font-semibold tracking-[0.06em] text-primary">{pricingLabels.closingEyebrow}</p>
                  <h3 className="mt-3 text-[clamp(1.5rem,2.5vw,2.15rem)] font-bold leading-tight tracking-normal">{pricingLabels.closingTitle}</h3>
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{pricingLabels.closingText}</p>
                  <a href={localizedPath("/diagnosis")} className="mt-7 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-[0_0_28px_rgba(119,252,117,0.24)] transition-all hover:brightness-110 active:scale-[0.98]">{text.primaryCta}<ArrowUpRight className="size-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="modules" className="scroll-mt-24 overflow-hidden bg-background px-3 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
              <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary shadow-[0_0_28px_rgba(119,252,117,0.12)]"><Plus className="size-6" /></span>
              <p className="mt-5 font-mono text-base font-semibold tracking-[0.07em] text-primary">{moduleLabels.eyebrow}</p>
              <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.12] tracking-normal">{text.modulesTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.modulesIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(119,252,117,0.1),transparent_28%),radial-gradient(circle_at_86%_62%,rgba(34,211,238,0.055),transparent_25%),linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-3">
              <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full border border-primary/10" />
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-1/2 size-56 rounded-full border border-cyan-300/8" />

              <div className="relative hidden space-y-3 lg:block">
                {text.moduleGroups.map((group, groupIndex) => (
                  <article key={group.name} className={`grid gap-8 rounded-[2rem] px-7 py-8 lg:grid-cols-[15rem_1fr] xl:px-9 ${groupIndex === 1 ? "bg-primary/[0.035]" : groupIndex === 2 ? "bg-cyan-300/[0.02]" : "bg-white/[0.018]"}`}>
                    <div className="flex items-start gap-4">
                      <span className={`flex size-16 shrink-0 items-center justify-center rounded-full border font-mono text-base font-bold ${groupIndex === 1 ? "border-primary/45 bg-primary/12 text-primary shadow-[0_0_24px_rgba(119,252,117,0.16)]" : "border-white/15 bg-white/[0.035] text-foreground/75"}`}>0{groupIndex + 1}</span>
                      <div>
                        <p className="font-mono text-base font-semibold uppercase tracking-[0.05em] text-primary">{moduleLabels.track}</p>
                        <h3 className="mt-2 text-2xl font-bold leading-tight tracking-normal">{group.name}</h3>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{group.summary}</p>
                        <p className="mt-3 font-mono text-base text-foreground/50">0{group.modules.length} {moduleLabels.items}</p>
                      </div>
                    </div>
                    <div className={`grid content-start gap-x-7 gap-y-7 ${group.modules.length > 2 ? "lg:grid-cols-2 xl:grid-cols-3" : "lg:grid-cols-2"}`}>
                      {group.modules.map((module, moduleIndex) => (
                        <div key={module.name} className="group flex min-h-24 items-start gap-3 py-2">
                          <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/[0.05] font-mono text-base text-primary transition-colors group-hover:bg-primary/12">{String(moduleIndex + 1).padStart(2, "0")}</span>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                              <h4 className="text-base font-semibold leading-snug text-foreground">{module.name}</h4>
                              <p className="shrink-0 text-base font-bold text-primary">{module.price}</p>
                            </div>
                            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{module.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <Accordion type="single" value={`module-group-${activeModuleGroup}`} onValueChange={(value) => value && setActiveModuleGroup(Number(value.replace("module-group-", "")))} className="relative space-y-2 lg:hidden [&_[data-slot=accordion-content]]:text-base">
                {text.moduleGroups.map((group, groupIndex) => (
                  <AccordionItem key={group.name} value={`module-group-${groupIndex}`} className={`overflow-hidden rounded-[1.75rem] border-0 px-3 sm:px-5 ${activeModuleGroup === groupIndex ? "bg-primary/[0.055]" : groupIndex === 2 ? "bg-cyan-300/[0.02]" : "bg-white/[0.025]"}`}>
                    <AccordionTrigger className="min-h-20 py-4 text-base hover:no-underline [&>svg]:mt-1 [&>svg]:size-5 [&>svg]:text-primary">
                      <div className="flex min-w-0 flex-1 items-center gap-3 pr-2">
                        <span className={`flex size-12 shrink-0 items-center justify-center rounded-full border font-mono text-base font-bold ${activeModuleGroup === groupIndex ? "border-primary/45 bg-primary/12 text-primary" : "border-white/15 bg-white/[0.035] text-foreground/70"}`}>0{groupIndex + 1}</span>
                        <div className="min-w-0 text-left">
                          <p className="text-lg font-bold leading-tight text-foreground">{group.name}</p>
                          <p className="mt-1 text-base leading-relaxed text-muted-foreground">{group.summary}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-base">
                      <div className="space-y-1">
                        {group.modules.map((module, moduleIndex) => (
                          <div key={module.name} className="flex items-start gap-3 py-3">
                            <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/[0.05] font-mono text-base text-primary">{String(moduleIndex + 1).padStart(2, "0")}</span>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                                <p className="text-base font-semibold text-foreground">{module.name}</p>
                                <p className="shrink-0 text-base font-bold text-primary">{module.price}</p>
                              </div>
                              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{module.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="excluded" className="scroll-mt-24 overflow-hidden bg-black px-3 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
              <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary shadow-[0_0_28px_rgba(119,252,117,0.12)]"><FileWarning className="size-6" /></span>
              <p className="mt-5 font-mono text-base font-semibold tracking-[0.07em] text-primary">{boundaryLabels.eyebrow}</p>
              <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.12] tracking-normal">{text.excludedTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.excludedIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_48%,rgba(119,252,117,0.105),transparent_31%),radial-gradient(circle_at_83%_68%,rgba(34,211,238,0.055),transparent_25%),linear-gradient(145deg,rgba(255,255,255,0.048),rgba(255,255,255,0.012))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
              <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[48%] size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/8" />
              <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[48%] size-[31rem] -translate-x-1/2 -translate-y-1/2 animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-cyan-300/10 motion-reduce:animate-none" />

              <div className="relative hidden min-h-[620px] grid-cols-[minmax(0,1fr)_18rem_minmax(0,1fr)] items-center gap-9 px-9 py-12 lg:grid xl:gap-14 xl:px-12">
                {text.excludedGroups.map((group, groupIndex) => (
                  <article key={group.name} className={`space-y-7 ${groupIndex === 0 ? "order-1 text-right" : "order-3 text-left"}`}>
                    <div>
                      <p className={`font-mono text-base font-semibold uppercase tracking-[0.05em] ${groupIndex === 0 ? "text-primary" : "text-cyan-300"}`}>{boundaryLabels.groupCodes[groupIndex]}</p>
                      <h3 className="mt-2 text-2xl font-bold leading-tight tracking-normal">{group.name}</h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{group.summary}</p>
                    </div>
                    <div className="space-y-6">
                      {group.items.map((item, itemIndex) => (
                        <div key={item.name} className={`flex items-start gap-4 ${groupIndex === 0 ? "flex-row-reverse" : ""}`}>
                          <span className={`flex size-12 shrink-0 items-center justify-center rounded-full border font-mono text-base font-bold ${groupIndex === 0 ? "border-primary/35 bg-primary/10 text-primary" : "border-cyan-300/25 bg-cyan-300/[0.07] text-cyan-300"}`}>0{itemIndex + 1}</span>
                          <div className="min-w-0 pt-1">
                            <h4 className="text-base font-semibold leading-snug text-foreground">{item.name}</h4>
                            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}

                <div className="order-2 flex items-center justify-center">
                  <div className="relative flex size-72 flex-col items-center justify-center rounded-full border border-primary/30 bg-black/45 p-8 text-center shadow-[inset_0_0_70px_rgba(119,252,117,0.08),0_0_60px_rgba(119,252,117,0.1)] backdrop-blur-xl">
                    <span className="flex size-14 items-center justify-center rounded-full bg-primary/12 text-primary"><Layers3 className="size-6" /></span>
                    <p className="mt-5 font-mono text-base font-semibold tracking-[0.05em] text-primary">IN SCOPE</p>
                    <h3 className="mt-3 text-2xl font-bold leading-tight tracking-normal">{boundaryLabels.core}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{boundaryLabels.coreText}</p>
                  </div>
                </div>
              </div>

              <div className="relative p-2 lg:hidden">
                <div className="mx-auto my-7 flex size-56 flex-col items-center justify-center rounded-full border border-primary/30 bg-black/40 p-6 text-center shadow-[inset_0_0_55px_rgba(119,252,117,0.08),0_0_45px_rgba(119,252,117,0.08)]">
                  <span className="flex size-12 items-center justify-center rounded-full bg-primary/12 text-primary"><Layers3 className="size-5" /></span>
                  <p className="mt-4 font-mono text-base font-semibold tracking-[0.05em] text-primary">IN SCOPE</p>
                  <h3 className="mt-2 text-xl font-bold leading-tight">{boundaryLabels.core}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{boundaryLabels.coreText}</p>
                </div>
                <div className="space-y-2">
                  {text.excludedGroups.map((group, groupIndex) => (
                    <article key={group.name} className={`rounded-[1.75rem] p-5 ${groupIndex === 0 ? "bg-primary/[0.045]" : "bg-cyan-300/[0.025]"}`}>
                      <p className={`font-mono text-base font-semibold uppercase tracking-[0.04em] ${groupIndex === 0 ? "text-primary" : "text-cyan-300"}`}>{boundaryLabels.groupCodes[groupIndex]}</p>
                      <h3 className="mt-2 text-xl font-bold leading-tight">{group.name}</h3>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground">{group.summary}</p>
                      <div className="mt-5 space-y-1">
                        {group.items.map((item, itemIndex) => (
                          <div key={item.name} className="flex items-start gap-3 py-3">
                            <span className={`flex size-10 shrink-0 items-center justify-center rounded-full font-mono text-base font-bold ${groupIndex === 0 ? "bg-primary/10 text-primary" : "bg-cyan-300/[0.07] text-cyan-300"}`}>0{itemIndex + 1}</span>
                            <div className="min-w-0 pt-1">
                              <h4 className="text-base font-semibold leading-snug text-foreground">{item.name}</h4>
                              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <p className="relative mx-auto max-w-3xl px-6 pb-9 pt-0 text-center text-base leading-relaxed text-foreground/65 md:px-10 md:pb-11">{text.excludedNote}</p>
            </div>
          </div>
        </section>

        <section id="pricing-faq" className="scroll-mt-24 bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-5 text-center">
              <p className="flex items-center justify-center gap-2 font-mono text-base uppercase tracking-[0.08em] text-cyan-300"><HelpCircle className="size-5" />Pricing knowledge</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.faqTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground">{language === "zh" ? "把方案选择、复杂业务、售后与长期维护讲清楚，再决定预算投入。" : "Clarify package fit, complex requirements, support, and ongoing care before committing budget."}</p>
            </div>

            <ServiceFaqPanel
              entries={text.faqs.map((item, index) => ({
                question: item.q,
                answer: item.a,
                category: pricingFaqMeta[index].code,
                tags: pricingFaqMeta[index][language],
              }))}
              activeIndex={activeFaq}
              onActiveIndexChange={setActiveFaq}
              panelId="pricing-faq-answer-panel"
              accordionPrefix="pricing-faq"
              statusLabel="Pricing knowledge / online"
              directoryLabel={language === "zh" ? "价格常见问题目录" : "Pricing FAQ directory"}
              answerLabel={language === "zh" ? "当前价格问题答案" : "Current pricing answer"}
            />
          </div>
        </section>

        <section className="bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
          <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[3.2rem_1.5rem_3.6rem_1.8rem] border border-white/25 bg-[linear-gradient(115deg,rgba(255,255,255,0.075),rgba(255,255,255,0.015)_38%,rgba(34,211,238,0.045)_72%,rgba(119,252,117,0.06))] px-7 py-12 shadow-[inset_0_2px_0_rgba(255,255,255,0.24),inset_0_-2px_0_rgba(119,252,117,0.1),0_45px_110px_rgba(0,0,0,0.5),0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-3xl md:px-14 md:py-16">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(34,211,238,0.15),transparent_28%),radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.08),transparent_32%)]" />
            <div aria-hidden="true" className="absolute inset-x-[7%] top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div aria-hidden="true" className="absolute -bottom-8 right-[8%] rotate-[-8deg] space-y-2 font-mono text-base leading-relaxed text-cyan-300/16"><p>scope · budget · launch</p><p>template / custom / complex</p><p>diagnosis before delivery</p></div>
            <div aria-hidden="true" className="absolute bottom-[22%] right-[2%] h-px w-[62%] rotate-[-8deg] animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.55),rgba(119,252,117,0.8),transparent)] bg-[length:200%_100%] shadow-[0_0_25px_rgba(119,252,117,0.35)] motion-reduce:animate-none" />
            <div className="relative grid gap-8 text-center lg:grid-cols-[1fr_auto] lg:items-center lg:text-left">
              <div><ShieldCheck className="mx-auto mb-5 size-8 text-primary lg:mx-0" /><h2 className="max-w-4xl text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.ctaTitle}</h2><p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">{text.ctaText}</p></div>
              <a href={localizedPath("/diagnosis")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-[0_0_28px_rgba(119,252,117,0.22)] transition-all hover:brightness-110 active:scale-[0.98]">{text.primaryCta}<ArrowUpRight className="size-4" /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
