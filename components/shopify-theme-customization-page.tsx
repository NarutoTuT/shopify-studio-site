"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type CSSProperties } from "react"

import {
  ArrowUpRight,
  Blocks,
  FileCode2,
  Gauge,
  HelpCircle,
  LayoutGrid,
  MonitorSmartphone,
  PackageCheck,
  Paintbrush,
  ScanSearch,
  Settings2,
  ShieldCheck,
  Smartphone,
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"
import { ServiceFaqPanel } from "@/components/service-faq-panel"
import { useLanguage } from "@/components/language-provider"

const SHOW_THEME_HERO_PREVIEW = false

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
    signalTitle: "主题需求信号",
    signalStatus: "5 个主题问题信号已识别",
    signalRunning: "主题诊断运行中",
    signalImpactLabel: "影响范围",
    signalActionLabel: "建议处理",
    signalItems: [
      ["主题限制多", "现有主题结构限制运营调整，自定义模块难以继续扩展。"],
      ["Figma 需要落地", "设计稿需要拆解成可配置的 Shopify section、block 和响应式规则。"],
      ["App 依赖过重", "重复 App 与脚本影响页面速度、视觉一致性和长期维护。"],
      ["移动端体验差", "文字、图片、按钮和购买路径需要针对移动端重新组织。"],
      ["速度与维护问题", "主题代码、资源加载和模块结构需要系统整理与优化。"],
    ],
    signalImpacts: ["运营灵活性与模块扩展", "设计还原与后台配置", "加载速度与长期维护", "浏览体验与购买转化", "性能稳定性与迭代成本"],
    signalActions: [
      "重构为可配置的 Shopify 2.0 section 与 block。",
      "将设计系统拆解为 Liquid 模板、组件和响应式规则。",
      "审查重复脚本，优先使用轻量原生主题能力替代。",
      "重新规划内容顺序、按钮触达和移动端购买路径。",
      "整理资源加载、代码职责和可复用模块边界。",
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
    scopeKeywords: [
      ["可配置模块", "Theme Editor", "复用能力"],
      ["核心模板", "Liquid Logic", "数据渲染"],
      ["购买区域", "商品卖点", "信任内容"],
      ["筛选排序", "产品发现", "移动浏览"],
      ["品牌首屏", "活动内容", "营销模块"],
      ["状态联动", "轻量动画", "交互反馈"],
      ["触控体验", "内容顺序", "购买路径"],
      ["脚本控制", "资源加载", "长期维护"],
    ],
    scopeShortLabels: ["Section", "Liquid", "商品页", "集合页", "首页", "交互", "移动端", "性能"],
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
    signalTitle: "Theme issue signals",
    signalStatus: "5 theme issue signals detected",
    signalRunning: "Theme diagnosis running",
    signalImpactLabel: "Affected area",
    signalActionLabel: "Recommended action",
    signalItems: [
      ["Theme limitations", "The current theme structure restricts merchandising and makes new modules difficult to scale."],
      ["Figma implementation", "Designs need to become configurable Shopify sections, blocks, and responsive rules."],
      ["Heavy app dependence", "Overlapping apps and scripts hurt speed, visual consistency, and maintainability."],
      ["Weak mobile experience", "Content, imagery, controls, and purchase paths need a mobile-first structure."],
      ["Speed and maintenance", "Theme code, asset loading, and module architecture need systematic optimization."],
    ],
    signalImpacts: ["Merchandising flexibility and module scale", "Design fidelity and editor control", "Loading speed and maintenance", "Browsing experience and conversion", "Performance stability and iteration cost"],
    signalActions: [
      "Refactor the theme into configurable Shopify 2.0 sections and blocks.",
      "Translate the design system into Liquid templates, components, and responsive rules.",
      "Audit duplicate scripts and replace heavy apps with lightweight native theme logic where practical.",
      "Rework content order, control reachability, and the mobile purchase path.",
      "Organize asset loading, code ownership, and reusable module boundaries.",
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
    scopeKeywords: [
      ["Configurable", "Theme Editor", "Reusable"],
      ["Core templates", "Liquid logic", "Data rendering"],
      ["Buy area", "Product story", "Trust content"],
      ["Filter and sort", "Discovery", "Mobile browsing"],
      ["Brand hero", "Campaign content", "Marketing modules"],
      ["State logic", "Lightweight motion", "Feedback"],
      ["Touch UX", "Content order", "Purchase path"],
      ["Script control", "Asset loading", "Maintenance"],
    ],
    scopeShortLabels: ["Section", "Liquid", "Product", "Collection", "Homepage", "Interaction", "Mobile", "Performance"],
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
        title: "Shopify Website Pricing",
        text: "Compare the available build tiers, included scope, third-party costs, and the factors that affect project pricing.",
        href: "/pricing",
        cta: "View Pricing",
      },
    ],
  },
}

const themeCustomizationStructuredData = {
  zh: {
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
  },
  en: {
    breadcrumbs: [
      { name: "Home", url: "https://whaleleap.studio/en" },
      { name: "Services", url: "https://whaleleap.studio/en#services" },
      { name: "Shopify Theme Customization", url: "https://whaleleap.studio/en/services/shopify-theme-customization" },
    ],
    service: {
      name: "Shopify Theme Customization and Liquid Development",
      description: "Shopify 2.0 theme modules, page structures, product and collection templates, and responsive storefront experiences built with Liquid, HTML, CSS, and JavaScript.",
      url: "https://whaleleap.studio/en/services/shopify-theme-customization",
    },
  },
}

const transformationStages = [
  { label: "FIGMA", detail: "Design system", code: "Layout · Component", icon: Paintbrush },
  { label: "LIQUID", detail: "Template logic", code: "for · render · assign", icon: FileCode2 },
  { label: "SECTION / BLOCK", detail: "Configurable modules", code: "schema · block · preset", icon: Blocks },
  { label: "THEME EDITOR", detail: "Merchant control", code: "settings_schema.json", icon: Settings2 },
  { label: "RESPONSIVE QA", detail: "Desktop · Tablet · Mobile", code: "390 · 768 · 1440", icon: MonitorSmartphone },
]

const signalHighlightRegions = [
  "inset-[7%]",
  "bottom-[12%] left-[7%] top-[18%] w-[52%]",
  "bottom-[10%] right-[7%] top-[18%] w-[35%]",
  "bottom-[7%] right-[4%] top-[9%] w-[24%] rounded-[1.5rem]",
  "bottom-[11%] left-[7%] right-[7%] h-[24%]",
]

const scopeMarkerPositions = [
  "left-[32%] top-[21%]",
  "left-[58%] top-[28%]",
  "left-[42%] top-[48%]",
  "left-[24%] top-[61%]",
  "left-[66%] top-[58%]",
  "left-[53%] top-[72%]",
  "left-[17%] top-[39%]",
  "left-[71%] top-[18%]",
]

const scopeVisuals = [
  {
    src: "/images/theme-customization/theme-development-workspace.jpg",
    alt: "Shopify theme development workspace with ecommerce layouts and code",
    fit: "cover" as const,
  },
  {
    src: "/images/theme-customization/theme-development-workspace.jpg",
    alt: "Liquid theme development workspace showing responsive ecommerce interfaces",
    fit: "cover" as const,
  },
  {
    src: "/images/theme-customization/scope-product-page-modules.jpg",
    alt: "Complete Shopify product page with gallery, options, trust content, FAQ, and recommendations",
    fit: "cover" as const,
  },
  {
    src: "/images/theme-customization/scope-collection-display.jpg",
    alt: "Shopify collection page with product grid, filters, sorting, and mobile filter controls",
    fit: "cover" as const,
  },
  {
    src: "/images/theme-customization/scope-homepage-campaign.jpg",
    alt: "Shopify campaign homepage with hero, brand story, featured products, and editorial modules",
    fit: "cover" as const,
  },
  {
    src: "/images/theme-customization/scope-custom-interactions.jpg",
    alt: "Shopify product interface showing option changes, quick view, cart drawer, and feedback states",
    fit: "cover" as const,
  },
  {
    src: "/images/theme-customization/mobile-commerce-preview.jpg",
    alt: "Mobile Shopify product experience displayed in a real-world setting",
    fit: "cover" as const,
  },
  {
    src: "/images/theme-customization/scope-performance-maintainability.jpg",
    alt: "Shopify theme performance audit, modular Liquid code, and script dependency cleanup",
    fit: "cover" as const,
  },
]

const artifactMeta = [
  { file: "sections/custom-section.liquid", type: "SECTION / BLOCK", short: "Section", keywords: ["Schema", "Blocks", "Presets"], icon: Blocks },
  { file: "templates/product.custom.json", type: "PRODUCT TEMPLATE", short: "Product", keywords: ["Product JSON", "Buy Area", "Liquid"], icon: PackageCheck },
  { file: "templates/collection.custom.json", type: "COLLECTION TEMPLATE", short: "Collection", keywords: ["Filters", "Product Grid", "Sorting"], icon: LayoutGrid },
  { file: "templates/page.campaign.json", type: "LANDING PAGE", short: "Landing", keywords: ["Hero", "Content", "CTA"], icon: Paintbrush },
  { file: "config/settings_schema.json", type: "THEME SETTINGS", short: "Settings", keywords: ["Colors", "Typography", "Layout"], icon: Settings2 },
  { file: "qa/responsive-report.md", type: "RESPONSIVE QA", short: "QA", keywords: ["390", "768", "1440"], icon: MonitorSmartphone },
]

const deliveryStages = [
  { label: "Diagnose", zh: "主题诊断", code: "AUDIT", icon: ScanSearch },
  { label: "Scope", zh: "范围确认", code: "SCOPE", icon: Settings2 },
  { label: "Develop", zh: "主题开发", code: "BUILD", icon: FileCode2 },
  { label: "Quality assurance", zh: "全端测试", code: "QA", icon: ShieldCheck },
  { label: "Launch", zh: "上线交付", code: "RELEASE", icon: PackageCheck },
]

