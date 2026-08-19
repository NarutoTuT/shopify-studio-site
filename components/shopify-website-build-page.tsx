"use client"

import { ArrowUpRight, CheckCircle2, Clock3, Code2, FileText, Gauge, Layers3, Search, ShieldCheck, ShoppingBag, Smartphone } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"
import { useLanguage } from "@/components/language-provider"

const copy = {
  zh: {
    eyebrow: "SHOPIFY ENGINEERING",
    title: "Shopify Engineering",
    subtitle: "为跨境品牌打造更快、更稳定、更可维护的 Shopify 独立站基础。",
    description:
      "这不是简单建站。WhaleLeap 帮助海外华人跨境品牌建立能够承接流量、支持优化和持续增长的 Shopify 技术基础。",
    primaryCta: "免费 Shopify 店铺诊断",
    secondaryCta: "查看工作范围",
    proof: ["Shopify Theme Development", "Liquid Development", "Performance Optimization"],
    problemTitle: "常见技术增长阻塞",
    problemIntro: "很多 Shopify 店铺不是缺少页面，而是技术基础开始限制品牌表达、体验和后续优化效率。",
    problems: [
      { title: "模板限制品牌表达", text: "主题结构无法承载品牌故事、产品卖点和活动页面需求。", icon: Layers3 },
      { title: "网站速度影响体验", text: "页面加载慢、图片和脚本过重，会直接影响移动端耐心和转化。", icon: Gauge },
      { title: "App 太多导致性能下降", text: "插件堆叠让页面变慢，也让后续排查和维护成本上升。", icon: ShoppingBag },
      { title: "Theme 修改越来越混乱", text: "临时改动不断叠加，导致代码、Section 和模板难以继续迭代。", icon: Code2 },
      { title: "移动端体验不足", text: "核心信息、CTA、商品模块和购买路径在手机端不够清晰。", icon: Smartphone },
      { title: "后续维护困难", text: "缺少清晰模块和交付边界，每次优化都变成重新修补。", icon: ShieldCheck },
    ],
    solutionTitle: "Shopify Engineering 方法",
    solutionIntro: "我们把 Shopify 技术建设当作增长基础，而不是一次性的页面开发。",
    solutions: [
      "Shopify Theme Development",
      "Liquid Development",
      "Custom Sections",
      "Performance Optimization",
      "Technical SEO",
      "Launch QA",
    ],
    workTitle: "What We Work On",
    workIntro: "适合新站建设，也适合已有 Shopify 店铺的技术升级、重建和性能清理。",
    workItems: ["Shopify 新站建设", "Existing Store Rebuild", "Theme customization", "Custom PDP sections", "Landing pages", "Performance cleanup", "Technical improvements"],
    deliverablesTitle: "Deliverables",
    deliverablesIntro: "交付重点是让 Shopify 店铺更容易上线、迭代、维护和继续做转化优化。",
    deliverables: [
      "Shopify theme implementation",
      "Custom sections",
      "Page structure optimization",
      "Mobile QA",
      "Performance improvements",
      "Launch checklist",
    ],
    processTitle: "Process",
    process: ["Review", "Scope", "Build", "QA", "Launch"],
    fitTitle: "Who It Is For",
    fitIntro: "如果你需要的不只是上线一个网站，而是建立可持续优化的 Shopify 技术基础，这个服务更合适。",
    fitItems: ["海外华人跨境品牌", "Shopify 创业者", "Amazon 转独立站品牌", "需要技术升级的 Shopify 店铺"],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Shopify Engineering 和普通 Shopify 建站有什么区别？",
        a: "普通建站更关注页面是否上线。Shopify Engineering 更关注主题结构、性能、移动端体验、可维护性和后续优化空间，目标是建立能承接流量和持续迭代的技术基础。",
      },
      {
        q: "是否适合已有 Shopify 店铺改版？",
        a: "适合。如果现有主题限制增长、页面改动混乱、App 过多或移动端体验不稳定，可以先评估是局部重构、复制主题开发，还是整体 rebuild。",
      },
      {
        q: "是否包含 Shopify 主题定制和 Liquid 开发？",
        a: "包含。Shopify Theme Development、Liquid 模板开发、Custom Sections、PDP 模块和活动页模块都属于 Shopify Engineering 的工作范围。",
      },
      {
        q: "是否包含性能优化？",
        a: "包含基础性能优化与风险排查，例如图片、脚本、Section 结构、App 堆叠和移动端体验。更复杂的性能专项会根据站点情况单独确认范围。",
      },
      {
        q: "是否包含 SEO？",
        a: "包含 Technical SEO 基础，例如页面层级、标题描述、内部链接、结构化内容和上线检查。长期内容 SEO 和外链增长适合作为后续阶段推进。",
      },
      {
        q: "下一步怎么开始？",
        a: "建议先提交免费 Shopify 店铺诊断。我们会先判断当前店铺的技术基础、页面体验和后续优化优先级，再确认具体实施范围。",
      },
    ],
    ctaTitle: "先判断 Shopify 技术基础是否支持增长。",
    ctaText: "提交店铺链接、产品类型和当前问题，我们先判断是新建、重建、主题定制还是性能清理更适合。",
  },
  en: {
    eyebrow: "SHOPIFY ENGINEERING",
    title: "Shopify Engineering",
    subtitle: "Build a faster, more stable, and maintainable Shopify foundation for global ecommerce brands.",
    description:
      "This is not just website building. WhaleLeap helps Chinese-founded global brands create a Shopify foundation that can support traffic, optimization, and long-term growth.",
    primaryCta: "Get a Free Shopify Review",
    secondaryCta: "View Scope",
    proof: ["Shopify Theme Development", "Liquid Development", "Performance Optimization"],
    problemTitle: "Common technical growth blockers",
    problemIntro: "Many Shopify stores do not need more pages first. They need a technical foundation that no longer blocks brand expression, UX, and future optimization.",
    problems: [
      { title: "Templates limit brand expression", text: "Theme structure cannot support brand story, product value, or campaign needs.", icon: Layers3 },
      { title: "Speed hurts experience", text: "Slow loading, heavy images, and scripts reduce patience and conversion on mobile.", icon: Gauge },
      { title: "Too many apps hurt performance", text: "App stacking slows pages and increases future troubleshooting cost.", icon: ShoppingBag },
      { title: "Theme edits become messy", text: "Temporary fixes stack up until sections, templates, and code become hard to iterate.", icon: Code2 },
      { title: "Mobile UX is weak", text: "Key information, CTAs, product modules, and purchase paths are unclear on small screens.", icon: Smartphone },
      { title: "Maintenance gets difficult", text: "Without clear modules and delivery boundaries, every optimization becomes another patch.", icon: ShieldCheck },
    ],
    solutionTitle: "Shopify Engineering Method",
    solutionIntro: "We treat Shopify engineering as a growth foundation, not a one-time page build.",
    solutions: [
      "Shopify Theme Development",
      "Liquid Development",
      "Custom Sections",
      "Performance Optimization",
      "Technical SEO",
      "Launch QA",
    ],
    workTitle: "What We Work On",
    workIntro: "For new Shopify builds, existing store rebuilds, technical upgrades, and performance cleanup.",
    workItems: ["New Shopify build", "Existing Store Rebuild", "Theme customization", "Custom PDP sections", "Landing pages", "Performance cleanup", "Technical improvements"],
    deliverablesTitle: "Deliverables",
    deliverablesIntro: "The goal is to make the Shopify store easier to launch, iterate, maintain, and optimize.",
    deliverables: [
      "Shopify theme implementation",
      "Custom sections",
      "Page structure optimization",
      "Mobile QA",
      "Performance improvements",
      "Launch checklist",
    ],
    processTitle: "Process",
    process: ["Review", "Scope", "Build", "QA", "Launch"],
    fitTitle: "Who It Is For",
    fitIntro: "Use this when you need more than a launch. You need a Shopify foundation that can keep improving.",
    fitItems: ["Chinese-founded global brands", "Shopify founders", "Amazon-to-Shopify brands", "Shopify stores needing technical upgrades"],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "How is Shopify Engineering different from a normal Shopify build?",
        a: "A normal build focuses on launching pages. Shopify Engineering focuses on theme structure, performance, mobile UX, maintainability, and future optimization space.",
      },
      {
        q: "Is this suitable for existing Shopify stores?",
        a: "Yes. If your theme limits growth, edits are messy, apps are stacked, or mobile UX is unstable, we first judge whether local refactoring, theme duplication, or a full rebuild is the better path.",
      },
      {
        q: "Does it include theme customization and Liquid development?",
        a: "Yes. Shopify Theme Development, Liquid templates, Custom Sections, PDP modules, and campaign page modules are part of Shopify Engineering.",
      },
      {
        q: "Does it include performance optimization?",
        a: "It includes foundational performance review and cleanup around images, scripts, section structure, app stacking, and mobile experience. Deeper performance work is scoped after review.",
      },
      {
        q: "Does it include SEO?",
        a: "It includes Technical SEO basics such as page hierarchy, titles, descriptions, internal links, structured content, and launch checks. Long-term content SEO is a later growth phase.",
      },
      {
        q: "How do we start?",
        a: "Start with a Free Shopify Review. We first assess technical foundation, page experience, and optimization priorities, then define the implementation scope.",
      },
    ],
    ctaTitle: "Find out whether your Shopify foundation can support growth.",
    ctaText: "Submit your store URL, product type, and current blockers. We will judge whether new build, rebuild, theme customization, or performance cleanup fits best.",
  },
}

