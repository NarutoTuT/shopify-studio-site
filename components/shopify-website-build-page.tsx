"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Clock3, Code2, FileText, Gauge, HelpCircle, Layers3, MonitorSmartphone, PackageCheck, Rocket, Search, ShieldCheck, ShoppingBag, ShoppingCart, Smartphone } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
      { title: "模板限制品牌表达", mobileTitle: "模板限制", text: "主题结构无法承载品牌故事、产品卖点和活动页面需求。", impact: "品牌差异被压缩成通用模板，用户难以快速理解产品价值。", areas: ["Homepage", "PDP", "Campaign"], action: "重构可配置 Section 与内容层级，让品牌叙事和转化路径同时成立。", icon: Layers3 },
      { title: "网站速度影响体验", mobileTitle: "网站速度", text: "页面加载慢、图片和脚本过重，会直接影响移动端耐心和转化。", impact: "首屏等待时间增加，移动端跳出率和结账流失风险同步上升。", areas: ["Images", "Scripts", "Apps"], action: "审计资源体积、脚本执行和加载优先级，优先修复关键体验路径。", icon: Gauge },
      { title: "App 太多导致性能下降", mobileTitle: "App 依赖", text: "插件堆叠让页面变慢，也让后续排查和维护成本上升。", impact: "重复脚本与功能冲突持续累积，问题定位和版本升级越来越困难。", areas: ["Runtime", "Cart", "Analytics"], action: "清点 App 依赖，移除重复能力，并用主题原生方案替代高成本插件。", icon: ShoppingBag },
      { title: "Theme 修改越来越混乱", mobileTitle: "Theme 混乱", text: "临时改动不断叠加，导致代码、Section 和模板难以继续迭代。", impact: "一次局部修改可能引发多页面回归，活动上线速度持续下降。", areas: ["Liquid", "CSS", "Templates"], action: "整理覆盖规则并组件化高频模块，建立可回归验证的主题结构。", icon: Code2 },
      { title: "移动端体验不足", mobileTitle: "移动端体验", text: "核心信息、CTA、商品模块和购买路径在手机端不够清晰。", impact: "关键卖点与购买动作被挤出首屏，触控阻力直接影响转化效率。", areas: ["First View", "PDP", "Cart"], action: "重排移动端内容顺序，优化触控区域，并强化关键购买动作的可见性。", icon: Smartphone },
      { title: "后续维护困难", mobileTitle: "维护困难", text: "缺少清晰模块和交付边界，每次优化都变成重新修补。", impact: "运营无法独立更新内容，每次活动和页面调整都重新依赖开发。", areas: ["Theme Editor", "Schema", "Handoff"], action: "补齐可编辑配置、模块说明与交付文档，让日常运营可以安全迭代。", icon: ShieldCheck },
    ],
    solutionTitle: "Shopify Engineering 方法",
    solutionIntro: "我们把 Shopify 技术建设当作增长基础，而不是一次性的页面开发。",
    solutions: [
      { title: "Shopify Theme Development", mobileTitle: "Theme Development", build: "搭建清晰、可扩展的主题结构与页面基础。", value: "减少临时覆盖和重复代码，让后续活动与页面迭代更稳定。", deliverables: ["Theme architecture", "Reusable templates", "Editor-ready structure"], icon: Code2 },
      { title: "Liquid Development", mobileTitle: "Liquid Development", build: "开发符合业务逻辑的 Liquid 模板、数据展示与动态功能。", value: "把平台原生能力转化为品牌需要的商品、内容和购买体验。", deliverables: ["Liquid logic", "Dynamic templates", "Native integrations"], icon: FileText },
      { title: "Custom Sections", mobileTitle: "Custom Sections", build: "创建运营可配置的品牌、商品和活动页面模块。", value: "减少每次内容更新对开发的依赖，同时保持视觉和结构一致。", deliverables: ["Section schema", "Editable content", "Reusable modules"], icon: Layers3 },
      { title: "Performance Optimization", mobileTitle: "Performance", build: "优化图片、第三方脚本、资源加载顺序和关键页面执行效率。", value: "降低移动端等待和跳出风险，让浏览与购买路径更顺畅。", deliverables: ["Performance audit", "Asset cleanup", "Validation record"], icon: Gauge },
      { title: "Technical SEO", mobileTitle: "Technical SEO", build: "完善页面层级、元信息、内部链接与可抓取的结构化内容。", value: "让搜索引擎更容易理解和收录页面，为后续内容增长建立基础。", deliverables: ["SEO structure", "Metadata baseline", "Crawl checks"], icon: Search },
      { title: "Launch QA", mobileTitle: "Launch QA", build: "验证核心页面、移动端、交互、表单与上线前技术状态。", value: "在正式发布前发现回归和阻塞，降低上线后的修复成本。", deliverables: ["Responsive QA", "Launch checklist", "Issue handoff"], icon: ShieldCheck },
    ],
    workTitle: "What We Work On",
    workIntro: "适合新站建设，也适合已有 Shopify 店铺的技术升级、重建和性能清理。",
    workItems: [
      { title: "Shopify 新站建设", mobileTitle: "新站建设", description: "从信息架构、主题结构到核心页面，建立可以直接承接品牌增长的新店铺。", result: "获得完整、响应式并可由运营持续编辑的 Shopify 店铺基础。", includes: ["Homepage", "Collection", "PDP"], preview: "build", icon: MonitorSmartphone },
      { title: "Existing Store Rebuild", mobileTitle: "店铺重建", description: "保留有效内容与数据，重新整理旧主题、页面结构和移动端体验。", result: "减少历史改动负担，在更稳定的主题基础上继续迭代。", includes: ["Before / After", "Theme migration", "Mobile rebuild"], preview: "rebuild", icon: Layers3 },
      { title: "Theme Customization", mobileTitle: "主题定制", description: "围绕品牌视觉和运营需求，定制主题组件、布局与交互细节。", result: "避免千篇一律的模板感，同时保留 Shopify 后台可编辑能力。", includes: ["Brand UI", "Theme settings", "Interactions"], preview: "theme", icon: Code2 },
      { title: "Custom PDP Sections", mobileTitle: "PDP 定制", description: "为商品卖点、规格、对比、信任与购买决策创建专属 PDP 模块。", result: "让用户更快理解商品差异，并缩短从浏览到购买的路径。", includes: ["Product story", "Specifications", "Purchase UI"], preview: "pdp", icon: ShoppingBag },
      { title: "Landing Pages", mobileTitle: "活动页面", description: "为新品、广告流量和营销活动构建聚焦单一目标的落地页面。", result: "让视觉、卖点与 CTA 围绕同一转化目标协同工作。", includes: ["Campaign hero", "Offer flow", "CTA system"], preview: "landing", icon: ArrowUpRight },
      { title: "Performance Cleanup", mobileTitle: "性能清理", description: "排查图片、脚本、App 和主题资源，清理影响关键页面速度的技术负担。", result: "改善移动端加载体验，并建立可继续监测的性能基线。", includes: ["Core Web Vitals", "Script audit", "Asset cleanup"], preview: "performance", icon: Gauge },
      { title: "Technical Improvements", mobileTitle: "技术升级", description: "修复 Liquid、Section、模板与上线流程中持续影响维护的问题。", result: "让主题代码、运营配置和质量检查形成更可靠的技术系统。", includes: ["Liquid cleanup", "Section schema", "QA workflow"], preview: "technical", icon: ShieldCheck },
    ],
    deliverablesTitle: "Deliverables",
    deliverablesIntro: "交付重点是让 Shopify 店铺更容易上线、迭代、维护和继续做转化优化。",
    deliverables: [
      { title: "Shopify Theme Implementation", mobileTitle: "Theme 实现", format: "可运行的主题包、模板与资源文件。", validation: ["Theme build", "Template review", "Editor check"], value: "可以继续发布页面、创建活动并进行后续主题迭代。", status: "VERIFIED", icon: Code2 },
      { title: "Custom Sections", mobileTitle: "自定义 Sections", format: "带 Schema 和后台配置项的可复用 Section。", validation: ["Schema valid", "Editor lifecycle", "Content states"], value: "运营可以在 Theme Editor 中安全调整内容和模块顺序。", status: "READY", icon: Layers3 },
      { title: "Page Structure Optimization", mobileTitle: "页面结构", format: "页面层级、模板分配和核心内容结构。", validation: ["Page map", "Template assignment", "Content hierarchy"], value: "用户与运营都能更清楚地理解页面关系和信息优先级。", status: "VERIFIED", icon: FileText },
      { title: "Mobile QA", mobileTitle: "移动端 QA", format: "响应式检查记录、问题修复和设备验证结果。", validation: ["375 / 390px", "Tablet", "Desktop"], value: "核心页面和购买路径可以在常见设备宽度下稳定使用。", status: "PASSED", icon: Smartphone },
      { title: "Performance Improvements", mobileTitle: "性能优化", format: "性能问题清单、已完成修复和验证结果。", validation: ["Asset audit", "Script review", "Critical pages"], value: "获得更轻的页面资源以及可以继续监测的性能基线。", status: "VERIFIED", icon: Gauge },
      { title: "Launch Checklist", mobileTitle: "上线清单", format: "上线前技术、页面、表单和关键配置检查表。", validation: ["Forms", "Analytics", "Redirects"], value: "团队可以依据清单完成发布，并明确后续需要持续观察的项目。", status: "READY", icon: ShieldCheck },
    ],
    processTitle: "Working Process",
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
      { title: "Templates limit brand expression", mobileTitle: "Template limits", text: "Theme structure cannot support brand story, product value, or campaign needs.", impact: "Brand differentiation gets flattened into generic templates, making product value harder to understand.", areas: ["Homepage", "PDP", "Campaign"], action: "Rebuild configurable sections and content hierarchy so brand storytelling supports conversion.", icon: Layers3 },
      { title: "Speed hurts experience", mobileTitle: "Site speed", text: "Slow loading, heavy images, and scripts reduce patience and conversion on mobile.", impact: "Longer first-view waits increase mobile bounce and create more drop-off before checkout.", areas: ["Images", "Scripts", "Apps"], action: "Audit asset weight, script execution, and loading priority across the critical journey.", icon: Gauge },
      { title: "Too many apps hurt performance", mobileTitle: "App stack", text: "App stacking slows pages and increases future troubleshooting cost.", impact: "Duplicate scripts and conflicts accumulate, making diagnosis and upgrades increasingly expensive.", areas: ["Runtime", "Cart", "Analytics"], action: "Audit dependencies, remove duplicated features, and replace heavy apps with native theme solutions.", icon: ShoppingBag },
      { title: "Theme edits become messy", mobileTitle: "Theme edits", text: "Temporary fixes stack up until sections, templates, and code become hard to iterate.", impact: "A small change can trigger regressions across several pages and slow every campaign launch.", areas: ["Liquid", "CSS", "Templates"], action: "Clean up overrides and componentize recurring modules with a verifiable theme structure.", icon: Code2 },
      { title: "Mobile UX is weak", mobileTitle: "Mobile UX", text: "Key information, CTAs, product modules, and purchase paths are unclear on small screens.", impact: "Product value and purchase actions fall below the fold, adding friction to conversion.", areas: ["First View", "PDP", "Cart"], action: "Reorder mobile content, improve touch targets, and keep critical purchase actions visible.", icon: Smartphone },
      { title: "Maintenance gets difficult", mobileTitle: "Maintenance", text: "Without clear modules and delivery boundaries, every optimization becomes another patch.", impact: "Merchants cannot update content safely, so every campaign remains dependent on development.", areas: ["Theme Editor", "Schema", "Handoff"], action: "Add editable settings, module guidance, and handoff documentation for safe daily iteration.", icon: ShieldCheck },
    ],
    solutionTitle: "Shopify Engineering Method",
    solutionIntro: "We treat Shopify engineering as a growth foundation, not a one-time page build.",
    solutions: [
      { title: "Shopify Theme Development", mobileTitle: "Theme Development", build: "Build a clear and extensible theme architecture for every core page.", value: "Reduce temporary overrides and duplicated code so future campaigns remain stable.", deliverables: ["Theme architecture", "Reusable templates", "Editor-ready structure"], icon: Code2 },
      { title: "Liquid Development", mobileTitle: "Liquid Development", build: "Develop business-specific Liquid templates, data presentation, and dynamic behavior.", value: "Turn native Shopify capabilities into the product, content, and purchase experience the brand needs.", deliverables: ["Liquid logic", "Dynamic templates", "Native integrations"], icon: FileText },
      { title: "Custom Sections", mobileTitle: "Custom Sections", build: "Create configurable brand, product, and campaign modules for daily operations.", value: "Reduce developer dependency while keeping visual and structural consistency.", deliverables: ["Section schema", "Editable content", "Reusable modules"], icon: Layers3 },
      { title: "Performance Optimization", mobileTitle: "Performance", build: "Optimize images, third-party scripts, resource priority, and critical-page execution.", value: "Reduce mobile wait and bounce risk while keeping browsing and purchase journeys responsive.", deliverables: ["Performance audit", "Asset cleanup", "Validation record"], icon: Gauge },
      { title: "Technical SEO", mobileTitle: "Technical SEO", build: "Improve page hierarchy, metadata, internal links, and crawlable structured content.", value: "Help search engines understand and index the site as a foundation for future content growth.", deliverables: ["SEO structure", "Metadata baseline", "Crawl checks"], icon: Search },
      { title: "Launch QA", mobileTitle: "Launch QA", build: "Validate critical pages, mobile behavior, interactions, forms, and launch readiness.", value: "Catch regressions and blockers before release to reduce post-launch repair cost.", deliverables: ["Responsive QA", "Launch checklist", "Issue handoff"], icon: ShieldCheck },
    ],
    workTitle: "What We Work On",
    workIntro: "For new Shopify builds, existing store rebuilds, technical upgrades, and performance cleanup.",
    workItems: [
      { title: "New Shopify Build", mobileTitle: "New build", description: "Create a growth-ready store from information architecture and theme structure through every core page.", result: "Launch with a complete, responsive Shopify foundation that merchants can continue editing.", includes: ["Homepage", "Collection", "PDP"], preview: "build", icon: MonitorSmartphone },
      { title: "Existing Store Rebuild", mobileTitle: "Store rebuild", description: "Keep useful content and data while rebuilding legacy theme structure, pages, and mobile UX.", result: "Reduce historical theme debt and continue iteration on a more stable foundation.", includes: ["Before / After", "Theme migration", "Mobile rebuild"], preview: "rebuild", icon: Layers3 },
      { title: "Theme Customization", mobileTitle: "Customization", description: "Customize theme components, layouts, and interactions around brand and operational needs.", result: "Move beyond generic templates while preserving Theme Editor flexibility.", includes: ["Brand UI", "Theme settings", "Interactions"], preview: "theme", icon: Code2 },
      { title: "Custom PDP Sections", mobileTitle: "Custom PDP", description: "Create dedicated PDP modules for product value, specifications, comparison, trust, and purchase decisions.", result: "Help shoppers understand product differences faster and shorten the path to purchase.", includes: ["Product story", "Specifications", "Purchase UI"], preview: "pdp", icon: ShoppingBag },
      { title: "Landing Pages", mobileTitle: "Landing pages", description: "Build focused landing pages for launches, paid traffic, and marketing campaigns.", result: "Align visual story, product value, and CTAs around one conversion objective.", includes: ["Campaign hero", "Offer flow", "CTA system"], preview: "landing", icon: ArrowUpRight },
      { title: "Performance Cleanup", mobileTitle: "Performance", description: "Audit images, scripts, apps, and theme assets that slow down critical pages.", result: "Improve mobile loading and establish a performance baseline that can be monitored.", includes: ["Core Web Vitals", "Script audit", "Asset cleanup"], preview: "performance", icon: Gauge },
      { title: "Technical Improvements", mobileTitle: "Technical", description: "Repair recurring Liquid, section, template, and launch workflow issues.", result: "Create a more reliable system across theme code, merchant settings, and quality checks.", includes: ["Liquid cleanup", "Section schema", "QA workflow"], preview: "technical", icon: ShieldCheck },
    ],
    deliverablesTitle: "Deliverables",
    deliverablesIntro: "The goal is to make the Shopify store easier to launch, iterate, maintain, and optimize.",
    deliverables: [
      { title: "Shopify Theme Implementation", mobileTitle: "Theme build", format: "A working theme package with templates and storefront assets.", validation: ["Theme build", "Template review", "Editor check"], value: "Continue publishing pages, launching campaigns, and iterating on the theme.", status: "VERIFIED", icon: Code2 },
      { title: "Custom Sections", mobileTitle: "Custom sections", format: "Reusable sections with schemas and merchant-facing settings.", validation: ["Schema valid", "Editor lifecycle", "Content states"], value: "Merchants can safely update content and reorder modules in Theme Editor.", status: "READY", icon: Layers3 },
      { title: "Page Structure Optimization", mobileTitle: "Page structure", format: "Page hierarchy, template assignments, and core content structure.", validation: ["Page map", "Template assignment", "Content hierarchy"], value: "Customers and merchants can understand page relationships and content priority.", status: "VERIFIED", icon: FileText },
      { title: "Mobile QA", mobileTitle: "Mobile QA", format: "Responsive checks, issue fixes, and device validation results.", validation: ["375 / 390px", "Tablet", "Desktop"], value: "Core pages and purchase journeys remain usable across common viewport sizes.", status: "PASSED", icon: Smartphone },
      { title: "Performance Improvements", mobileTitle: "Performance", format: "Performance findings, completed fixes, and validation results.", validation: ["Asset audit", "Script review", "Critical pages"], value: "Receive a lighter storefront and a performance baseline that can be monitored.", status: "VERIFIED", icon: Gauge },
      { title: "Launch Checklist", mobileTitle: "Launch checklist", format: "Pre-launch checks covering technical, page, form, and critical configuration states.", validation: ["Forms", "Analytics", "Redirects"], value: "Launch from a clear checklist and know what requires continued monitoring.", status: "READY", icon: ShieldCheck },
    ],
    processTitle: "Working Process",
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
  zh: {
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
  },
  en: {
    breadcrumbs: [
      { name: "Home", url: "https://whaleleap.studio/en" },
      { name: "Services", url: "https://whaleleap.studio/en#services" },
      { name: "Shopify Engineering", url: "https://whaleleap.studio/en/services/shopify-website-build" },
    ],
    service: {
      name: "Shopify Engineering",
      description: "Shopify engineering for cross-border brands, including theme development, Liquid modules, custom sections, performance foundations, technical SEO, and launch QA.",
      url: "https://whaleleap.studio/en/services/shopify-website-build",
    },
  },
}

