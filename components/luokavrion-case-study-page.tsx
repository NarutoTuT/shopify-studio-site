import Image from "next/image"
import { ArrowRight, ArrowUpRight, Blocks, CheckCircle2, Code2, ExternalLink, FileJson2, Layers3, MonitorSmartphone, Orbit, Settings2, ShieldCheck } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"

const siteUrl = "https://whaleleap.studio"
const liveStoreUrl = "https://www.luokavrion.com/"

const content = {
  zh: {
    label: "真实项目 / 工程证据",
    title: "LUOKAVRION Shopify 主题定制与交互工程案例",
    summary: "WhaleLeap 为 LUOKAVRION 实施有边界的 Shopify 主题与前端定制，将 Liquid sections、JSON templates、Theme Editor 配置和首次访问 Three.js 动效组织为已经上线的店铺体验。",
    liveCta: "查看正式网站",
    facts: [["项目类型", "Shopify Theme Customization"], ["工程范围", "Liquid · JSON templates · JavaScript · Three.js"], ["上线状态", "Published theme verified"], ["公开关系", "Client-controlled footer attribution"]],
    challengeTitle: "强视觉表达不能阻断商品浏览与购买路径。",
    challengeBody: "模型与收藏品店铺需要建立鲜明的进入体验，同时保持导航、商品发现和购买入口可用。动效还需要在减少动态效果、页面隐藏和离开页面时采取明确的降级与资源清理策略。",
    scopeTitle: "WhaleLeap 实际承担的定制范围。",
    scopeBody: "本案例只描述已由源码、已发布主题和公开线上页面共同支持的实施范围，不主张基础主题、完整视觉设计或全部店铺功能的原创归属。",
    designTitle: "从 Figma 页面结构到线上 Shopify 店铺。",
    designBody: "本项目展示了 LUOKAVRION 首页与产品详情页的 Figma 设计成果，以及其在 Shopify 线上店铺中的实际实现。我们将核心页面结构转化为可维护的 Liquid Sections、JSON Templates 和响应式交互体验。",
    designItems: [
      { title: "Homepage Design", description: "首页方向覆盖品牌入口、商品发现、内容导购、社区内容、服务保障与订阅路径。", src: "/case-studies/luokavrion/homepage-design.jpg", alt: "LUOKAVRION desktop homepage Figma design showing the complete storefront structure", node: "703:4329", height: 9733 },
      { title: "Product Detail Design", description: "产品详情页方向组织购买区、商品画廊、产品叙事、参数信息、相关推荐与订阅入口。", src: "/case-studies/luokavrion/product-detail-design.jpg", alt: "LUOKAVRION desktop product detail Figma design showing commerce and product storytelling sections", node: "741:1133", height: 7617 },
    ],
    architectureTitle: "从 JSON 模板到可配置的 Liquid 模块。",
    architectureBody: "首页模板负责组合模块；section schema 暴露 settings、blocks 与 presets；Liquid 输出店铺内容；CSS 与 JavaScript 处理响应式展示和交互。",
    architecture: [["JSON template", "定义首页模块顺序与配置实例"], ["Liquid sections", "输出 hero、商品展示、订阅与服务保障模块"], ["Schema", "提供可见设置、内容字段、blocks 与 presets"], ["Storefront", "将配置渲染为正式店铺页面"]],
    editorTitle: "可配置结构已核验，编辑生命周期保持边界。",
    editorBody: "Published theme 中的 JSON template 与 section schema 已完成只读核验，可确认配置结构和可见字段。由于没有执行会改变配置的操作，保存、重排以及 block 增删能力不描述为已验证。",
    editorVerified: ["Section settings", "Content fields", "Blocks", "Presets", "JSON composition"],
    editorNotVerified: ["Save changes", "Section reorder", "Add/delete blocks"],
    interactionTitle: "Three.js 被限制为首次访问的品牌进入体验。",
    interactionBody: "已发布主题包含由 theme layout 加载的自定义入口脚本。源码核验覆盖首次访问状态、prefers-reduced-motion、页面可见性、事件清理、动画帧取消以及 Three.js 资源释放。这里不把它描述为产品配置器，也不推断设计原创归属。",
    responsiveTitle: "响应式实现与交互保护写入同一交付边界。",
    responsiveBody: "定制模块包含响应式布局和前端交互实现。当前证据支持源码与线上结构的一致性，但本次页面不把一次公开访问扩大为全站、全设备或完整交易功能验证。",
    evidenceTitle: "关键工程文件与 Published Theme 已直接核对。",
    evidenceBody: "七个关键 Liquid / JavaScript 文件与当前 Published Theme 完全一致；首页 index.json 的结构与配置语义一致。内部 Theme ID、后台标识和完整客户源码不会公开。",
    evidenceItems: [["L4 / Published theme", "当前正式主题状态与目标店铺、正式域名完成只读核验。"], ["L4 / File comparison", "7 个关键 Liquid / JS 文件逐项一致；index.json 语义一致。"], ["L4 / Configuration", "代表性 sections 的 settings、blocks 与 presets 已从 schema 和模板结构核验。"], ["L5 / Public attribution", "正式网站页脚公开显示 Customized by WhaleLeap Studio，并链接至 WhaleLeap 官网。"]],
    outcomeTitle: "可确认的结果是一个已上线、可维护的定制 Shopify 店铺。",
    outcomeBody: "定制主题工作已经存在于当前 Published Theme，并在客户控制的正式网站中公开关联 WhaleLeap Studio。本案例不声称收入、转化率、性能分数、GA4/GTM 成果或客户评价。",
    boundaryTitle: "本案例有意保留的证据边界。",
    boundaries: ["Figma 仅支持有边界的设计到线上结构对照，不主张逐像素还原或完整原创设计归属。", "Theme Editor 的保存、重排与 block 增删未执行，不标记为已验证。", "不公开 Theme ID、后台截图、完整源码、合同或客户敏感信息。", "公开素材与脱敏代码片段仅在已确认授权范围内使用。"],
    ctaTitle: "需要把现有主题改造成可配置、可维护的 Shopify 体验？",
    ctaBody: "从主题结构、Liquid 模块、Theme Editor 配置和前端交互开始，先确认哪些部分值得继续定制。",
    serviceCta: "查看 Shopify 主题定制服务",
    diagnosisCta: "开始免费初步咨询",
  },
  en: {
    label: "Real project / Engineering evidence",
    title: "LUOKAVRION Shopify Theme Customization and Interaction Engineering Case Study",
    summary: "WhaleLeap delivered bounded Shopify theme and frontend customization for LUOKAVRION, connecting Liquid sections, JSON templates, Theme Editor configuration, and a first-visit Three.js experience in the published storefront.",
    liveCta: "View live store",
    facts: [["Project type", "Shopify Theme Customization"], ["Engineering scope", "Liquid · JSON templates · JavaScript · Three.js"], ["Release state", "Published theme verified"], ["Public relationship", "Client-controlled footer attribution"]],
    challengeTitle: "A strong visual entry cannot block product discovery or purchase access.",
    challengeBody: "A model-kit and collectibles storefront needs a distinctive first impression while keeping navigation, product discovery, and commerce entry points usable. Motion also needs explicit fallbacks and cleanup for reduced-motion preferences, hidden pages, and navigation away.",
    scopeTitle: "The customization scope WhaleLeap can substantiate.",
    scopeBody: "This case describes only implementation supported by source, the published theme, and the public storefront. It does not claim authorship of the base theme, the complete visual design, or every storefront feature.",
    designTitle: "From Figma page structure to the live Shopify storefront.",
    designBody: "This project highlights the Figma designs for LUOKAVRION's homepage and product detail page, along with their implementation in the live Shopify storefront. WhaleLeap Studio translated the core page structures into maintainable Liquid sections, JSON templates, and responsive frontend interactions.",
    designItems: [
      { title: "Homepage Design", description: "The homepage direction connects brand entry, product discovery, editorial guidance, community content, service assurance, and newsletter paths.", src: "/case-studies/luokavrion/homepage-design.jpg", alt: "LUOKAVRION desktop homepage Figma design showing the complete storefront structure", node: "703:4329", height: 9733 },
      { title: "Product Detail Design", description: "The product-detail direction organizes purchase controls, product media, product storytelling, specifications, related discovery, and newsletter entry.", src: "/case-studies/luokavrion/product-detail-design.jpg", alt: "LUOKAVRION desktop product detail Figma design showing commerce and product storytelling sections", node: "741:1133", height: 7617 },
    ],
    architectureTitle: "From JSON template composition to configurable Liquid modules.",
    architectureBody: "The homepage template composes modules; section schemas expose settings, blocks, and presets; Liquid renders storefront content; CSS and JavaScript handle responsive presentation and interaction.",
    architecture: [["JSON template", "Defines homepage module order and configuration instances"], ["Liquid sections", "Render hero, product showcase, newsletter, and assurance modules"], ["Schema", "Exposes visible settings, content fields, blocks, and presets"], ["Storefront", "Renders the configured modules on the live store"]],
    editorTitle: "Configuration structure is verified; editor lifecycle claims stay bounded.",
    editorBody: "The published JSON template and section schemas were inspected read-only, confirming configuration structure and visible fields. Because no state-changing test was performed, saving, reordering, and adding or deleting blocks are not described as verified.",
    editorVerified: ["Section settings", "Content fields", "Blocks", "Presets", "JSON composition"],
    editorNotVerified: ["Save changes", "Section reorder", "Add/delete blocks"],
    interactionTitle: "Three.js is bounded to a first-visit brand entry experience.",
    interactionBody: "The published theme contains a custom entry script loaded by the theme layout. Source verification covers first-visit state, prefers-reduced-motion, page visibility, listener cleanup, animation-frame cancellation, and Three.js resource disposal. It is not described as a product configurator, and no design authorship is inferred.",
    responsiveTitle: "Responsive implementation and interaction safeguards share one delivery boundary.",
    responsiveBody: "The customized modules include responsive layout and frontend interaction work. Current evidence supports source-to-live structure, but a single public visit is not expanded into a claim of complete cross-device or transaction coverage.",
    evidenceTitle: "Key engineering files were compared directly with the Published Theme.",
    evidenceBody: "Seven key Liquid and JavaScript files match the current Published Theme exactly; the homepage index.json is structurally and semantically equivalent. Internal theme identifiers, Admin details, and complete client source remain private.",
    evidenceItems: [["L4 / Published theme", "The active production theme, target store, and live domain were verified read-only."], ["L4 / File comparison", "Seven key Liquid / JS files match exactly; index.json is semantically equivalent."], ["L4 / Configuration", "Representative section settings, blocks, and presets were verified from schemas and template structure."], ["L5 / Public attribution", "The live footer displays Customized by WhaleLeap Studio and links to the official WhaleLeap website."]],
    outcomeTitle: "The verifiable outcome is a live, maintainable customized Shopify storefront.",
    outcomeBody: "The customized theme work is present in the current Published Theme, and the client-controlled live site publicly attributes WhaleLeap Studio. This case makes no claim about revenue, conversion lift, performance scores, GA4/GTM outcomes, or client reviews.",
    boundaryTitle: "Evidence boundaries deliberately retained.",
    boundaries: ["Figma supports only a bounded design-to-live structure comparison; no pixel-perfect reproduction or complete original design ownership is claimed.", "Theme Editor save, reorder, and block add/delete actions were not performed or marked verified.", "Theme IDs, Admin captures, full source, contracts, and sensitive client information remain private.", "Public media and sanitized code excerpts are used only within the confirmed permission scope."],
    ctaTitle: "Need to turn an existing theme into a configurable, maintainable Shopify experience?",
    ctaBody: "Start with the theme structure, Liquid modules, Theme Editor configuration, and frontend interactions to decide what is worth customizing.",
    serviceCta: "View Shopify Theme Customization",
    diagnosisCta: "Start a free consultation",
  },
} as const

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <header className="mx-auto max-w-4xl text-center"><p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">{eyebrow}</p><h2 className="mt-3 text-[clamp(1.9rem,3vw,2.7rem)] font-bold leading-tight tracking-normal text-white">{title}</h2>{body ? <p className="mx-auto mt-5 max-w-3xl text-base leading-[1.8] text-white/62 md:text-lg">{body}</p> : null}</header>
}

