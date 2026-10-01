import Image from "next/image"
import { ArrowUpRight, CheckCircle2, Code2, ExternalLink, Gauge, Layers3, ShieldCheck } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"

const siteUrl = "https://whaleleap.studio"
const caseUrl = `${siteUrl}/case-studies/terrawulf`
const liveStoreUrl = "https://www.terrawulfmoto.com/"
const livePdpUrl = `${liveStoreUrl}products/terrawulf-m7-high-performance-off-road-electric-dirt-bike`

const facts = [
  ["Industry", "Electric Mobility / eBike"],
  ["Platform", "Shopify"],
  ["Scope", "UI/UX, architecture, theme development, Liquid, custom sections, PDP, responsive QA, deployment"],
]

const engineering = [
  {
    icon: Layers3,
    title: "OS 2.0 architecture",
    body: "Product-specific JSON templates compose the M5, M5S, M7 and M7S experiences from independently configurable sections.",
    benefit: "Different models can tell different product stories without duplicating the theme runtime.",
  },
  {
    icon: Code2,
    title: "Liquid sections and blocks",
    body: "Focused Liquid modules connect Shopify product, variant, inventory and cart state with configurable content blocks.",
    benefit: "Purchase state remains tied to the selected sellable variant while content order stays manageable.",
  },
  {
    icon: Gauge,
    title: "Merchant-editable modules",
    body: "Section schemas expose performance statistics, specifications, parts, FAQs and media as reusable settings and blocks.",
    benefit: "Teams can update product education without rebuilding page layouts.",
  },
]

const decisions = [
  ["How powerful is the bike?", "Motor, torque, speed and riding modes", "Structured performance modules"],
  ["How far can I ride?", "Battery, range and charging information", "Performance, specification and FAQ sections"],
  ["Will this fit me?", "Suitable height and geometry", "Dedicated geometry and specification content"],
  ["What happens after purchase?", "Shipping, returns, warranty and setup", "Trust content, policy links and FAQ blocks"],
]

const comparisons = [
  {
    title: "Homepage",
    design: "/case-studies/terrawulf/home-design.webp",
    live: "/case-studies/terrawulf/home-live.webp",
    designAlt: "Terrawulf desktop homepage Figma design showing the electric dirt bike storefront direction",
    liveAlt: "Live Terrawulf desktop homepage showing the implemented electric dirt bike storefront",
    intent: "Establish the bike, terrain and product range before moving into proof and support.",
    implementation: "The live Shopify homepage uses modular hero, product discovery, comparison, rider content, guides and service-assurance sections.",
    outcome: "The approved desktop direction became a production storefront while product copy, imagery and merchandising continued to evolve.",
  },
  {
    title: "M7 product page",
    design: "/case-studies/terrawulf/pdp-design.webp",
    live: "/case-studies/terrawulf/pdp-live.webp",
    designAlt: "Terrawulf M7 desktop product page Figma design with purchase and technical information modules",
    liveAlt: "Live Terrawulf M7 Shopify product page with product media, price, variant and add to cart controls",
    intent: "Keep the purchase action visible while progressively answering technical and ownership questions.",
    implementation: "Product and variant data drive the purchase panel; custom sections organize story, anatomy, performance, parts, specifications and FAQ content.",
    outcome: "A complex high-ticket product is presented as a sequence of decisions rather than one undifferentiated specification sheet.",
  },
]

function SectionHeading({ number, label, title, body }: { number: string; label: string; title: string; body?: string }) {
  return (
    <header className="mx-auto max-w-4xl text-center">
      <p className="font-mono text-base font-semibold uppercase tracking-[0.02em] text-primary">{number} / {label}</p>
      <h2 className="mt-3 text-[clamp(1.9rem,3vw,2.7rem)] font-bold leading-tight tracking-normal text-white">{title}</h2>
      {body ? <p className="mx-auto mt-5 max-w-3xl text-base leading-[1.8] text-white/62 md:text-lg">{body}</p> : null}
    </header>
  )
}

function EvidenceImage({ src, alt, label, mode }: { src: string; alt: string; label: string; mode: "design" | "live" }) {
  return (
    <figure className="min-w-0">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold">{label}</h3>
        <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-sm uppercase text-white/55">{mode === "design" ? "Figma" : "Live Shopify"}</span>
      </div>
      <a href={src} target="_blank" rel="noreferrer noopener" className={`group relative block overflow-hidden rounded-lg border border-white/15 bg-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${mode === "live" ? "aspect-[3420/1902]" : "aspect-[16/10]"}`}>
        <Image src={src} alt={alt} fill sizes="(max-width: 767px) 92vw, 660px" className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]" />
      </a>
      <a href={src} target="_blank" rel="noreferrer noopener" className="mt-3 inline-flex min-h-11 items-center gap-2 text-base text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        查看证据图 <ExternalLink className="size-4" aria-hidden="true" />
      </a>
    </figure>
  )
}