const faqMeta = [
  { code: "DECISION", zh: ["定制范围", "重建判断", "投入方式"], en: ["Scope", "Rebuild", "Decision"] },
  { code: "EXISTING", zh: ["现有主题", "风险评估", "副本开发"], en: ["Existing theme", "Risk review", "Theme copy"] },
  { code: "FIGMA", zh: ["设计落地", "Section", "响应式"], en: ["Design build", "Sections", "Responsive"] },
  { code: "DATA", zh: ["订单安全", "商品数据", "测试主题"], en: ["Order safety", "Product data", "Test theme"] },
  { code: "THEME", zh: ["主题选择", "代码质量", "迭代成本"], en: ["Theme choice", "Code quality", "Iteration cost"] },
  { code: "SPEED", zh: ["页面速度", "脚本控制", "App 审查"], en: ["Page speed", "Script control", "App audit"] },
]

const relatedRouteMeta = [
  { code: "BUILD", icon: Paintbrush, zh: ["从 0 建站", "主题开发", "上线检查"], en: ["New build", "Theme development", "Launch QA"] },
  { code: "BUDGET", icon: Gauge, zh: ["费用区间", "项目范围", "预算判断"], en: ["Price tiers", "Project scope", "Budget decision"] },
]

function ArtifactPreview({ index }: { index: number }) {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[1.65rem] bg-[#0d1110] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_70px_rgba(0,0,0,0.32)] sm:min-h-[390px] sm:p-4">
      <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-white/18" /><span className="size-2 rounded-full bg-cyan-300/42" /><span className="size-2 rounded-full bg-primary/62" /><span className="ml-auto font-mono text-base text-white/30">Preview / 0{index + 1}</span></div>

      {index === 0 && <div className="mt-4 grid min-h-[260px] grid-cols-[0.32fr_0.68fr] gap-3 sm:min-h-[320px]">
        <div className="space-y-3 rounded-[1.2rem] bg-black/28 p-3"><span className="font-mono text-base text-primary">Theme editor</span><span className="block h-10 rounded-xl bg-primary/12" /><span className="block h-10 rounded-xl bg-white/[0.05]" /><span className="block h-10 rounded-xl bg-white/[0.05]" /><span className="block h-10 rounded-xl bg-cyan-300/8" /><span className="block h-10 rounded-xl bg-white/[0.04]" /></div>
        <div className="rounded-[1.2rem] bg-white/[0.035] p-3"><span className="font-mono text-base text-cyan-300">Custom section</span><span className="mt-3 block h-24 rounded-xl bg-[linear-gradient(135deg,rgba(119,252,117,0.16),rgba(34,211,238,0.07))]" /><div className="mt-3 grid grid-cols-2 gap-3"><span className="h-16 rounded-xl bg-white/[0.06]" /><span className="h-16 rounded-xl bg-white/[0.045]" /></div><span className="mt-3 block h-9 rounded-xl bg-primary/18" /></div>
      </div>}

      {index === 1 && <div className="mt-4 grid min-h-[260px] grid-cols-[0.56fr_0.44fr] gap-3 sm:min-h-[320px]">
        <div className="rounded-[1.2rem] bg-[radial-gradient(circle_at_50%_42%,rgba(119,252,117,0.16),transparent_28%),rgba(255,255,255,0.035)] p-3"><span className="font-mono text-base text-cyan-300">Product media</span><div className="mx-auto mt-6 h-44 w-[62%] rounded-[40%_45%_35%_38%] bg-[linear-gradient(145deg,#27302d,#090b0a)] shadow-[0_22px_45px_rgba(0,0,0,0.4)]" /></div>
        <div className="space-y-3 rounded-[1.2rem] bg-black/25 p-3"><span className="font-mono text-base text-primary">Buy area</span><span className="block h-7 w-4/5 rounded-lg bg-white/12" /><span className="block h-6 w-2/5 rounded-lg bg-white/8" /><div className="flex gap-2"><span className="size-9 rounded-full bg-white/12" /><span className="size-9 rounded-full bg-primary/30" /><span className="size-9 rounded-full bg-cyan-300/12" /></div><div className="grid grid-cols-3 gap-2"><span className="h-9 rounded-lg bg-white/[0.06]" /><span className="h-9 rounded-lg bg-white/[0.09]" /><span className="h-9 rounded-lg bg-white/[0.06]" /></div><span className="block h-11 rounded-xl bg-primary/60" /><span className="block h-9 rounded-xl bg-white/[0.045]" /></div>
      </div>}

      {index === 2 && <div className="mt-4 grid min-h-[260px] grid-cols-[0.27fr_0.73fr] gap-3 sm:min-h-[320px]">
        <div className="space-y-3 rounded-[1.2rem] bg-black/28 p-3"><span className="font-mono text-base text-primary">Filters</span>{[0, 1, 2, 3, 4].map((item) => <span key={item} className={"block h-9 rounded-xl " + (item === 1 ? "bg-primary/14" : "bg-white/[0.05]")} />)}</div>
        <div className="rounded-[1.2rem] bg-white/[0.03] p-3"><div className="flex items-center justify-between"><span className="font-mono text-base text-cyan-300">Collection grid</span><span className="rounded-full bg-white/[0.06] px-3 py-2 text-base text-white/45">Sort</span></div><div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">{[0, 1, 2, 3, 4, 5].map((item) => <div key={item} className="rounded-xl bg-white/[0.045] p-2"><span className="block h-16 rounded-lg bg-[linear-gradient(145deg,rgba(34,211,238,0.08),rgba(119,252,117,0.1))]" /><span className="mt-2 block h-2 rounded-full bg-white/12" /><span className="mt-2 block h-2 w-1/2 rounded-full bg-primary/24" /></div>)}</div></div>
      </div>}

      {index === 3 && <div className="mt-4 min-h-[260px] overflow-hidden rounded-[1.2rem] bg-white/[0.035] p-3 sm:min-h-[320px]">
        <div className="relative flex h-32 items-center overflow-hidden rounded-xl bg-[radial-gradient(circle_at_70%_40%,rgba(34,211,238,0.16),transparent_28%),linear-gradient(135deg,rgba(119,252,117,0.17),rgba(0,0,0,0.45))] px-5"><div><span className="font-mono text-base text-primary">Campaign hero</span><span className="mt-3 block h-7 w-40 rounded-lg bg-white/16" /><span className="mt-3 block h-9 w-28 rounded-xl bg-primary/55" /></div><span className="absolute -bottom-10 right-[8%] h-40 w-28 rounded-[48%_44%_30%_35%] bg-[linear-gradient(145deg,#26312d,#070908)]" /></div>
        <div className="mt-3 grid grid-cols-[0.62fr_0.38fr] gap-3"><span className="h-20 rounded-xl bg-white/[0.055]" /><span className="h-20 rounded-xl bg-cyan-300/8" /></div><div className="mt-3 grid grid-cols-3 gap-3"><span className="h-16 rounded-xl bg-white/[0.045]" /><span className="h-16 rounded-xl bg-primary/9" /><span className="h-16 rounded-xl bg-white/[0.045]" /></div>
      </div>}

      {index === 4 && <div className="mt-4 grid min-h-[260px] grid-cols-[0.46fr_0.54fr] gap-3 sm:min-h-[320px]">
        <div className="space-y-3 rounded-[1.2rem] bg-black/28 p-3"><span className="font-mono text-base text-primary">Theme settings</span><div className="flex gap-2"><span className="size-9 rounded-full bg-primary/45" /><span className="size-9 rounded-full bg-cyan-300/25" /><span className="size-9 rounded-full bg-white/16" /></div><span className="block h-10 rounded-xl bg-white/[0.06]" /><span className="block h-10 rounded-xl bg-white/[0.06]" /><div className="flex items-center justify-between rounded-xl bg-white/[0.05] p-3"><span className="text-base text-white/52">Layout</span><span className="h-6 w-11 rounded-full bg-primary/40 p-1"><span className="ml-auto block size-4 rounded-full bg-primary" /></span></div></div>
        <div className="rounded-[1.2rem] bg-white/[0.035] p-3"><span className="font-mono text-base text-cyan-300">Live preview</span><span className="mt-3 block h-20 rounded-xl bg-[linear-gradient(135deg,rgba(119,252,117,0.15),rgba(34,211,238,0.06))]" /><div className="mt-3 grid grid-cols-2 gap-3"><span className="h-20 rounded-xl bg-white/[0.055]" /><span className="h-20 rounded-xl bg-white/[0.04]" /></div><span className="mt-3 block h-9 rounded-xl bg-primary/18" /></div>
      </div>}

      {index === 5 && <div className="relative mt-4 min-h-[260px] overflow-hidden rounded-[1.2rem] bg-[radial-gradient(circle_at_50%_48%,rgba(119,252,117,0.13),transparent_32%),rgba(255,255,255,0.025)] p-4 sm:min-h-[320px]">
        <span className="font-mono text-base text-primary">Responsive QA</span><div className="absolute bottom-8 left-[4%] right-[14%] top-14 rounded-[1.1rem] bg-[#151a18] p-3 shadow-[0_24px_45px_rgba(0,0,0,0.38)]"><span className="block h-16 rounded-lg bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(119,252,117,0.16))]" /><div className="mt-3 grid grid-cols-3 gap-2"><span className="h-16 rounded-lg bg-white/[0.05]" /><span className="h-16 rounded-lg bg-white/[0.05]" /><span className="h-16 rounded-lg bg-white/[0.05]" /></div></div><div className="absolute bottom-5 right-[3%] h-[68%] w-[26%] rounded-[1.5rem] bg-[#101412] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.55)] ring-1 ring-white/10"><span className="mx-auto block h-2 w-9 rounded-full bg-white/14" /><span className="mt-3 block h-20 rounded-lg bg-primary/15" /><span className="mt-3 block h-8 rounded-lg bg-primary/50" /><span className="mt-3 block h-2 rounded-full bg-white/10" /></div>
      </div>}
    </div>
  )
}