export function LuokavrionCaseStudyPage({ language = "zh" }: { language?: "zh" | "en" }) {
  const en = language === "en"
  const copy = content[language]
  const pageUrl = `${siteUrl}${en ? "/en" : ""}/case-studies/luokavrion`
  const architectureIcons = [FileJson2, Code2, Settings2, MonitorSmartphone]

  return <div className="min-h-screen bg-black text-white">
    <PageStructuredData language={language} breadcrumbs={[{ name: en ? "Home" : "首页", url: en ? `${siteUrl}/en` : siteUrl }, { name: en ? "Case studies" : "案例", url: `${siteUrl}${en ? "/en" : ""}/#work` }, { name: "LUOKAVRION", url: pageUrl }]} page={{ type: "Article", name: copy.title, description: copy.summary, url: pageUrl, inLanguage: en ? "en" : "zh-CN", about: ["WhaleLeap Studio", "LUOKAVRION", "Shopify Theme Customization", "Liquid", "Online Store 2.0", "Three.js"], datePublished: "2026-10-12", dateModified: "2026-10-12", reviewedBy: "Naruto" }} />
    <Navbar />
    <main id="main-content" tabIndex={-1}><article>
      <header className="relative overflow-hidden px-4 pb-[56px] pt-28 sm:px-6 md:px-10 md:pb-[104px] md:pt-36">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(119,252,117,0.16),transparent_30%),radial-gradient(circle_at_82%_50%,rgba(34,211,238,0.1),transparent_32%),linear-gradient(180deg,#030705,#000)]" />
        <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-[1500px]"><div className="mx-auto max-w-[1120px] text-center">
          <p className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 font-mono text-base font-semibold uppercase text-primary sm:rounded-full sm:px-4"><CheckCircle2 className="size-4" aria-hidden="true" /> {copy.label}</p>
          <h1 className="mx-auto mt-7 max-w-[1100px] text-balance text-[clamp(2.05rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-normal [overflow-wrap:anywhere]">{copy.title}</h1>
          <p className="mx-auto mt-7 max-w-[960px] text-base leading-[1.8] text-white/68 md:text-xl">{copy.summary}</p>
          <a href={liveStoreUrl} target="_blank" rel="noreferrer noopener" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-black transition-transform hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black">{copy.liveCta} <ExternalLink className="size-5" aria-hidden="true" /></a>
        </div>
        <div className="mx-auto mt-12 max-w-[1180px] overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.035] p-5 shadow-[0_32px_100px_rgba(0,0,0,0.4)] sm:p-8 md:mt-16"><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{copy.facts.map(([label, value]) => <div key={label} className="min-w-0 border-l border-primary/55 px-4 py-2"><p className="font-mono text-base uppercase text-white/45">{label}</p><p className="mt-3 break-words text-base font-semibold leading-[1.55] text-white/88">{value}</p></div>)}</div></div></div>
      </header>

      <section className="px-4 pb-[56px] sm:px-6 md:px-10 md:pb-[104px]"><div className="mx-auto grid max-w-[1500px] gap-4 lg:grid-cols-2">
        {[["01 / Challenge", copy.challengeTitle, copy.challengeBody, Orbit], ["02 / Verified scope", copy.scopeTitle, copy.scopeBody, ShieldCheck]].map(([eyebrow, title, body, Icon]) => { const CardIcon = Icon as typeof Orbit; return <section key={String(eyebrow)} className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 sm:p-8 lg:p-10"><CardIcon className="size-7 text-primary" aria-hidden="true" /><p className="mt-6 font-mono text-base font-semibold uppercase text-primary">{String(eyebrow)}</p><h2 className="mt-4 text-[clamp(1.6rem,2.5vw,2.25rem)] font-bold leading-tight">{String(title)}</h2><p className="mt-5 text-base leading-[1.8] text-white/62 md:text-lg">{String(body)}</p></section> })}
      </div></section>

      <section className="bg-white/[0.035] px-4 py-[56px] sm:px-6 md:px-10 md:py-[104px]"><div className="mx-auto max-w-[1500px]"><SectionHeading eyebrow="03 / Design to live" title={copy.designTitle} body={copy.designBody} /><div className="mt-10 grid items-start gap-5 lg:grid-cols-2">{copy.designItems.map((item) => <figure key={item.src} className="min-w-0 overflow-hidden rounded-[1.8rem] border border-white/12 bg-black/50 p-4 sm:p-5"><div className="flex flex-col gap-2 px-1 pb-4 sm:flex-row sm:items-end sm:justify-between"><div><h3 className="text-xl font-bold text-white">{item.title}</h3><p className="mt-2 max-w-2xl text-base leading-[1.65] text-white/58">{item.description}</p></div><span className="shrink-0 font-mono text-base text-primary">Figma · {item.node}</span></div><a href={item.src} target="_blank" rel="noreferrer noopener" className="block overflow-hidden rounded-lg border border-white/12 bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Image src={item.src} alt={item.alt} width={1920} height={item.height} sizes="(max-width: 1023px) 92vw, 720px" className="h-auto w-full" /></a><figcaption className="px-1 pt-4 text-base leading-7 text-white/48">{en ? "Authorized case-study display of the selected Figma canvas. Content evolved between design and production." : "经确认用于案例展示的 Figma 画布；设计与生产阶段之间的内容可能发生演进。"}</figcaption></figure>)}</div></div></section>

      <section className="px-4 py-[56px] sm:px-6 md:px-10 md:py-[104px]"><div className="mx-auto max-w-[1500px]"><SectionHeading eyebrow="04 / Shopify architecture" title={copy.architectureTitle} body={copy.architectureBody} /><div className="mt-12 grid gap-3 lg:grid-cols-4">{copy.architecture.map(([title, body], index) => { const Icon = architectureIcons[index]; return <div key={title} className="relative rounded-lg border border-white/12 bg-black/45 p-6 sm:p-7"><Icon className="size-7 text-primary" aria-hidden="true" /><p className="mt-5 font-mono text-base text-primary">0{index + 1}</p><h3 className="mt-2 text-xl font-bold">{title}</h3><p className="mt-4 text-base leading-[1.7] text-white/60">{body}</p>{index < copy.architecture.length - 1 ? <ArrowRight className="absolute -bottom-8 left-1/2 z-10 size-5 -translate-x-1/2 rotate-90 text-primary/60 lg:-right-4 lg:bottom-auto lg:left-auto lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:rotate-0" aria-hidden="true" /> : null}</div> })}</div></div></section>

      <section className="px-4 py-[56px] sm:px-6 md:px-10 md:py-[104px]"><div className="mx-auto max-w-[1500px]"><SectionHeading eyebrow="05 / Merchant editability" title={copy.editorTitle} body={copy.editorBody} /><div className="mt-10 grid gap-4 lg:grid-cols-2"><div className="rounded-lg border border-white/12 bg-white/[0.035] p-6 sm:p-8"><div className="flex items-center gap-3"><Blocks className="size-6 text-primary" aria-hidden="true" /><h3 className="text-xl font-bold">VERIFIED</h3></div><ul className="mt-6 grid gap-3 sm:grid-cols-2">{copy.editorVerified.map((item) => <li key={item} className="border-l-2 border-primary bg-primary/[0.055] px-4 py-3 text-base">{item}</li>)}</ul></div><div className="rounded-lg border border-white/12 bg-white/[0.02] p-6 sm:p-8"><div className="flex items-center gap-3"><Settings2 className="size-6 text-white/45" aria-hidden="true" /><h3 className="text-xl font-bold">NOT_VERIFIED</h3></div><ul className="mt-6 space-y-3">{copy.editorNotVerified.map((item) => <li key={item} className="border-l-2 border-white/20 px-4 py-3 text-base text-white/58">{item}</li>)}</ul></div></div></div></section>

      <section className="px-4 pb-[56px] sm:px-6 md:px-10 md:pb-[104px]"><div className="mx-auto grid max-w-[1500px] gap-4 lg:grid-cols-2"><section className="rounded-[2rem] border border-white/12 bg-[radial-gradient(circle_at_20%_10%,rgba(119,252,117,0.1),transparent_40%),rgba(255,255,255,0.035)] p-6 sm:p-8 lg:p-10"><Orbit className="size-8 text-primary" aria-hidden="true" /><p className="mt-6 font-mono text-base font-semibold uppercase text-primary">06 / Frontend interaction</p><h2 className="mt-4 text-[clamp(1.6rem,2.5vw,2.25rem)] font-bold leading-tight">{copy.interactionTitle}</h2><p className="mt-5 text-base leading-[1.8] text-white/62 md:text-lg">{copy.interactionBody}</p></section><section className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 sm:p-8 lg:p-10"><MonitorSmartphone className="size-8 text-primary" aria-hidden="true" /><p className="mt-6 font-mono text-base font-semibold uppercase text-primary">07 / Responsive implementation</p><h2 className="mt-4 text-[clamp(1.6rem,2.5vw,2.25rem)] font-bold leading-tight">{copy.responsiveTitle}</h2><p className="mt-5 text-base leading-[1.8] text-white/62 md:text-lg">{copy.responsiveBody}</p></section></div></section>

      <section className="bg-white/[0.035] px-4 py-[56px] sm:px-6 md:px-10 md:py-[104px]"><div className="mx-auto max-w-[1500px]"><SectionHeading eyebrow="08 / Engineering evidence" title={copy.evidenceTitle} body={copy.evidenceBody} /><div className="mt-10 grid gap-4 md:grid-cols-2">{copy.evidenceItems.map(([title, body]) => <article key={title} className="rounded-lg border border-white/12 bg-black/45 p-6 sm:p-8"><p className="font-mono text-base font-semibold uppercase text-primary">{title}</p><p className="mt-4 text-base leading-[1.75] text-white/68">{body}</p></article>)}</div></div></section>

      <section className="px-4 py-[56px] sm:px-6 md:px-10 md:py-[104px]"><div className="mx-auto grid max-w-[1500px] gap-4 lg:grid-cols-[1.1fr_0.9fr]"><section className="rounded-[2rem] border border-primary/20 bg-primary/[0.055] p-6 sm:p-8 lg:p-10"><p className="font-mono text-base font-semibold uppercase text-primary">09 / Live outcome</p><h2 className="mt-4 text-[clamp(1.7rem,2.7vw,2.45rem)] font-bold leading-tight">{copy.outcomeTitle}</h2><p className="mt-5 text-base leading-[1.8] text-white/68 md:text-lg">{copy.outcomeBody}</p><a href={liveStoreUrl} target="_blank" rel="noreferrer noopener" className="mt-7 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{copy.liveCta} <ArrowUpRight className="size-4" aria-hidden="true" /></a></section><section className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 sm:p-8 lg:p-10"><p className="font-mono text-base font-semibold uppercase text-white/45">10 / Claim boundary</p><h2 className="mt-4 text-[clamp(1.7rem,2.7vw,2.45rem)] font-bold leading-tight">{copy.boundaryTitle}</h2><ul className="mt-6 space-y-4">{copy.boundaries.map((item) => <li key={item} className="flex gap-3 text-base leading-[1.7] text-white/62"><ShieldCheck className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul></section></div></section>

      <section className="px-4 pb-[72px] sm:px-6 md:px-10 md:pb-[120px]"><div className="mx-auto max-w-[1500px] rounded-[2rem] border border-white/12 bg-[radial-gradient(circle_at_18%_20%,rgba(119,252,117,0.14),transparent_34%),linear-gradient(135deg,#101411,#080908)] p-7 text-center sm:p-10 md:p-14"><Layers3 className="mx-auto size-8 text-primary" aria-hidden="true" /><h2 className="mx-auto mt-5 max-w-4xl text-[clamp(1.8rem,3vw,2.7rem)] font-bold leading-tight">{copy.ctaTitle}</h2><p className="mx-auto mt-5 max-w-3xl text-base leading-[1.8] text-white/62 md:text-lg">{copy.ctaBody}</p><div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"><a href={`${en ? "/en" : ""}/services/shopify-theme-customization`} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-black transition-transform hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black">{copy.serviceCta} <ArrowRight className="size-5" aria-hidden="true" /></a><a href={`${en ? "/en" : ""}/diagnosis`} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/18 px-7 text-base font-semibold text-white hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{copy.diagnosisCta} <ArrowUpRight className="size-5" aria-hidden="true" /></a></div></div></section>
    </article></main>
  </div>
}
