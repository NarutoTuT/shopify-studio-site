"use client"

import { useEffect, useRef, useState } from "react"

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
  ShieldCheck,
  Smartphone,
  Target,
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"
import { useLanguage } from "@/components/language-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
        outcome: "提升首屏理解",
        signal: "访客进入首页后没有快速进入商品页，或首屏停留短、下一步动作不明确。",
        checks: ["品牌与产品价值能否在几秒内被理解", "主视觉、核心卖点与行动按钮是否指向同一目标"],
        actions: ["压缩首屏信息并强化核心价值", "重排主按钮、商品入口与信任提示"],
        deliverable: "首页首屏问题清单＋信息优先级＋首屏结构建议",
        icon: Target,
      },
      {
        title: "商品页结构",
        text: "重排标题、卖点、图片、规格、评价、FAQ、物流和售后说明。",
        outcome: "提高加购意愿",
        signal: "商品页浏览量正常，但用户看完后没有加购，购买说服路径可能不完整。",
        checks: ["卖点、图片、价格、规格与购买按钮是否清楚", "评价、物流、退换货是否靠近关键决策位置"],
        actions: ["按购买决策顺序重排商品信息", "强化使用场景、信任内容与移动端购买入口"],
        deliverable: "商品页问题清单＋优化优先级＋页面结构建议",
        icon: PackageCheck,
      },
      {
        title: "信任内容",
        text: "补足评价、媒体背书、质保、支付安全、退换货和品牌可信度信息。",
        outcome: "降低购买顾虑",
        signal: "用户对产品有兴趣，但在品牌可信度、效果证明或售后风险上仍有顾虑。",
        checks: ["评价、案例与品牌证明是否具体可信", "质保、支付安全和退换政策是否容易找到"],
        actions: ["把关键证明放到对应决策位置", "用具体承诺替代泛化的安全与品质口号"],
        deliverable: "信任缺口清单＋证明素材规划＋页面植入位置",
        icon: ShieldCheck,
      },
      {
        title: "价格与优惠呈现",
        text: "优化优惠、组合、免邮门槛、价格锚点和限时信息的表达方式。",
        outcome: "让优惠更易理解",
        signal: "促销信息很多，但用户难以判断实际优惠、组合差异或最适合的购买方案。",
        checks: ["原价、现价、节省金额与优惠条件是否清楚", "组合、免邮门槛和限时信息是否产生冲突"],
        actions: ["统一价格层级与优惠表达", "突出推荐方案并减少同时出现的促销噪音"],
        deliverable: "价格表达审查＋优惠层级方案＋推荐购买路径",
        icon: BadgePercent,
      },
      {
        title: "购物车 / 结账路径",
        text: "减少不必要阻力，检查运费、支付、折扣码和结账前信任提示。",
        outcome: "减少结账流失",
        signal: "加购表现正常，但用户在查看运费、输入折扣码或选择支付方式时退出。",
        checks: ["额外费用、配送时间和支付方式是否提前说明", "购物车干扰项、错误提示与结账步骤是否顺畅"],
        actions: ["前置总价、物流与支付关键信息", "减少购物车干扰并强化结账前信任提示"],
        deliverable: "流失节点清单＋阻力修复建议＋结账前信息方案",
        icon: CreditCard,
      },
      {
        title: "移动端体验",
        text: "检查首屏高度、按钮位置、图片加载、长文案、粘性购买按钮和交互阻力。",
        outcome: "缩短移动端路径",
        signal: "移动端流量占比较高，但页面过长、按钮难找或操作反馈不顺畅。",
        checks: ["首屏高度、文字密度与购买按钮是否适合单手操作", "图片加载、规格选择和粘性按钮是否稳定"],
        actions: ["压缩关键信息路径并固定主要操作", "优化图片、触控区域和移动端内容顺序"],
        deliverable: "移动端体验清单＋关键屏幕调整＋交互优先级",
        icon: Smartphone,
      },
      {
        title: "FAQ / 售后 / 物流",
        text: "把用户下单前最担心的问题前置，降低购买风险感。",
        outcome: "提前消除疑问",
        signal: "用户反复咨询配送、退换、使用方式等问题，关键答案没有出现在决策现场。",
        checks: ["高频售前问题是否在商品页得到回答", "物流时效、退换条件和售后入口是否具体"],
        actions: ["按购买阶段重组 FAQ 与政策内容", "把关键答案放到价格、按钮和结账入口附近"],
        deliverable: "用户疑问清单＋FAQ 信息架构＋政策内容位置",
        icon: MessageSquareText,
      },
      {
        title: "数据追踪与指标",
        text: "用 GA4/GTM、加购率、结账率和购买率判断优化是否有效。",
        outcome: "建立判断依据",
        signal: "页面有订单数据，但无法确认流失发生在哪一步，也无法验证改版是否有效。",
        checks: ["浏览、加购、结账和购买事件是否完整准确", "渠道、设备和关键页面数据能否被拆分比较"],
        actions: ["校准漏斗事件、参数与转化口径", "建立改版前后可对比的核心指标"],
        deliverable: "追踪缺口清单＋指标口径＋转化漏斗检查方案",
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
        outcome: "Clarify the first viewport",
        signal: "Visitors reach the homepage but do not move into products quickly, or the next action is unclear.",
        checks: ["Whether brand and product value are understood within seconds", "Whether visual, value proposition, and CTA lead to one goal"],
        actions: ["Compress first-view information and sharpen the core value", "Reorder the primary CTA, product entry, and trust cues"],
        deliverable: "First-viewport issue list + information priority + structure recommendation",
        icon: Target,
      },
      {
        title: "Product page structure",
        text: "Rework title, benefits, media, specs, reviews, FAQ, shipping, and after-sales content.",
        outcome: "Increase add-to-cart intent",
        signal: "Product views are healthy, but visitors leave without adding to cart because the persuasion path may be incomplete.",
        checks: ["Clarity of benefits, media, price, variants, and buy action", "Placement of reviews, shipping, and return reassurance"],
        actions: ["Reorder content around the buying decision", "Strengthen use cases, proof, and the mobile purchase entry"],
        deliverable: "Product-page issue list + optimization priority + structure recommendation",
        icon: PackageCheck,
      },
      {
        title: "Trust content",
        text: "Strengthen reviews, proof, warranty, payment safety, returns, and brand credibility.",
        outcome: "Reduce buying hesitation",
        signal: "Visitors show interest but still hesitate around brand credibility, proof, or after-sales risk.",
        checks: ["Whether reviews, cases, and brand proof feel specific and credible", "Whether warranty, payment, and return policies are easy to find"],
        actions: ["Place proof beside the decision it supports", "Replace broad trust claims with concrete commitments"],
        deliverable: "Trust-gap list + proof asset plan + placement recommendation",
        icon: ShieldCheck,
      },
      {
        title: "Pricing and offers",
        text: "Improve offers, bundles, free-shipping thresholds, price anchors, and urgency messaging.",
        outcome: "Make offers easier to compare",
        signal: "Multiple promotions compete for attention, making savings, bundle differences, or the best option hard to understand.",
        checks: ["Clarity of list price, sale price, savings, and conditions", "Conflicts between bundles, free shipping, and urgency messages"],
        actions: ["Unify price hierarchy and offer language", "Highlight the recommended option and remove promotional noise"],
        deliverable: "Pricing review + offer hierarchy + recommended purchase path",
        icon: BadgePercent,
      },
      {
        title: "Cart and checkout path",
        text: "Reduce friction around shipping, payment, discounts, and pre-checkout reassurance.",
        outcome: "Reduce checkout drop-off",
        signal: "Add-to-cart is healthy, but visitors exit when checking shipping, applying discounts, or selecting payment.",
        checks: ["Whether fees, delivery timing, and payment options are explained early", "Whether cart distractions, errors, and checkout steps are smooth"],
        actions: ["Move total, shipping, and payment information forward", "Reduce cart distractions and strengthen checkout reassurance"],
        deliverable: "Drop-off map + friction fixes + pre-checkout information plan",
        icon: CreditCard,
      },
      {
        title: "Mobile experience",
        text: "Review first viewport height, button placement, image loading, long copy, sticky buy buttons, and interaction friction.",
        outcome: "Shorten the mobile path",
        signal: "Mobile traffic is high, but long pages, hidden actions, or weak interaction feedback slow visitors down.",
        checks: ["First-view height, copy density, and one-hand access to buy actions", "Image loading, variant selection, and sticky-action stability"],
        actions: ["Compress the decision path and keep the main action available", "Improve media, tap targets, and mobile content order"],
        deliverable: "Mobile UX issue list + key-screen adjustments + interaction priority",
        icon: Smartphone,
      },
      {
        title: "FAQ, after-sales, logistics",
        text: "Move key pre-purchase concerns forward and reduce perceived buying risk.",
        outcome: "Answer concerns earlier",
        signal: "Visitors repeatedly ask about delivery, returns, or usage because answers are missing at the decision point.",
        checks: ["Whether common pre-sale questions are answered on product pages", "Specificity of delivery, return, and support information"],
        actions: ["Reorganize FAQ and policy content by buying stage", "Place key answers near price, buy actions, and checkout entry"],
        deliverable: "Concern list + FAQ architecture + policy placement plan",
        icon: MessageSquareText,
      },
      {
        title: "Analytics and metrics",
        text: "Use GA4/GTM, add-to-cart rate, checkout rate, and purchase rate to judge impact.",
        outcome: "Create a decision baseline",
        signal: "Orders exist, but the team cannot locate the drop-off or verify whether a page change worked.",
        checks: ["Accuracy of view, cart, checkout, and purchase events", "Ability to compare channel, device, and key-page performance"],
        actions: ["Align funnel events, parameters, and conversion definitions", "Create comparable before-and-after performance metrics"],
        deliverable: "Tracking-gap list + metric definitions + funnel validation plan",
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
  zh: {
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
  },
  en: {
    breadcrumbs: [
      { name: "Home", url: "https://whaleleap.studio/en" },
      { name: "Services", url: "https://whaleleap.studio/en#services" },
      { name: "Shopify Conversion Optimization", url: "https://whaleleap.studio/en/services/shopify-conversion-optimization" },
    ],
    service: {
      name: "Shopify Conversion Optimization",
      description: "Conversion diagnosis and optimization for Shopify homepages, product pages, trust content, pricing, cart and checkout paths, mobile experience, and measurement.",
      url: "https://whaleleap.studio/en/services/shopify-conversion-optimization",
    },
  },
}

