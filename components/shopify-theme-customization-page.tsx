"use client"

import {
  ArrowUpRight,
  Blocks,
  CheckCircle2,
  Code2,
  FileCode2,
  Gauge,
  HelpCircle,
  LayoutGrid,
  MonitorSmartphone,
  PackageCheck,
  Paintbrush,
  Puzzle,
  ScanSearch,
  Settings2,
  ShieldCheck,
  Smartphone,
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"
import { useLanguage } from "@/components/language-provider"

const copy = {
  zh: {
    eyebrow: "SHOPIFY THEME CUSTOMIZATION",
    title: "Shopify 主题定制与 Liquid 开发",
    subtitle: "基于 Shopify 2.0、Liquid、HTML/CSS/JS 定制主题模块、页面结构和移动端体验。",
    description:
      "当现有主题限制太多、App 堆叠影响体验、或者 Figma 设计稿需要落地到 Shopify 时，需要的不只是改样式，而是可维护的 section、block、模板和交互逻辑。",
    primaryCta: "免费诊断我的主题需求",
    secondaryCta: "查看定制范围",
    proof: ["Shopify 2.0 section / block", "Liquid 模板开发", "Figma 到 Shopify 落地"],
    fitTitle: "适合这些情况",
    fitItems: [
      "已有 Shopify 店铺，但主题限制多、模块不好改",
      "需要新增首页、商品页、集合页或活动页自定义模块",
      "已有 Figma 设计稿，需要开发到 Shopify 主题里",
      "第三方 App 装太多，导致页面慢、样式乱或维护困难",
      "需要在不影响现有商品和订单的情况下迭代主题体验",
    ],
    scopeTitle: "服务范围",
    scopeIntro: "重点是让主题可维护、可复用、可继续迭代，而不是一次性写死页面。",
    scopes: [
      {
        title: "Shopify 2.0 Section / Block",
        text: "开发可在后台配置的 section 和 block，方便后续运营调整内容。",
        icon: Blocks,
      },
      {
        title: "Liquid 模板开发",
        text: "修改或新增 product、collection、page、cart 等核心模板逻辑。",
        icon: FileCode2,
      },
      {
        title: "商品页模块",
        text: "定制卖点、规格、评价、FAQ、搭配推荐、信任信息和购买区域。",
        icon: PackageCheck,
      },
      {
        title: "集合页展示",
        text: "优化产品列表、筛选、排序、标签、活动入口和移动端浏览体验。",
        icon: LayoutGrid,
      },
      {
        title: "首页活动模块",
        text: "开发品牌首屏、产品故事、促销、内容区和营销活动模块。",
        icon: Paintbrush,
      },
      {
        title: "自定义交互",
        text: "实现轻量动画、弹窗、切换、粘性按钮、选项联动和交互状态。",
        icon: Settings2,
      },
      {
        title: "移动端适配",
        text: "处理移动端布局、按钮触达、文字换行、图片比例和购买路径。",
        icon: Smartphone,
      },
      {
        title: "速度与可维护性",
        text: "减少不必要 App 依赖，控制脚本、样式和模块复杂度。",
        icon: Gauge,
      },
    ],
    deliverablesTitle: "常见交付项",
    deliverablesIntro: "适合对现有主题做局部升级，也适合把设计稿拆成 Shopify 可配置模块。",
    deliverables: [
      ["Custom section", "可配置自定义模块"],
      ["Product template", "商品页模板修改"],
      ["Collection template", "集合页模板修改"],
      ["Landing page", "活动页或专题页"],
      ["Theme settings", "后台配置项"],
      ["Responsive QA", "移动端适配检查"],
    ],
    processTitle: "交付流程",
    process: [
      "诊断当前主题、App、页面结构和需要修改的位置",
      "确认模块、模板、交互和移动端适配范围",
      "开发 Liquid、section、block、CSS/JS 和后台配置项",
      "测试桌面端、移动端、主流浏览器和核心购买路径",
      "上线并交付修改说明，标记后续可复用和可维护的部分",
    ],
    faqTitle: "常见问题",
    faqs: [
      {
        q: "Shopify 主题定制和重新建站有什么区别？",
        a: "主题定制是在现有店铺和主题基础上修改模块、模板和交互；重新建站通常会重新规划整体页面结构、视觉和主题基础。现有基础还能迭代时，主题定制更轻。",
      },
      {
        q: "是否支持现有主题修改？",
        a: "支持。会先看主题结构、代码质量和 App 依赖。如果主题改动风险太高，会建议复制主题后开发，避免影响线上店铺。",
      },
      {
        q: "是否支持 Figma 转 Shopify？",
        a: "支持。我们会把 Figma 设计拆成 Shopify 可实现的 section、block、模板和响应式规则，而不是只还原静态页面。",
      },
      {
        q: "是否会影响现有订单和商品？",
        a: "正常主题修改不会影响订单和商品数据。但涉及结账、库存、App 或数据结构时，需要单独评估并在测试主题中验证。",
      },
      {
        q: "是否需要购买新主题？",
        a: "不一定。如果现有主题结构清晰，可以直接定制。如果现有主题过旧、代码混乱或限制太多，购买新主题或重构主题会更合理。",
      },
      {
        q: "定制主题会不会影响速度？",
        a: "取决于实现方式。合理的 section、CSS/JS 和图片处理不会显著拖慢速度；过多 App、重复脚本和重动画才是常见问题。",
      },
    ],
    ctaTitle: "先判断主题还能不能继续改。",
    ctaText: "提交你的店铺链接、主题名称、想改的位置和参考效果，我们先判断是局部定制、重构模块，还是重新建站更合适。",
    relatedTitle: "相关 Shopify 服务",
    relatedIntro: "主题定制通常会和建站范围、费用预算一起判断，先确认现有主题是否值得继续迭代。",
    relatedLinks: [
      {
        title: "Shopify 独立站建设服务",
        text: "查看从 0 建站、页面结构、主题开发、支付物流和上线检查的完整服务范围。",
        href: "/services/shopify-website-build",
        cta: "查看建站服务",
      },
      {
        title: "Shopify 建站费用说明",
        text: "理解 ¥20,000 起、¥35,000 起、¥50,000 起三档报价和影响费用的变量。",
        href: "/learn/shopify-website-cost",
        cta: "查看费用说明",
      },
    ],
  },
  en: {
    eyebrow: "SHOPIFY THEME CUSTOMIZATION",
    title: "Shopify Theme Customization and Liquid Development",
    subtitle: "Customize Shopify 2.0 theme modules, page structure, and mobile experience with Liquid, HTML/CSS, and JavaScript.",
    description:
      "When the current theme is too restrictive, app stacking hurts UX, or Figma designs need to become Shopify pages, the work is not just styling. It requires maintainable sections, blocks, templates, and interaction logic.",
    primaryCta: "Diagnose My Theme Request",
    secondaryCta: "View Customization Scope",
    proof: ["Shopify 2.0 section / block", "Liquid template development", "Figma to Shopify implementation"],
    fitTitle: "Best fit",
    fitItems: [
      "Existing Shopify stores where the theme is hard to customize",
      "Stores that need custom modules for homepage, product pages, collections, or campaigns",
      "Teams with Figma designs that need to be implemented in Shopify",
      "Stores with too many apps causing slow pages, messy styles, or maintenance issues",
      "Teams that need theme improvements without affecting existing products and orders",
    ],
    scopeTitle: "Scope of work",
    scopeIntro: "The priority is a theme that stays maintainable, reusable, and ready for future iteration.",
    scopes: [
      {
        title: "Shopify 2.0 Section / Block",
        text: "Build configurable sections and blocks so content can be adjusted in the Shopify editor.",
        icon: Blocks,
      },
      {
        title: "Liquid template development",
        text: "Modify or add product, collection, page, cart, and other core template logic.",
        icon: FileCode2,
      },
      {
        title: "Product page modules",
        text: "Customize benefits, specs, reviews, FAQ, recommendations, trust content, and buy areas.",
        icon: PackageCheck,
      },
      {
        title: "Collection display",
        text: "Improve product grids, filters, sorting, tags, campaign entries, and mobile browsing.",
        icon: LayoutGrid,
      },
      {
        title: "Homepage campaign modules",
        text: "Build hero, brand story, product feature, promo, content, and campaign modules.",
        icon: Paintbrush,
      },
      {
        title: "Custom interactions",
        text: "Implement lightweight animation, modals, toggles, sticky buttons, option logic, and UI states.",
        icon: Settings2,
      },
      {
        title: "Mobile adaptation",
        text: "Handle mobile layout, button reachability, text wrapping, image ratio, and purchase paths.",
        icon: Smartphone,
      },
      {
        title: "Speed and maintainability",
        text: "Reduce unnecessary app dependence and control script, style, and module complexity.",
        icon: Gauge,
      },
    ],
    deliverablesTitle: "Common deliverables",
    deliverablesIntro: "Useful for local upgrades to an existing theme, or turning designs into configurable Shopify modules.",
    deliverables: [
      ["Custom section", "Configurable custom module"],
      ["Product template", "Product page template changes"],
      ["Collection template", "Collection page template changes"],
      ["Landing page", "Campaign or editorial page"],
      ["Theme settings", "Theme editor settings"],
      ["Responsive QA", "Mobile adaptation checks"],
    ],
    processTitle: "Delivery process",
    process: [
      "Review current theme, apps, page structure, and requested changes",
      "Confirm modules, templates, interactions, and mobile adaptation scope",
      "Develop Liquid, sections, blocks, CSS/JS, and theme editor settings",
      "Test desktop, mobile, common browsers, and key purchase paths",
      "Launch and deliver notes on modified, reusable, and maintainable parts",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "What is the difference between theme customization and rebuilding?",
        a: "Theme customization modifies modules, templates, and interactions on the existing store and theme. Rebuilding usually rethinks the full page structure, visual system, and theme foundation. If the current base can still be iterated, customization is lighter.",
      },
      {
        q: "Can you modify an existing theme?",
        a: "Yes. We first check theme structure, code quality, and app dependencies. If the risk is high, we recommend developing on a duplicated theme before publishing.",
      },
      {
        q: "Do you support Figma to Shopify?",
        a: "Yes. We translate Figma designs into Shopify sections, blocks, templates, and responsive rules rather than only recreating static pages.",
      },
      {
        q: "Will this affect existing orders and products?",
        a: "Normal theme changes do not affect order or product data. Changes involving checkout, inventory, apps, or data structure need separate review and testing.",
      },
      {
        q: "Do I need to buy a new theme?",
        a: "Not always. If the existing theme is clean, it can be customized. If it is outdated, messy, or too restrictive, a new theme or rebuild may be more practical.",
      },
      {
        q: "Will customization slow down the store?",
        a: "It depends on implementation. Well-scoped sections, CSS/JS, and image handling should not slow the store significantly. Too many apps, duplicate scripts, and heavy animation are common issues.",
      },
    ],
    ctaTitle: "Find out whether the theme is still worth customizing.",
    ctaText: "Send your store URL, theme name, requested changes, and reference effect. We will judge whether local customization, module refactoring, or rebuilding is the better path.",
    relatedTitle: "Related Shopify Services",
    relatedIntro: "Theme customization is usually evaluated together with build scope and budget, starting with whether the current theme is worth iterating.",
    relatedLinks: [
      {
        title: "Shopify Website Build Service",
        text: "See the full scope for new builds, page structure, theme development, payments, logistics, and launch QA.",
        href: "/services/shopify-website-build",
        cta: "View Build Service",
      },
      {
        title: "Shopify Website Cost Guide",
        text: "Understand the ¥20,000, ¥35,000, and ¥50,000 tiers and the variables that affect project cost.",
        href: "/learn/shopify-website-cost",
        cta: "Read Cost Guide",
      },
    ],
  },
}

