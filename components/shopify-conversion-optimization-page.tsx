"use client"

import {
  ArrowUpRight,
  BadgePercent,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Gauge,
  HelpCircle,
  LineChart,
  MessageSquareText,
  MousePointerClick,
  PackageCheck,
  Route,
  ShieldCheck,
  Smartphone,
  Target,
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"
import { useLanguage } from "@/components/language-provider"

const copy = {
  zh: {
    eyebrow: "SHOPIFY CRO",
    title: "Shopify 转化率优化服务",
    subtitle: "针对广告点击不成交、商品页说服力弱、加购和结账流失的问题，拆解并优化 Shopify 成交路径。",
    description:
      "转化低不一定只是页面不好看。问题可能在首屏信息、商品页结构、价格呈现、信任内容、物流售后、移动端体验，也可能是数据没有正确记录。我们先定位断点，再按优先级优化。",
    primaryCta: "免费诊断我的转化问题",
    secondaryCta: "查看优化范围",
    proof: ["商品页转化结构", "加购与结账路径", "数据指标复盘"],
    fitTitle: "适合这些情况",
    fitItems: [
      "广告有点击，但订单少、获客成本高",
      "商品页浏览量不低，但加购率明显偏低",
      "用户加购后，在购物车或结账阶段流失",
      "页面看起来不错，但卖点、信任和风险说明不够清楚",
      "不知道问题在页面、价格、物流、信任还是数据追踪",
    ],
    scopeTitle: "优化范围",
    scopeIntro: "优先处理会直接影响购买决策的位置，再进入细节迭代。",
    scopes: [
      {
        title: "首页首屏信息",
        text: "检查用户进站后是否能快速理解品牌、产品、核心卖点和下一步动作。",
        icon: Target,
      },
      {
        title: "商品页结构",
        text: "重排标题、卖点、图片、规格、评价、FAQ、物流和售后说明。",
        icon: PackageCheck,
      },
      {
        title: "信任内容",
        text: "补足评价、媒体背书、质保、支付安全、退换货和品牌可信度信息。",
        icon: ShieldCheck,
      },
      {
        title: "价格与优惠呈现",
        text: "优化优惠、组合、免邮门槛、价格锚点和限时信息的表达方式。",
        icon: BadgePercent,
      },
      {
        title: "购物车 / 结账路径",
        text: "减少不必要阻力，检查运费、支付、折扣码和结账前信任提示。",
        icon: CreditCard,
      },
      {
        title: "移动端体验",
        text: "检查首屏高度、按钮位置、图片加载、长文案、粘性购买按钮和交互阻力。",
        icon: Smartphone,
      },
      {
        title: "FAQ / 售后 / 物流",
        text: "把用户下单前最担心的问题前置，降低购买风险感。",
        icon: MessageSquareText,
      },
      {
        title: "数据追踪与指标",
        text: "用 GA4/GTM、加购率、结账率和购买率判断优化是否有效。",
        icon: LineChart,
      },
    ],
    metricsTitle: "优先看的转化指标",
    metricsIntro: "不先定义指标，优化容易变成主观改页面。",
    metrics: [
      ["Product view rate", "进入商品页的比例"],
      ["Add-to-cart rate", "商品页到加购的比例"],
      ["Checkout rate", "加购到开始结账的比例"],
      ["Purchase rate", "结账到购买的比例"],
      ["AOV", "平均订单金额"],
      ["Paid traffic CVR", "广告流量转化率"],
    ],
    processTitle: "优化流程",
    process: [
      "诊断当前页面、流量来源、商品结构和关键数据",
      "判断转化断点在首屏、商品页、购物车、结账还是信任内容",
      "按影响程度和开发成本制定优化优先级",
      "修改页面结构、模块、文案、信任内容和关键交互",
      "用数据追踪结果，决定继续迭代还是进入下一项优化",
    ],
    faqTitle: "常见问题",
    faqs: [
      {
        q: "Shopify 转化率多少算正常？",
        a: "没有固定标准。不同品类、价格、市场、流量来源差异很大。比起套行业平均值，更重要的是分开看商品页加购率、结账率、购买率和不同渠道的转化表现。",
      },
      {
        q: "转化低一定是页面问题吗？",
        a: "不一定。产品价格、广告人群、物流时效、支付方式、品牌信任、评价数量和数据追踪都会影响转化。CRO 的第一步是定位问题，不是直接改页面。",
      },
      {
        q: "商品页应该怎么优化？",
        a: "商品页需要快速回答用户为什么买、适合谁、怎么用、是否可信、发货多久、退换怎么处理。结构上要把卖点、图片、评价、FAQ 和购买按钮组织成清晰路径。",
      },
      {
        q: "CRO 和重新建站有什么区别？",
        a: "CRO 是在现有站点基础上定位并优化转化断点；重新建站适合结构、品牌、技术或主题基础已经不适合继续迭代的情况。两者要根据现状判断。",
      },
      {
        q: "优化需要多久看到效果？",
        a: "轻量页面和文案优化可能 1-2 周就能观察方向；涉及页面重构、追踪配置或广告人群变化，需要更长观察周期。前提是流量量级足够判断。",
      },
      {
        q: "是否需要先配置 GA4/GTM？",
        a: "建议先配置基础追踪。没有数据时只能靠经验判断，容易改错重点。至少应能看到商品浏览、加购、结账和购买事件。",
      },
    ],
    ctaTitle: "先判断转化断点，再决定怎么改。",
    ctaText: "提交你的店铺链接、主要流量来源、转化问题和当前数据，我们先判断最值得优化的位置。",
    relatedTitle: "相关 Shopify 服务",
    relatedIntro: "转化优化通常需要结合站点结构和报价范围判断，先确认是局部优化还是需要重建关键页面。",
    relatedLinks: [
      {
        title: "Shopify 独立站建设服务",
        text: "查看从站点结构、商品页、集合页到上线检查的完整建站服务范围。",
        href: "/services/shopify-website-build",
        cta: "查看建站服务",
      },
      {
        title: "Shopify 建站价格",
        text: "对比三档建站方案、模块加购和不包含费用，判断优化或重建的预算边界。",
        href: "/pricing",
        cta: "查看价格页",
      },
    ],
  },
  en: {
    eyebrow: "SHOPIFY CRO",
    title: "Shopify Conversion Optimization Service",
    subtitle: "Diagnose and improve the Shopify sales path when paid clicks do not turn into orders, product pages underperform, or cart and checkout drop-offs are high.",
    description:
      "Low conversion is not always a visual design problem. The issue may be hero messaging, product page structure, pricing, trust content, shipping, mobile UX, or inaccurate tracking. We identify the bottleneck first, then optimize by priority.",
    primaryCta: "Diagnose My Conversion Issue",
    secondaryCta: "View Optimization Scope",
    proof: ["Product page conversion structure", "Cart and checkout path", "Data-based review"],
    fitTitle: "Best fit",
    fitItems: [
      "Paid ads get clicks, but orders are low and acquisition cost is high",
      "Product page traffic exists, but add-to-cart rate is weak",
      "Users add to cart, then drop off in cart or checkout",
      "The site looks fine, but value proposition, trust, and risk handling are unclear",
      "You do not know whether the issue is page, price, logistics, trust, or tracking",
    ],
    scopeTitle: "Optimization scope",
    scopeIntro: "Start with parts that directly affect purchase decisions, then move into finer iteration.",
    scopes: [
      {
        title: "Homepage first viewport",
        text: "Check whether visitors quickly understand brand, product, core value, and next action.",
        icon: Target,
      },
      {
        title: "Product page structure",
        text: "Rework title, benefits, media, specs, reviews, FAQ, shipping, and after-sales content.",
        icon: PackageCheck,
      },
      {
        title: "Trust content",
        text: "Strengthen reviews, proof, warranty, payment safety, returns, and brand credibility.",
        icon: ShieldCheck,
      },
      {
        title: "Pricing and offers",
        text: "Improve offers, bundles, free-shipping thresholds, price anchors, and urgency messaging.",
        icon: BadgePercent,
      },
      {
        title: "Cart and checkout path",
        text: "Reduce friction around shipping, payment, discounts, and pre-checkout reassurance.",
        icon: CreditCard,
      },
      {
        title: "Mobile experience",
        text: "Review first viewport height, button placement, image loading, long copy, sticky buy buttons, and interaction friction.",
        icon: Smartphone,
      },
      {
        title: "FAQ, after-sales, logistics",
        text: "Move key pre-purchase concerns forward and reduce perceived buying risk.",
        icon: MessageSquareText,
      },
      {
        title: "Analytics and metrics",
        text: "Use GA4/GTM, add-to-cart rate, checkout rate, and purchase rate to judge impact.",
        icon: LineChart,
      },
    ],
    metricsTitle: "Priority conversion metrics",
    metricsIntro: "Without metrics, optimization becomes subjective page editing.",
    metrics: [
      ["Product view rate", "Share of visitors reaching product pages"],
      ["Add-to-cart rate", "Product page to cart"],
      ["Checkout rate", "Cart to checkout"],
      ["Purchase rate", "Checkout to purchase"],
      ["AOV", "Average order value"],
      ["Paid traffic CVR", "Paid traffic conversion rate"],
    ],
    processTitle: "Optimization process",
    process: [
      "Diagnose current pages, traffic sources, product structure, and key data",
      "Find whether the bottleneck is hero, product page, cart, checkout, or trust content",
      "Prioritize fixes by likely impact and implementation cost",
      "Adjust page structure, modules, copy, trust content, and key interactions",
      "Review tracking data and decide whether to continue iteration or move to the next item",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "What is a normal Shopify conversion rate?",
        a: "There is no fixed standard. Category, price, market, and traffic source vary widely. It is more useful to separate product page add-to-cart rate, checkout rate, purchase rate, and channel-level conversion.",
      },
      {
        q: "Is low conversion always a page problem?",
        a: "No. Product price, ad audience, shipping speed, payment methods, brand trust, review volume, and tracking accuracy all affect conversion. CRO starts by diagnosing the issue, not randomly changing pages.",
      },
      {
        q: "How should a product page be optimized?",
        a: "A product page should quickly answer why to buy, who it fits, how it works, whether it is trustworthy, shipping timing, and return handling. Benefits, media, reviews, FAQ, and buy actions should form a clear path.",
      },
      {
        q: "What is the difference between CRO and rebuilding the site?",
        a: "CRO improves bottlenecks on the existing site. Rebuilding is better when structure, brand, technology, or theme foundations are no longer suitable for iteration. The right choice depends on the current state.",
      },
      {
        q: "How long does it take to see results?",
        a: "Light page and copy changes may show direction within 1-2 weeks. Page rebuilds, tracking fixes, or ad audience changes need a longer observation window. Enough traffic volume is required.",
      },
      {
        q: "Do we need GA4/GTM first?",
        a: "Basic tracking is strongly recommended. Without data, decisions rely too much on opinion. At minimum, product view, add-to-cart, checkout, and purchase events should be visible.",
      },
    ],
    ctaTitle: "Find the conversion bottleneck before changing the site.",
    ctaText: "Send your store URL, main traffic source, conversion issue, and current data. We will identify the highest-priority area to improve first.",
    relatedTitle: "Related Shopify Services",
    relatedIntro: "Conversion optimization is often evaluated with site structure and budget scope to decide whether local optimization or page rebuilds make sense.",
    relatedLinks: [
      {
        title: "Shopify Website Build Service",
        text: "See the full build scope from site structure, product pages, collections, and launch QA.",
        href: "/services/shopify-website-build",
        cta: "View Build Service",
      },
      {
        title: "Shopify Website Pricing",
        text: "Compare build tiers, add-on modules, and excluded fees to judge the budget boundary for optimization or rebuilds.",
        href: "/pricing",
        cta: "View Pricing",
      },
    ],
  },
}

const conversionOptimizationStructuredData = {
  breadcrumbs: [
    { name: "首页", url: "https://whaleleap.studio/" },
    { name: "服务", url: "https://whaleleap.studio/#services" },
    { name: "Shopify 转化率优化服务", url: "https://whaleleap.studio/services/shopify-conversion-optimization" },
  ],
  service: {
    name: "Shopify 转化率优化服务",
    description: "诊断并优化 Shopify 首页、商品页、信任内容、价格呈现、购物车、结账路径、移动端体验和数据指标。",
    url: "https://whaleleap.studio/services/shopify-conversion-optimization",
  },
}

export function ShopifyConversionOptimizationPage() {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData
        breadcrumbs={conversionOptimizationStructuredData.breadcrumbs}
        faqItems={copy.zh.faqs}
        service={conversionOptimizationStructuredData.service}
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
                  <MousePointerClick className="size-5" />
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
              <Route className="mb-5 size-8 text-primary" />
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
              <Gauge className="mb-5 size-8 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-normal">{text.metricsTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.metricsIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {text.metrics.map(([name, description]) => (
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
              <ClipboardList className="mb-5 size-8 text-primary" />
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