const websiteBuildStructuredData = {
  breadcrumbs: [
    { name: "首页", url: "https://whaleleap.studio/" },
    { name: "服务", url: "https://whaleleap.studio/#services" },
    { name: "Shopify Engineering", url: "https://whaleleap.studio/services/shopify-website-build" },
  ],
  service: {
    name: "Shopify Engineering",
    description: "为海外华人跨境品牌提供 Shopify 技术建设与增长基础优化服务，覆盖主题开发、Liquid 开发、Custom Sections、性能优化、Technical SEO 和 Launch QA。",
    url: "https://whaleleap.studio/services/shopify-website-build",
  },
}

export function ShopifyWebsiteBuildPage() {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData breadcrumbs={websiteBuildStructuredData.breadcrumbs} faqItems={copy.zh.faqs} service={websiteBuildStructuredData.service} />
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#101010] to-[#050505]" />
          <div className="absolute inset-x-0 top-28 mx-auto h-80 max-w-5xl rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{text.eyebrow}</p>
              <h1 className="max-w-5xl text-[clamp(2.45rem,5vw,5rem)] font-bold leading-[1.04] tracking-normal">{text.title}</h1>
              <p className="mt-6 max-w-3xl text-xl font-semibold leading-[1.45] text-foreground/90 md:text-2xl">{text.subtitle}</p>
              <p className="mt-5 max-w-3xl text-base leading-[1.7] text-muted-foreground md:text-lg">{text.description}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/diagnosis" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]">
                  {text.primaryCta}
                  <ArrowUpRight className="size-4" />
                </a>
                <a href="#work" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-semibold text-foreground transition-colors hover:bg-white/5">
                  {text.secondaryCta}
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur md:p-7">
              <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Code2 className="size-6" />
              </div>
              <h2 className="text-xl font-bold tracking-normal">Growth-ready Shopify foundation</h2>
              <div className="mt-5 grid gap-3">
                {text.proof.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.problemTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.problemIntro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {text.problems.map((item) => {
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
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Code2 className="mb-5 size-7 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.solutionTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.solutionIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {text.solutions.map((item) => (
                <p key={item} className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 border-y border-white/10 bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.workTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.workIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {text.workItems.map((item) => (
                <p key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-foreground">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <FileText className="mb-5 size-7 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.deliverablesTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.deliverablesIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {text.deliverables.map((item) => (
                <p key={item} className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Clock3 className="mb-5 size-7 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.processTitle}</h2>
            </div>
            <div className="grid gap-4">
              {text.process.map((item, index) => (
                <div key={item} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-[auto_1fr] sm:items-center">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span>
                  <p className="text-base leading-relaxed text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <ShieldCheck className="mb-5 size-7 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.fitTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.fitIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {text.fitItems.map((item) => (
                <p key={item} className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-10 flex items-center gap-3">
              <Search className="size-7 text-primary" />
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

        <section className="bg-background px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1100px] rounded-[1.5rem] border border-primary/20 bg-primary/10 p-7 text-center md:p-12">
            <Clock3 className="mx-auto mb-5 size-8 text-primary" />
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.ctaText}</p>
            <a href="/diagnosis" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]">
              {text.primaryCta}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
