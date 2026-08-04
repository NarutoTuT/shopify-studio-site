"use client"

import { ArrowUpRight, CheckCircle2, CircleDollarSign, Clock3, FileWarning, HelpCircle, Layers3, Plus, ShieldCheck } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"

const copy = {
  zh: {
    eyebrow: "SHOPIFY PRICING",
    title: "Shopify 建站价格",
    subtitle: "按交付深度、页面复杂度和业务系统拆分报价，而不是简单按页面数量堆价格。",
    description:
      "下面价格参考当前合同梯度。最终报价会根据你的产品品类、SKU 数量、页面结构、支付物流、数据追踪和第三方系统对接范围确认。",
    primaryCta: "免费诊断我的 Shopify 站",
    secondaryCta: "查看模块加购",
    plansTitle: "三档建站价格",
    plansIntro: "售后支持最低 2 个月，复杂度越高，交付后的技术支持周期也会更长。",
    plans: [
      {
        name: "文档模板方案",
        price: "¥20,000 起",
        support: "上线后 2 个月免费技术支持",
        timeline: "约 2-4 周",
        bestFor: "适合已有参考网站或模块需求明确的团队。",
        points: ["参考站模块拆解", "Shopify 2.0 模块化开发", "基础视觉适配", "移动端自适应", "基础 SEO"],
      },
      {
        name: "设计图定制方案",
        price: "¥35,000 起",
        support: "上线后 2 个月免费技术支持",
        timeline: "约 3-6 周",
        bestFor: "适合需要完整品牌表达和更强转化路径的团队。",
        points: ["4 个核心页面", "8 张 Figma 设计图", "基础设计系统", "主题定制开发", "GA4/GTM 与 Product Schema"],
        featured: true,
      },
      {
        name: "复杂业务定制",
        price: "¥50,000 起",
        support: "售后周期按范围确认，最低 3 个月",
        timeline: "按范围评估",
        bestFor: "适合 B2B、批发、询价、ERP/CRM、复杂履约业务。",
        points: ["复杂业务流程", "客户分级或询价", "第三方系统对接", "数据迁移评估", "性能与技术 SEO"],
      },
    ],
    modulesTitle: "模块加购参考",
    modulesIntro: "适合在基础方案上追加页面、追踪或动效。最终以确认范围为准。",
    modules: [
      ["首页模块", "¥3,500"],
      ["商品详情页模块", "¥3,500"],
      ["集合页模块", "¥2,500"],
      ["About 页面", "¥2,000"],
      ["Help Center", "¥2,000"],
      ["额外 SKU", "¥1,000 / 3 个"],
      ["GA4/GTM", "¥1,500"],
      ["自定义动画", "¥2,000 起"],
      ["Blog 模块", "¥1,500"],
    ],
    excludedTitle: "费用不包含",
    excludedIntro: "这些通常属于第三方费用或业务系统费用，需要单独支付或按实际范围评估。",
    excluded: ["Shopify 官方订阅", "第三方 App 费用", "域名和邮箱", "支付通道手续费", "第三方系统 API 费用", "广告投放费用"],
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
    primaryCta: "Get Free Store Diagnosis",
    secondaryCta: "View Add-On Modules",
    plansTitle: "Three Pricing Tiers",
    plansIntro: "Post-launch support starts at 2 months. More complex builds receive longer technical support after delivery.",
    plans: [
      {
        name: "Module-Based Build",
        price: "from ¥20,000",
        support: "2 months of post-launch technical support",
        timeline: "2-4 weeks",
        bestFor: "For teams with clear references or defined module needs.",
        points: ["Reference site breakdown", "Shopify 2.0 modular build", "Basic visual adaptation", "Responsive layout", "Basic SEO"],
      },
      {
        name: "Custom Design Build",
        price: "from ¥35,000",
        support: "2 months of post-launch technical support",
        timeline: "3-6 weeks",
        bestFor: "For teams that need stronger brand expression and conversion structure.",
        points: ["4 core pages", "8 Figma screens", "Basic design system", "Custom theme development", "GA4/GTM and Product Schema"],
        featured: true,
      },
      {
        name: "Complex Business",
        price: "from ¥50,000",
        support: "Support scoped by project, minimum 3 months",
        timeline: "Scoped timeline",
        bestFor: "For B2B, wholesale, quote flows, ERP/CRM, or complex fulfillment.",
        points: ["Complex business flow", "Customer tiers or quote flow", "Third-party integrations", "Data migration assessment", "Performance and technical SEO"],
      },
    ],
    modulesTitle: "Add-On Module Reference",
    modulesIntro: "Useful when extending a base build with extra pages, analytics, or animation. Final scope is confirmed before quote.",
    modules: [
      ["Homepage module", "¥3,500"],
      ["Product page module", "¥3,500"],
      ["Collection page module", "¥2,500"],
      ["About page", "¥2,000"],
      ["Help Center", "¥2,000"],
      ["Extra SKUs", "¥1,000 / 3 items"],
      ["GA4/GTM", "¥1,500"],
      ["Custom animation", "from ¥2,000"],
      ["Blog module", "¥1,500"],
    ],
    excludedTitle: "Not Included",
    excludedIntro: "These are usually third-party or business system costs, paid separately or scoped case by case.",
    excluded: ["Shopify subscription", "Third-party app fees", "Domain and email", "Payment provider fees", "Third-party API fees", "Advertising spend"],
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

export function PricingPage() {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#101010] to-[#050505]" />
          <div className="absolute inset-x-0 top-28 mx-auto h-80 max-w-5xl rounded-full bg-primary/10 blur-3xl" />
          <div className="relative mx-auto max-w-[1200px] text-center">
            <p className="mb-5 inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              {text.eyebrow}
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[1.04] tracking-normal">{text.title}</h1>
            <p className="mx-auto mt-6 max-w-4xl text-xl font-semibold leading-[1.45] text-foreground/90 md:text-2xl">{text.subtitle}</p>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-[1.7] text-muted-foreground md:text-lg">{text.description}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/diagnosis"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]"
              >
                {text.primaryCta}
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#modules"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
              >
                {text.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 text-center">
              <CircleDollarSign className="mx-auto mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.plansTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.plansIntro}</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {text.plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`flex min-h-[500px] flex-col rounded-2xl border p-6 ${
                    plan.featured ? "border-primary/35 bg-white/[0.08] shadow-[0_0_70px_rgba(119,252,117,0.08)]" : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold text-primary">{plan.price}</p>
                    <h3 className="mt-3 text-2xl font-bold tracking-normal">{plan.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{plan.bestFor}</p>
                  </div>
                  <div className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm">
                    <p className="flex items-center gap-3 text-foreground/85">
                      <Clock3 className="size-4 shrink-0 text-primary" />
                      {plan.timeline}
                    </p>
                    <p className="flex items-center gap-3 text-foreground/85">
                      <ShieldCheck className="size-4 shrink-0 text-primary" />
                      {plan.support}
                    </p>
                  </div>
                  <div className="mt-6 space-y-3">
                    {plan.points.map((point) => (
                      <p key={point} className="flex items-center gap-3 text-sm text-foreground/85">
                        <CheckCircle2 className="size-4 shrink-0 text-primary" />
                        {point}
                      </p>
                    ))}
                  </div>
                  <a
                    href="/diagnosis"
                    className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/10 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-white/15"
                  >
                    {text.primaryCta}
                    <ArrowUpRight className="size-4" />
                  </a>
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

        <section id="modules" className="bg-background px-6 py-16 md:px-10 md:py-24 scroll-mt-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Plus className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.modulesTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.modulesIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {text.modules.map(([name, price]) => (
                <div key={name} className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                  <span className="text-sm font-medium text-foreground">{name}</span>
                  <span className="shrink-0 text-sm font-bold text-primary">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <FileWarning className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.excludedTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.excludedIntro}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {text.excluded.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <Layers3 className="mb-4 size-5 text-primary" />
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-10 flex items-center gap-3">
              <HelpCircle className="size-7 text-primary" />
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