const funnelStages = [
  { label: "Visit", value: "100%", total: "120,842", icon: Target },
  { label: "Product view", value: "42.6%", total: "51,464", icon: PackageCheck },
  { label: "Add to cart", value: "18.7%", total: "22,597", icon: MousePointerClick },
  { label: "Checkout", value: "6.3%", total: "7,612", icon: CreditCard, warning: true },
  { label: "Purchase", value: "3.2%", total: "3,867", icon: CheckCircle2 },
]

const xrayStages = [
  { zh: "流量", en: "Traffic", icon: Target },
  { zh: "首页", en: "Homepage", icon: MousePointerClick },
  { zh: "商品页", en: "Product", icon: PackageCheck },
  { zh: "购物车", en: "Cart", icon: CreditCard },
  { zh: "结账", en: "Checkout", icon: CheckCircle2 },
]

const scopeStageMap = [1, 2, 2, 2, 3, 2, 4, 0]

const metricValues = ["42.6%", "18.7%", "6.3%", "3.2%", "¥332.50", "2.41%"]
const metricEventCounts = ["51,464", "22,597", "7,612", "3,867"]
const metricVisitWidths = ["42.6%", "18.7%", "6.3%", "3.2%"]
const metricStageIcons = [PackageCheck, MousePointerClick, CreditCard, CheckCircle2]
const aovBreakdown = [
  { zh: "商品金额", en: "Product value", value: "¥248", width: "74.6%" },
  { zh: "组合加购", en: "Bundle add-on", value: "+¥54.50", width: "16.4%" },
  { zh: "加价购", en: "Upsell", value: "+¥30", width: "9%" },
]
const paidChannelRates = [
  { label: "Meta Ads", value: "2.1%", width: "75%" },
  { label: "Google Ads", value: "2.8%", width: "100%" },
  { label: "TikTok Ads", value: "1.6%", width: "57%" },
  { label: "Account Average", value: "2.41%", width: "86%", average: true },
]
const processStageMeta = [
  { en: "Diagnose", zh: "诊断现状", enOutput: "Current-state baseline", zhOutput: "现状基线", icon: Gauge },
  { en: "Locate", zh: "定位断点", enOutput: "Bottleneck map", zhOutput: "转化断点地图", icon: Target },
  { en: "Prioritize", zh: "确定优先级", enOutput: "Optimization roadmap", zhOutput: "优化路线图", icon: ClipboardList },
  { en: "Execute", zh: "实施优化", enOutput: "Test-ready version", zhOutput: "可测试版本", icon: MousePointerClick },
  { en: "Measure", zh: "验证结果", enOutput: "Next iteration decision", zhOutput: "下一轮迭代决策", icon: LineChart },
]

const faqDecisionMeta = [
  {
    enCategory: "Benchmark",
    zhCategory: "指标判断",
    enConclusion: "There is no universal conversion-rate benchmark for every Shopify store.",
    zhConclusion: "没有适用于所有 Shopify 商店的统一正常转化率。",
    enChecks: ["Compare every funnel stage", "Segment by channel and device", "Use your own baseline first"],
    zhChecks: ["拆分查看每个漏斗阶段", "按渠道和设备分别比较", "先建立自己的历史基线"],
  },
  {
    enCategory: "Diagnosis",
    zhCategory: "问题定位",
    enConclusion: "Low conversion is not automatically a page-design problem.",
    zhConclusion: "转化低不一定是页面设计问题。",
    enChecks: ["Traffic and offer fit", "Shipping, payment, and price", "Trust and tracking accuracy"],
    zhChecks: ["流量人群与商品是否匹配", "价格、物流与支付是否有阻力", "信任内容和追踪是否准确"],
  },
  {
    enCategory: "Page path",
    zhCategory: "页面优化",
    enConclusion: "Build the product page around the questions that block a purchase decision.",
    zhConclusion: "商品页应围绕阻碍购买决策的问题组织内容。",
    enChecks: ["Value and use case", "Proof and product detail", "Shipping, returns, and buy action"],
    zhChecks: ["价值卖点与使用场景", "产品细节与可信证明", "物流、退换与购买入口"],
  },
  {
    enCategory: "Strategy",
    zhCategory: "方案选择",
    enConclusion: "Optimize local bottlenecks; rebuild only when the foundation blocks iteration.",
    zhConclusion: "局部断点优先做 CRO，基础结构无法迭代时再考虑重建。",
    enChecks: ["Current theme flexibility", "Scale of structural issues", "Cost of continued patching"],
    zhChecks: ["当前主题的扩展能力", "结构问题的影响范围", "持续修补的长期成本"],
  },
  {
    enCategory: "Timeline",
    zhCategory: "结果周期",
    enConclusion: "The observation window depends on change size and available traffic volume.",
    zhConclusion: "结果周期取决于改动范围和可用于判断的流量量级。",
    enChecks: ["Record the pre-change baseline", "Give the test enough traffic", "Compare one variable at a time"],
    zhChecks: ["记录改动前的数据基线", "确保测试获得足够流量", "每次尽量只比较一个变量"],
  },
  {
    enCategory: "Data setup",
    zhCategory: "数据基础",
    enConclusion: "Basic tracking should exist before making major optimization decisions.",
    zhConclusion: "重大优化决策前，至少要具备基础转化追踪。",
    enChecks: ["Product view", "Add to cart and checkout", "Purchase and revenue"],
    zhChecks: ["商品浏览事件", "加购与开始结账事件", "购买与收入数据"],
  },
]

const conversionRelatedRouteMeta = [
  { code: "BUILD", icon: PackageCheck, zh: ["从 0 建站", "页面结构", "上线检查"], en: ["New build", "Page structure", "Launch QA"] },
  { code: "BUDGET", icon: Gauge, zh: ["费用区间", "项目范围", "预算判断"], en: ["Price tiers", "Project scope", "Budget decision"] },
]

