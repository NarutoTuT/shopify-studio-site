"use client"

import {
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Code2,
  CreditCard,
  HelpCircle,
  Layers3,
  Palette,
  PackageSearch,
  ShieldCheck,
  Truck,
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const tiers = [
  {
    name: "文档模板方案",
    price: "¥20,000 起",
    support: "上线后 2 个月免费技术支持",
    description: "适合已有参考站、页面需求清晰、希望先稳定上线验证产品的团队。",
    points: ["参考站结构拆解", "Shopify 2.0 模块化搭建", "基础移动端适配", "基础 SEO 设置"],
  },
  {
    name: "设计图定制方案",
    price: "¥35,000 起",
    support: "上线后 2 个月免费技术支持",
    description: "适合需要品牌视觉、Figma UI/UX、商品页说服力和广告承接路径的团队。",
    points: ["核心页面设计", "主题定制开发", "GA4/GTM 与 Product Schema", "转化路径优化"],
    featured: true,
  },
  {
    name: "复杂业务定制",
    price: "¥50,000 起",
    support: "售后周期按范围确认，最低 3 个月",
    description: "适合 B2B、批发询价、客户分级、ERP/CRM、复杂物流或多市场业务。",
    points: ["复杂业务流程", "第三方系统对接", "数据结构与权限设计", "性能与技术 SEO"],
  },
]

const factors = [
  {
    icon: Layers3,
    title: "页面数量与结构",
    text: "首页、商品详情页、集合页、About、Help Center、Blog 等页面越多，信息架构、模块开发和测试范围都会增加。",
  },
  {
    icon: Palette,
    title: "设计深度",
    text: "套用成熟模板和从 Figma 设计图定制开发，是两种不同交付。后者需要更完整的视觉系统、交互细节和响应式适配。",
  },
  {
    icon: PackageSearch,
    title: "SKU 与内容复杂度",
    text: "多规格、多系列、多场景卖点和大量 SKU 会影响商品页结构、筛选逻辑、内容录入和上线检查工作量。",
  },
  {
    icon: Code2,
    title: "主题定制范围",
    text: "越多自定义模块、动效、特殊布局、权限逻辑或结账前流程，开发和回归测试成本越高。",
  },
  {
    icon: Truck,
    title: "支付、物流与市场",
    text: "跨境支付、物流规则、多币种、多语言、多市场设置会影响配置复杂度，也会增加上线前的验证范围。",
  },
  {
    icon: BarChart3,
    title: "数据追踪与转化",
    text: "GA4、GTM、Pixel、Product Schema、广告事件和转化漏斗追踪，会决定后续投放和优化能否看清数据。",
  },
  {
    icon: Building2,
    title: "B2B 或系统对接",
    text: "ERP、CRM、批发价、询价、客户分级、库存同步等需求通常需要单独评估，不能只按页面报价。",
  },
]

const choices = [
  ["选 ¥20,000 起", "你已有清晰参考站，重点是上线速度、稳定性和基础销售路径。"],
  ["选 ¥35,000 起", "你需要更强品牌表达、广告承接页面、Figma 设计和更完整的转化结构。"],
  ["选 ¥50,000 起", "你有批发、询价、系统对接、多市场、复杂履约或更高的技术 SEO 要求。"],
]

const excluded = ["Shopify 官方订阅", "域名、企业邮箱和第三方 App", "支付通道手续费", "广告投放预算", "第三方 API 或系统服务费", "新增功能、活动页和长期运营维护"]

const pitfalls = [
  "只换模板不重构商品页卖点，广告流量进来后很难转化。",
  "不做 GA4/GTM 和关键事件追踪，后续投放优化只能靠猜。",
  "没有移动端细节检查，真实用户访问时容易出现按钮、表单、图片和价格信息的问题。",
  "没有明确售后边界，后期新增功能和已交付范围内修复容易混在一起。",
]

const faqs = [
  {
    q: "Shopify 建站最低多少钱？",
    a: "如果是明确参考站和基础模块化搭建，WhaleLeap Studio 当前从 ¥20,000 起。更低成本通常意味着交付范围、设计深度、测试和售后都会被压缩。",
  },
  {
    q: "¥20,000 起和 ¥35,000 起的差别是什么？",
    a: "¥20,000 起更偏文档模板和模块化上线；¥35,000 起包含更完整的 Figma UI/UX、品牌表达、核心页面定制和转化路径设计。两档售后都是 2 个月。",
  },
  {
    q: "直接买 Shopify 主题够不够？",
    a: "如果产品少、品牌要求简单、暂时不投广告，买主题可以作为起步。但如果要承接广告、做品牌信任和转化优化，通常还需要页面结构、内容和追踪体系定制。",
  },
  {
    q: "建站费用包含 Shopify 订阅和 App 吗？",
    a: "通常不包含。Shopify 套餐、域名、第三方 App、支付手续费、广告预算和第三方系统 API 费用，需要由品牌方单独支付。",
  },
  {
    q: "建站是否包含 SEO？",
    a: "基础方案包含基础 SEO 设置，例如页面标题、描述、结构化内容建议和基础技术检查。更系统的 SEO 内容矩阵、长期内容生产和外链不属于一次性建站范围。",
  },
  {
    q: "一般多久可以上线？",
    a: "基础模块化建站通常约 2-4 周；设计图定制通常约 3-6 周；复杂业务定制需要根据系统、数据和测试范围评估。",
  },
  {
    q: "Shopify 建站报价为什么不能直接统一？",
    a: "因为不同项目的页面数量、设计深度、SKU 复杂度、支付物流、多市场配置、数据追踪和第三方系统对接差异很大。只看“建一个 Shopify 站”无法判断真实交付范围，必须先确认业务路径和上线目标。",
  },
  {
    q: "Shopify 建站后还需要哪些持续费用？",
    a: "常见持续费用包括 Shopify 官方套餐、域名、企业邮箱、第三方 App、支付手续费、广告预算、内容更新、技术维护和转化优化。一次性建站费用通常不包含长期运营成本。",
  },
  {
    q: "预算有限应该先做哪些页面？",
    a: "优先做首页、商品详情页、集合页、品牌信任内容和基础帮助信息。这样能先跑通从广告或自然访问到商品理解、信任建立、加购和结账的核心路径。",
  },
  {
    q: "什么时候需要 GA4/GTM？",
    a: "只要准备投放广告、复盘转化、分析商品页表现或做再营销，就应该尽早配置 GA4/GTM。否则上线后即使有访问和订单，也很难判断流量、页面和转化问题在哪里。",
  },
  {
    q: "什么时候需要从模板升级到定制？",
    a: "当模板无法表达品牌差异、商品页说服力不足、广告落地页转化弱、页面模块不能支撑业务内容，或需要特殊交互和业务流程时，就应该考虑定制设计和主题开发。",
  },
]

const websiteCostStructuredData = {
  breadcrumbs: [
    { name: "首页", url: "https://whaleleap.studio/" },
    { name: "Shopify 建站费用说明", url: "https://whaleleap.studio/learn/shopify-website-cost" },
  ],
  page: {
    type: "Article" as const,
    name: "Shopify 建站多少钱？费用、方案与报价说明",
    description:
      "说明 Shopify 建站费用构成、¥20,000 起、¥35,000 起、¥50,000 起三档报价差异，以及 Shopify 建站通常不包含的第三方费用。",
    url: "https://whaleleap.studio/learn/shopify-website-cost",
    inLanguage: "zh-CN",
    about: ["Shopify 建站费用", "Shopify 独立站建设", "Shopify 主题定制", "跨境电商独立站"],
  },
}

export function ShopifyWebsiteCostPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData
        breadcrumbs={websiteCostStructuredData.breadcrumbs}
        page={websiteCostStructuredData.page}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="service-hero relative flex items-center overflow-hidden bg-[#020403] px-4 pb-12 pt-28 sm:px-6 md:px-10 md:pb-16 md:pt-32 lg:pb-10 lg:pt-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(119,252,117,0.08),transparent_34%),linear-gradient(145deg,#020403_0%,#07100b_48%,#020403_100%)]" />
          <div aria-hidden="true" className="absolute -inset-x-[18%] -top-[22%] h-[118%] animate-cro-signal-orbit bg-[radial-gradient(ellipse_at_68%_36%,rgba(34,211,238,0.15),transparent_28%),radial-gradient(ellipse_at_32%_68%,rgba(119,252,117,0.2),transparent_31%)] opacity-85 blur-2xl will-change-transform motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute inset-0 opacity-28 [background-image:linear-gradient(rgba(119,252,117,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(119,252,117,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
          <div aria-hidden="true" className="absolute left-[6%] top-[25%] font-mono text-base text-primary/22 animate-theme-aurora-drift motion-reduce:animate-none">TIER 01 · ¥20K</div>
          <div aria-hidden="true" className="absolute right-[7%] top-[31%] font-mono text-base text-cyan-200/22 animate-cro-signal-orbit motion-reduce:animate-none">TIER 02 · ¥35K</div>
          <div aria-hidden="true" className="absolute bottom-[15%] right-[15%] font-mono text-base text-primary/20 animate-theme-aurora-drift motion-reduce:animate-none">TIER 03 · ¥50K+</div>
          <div className="service-hero-layout relative mx-auto grid w-full max-w-[1320px] gap-10 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_0_28px_rgba(119,252,117,0.08)] backdrop-blur-sm">
              <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />
              SHOPIFY WEBSITE COST
            </p>
                <h1 className="max-w-4xl bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-[clamp(2.4rem,5vw,4.7rem)] font-bold leading-[1.04] tracking-[-0.025em] text-transparent animate-shimmer motion-reduce:animate-none">
                  Shopify 建站多少钱？
                </h1>
                <p className="mt-6 max-w-3xl text-xl font-semibold leading-[1.45] text-foreground/90 md:text-2xl">
                  通常从 ¥20,000 起，定制设计从 ¥35,000 起，复杂业务一般从 ¥50,000 起。
                </p>
            </div>
              <div className="relative rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_28%_16%,rgba(119,252,117,0.13),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.018))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_42px_100px_rgba(0,0,0,0.42),0_0_70px_rgba(119,252,117,0.08)] backdrop-blur-2xl md:p-9">
                <p className="service-hero-description text-base leading-[1.8] text-muted-foreground md:text-lg">
                  这不是单纯按页面数量报价。Shopify 建站费用取决于页面结构、设计深度、SKU 复杂度、主题开发、支付物流、数据追踪和第三方系统对接范围。
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href="/diagnosis"
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-[0_0_28px_rgba(119,252,117,0.24)] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98]"
                  >
                    诊断我的建站预算
                    <ArrowUpRight className="size-4" />
                  </a>
                  <a
                    href="#tiers"
                    className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-black/15 px-8 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    查看费用梯度
                  </a>
                </div>
            </div>
          </div>
        </section>

        <section id="tiers" className="bg-black px-6 py-[50px] md:px-10 md:py-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">Price tiers</p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">三档费用怎么理解</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                低价方案适合先上线验证；定制方案适合承接广告和品牌增长；复杂业务需要先拆清业务流程、系统边界和测试范围。
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_50%_4%,rgba(119,252,117,0.105),transparent_34%),radial-gradient(circle_at_88%_76%,rgba(34,211,238,0.065),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.065),rgba(255,255,255,0.012))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_42px_110px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:p-5 lg:p-7">
              <div aria-hidden="true" className="absolute left-[10%] top-0 h-px w-[58%] animate-shimmer bg-gradient-to-r from-transparent via-primary/65 to-transparent bg-[length:200%_100%] motion-reduce:animate-none" />
              <div className="relative grid gap-2 lg:grid-cols-3">
              {tiers.map((tier, index) => (
                <article
                  key={tier.name}
                  className={`flex min-h-[430px] flex-col rounded-[1.9rem] p-6 sm:p-7 ${
                    tier.featured ? "bg-[radial-gradient(circle_at_50%_0%,rgba(119,252,117,0.16),transparent_40%),rgba(119,252,117,0.045)] shadow-[0_0_70px_rgba(119,252,117,0.08)]" : index === 2 ? "bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.08),transparent_38%),rgba(0,0,0,0.18)]" : "bg-black/18"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-base font-semibold text-primary">{tier.price}</p>
                    <span className="font-mono text-base text-primary/55">0{index + 1}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold tracking-normal">{tier.name}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{tier.description}</p>
                  <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-black/25 px-4 py-2 text-base text-foreground/85">
                    <ShieldCheck className="size-4 text-primary" />
                    {tier.support}
                  </p>
                  <div className="mt-6 space-y-3">
                    {tier.points.map((point) => (
                      <p key={point} className="flex items-center gap-3 text-base text-foreground/85">
                        <CheckCircle2 className="size-4 shrink-0 text-primary" />
                        {point}
                      </p>
                    ))}
                  </div>
                  <a
                    href="/diagnosis"
                    className="mt-auto inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white/10 px-6 text-base font-semibold text-foreground transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    获取范围判断
                    <ArrowUpRight className="size-4" />
                  </a>
                </article>
              ))}
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <a href="/pricing" className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                <p className="text-sm font-semibold text-primary">查看完整报价表</p>
                <h3 className="mt-3 text-xl font-bold tracking-normal">Shopify 建站价格</h3>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">对比三档建站方案、模块加购和不包含费用。</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  进入价格页
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
              <a
                href="/services/shopify-website-build"
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]"
              >
                <p className="text-sm font-semibold text-primary">了解服务范围</p>
                <h3 className="mt-3 text-xl font-bold tracking-normal">Shopify 独立站建设服务</h3>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">查看页面结构、主题开发、支付物流、数据追踪和上线检查内容。</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  进入服务页
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-primary">Cost factors</p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">为什么 Shopify 建站报价会差很多</h2>
              <p className="mt-5 text-base leading-[1.8] text-muted-foreground">
                同样叫 Shopify 建站，交付可能只是模板配置，也可能包含品牌设计、前端开发、数据追踪、技术 SEO 和业务系统对接。报价差异主要来自这些变量。
              </p>
            </div>
            <div className="relative grid gap-2 overflow-hidden rounded-[2.7rem_1.45rem_3.1rem_1.8rem] border border-white/18 bg-[radial-gradient(circle_at_84%_18%,rgba(34,211,238,0.065),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_35px_90px_rgba(0,0,0,0.28)] sm:p-5 md:grid-cols-2">
              {factors.map((factor) => {
                const Icon = factor.icon

                return (
                  <article key={factor.title} className="min-h-52 rounded-[1.6rem] bg-black/18 p-6 even:bg-white/[0.025]">
                    <Icon className="mb-4 size-6 text-primary" />
                    <h3 className="text-lg font-bold tracking-normal">{factor.title}</h3>
                    <p className="mt-3 text-base leading-[1.75] text-muted-foreground">{factor.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-normal text-primary">Decision guide</p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">怎么判断自己适合哪一档</h2>
            </div>
            <div className="relative grid gap-2 overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_50%_8%,rgba(119,252,117,0.1),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.012))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_42px_100px_rgba(0,0,0,0.34)] sm:p-5 md:grid-cols-3">
              {choices.map(([title, text], index) => (
                <article key={title} className={`min-h-56 rounded-[1.7rem] p-6 ${index === 1 ? "bg-primary/[0.075]" : "bg-black/18"}`}>
                  <span className="font-mono text-base text-primary/60">0{index + 1}</span>
                  <h3 className="text-xl font-bold tracking-normal">{title}</h3>
                  <p className="mt-4 text-base leading-[1.8] text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-2">
            <div>
              <CreditCard className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-normal">哪些费用通常不包含在建站报价里</h2>
              <p className="mt-5 text-base leading-[1.8] text-muted-foreground">
                一次性建站报价主要覆盖已确认的页面、开发、配置、测试和上线支持。第三方平台费用和持续运营费用需要单独计算。
              </p>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {excluded.map((item) => (
                  <p key={item} className="flex items-center gap-3 rounded-full bg-white/[0.045] px-4 py-3 text-base text-foreground/85">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <AlertTriangle className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-normal">低价建站最容易省掉什么</h2>
              <div className="mt-8 space-y-2">
                {pitfalls.map((item) => (
                  <p key={item} className="rounded-[1.4rem] bg-white/[0.035] p-5 text-base leading-[1.8] text-muted-foreground">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-normal text-primary">FAQ</p>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">Shopify 建站费用常见问题</h2>
              </div>
              <HelpCircle className="hidden size-10 text-primary md:block" />
            </div>
            <div className="relative overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_78%_20%,rgba(34,211,238,0.07),transparent_30%),radial-gradient(circle_at_22%_72%,rgba(119,252,117,0.09),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.012))] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_42px_100px_rgba(0,0,0,0.34)] sm:px-7 sm:py-6 lg:px-10 lg:py-8">
              <Accordion type="single" collapsible className="grid gap-x-8 lg:grid-cols-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.q} value={`cost-faq-${index}`} className="border-white/10">
                    <AccordionTrigger className="min-h-[76px] gap-4 py-5 text-left text-base font-semibold leading-snug hover:no-underline data-[state=open]:text-primary [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-primary">
                      <span className="flex items-start gap-4"><span className="font-mono text-base text-primary/55">{String(index + 1).padStart(2, "0")}</span>{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-0 text-base leading-[1.8] text-muted-foreground sm:pl-10">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[3.2rem_1.5rem_3.6rem_1.8rem] border border-white/25 bg-[linear-gradient(115deg,rgba(255,255,255,0.075),rgba(255,255,255,0.015)_38%,rgba(34,211,238,0.045)_72%,rgba(119,252,117,0.075))] p-8 text-center shadow-[inset_0_2px_0_rgba(255,255,255,0.22),0_45px_110px_rgba(0,0,0,0.45),0_0_80px_rgba(119,252,117,0.08)] backdrop-blur-3xl md:p-12">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">不确定预算应该放在哪一档？</h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-[1.8] text-muted-foreground md:text-lg">
              把产品品类、参考站、SKU 数量、上线时间和当前问题发来，我们先判断是文档模板方案、设计图定制方案，还是复杂业务定制。
            </p>
            <a
              href="/diagnosis"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]"
            >
              免费诊断 Shopify 建站范围
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