const storefrontProducts = [
  { name: "Trail Shell", price: "128", src: "/images/website-build/trail-shell.webp", alt: "Black technical trail shell jacket" },
  { name: "Motion Pack", price: "96", src: "/images/website-build/motion-pack.webp", alt: "Black technical trail backpack" },
  { name: "Field Bottle", price: "42", src: "/images/website-build/field-bottle.webp", alt: "Forest green insulated trail bottle" },
]

const websiteBuildFaqMeta = [
  { code: "ENGINEERING", zh: ["技术基础", "持续迭代", "增长承载"], en: ["Foundation", "Iteration", "Growth"] },
  { code: "REBUILD", zh: ["现有店铺", "风险评估", "重建判断"], en: ["Existing store", "Risk review", "Rebuild"] },
  { code: "LIQUID", zh: ["主题开发", "Custom Sections", "PDP"], en: ["Theme build", "Custom sections", "PDP"] },
  { code: "SPEED", zh: ["图片资源", "脚本审查", "移动端"], en: ["Assets", "Scripts", "Mobile"] },
  { code: "SEO", zh: ["页面层级", "元信息", "上线检查"], en: ["Hierarchy", "Metadata", "Launch checks"] },
  { code: "START", zh: ["免费诊断", "优先级", "实施范围"], en: ["Free review", "Priorities", "Scope"] },
]