export function TerrawulfCaseStudyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageStructuredData
        language="zh"
        breadcrumbs={[
          { name: "首页", url: siteUrl },
          { name: "案例", url: `${siteUrl}/#work` },
          { name: "Terrawulf", url: caseUrl },
        ]}
        page={{
          type: "Article",
          name: "Terrawulf eBike Shopify Engineering Case Study",
          description: "WhaleLeap Studio 为 Terrawulf 构建高客单电动越野车 Shopify 店铺的设计、OS 2.0 架构、Liquid 开发、复杂 PDP 与响应式交付证据。",
          url: caseUrl,
          inLanguage: "zh-CN",
          about: ["WhaleLeap Studio", "Terrawulf", "Shopify Engineering", "eBike ecommerce", "Liquid", "Online Store 2.0", "High-ticket product page"],
          datePublished: "2026-10-01",
          dateModified: "2026-10-01",
          reviewedBy: "Naruto",
        }}
      />
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <article>
          <header className="relative overflow-hidden px-4 pb-[56px] pt-28 sm:px-6 md:px-10 md:pb-[104px] md:pt-36">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(251,146,60,0.18),transparent_32%),radial-gradient(circle_at_82%_42%,rgba(119,252,117,0.11),transparent_31%),linear-gradient(180deg,#090604,#000)]" />
            <div className="relative mx-auto max-w-[1400px]">
              <div className="mx-auto max-w-[1120px] text-center">
                <p className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-lg border border-orange-300/25 bg-orange-300/10 px-3 py-2 text-center font-mono text-base font-semibold uppercase tracking-[0.02em] text-orange-200 sm:rounded-full sm:px-4">
                  <CheckCircle2 className="size-4" /> Real project / Engineering evidence
                </p>
                <h1 className="mx-auto mt-7 max-w-full text-balance text-[clamp(2.05rem,6vw,5.4rem)] font-bold leading-[1.05] tracking-normal [overflow-wrap:anywhere]">
                  Terrawulf
                  <span className="mt-3 block bg-gradient-to-r from-orange-300 via-white to-primary bg-clip-text text-transparent">
                    <span className="block">Electric Dirt Bike</span>
                    <span className="block">Shopify Engineering</span>
                  </span>
                </h1>
                <p className="mx-auto mt-7 max-w-[980px] text-base leading-[1.8] text-white/68 md:text-xl">WhaleLeap 将 Terrawulf 的高客单电动越野车购买体验转化为模块化 Shopify 店铺，用于承载复杂产品信息、响应式购物和持续的商家内容管理。</p>
                <a href={liveStoreUrl} target="_blank" rel="noreferrer noopener" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-black transition-transform hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                  View Live Store <ExternalLink className="size-5" />
                </a>
              </div>
              <figure className="mt-11 overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.035] p-2 shadow-[0_32px_100px_rgba(0,0,0,0.45)] md:mt-16">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.6rem] bg-[#111]">
                  <Image src="/case-studies/terrawulf/home-live.webp" alt="Terrawulf live Shopify homepage with an electric dirt bike on a mountain trail" fill priority sizes="(max-width: 1024px) 94vw, 1400px" className="object-cover object-top" />
                </div>
                <figcaption className="px-4 py-4 text-base leading-[1.6] text-white/55">公开线上店铺截图，采集于 2026 年 10 月 1 日。</figcaption>
              </figure>
            </div>
          </header>

          <section className="px-4 pb-[56px] sm:px-6 md:px-10 md:pb-[104px]">
            <div className="mx-auto grid max-w-[1400px] gap-4 lg:grid-cols-[0.85fr_1.15fr_1.15fr]">
              {facts.map(([label, value]) => (
                <div key={label} className="border-t border-white/20 py-6">
                  <p className="font-mono text-base uppercase text-orange-200">{label}</p>
                  <p className="mt-3 text-base leading-[1.75] text-white/76">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="px-4 pb-[56px] sm:px-6 md:px-10 md:pb-[104px]">
            <div className="mx-auto max-w-[1400px]">
              <SectionHeading number="01" label="Challenge" title="复杂技术信息，需要变成一条可浏览、可比较、可购买的路径。" body="Terrawulf 销售高客单电动越野车。用户在购买前需要理解动力、电池、续航、几何尺寸、组件差异、配送、质保和常见问题，而不是只看一张产品图或一组参数。" />
            </div>
          </section>

          <section className="px-4 pb-[56px] sm:px-6 md:px-10 md:pb-[104px]">
            <div className="mx-auto max-w-[1400px]">
              <SectionHeading number="02" label="Design to live" title="从获批的设计方向，到生产 Shopify 店铺。" body="以下对照用于证明设计结构与线上实现的关系，不主张逐像素复制。移动端没有足够完整的 Figma 页面证据，因此不制作移动设计对照。" />
              <div className="mt-12 space-y-16">
                {comparisons.map((item) => (
                  <section key={item.title}>
                    <h3 className="text-2xl font-bold md:text-3xl">{item.title}</h3>
                    <div className="mt-7 grid gap-10 md:grid-cols-2">
                      <EvidenceImage src={item.design} alt={item.designAlt} label="Figma design" mode="design" />
                      <EvidenceImage src={item.live} alt={item.liveAlt} label="Live implementation" mode="live" />
                    </div>
                    <dl className="mt-8 grid gap-4 border-t border-white/15 pt-7 md:grid-cols-3">
                      {[["Design intent", item.intent], ["Implementation decision", item.implementation], ["Live outcome", item.outcome]].map(([term, description]) => (
                        <div key={term}>
                          <dt className="font-mono text-base font-semibold uppercase text-orange-200">{term}</dt>
                          <dd className="mt-3 text-base leading-[1.75] text-white/62">{description}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white/[0.035] px-4 py-[56px] sm:px-6 md:px-10 md:py-[104px]">
            <div className="mx-auto max-w-[1400px]">
              <SectionHeading number="03" label="Shopify engineering" title="页面表现背后，是可持续管理的主题架构。" />
              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                {engineering.map(({ icon: Icon, title, body, benefit }) => (
                  <section key={title} className="rounded-lg border border-white/12 bg-black/45 p-6 sm:p-8">
                    <Icon className="size-7 text-primary" aria-hidden="true" />
                    <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                    <p className="mt-4 text-base leading-[1.75] text-white/62">{body}</p>
                    <p className="mt-5 border-t border-white/12 pt-5 text-base leading-[1.7] text-white/78"><strong className="text-primary">Merchant benefit:</strong> {benefit}</p>
                  </section>
                ))}
              </div>
              <div className="mt-8 overflow-x-auto rounded-lg border border-white/12 bg-black/45 p-5 sm:p-7">
                <p className="font-mono text-base text-orange-200">templates/product.m7.json</p>
                <pre className="mt-4 min-w-[680px] whitespace-pre-wrap text-base leading-[1.8] text-white/70"><code>{`product-main
  -> story gallery
  -> anatomy
  -> performance
  -> parts showcase
  -> video
  -> specifications
  -> feature carousel
  -> FAQ
  -> recommended products`}</code></pre>
              </div>
            </div>
          </section>

          <section className="px-4 py-[56px] sm:px-6 md:px-10 md:py-[104px]">
            <div className="mx-auto max-w-[1400px]">
              <SectionHeading number="04" label="PDP decision architecture" title="每个模块回答一个购买问题。" />
              <div className="mt-10 overflow-hidden rounded-lg border border-white/12">
                {decisions.map(([question, answer, implementation], index) => (
                  <div key={question} className="grid gap-4 border-b border-white/12 p-6 last:border-b-0 md:grid-cols-[1fr_1fr_1.15fr] md:p-8">
                    <div><p className="font-mono text-sm text-orange-200">BUSINESS QUESTION</p><p className="mt-2 text-lg font-semibold">{question}</p></div>
                    <div><p className="font-mono text-sm text-white/45">STOREFRONT ANSWER</p><p className="mt-2 text-base leading-[1.7] text-white/68">{answer}</p></div>
                    <div><p className="font-mono text-sm text-primary">IMPLEMENTATION</p><p className="mt-2 text-base leading-[1.7] text-white/68">{implementation}</p></div>
                  </div>
                ))}
              </div>
              <a href={livePdpUrl} target="_blank" rel="noreferrer noopener" className="mt-6 inline-flex min-h-11 items-center gap-2 text-base text-primary underline underline-offset-4">查看 M7 线上产品页 <ArrowUpRight className="size-4" /></a>
            </div>
          </section>

          <section className="px-4 pb-[56px] sm:px-6 md:px-10 md:pb-[104px]">
            <div className="mx-auto grid max-w-[1400px] gap-4 lg:grid-cols-2">
              <section className="rounded-lg border border-primary/20 bg-primary/[0.045] p-6 sm:p-8">
                <p className="font-mono text-base font-semibold uppercase text-primary">05 / Responsive & QA</p>
                <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight">从代码检查到真实视口验证。</h2>
                <ul className="mt-6 space-y-3 text-base leading-[1.75] text-white/68">
                  <li>Desktop 1280 × 720、Tablet 768 × 1024、Mobile 390 × 844 已进行响应式检查。</li>
                  <li>产品标题与 Add to Cart 在响应式页面流程中保持可访问；当前检查未发现文档级横向溢出。</li>
                  <li>Theme Check：127 files，0 errors，13 warnings；warnings 单独复核，不描述为 warning-free。</li>
                  <li>包含浏览器 QA、部署验证与线上回读记录。</li>
                </ul>
              </section>
              <section className="rounded-lg border border-orange-300/20 bg-orange-300/[0.04] p-6 sm:p-8">
                <p className="font-mono text-base font-semibold uppercase text-orange-200">06 / Verified outcome</p>
                <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight">交付结果以可验证系统为准。</h2>
                <ul className="mt-6 space-y-3 text-base leading-[1.75] text-white/68">
                  <li>Custom Shopify storefront delivered and deployed.</li>
                  <li>Modular Online Store 2.0 architecture.</li>
                  <li>High-ticket information structured into reusable sections.</li>
                  <li>Responsive storefront implemented and live.</li>
                </ul>
              </section>
            </div>
            <div className="mx-auto mt-8 grid max-w-[1400px] items-start gap-5 md:grid-cols-[1.4fr_0.75fr_0.42fr]">
              {[
                ["Desktop / 1440 × 1000", "/case-studies/terrawulf/pdp-live.webp", "Terrawulf M7 desktop product page with gallery and purchase panel", "aspect-[3420/1902]"],
                ["Tablet / 768 × 1024", "/case-studies/terrawulf/pdp-tablet.webp", "Terrawulf M7 tablet product page showing responsive product media", "aspect-[768/1024]"],
                ["Mobile / 390 × 844", "/case-studies/terrawulf/pdp-mobile.webp", "Terrawulf M7 mobile product page showing responsive product media", "aspect-[390/844]"],
              ].map(([label, src, alt, aspect]) => (
                <figure key={src}>
                  <p className="mb-3 font-mono text-sm uppercase text-white/52">{label}</p>
                  <a href={src} target="_blank" rel="noreferrer noopener" className={`relative block overflow-hidden rounded-lg border border-white/12 bg-white ${aspect} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}>
                    <Image src={src} alt={alt} fill sizes="(max-width: 767px) 92vw, 50vw" className="object-cover object-top" />
                  </a>
                </figure>
              ))}
            </div>
          </section>

          <section className="px-4 pb-[56px] sm:px-6 md:px-10 md:pb-[104px]">
            <div className="mx-auto max-w-[1400px] border-y border-white/15 py-10">
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
                  <p className="mt-4 font-mono text-base font-semibold uppercase text-primary">07 / Claim boundary</p>
                  <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight">What this case study does not claim</h2>
                </div>
                <ul className="grid gap-3 text-base leading-[1.75] text-white/65 sm:grid-cols-2">
                  <li>No public revenue uplift claims.</li>
                  <li>No conversion lift claims.</li>
                  <li>GA4 / GTM implementation is not verified.</li>
                  <li>Metafield architecture is not verified.</li>
                  <li>Product content may evolve after handoff through merchant-managed Shopify content.</li>
                  <li>Current product-data accuracy is not presented as a WhaleLeap outcome.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="px-4 pb-[56px] sm:px-6 md:px-10 md:pb-[104px]">
            <div className="mx-auto max-w-[1400px] rounded-lg border border-white/18 bg-[linear-gradient(120deg,rgba(251,146,60,0.08),rgba(255,255,255,0.025)_48%,rgba(119,252,117,0.07))] px-7 py-12 md:px-14 md:py-16">
              <p className="font-mono text-base font-semibold uppercase text-primary">08 / Related services</p>
              <h2 className="mt-4 max-w-4xl text-[clamp(1.9rem,3vw,2.7rem)] font-bold leading-tight">构建同类高客单 Shopify 体验，需要设计决策与工程架构共同工作。</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/services/shopify-website-build" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-base font-bold text-black">Shopify Engineering <ArrowUpRight className="size-5" /></a>
                <a href="/services/shopify-theme-customization" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/18 px-6 text-base font-semibold">Theme / Liquid Development <ArrowUpRight className="size-5" /></a>
                <a href="/services/shopify-conversion-optimization" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/18 px-6 text-base font-semibold">Conversion Optimization <ArrowUpRight className="size-5" /></a>
                <a href="/diagnosis" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-orange-300/25 bg-orange-300/[0.06] px-6 text-base font-semibold text-orange-100">Free Shopify Review <ArrowUpRight className="size-5" /></a>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}