export function ShopifyConversionOptimizationPage() {
  const { language, localizedPath } = useLanguage()
  const text = copy[language]
  const structuredData = conversionOptimizationStructuredData[language]
  const [activeScope, setActiveScope] = useState(0)
  const [activeFaq, setActiveFaq] = useState(0)
  const activeScopeItem = text.scopes[activeScope]
  const activeFaqItem = text.faqs[activeFaq]
  const activeFaqMeta = faqDecisionMeta[activeFaq]
  const ActiveScopeIcon = activeScopeItem.icon
  const activeXrayStage = scopeStageMap[activeScope]
  const mobilePathRef = useRef<HTMLDivElement>(null)
  const stageStatus = (index: number) => {
    if (index < activeXrayStage) return language === "zh" ? "已检查" : "Checked"
    if (index === activeXrayStage) return language === "zh" ? "高风险" : "High risk"
    return language === "zh" ? "待验证" : "To verify"
  }

  useEffect(() => {
    const container = mobilePathRef.current
    const activeStage = container?.querySelector<HTMLElement>("[data-active-stage='true']")
    if (!container || !activeStage) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    container.scrollTo({
      left: activeStage.offsetLeft - (container.clientWidth - activeStage.offsetWidth) / 2,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }, [activeXrayStage])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData
        breadcrumbs={structuredData.breadcrumbs}
        faqItems={text.faqs}
        service={structuredData.service}
        language={language}
      />
      <Navbar />
      <main>
        <section className="relative min-h-[100svh] overflow-hidden px-4 pb-10 pt-28 sm:px-6 md:px-10 md:pb-12 md:pt-32 lg:pb-6 lg:pt-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_30%,rgba(34,211,238,0.1),transparent_30%),radial-gradient(ellipse_at_24%_56%,rgba(119,252,117,0.14),transparent_34%),linear-gradient(135deg,#020403,#07100b_52%,#010202)]" />
          <div aria-hidden="true" className="absolute -inset-x-[20%] -top-[24%] h-[120%] animate-cro-signal-orbit bg-[radial-gradient(ellipse_at_66%_38%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(ellipse_at_34%_64%,rgba(119,252,117,0.18),transparent_30%)] opacity-75 blur-2xl will-change-transform motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.13] [background-image:radial-gradient(circle,rgba(119,252,117,0.32)_1px,transparent_1.4px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_24%,rgba(0,0,0,0.12)_62%,rgba(0,0,0,0.62)_100%)]" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/75 to-transparent" />

          <div className="relative mx-auto flex w-full max-w-[1500px] flex-col lg:min-h-[calc(100svh-7.5rem)]">
            <div className="grid flex-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-6 xl:gap-10">
              <div className="min-w-0">
                <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.12em] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_0_28px_rgba(119,252,117,0.06)]">
                  <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />
                  {text.eyebrow}
                </p>
                <h1 className="max-w-5xl text-balance text-[clamp(2.55rem,4.65vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.025em]">{text.title}</h1>
                <p className="mt-6 max-w-3xl text-lg font-semibold leading-[1.55] text-foreground/90 md:text-xl">{text.subtitle}</p>
                <p className="mt-4 hidden max-w-3xl text-base leading-[1.75] text-muted-foreground sm:block">{text.description}</p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a href={localizedPath("/diagnosis")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-[0_0_28px_rgba(119,252,117,0.22)] transition-all hover:brightness-110 active:scale-[0.98]">
                    {text.primaryCta}<ArrowUpRight className="size-4" />
                  </a>
                  <a href="#scope" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white/[0.045] px-7 text-base font-semibold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-xl transition-colors hover:bg-cyan-300/[0.08]">{text.secondaryCta}</a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-2 xl:grid-cols-3">
                  {text.proof.map((item, index) => (
                    <div key={item} className={"flex min-h-[64px] items-center gap-3 rounded-[1.2rem] bg-white/[0.04] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.075)] backdrop-blur-xl " + (index === 2 ? "col-span-2 xl:col-span-1" : "")}>
                      <span className="font-mono text-base text-primary">0{index + 1}</span>
                      <span className="text-base font-medium leading-snug text-foreground/76">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-w-0 overflow-hidden rounded-[2rem] bg-white/[0.035] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_38px_100px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:p-6">
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_70%_36%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_28%_72%,rgba(119,252,117,0.08),transparent_30%)]" />
                <div className="relative flex flex-wrap items-center justify-between gap-3 px-1 font-mono text-base uppercase tracking-[0.06em]">
                  <span className="flex items-center gap-2 text-cyan-300"><Gauge className="size-5" />Conversion path / live</span>
                  <span className="flex items-center gap-2 text-white/42"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.85)] motion-reduce:animate-none" />120,842 sessions</span>
                </div>

                <div className="relative -mx-4 mt-8 overflow-x-auto px-[calc(50%-68px)] pb-3 [scrollbar-width:none] sm:-mx-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
                  <div className="relative grid min-w-[720px] snap-x snap-mandatory grid-cols-5 md:min-w-0">
                    <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-7 h-px overflow-hidden bg-white/14">
                      <span className="block h-full w-[18%] animate-cro-data-flow bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.95),rgba(119,252,117,1),transparent)] shadow-[0_0_16px_rgba(119,252,117,0.55)] will-change-transform motion-reduce:animate-none" />
                    </div>
                    {funnelStages.map((stage, index) => {
                      const Icon = stage.icon
                      return (
                        <div key={stage.label} className="relative snap-center px-1 text-center">
                          <span className={"relative z-10 mx-auto flex size-14 items-center justify-center rounded-full bg-[#050706] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_26px_rgba(119,252,117,0.15)] " + (stage.warning ? "text-[#ff8c68] ring-1 ring-[#ff7657]/65" : "text-primary ring-1 ring-primary/35")}><Icon className="size-6" /></span>
                          <span className="mt-3 block font-mono text-base uppercase leading-[1.25] tracking-[-0.04em] text-white/55">0{index + 1}·{stage.label}</span>
                          <strong className={"mt-1 block text-2xl leading-none tracking-[-0.03em] " + (stage.warning ? "text-[#ff7657]" : "text-primary")}>{stage.value}</strong>
                          <span className="mt-0.5 block text-base leading-tight tracking-[-0.02em] text-white/35">{stage.total}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="relative mt-5 flex flex-col gap-3 rounded-[1.35rem] bg-[#ff7657]/[0.08] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,148,112,0.18)] sm:flex-row sm:items-center sm:justify-between">
                  <span className="flex items-center gap-3 font-mono text-base uppercase tracking-[0.04em] text-[#ffad4a]"><Gauge className="size-5" />Conversion leak / checkout</span>
                  <span className="text-base leading-relaxed text-white/58">Checkout drop-off requires priority diagnosis</span>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-6">
              <p className="mb-3 px-1 font-mono text-base uppercase tracking-[0.08em] text-primary/70">{text.fitTitle} / diagnostic signals</p>
              <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-[calc(50%-120px)] pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden">
                {text.fitItems.map((item, index) => (
                  <div key={item} className="flex min-h-[104px] w-[240px] shrink-0 snap-center items-start gap-3 rounded-[1.3rem] bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.075)] backdrop-blur-xl sm:w-auto">
                    <span className="font-mono text-base text-primary">0{index + 1}</span>
                    <span className="text-base leading-[1.55] text-white/58">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="scope" className="scroll-mt-24 bg-black px-4 py-[50px] sm:px-6 md:px-10 md:py-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <p className="mb-4 font-mono text-base uppercase tracking-[0.1em] text-primary">Bottleneck radar</p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.scopeTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.scopeIntro}</p>
            </div>

            <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_74%_42%,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_28%_68%,rgba(119,252,117,0.1),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.012))] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_38px_100px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem]">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle,rgba(119,252,117,0.35)_1px,transparent_1.4px)] [background-size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

              <div className="relative order-3 hidden gap-4 px-5 pb-6 pt-6 sm:gap-6 sm:px-7 sm:pb-7 sm:pt-7 md:order-1 md:grid lg:min-h-[590px] lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch lg:gap-8 lg:px-10 lg:pb-8 lg:pt-8">
                <div key={language + "-scope-" + activeScope} aria-live="polite" className="flex flex-col rounded-[1.6rem] bg-black/28 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.075)] animate-in fade-in slide-in-from-left-2 duration-300 motion-reduce:animate-none sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-base uppercase tracking-[-0.02em] text-primary">Scope / {String(activeScope + 1).padStart(2, "0")}</span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-base text-primary">{language === "zh" ? "诊断中" : "Active"}</span>
                  </div>
                  <div className="mt-5 flex items-center gap-4 sm:mt-6">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-primary/12 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_0_32px_rgba(119,252,117,0.12)] sm:size-16 sm:rounded-[1.35rem]"><ActiveScopeIcon className="size-7" /></span>
                    <div>
                      <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">{activeScopeItem.title}</h3>
                      <p className="mt-2 text-base font-semibold text-primary/80">{activeScopeItem.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-[1.25rem] bg-[#ff7657]/[0.075] p-4 shadow-[inset_3px_0_0_rgba(255,118,87,0.72)]">
                    <span className="font-mono text-base uppercase tracking-[-0.02em] text-[#ffad8f]">{language === "zh" ? "问题信号" : "Problem signal"}</span>
                    <p className="mt-2 text-base leading-[1.7] text-white/68">{activeScopeItem.signal}</p>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.25rem] bg-cyan-300/[0.055] p-4 shadow-[inset_3px_0_0_rgba(34,211,238,0.58)]">
                      <span className="font-mono text-base uppercase tracking-[-0.02em] text-cyan-200">{language === "zh" ? "检查重点" : "What we check"}</span>
                      <ul className="mt-3 space-y-2.5">
                        {activeScopeItem.checks.map((item) => (
                          <li key={item} className="flex gap-2.5 text-base leading-[1.55] text-white/62"><span aria-hidden="true" className="mt-[0.62em] size-1.5 shrink-0 rounded-full bg-cyan-300" />{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[1.25rem] bg-primary/[0.055] p-4 shadow-[inset_3px_0_0_rgba(119,252,117,0.58)]">
                      <span className="font-mono text-base uppercase tracking-[-0.02em] text-primary">{language === "zh" ? "优化动作" : "Optimization actions"}</span>
                      <ul className="mt-3 space-y-2.5">
                        {activeScopeItem.actions.map((item) => (
                          <li key={item} className="flex gap-2.5 text-base leading-[1.55] text-white/62"><CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[1.25rem] bg-white/[0.05] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.075)]">
                    <span className="font-mono text-base uppercase tracking-[-0.02em] text-white/42">{language === "zh" ? "交付结果" : "Deliverable"}</span>
                    <p className="mt-1.5 text-base font-semibold leading-[1.55] text-white/82">{activeScopeItem.deliverable}</p>
                  </div>
                </div>

                <div className="relative flex min-w-0 flex-col justify-between overflow-hidden rounded-[1.6rem] bg-black/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-base uppercase tracking-[0.04em]">
                    <span className="flex items-center gap-2 text-cyan-300"><Gauge className="size-5" />Conversion path / x-ray</span>
                    <span className="hidden items-center gap-2 text-white/38 sm:flex"><span className="size-2 rounded-full bg-primary shadow-[0_0_11px_rgba(119,252,117,0.8)]" />Live diagnosis</span>
                  </div>

                  <div className="-mx-4 mt-6 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-7 sm:mt-9 sm:px-7 [&::-webkit-scrollbar]:hidden">
                    <div className="relative min-w-[660px]">
                      <div aria-hidden="true" className="absolute inset-y-[-1rem] left-0 w-1/5 rounded-[1.4rem] bg-[radial-gradient(circle_at_center,rgba(119,252,117,0.16),transparent_66%)] transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none" style={{ transform: `translateX(${activeXrayStage * 100}%)` }} />
                      <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-7 h-px bg-gradient-to-r from-cyan-300/18 via-primary/55 to-cyan-300/18" />
                      <div className="relative grid grid-cols-5">
                        {xrayStages.map((stage, index) => {
                          const Icon = stage.icon
                          const isActive = activeXrayStage === index
                          const isChecked = index < activeXrayStage
                          return (
                            <div key={stage.en} className="min-w-0 px-1 text-center">
                              <span className={"relative mx-auto flex size-12 items-center justify-center rounded-full bg-[#050706] transition-all duration-300 motion-reduce:transition-none sm:size-14 " + (isActive ? "text-primary ring-1 ring-primary/55 shadow-[0_0_28px_rgba(119,252,117,0.28)]" : "text-white/32 ring-1 ring-white/12")}><Icon className="size-5 sm:size-6" /></span>
                              <span className={"mt-3 block font-mono text-base leading-tight tracking-[-0.035em] transition-colors duration-300 motion-reduce:transition-none " + (isActive ? "text-primary" : "text-white/36")}>0{index + 1}</span>
                              <strong className={"mt-1 block text-base leading-tight transition-colors duration-300 motion-reduce:transition-none " + (isActive ? "text-white" : "text-white/38")}>{language === "zh" ? stage.zh : stage.en}</strong>
                              <span className={"mx-auto mt-2 inline-flex min-h-8 items-center rounded-full px-3 text-base font-medium " + (isActive ? "bg-[#ff7657]/12 text-[#ffad8f]" : isChecked ? "bg-cyan-300/[0.08] text-cyan-200/70" : "bg-white/[0.045] text-white/38")}>{stageStatus(index)}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <div key={language + "-xray-" + activeScope} className="mt-6 flex items-center justify-between gap-4 rounded-[1.35rem] bg-white/[0.045] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.075)] animate-in fade-in duration-300 motion-reduce:animate-none sm:mt-9">
                    <span>
                      <span className="block font-mono text-base uppercase tracking-[-0.02em] text-primary/70">{language === "zh" ? "当前优先检查" : "Current priority"}</span>
                      <strong className="mt-1 block text-base leading-relaxed text-white">{language === "zh" ? xrayStages[activeXrayStage].zh : xrayStages[activeXrayStage].en} · {activeScopeItem.outcome}</strong>
                    </span>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary"><ActiveScopeIcon className="size-5" /></span>
                  </div>
                </div>
              </div>

              <div key={language + "-mobile-scope-" + activeScope} aria-live="polite" className="relative order-2 mx-4 mb-5 overflow-hidden rounded-[1.6rem] bg-black/28 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.075)] animate-in fade-in duration-300 motion-reduce:animate-none sm:mx-6 md:hidden">
                <div className="flex items-start gap-4">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-[1.2rem] bg-primary/12 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_0_28px_rgba(119,252,117,0.1)]"><ActiveScopeIcon className="size-6" /></span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-base uppercase tracking-[-0.02em] text-primary">Scope / {String(activeScope + 1).padStart(2, "0")}</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-base text-primary">{language === "zh" ? "诊断中" : "Active"}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold leading-tight text-white">{activeScopeItem.title}</h3>
                    <p className="mt-1.5 text-base font-semibold leading-relaxed text-primary/80">{activeScopeItem.outcome}</p>
                  </div>
                </div>

                <div className="mt-5 rounded-[1.15rem] bg-[#ff7657]/[0.075] p-4 shadow-[inset_3px_0_0_rgba(255,118,87,0.72)]">
                  <span className="font-mono text-base uppercase tracking-[-0.02em] text-[#ffad8f]">{language === "zh" ? "问题信号" : "Problem signal"}</span>
                  <p className="mt-2 text-base leading-[1.7] text-white/68">{activeScopeItem.signal}</p>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between gap-3 font-mono text-base uppercase tracking-[0.02em]">
                    <span className="flex items-center gap-2 text-cyan-300"><Gauge className="size-5" />Conversion path</span>
                    <span className="text-white/38">X-ray</span>
                  </div>
                  <div ref={mobilePathRef} aria-label={language === "zh" ? "移动端转化路径" : "Mobile conversion path"} className="-mx-5 mt-5 snap-x snap-mandatory overflow-x-auto px-[calc(50%-60px)] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="relative grid min-w-[600px] grid-cols-5">
                      <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-6 h-px bg-gradient-to-r from-cyan-300/18 via-primary/55 to-cyan-300/18" />
                      {xrayStages.map((stage, index) => {
                        const Icon = stage.icon
                        const isActive = activeXrayStage === index
                        const isChecked = index < activeXrayStage
                        return (
                          <div key={stage.en} data-active-stage={isActive ? "true" : "false"} className="relative min-w-0 snap-center px-1 text-center">
                            <span className={"relative mx-auto flex size-12 items-center justify-center rounded-full bg-[#050706] transition-all duration-300 motion-reduce:transition-none " + (isActive ? "text-primary ring-1 ring-primary/55 shadow-[0_0_24px_rgba(119,252,117,0.25)]" : "text-white/32 ring-1 ring-white/12")}><Icon className="size-5" /></span>
                            <span className={"mt-3 block font-mono text-base leading-tight tracking-[-0.035em] " + (isActive ? "text-primary" : "text-white/36")}>0{index + 1}</span>
                            <strong className={"mt-1 block text-base leading-tight " + (isActive ? "text-white" : "text-white/38")}>{language === "zh" ? stage.zh : stage.en}</strong>
                            <span className={"mx-auto mt-2 inline-flex min-h-8 items-center rounded-full px-3 text-base font-medium " + (isActive ? "bg-[#ff7657]/12 text-[#ffad8f]" : isChecked ? "bg-cyan-300/[0.08] text-cyan-200/70" : "bg-white/[0.045] text-white/38")}>{stageStatus(index)}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="rounded-[1.15rem] bg-cyan-300/[0.05] p-4">
                    <span className="font-mono text-base uppercase tracking-[-0.02em] text-cyan-200">{language === "zh" ? "检查重点" : "What we check"}</span>
                    <ul className="mt-3 space-y-2.5">
                      {activeScopeItem.checks.map((item) => (
                        <li key={item} className="flex gap-2.5 text-base leading-[1.6] text-white/62"><span aria-hidden="true" className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-cyan-300" />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[1.15rem] bg-primary/[0.05] p-4">
                    <span className="font-mono text-base uppercase tracking-[-0.02em] text-primary">{language === "zh" ? "优化动作" : "Optimization actions"}</span>
                    <ul className="mt-3 space-y-2.5">
                      {activeScopeItem.actions.map((item) => (
                        <li key={item} className="flex gap-2.5 text-base leading-[1.6] text-white/62"><CheckCircle2 aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 rounded-[1.15rem] bg-white/[0.05] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.075)]">
                  <span className="font-mono text-base uppercase tracking-[-0.02em] text-white/42">{language === "zh" ? "交付结果" : "Deliverable"}</span>
                  <p className="mt-1.5 text-base font-semibold leading-[1.6] text-white/82">{activeScopeItem.deliverable}</p>
                </div>
              </div>

              <div role="group" aria-label={language === "zh" ? "优化范围切换" : "Optimization scope switcher"} className="relative order-1 -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-[calc(50%-95px)] pb-5 pt-6 [scrollbar-width:none] sm:-mx-6 sm:px-[calc(50%-95px)] md:order-2 md:px-[calc(50%-105px)] md:pb-7 md:pt-1 lg:-mx-8 2xl:mx-0 2xl:px-10 [&::-webkit-scrollbar]:hidden">
                {text.scopes.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeScope === index
                  return (
                    <button type="button" key={item.title} onClick={(event) => { setActiveScope(index); event.currentTarget.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest", inline: "center" }) }} aria-pressed={isActive} className={"flex min-h-[90px] w-[190px] shrink-0 snap-center items-center gap-3 rounded-[1.35rem] px-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none md:min-h-[96px] md:w-[210px] " + (isActive ? "bg-primary/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_24px_rgba(119,252,117,0.09)]" : "bg-white/[0.035] text-white/48 hover:bg-white/[0.06]")}>
                      <span className={"flex size-10 shrink-0 items-center justify-center rounded-xl " + (isActive ? "bg-primary/14 text-primary" : "bg-black/25 text-white/38")}><Icon className="size-5" /></span>
                      <span className="min-w-0">
                        <span className="block font-mono text-base tracking-[-0.035em] text-primary/65">{String(index + 1).padStart(2, "0")}</span>
                        <strong className="mt-1 block text-base leading-tight">{item.title}</strong>
                        <span className="mt-1.5 block text-base leading-tight text-white/42">{item.outcome}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <p className="mb-4 font-mono text-base uppercase tracking-[0.1em] text-cyan-300">Metrics command</p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.metricsTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.metricsIntro}</p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/[0.045] px-4 py-2 font-mono text-base text-white/48">
                <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.75)]" />
                {language === "zh" ? "诊断模型 · 示例数据" : "Diagnostic model · Sample data"}
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_78%_18%,rgba(34,211,238,0.09),transparent_28%),radial-gradient(circle_at_20%_72%,rgba(119,252,117,0.1),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_32px_90px_rgba(0,0,0,0.34)] sm:p-7 lg:p-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,rgba(119,252,117,0.36)_1px,transparent_1.4px)] [background-size:38px_38px] [mask-image:radial-gradient(circle_at_center,black,transparent_84%)]" />
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px animate-shimmer bg-gradient-to-r from-transparent via-primary to-transparent bg-[length:200%_100%] motion-reduce:animate-none" />

              <div className="relative flex flex-wrap items-center justify-between gap-3 font-mono text-base uppercase tracking-[0.04em]">
                <span className="flex items-center gap-2 text-cyan-300"><Gauge className="size-5" />Conversion command center</span>
                <span className="flex items-center gap-2 text-white/38"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.8)] motion-reduce:animate-none" />{language === "zh" ? "路径诊断中" : "Path diagnosis active"}</span>
              </div>

              <div className="relative mt-7">
                <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-[4.15rem] hidden h-px overflow-hidden bg-white/12 lg:block">
                  <span className="block h-full w-[22%] animate-cro-data-flow bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.95),rgba(119,252,117,1),transparent)] shadow-[0_0_16px_rgba(119,252,117,0.5)] motion-reduce:animate-none" />
                </div>
                <div className="space-y-2 lg:hidden">
                  {text.metrics.slice(0, 4).map(([name, description], index) => {
                    const MetricIcon = metricStageIcons[index]
                    const isWarning = index === 2
                    return (
                      <article key={name} className="relative overflow-hidden rounded-[1.2rem] bg-black/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                        <div aria-hidden="true" className={"absolute bottom-0 left-0 top-0 w-1 " + (isWarning ? "bg-[#ff7657]" : "bg-primary/65")} />
                        <div className="flex items-start gap-3">
                          <span className={"flex size-11 shrink-0 items-center justify-center rounded-full bg-[#050706] " + (isWarning ? "text-[#ff8c68] ring-1 ring-[#ff7657]/60" : "text-primary ring-1 ring-primary/30")}><MetricIcon className="size-5" /></span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <span className="font-mono text-base text-white/35">0{index + 1}</span>
                                <h3 className="mt-1 text-base font-semibold leading-tight text-white">{name}</h3>
                              </div>
                              <strong className={"shrink-0 text-2xl leading-none " + (isWarning ? "text-[#ff7657]" : "text-primary")}>{metricValues[index]}</strong>
                            </div>
                            <p className="mt-2 text-base leading-[1.55] text-white/48">{description}</p>
                            <div className="mt-3 flex items-center justify-between gap-3 text-base text-white/42">
                              <span>{metricEventCounts[index]} {language === "zh" ? "次事件" : "events"}</span>
                              <span>{language === "zh" ? "占全部访问" : "of sessions"}</span>
                            </div>
                            <div role="img" aria-label={`${name}: ${metricValues[index]}, ${metricEventCounts[index]} events`} className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.055]">
                              <span className={"block h-full min-w-1.5 rounded-full " + (isWarning ? "bg-[#ff7657]" : "bg-primary")} style={{ width: metricVisitWidths[index] }} />
                            </div>
                          </div>
                        </div>
                      </article>
                    )
                  })}
                </div>

                <div className="hidden gap-3 lg:grid lg:grid-cols-4">
                  {text.metrics.slice(0, 4).map(([name, description], index) => {
                    const MetricIcon = metricStageIcons[index]
                    const isWarning = index === 2
                    return (
                      <article key={name} className={"relative rounded-[1.35rem] bg-black/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-colors duration-300 motion-reduce:transition-none " + (isWarning ? "hover:bg-[#ff7657]/[0.055]" : "hover:bg-primary/[0.045]")}>
                        <div className="flex items-center justify-between gap-3">
                          <span className={"relative z-10 flex size-12 items-center justify-center rounded-full bg-[#050706] " + (isWarning ? "text-[#ff8c68] ring-1 ring-[#ff7657]/60 shadow-[0_0_24px_rgba(255,118,87,0.16)]" : "text-primary ring-1 ring-primary/30 shadow-[0_0_24px_rgba(119,252,117,0.12)]")}><MetricIcon className="size-5" /></span>
                          <span className="font-mono text-base text-white/35">0{index + 1}</span>
                        </div>
                        <div className="mt-5 flex items-start justify-between gap-4 lg:block">
                          <div>
                            <h3 className="text-base font-semibold leading-tight text-white">{name}</h3>
                            <p className="mt-2 text-base leading-[1.6] text-white/48">{description}</p>
                          </div>
                          <strong className={"shrink-0 text-2xl leading-none lg:mt-5 lg:block lg:text-3xl " + (isWarning ? "text-[#ff7657]" : "text-primary")}>{metricValues[index]}</strong>
                        </div>
                        <div className="mt-4 flex items-center justify-between gap-3 text-base text-white/42">
                          <span>{metricEventCounts[index]} {language === "zh" ? "次事件" : "events"}</span>
                          <span>{language === "zh" ? "占全部访问" : "of sessions"}</span>
                        </div>
                        <div role="img" aria-label={`${name}: ${metricValues[index]}, ${metricEventCounts[index]} events`} className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.055]">
                          <span className={"block h-full min-w-1.5 rounded-full shadow-[0_0_14px_currentColor] " + (isWarning ? "bg-[#ff7657] text-[#ff7657]" : "bg-primary text-primary")} style={{ width: metricVisitWidths[index] }} />
                        </div>
                        <span className={"mt-3 inline-flex rounded-full px-3 py-1.5 text-base font-medium " + (isWarning ? "bg-[#ff7657]/10 text-[#ffad8f]" : "bg-primary/[0.08] text-primary/75")}>
                          {isWarning ? (language === "zh" ? "优先诊断" : "Priority check") : (language === "zh" ? "路径指标" : "Path metric")}
                        </span>
                      </article>
                    )
                  })}
                </div>
              </div>

              <div className="relative mt-4 grid gap-4 md:grid-cols-2">
                <article className="overflow-hidden rounded-[1.5rem] bg-black/28 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-base uppercase tracking-[-0.02em] text-cyan-300">Commercial quality / 01</span>
                      <h3 className="mt-3 text-lg font-bold text-white">{text.metrics[4][0]}</h3>
                      <p className="mt-2 text-base leading-[1.65] text-white/48">{text.metrics[4][1]}</p>
                    </div>
                    <BadgePercent className="size-6 shrink-0 text-primary" />
                  </div>
                  <strong className="mt-6 block text-3xl text-primary">{metricValues[4]}</strong>
                  <div role="img" aria-label={language === "zh" ? "平均订单金额构成：商品金额 248 元，组合加购 54.5 元，加价购 30 元" : "Average order value composition: product value 248, bundle add-on 54.5, upsell 30"} className="mt-5">
                    <div className="flex h-4 overflow-hidden rounded-full bg-white/[0.055]">
                      {aovBreakdown.map((item, index) => <span key={item.en} className={index === 0 ? "bg-primary/75" : index === 1 ? "bg-cyan-300/70" : "bg-[#ffad4a]/75"} style={{ width: item.width }} />)}
                    </div>
                    <div className="mt-4 space-y-3">
                      {aovBreakdown.map((item, index) => (
                        <div key={item.en} className="flex items-center justify-between gap-4 text-base">
                          <span className="flex items-center gap-2 text-white/52"><span className={"size-2.5 rounded-full " + (index === 0 ? "bg-primary" : index === 1 ? "bg-cyan-300" : "bg-[#ffad4a]")} />{language === "zh" ? item.zh : item.en}</span>
                          <strong className="text-white/82">{item.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-5 rounded-[1rem] bg-primary/[0.055] px-4 py-3 text-base leading-[1.6] text-white/52">{language === "zh" ? "组合与加价购贡献了 ¥84.50 的示意客单价增量。" : "Bundles and upsells contribute a sample ¥84.50 of incremental order value."}</p>
                </article>

                <article className="overflow-hidden rounded-[1.5rem] bg-black/28 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-base uppercase tracking-[-0.02em] text-cyan-300">Commercial quality / 02</span>
                      <h3 className="mt-3 text-lg font-bold text-white">{text.metrics[5][0]}</h3>
                      <p className="mt-2 text-base leading-[1.65] text-white/48">{text.metrics[5][1]}</p>
                    </div>
                    <Target className="size-6 shrink-0 text-primary" />
                  </div>
                  <strong className="mt-6 block text-3xl text-primary">{metricValues[5]}</strong>
                  <div role="img" aria-label={language === "zh" ? "广告渠道转化率对比：Meta 2.1%，Google 2.8%，TikTok 1.6%，账户平均 2.41%" : "Paid channel conversion comparison: Meta 2.1%, Google 2.8%, TikTok 1.6%, account average 2.41%"} className="mt-5 space-y-3.5">
                    {paidChannelRates.map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between gap-4 text-base">
                          <span className={item.average ? "font-semibold text-cyan-200" : "text-white/52"}>{item.label}</span>
                          <strong className={item.average ? "text-cyan-200" : "text-white/82"}>{item.value}</strong>
                        </div>
                        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/[0.055]">
                          <span className={"block h-full min-w-1.5 rounded-full " + (item.average ? "bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.4)]" : "bg-primary/65")} style={{ width: item.width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-[1rem] bg-cyan-300/[0.055] px-4 py-3 text-base leading-[1.6] text-white/52">{language === "zh" ? "Google Ads 的示意转化较高；TikTok Ads 应优先检查流量与落地页匹配。" : "Google Ads shows the strongest sample conversion; TikTok Ads needs a traffic-to-landing-page fit check."}</p>
                </article>
              </div>

              <div className="relative mt-4 flex flex-col gap-3 rounded-[1.25rem] bg-white/[0.035] px-5 py-4 text-base leading-[1.6] text-white/42 sm:flex-row sm:items-center sm:justify-between">
                <span>{language === "zh" ? "以上为诊断界面示意数据，不代表客户实际结果。" : "Values shown are interface samples and do not represent client results."}</span>
                <span className="shrink-0 font-mono text-primary/70">Status / Measurable</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-9 max-w-3xl text-center">
              <p className="mb-4 font-mono text-base uppercase tracking-[0.1em] text-primary">Experiment pipeline</p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.processTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{language === "zh" ? "每一步都有明确的工作范围和交付结果，让优化从判断走向可验证的迭代。" : "Each stage has a defined scope and deliverable, moving optimization from diagnosis to measurable iteration."}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_78%_25%,rgba(34,211,238,0.085),transparent_28%),radial-gradient(circle_at_20%_72%,rgba(119,252,117,0.1),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.012))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_30px_90px_rgba(0,0,0,0.34)] sm:p-7 lg:p-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,rgba(119,252,117,0.34)_1px,transparent_1.4px)] [background-size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_84%)]" />
              <div className="relative flex flex-wrap items-center justify-between gap-3 font-mono text-base uppercase tracking-[0.04em]">
                <span className="flex items-center gap-2 text-cyan-300"><ClipboardList className="size-5" />Diagnose · Locate · Build · Measure</span>
                <span className="flex items-center gap-2 text-white/38"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.8)] motion-reduce:animate-none" />{language === "zh" ? "优化管线运行中" : "Pipeline active"}</span>
              </div>

              <div className="relative mt-9 hidden lg:block">
                <div aria-hidden="true" className="absolute left-[9%] right-[9%] top-8 h-px overflow-hidden bg-white/12">
                  <span className="block h-full w-[22%] animate-cro-data-flow bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.95),rgba(119,252,117,1),transparent)] shadow-[0_0_16px_rgba(119,252,117,0.5)] motion-reduce:animate-none" />
                </div>
                <div className="relative grid grid-cols-5 gap-4">
                  {text.process.map((item, index) => {
                    const stage = processStageMeta[index]
                    const StageIcon = stage.icon
                    const isDecision = index === 2
                    const isExecution = index === 3
                    return (
                      <article key={stage.en} className={"group min-w-0 px-2 py-1 " + (isDecision ? "text-[#ffad8f]" : isExecution ? "text-primary" : "text-cyan-200")}>
                        <span className={"relative z-10 mx-auto flex size-16 items-center justify-center rounded-full bg-[#050706] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none " + (isDecision ? "ring-1 ring-[#ff7657]/60 shadow-[0_0_28px_rgba(255,118,87,0.16)]" : isExecution ? "ring-1 ring-primary/55 shadow-[0_0_30px_rgba(119,252,117,0.2)]" : "ring-1 ring-cyan-300/25 shadow-[0_0_24px_rgba(34,211,238,0.1)]")}><StageIcon className="size-6" /></span>
                        <div className="mt-6 text-center">
                          <span className="font-mono text-base uppercase tracking-[-0.02em] opacity-70">0{index + 1} / {stage.en}</span>
                          <h3 className="mt-2 text-lg font-bold text-white">{language === "zh" ? stage.zh : stage.en}</h3>
                          <p className="mt-3 text-base leading-[1.65] text-white/52">{item}</p>
                          <div className="mt-5 rounded-[1rem] bg-white/[0.045] px-3 py-3 text-left">
                            <span className="block font-mono text-base uppercase tracking-[-0.02em] text-white/35">{language === "zh" ? "交付" : "Output"}</span>
                            <strong className="mt-1 block text-base leading-[1.5] text-white/78">{language === "zh" ? stage.zhOutput : stage.enOutput}</strong>
                          </div>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>

              <div className="relative mt-7 lg:hidden">
                <div aria-hidden="true" className="absolute bottom-7 left-7 top-7 w-px overflow-hidden bg-white/12">
                  <span className="block h-[28%] w-full animate-cro-data-flow-y bg-[linear-gradient(180deg,transparent,rgba(34,211,238,0.95),rgba(119,252,117,1),transparent)] shadow-[0_0_14px_rgba(119,252,117,0.55)] motion-reduce:animate-none" />
                </div>
                <div className="space-y-4">
                  {text.process.map((item, index) => {
                    const stage = processStageMeta[index]
                    const StageIcon = stage.icon
                    const isDecision = index === 2
                    const isExecution = index === 3
                    return (
                      <article key={stage.en} className="relative flex items-start gap-4">
                        <span className={"relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-[#050706] " + (isDecision ? "text-[#ff8c68] ring-1 ring-[#ff7657]/60 shadow-[0_0_24px_rgba(255,118,87,0.15)]" : isExecution ? "text-primary ring-1 ring-primary/55 shadow-[0_0_26px_rgba(119,252,117,0.18)]" : "text-cyan-200 ring-1 ring-cyan-300/25")}><StageIcon className="size-5" /></span>
                        <div className="min-w-0 flex-1 rounded-[1.25rem] bg-black/28 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.065)]">
                          <span className={"font-mono text-base uppercase tracking-[-0.02em] " + (isDecision ? "text-[#ffad8f]" : isExecution ? "text-primary" : "text-cyan-200")}>0{index + 1} / {stage.en}</span>
                          <h3 className="mt-2 text-lg font-bold text-white">{language === "zh" ? stage.zh : stage.en}</h3>
                          <p className="mt-3 text-base leading-[1.65] text-white/55">{item}</p>
                          <div className="mt-4 flex flex-wrap items-center gap-2 text-base">
                            <span className="font-mono text-white/35">{language === "zh" ? "交付" : "Output"}</span>
                            <strong className="rounded-full bg-white/[0.05] px-3 py-1.5 text-white/78">{language === "zh" ? stage.zhOutput : stage.enOutput}</strong>
                          </div>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>

              <div className="relative mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-[1.2rem] bg-white/[0.035] px-5 py-4 font-mono text-base uppercase tracking-[-0.02em] text-white/42">
                <span>Baseline</span><span className="text-primary/55">→</span><span>Bottleneck</span><span className="text-primary/55">→</span><span>Roadmap</span><span className="text-primary/55">→</span><span>Test version</span><span className="text-primary/55">→</span><span>Next decision</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-5 text-center">
              <p className="flex items-center justify-center gap-2 font-mono text-base uppercase tracking-[0.08em] text-cyan-300"><HelpCircle className="size-5" />Knowledge base</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.faqTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground">{language === "zh" ? "关于转化指标、问题定位、页面优化与数据追踪的关键答案。" : "Key answers about conversion metrics, diagnosis, page optimization, and analytics."}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_78%_34%,rgba(34,211,238,0.075),transparent_29%),radial-gradient(circle_at_24%_68%,rgba(119,252,117,0.09),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(34,211,238,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div aria-hidden="true" className="absolute bottom-[16%] right-[2%] h-px w-[58%] -rotate-3 animate-shimmer bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent bg-[length:200%_100%] motion-reduce:animate-none" />

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-3"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_16px_rgba(119,252,117,0.8)] motion-reduce:animate-none" /><span className="font-mono text-base uppercase text-primary">CRO knowledge / online</span></div>
                <span className="font-mono text-base uppercase text-white/35">06 questions indexed</span>
              </div>

              <div className="relative z-10 mt-7 hidden min-w-0 grid-cols-[0.38fr_0.62fr] gap-7 lg:grid">
                <div role="group" aria-label={language === "zh" ? "常见问题目录" : "FAQ directory"} className="space-y-2 rounded-[1.7rem] bg-black/20 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.065)]">
                  {text.faqs.map((item, index) => {
                    const isActive = activeFaq === index
                    const meta = faqDecisionMeta[index]
                    return (
                      <button type="button" key={item.q} aria-pressed={isActive} aria-controls="cro-faq-answer-panel" onClick={() => setActiveFaq(index)} className={"group relative flex min-h-[78px] w-full items-center gap-4 overflow-hidden rounded-[1.35rem] px-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none " + (isActive ? "bg-white/[0.09] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_30px_rgba(119,252,117,0.07)]" : "bg-transparent hover:bg-white/[0.035]")}>
                        <span className={"flex size-11 shrink-0 items-center justify-center rounded-full font-mono text-base transition-colors " + (isActive ? "bg-primary text-black" : "bg-white/[0.045] text-cyan-300/42 group-hover:text-primary")}><span>0{index + 1}</span></span>
                        <span className="min-w-0"><span className={"block font-mono text-base uppercase " + (isActive ? "text-primary" : "text-cyan-300/38")}>{language === "zh" ? meta.zhCategory : meta.enCategory}</span><strong className={"mt-1 block text-base leading-snug " + (isActive ? "text-white" : "text-white/52 group-hover:text-white/72")}>{item.q}</strong></span>
                        {isActive && <span aria-hidden="true" className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/65 to-transparent" />}
                      </button>
                    )
                  })}
                </div>

                <div id="cro-faq-answer-panel" role="region" aria-live="polite" aria-label={language === "zh" ? "当前问题答案" : "Current answer"} className="relative flex min-h-[510px] min-w-0 items-center overflow-hidden rounded-[1.7rem] bg-black/18 px-7 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] xl:px-12">
                  <div aria-hidden="true" className="absolute right-[8%] top-[10%] size-52 rounded-full border border-dashed border-primary/10" />
                  <div key={language + activeFaq} className="relative z-10 max-w-3xl animate-in fade-in slide-in-from-right-3 duration-300 motion-reduce:animate-none">
                    <div className="flex items-center gap-4"><span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"><HelpCircle className="size-6" /></span><div><span className="font-mono text-base uppercase text-primary">Answer / 0{activeFaq + 1} of 06</span><span className="mt-1 block font-mono text-base uppercase text-white/32">{activeFaqMeta.enCategory} knowledge</span></div></div>
                    <h3 className="mt-7 max-w-2xl text-3xl font-bold leading-tight text-white">{activeFaqItem.q}</h3>
                    <p className="mt-6 max-w-2xl text-lg font-semibold leading-[1.65] text-white/86">{language === "zh" ? activeFaqMeta.zhConclusion : activeFaqMeta.enConclusion}</p>
                    <p className="mt-4 max-w-2xl text-base leading-[1.9] text-white/58">{activeFaqItem.a}</p>
                    <div className="mt-8 flex flex-wrap gap-2">{(language === "zh" ? activeFaqMeta.zhChecks : activeFaqMeta.enChecks).map((tag) => <span key={tag} className="rounded-full bg-white/[0.05] px-4 py-2 text-base text-white/55">{tag}</span>)}</div>
                    <div className="mt-9 flex items-center gap-3 font-mono text-base uppercase text-primary"><ShieldCheck className="size-5" />Answer verified</div>
                  </div>
                </div>
              </div>

              <Accordion type="single" value={"faq-" + activeFaq} onValueChange={(value) => { if (value) setActiveFaq(Number(value.replace("faq-", ""))) }} className="relative z-10 mt-6 space-y-2 lg:hidden">
                {text.faqs.map((item, index) => {
                  const meta = faqDecisionMeta[index]
                  return (
                    <AccordionItem key={item.q} value={"faq-" + index} className="overflow-hidden rounded-[1.35rem] border-0 bg-black/18 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)] data-[state=open]:bg-white/[0.075] data-[state=open]:shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_0_28px_rgba(119,252,117,0.055)] sm:px-5">
                      <AccordionTrigger className="min-h-[72px] gap-3 py-4 text-left text-base font-semibold leading-snug hover:no-underline data-[state=open]:text-primary [&>svg]:size-5 [&>svg]:shrink-0">
                        <span className="flex min-w-0 items-center gap-3"><span className="font-mono text-base text-cyan-300/55">0{index + 1}</span><span>{item.q}</span></span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 pl-0 text-base leading-[1.8] text-white/60 sm:pl-9">
                        <p className="font-semibold text-white/82">{language === "zh" ? meta.zhConclusion : meta.enConclusion}</p>
                        <p className="mt-3">{item.a}</p>
                        <div className="mt-5 flex flex-wrap gap-2">{(language === "zh" ? meta.zhChecks : meta.enChecks).map((tag) => <span key={tag} className="rounded-full bg-black/20 px-3 py-2 text-base text-white/50">{tag}</span>)}</div>
                        <div className="mt-5 flex items-center gap-2 font-mono text-base uppercase text-primary"><ShieldCheck className="size-5" />Answer verified</div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-5 text-center">
              <p className="font-mono text-base uppercase tracking-[0.08em] text-cyan-300">Service navigator</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.relatedTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground">{text.relatedIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_25%_48%,rgba(119,252,117,0.11),transparent_27%),radial-gradient(circle_at_82%_32%,rgba(34,211,238,0.075),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(34,211,238,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-3"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_16px_rgba(119,252,117,0.8)] motion-reduce:animate-none" /><span className="font-mono text-base uppercase text-primary">Service route map / online</span></div>
                <span className="font-mono text-base uppercase text-white/35">02 next routes ready</span>
              </div>

              <div className="relative z-10 mt-7 grid min-w-0 gap-7 lg:grid-cols-[0.36fr_0.64fr] lg:items-stretch lg:gap-10">
                <div className="relative flex min-h-[360px] min-w-0 items-center justify-center overflow-hidden rounded-[1.7rem] bg-black/20 px-5 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.065)] lg:min-h-[500px]">
                  <div aria-hidden="true" className="absolute size-[310px] rounded-full bg-primary/[0.035] blur-2xl" />
                  <div className="relative flex size-[260px] items-center justify-center rounded-[44%_56%_48%_52%/54%_42%_58%_46%] bg-[radial-gradient(circle_at_38%_30%,rgba(255,255,255,0.18),transparent_23%),linear-gradient(145deg,rgba(119,252,117,0.19),rgba(34,211,238,0.05)_58%,rgba(0,0,0,0.3))] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.17),0_0_78px_rgba(119,252,117,0.13)] sm:size-[285px]">
                    <span aria-hidden="true" className="absolute inset-4 animate-[spin_24s_linear_infinite] rounded-[46%_54%_42%_58%] border border-dashed border-primary/22 motion-reduce:animate-none" />
                    <div className="relative z-10 px-8">
                      <LineChart className="mx-auto size-10 text-primary" />
                      <span className="mt-4 block font-mono text-base uppercase text-primary">Current assessment</span>
                      <strong className="mt-2 block text-2xl leading-tight text-white">Conversion Optimization</strong>
                      <span className="mt-4 block text-base leading-[1.65] text-white/52">{language === "zh" ? "当前最关键的转化断点在哪里？" : "Where is the highest-impact conversion bottleneck?"}</span>
                    </div>
                  </div>
                </div>

                <div className="relative min-w-0 space-y-2 rounded-[1.7rem] bg-black/18 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)]">
                  <span aria-hidden="true" className="absolute bottom-10 left-[35px] top-[-28px] w-px bg-gradient-to-b from-primary/45 via-cyan-300/25 to-primary/20 lg:hidden" />
                  {text.relatedLinks.map((link, index) => {
                    const meta = conversionRelatedRouteMeta[index]
                    const Icon = meta.icon
                    return (
                      <a key={link.href} href={link.href} className="group relative flex min-h-[220px] min-w-0 flex-col justify-between rounded-[1.45rem] bg-transparent px-4 py-6 transition-all duration-300 hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none sm:px-6 lg:min-h-[240px] lg:px-8">
                        <span aria-hidden="true" className={"absolute inset-0 rounded-[1.45rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none " + (index === 0 ? "bg-[radial-gradient(circle_at_12%_50%,rgba(119,252,117,0.12),transparent_36%)]" : "bg-[radial-gradient(circle_at_12%_50%,rgba(34,211,238,0.11),transparent_36%)]")} />
                        <span aria-hidden="true" className={"absolute -left-10 top-1/2 hidden h-px w-14 origin-right scale-x-50 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none lg:block " + (index === 0 ? "bg-primary shadow-[0_0_15px_rgba(119,252,117,0.45)]" : "bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)]")} />
                        <div className="relative z-10 flex items-start gap-4">
                          <span className={"flex size-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 motion-reduce:transition-none " + (index === 0 ? "bg-primary/12 text-primary group-hover:bg-primary group-hover:text-black" : "bg-cyan-300/10 text-cyan-300 group-hover:bg-cyan-300 group-hover:text-black")}><Icon className="size-6" /></span>
                          <div className="min-w-0"><span className={"font-mono text-base uppercase " + (index === 0 ? "text-primary" : "text-cyan-300")}>Route / 0{index + 1} · {meta.code}</span><h3 className="mt-3 text-2xl font-bold leading-tight text-white">{link.title}</h3><p className="mt-4 max-w-2xl text-base leading-[1.8] text-white/57">{link.text}</p></div>
                        </div>
                        <div className="relative z-10 mt-6 flex flex-wrap items-end justify-between gap-4 pl-0 sm:pl-16">
                          <div className="hidden flex-wrap gap-2 sm:flex">{meta[language].map((tag) => <span key={tag} className="rounded-full bg-white/[0.05] px-3 py-2 text-base text-white/52">{tag}</span>)}</div>
                          <span className={"inline-flex items-center gap-2 text-base font-semibold " + (index === 0 ? "text-primary" : "text-cyan-300")}>{link.cta}<ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none" /></span>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px]">
          <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[3.2rem_1.5rem_3.6rem_1.8rem] border border-white/25 bg-[linear-gradient(115deg,rgba(255,255,255,0.075),rgba(255,255,255,0.015)_38%,rgba(34,211,238,0.045)_72%,rgba(119,252,117,0.06))] px-7 py-12 shadow-[inset_0_2px_0_rgba(255,255,255,0.24),inset_0_-2px_0_rgba(119,252,117,0.1),0_45px_110px_rgba(0,0,0,0.5),0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-3xl md:px-14 md:py-16">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(34,211,238,0.15),transparent_28%),radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.08),transparent_32%)]" />
            <div aria-hidden="true" className="absolute inset-x-[7%] top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div aria-hidden="true" className="absolute -bottom-8 right-[8%] rotate-[-8deg] space-y-2 font-mono text-base leading-relaxed text-cyan-300/16">
              <p>view_item · add_to_cart · begin_checkout</p><p>purchase · revenue · attribution</p><p>baseline / experiment / measurement</p>
            </div>
            <div aria-hidden="true" className="absolute bottom-[22%] right-[2%] h-px w-[62%] rotate-[-8deg] animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.55),rgba(119,252,117,0.8),transparent)] bg-[length:200%_100%] shadow-[0_0_25px_rgba(119,252,117,0.35)] motion-reduce:animate-none" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div><LineChart className="mb-5 size-8 text-primary" /><h2 className="max-w-4xl text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.ctaTitle}</h2><p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.ctaText}</p></div>
              <a href={localizedPath("/diagnosis")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-[0_0_28px_rgba(119,252,117,0.22)] transition-all hover:brightness-110 active:scale-[0.98]">{text.primaryCta}<ArrowUpRight className="size-4" /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