function DesktopStorefrontPreview() {
  return (
    <div className="min-w-0 overflow-hidden rounded-[1.45rem] bg-[#e9e4dc] text-[#131713] shadow-[0_28px_70px_rgba(0,0,0,0.38)]">
      <div className="flex h-10 items-center gap-2 bg-[#111512] px-4 text-white/45">
        <span className="size-2 rounded-full bg-[#ff7657]/75" /><span className="size-2 rounded-full bg-[#ffad4a]/75" /><span className="size-2 rounded-full bg-primary/75" />
        <span className="ml-2 truncate font-mono text-base tracking-[-0.03em]">preview.shopify.com</span>
        <span className="ml-auto hidden font-mono text-base text-primary/70 sm:block">Desktop / 1440</span>
      </div>

      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <strong className="font-mono text-base tracking-[0.08em]">NORTH / FORM</strong>
        <div className="hidden items-center gap-4 text-base text-black/48 sm:flex"><span>Shop</span><span>Story</span><span>Journal</span></div>
        <span className="flex size-9 items-center justify-center rounded-full bg-black text-white"><ShoppingBag className="size-4" /></span>
      </div>

      <div className="relative mx-3 h-[185px] overflow-hidden rounded-[1.15rem] bg-[#17221b] px-5 py-5 text-white sm:mx-5 sm:h-[195px] sm:px-8 sm:py-5">
        <Image src="/images/website-build/storefront-campaign-hero.webp" alt="Outdoor apparel campaign showing a technical shell jacket in a misty mountain environment" fill priority sizes="(max-width: 1024px) 90vw, 44vw" className="object-cover object-[66%_48%]" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,13,0.94),rgba(10,18,13,0.68)_44%,rgba(10,18,13,0.08)_72%)]" />
        <div className="relative">
          <p className="font-mono text-base uppercase tracking-[0.06em] text-primary">New collection / 2026</p>
          <h2 className="mt-2 max-w-[360px] text-[clamp(1.35rem,2.2vw,1.75rem)] font-bold leading-[1.04] tracking-[-0.025em]">Built for movement.<br />Designed to convert.</h2>
          <span className="mt-4 inline-flex min-h-10 items-center rounded-full bg-primary px-5 text-base font-bold text-black">Shop collection</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 px-3 pb-4 pt-3 sm:gap-3 sm:px-5 sm:pb-5">
        {storefrontProducts.map((product) => (
          <div key={product.name} className="min-w-0">
            <div className="relative h-24 overflow-hidden rounded-[0.85rem] bg-[#b8c3b6]">
              <Image src={product.src} alt={product.alt} fill sizes="(max-width: 640px) 28vw, 12vw" className="object-cover transition-transform duration-500 hover:scale-105 motion-reduce:transition-none" />
            </div>
            <strong className="mt-2 block truncate text-base">{product.name}</strong>
            <span className="block text-base text-black/48">$ {product.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MobileStorefrontPreview() {
  return (
    <div className="w-full max-w-[185px] rounded-[1.7rem] bg-[#090d0b] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_26px_58px_rgba(0,0,0,0.48),0_0_34px_rgba(34,211,238,0.11)] ring-1 ring-white/10">
      <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-white/12" />
      <div className="overflow-hidden rounded-[1.25rem] bg-[#e9e4dc] text-[#111512]">
        <div className="flex items-center justify-between px-3 py-3"><strong className="font-mono text-base">N/F</strong><ShoppingCart className="size-4" /></div>
        <div className="relative aspect-[0.9/1] bg-[#677466]">
          <Image src="/images/website-build/trail-shell.webp" alt="Trail Shell product preview on mobile storefront" fill sizes="185px" className="object-cover" />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-white/5" />
          <span className="absolute bottom-3 left-3 rounded-full bg-primary px-2.5 py-1 font-mono text-base font-semibold">New</span>
        </div>
        <div className="p-3"><strong className="block text-base">Trail Shell</strong><span className="mt-1 block text-base text-black/50">$128 · 3 colors</span><span className="mt-3 flex min-h-10 items-center justify-center rounded-full bg-black text-base font-semibold text-white">Add to cart</span></div>
      </div>
    </div>
  )
}

type ScopePreview = "build" | "rebuild" | "theme" | "pdp" | "landing" | "performance" | "technical"

function ScopeVisual({ type, language, compact = false }: { type: ScopePreview; language: "zh" | "en"; compact?: boolean }) {
  const isZh = language === "zh"

  if (type === "rebuild") {
    return (
      <div className={`grid grid-cols-2 overflow-hidden rounded-[1.25rem] bg-[#ddd9d1] text-black ${compact ? "min-h-[310px]" : "min-h-[360px] sm:min-h-[430px]"}`}>
        <div className="relative overflow-hidden border-r border-black/10 p-4 grayscale sm:p-6">
          <Image src="/images/website-build/storefront-campaign-hero.webp" alt="Legacy storefront before rebuild" fill sizes="(max-width: 1024px) 45vw, 28vw" className="object-cover opacity-48" />
          <span aria-hidden="true" className="absolute inset-0 bg-white/48" />
          <div className="relative flex h-full flex-col justify-between">
            <span className="w-fit rounded-full bg-black/8 px-3 py-1.5 font-mono text-base">BEFORE / LEGACY</span>
            <div><p className="text-base font-semibold">Generic theme</p><p className="mt-2 text-base leading-relaxed text-black/50">Slow · rigid · difficult to maintain</p></div>
          </div>
        </div>
        <div className="relative overflow-hidden bg-[#0b1510] p-4 text-white sm:p-6">
          <Image src="/images/website-build/trail-shell.webp" alt="Modern storefront after Shopify rebuild" fill sizes="(max-width: 1024px) 45vw, 28vw" className="object-cover opacity-72" />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
          <div className="relative flex h-full flex-col justify-between">
            <span className="w-fit rounded-full bg-primary px-3 py-1.5 font-mono text-base font-semibold text-black">AFTER / REBUILT</span>
            <div><p className="text-lg font-bold">Growth-ready system</p><p className="mt-2 text-base leading-relaxed text-white/65">Responsive · editable · scalable</p></div>
          </div>
        </div>
      </div>
    )
  }

  if (type === "theme") {
    if (compact) {
      return (
        <div className="overflow-hidden rounded-[1.25rem] bg-[#d8d3ca] p-3 text-black">
          <div className="relative min-h-[230px] overflow-hidden rounded-[1rem] bg-[#132019]">
            <Image src="/images/website-build/motion-pack.webp" alt="Branded Shopify theme customization preview" fill sizes="88vw" className="object-cover" />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/74 via-transparent to-transparent" />
            <div className="absolute inset-x-4 bottom-4 text-white"><p className="font-mono text-base text-primary">CUSTOM THEME / 03</p><p className="mt-1 text-lg font-bold">Built around the brand.</p></div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">{["#77FC75", "#111512", "#E9E4DC"].map((color, index) => <div key={color} className="flex min-h-12 items-center justify-center rounded-[0.8rem] font-mono text-base" style={{ backgroundColor: color, color: index === 1 ? "white" : "black" }}>{index === 0 ? "Brand" : index === 1 ? "Base" : "Surface"}</div>)}</div>
        </div>
      )
    }
    return (
      <div className="grid min-h-[360px] gap-3 overflow-hidden rounded-[1.25rem] bg-[#d8d3ca] p-4 text-black sm:min-h-[430px] sm:grid-cols-[1fr_0.42fr] sm:p-6">
        <div className="relative min-h-64 overflow-hidden rounded-[1rem] bg-[#132019]">
          <Image src="/images/website-build/motion-pack.webp" alt="Branded Shopify theme customization preview" fill sizes="(max-width: 640px) 86vw, 35vw" className="object-cover" />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute inset-x-4 bottom-4 text-white"><p className="font-mono text-base text-primary">CUSTOM THEME / 03</p><p className="mt-2 text-xl font-bold">Built around the brand.</p></div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
          {["#77FC75", "#111512", "#E9E4DC"].map((color, index) => <div key={color} className="flex min-h-16 items-end rounded-[0.9rem] p-3 font-mono text-base" style={{ backgroundColor: color, color: index === 1 ? "white" : "black" }}>{color}</div>)}
          <div className="col-span-2 rounded-[0.9rem] bg-white p-3 text-base font-semibold sm:col-span-1">Theme Editor<br /><span className="font-normal text-black/48">Flexible settings</span></div>
        </div>
      </div>
    )
  }

  if (type === "pdp") {
    if (compact) {
      return (
        <div className="relative min-h-[320px] overflow-hidden rounded-[1.25rem] bg-[#738073] text-black">
          <Image src="/images/website-build/trail-shell.webp" alt="Custom Shopify product detail page preview" fill sizes="88vw" className="object-cover" />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-white/8" />
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 font-mono text-base">PDP / CUSTOM</span>
          <div className="absolute inset-x-4 bottom-4 rounded-[1rem] bg-black/70 p-4 text-white backdrop-blur-xl"><div className="flex items-end justify-between gap-3"><div><p className="font-mono text-base text-primary">NORTH / FORM</p><h3 className="mt-1 text-xl font-bold">Trail Shell</h3><p className="mt-1 text-base text-white/58">$128 · Waterproof</p></div><span className="flex min-h-12 items-center rounded-full bg-primary px-4 text-base font-bold text-black">Add to cart</span></div></div>
        </div>
      )
    }
    return (
      <div className="grid min-h-[360px] overflow-hidden rounded-[1.25rem] bg-[#e8e3db] text-black sm:min-h-[430px] sm:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-72 bg-[#738073]"><Image src="/images/website-build/trail-shell.webp" alt="Custom Shopify product detail page preview" fill sizes="(max-width: 640px) 90vw, 32vw" className="object-cover" /><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 font-mono text-base">PDP / CUSTOM</span></div>
        <div className="flex flex-col justify-between p-5 sm:p-7"><div><p className="font-mono text-base text-black/42">NORTH / FORM</p><h3 className="mt-3 text-2xl font-bold">Trail Shell</h3><p className="mt-2 text-base text-black/55">$128 · Waterproof · 3 colors</p><div className="mt-6 grid grid-cols-3 gap-2">{["Shell", "Fit", "Care"].map((item) => <span key={item} className="rounded-lg bg-black/5 px-2 py-3 text-center text-base">{item}</span>)}</div></div><span className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-black text-base font-bold text-white">Add to cart</span></div>
      </div>
    )
  }

  if (type === "landing") {
    return (
      <div className={`relative overflow-hidden rounded-[1.25rem] bg-[#0d1611] text-white ${compact ? "min-h-[320px]" : "min-h-[360px] sm:min-h-[430px]"}`}>
        <Image src="/images/website-build/storefront-campaign-hero.webp" alt="Shopify campaign landing page preview" fill sizes="(max-width: 1024px) 90vw, 58vw" className="object-cover object-[64%_50%]" />
        <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/52 to-transparent" />
        <div className={`relative flex max-w-lg flex-col justify-center p-6 sm:p-10 ${compact ? "min-h-[320px]" : "min-h-[360px] sm:min-h-[430px]"}`}><p className="font-mono text-base text-primary">CAMPAIGN / DROP 01</p><h3 className="mt-4 text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[0.98]">Move faster.<br />Stay outside.</h3><p className={`${compact ? "mt-3" : "mt-5"} text-base leading-relaxed text-white/68`}>{isZh ? "围绕一个活动目标组织视觉、卖点与购买行动。" : "One campaign objective across story, value, and action."}</p><span className={`${compact ? "mt-4" : "mt-7"} inline-flex min-h-12 w-fit items-center rounded-full bg-primary px-6 text-base font-bold text-black`}>Shop the drop</span></div>
      </div>
    )
  }

  if (type === "performance") {
    const metrics = [["Performance", 94, "+31"], ["LCP", 86, "1.8s"], ["Accessibility", 98, "+12"]] as const
    return (
      <div className={`rounded-[1.25rem] bg-[#07100b] text-white ${compact ? "min-h-[320px] p-4" : "min-h-[360px] p-5 sm:min-h-[430px] sm:p-8"}`}>
        <div className="flex items-center justify-between gap-4"><div><p className="font-mono text-base text-primary">PERFORMANCE CLEANUP</p><h3 className="mt-2 text-2xl font-bold">Storefront health</h3></div><span className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary shadow-[inset_0_0_0_1px_rgba(119,252,117,0.18),0_0_28px_rgba(119,252,117,0.12)]">94</span></div>
        <div className={`${compact ? "mt-5 gap-3" : "mt-8 gap-4"} grid`}>{(compact ? metrics.slice(0, 2) : metrics).map(([label, value, delta]) => <div key={label} className={`rounded-[1rem] bg-white/[0.045] ${compact ? "p-3" : "p-4"}`}><div className="flex justify-between gap-3 text-base"><span>{label}</span><span className="font-mono text-cyan-200">{delta}</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-white/8"><span className="block h-full rounded-full bg-gradient-to-r from-primary to-cyan-300" style={{ width: `${value}%` }} /></div></div>)}</div>
      </div>
    )
  }

  if (type === "technical") {
    return (
      <div className={`overflow-hidden rounded-[1.25rem] bg-[#050806] font-mono text-white ${compact ? "min-h-[320px] p-4" : "min-h-[360px] p-5 sm:min-h-[430px] sm:p-8"}`}>
        <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-5"><span className="text-base text-primary">THEME SYSTEM / VALIDATION</span><span className="flex items-center gap-2 text-base text-cyan-200"><span className="size-2 rounded-full bg-cyan-300" />PASSING</span></div>
        <div className={`${compact ? "mt-4 gap-2" : "mt-6 gap-3"} grid`}>{[["Liquid templates", "Compiled"], ["Section schema", "Validated"], ["Responsive QA", "Passed"], ["Launch checklist", "Ready"]].slice(0, compact ? 3 : 4).map(([label, state], index) => <div key={label} className="flex min-h-14 items-center gap-3 rounded-[0.9rem] bg-white/[0.04] px-4"><span className="text-base text-white/25">0{index + 1}</span><span className="min-w-0 flex-1 text-base text-white/72">{label}</span><span className="text-base text-primary">{state}</span></div>)}</div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-[1.25rem] bg-[#e8e3db] p-4 text-black sm:p-6 ${compact ? "min-h-[320px]" : "min-h-[360px] sm:min-h-[430px]"}`}>
      <div className="flex items-center justify-between gap-4"><strong className="font-mono text-base">NORTH / FORM</strong><span className="font-mono text-base text-black/45">SHOPIFY / LIVE</span></div>
      <div className={`relative mt-4 overflow-hidden rounded-[1rem] bg-[#142019] p-6 text-white sm:p-9 ${compact ? "min-h-[250px]" : "min-h-[280px] sm:min-h-[340px]"}`}><Image src="/images/website-build/storefront-campaign-hero.webp" alt="New Shopify storefront build preview" fill sizes="(max-width: 1024px) 90vw, 58vw" className="object-cover object-[66%_50%]" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/50 to-transparent" /><div className="relative max-w-md"><p className="font-mono text-base text-primary">NEW STOREFRONT / 2026</p><h3 className={`${compact ? "mt-3" : "mt-4"} text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1]`}>Built to launch.<br />Ready to grow.</h3><span className={`${compact ? "mt-5" : "mt-7"} inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-base font-bold text-black`}>Explore collection</span></div></div>
    </div>
  )
}

export function ShopifyWebsiteBuildPage() {
  const { language, localizedPath } = useLanguage()
  const text = copy[language]
  const structuredData = websiteBuildStructuredData[language]
  const [activeProblem, setActiveProblem] = useState(0)
  const [activeSolution, setActiveSolution] = useState(0)
  const [activeWork, setActiveWork] = useState(0)
  const [activeWorkInfo, setActiveWorkInfo] = useState<"scope" | "result">("scope")
  const [activeStorefrontPreview, setActiveStorefrontPreview] = useState<"desktop" | "mobile">("desktop")
  const [activeFaq, setActiveFaq] = useState(0)
  const ActiveProblemIcon = text.problems[activeProblem].icon
  const ActiveSolutionIcon = text.solutions[activeSolution].icon
  const diagnosticLabels = language === "zh"
    ? { scanning: "系统扫描中", indexed: "06 个风险已索引", detected: "检测到风险", signal: "问题信号", impact: "业务影响", areas: "受影响区域", action: "工程解决方案", ready: "修复路径已生成" }
    : { scanning: "System scanning", indexed: "06 risks indexed", detected: "Risk detected", signal: "Risk signal", impact: "Business impact", areas: "Affected areas", action: "Engineering response", ready: "Remediation path ready" }
  const solutionLabels = language === "zh"
    ? { pipeline: "工程流水线", operational: "06 个模块运行就绪", active: "当前工程模块", build: "具体建设", value: "解决价值", output: "最终交付", status: "运行就绪" }
    : { pipeline: "Engineering pipeline", operational: "06 modules operational", active: "Active engineering module", build: "What we build", value: "Why it matters", output: "Deliverables", status: "Operational" }
  const workLabels = language === "zh"
    ? { active: "当前工作场景", suitable: "适用与建设内容", result: "预期结果", includes: "包含范围", previous: "上一个工作范围", next: "下一个工作范围" }
    : { active: "Active work scope", suitable: "Scope and approach", result: "Expected outcome", includes: "Included scope", previous: "Previous work scope", next: "Next work scope" }
  const ActiveWorkIcon = text.workItems[activeWork].icon
  const selectPreviousWork = () => setActiveWork((current) => (current - 1 + text.workItems.length) % text.workItems.length)
  const selectNextWork = () => setActiveWork((current) => (current + 1) % text.workItems.length)
  const deliveryLabels = language === "zh"
    ? { package: "项目交付包", build: "建设文件", buildText: "用于继续运营和页面迭代", verify: "验证记录", verifyText: "用于确认上线质量和技术状态", ready: "全部内容已准备，可以进入交接" }
    : { package: "Project delivery package", build: "Build files", buildText: "For continued operations and page iteration", verify: "Validation records", verifyText: "For launch quality and technical readiness", ready: "Everything is prepared and ready for handoff" }
  const processLabels = language === "zh"
    ? {
        eyebrow: "Delivery workflow / 05",
        intro: "从需求审核到正式上线，每一步都有明确产出和验证。",
        system: "项目交付轨道",
        ready: "05 个阶段已连接",
        steps: [
          { title: "Review", detail: "需求与现状审核", icon: Search },
          { title: "Scope", detail: "明确范围与优先级", icon: Layers3 },
          { title: "Build", detail: "主题、页面与功能开发", icon: Code2 },
          { title: "QA", detail: "多设备与上线前验证", icon: ShieldCheck },
          { title: "Launch", detail: "发布、文档与项目交接", icon: Rocket },
        ],
      }
    : {
        eyebrow: "Delivery workflow / 05",
        intro: "Every stage has a clear output and validation path, from review through launch.",
        system: "Project delivery track",
        ready: "05 stages connected",
        steps: [
          { title: "Review", detail: "Requirements and current-state review", icon: Search },
          { title: "Scope", detail: "Scope and priority definition", icon: Layers3 },
          { title: "Build", detail: "Theme, page, and feature development", icon: Code2 },
          { title: "QA", detail: "Cross-device and pre-launch validation", icon: ShieldCheck },
          { title: "Launch", detail: "Release, documentation, and handoff", icon: Rocket },
        ],
      }
  const fitLabels = language === "zh"
    ? {
        eyebrow: "Ideal partner profile / 04",
        system: "Audience fit scanner",
        matched: "04 / 04 MATCHED",
        coreTop: "Shopify",
        coreMain: "Growth Foundation",
        coreStatus: "TECHNICAL FIT / CONFIRMED",
        details: [
          "需要兼顾品牌表达与长期迭代",
          "需要快速上线且方便运营维护",
          "需要建立独立的内容与转化体系",
          "需要重建、性能清理或结构优化",
        ],
      }
    : {
        eyebrow: "Ideal partner profile / 04",
        system: "Audience fit scanner",
        matched: "04 / 04 MATCHED",
        coreTop: "Shopify",
        coreMain: "Growth Foundation",
        coreStatus: "TECHNICAL FIT / CONFIRMED",
        details: [
          "Needs brand expression with long-term flexibility",
          "Needs a fast launch and merchant-friendly operations",
          "Needs an independent content and conversion system",
          "Needs a rebuild, performance cleanup, or structural upgrade",
        ],
      }
  const fitIcons = [ShoppingBag, MonitorSmartphone, ShoppingCart, Gauge]
  const activeFaqItem = text.faqs[activeFaq]
  const activeFaqMeta = websiteBuildFaqMeta[activeFaq]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData breadcrumbs={structuredData.breadcrumbs} faqItems={text.faqs} service={structuredData.service} language={language} />
      <Navbar />
      <main>
        <section className="relative min-h-[100svh] overflow-hidden px-4 pb-10 pt-28 sm:px-6 md:px-10 md:pb-12 md:pt-32 lg:pb-6 lg:pt-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_74%_34%,rgba(34,211,238,0.105),transparent_31%),radial-gradient(ellipse_at_26%_58%,rgba(119,252,117,0.145),transparent_35%),linear-gradient(135deg,#020403,#07100b_52%,#010202)]" />
          <div aria-hidden="true" className="absolute -inset-x-[18%] -top-[22%] h-[118%] animate-cro-signal-orbit bg-[radial-gradient(ellipse_at_68%_36%,rgba(34,211,238,0.15),transparent_28%),radial-gradient(ellipse_at_32%_68%,rgba(119,252,117,0.19),transparent_31%)] opacity-80 blur-2xl will-change-transform motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.115] [background-image:radial-gradient(circle,rgba(119,252,117,0.34)_1px,transparent_1.4px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.14)_64%,rgba(0,0,0,0.64)_100%)]" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/75 to-transparent" />

          <div className="relative mx-auto flex w-full max-w-[1500px] flex-col lg:min-h-[calc(100svh-7.5rem)]">
            <div className="grid flex-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-7 xl:gap-11">
              <div className="min-w-0">
                <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.12em] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_0_28px_rgba(119,252,117,0.06)]">
                  <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />
                  {text.eyebrow}
                </p>
                <h1 className="max-w-5xl text-balance text-[clamp(2.55rem,4.65vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.025em]">{text.title}</h1>
                <p className="mt-6 max-w-3xl text-lg font-semibold leading-[1.55] text-foreground/90 md:text-xl">{text.subtitle}</p>
                <p className="mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground">{text.description}</p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a href={localizedPath("/diagnosis")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-[0_0_30px_rgba(119,252,117,0.23)] transition-all hover:brightness-110 active:scale-[0.98]">
                    {text.primaryCta}<ArrowUpRight className="size-4" />
                  </a>
                  <a href="#work" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white/[0.045] px-7 text-base font-semibold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-xl transition-colors hover:bg-cyan-300/[0.08]">
                    {text.secondaryCta}
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-2 xl:grid-cols-3">
                  {text.proof.map((item, index) => (
                    <div key={item} className={"flex min-h-[64px] items-center gap-3 rounded-[1.2rem] bg-white/[0.04] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.075)] backdrop-blur-xl " + (index === 2 ? "col-span-2 xl:col-span-1" : "")}>
                      <span className="font-mono text-base text-primary">0{index + 1}</span>
                      <span className="text-base font-medium leading-snug text-foreground/72">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-w-0 overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_78%_22%,rgba(34,211,238,0.09),transparent_28%),radial-gradient(circle_at_18%_78%,rgba(119,252,117,0.1),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_105px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:p-6">
                <div aria-hidden="true" className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(34,211,238,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(circle_at_center,black,transparent_84%)]" />

                <div className="relative flex flex-wrap items-center justify-between gap-3 px-1 font-mono text-base uppercase tracking-[0.04em]">
                  <span className="flex items-center gap-2 text-cyan-300"><MonitorSmartphone className="size-5" />Storefront build / live</span>
                  <span className="flex items-center gap-2 text-primary"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_13px_rgba(119,252,117,0.85)] motion-reduce:animate-none" />Launch ready</span>
                </div>

                <div className="relative mt-5">
                  <div role="group" aria-label={language === "zh" ? "店铺设备预览" : "Storefront device preview"} className="grid grid-cols-2 gap-2 rounded-[1.15rem] bg-black/24 p-1.5 lg:hidden">
                    <button type="button" aria-pressed={activeStorefrontPreview === "desktop"} onClick={() => setActiveStorefrontPreview("desktop")} className={"min-h-12 rounded-[0.9rem] px-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary " + (activeStorefrontPreview === "desktop" ? "bg-primary text-black shadow-[0_0_22px_rgba(119,252,117,0.16)]" : "text-white/52 hover:bg-white/[0.045] hover:text-white")}>Desktop Storefront</button>
                    <button type="button" aria-pressed={activeStorefrontPreview === "mobile"} onClick={() => setActiveStorefrontPreview("mobile")} className={"min-h-12 rounded-[0.9rem] px-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary " + (activeStorefrontPreview === "mobile" ? "bg-cyan-300 text-black shadow-[0_0_22px_rgba(34,211,238,0.16)]" : "text-white/52 hover:bg-white/[0.045] hover:text-white")}>Mobile PDP</button>
                  </div>

                  <div className="mt-4 hidden min-h-[490px] grid-cols-[minmax(0,1fr)_185px] gap-4 lg:grid">
                    <DesktopStorefrontPreview />
                    <div className="flex min-w-0 items-center justify-center overflow-hidden rounded-[1.45rem] bg-black/22 px-2 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <MobileStorefrontPreview />
                    </div>
                  </div>

                  <div aria-live="polite" className="mt-4 min-h-[470px] lg:hidden">
                    {activeStorefrontPreview === "desktop" ? (
                      <div key="desktop-preview" className="animate-in fade-in duration-300 motion-reduce:animate-none"><DesktopStorefrontPreview /></div>
                    ) : (
                      <div key="mobile-preview" className="flex min-h-[470px] items-center justify-center rounded-[1.45rem] bg-black/22 px-4 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] animate-in fade-in duration-300 motion-reduce:animate-none"><MobileStorefrontPreview /></div>
                    )}
                  </div>
                </div>

                <div className="relative mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[
                    ["Theme", "Synced"],
                    ["Liquid", "Compiled"],
                    ["Performance", "94 / 100"],
                    ["Responsive QA", "Passed"],
                  ].map(([label, status], index) => (
                    <div key={label} className="rounded-[1rem] bg-black/28 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                      <span className="block font-mono text-base leading-tight text-white/38">{label}</span>
                      <strong className={"mt-1.5 flex items-center gap-2 text-base leading-tight " + (index === 2 ? "text-cyan-200" : "text-primary")}><CheckCircle2 className="size-4 shrink-0" />{status}</strong>
                    </div>
                  ))}
                </div>

                <div className="relative mt-3 flex items-center justify-between gap-4 rounded-[1rem] bg-primary/[0.065] px-4 py-3 font-mono text-base uppercase tracking-[-0.02em] text-primary shadow-[inset_0_1px_0_rgba(119,252,117,0.12)]">
                  <span className="flex items-center gap-2"><PackageCheck className="size-5" />Storefront output</span>
                  <span className="text-white/42">Desktop · Mobile · QA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black px-4 py-[50px] sm:px-6 md:px-10 md:py-[100px]">
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,153,57,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,153,57,0.3)_1px,transparent_1px)] [background-size:38px_38px]" />
          <div className="relative mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-4xl text-center md:mb-12">
              <p className="mb-4 font-mono text-base uppercase tracking-[0.16em] text-[#ffad4a]">Technical risk scanner</p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.problemTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.problemIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018)_48%,rgba(255,173,74,0.035))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_32px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-5 md:p-7">
              <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,rgba(255,173,74,0.25)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
              <div aria-hidden="true" className="absolute bottom-4 top-24 w-px animate-[problem-scan_5s_ease-in-out_infinite] bg-[#ffad4a]/45 shadow-[0_0_24px_rgba(255,173,74,0.65)] motion-reduce:hidden" />

              <div className="relative flex items-center justify-between gap-3 rounded-[1.1rem] bg-black/35 px-3 py-3 sm:rounded-[1.35rem] sm:px-5 sm:py-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-[#ffad4a]/12 text-[#ffad4a]">
                    <Search className="size-5" />
                    <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full border border-[#ffad4a]/25 motion-reduce:animate-none" />
                  </span>
                  <div>
                    <p className="font-mono text-base uppercase leading-tight tracking-[0.02em] text-[#ffad4a] sm:tracking-[0.06em]">Shopify <span className="hidden sm:inline">diagnostic console</span><span className="sm:hidden">risk scan</span></p>
                    <p className="mt-1 hidden text-base text-white/52 sm:block">{diagnosticLabels.scanning}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2 font-mono text-base uppercase tracking-[-0.02em] text-primary">
                  <CheckCircle2 className="hidden size-5 shrink-0 sm:block" />
                  <span className="sm:hidden">06 / 06</span><span className="hidden sm:inline">{diagnosticLabels.indexed}</span>
                </div>
              </div>

              <div aria-label={text.problemTitle} className="relative mt-4 grid grid-cols-2 gap-2 lg:grid-cols-6 lg:gap-1.5">
                {text.problems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeProblem === index
                  return (
                    <button
                      key={item.title}
                      type="button"
                      aria-pressed={isActive}
                      aria-controls="risk-diagnostic-panel"
                      onClick={() => setActiveProblem(index)}
                      className={`group relative flex min-h-[72px] items-center gap-2.5 overflow-hidden rounded-[0.9rem] px-3 py-3 text-left transition-[background-color,color,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffad4a] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-4 lg:min-h-24 lg:flex-col lg:items-start lg:justify-between ${isActive ? "bg-[#ffad4a] text-black shadow-[0_12px_32px_rgba(255,153,57,0.2)] lg:-translate-y-1" : "bg-white/[0.045] text-white hover:bg-white/[0.08]"}`}
                    >
                      <span className="flex shrink-0 items-center gap-2 lg:w-full lg:justify-between">
                        <Icon className={`size-5 shrink-0 ${isActive ? "text-black" : "text-white/45 group-hover:text-[#ffad4a]"}`} />
                        <span className={`hidden font-mono text-base sm:inline lg:block ${isActive ? "text-black/58" : "text-white/28"}`}>0{index + 1}</span>
                      </span>
                      <span className="text-base font-semibold leading-[1.25]"><span className="lg:hidden">{item.mobileTitle}</span><span className="hidden lg:inline">{item.title}</span></span>
                    </button>
                  )
                })}
              </div>

              <div
                key={`${language}-${activeProblem}`}
                id="risk-diagnostic-panel"
                role="region"
                aria-label={`${diagnosticLabels.detected}: ${text.problems[activeProblem].title}`}
                aria-live="polite"
                className="relative mt-3 overflow-hidden rounded-[1.2rem] bg-black/55 p-4 animate-in fade-in slide-in-from-bottom-2 duration-300 motion-reduce:animate-none sm:mt-4 sm:rounded-[1.5rem] sm:p-6 lg:p-7"
              >
                <div aria-hidden="true" className="absolute -right-20 -top-24 size-72 rounded-full bg-[#ffad4a]/[0.09] blur-3xl" />
                <div className="relative flex items-center gap-3 border-b border-white/[0.08] pb-4 sm:gap-4 sm:pb-5 md:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-[0.9rem] bg-[#ffad4a]/12 text-[#ffad4a] shadow-[inset_0_0_0_1px_rgba(255,173,74,0.2)] sm:size-12 sm:rounded-[1rem]"><ActiveProblemIcon className="size-5 sm:size-6" /></span>
                    <div>
                      <p className="font-mono text-base uppercase leading-tight tracking-[0.02em] text-[#ffad4a] sm:tracking-[0.05em]">{diagnosticLabels.detected} / 0{activeProblem + 1}</p>
                      <h3 className="mt-1 text-lg font-bold leading-tight text-white sm:text-xl md:text-2xl">{text.problems[activeProblem].title}</h3>
                    </div>
                  </div>
                  <span className="ml-auto hidden min-h-11 w-fit shrink-0 items-center gap-2 rounded-full bg-primary/[0.09] px-4 font-mono text-base text-primary sm:inline-flex">
                    <CheckCircle2 className="size-5" />{diagnosticLabels.ready}
                  </span>
                </div>

                <div className="relative mt-5 grid gap-5 sm:mt-6 sm:gap-6 lg:grid-cols-[1fr_1fr_1.08fr] lg:gap-8">
                  <div>
                    <p className="font-mono text-base uppercase tracking-[0.04em] text-white/38">01 / {diagnosticLabels.signal}</p>
                    <p className="mt-2 text-base leading-[1.65] text-white/72 sm:mt-3 sm:leading-[1.75]">{text.problems[activeProblem].text}</p>
                  </div>
                  <div>
                    <p className="font-mono text-base uppercase tracking-[0.04em] text-white/38">02 / {diagnosticLabels.impact}</p>
                    <p className="mt-2 text-base leading-[1.65] text-white/72 sm:mt-3 sm:leading-[1.75]">{text.problems[activeProblem].impact}</p>
                    <div className="mt-3 flex flex-wrap gap-2 sm:mt-4" aria-label={diagnosticLabels.areas}>
                      {text.problems[activeProblem].areas.map((area) => (
                        <span key={area} className="rounded-full bg-white/[0.065] px-3 py-1.5 font-mono text-base text-white/58">{area}</span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1rem] bg-primary/[0.075] p-4 shadow-[inset_0_0_0_1px_rgba(119,252,117,0.12)] sm:rounded-[1.15rem] sm:p-5">
                    <p className="flex items-center gap-2 font-mono text-base uppercase tracking-[0.04em] text-primary"><Code2 className="size-5" />03 / {diagnosticLabels.action}</p>
                    <p className="mt-2 text-base leading-[1.65] text-white/78 sm:mt-3 sm:leading-[1.75]">{text.problems[activeProblem].action}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="relative mx-auto max-w-[1500px]">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <p className="mb-4 font-mono text-base uppercase tracking-[0.16em] text-primary">Architecture blueprint</p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.solutionTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.solutionIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_15%_20%,rgba(119,252,117,0.07),transparent_26%),radial-gradient(circle_at_88%_78%,rgba(34,211,238,0.065),transparent_28%),rgba(0,0,0,0.64)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_40px_100px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-5 md:p-7">
              <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(119,252,117,0.28)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

              <div className="relative flex items-center justify-between gap-3 rounded-[1.1rem] bg-white/[0.045] px-3 py-3 sm:rounded-[1.35rem] sm:px-5 sm:py-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary shadow-[0_0_22px_rgba(119,252,117,0.12)]"><Code2 className="size-5" /></span>
                  <div className="min-w-0">
                    <p className="font-mono text-base uppercase leading-tight tracking-[0.03em] text-primary">{solutionLabels.pipeline}</p>
                    <p className="mt-1 hidden text-base text-white/46 sm:block">Shopify foundation build system</p>
                  </div>
                </div>
                <span className="flex shrink-0 items-center gap-2 font-mono text-base uppercase tracking-[-0.02em] text-cyan-200">
                  <span className="size-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.85)] motion-reduce:animate-none" />
                  <span className="sm:hidden">06 / 06</span><span className="hidden sm:inline">{solutionLabels.operational}</span>
                </span>
              </div>

              <div className="relative mt-6 hidden lg:block">
                <div aria-hidden="true" className="absolute left-[8.333%] right-[8.333%] top-12 h-px bg-gradient-to-r from-primary/20 via-primary/55 to-cyan-300/30">
                  <span className="absolute left-0 top-1/2 h-1.5 w-20 -translate-y-1/2 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] motion-reduce:hidden" />
                </div>
                <div className="relative grid grid-cols-6 gap-2" aria-label={text.solutionTitle}>
                  {text.solutions.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeSolution === index
                    return (
                      <button
                        key={item.title}
                        type="button"
                        aria-pressed={isActive}
                        aria-controls="solution-desktop-panel"
                        onClick={() => setActiveSolution(index)}
                        className={`group relative flex min-h-28 flex-col items-start justify-between rounded-[1rem] px-4 py-4 text-left transition-[background-color,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black ${isActive ? "-translate-y-1 bg-primary text-black shadow-[0_16px_36px_rgba(119,252,117,0.18)]" : "bg-white/[0.045] text-white hover:bg-white/[0.075]"}`}
                      >
                        <span className="flex w-full items-center justify-between gap-2">
                          <span className={`flex size-9 items-center justify-center rounded-full ${isActive ? "bg-black/12" : "bg-black/30 text-primary"}`}><Icon className="size-5" /></span>
                          <span className={`font-mono text-base ${isActive ? "text-black/55" : "text-white/28"}`}>0{index + 1}</span>
                        </span>
                        <span className="mt-4 text-base font-semibold leading-[1.3]">{item.title}</span>
                      </button>
                    )
                  })}
                </div>

                <div key={`${language}-${activeSolution}`} id="solution-desktop-panel" role="region" aria-live="polite" aria-label={`${solutionLabels.active}: ${text.solutions[activeSolution].title}`} className="relative mt-4 overflow-hidden rounded-[1.4rem] bg-white/[0.045] p-6 animate-in fade-in slide-in-from-bottom-2 duration-300 motion-reduce:animate-none">
                  <div aria-hidden="true" className="absolute -right-16 -top-24 size-72 rounded-full bg-cyan-300/[0.055] blur-3xl" />
                  <div className="relative flex items-center justify-between gap-5 border-b border-white/[0.08] pb-5">
                    <div className="flex items-center gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-[1rem] bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(119,252,117,0.16)]"><ActiveSolutionIcon className="size-6" /></span>
                      <div><p className="font-mono text-base uppercase tracking-[0.04em] text-primary">{solutionLabels.active} / 0{activeSolution + 1}</p><h3 className="mt-1 text-2xl font-bold leading-tight text-white">{text.solutions[activeSolution].title}</h3></div>
                    </div>
                    <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-cyan-300/[0.08] px-4 font-mono text-base text-cyan-200"><CheckCircle2 className="size-5" />{solutionLabels.status}</span>
                  </div>
                  <div className="relative mt-6 grid gap-8 lg:grid-cols-[1fr_1fr_1.08fr]">
                    <div><p className="font-mono text-base uppercase tracking-[0.04em] text-white/38">01 / {solutionLabels.build}</p><p className="mt-3 text-base leading-[1.75] text-white/72">{text.solutions[activeSolution].build}</p></div>
                    <div><p className="font-mono text-base uppercase tracking-[0.04em] text-white/38">02 / {solutionLabels.value}</p><p className="mt-3 text-base leading-[1.75] text-white/72">{text.solutions[activeSolution].value}</p></div>
                    <div className="rounded-[1.1rem] bg-primary/[0.07] p-5 shadow-[inset_0_0_0_1px_rgba(119,252,117,0.1)]">
                      <p className="font-mono text-base uppercase tracking-[0.04em] text-primary">03 / {solutionLabels.output}</p>
                      <div className="mt-3 flex flex-wrap gap-2">{text.solutions[activeSolution].deliverables.map((item) => <span key={item} className="rounded-full bg-black/25 px-3 py-1.5 font-mono text-base text-white/68">{item}</span>)}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-4 lg:hidden" aria-label={text.solutionTitle}>
                <div aria-hidden="true" className="absolute bottom-8 left-[21px] top-8 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-cyan-300/35" />
                <div className="relative grid gap-2">
                  {text.solutions.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeSolution === index
                    return (
                      <div key={item.title} className="relative">
                        <button
                          type="button"
                          aria-expanded={isActive}
                          aria-controls={isActive ? `solution-mobile-panel-${index}` : undefined}
                          onClick={() => setActiveSolution(index)}
                          className={`relative flex min-h-16 w-full items-center gap-3 rounded-[1rem] px-3 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isActive ? "bg-primary text-black" : "bg-white/[0.045] text-white"}`}
                        >
                          <span className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full ${isActive ? "bg-black/12" : "bg-black text-primary shadow-[inset_0_0_0_1px_rgba(119,252,117,0.18)]"}`}><Icon className="size-5" /></span>
                          <span className="min-w-0 flex-1 text-base font-semibold leading-[1.3]">{item.mobileTitle}</span>
                          <span className={`font-mono text-base ${isActive ? "text-black/55" : "text-white/30"}`}>0{index + 1}</span>
                        </button>

                        {isActive && (
                          <div id={`solution-mobile-panel-${index}`} role="region" aria-live="polite" className="ml-5 mt-2 overflow-hidden rounded-[1rem] bg-white/[0.045] p-4 pl-6 animate-in fade-in slide-in-from-top-2 duration-300 motion-reduce:animate-none">
                            <h3 className="text-lg font-bold leading-tight text-white">{item.title}</h3>
                            <div className="mt-4 grid gap-4">
                              <div><p className="font-mono text-base uppercase tracking-[0.02em] text-primary">01 / {solutionLabels.build}</p><p className="mt-2 text-base leading-[1.65] text-white/68">{item.build}</p></div>
                              <div><p className="font-mono text-base uppercase tracking-[0.02em] text-cyan-200">02 / {solutionLabels.value}</p><p className="mt-2 text-base leading-[1.65] text-white/68">{item.value}</p></div>
                              <div><p className="font-mono text-base uppercase tracking-[0.02em] text-primary">03 / {solutionLabels.output}</p><div className="mt-2 flex flex-wrap gap-2">{item.deliverables.map((deliverable) => <span key={deliverable} className="rounded-full bg-primary/[0.07] px-3 py-1.5 font-mono text-base text-white/64">{deliverable}</span>)}</div></div>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="mb-4 font-mono text-base uppercase tracking-[0.16em] text-primary">Work scope</p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.workTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.workIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_18%_18%,rgba(119,252,117,0.06),transparent_26%),rgba(255,255,255,0.025)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_40px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-5 md:p-7">
              <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(119,252,117,0.22)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(to_right,black,transparent_72%)]" />

              <div className="relative hidden gap-5 lg:grid lg:grid-cols-[minmax(0,1.62fr)_minmax(320px,0.88fr)]">
                <div className="min-w-0">
                  <div key={`${language}-${activeWork}-visual`} className="animate-in fade-in zoom-in-95 duration-300 motion-reduce:animate-none">
                    <ScopeVisual type={text.workItems[activeWork].preview as ScopePreview} language={language} />
                  </div>
                  <div key={`${language}-${activeWork}-detail`} id="work-scope-desktop-panel" role="region" aria-live="polite" aria-label={`${workLabels.active}: ${text.workItems[activeWork].title}`} className="mt-4 rounded-[1.25rem] bg-white/[0.045] p-5 animate-in fade-in slide-in-from-bottom-2 duration-300 motion-reduce:animate-none">
                    <div className="flex items-start justify-between gap-5 border-b border-white/[0.08] pb-4">
                      <div className="flex items-start gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-[0.9rem] bg-primary/10 text-primary"><ActiveWorkIcon className="size-5" /></span><div><p className="font-mono text-base uppercase tracking-[0.03em] text-primary">{workLabels.active} / {String(activeWork + 1).padStart(2, "0")}</p><h3 className="mt-1 text-2xl font-bold leading-tight text-white">{text.workItems[activeWork].title}</h3></div></div>
                      <span className="rounded-full bg-cyan-300/[0.07] px-4 py-2 font-mono text-base text-cyan-200">SCOPE / ACTIVE</span>
                    </div>
                    <div className="mt-5 grid gap-6 xl:grid-cols-[1fr_1fr_0.85fr]">
                      <div><p className="font-mono text-base uppercase tracking-[0.03em] text-white/38">01 / {workLabels.suitable}</p><p className="mt-2 text-base leading-[1.7] text-white/70">{text.workItems[activeWork].description}</p></div>
                      <div><p className="font-mono text-base uppercase tracking-[0.03em] text-white/38">02 / {workLabels.result}</p><p className="mt-2 text-base leading-[1.7] text-white/70">{text.workItems[activeWork].result}</p></div>
                      <div><p className="font-mono text-base uppercase tracking-[0.03em] text-primary">03 / {workLabels.includes}</p><div className="mt-2 flex flex-wrap gap-2">{text.workItems[activeWork].includes.map((item) => <span key={item} className="rounded-full bg-primary/[0.07] px-3 py-1.5 font-mono text-base text-white/65">{item}</span>)}</div></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.25rem] bg-black/28 p-2" aria-label={text.workTitle}>
                  {text.workItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeWork === index
                    return (
                      <button key={item.title} type="button" aria-pressed={isActive} aria-controls="work-scope-desktop-panel" onClick={() => setActiveWork(index)} className={`group flex min-h-[70px] w-full items-center gap-3 rounded-[1rem] px-4 py-3 text-left transition-[background-color,color,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isActive ? "translate-x-1 bg-primary text-black" : "text-white hover:bg-white/[0.055]"}`}>
                        <span className={`flex size-10 shrink-0 items-center justify-center rounded-full ${isActive ? "bg-black/12" : "bg-white/[0.045] text-primary"}`}><Icon className="size-5" /></span>
                        <span className="min-w-0 flex-1 text-base font-semibold leading-[1.3]">{item.title}</span>
                        <span className={`font-mono text-base ${isActive ? "text-black/55" : "text-white/25"}`}>{String(index + 1).padStart(2, "0")}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="relative lg:hidden">
                <div className="flex items-center justify-between gap-3 rounded-[1.1rem] bg-white/[0.045] p-2">
                  <button type="button" aria-label={workLabels.previous} onClick={selectPreviousWork} className="flex size-12 shrink-0 items-center justify-center rounded-full bg-black/35 text-white transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><ArrowLeft className="size-5" /></button>
                  <div className="min-w-0 text-center"><p className="font-mono text-base text-primary">{String(activeWork + 1).padStart(2, "0")} / {String(text.workItems.length).padStart(2, "0")}</p><h3 className="mt-1 truncate text-lg font-bold text-white">{text.workItems[activeWork].mobileTitle}</h3></div>
                  <button type="button" aria-label={workLabels.next} onClick={selectNextWork} className="flex size-12 shrink-0 items-center justify-center rounded-full bg-black/35 text-white transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><ArrowRight className="size-5" /></button>
                </div>

                <div className="mt-1 grid grid-cols-7 gap-1" aria-label={text.workTitle}>
                  {text.workItems.map((item, index) => <button key={item.title} type="button" aria-label={`${String(index + 1).padStart(2, "0")} ${item.title}`} aria-pressed={activeWork === index} onClick={() => setActiveWork(index)} className="group flex min-h-12 items-center rounded-full focus-visible:outline-none"><span className={`block h-1.5 w-full rounded-full transition-colors group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-black ${activeWork === index ? "bg-primary shadow-[0_0_10px_rgba(119,252,117,0.55)]" : "bg-white/12"}`} /></button>)}
                </div>

                <div key={`${language}-${activeWork}-mobile-visual`} className="mt-3 animate-in fade-in zoom-in-95 duration-300 motion-reduce:animate-none">
                  <ScopeVisual type={text.workItems[activeWork].preview as ScopePreview} language={language} compact />
                </div>

                <div key={`${language}-${activeWork}-mobile-detail`} role="region" aria-live="polite" aria-label={`${workLabels.active}: ${text.workItems[activeWork].title}`} className="mt-3 rounded-[1.1rem] bg-white/[0.045] p-4 animate-in fade-in slide-in-from-bottom-2 duration-300 motion-reduce:animate-none">
                  <div className="flex items-center gap-3"><span className="flex size-10 shrink-0 items-center justify-center rounded-[0.85rem] bg-primary/10 text-primary"><ActiveWorkIcon className="size-5" /></span><h3 className="text-lg font-bold leading-tight text-white">{text.workItems[activeWork].title}</h3></div>
                  <div className="mt-4 grid grid-cols-2 gap-2 rounded-[0.9rem] bg-black/25 p-1.5" role="group" aria-label={workLabels.active}>
                    <button type="button" aria-pressed={activeWorkInfo === "scope"} onClick={() => setActiveWorkInfo("scope")} className={`min-h-12 rounded-[0.75rem] px-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${activeWorkInfo === "scope" ? "bg-primary text-black" : "text-white/55"}`}>{workLabels.suitable}</button>
                    <button type="button" aria-pressed={activeWorkInfo === "result"} onClick={() => setActiveWorkInfo("result")} className={`min-h-12 rounded-[0.75rem] px-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${activeWorkInfo === "result" ? "bg-cyan-300 text-black" : "text-white/55"}`}>{workLabels.result}</button>
                  </div>
                  <div key={`${activeWork}-${activeWorkInfo}`} className="mt-4 animate-in fade-in slide-in-from-bottom-1 duration-200 motion-reduce:animate-none"><p className="text-base leading-[1.65] text-white/70">{activeWorkInfo === "scope" ? text.workItems[activeWork].description : text.workItems[activeWork].result}</p></div>
                  <div className="mt-4 flex flex-wrap gap-2" aria-label={workLabels.includes}>{text.workItems[activeWork].includes.map((item) => <span key={item} className="rounded-full bg-primary/[0.07] px-3 py-1.5 font-mono text-base text-white/65">{item}</span>)}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="mb-4 font-mono text-base uppercase tracking-[0.12em] text-primary">Delivery manifest / 06</p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.deliverablesTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.deliverablesIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_86%_18%,rgba(34,211,238,0.055),transparent_28%),radial-gradient(circle_at_12%_82%,rgba(119,252,117,0.05),transparent_30%),rgba(255,255,255,0.025)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_40px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-5 md:p-7">
              <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(119,252,117,0.22)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black,transparent_84%)]" />
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px animate-shimmer bg-gradient-to-r from-transparent via-primary to-cyan-300 bg-[length:200%_100%] motion-reduce:animate-none" />

              <div className="relative flex items-center justify-between gap-4 rounded-[1.1rem] bg-primary/[0.075] px-4 py-4 sm:rounded-[1.35rem] sm:px-6 sm:py-5">
                <div className="flex min-w-0 items-center gap-3"><span className="flex size-11 shrink-0 items-center justify-center rounded-[0.9rem] bg-primary text-black"><PackageCheck className="size-6" /></span><div><p className="font-mono text-base uppercase tracking-[0.03em] text-primary">{deliveryLabels.package}</p><p className="mt-1 text-base text-white/52">Handoff / WL-2026</p></div></div>
                <div className="shrink-0 text-right"><strong className="block text-2xl font-bold text-white sm:text-3xl">6 / 6</strong><span className="font-mono text-base text-cyan-200">READY</span></div>
              </div>

              <div className="relative mt-3 grid gap-3 lg:mt-4 lg:grid-cols-2 lg:gap-4">
                {[
                  { title: deliveryLabels.build, subtitle: deliveryLabels.buildText, items: text.deliverables.slice(0, 3), tone: "primary" },
                  { title: deliveryLabels.verify, subtitle: deliveryLabels.verifyText, items: text.deliverables.slice(3), tone: "cyan" },
                ].map((group, groupIndex) => (
                  <section key={group.title} aria-labelledby={`delivery-group-${groupIndex}`} className="rounded-[1.2rem] bg-black/30 p-3 sm:p-5">
                    <div className="flex items-start justify-between gap-4 px-1 pb-2 sm:pb-4"><div><h3 id={`delivery-group-${groupIndex}`} className={`text-xl font-bold ${group.tone === "primary" ? "text-primary" : "text-cyan-200"}`}>{group.title}</h3><p className="mt-1 text-base leading-relaxed text-white/45">{group.subtitle}</p></div><span className={`font-mono text-base ${group.tone === "primary" ? "text-primary/55" : "text-cyan-200/55"}`}>0{groupIndex + 1} / 02</span></div>
                    <div className="grid gap-0 sm:gap-2">
                      {group.items.map((item, itemIndex) => {
                        const Icon = item.icon
                        const globalIndex = groupIndex * 3 + itemIndex
                        return (
                          <article key={item.title} className="rounded-none bg-transparent px-1 py-3 sm:rounded-[1rem] sm:bg-white/[0.045] sm:p-5">
                            <div className="flex items-start gap-3"><span className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-black/30 ${group.tone === "primary" ? "text-primary" : "text-cyan-200"}`}><Icon className="size-5" /></span><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-3"><div><span className="font-mono text-base text-white/28">{String(globalIndex + 1).padStart(2, "0")}</span><h4 className="mt-1 text-base font-semibold leading-tight text-white"><span className="sm:hidden">{item.mobileTitle}</span><span className="hidden sm:inline">{item.title}</span></h4></div><CheckCircle2 className={`size-5 shrink-0 ${group.tone === "primary" ? "text-primary" : "text-cyan-200"}`} /></div><p className="mt-2 text-base leading-[1.55] text-white/58 sm:mt-3 sm:leading-[1.6]">{item.format}</p><p className={`mt-3 hidden font-mono text-base leading-relaxed sm:block ${group.tone === "primary" ? "text-primary/68" : "text-cyan-200/68"}`}>{item.validation.join(" · ")}</p></div></div>
                          </article>
                        )
                      })}
                    </div>
                  </section>
                ))}
              </div>

              <div className="relative mx-auto mt-3 flex min-h-[66px] w-fit max-w-full items-center justify-center gap-3 rounded-[1rem] bg-primary px-6 text-center text-base font-bold text-black shadow-[0_0_28px_rgba(119,252,117,0.14)] sm:px-8"><CheckCircle2 className="size-5 shrink-0" />{deliveryLabels.ready}</div>
            </div>
          </div>
        </section>

        <section className="bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="mb-4 font-mono text-base uppercase tracking-[0.12em] text-primary">{processLabels.eyebrow}</p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.processTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{processLabels.intro}</p>
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_12%_20%,rgba(119,252,117,0.075),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(34,211,238,0.065),transparent_30%),rgba(255,255,255,0.025)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_40px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-6 md:p-8">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(119,252,117,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(119,252,117,0.16)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px animate-shimmer bg-gradient-to-r from-transparent via-primary to-cyan-300 bg-[length:200%_100%] motion-reduce:animate-none" />

              <div className="relative flex flex-wrap items-center justify-between gap-3 rounded-[1rem] bg-black/28 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Clock3 className="size-5" /></span><span className="text-base font-semibold text-white">{processLabels.system}</span></div>
                <span className="flex items-center gap-2 font-mono text-base text-cyan-200"><span className="size-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.85)] motion-reduce:animate-none" />{processLabels.ready}</span>
              </div>

              <div className="relative mt-7 hidden lg:block">
                <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-8 h-1 overflow-hidden rounded-full bg-gradient-to-r from-primary/18 via-primary/35 to-cyan-300/20 shadow-[0_0_18px_rgba(119,252,117,0.18)]">
                  <span className="absolute left-0 top-1/2 h-2 w-20 -translate-y-1/2 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] motion-reduce:hidden" />
                </span>
                <ol className="relative grid grid-cols-5" aria-label={text.processTitle}>
                  {processLabels.steps.map((step, index) => {
                    const Icon = step.icon
                    const isQa = index === 3
                    const isLaunch = index === 4
                    return (
                      <li key={step.title} className="relative z-10 flex min-w-0 flex-col items-center px-3 text-center">
                        <span className={`flex size-16 items-center justify-center rounded-full border bg-[#050806] shadow-[0_0_30px_rgba(119,252,117,0.13)] ${isQa ? "border-cyan-300/55 text-cyan-200" : isLaunch ? "border-primary bg-primary text-black shadow-[0_0_34px_rgba(119,252,117,0.3)]" : "border-primary/45 text-primary"}`}><Icon className="size-6" /></span>
                        <span className="mt-5 font-mono text-base text-white/32">0{index + 1}</span>
                        <h3 className={`mt-1 text-lg font-bold ${isQa ? "text-cyan-200" : isLaunch ? "text-primary" : "text-white"}`}>{step.title}</h3>
                        <p className="mt-2 max-w-[190px] text-base leading-[1.55] text-white/55">{step.detail}</p>
                      </li>
                    )
                  })}
                </ol>
              </div>

              <div className="relative mt-5 lg:hidden">
                <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-1 overflow-hidden rounded-full bg-gradient-to-b from-primary/20 via-primary/40 to-cyan-300/22 shadow-[0_0_16px_rgba(119,252,117,0.16)]">
                  <span className="absolute left-1/2 top-0 h-16 w-2 -translate-x-1/2 animate-cro-data-flow-y rounded-full bg-gradient-to-b from-transparent via-primary to-transparent blur-[1px] motion-reduce:hidden" />
                </span>
                <ol aria-label={text.processTitle}>
                  {processLabels.steps.map((step, index) => {
                    const Icon = step.icon
                    const isQa = index === 3
                    const isLaunch = index === 4
                    return (
                      <li key={step.title} className="relative z-10 flex min-h-[94px] items-start gap-4 py-3">
                        <span className={`flex size-12 shrink-0 items-center justify-center rounded-full border bg-[#050806] shadow-[0_0_24px_rgba(119,252,117,0.12)] ${isQa ? "border-cyan-300/55 text-cyan-200" : isLaunch ? "border-primary bg-primary text-black shadow-[0_0_28px_rgba(119,252,117,0.28)]" : "border-primary/45 text-primary"}`}><Icon className="size-5" /></span>
                        <div className="min-w-0 pt-0.5"><span className="font-mono text-base text-white/32">0{index + 1}</span><h3 className={`mt-1 text-lg font-bold ${isQa ? "text-cyan-200" : isLaunch ? "text-primary" : "text-white"}`}>{step.title}</h3><p className="mt-1 text-base leading-[1.55] text-white/55">{step.detail}</p></div>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="mb-4 font-mono text-base uppercase tracking-[0.12em] text-primary">{fitLabels.eyebrow}</p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.fitTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.fitIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(119,252,117,0.09),transparent_27%),radial-gradient(circle_at_82%_20%,rgba(34,211,238,0.055),transparent_26%),rgba(255,255,255,0.025)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_40px_100px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-6 md:p-8">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.13] [background-image:radial-gradient(circle,rgba(119,252,117,0.28)_1px,transparent_1.2px)] [background-size:32px_32px] [mask-image:radial-gradient(circle_at_center,black,transparent_84%)]" />
              <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.07] shadow-[0_0_90px_rgba(119,252,117,0.055)] sm:size-[620px]" />
              <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.08] sm:size-[420px]" />
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px animate-shimmer bg-gradient-to-r from-transparent via-primary to-cyan-300 bg-[length:200%_100%] motion-reduce:animate-none" />

              <div className="relative flex flex-wrap items-center justify-between gap-3 rounded-[1rem] bg-black/28 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary"><ShieldCheck className="size-5" /></span><span className="text-base font-semibold text-white">{fitLabels.system}</span></div>
                <span className="flex items-center gap-2 font-mono text-base text-cyan-200"><span className="size-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.85)] motion-reduce:animate-none" />{fitLabels.matched}</span>
              </div>

              <div className="relative mt-6 hidden min-h-[440px] lg:block">
                <svg aria-hidden="true" viewBox="0 0 1200 440" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-55">
                  <defs><linearGradient id="fit-signal-line" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#77fc75" stopOpacity="0.18" /><stop offset="0.5" stopColor="#77fc75" stopOpacity="0.72" /><stop offset="1" stopColor="#22d3ee" stopOpacity="0.22" /></linearGradient></defs>
                  <path d="M 300 100 C 430 100, 450 185, 540 205" fill="none" stroke="url(#fit-signal-line)" strokeWidth="2" strokeDasharray="7 9" />
                  <path d="M 900 100 C 770 100, 750 185, 660 205" fill="none" stroke="url(#fit-signal-line)" strokeWidth="2" strokeDasharray="7 9" />
                  <path d="M 300 340 C 430 340, 450 255, 540 235" fill="none" stroke="url(#fit-signal-line)" strokeWidth="2" strokeDasharray="7 9" />
                  <path d="M 900 340 C 770 340, 750 255, 660 235" fill="none" stroke="url(#fit-signal-line)" strokeWidth="2" strokeDasharray="7 9" />
                </svg>

                <div className="absolute left-1/2 top-1/2 flex size-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/35 bg-[radial-gradient(circle_at_42%_35%,rgba(119,252,117,0.2),rgba(3,10,6,0.94)_58%)] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_70px_rgba(119,252,117,0.14)]">
                  <span aria-hidden="true" className="absolute inset-[-18px] animate-ping rounded-full border border-primary/12 motion-reduce:animate-none" />
                  <div className="relative px-5"><p className="font-mono text-base uppercase tracking-[0.08em] text-primary">{fitLabels.coreTop}</p><strong className="mt-2 block text-2xl leading-tight text-white">{fitLabels.coreMain}</strong><span className="mt-4 block font-mono text-base leading-relaxed text-cyan-200">{fitLabels.coreStatus}</span></div>
                </div>

                {text.fitItems.map((item, index) => {
                  const Icon = fitIcons[index]
                  const positions = ["left-0 top-5", "right-0 top-5", "bottom-5 left-0", "bottom-5 right-0"]
                  const isCyan = index === 2
                  return (
                    <div key={item} className={`absolute w-[31%] px-4 py-4 ${positions[index]}`}>
                      <div className="flex items-start gap-4"><span className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-black/45 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_0_26px_rgba(119,252,117,0.08)] ${isCyan ? "text-cyan-200" : "text-primary"}`}><Icon className="size-5" /></span><div className="min-w-0"><span className="font-mono text-base text-white/32">0{index + 1} / MATCH</span><h3 className="mt-1 text-lg font-bold leading-tight text-white">{item}</h3><p className="mt-2 text-base leading-[1.6] text-white/55">{fitLabels.details[index]}</p></div></div>
                    </div>
                  )
                })}
              </div>

              <div className="relative mt-7 lg:hidden">
                <div className="relative mx-auto flex size-44 items-center justify-center rounded-full border border-primary/35 bg-[radial-gradient(circle_at_42%_35%,rgba(119,252,117,0.2),rgba(3,10,6,0.94)_58%)] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_55px_rgba(119,252,117,0.12)]">
                  <span aria-hidden="true" className="absolute inset-[-14px] animate-ping rounded-full border border-primary/12 motion-reduce:animate-none" />
                  <div className="relative px-4"><p className="font-mono text-base uppercase tracking-[0.06em] text-primary">{fitLabels.coreTop}</p><strong className="mt-1 block text-xl leading-tight text-white">{fitLabels.coreMain}</strong><span className="mt-3 block font-mono text-base leading-snug text-cyan-200">FIT / CONFIRMED</span></div>
                </div>

                <div className="relative mt-8">
                  <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-primary/20 via-primary/55 to-cyan-300/25"><span className="absolute left-1/2 top-0 h-16 w-1.5 -translate-x-1/2 animate-cro-data-flow-y rounded-full bg-gradient-to-b from-transparent via-primary to-transparent blur-[1px] motion-reduce:hidden" /></span>
                  <ol aria-label={text.fitTitle}>
                    {text.fitItems.map((item, index) => {
                      const Icon = fitIcons[index]
                      const isCyan = index === 2
                      return (
                        <li key={item} className="relative z-10 flex min-h-[112px] items-start gap-4 py-3"><span className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-[#050806] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07),0_0_24px_rgba(119,252,117,0.1)] ${isCyan ? "text-cyan-200" : "text-primary"}`}><Icon className="size-5" /></span><div className="min-w-0 pt-0.5"><span className="font-mono text-base text-white/32">0{index + 1} / MATCH</span><h3 className="mt-1 text-lg font-bold leading-tight text-white">{item}</h3><p className="mt-2 text-base leading-[1.55] text-white/55">{fitLabels.details[index]}</p></div></li>
                      )
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-5 text-center">
              <p className="flex items-center justify-center gap-2 font-mono text-base uppercase tracking-[0.08em] text-cyan-300"><HelpCircle className="size-5" />Knowledge base</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.faqTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground">{language === "zh" ? "关于新站建设、店铺重建、Liquid、性能与上线方式的关键答案。" : "Key answers about new builds, store rebuilds, Liquid, performance, and launch planning."}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_78%_34%,rgba(34,211,238,0.075),transparent_29%),radial-gradient(circle_at_24%_68%,rgba(119,252,117,0.09),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(34,211,238,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div aria-hidden="true" className="absolute bottom-[16%] right-[2%] h-px w-[58%] -rotate-3 animate-shimmer bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent bg-[length:200%_100%] motion-reduce:animate-none" />

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-3"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_16px_rgba(119,252,117,0.8)] motion-reduce:animate-none" /><span className="font-mono text-base uppercase text-primary">Engineering knowledge / online</span></div>
                <span className="font-mono text-base uppercase text-white/35">06 questions indexed</span>
              </div>

              <div className="relative z-10 mt-7 hidden min-w-0 grid-cols-[0.38fr_0.62fr] gap-7 lg:grid">
                <div role="group" aria-label={language === "zh" ? "常见问题目录" : "FAQ directory"} className="space-y-2 rounded-[1.7rem] bg-black/20 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.065)]">
                  {text.faqs.map((item, index) => {
                    const isActive = activeFaq === index
                    return (
                      <button type="button" key={item.q} aria-pressed={isActive} aria-controls="website-build-faq-answer" onClick={() => setActiveFaq(index)} className={`group relative flex min-h-[78px] w-full items-center gap-4 overflow-hidden rounded-[1.35rem] px-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none ${isActive ? "bg-white/[0.09] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_30px_rgba(119,252,117,0.07)]" : "bg-transparent hover:bg-white/[0.035]"}`}>
                        <span className={`flex size-11 shrink-0 items-center justify-center rounded-full font-mono text-base transition-colors ${isActive ? "bg-primary text-black" : "bg-white/[0.045] text-cyan-300/42 group-hover:text-primary"}`}>0{index + 1}</span>
                        <span className="min-w-0"><span className={`block font-mono text-base uppercase ${isActive ? "text-primary" : "text-cyan-300/38"}`}>{websiteBuildFaqMeta[index].code}</span><strong className={`mt-1 block text-base leading-snug ${isActive ? "text-white" : "text-white/52 group-hover:text-white/72"}`}>{item.q}</strong></span>
                        {isActive && <span aria-hidden="true" className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/65 to-transparent" />}
                      </button>
                    )
                  })}
                </div>

                <div id="website-build-faq-answer" role="region" aria-live="polite" aria-label={language === "zh" ? "当前问题答案" : "Current answer"} className="relative flex min-h-[510px] min-w-0 items-center overflow-hidden rounded-[1.7rem] bg-black/18 px-7 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] xl:px-12">
                  <div aria-hidden="true" className="absolute right-[8%] top-[10%] size-52 rounded-full border border-dashed border-primary/10" />
                  <div key={`${language}-${activeFaq}`} className="relative z-10 max-w-3xl animate-in fade-in slide-in-from-right-3 duration-300 motion-reduce:animate-none">
                    <div className="flex items-center gap-4"><span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"><HelpCircle className="size-6" /></span><div><span className="font-mono text-base uppercase text-primary">Answer / 0{activeFaq + 1} of 06</span><span className="mt-1 block font-mono text-base uppercase text-white/32">{activeFaqMeta.code} knowledge</span></div></div>
                    <h3 className="mt-7 max-w-2xl text-3xl font-bold leading-tight text-white">{activeFaqItem.q}</h3>
                    <p className="mt-6 max-w-2xl text-base leading-[1.9] text-white/62">{activeFaqItem.a}</p>
                    <div className="mt-8 flex flex-wrap gap-2">{activeFaqMeta[language].map((tag) => <span key={tag} className="rounded-full bg-white/[0.05] px-4 py-2 text-base text-white/55">{tag}</span>)}</div>
                    <div className="mt-9 flex items-center gap-3 font-mono text-base uppercase text-primary"><ShieldCheck className="size-5" />Answer verified</div>
                  </div>
                </div>
              </div>

              <Accordion type="single" value={`faq-${activeFaq}`} onValueChange={(value) => { if (value) setActiveFaq(Number(value.replace("faq-", ""))) }} className="relative z-10 mt-6 space-y-2 lg:hidden [&_[data-slot=accordion-content]]:text-base">
                {text.faqs.map((item, index) => (
                  <AccordionItem key={item.q} value={`faq-${index}`} className="overflow-hidden rounded-[1.35rem] border-0 bg-black/18 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)] data-[state=open]:bg-white/[0.075] data-[state=open]:shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_0_28px_rgba(119,252,117,0.055)] sm:px-5">
                    <AccordionTrigger className="min-h-[72px] gap-3 py-4 text-left text-base font-semibold leading-snug hover:no-underline data-[state=open]:text-primary [&>svg]:size-5 [&>svg]:shrink-0"><span className="flex min-w-0 items-center gap-3"><span className="font-mono text-base text-cyan-300/55">0{index + 1}</span><span>{item.q}</span></span></AccordionTrigger>
                    <AccordionContent className="pb-5 pl-0 text-base leading-[1.8] text-white/60 sm:pl-9"><p>{item.a}</p><div className="mt-5 flex flex-wrap gap-2">{websiteBuildFaqMeta[index][language].map((tag) => <span key={tag} className="rounded-full bg-black/20 px-3 py-2 text-base text-white/50">{tag}</span>)}</div><div className="mt-5 flex items-center gap-2 font-mono text-base uppercase text-primary"><ShieldCheck className="size-5" />Answer verified</div></AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[3.2rem_1.5rem_3.6rem_1.8rem] border border-white/25 bg-[linear-gradient(115deg,rgba(255,255,255,0.075),rgba(255,255,255,0.015)_38%,rgba(34,211,238,0.045)_72%,rgba(119,252,117,0.06))] px-7 py-12 shadow-[inset_0_2px_0_rgba(255,255,255,0.24),inset_0_-2px_0_rgba(119,252,117,0.1),0_45px_110px_rgba(0,0,0,0.5),0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-3xl md:px-14 md:py-16">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(34,211,238,0.15),transparent_28%),radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.08),transparent_32%)]" />
            <div aria-hidden="true" className="absolute inset-x-[7%] top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div aria-hidden="true" className="absolute -bottom-8 right-[8%] rotate-[-8deg] space-y-2 font-mono text-base leading-relaxed text-cyan-300/16"><p>{"{% section 'shopify-engineering' %}"}</p><p>{"theme · sections · performance · QA"}</p><p>{"responsive / maintainability / launch"}</p></div>
            <div aria-hidden="true" className="absolute bottom-[22%] right-[2%] h-px w-[62%] rotate-[-8deg] animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.55),rgba(119,252,117,0.8),transparent)] bg-[length:200%_100%] shadow-[0_0_25px_rgba(119,252,117,0.35)] motion-reduce:animate-none" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div><ShieldCheck className="mb-5 size-8 text-primary" /><h2 className="max-w-4xl text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.ctaTitle}</h2><p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.ctaText}</p></div>
              <a href={localizedPath("/diagnosis")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-[0_0_28px_rgba(119,252,117,0.22)] transition-all hover:brightness-110 active:scale-[0.98]">{text.primaryCta}<ArrowUpRight className="size-4" /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