export function ShopifyThemeCustomizationPage() {
  const { language, localizedPath } = useLanguage()
  const text = copy[language]
  const structuredData = themeCustomizationStructuredData[language]
  const [comparisonPosition, setComparisonPosition] = useState(50)
  const [mobileHeroMode, setMobileHeroMode] = useState<"original" | "custom">("custom")
  const [activeSignal, setActiveSignal] = useState(0)
  const [signalPaused, setSignalPaused] = useState(false)
  const [activeScope, setActiveScope] = useState(0)
  const [activeArtifact, setActiveArtifact] = useState(0)
  const [activeFaq, setActiveFaq] = useState(0)
  const comparisonCanvasRef = useRef<HTMLDivElement>(null)
  const comparisonInputRef = useRef<HTMLInputElement>(null)
  const comparisonFrameRef = useRef<number | null>(null)
  const comparisonPendingRef = useRef(50)
  const activeScopeItem = text.scopes[activeScope]
  const activeScopeVisual = scopeVisuals[activeScope]
  const ActiveScopeIcon = activeScopeItem.icon
  const activeArtifactItem = text.deliverables[activeArtifact]
  const activeArtifactMeta = artifactMeta[activeArtifact]
  const ActiveArtifactIcon = activeArtifactMeta.icon

  const updateComparisonVisual = (value: number) => {
    const nextValue = Math.min(92, Math.max(8, value))
    comparisonPendingRef.current = nextValue
    if (comparisonFrameRef.current !== null) return
    comparisonFrameRef.current = window.requestAnimationFrame(() => {
      comparisonCanvasRef.current?.style.setProperty("--comparison-position", `${comparisonPendingRef.current}%`)
      comparisonFrameRef.current = null
    })
  }

  const updateComparisonFromClientX = (clientX: number) => {
    const canvas = comparisonCanvasRef.current
    if (!canvas) return
    const bounds = canvas.getBoundingClientRect()
    updateComparisonVisual(((clientX - bounds.left) / bounds.width) * 100)
  }

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const desktopViewport = window.matchMedia("(min-width: 1024px)")
    if (signalPaused || reducedMotion.matches || !desktopViewport.matches) return
    const timer = window.setInterval(() => setActiveSignal((current) => (current + 1) % 5), 5000)
    return () => window.clearInterval(timer)
  }, [signalPaused])

  useEffect(() => () => {
    if (comparisonFrameRef.current !== null) window.cancelAnimationFrame(comparisonFrameRef.current)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData
        breadcrumbs={structuredData.breadcrumbs}
        service={structuredData.service}
        language={language}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="service-hero service-hero-home-layout relative w-full overflow-hidden px-4 pb-12 pt-28 sm:px-6 md:px-10 md:pb-16 md:pt-32 lg:px-[clamp(2.5rem,3.25vw,5rem)] lg:pb-8 lg:pt-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,#0b110d_0%,#040605_48%,#010202_100%)]" />
          <div aria-hidden="true" className="absolute -inset-[42%] animate-theme-aurora-orbit rounded-[42%] bg-[conic-gradient(from_35deg,transparent_0_13%,rgba(34,211,238,0.28)_24%,transparent_38%,rgba(119,252,117,0.34)_51%,transparent_66%,rgba(34,211,238,0.2)_80%,transparent_94%)] opacity-80 blur-3xl will-change-transform motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute -inset-x-[18%] -top-[26%] h-[118%] animate-theme-aurora-drift bg-[radial-gradient(ellipse_at_62%_38%,rgba(119,252,117,0.27),transparent_27%),radial-gradient(ellipse_at_34%_68%,rgba(34,211,238,0.21),transparent_30%)] opacity-80 blur-2xl will-change-transform motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(119,252,117,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.2)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]" />
          <div aria-hidden="true" className="absolute -left-[30vw] inset-y-[7%] w-[28vw] animate-theme-liquid-compile bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.025)_18%,rgba(119,252,117,0.17)_50%,rgba(34,211,238,0.04)_72%,transparent)] mix-blend-screen will-change-transform motion-reduce:animate-none">
            <span className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/75 to-transparent shadow-[0_0_26px_rgba(119,252,117,0.55)]" />
          </div>
          <div aria-hidden="true" className="theme-hero-bottom-glow motion-reduce:hidden" />
          <div aria-hidden="true" className="theme-hero-code-stream theme-hero-code-stream-one motion-reduce:hidden" />
          <div aria-hidden="true" className="theme-hero-code-stream theme-hero-code-stream-two motion-reduce:hidden" />
          <div aria-hidden="true" className="theme-hero-code-stream theme-hero-code-stream-three motion-reduce:hidden" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.14)_62%,rgba(0,0,0,0.64)_100%)]" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

          <div className="service-hero-layout relative mx-auto flex w-full min-w-0 max-w-[1500px] flex-col justify-center lg:min-h-[calc(100svh-7rem)]">
            <div className="relative z-20 mx-auto min-w-0 max-w-6xl text-center">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary shadow-[0_0_28px_rgba(119,252,117,0.06)]">
                <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />
                {text.eyebrow}
              </p>
              <h1 className="mx-auto mb-6 max-w-[1050px] bg-gradient-to-r from-foreground via-primary to-cyan-200 bg-[length:200%_100%] bg-clip-text text-balance text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-normal text-transparent animate-shimmer motion-reduce:animate-none md:mb-8">{text.title}</h1>
              <p className="mx-auto mb-6 max-w-[900px] text-[clamp(1rem,1.8vw,1.35rem)] font-semibold leading-[1.5] text-foreground/90 md:mb-8">{text.subtitle}</p>
              <p className="service-hero-description mx-auto mb-8 hidden max-w-3xl text-base leading-[1.6] text-muted-foreground sm:block md:mb-12 md:text-lg">{text.description}</p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
                <a href={localizedPath("/diagnosis")} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_0_24px_rgba(119,252,117,0.28)] transition-all duration-300 hover:brightness-110 active:scale-[0.97] md:px-10 md:py-5">
                  {text.primaryCta}
                  <ArrowUpRight className="size-4" />
                </a>
                <a href="#scope" className="inline-flex min-h-14 items-center justify-center rounded-full border border-foreground/20 bg-white/[0.025] px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-foreground/5 active:scale-[0.97] md:px-10 md:py-5">
                  {text.secondaryCta}
                </a>
              </div>

              <div className="service-hero-proof mt-10 flex flex-wrap items-center justify-center gap-3 text-muted-foreground/75 md:mt-14">
                {text.proof.map((item, index) => (
                  <div key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-base font-medium">
                    <span className="font-mono text-base text-primary">0{index + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {SHOW_THEME_HERO_PREVIEW && <div className="relative mx-auto mt-7 min-h-[390px] w-full max-w-[1200px] min-w-0 overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.014))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_40px_110px_rgba(0,0,0,0.44),0_0_70px_rgba(34,211,238,0.05)] backdrop-blur-2xl sm:min-h-[460px] sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:p-6 md:min-h-[500px]">
              <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 px-1">
                <div className="flex items-center gap-3"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.8)] motion-reduce:animate-none" /><span className="font-mono text-base uppercase text-primary">Theme preview / online</span></div>
                <span className="hidden font-mono text-base uppercase text-white/35 sm:block">Original ↔ Custom</span>
              </div>

              <div className="absolute inset-x-1 top-[14%] hidden md:block sm:inset-x-3">
                <div ref={comparisonCanvasRef} onPointerDown={(event) => { if (event.button !== 0) return; comparisonInputRef.current?.focus({ preventScroll: true }); event.currentTarget.setPointerCapture(event.pointerId); updateComparisonFromClientX(event.clientX) }} onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) updateComparisonFromClientX(event.clientX) }} onPointerUp={(event) => { updateComparisonFromClientX(event.clientX); if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); setComparisonPosition(comparisonPendingRef.current) }} onPointerCancel={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); setComparisonPosition(comparisonPendingRef.current) }} style={{ "--comparison-position": `${comparisonPosition}%`, touchAction: "none" } as CSSProperties} className="relative mx-auto h-[390px] w-full max-w-[1050px] cursor-ew-resize select-none overflow-hidden rounded-[1.35rem] bg-[#050706] shadow-[0_28px_80px_rgba(0,0,0,0.58),0_0_48px_rgba(119,252,117,0.08),inset_0_1px_0_rgba(255,255,255,0.13)]">
                  <div className="flex h-10 items-center justify-between bg-black/45 px-4 font-mono text-base text-white/42 backdrop-blur-xl">
                    <span className="flex gap-2"><i className="size-2 rounded-full bg-white/35" /><i className="size-2 rounded-full bg-white/20" /><i className="size-2 rounded-full bg-white/12" /></span>
                    <span>product-template.liquid</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 top-10 bg-[#eceeea] text-black">
                    <span className="absolute left-5 top-4 z-10 font-mono text-base tracking-[0.12em] text-black/65">ORIGINAL</span>
                    <div className="grid h-full grid-cols-[1.08fr_0.92fr] pt-12 xl:grid-cols-[1.16fr_0.84fr]">
                      <div className="relative min-w-0 overflow-hidden bg-[#d7d9d5]">
                        <Image src="/images/theme-customization/technical-jacket.jpg" alt="Original Shopify theme product presentation" fill loading="eager" fetchPriority="high" sizes="(max-width: 1024px) 56vw, 34vw" className="object-cover object-center grayscale-[0.55] contrast-[0.88] brightness-110" />
                        <div className="absolute inset-0 bg-white/20" />
                      </div>
                      <div className="flex flex-col justify-center px-5 lg:px-7">
                        <p className="text-base text-black/55">Technical outerwear</p><strong className="mt-1 text-xl leading-tight xl:mt-2 xl:text-2xl">Technical Shell Jacket</strong><p className="mt-2 text-base text-black/65 xl:mt-3">$298.00</p>
                        <div className="mt-3 flex gap-2 xl:mt-5"><span className="size-7 rounded-full border border-black/20 bg-black" /><span className="size-7 rounded-full border border-black/20 bg-zinc-500" /></div>
                        <div className="mt-3 flex min-h-11 items-center justify-center bg-black/20 text-base font-semibold text-black/60 xl:mt-5">Add to cart</div>
                        <div className="mt-3 hidden space-y-2 xl:mt-5 xl:block"><span className="block h-px bg-black/15" /><span className="block h-px bg-black/15" /><span className="block h-px bg-black/15" /></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 top-10 overflow-hidden bg-[#050706] text-white" style={{ clipPath: "inset(0 0 0 var(--comparison-position))" }}>
                    <span className="absolute left-[calc(50%+1.25rem)] top-4 z-10 font-mono text-base tracking-[0.12em] text-primary">CUSTOM</span>
                    <div className="grid h-full grid-cols-[1.08fr_0.92fr] pt-12 xl:grid-cols-[1.16fr_0.84fr]">
                      <div className="relative min-w-0 overflow-hidden bg-[#080a09]">
                        <Image src="/images/theme-customization/technical-jacket.jpg" alt="WhaleLeap customized Shopify product presentation" fill loading="eager" sizes="(max-width: 1024px) 56vw, 34vw" className="object-cover object-center contrast-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                      </div>
                      <div className="relative flex flex-col justify-center bg-[radial-gradient(circle_at_0%_42%,rgba(119,252,117,0.09),transparent_45%)] px-5 lg:px-7">
                        <p className="font-mono text-base uppercase tracking-[0.04em] text-primary">Performance redefined</p><strong className="mt-1 font-serif text-2xl leading-[1.05] xl:mt-2 xl:text-3xl">Technical<br />Shell Jacket</strong><p className="mt-2 text-base text-white/75 xl:mt-3">$298.00</p>
                        <div className="mt-3 flex gap-2 xl:mt-5"><span className="size-7 rounded-full border border-primary bg-black shadow-[0_0_12px_rgba(183,255,42,0.25)]" /><span className="size-7 rounded-full border border-white/25 bg-zinc-500" /></div>
                        <div className="mt-3 flex min-h-11 items-center justify-center bg-primary text-base font-bold text-black shadow-[0_0_24px_rgba(183,255,42,0.18)] xl:mt-5">Add to cart <ArrowUpRight className="ml-2 size-4" /></div>
                        <div className="mt-3 hidden grid-cols-2 gap-2 font-mono text-base text-white/45 xl:mt-4 xl:grid"><span>Waterproof</span><span>Breathable</span></div>
                      </div>
                    </div>
                  </div>

                  <input ref={comparisonInputRef} aria-label={language === "zh" ? "拖动比较原始主题与定制主题" : "Drag to compare original and customized themes"} aria-valuetext={`${Math.round(comparisonPosition)}% Custom`} type="range" min="8" max="92" value={Math.round(comparisonPosition)} onChange={(event) => { const nextValue = Number(event.target.value); updateComparisonVisual(nextValue); setComparisonPosition(nextValue) }} className="peer sr-only" />
                  <div aria-hidden="true" className="pointer-events-none absolute bottom-0 top-10 z-30 w-px bg-primary shadow-[0_0_8px_2px_rgba(183,255,42,0.72),0_0_28px_rgba(183,255,42,0.48)] peer-focus-visible:[&>span]:ring-2 peer-focus-visible:[&>span]:ring-primary peer-focus-visible:[&>span]:ring-offset-2 peer-focus-visible:[&>span]:ring-offset-black" style={{ left: "var(--comparison-position)" }}>
                    <span className="absolute left-1/2 top-1/2 flex size-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/55 bg-black/55 text-base font-bold text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_0_28px_rgba(183,255,42,0.38)] backdrop-blur-xl">↔</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-1 top-12 md:hidden">
                <div role="group" aria-label={language === "zh" ? "切换原始主题与定制主题" : "Switch original and custom theme"} className="mb-4 grid grid-cols-2 rounded-full bg-black/25 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  {(["original", "custom"] as const).map((mode) => <button key={mode} type="button" aria-pressed={mobileHeroMode === mode} onClick={() => setMobileHeroMode(mode)} className={"min-h-12 rounded-full px-4 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none " + (mobileHeroMode === mode ? "bg-primary text-black shadow-[0_0_22px_rgba(119,252,117,0.18)]" : "text-white/55")}>{mode === "original" ? "Original" : "Custom"}</button>)}
                </div>
                <div className="relative mx-auto h-[300px] max-w-[280px] overflow-hidden rounded-[2rem] border-[5px] border-white/14 bg-[#050706] shadow-[0_28px_68px_rgba(0,0,0,0.62)] sm:h-[340px] sm:max-w-[300px] sm:rounded-[2.35rem]">
                  <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
                  <div key={mobileHeroMode} className="grid h-full grid-rows-[1.1fr_0.9fr] animate-in fade-in duration-300 motion-reduce:animate-none">
                    <div className={"relative overflow-hidden " + (mobileHeroMode === "original" ? "bg-[#e4e5e2]" : "bg-[#080a09]")}><Image src="/images/theme-customization/technical-jacket.jpg" alt="Mobile Shopify product page preview" fill loading="eager" sizes="350px" className={"object-cover object-center " + (mobileHeroMode === "original" ? "grayscale-[0.55] brightness-110" : "contrast-110")} /><div className={"absolute inset-0 " + (mobileHeroMode === "original" ? "bg-white/18" : "bg-gradient-to-t from-black/55 via-transparent to-black/10")} /></div>
                    <div className={"flex flex-col justify-center p-4 sm:p-5 " + (mobileHeroMode === "original" ? "bg-[#efefec] text-black" : "bg-[#050706] text-white")}><p className={"font-mono text-base uppercase " + (mobileHeroMode === "original" ? "text-black/50" : "text-primary")}>{mobileHeroMode === "original" ? "Original theme" : "WhaleLeap custom"}</p><strong className="mt-1 text-xl leading-tight sm:mt-2 sm:text-2xl">Technical Shell Jacket</strong><p className="mt-1 text-base opacity-65 sm:mt-2">$298.00 · Waterproof</p><div className={"mt-3 flex min-h-11 items-center justify-center text-base font-bold sm:mt-5 sm:min-h-12 " + (mobileHeroMode === "original" ? "bg-black/15 text-black/55" : "bg-primary text-black")}>Add to cart</div></div>
                  </div>
                </div>
              </div>

            </div>}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#050706] px-6 pb-[50px] pt-[50px] md:px-10 md:pb-[100px] md:pt-[80px]">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(119,252,117,0.07),transparent_30%),linear-gradient(90deg,transparent,rgba(34,211,238,0.018),transparent)]" />

          <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[2.4rem_1.4rem_2.8rem_1.6rem] bg-[radial-gradient(circle_at_76%_38%,rgba(119,252,117,0.09),transparent_28%),radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.055),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] px-5 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_35px_100px_rgba(0,0,0,0.34)] backdrop-blur-2xl md:px-8 md:py-10 lg:px-10">
            <div aria-hidden="true" className="absolute -right-28 top-12 size-[430px] rounded-full bg-primary/[0.035] blur-3xl" />
            <div className="mb-9 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="font-mono text-base uppercase tracking-[0.08em] text-cyan-300">Theme diagnostic</p>
                <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.signalTitle}</h2>
                <p className="mt-4 max-w-2xl text-base leading-[1.75] text-white/48">{language === "zh" ? "定位主题结构中的限制、依赖和体验风险，再把问题映射到具体开发方向。" : "Locate structural limitations, dependencies, and experience risks, then map each issue to a concrete development direction."}</p>
              </div>
              <div className="grid min-w-fit grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 font-mono text-base md:flex md:gap-5">
                <strong className="text-3xl leading-none text-primary">05</strong>
                <span className="uppercase leading-relaxed text-primary/70">Signals detected</span>
                <span className="col-span-2 flex items-center gap-2 text-white/55 md:col-auto"><i className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.85)] motion-reduce:animate-none" />{text.signalRunning}</span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="grid h-[410px] grid-cols-[0.38fr_0.62fr] gap-8 xl:gap-12">
                <div key={language + activeSignal} aria-live="polite" className="relative flex flex-col justify-between px-2 py-7 animate-in fade-in slide-in-from-left-2 duration-300 motion-reduce:animate-none xl:px-4 xl:py-9">
                  <div>
                    <span className="font-mono text-base text-primary">Signal / {String(activeSignal + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 text-3xl font-bold leading-tight text-white">{text.signalItems[activeSignal][0]}</h3>
                    <p className="mt-5 max-w-lg text-base leading-[1.75] text-white/58">{text.signalItems[activeSignal][1]}</p>
                  </div>
                  <div className="grid gap-5 xl:grid-cols-2">
                    <div><span className="font-mono text-base uppercase text-cyan-300/62">{text.signalImpactLabel}</span><p className="mt-2 text-base leading-relaxed text-white/58">{text.signalImpacts[activeSignal]}</p></div>
                    <div><span className="font-mono text-base uppercase text-primary/72">{text.signalActionLabel}</span><p className="mt-2 text-base leading-relaxed text-white/72">{text.signalActions[activeSignal]}</p></div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[2rem] bg-black/10">
                  <div className="absolute inset-x-7 top-5 flex items-center justify-between font-mono text-base text-cyan-300/42"><span>THEME X-RAY / LIVE VIEW</span><span>Target / 0{activeSignal + 1}</span></div>
                  <div aria-hidden="true" className="absolute bottom-[8%] left-[7%] right-[16%] top-[14%] rounded-[1.2rem] bg-[#030504]/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_65px_rgba(34,211,238,0.035)]">
                    <div className="flex h-9 items-center justify-between px-4 font-mono text-base text-white/25"><span>product-template</span><span>1440 / responsive</span></div>
                    <div className="grid h-[calc(100%-2.25rem)] grid-cols-[1.05fr_0.95fr]">
                      <div className="p-4">
                        <div className="h-[48%] rounded-xl bg-white/[0.035] p-3"><span className="font-mono text-base text-white/22">product-media</span><div className="mt-5 h-1 w-3/4 rounded-full bg-cyan-300/10" /><div className="mt-3 h-1 w-1/2 rounded-full bg-cyan-300/[0.07]" /></div>
                        <div className="mt-3 grid grid-cols-3 gap-2"><span className="h-10 rounded-lg bg-white/[0.025]" /><span className="h-10 rounded-lg bg-primary/[0.06]" /><span className="h-10 rounded-lg bg-white/[0.025]" /></div>
                        <div className="mt-3 h-8 rounded-lg bg-cyan-300/[0.025]" />
                      </div>
                      <div className="p-4">
                        <span className="font-mono text-base text-white/22">product-form</span>
                        <div className="mt-5 h-1 w-4/5 rounded-full bg-white/10" /><div className="mt-3 h-1 w-1/2 rounded-full bg-white/[0.07]" />
                        <div className="mt-6 flex gap-2"><i className="size-7 rounded-full bg-primary/[0.08]" /><i className="size-7 rounded-full bg-white/[0.055]" /><i className="size-7 rounded-full bg-white/[0.055]" /></div>
                        <div className="mt-6 h-10 rounded-lg bg-primary/[0.08]" />
                        <div className="mt-4 space-y-3"><span className="block h-1 rounded-full bg-white/[0.07]" /><span className="block h-1 rounded-full bg-white/[0.07]" /><span className="block h-1 rounded-full bg-white/[0.07]" /></div>
                      </div>
                    </div>
                  </div>

                  <div key={activeSignal} aria-hidden="true" className={"absolute bg-primary/[0.055] ring-1 ring-primary/25 shadow-[0_0_34px_rgba(119,252,117,0.14)] animate-in fade-in zoom-in-95 duration-300 motion-reduce:animate-none " + signalHighlightRegions[activeSignal]} />
                  <div aria-hidden="true" className={"absolute right-[4%] top-[18%] h-[62%] w-[20%] rounded-[1.45rem] border-[3px] bg-black/45 p-3 transition-all duration-500 motion-reduce:transition-none " + (activeSignal === 3 ? "border-primary/65 shadow-[0_0_34px_rgba(119,252,117,0.2)]" : "border-cyan-300/13 opacity-45")}>
                    <div className="mx-auto h-3 w-12 rounded-full bg-white/10" /><div className="mt-4 h-[38%] border border-white/10" /><div className="mt-4 h-px w-4/5 bg-white/12" /><div className="mt-3 h-px w-1/2 bg-white/10" /><div className="mt-5 h-8 border border-primary/25" />
                  </div>
                  <span aria-hidden="true" className="absolute inset-x-[7%] top-[49%] h-px animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.62),rgba(119,252,117,0.9),transparent)] bg-[length:200%_100%] shadow-[0_0_18px_rgba(119,252,117,0.22)] motion-reduce:animate-none" />
                  <div aria-hidden="true" className="absolute bottom-5 left-7 flex gap-5 font-mono text-base text-white/25"><span>layout</span><span>app layer</span><span>mobile</span><span>performance</span></div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-5 gap-2 rounded-full bg-black/20 p-2 backdrop-blur-xl">
                {text.signalItems.map(([title], index) => {
                  const isActive = activeSignal === index
                  return <button key={title} type="button" aria-pressed={isActive} onClick={() => { setActiveSignal(index); setSignalPaused(true) }} className={"group relative min-h-[76px] rounded-full px-5 text-left transition-all duration-300 motion-reduce:transition-none " + (isActive ? "bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" : "hover:bg-white/[0.035]")}>
                    <span className={"font-mono text-base " + (isActive ? "text-primary" : "text-cyan-300/42")}>{String(index + 1).padStart(2, "0")}</span>
                    <strong className={"mt-2 block text-base leading-snug " + (isActive ? "text-white" : "text-white/48 group-hover:text-white/72")}>{title}</strong>
                  </button>
                })}
              </div>
            </div>

            <div className="lg:hidden">
                <div aria-hidden="true" className="relative mx-auto mb-8 h-[280px] w-[172px] rounded-[1.8rem] border-[3px] border-cyan-300/18 bg-black/30 p-4 shadow-[0_0_55px_rgba(119,252,117,0.08)]">
                  <div className="mx-auto h-4 w-16 rounded-full bg-white/10" />
                  <div className="mt-4 h-20 border border-white/10"><span className="m-2 block font-mono text-base text-white/20">media</span></div>
                  <div className="mt-3 h-px w-3/4 bg-white/15" /><div className="mt-3 h-px w-1/2 bg-white/12" />
                  <div className="mt-5 h-9 border border-primary/30 bg-primary/[0.035]" />
                  <div className="mt-4 space-y-3"><span className="block h-px bg-white/12" /><span className="block h-px bg-white/12" /></div>
                  <span className="absolute inset-x-[-35%] top-[47%] h-px animate-shimmer bg-gradient-to-r from-transparent via-cyan-300 to-primary bg-[length:200%_100%] motion-reduce:animate-none" />
                  <span className="absolute -right-3 top-[44%] flex size-7 items-center justify-center rounded-full border border-primary bg-black font-mono text-base text-primary shadow-[0_0_18px_rgba(119,252,117,0.35)]">{String(activeSignal + 1).padStart(2, "0")}</span>
                </div>

                <div className="space-y-2">
                  {text.signalItems.map(([title, description], index) => {
                    const isActive = activeSignal === index
                    return <div key={title} className={"rounded-[1.35rem] transition-colors " + (isActive ? "bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" : "bg-white/[0.018]")}>
                      <button type="button" aria-expanded={isActive} onClick={() => { setActiveSignal(index); setSignalPaused(true) }} className="flex min-h-[68px] w-full items-center gap-4 px-2 text-left">
                        <span className={"flex size-10 shrink-0 items-center justify-center rounded-full border font-mono text-base " + (isActive ? "border-primary text-primary shadow-[0_0_20px_rgba(119,252,117,0.25)]" : "border-cyan-300/25 text-cyan-300/50")}>{String(index + 1).padStart(2, "0")}</span>
                        <strong className={"flex-1 text-base " + (isActive ? "text-white" : "text-white/55")}>{title}</strong>
                        <span className="font-mono text-base text-primary">{isActive ? "−" : "+"}</span>
                      </button>
                      {isActive && <div key={language + index} className="px-4 pb-6 pl-[4.1rem] animate-in fade-in slide-in-from-top-2 duration-300 motion-reduce:animate-none"><p className="text-base leading-[1.75] text-white/58">{description}</p><p className="mt-3 border-l border-primary/40 pl-4 text-base leading-[1.75] text-white/72"><span className="mb-1 block font-mono text-base uppercase text-primary/70">{text.signalActionLabel}</span>{text.signalActions[index]}</p></div>}
                    </div>
                  })}
                </div>
            </div>
          </div>
        </section>

        <section id="scope" className="scroll-mt-24 bg-black px-4 py-[50px] sm:px-6 md:px-10 md:py-[100px]">
          <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_32%_48%,rgba(119,252,117,0.1),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.055),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem]">
            <div className="relative z-20 mb-5 px-5 pt-7 text-center sm:px-6 sm:pt-8 md:px-10 md:pt-10 lg:px-12">
              <p className="font-mono text-base uppercase tracking-[0.08em] text-primary">Customization studio</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.scopeTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.75] text-white/52">{text.scopeIntro}</p>
            </div>

            <div className="hidden lg:block">
              <div className="relative grid min-h-[560px] grid-cols-[0.64fr_0.36fr]">
                <div className="relative min-h-[560px] overflow-hidden rounded-[2.6rem_1.5rem_3rem_1.8rem]">
                  <Image key={activeScopeVisual.src + "-backdrop"} src={activeScopeVisual.src} alt="" aria-hidden="true" fill sizes="64vw" className="scale-110 object-cover object-center opacity-25 blur-xl animate-in fade-in duration-500 motion-reduce:animate-none" />
                  <Image key={activeScopeVisual.src + activeScope + "-desktop"} src={activeScopeVisual.src} alt={activeScopeVisual.alt} fill sizes="64vw" style={{ objectFit: activeScopeVisual.fit }} className="object-center drop-shadow-[0_35px_55px_rgba(0,0,0,0.7)] animate-in fade-in zoom-in-95 duration-500 motion-reduce:animate-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,4,3,0.16),transparent_50%,rgba(5,7,6,0.96)),linear-gradient(0deg,rgba(5,7,6,0.72),transparent_34%)]" />
                  <span aria-hidden="true" className="absolute inset-x-[8%] top-[48%] h-px animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.55),rgba(119,252,117,0.9),transparent)] bg-[length:200%_100%] shadow-[0_0_18px_rgba(119,252,117,0.24)] motion-reduce:animate-none" />
                  <span key={activeScope} aria-hidden="true" className={"absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/65 bg-black/55 font-mono text-base text-primary shadow-[0_0_28px_rgba(119,252,117,0.35)] backdrop-blur-xl animate-in fade-in zoom-in-75 duration-300 motion-reduce:animate-none " + scopeMarkerPositions[activeScope]}>{String(activeScope + 1).padStart(2, "0")}</span>
                </div>

                <div className="relative z-10 flex items-center px-8 pr-10 xl:px-10 xl:pr-12">
                  <div key={language + activeScope} role="status" aria-live="polite" className="w-full animate-in fade-in slide-in-from-right-3 duration-300 motion-reduce:animate-none">
                    <div className="flex items-center gap-4">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_25px_rgba(119,252,117,0.1)]"><ActiveScopeIcon className="size-6" /></span>
                      <span className="font-mono text-base uppercase text-primary">Scope / {String(activeScope + 1).padStart(2, "0")} of 08</span>
                    </div>
                    <h3 className="mt-6 max-w-xl text-3xl font-bold leading-tight text-white">{activeScopeItem.title}</h3>
                    <p className="mt-5 max-w-xl text-base leading-[1.8] text-white/62">{activeScopeItem.text}</p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {text.scopeKeywords[activeScope].map((keyword) => <span key={keyword} className="rounded-full bg-white/[0.055] px-4 py-2 text-base text-white/58 backdrop-blur-xl">{keyword}</span>)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-20 grid grid-cols-4 gap-2 px-6 pb-7 pt-5 lg:px-10 lg:pb-9">
                {text.scopes.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeScope === index
                  return <button type="button" key={item.title} onClick={() => setActiveScope(index)} aria-pressed={isActive} className={"group flex min-h-[76px] items-center gap-3 rounded-full px-5 text-left transition-all duration-300 motion-reduce:transition-none " + (isActive ? "bg-white/[0.09] shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_0_30px_rgba(119,252,117,0.08)]" : "bg-black/10 hover:bg-white/[0.04]")}>
                    <span className={"flex size-10 shrink-0 items-center justify-center rounded-full transition-colors " + (isActive ? "bg-primary text-black" : "bg-white/[0.04] text-white/38 group-hover:text-primary")}><Icon className="size-5" /></span>
                    <span className="min-w-0"><span className={"font-mono text-base " + (isActive ? "text-primary" : "text-cyan-300/35")}>{String(index + 1).padStart(2, "0")}</span><strong className={"mt-1 block text-base leading-snug " + (isActive ? "text-white" : "text-white/48 group-hover:text-white/72")}>{item.title}</strong></span>
                  </button>
                })}
              </div>
            </div>

            <div className="px-4 pb-6 pt-0 sm:px-5 sm:pb-7 lg:hidden">
              <div className="relative mx-auto aspect-[3/2] max-w-[560px] overflow-hidden rounded-[1.5rem] bg-black/20 sm:rounded-[2rem]">
                <Image key={activeScopeVisual.src + "-mobile-backdrop"} src={activeScopeVisual.src} alt="" aria-hidden="true" fill sizes="(max-width: 768px) 88vw, 560px" className="scale-110 object-cover object-center opacity-25 blur-xl animate-in fade-in duration-500 motion-reduce:animate-none" />
                <Image key={activeScopeVisual.src + activeScope + "-mobile"} src={activeScopeVisual.src} alt={activeScopeVisual.alt} fill sizes="(max-width: 768px) 88vw, 560px" style={{ objectFit: activeScopeVisual.fit }} className="object-center animate-in fade-in zoom-in-95 duration-500 motion-reduce:animate-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span aria-hidden="true" className="absolute inset-x-[8%] top-[48%] h-px animate-shimmer bg-gradient-to-r from-transparent via-cyan-300 to-primary bg-[length:200%_100%] motion-reduce:animate-none" />
                <span className="absolute bottom-5 left-5 flex size-11 items-center justify-center rounded-full border border-primary/60 bg-black/55 font-mono text-base text-primary backdrop-blur-xl">{String(activeScope + 1).padStart(2, "0")}</span>
              </div>

              <div key={language + activeScope} role="status" aria-live="polite" className="px-1 py-6 sm:py-8 animate-in fade-in slide-in-from-bottom-2 duration-300 motion-reduce:animate-none">
                <div className="flex items-center gap-3 text-primary"><ActiveScopeIcon className="size-6" /><span className="font-mono text-base uppercase">Scope / {String(activeScope + 1).padStart(2, "0")} of 08</span></div>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-white">{activeScopeItem.title}</h3>
                <p className="mt-4 text-base leading-[1.75] text-white/62">{activeScopeItem.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">{text.scopeKeywords[activeScope].map((keyword) => <span key={keyword} className="rounded-full bg-white/[0.055] px-3 py-2 text-base text-white/58">{keyword}</span>)}</div>
              </div>

              <div className="mt-5">
                <div role="group" aria-label={language === "zh" ? "服务范围切换" : "Scope selector"} className="-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-[calc(50%-52px)] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {text.scopes.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeScope === index
                    return <button type="button" key={item.title} onClick={(event) => { setActiveScope(index); event.currentTarget.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest", inline: "center" }) }} aria-label={`${String(index + 1).padStart(2, "0")} ${item.title}`} aria-pressed={isActive} className={"relative flex min-h-[68px] min-w-[136px] shrink-0 snap-center items-center gap-3 overflow-hidden rounded-[1.25rem] px-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none " + (isActive ? "bg-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]" : "bg-black/15 text-white/48")}>
                      <span className={"flex size-9 shrink-0 items-center justify-center rounded-full " + (isActive ? "bg-primary text-black" : "bg-white/[0.05] text-white/42")}><Icon className="size-4" /></span>
                      <span className="min-w-0 whitespace-nowrap"><span className={"block font-mono text-base " + (isActive ? "text-primary" : "text-cyan-300/45")}>{String(index + 1).padStart(2, "0")}</span><strong className={"mt-1 block truncate text-base leading-none " + (isActive ? "text-white" : "text-white/55")}>{text.scopeShortLabels[index]}</strong></span>
                      {isActive && <span aria-hidden="true" className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />}
                    </button>
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-5 text-center">
              <p className="font-mono text-base uppercase tracking-[0.08em] text-cyan-300">Theme transformation</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{language === "zh" ? "技术驱动，体验进化" : "Engineering the experience"}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground">{language === "zh" ? "Figma 设计被编译为可配置、可维护、可继续迭代的 Shopify 主题能力。" : "Figma designs are compiled into configurable, maintainable Shopify theme capabilities ready for iteration."}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_50%_44%,rgba(119,252,117,0.115),transparent_24%),radial-gradient(circle_at_86%_26%,rgba(34,211,238,0.07),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] px-4 pb-5 pt-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:pb-7 sm:pt-6 lg:px-10 lg:pb-9 lg:pt-8">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.075] [background-image:linear-gradient(rgba(34,211,238,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-3"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_16px_rgba(119,252,117,0.8)] motion-reduce:animate-none" /><span className="font-mono text-base uppercase text-primary">Theme compiler / online</span></div>
                <span className="font-mono text-base uppercase text-white/35">Figma → Shopify 2.0</span>
              </div>

              <div aria-hidden="true" className="absolute left-[24%] right-[25%] top-[49%] hidden h-px overflow-hidden bg-white/8 lg:block"><span className="block h-full animate-shimmer bg-gradient-to-r from-cyan-300/20 via-primary to-cyan-300/20 bg-[length:200%_100%] motion-reduce:animate-none" /></div>
              <div aria-hidden="true" className="absolute bottom-[26%] left-1/2 top-[27%] w-px -translate-x-1/2 overflow-hidden bg-white/8 lg:hidden"><span className="block h-full animate-pulse bg-gradient-to-b from-cyan-300/20 via-primary to-cyan-300/20 motion-reduce:animate-none" /></div>

              <div className="relative z-10 mt-7 grid min-w-0 gap-5 lg:grid-cols-[0.28fr_0.34fr_0.38fr] lg:items-center lg:gap-6">
                <div className="min-w-0 rounded-[1.7rem] bg-black/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-5">
                  <div className="flex items-center gap-3 text-cyan-300"><Paintbrush className="size-5" /><span className="font-mono text-base uppercase">Design input</span></div>
                  <h3 className="mt-3 text-2xl font-bold text-white">{language === "zh" ? "Figma 设计系统" : "Figma design system"}</h3>
                  <div className="mt-5 overflow-hidden rounded-[1.35rem] bg-[#111514] p-3 shadow-[0_22px_50px_rgba(0,0,0,0.3)]">
                    <div className="mb-3 flex items-center gap-2"><span className="size-2 rounded-full bg-white/20" /><span className="size-2 rounded-full bg-cyan-300/45" /><span className="size-2 rounded-full bg-primary/65" /><span className="ml-auto font-mono text-base text-white/32">1440 / AUTO</span></div>
                    <div className="grid grid-cols-[38px_1fr] gap-3">
                      <div className="space-y-2 rounded-xl bg-black/25 p-2"><span className="block h-7 rounded-lg bg-primary/15" /><span className="block h-7 rounded-lg bg-white/[0.05]" /><span className="block h-7 rounded-lg bg-white/[0.05]" /><span className="block h-7 rounded-lg bg-cyan-300/10" /></div>
                      <div className="rounded-xl bg-white/[0.035] p-3">
                        <span className="block h-16 rounded-xl bg-[linear-gradient(135deg,rgba(119,252,117,0.16),rgba(34,211,238,0.055))]" />
                        <div className="mt-3 grid grid-cols-2 gap-2"><span className="h-12 rounded-lg bg-white/[0.06]" /><span className="h-12 rounded-lg bg-white/[0.04]" /></div>
                        <span className="mt-3 block h-8 rounded-lg bg-primary/10" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full bg-white/[0.05] px-3 py-2 text-base text-white/55">Components</span><span className="rounded-full bg-white/[0.05] px-3 py-2 text-base text-white/55">Auto Layout</span><span className="rounded-full bg-white/[0.05] px-3 py-2 text-base text-white/55">Tokens</span></div>
                </div>

                <div className="relative flex min-w-0 flex-col items-center py-5 text-center lg:py-0">
                  <div className="relative flex size-[210px] items-center justify-center rounded-[44%_56%_48%_52%/54%_42%_58%_46%] bg-[radial-gradient(circle_at_40%_32%,rgba(255,255,255,0.2),transparent_24%),linear-gradient(145deg,rgba(119,252,117,0.22),rgba(34,211,238,0.06)_58%,rgba(0,0,0,0.28))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_75px_rgba(119,252,117,0.13)] sm:size-[230px]">
                    <span aria-hidden="true" className="absolute inset-4 animate-[spin_18s_linear_infinite] rounded-[46%_54%_42%_58%] border border-dashed border-primary/25 motion-reduce:animate-none" />
                    <div className="relative z-10"><FileCode2 className="mx-auto size-9 text-primary" /><span className="mt-4 block font-mono text-base uppercase text-primary">Liquid core</span><strong className="mt-2 block text-xl text-white">{language === "zh" ? "主题编译中" : "Compiling theme"}</strong></div>
                  </div>
                  <div className="mt-5 w-full max-w-[320px] rounded-[1.35rem] bg-black/28 p-4 text-left font-mono text-base leading-[1.8] text-white/48 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"><span className="text-cyan-300">render</span> product-card<br /><span className="text-primary">schema</span> section.blocks<br /><span className="text-cyan-300">assign</span> responsive_state</div>
                </div>

                <div className="min-w-0 rounded-[1.7rem] bg-black/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-5">
                  <div className="flex items-center gap-3 text-primary"><MonitorSmartphone className="size-5" /><span className="font-mono text-base uppercase">Storefront output</span></div>
                  <h3 className="mt-3 text-2xl font-bold text-white">{language === "zh" ? "可配置主题输出" : "Configurable theme output"}</h3>
                  <div className="relative mt-5 min-h-[245px] sm:min-h-[280px]">
                    <div className="absolute inset-x-0 top-0 overflow-hidden rounded-[1.35rem] bg-[#0e1211] p-3 shadow-[0_24px_55px_rgba(0,0,0,0.35)]">
                      <div className="mb-3 flex items-center gap-2"><span className="size-2 rounded-full bg-white/20" /><span className="size-2 rounded-full bg-white/20" /><span className="size-2 rounded-full bg-primary/60" /><span className="ml-auto font-mono text-base text-white/32">Theme editor</span></div>
                      <div className="grid grid-cols-[0.3fr_0.7fr] gap-3">
                        <div className="space-y-2 rounded-xl bg-black/30 p-2"><span className="block h-8 rounded-lg bg-primary/12" /><span className="block h-8 rounded-lg bg-white/[0.05]" /><span className="block h-8 rounded-lg bg-white/[0.05]" /><span className="block h-8 rounded-lg bg-cyan-300/8" /></div>
                        <div className="rounded-xl bg-white/[0.035] p-2"><span className="block h-20 rounded-lg bg-[linear-gradient(135deg,rgba(34,211,238,0.13),rgba(119,252,117,0.15))]" /><div className="mt-2 grid grid-cols-3 gap-2"><span className="h-10 rounded-lg bg-white/[0.055]" /><span className="h-10 rounded-lg bg-white/[0.055]" /><span className="h-10 rounded-lg bg-white/[0.055]" /></div></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-[3%] w-[29%] min-w-[96px] rounded-[1.65rem] bg-[#111514] p-2 shadow-[0_18px_45px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
                      <div className="mx-auto h-2 w-10 rounded-full bg-white/14" /><span className="mt-3 block h-20 rounded-xl bg-[linear-gradient(150deg,rgba(119,252,117,0.15),rgba(34,211,238,0.08))]" /><span className="mt-2 block h-7 rounded-lg bg-primary/50" /><span className="mt-2 block h-2 rounded-full bg-white/10" /><span className="mt-2 block h-2 w-2/3 rounded-full bg-white/8" />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full bg-primary/10 px-3 py-2 text-base text-primary">Theme Editor</span><span className="rounded-full bg-white/[0.05] px-3 py-2 text-base text-white/55">Desktop</span><span className="rounded-full bg-white/[0.05] px-3 py-2 text-base text-white/55">Mobile QA</span></div>
                </div>
              </div>

              <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-2 lg:mt-8">
                {transformationStages.map((stage, index) => { const Icon = stage.icon; return <div key={stage.label} className="flex min-h-12 items-center gap-2 rounded-full bg-white/[0.045] px-4 text-white/48"><Icon className="size-4 text-primary/70" /><span className="font-mono text-base">0{index + 1}</span><strong className="text-base font-medium text-white/68">{stage.label}</strong></div> })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-5 text-center">
              <p className="flex items-center justify-center gap-2 font-mono text-base uppercase tracking-[0.08em] text-cyan-300"><ScanSearch className="size-5" />Build artifacts</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.deliverablesTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground">{text.deliverablesIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_30%_48%,rgba(34,211,238,0.075),transparent_28%),radial-gradient(circle_at_72%_42%,rgba(119,252,117,0.105),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] px-4 pb-5 pt-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:pb-7 sm:pt-6 lg:px-10 lg:pb-9 lg:pt-8">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.065] [background-image:linear-gradient(rgba(34,211,238,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.28)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1"><div className="flex items-center gap-3"><span className="size-2 rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.7)]" /><span className="font-mono text-base uppercase text-primary">Delivery package</span></div><span className="font-mono text-base uppercase text-white/35">6 artifacts / ready</span></div>

              <div className="relative z-10 mt-6 grid min-w-0 gap-6 lg:grid-cols-[0.62fr_0.38fr] lg:items-center lg:gap-8">
                <div key={activeArtifact} className="min-w-0 animate-in fade-in zoom-in-95 duration-300 motion-reduce:animate-none"><ArtifactPreview index={activeArtifact} /></div>

                <div key={language + activeArtifact} role="status" aria-live="polite" className="min-w-0 px-1 py-2 animate-in fade-in slide-in-from-right-3 duration-300 motion-reduce:animate-none lg:px-3">
                  <div className="flex items-center gap-4"><span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"><ActiveArtifactIcon className="size-6" /></span><div><span className="font-mono text-base uppercase text-primary">Artifact / {String(activeArtifact + 1).padStart(2, "0")} of 06</span><span className="mt-1 block font-mono text-base uppercase text-white/32">{activeArtifactMeta.type}</span></div></div>
                  <h3 className="mt-6 text-3xl font-bold leading-tight text-white">{activeArtifactItem[0]}</h3>
                  <p className="mt-5 max-w-xl text-base leading-[1.8] text-white/62">{activeArtifactItem[1]}</p>
                  <div className="mt-7 rounded-[1.35rem] bg-black/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"><span className="font-mono text-base uppercase text-cyan-300/75">File output</span><code className="mt-3 block break-all font-mono text-base leading-relaxed text-white/58">{activeArtifactMeta.file}</code></div>
                  <div className="mt-6 flex flex-wrap gap-2">{activeArtifactMeta.keywords.map((keyword) => <span key={keyword} className="rounded-full bg-white/[0.05] px-4 py-2 text-base text-white/55">{keyword}</span>)}</div>
                  <div className="mt-7 flex items-center gap-3 font-mono text-base uppercase text-primary"><ShieldCheck className="size-5" />Ready for handoff</div>
                </div>
              </div>

              <div className="relative z-10 mt-7 lg:mt-9">
                <div role="group" aria-label={language === "zh" ? "交付成果切换" : "Artifact selector"} className="-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-[calc(50%-52px)] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:justify-center lg:overflow-visible lg:px-0">
                  {text.deliverables.map(([name], index) => {
                    const meta = artifactMeta[index]
                    const Icon = meta.icon
                    const isActive = activeArtifact === index
                    return <button type="button" key={name} onClick={(event) => { setActiveArtifact(index); if (window.innerWidth < 1024) event.currentTarget.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest", inline: "center" }) }} aria-label={`${String(index + 1).padStart(2, "0")} ${name}`} aria-pressed={isActive} className={"relative flex min-h-[68px] min-w-[136px] shrink-0 snap-center items-center gap-3 overflow-hidden rounded-[1.25rem] px-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none " + (isActive ? "bg-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]" : "bg-black/15 text-white/48")}><span className={"flex size-9 shrink-0 items-center justify-center rounded-full " + (isActive ? "bg-primary text-black" : "bg-white/[0.05] text-white/42")}><Icon className="size-4" /></span><span className="min-w-0 whitespace-nowrap"><span className={"block font-mono text-base " + (isActive ? "text-primary" : "text-cyan-300/45")}>{String(index + 1).padStart(2, "0")}</span><strong className={"mt-1 block truncate text-base leading-none " + (isActive ? "text-white" : "text-white/55")}>{meta.short}</strong></span>{isActive && <span aria-hidden="true" className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />}</button>
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-5 text-center">
              <p className="font-mono text-base uppercase tracking-[0.08em] text-cyan-300">Delivery pipeline</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.processTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground">{language === "zh" ? "从主题诊断到正式上线，每一步都有明确的工作范围、质量检查与交付状态。" : "From theme diagnosis to launch, every stage has a clear scope, quality check, and delivery status."}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_26%_48%,rgba(119,252,117,0.12),transparent_25%),radial-gradient(circle_at_78%_28%,rgba(34,211,238,0.07),transparent_31%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(34,211,238,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-3"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_16px_rgba(119,252,117,0.8)] motion-reduce:animate-none" /><span className="font-mono text-base uppercase text-primary">Launch sequence / online</span></div>
                <span className="font-mono text-base uppercase text-white/35">05 stages · release ready</span>
              </div>

              <div className="relative z-10 mt-7 grid min-w-0 gap-7 xl:grid-cols-[0.34fr_0.66fr] xl:items-center xl:gap-10">
                <div className="relative flex min-h-[360px] min-w-0 items-center justify-center overflow-hidden rounded-[1.7rem] bg-black/22 px-5 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:min-h-[390px]">
                  <div aria-hidden="true" className="absolute size-[310px] rounded-full bg-primary/[0.035] blur-2xl sm:size-[350px]" />
                  <div className="relative flex size-[260px] items-center justify-center rounded-[44%_56%_48%_52%/54%_42%_58%_46%] bg-[radial-gradient(circle_at_38%_30%,rgba(255,255,255,0.2),transparent_22%),linear-gradient(145deg,rgba(119,252,117,0.21),rgba(34,211,238,0.055)_58%,rgba(0,0,0,0.3))] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_85px_rgba(119,252,117,0.14)] sm:size-[290px]">
                    <span aria-hidden="true" className="absolute inset-4 animate-[spin_22s_linear_infinite] rounded-[46%_54%_42%_58%] border border-dashed border-primary/24 motion-reduce:animate-none" />
                    <span aria-hidden="true" className="absolute inset-10 animate-[spin_16s_linear_infinite_reverse] rounded-full border border-cyan-300/12 motion-reduce:animate-none" />
                    <div className="relative z-10 px-8">
                      <PackageCheck className="mx-auto size-10 text-primary" />
                      <span className="mt-4 block font-mono text-base uppercase text-primary">Theme release</span>
                      <strong className="mt-2 block text-2xl text-white">{language === "zh" ? "发布引擎" : "Launch engine"}</strong>
                      <span className="mt-3 block text-base leading-relaxed text-white/52">05 {language === "zh" ? "个阶段已就绪" : "stages ready"}</span>
                    </div>
                  </div>
                </div>

                <div className="relative min-w-0 px-1 py-1 sm:px-3 xl:px-0 xl:py-4">
                  <div aria-hidden="true" className="absolute bottom-8 left-[26px] top-8 w-px overflow-hidden bg-white/8 xl:bottom-auto xl:left-[9%] xl:right-[9%] xl:top-[50px] xl:h-px xl:w-auto">
                    <span className="block h-full w-full animate-shimmer bg-gradient-to-b from-cyan-300/30 via-primary to-cyan-300/30 bg-[length:100%_200%] shadow-[0_0_18px_rgba(119,252,117,0.25)] motion-reduce:animate-none xl:bg-gradient-to-r xl:bg-[length:200%_100%]" />
                  </div>

                  <ol className="relative grid gap-5 xl:grid-cols-5 xl:gap-3">
                    {text.process.map((item, index) => {
                      const stage = deliveryStages[index]
                      const Icon = stage.icon
                      return (
                        <li key={item} className="relative grid min-w-0 grid-cols-[54px_1fr] items-start gap-4 xl:block xl:text-center">
                          <div className="relative z-10 flex size-[52px] items-center justify-center rounded-full bg-[#0b100e] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_0_28px_rgba(119,252,117,0.13)] ring-1 ring-primary/30 xl:mx-auto">
                            <Icon className="size-5" />
                            <span aria-hidden="true" className="absolute inset-[-5px] animate-pulse rounded-full border border-primary/10 motion-reduce:animate-none" />
                          </div>
                          <div className="min-w-0 pb-4 xl:mt-6 xl:pb-0">
                            <span className="font-mono text-base uppercase text-cyan-300/55">0{index + 1} · {stage.code}</span>
                            <h3 className="mt-2 text-xl font-bold leading-tight text-white">{language === "zh" ? stage.zh : stage.label}</h3>
                            <p className="mt-3 text-base leading-[1.75] text-white/55 xl:text-left">{item}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ol>
                </div>
              </div>

              <div className="relative z-10 mt-7 flex flex-wrap items-center justify-center gap-2 xl:mt-9">
                <span className="flex min-h-12 items-center gap-2 rounded-full bg-primary/10 px-4 text-base font-medium text-primary"><ShieldCheck className="size-5" />{language === "zh" ? "核心购买路径已检查" : "Core purchase path checked"}</span>
                <span className="flex min-h-12 items-center gap-2 rounded-full bg-white/[0.045] px-4 text-base text-white/55"><MonitorSmartphone className="size-5 text-cyan-300" />Desktop · Tablet · Mobile</span>
                <span className="flex min-h-12 items-center gap-2 rounded-full bg-white/[0.045] px-4 text-base text-white/55"><PackageCheck className="size-5 text-primary" />{language === "zh" ? "可维护性交付" : "Maintainable handoff"}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-5 text-center">
              <p className="flex items-center justify-center gap-2 font-mono text-base uppercase tracking-[0.08em] text-cyan-300"><HelpCircle className="size-5" />Knowledge base</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.faqTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground">{language === "zh" ? "关于主题定制、Figma 落地、数据安全与上线风险的关键答案。" : "Key answers about theme customization, Figma implementation, data safety, and launch risk."}</p>
            </div>

            <ServiceFaqPanel
              entries={text.faqs.map((item, index) => ({
                question: item.q,
                answer: item.a,
                category: faqMeta[index].code,
                tags: faqMeta[index][language],
              }))}
              activeIndex={activeFaq}
              onActiveIndexChange={setActiveFaq}
              panelId="faq-answer-panel"
              accordionPrefix="faq"
              statusLabel="Theme knowledge / online"
              directoryLabel={language === "zh" ? "常见问题目录" : "FAQ directory"}
              answerLabel={language === "zh" ? "当前问题答案" : "Current answer"}
            />
          </div>
        </section>

        <section className="bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-5 text-center">
              <p className="font-mono text-base uppercase tracking-[0.08em] text-cyan-300">Service navigator</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.relatedTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground">{text.relatedIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_25%_48%,rgba(119,252,117,0.11),transparent_27%),radial-gradient(circle_at_82%_32%,rgba(34,211,238,0.075),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-8 lg:py-7">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(34,211,238,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-3"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_16px_rgba(119,252,117,0.8)] motion-reduce:animate-none" /><span className="font-mono text-base uppercase text-primary">Service route map / online</span></div>
                <span className="font-mono text-base uppercase text-white/35">02 next routes ready</span>
              </div>

              <div className="relative z-10 mt-5 grid min-w-0 gap-5 lg:grid-cols-[0.36fr_0.64fr] lg:items-stretch lg:gap-8">
                <div className="relative flex min-h-[280px] min-w-0 items-center justify-center overflow-hidden rounded-[1.7rem] bg-black/20 px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.065)] lg:min-h-[400px]">
                  <div aria-hidden="true" className="absolute size-[310px] rounded-full bg-primary/[0.035] blur-2xl" />
                  <div className="relative flex size-[220px] items-center justify-center rounded-[44%_56%_48%_52%/54%_42%_58%_46%] bg-[radial-gradient(circle_at_38%_30%,rgba(255,255,255,0.18),transparent_23%),linear-gradient(145deg,rgba(119,252,117,0.19),rgba(34,211,238,0.05)_58%,rgba(0,0,0,0.3))] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.17),0_0_78px_rgba(119,252,117,0.13)] sm:size-[240px]">
                    <span aria-hidden="true" className="absolute inset-4 animate-[spin_24s_linear_infinite] rounded-[46%_54%_42%_58%] border border-dashed border-primary/22 motion-reduce:animate-none" />
                    <div className="relative z-10 px-8">
                      <Settings2 className="mx-auto size-10 text-primary" />
                      <span className="mt-4 block font-mono text-base uppercase text-primary">Current assessment</span>
                      <strong className="mt-2 block text-2xl leading-tight text-white">Theme Customization</strong>
                      <span className="mt-4 block text-base leading-[1.65] text-white/52">{language === "zh" ? "现有主题是否值得继续迭代？" : "Is the current theme worth iterating?"}</span>
                    </div>
                  </div>
                </div>

                <div className="relative min-w-0 space-y-2 rounded-[1.7rem] bg-black/18 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)]">
                  <span aria-hidden="true" className="absolute bottom-10 left-[35px] top-[-28px] w-px bg-gradient-to-b from-primary/45 via-cyan-300/25 to-primary/20 lg:hidden" />
                  {text.relatedLinks.map((link, index) => {
                    const meta = relatedRouteMeta[index]
                    const Icon = meta.icon
                    return (
                      <a key={link.href} href={localizedPath(link.href)} className="group relative flex min-h-[180px] min-w-0 flex-col justify-between rounded-[1.45rem] bg-transparent px-4 py-5 transition-all duration-300 hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none sm:px-6 lg:min-h-[190px] lg:px-7">
                        <span aria-hidden="true" className={"absolute inset-0 rounded-[1.45rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none " + (index === 0 ? "bg-[radial-gradient(circle_at_12%_50%,rgba(119,252,117,0.12),transparent_36%)]" : "bg-[radial-gradient(circle_at_12%_50%,rgba(34,211,238,0.11),transparent_36%)]")} />
                        <span aria-hidden="true" className={"absolute -left-10 top-1/2 hidden h-px w-14 origin-right scale-x-50 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none lg:block " + (index === 0 ? "bg-primary shadow-[0_0_15px_rgba(119,252,117,0.45)]" : "bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)]")} />
                        <div className="relative z-10 flex items-start gap-4">
                          <span className={"flex size-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 motion-reduce:transition-none " + (index === 0 ? "bg-primary/12 text-primary group-hover:bg-primary group-hover:text-black" : "bg-cyan-300/10 text-cyan-300 group-hover:bg-cyan-300 group-hover:text-black")}><Icon className="size-6" /></span>
                          <div className="min-w-0"><span className={"font-mono text-base uppercase " + (index === 0 ? "text-primary" : "text-cyan-300")}>Route / 0{index + 1} · {meta.code}</span><h3 className="mt-2 text-2xl font-bold leading-tight text-white">{link.title}</h3><p className="mt-3 max-w-2xl text-base leading-[1.7] text-white/57">{link.text}</p></div>
                        </div>
                        <div className="relative z-10 mt-4 flex flex-wrap items-end justify-between gap-3 pl-0 sm:pl-16">
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
              <p>{"{% section 'product-template' %}"}</p><p>{"settings_schema · blocks · presets"}</p><p>{"responsive / performance / maintainability"}</p>
            </div>
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