const themeCustomizationStructuredData = {
  breadcrumbs: [
    { name: "首页", url: "https://whaleleap.studio/" },
    { name: "服务", url: "https://whaleleap.studio/#services" },
    { name: "Shopify 主题定制与 Liquid 开发", url: "https://whaleleap.studio/services/shopify-theme-customization" },
  ],
  service: {
    name: "Shopify 主题定制与 Liquid 开发",
    description: "基于 Shopify 2.0、Liquid、HTML/CSS/JS 定制主题模块、页面结构、商品页、集合页和移动端体验。",
    url: "https://whaleleap.studio/services/shopify-theme-customization",
  },
}

export function ShopifyThemeCustomizationPage() {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData
        breadcrumbs={themeCustomizationStructuredData.breadcrumbs}
        faqItems={copy.zh.faqs}
        service={themeCustomizationStructuredData.service}
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
                  <Puzzle className="size-5" />
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

        <section id="scope" className="bg-black px-6 py-[50px] md:px-10 md:py-[100px] scroll-mt-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 max-w-3xl">
              <Code2 className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.scopeTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.scopeIntro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

        <section className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <ScanSearch className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.deliverablesTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.deliverablesIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {text.deliverables.map(([name, description]) => (
                <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-mono text-sm font-semibold text-primary">{name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <MonitorSmartphone className="mb-5 size-8 text-primary" />
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

        <section className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
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

        <section className="bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
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

        <section className="bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
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
