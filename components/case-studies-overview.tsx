"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"
import { caseStudyPaths, copy, images } from "@/components/showcase-section"

const industries = {
  zh: ["电动越野车", "品牌零售", "科技零售"],
  en: ["Electric dirt bikes", "Brand retail", "Technology retail"],
}

const additionalCases = [
  { name: "ENGWE · Germany", industry: { zh: "电动自行车", en: "E-bikes" }, platform: "Shopify", url: "https://engwe-bikes.de" },
  { name: "SCULPFUN", industry: { zh: "3D 打印机", en: "3D printers" }, platform: "Shopify", url: "https://www.sculpfun.com" },
  { name: "iKamper", industry: { zh: "车顶帐篷", en: "Roof tents" }, platform: "Shopify", url: "https://ikamper.com" },
  { name: "Protato Health", industry: { zh: "健身器材", en: "Fitness equipment" }, platform: "Shopify", url: "https://protatohealth.com" },
  { name: "Yarbo", industry: { zh: "智能户外庭院机器人设备", en: "Outdoor robotics" }, platform: "Shopify", url: "https://www.yarbo.com" },
  { name: "Buddha Stones", industry: { zh: "水晶饰品", en: "Crystal jewelry" }, platform: "Shopify", url: "https://buddhastoneshop.com" },
  { name: "Tracer Bikes", industry: { zh: "电动自行车", en: "E-bikes" }, platform: "Shopify", url: "https://tracerbikes.com" },
  { name: "JGH Scooter", industry: { zh: "电动滑板车", en: "Electric scooters" }, platform: "Shopify", url: "https://www.jghscooter.com" },
  { name: "DeePower Bike", industry: { zh: "电动自行车", en: "E-bikes" }, platform: "Shopify", url: "https://deepowerbike.com" },
  { name: "Alethia", industry: { zh: "气候数据分析", en: "Climate data analytics" }, platform: null, url: "https://www.alethia.earth/" },
] as const

export function CaseStudiesOverview() {
  const { language, localizedPath } = useLanguage()
  const items = copy[language].items.slice(0, caseStudyPaths.length)

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen overflow-hidden bg-background text-foreground">
        <header className="relative px-4 pb-12 pt-32 sm:px-6 md:pb-16 md:pt-40 lg:px-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(119,252,117,0.11),transparent_50%)]" />
          <div className="relative mx-auto max-w-[1500px]">
            <p className="text-sm font-semibold tracking-[0.18em] text-primary">WHALELEAP / WORK</p>
            <h1 className="mt-4 text-balance text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight">{language === "zh" ? "项目案例" : "Case studies"}</h1>
            <p className="mt-5 max-w-2xl text-base leading-[1.75] text-muted-foreground md:text-lg">{language === "zh" ? "从完整案例到线上项目，浏览不同品牌的数字体验。" : "Explore in-depth case studies and live projects across different brands."}</p>
          </div>
        </header>
        <section aria-label={language === "zh" ? "案例列表" : "Case study list"} className="px-4 pb-20 sm:px-6 md:pb-28 lg:px-10">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-5 flex items-center gap-4 pb-4">
              <h2 className="text-sm font-semibold tracking-[0.12em] text-primary">{language === "zh" ? "精选案例" : "Featured stories"}</h2>
              <span className="text-sm text-muted-foreground">01 — 03</span>
            </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article key={caseStudyPaths[index]} className="group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-colors hover:border-primary/40">
              <a href={localizedPath(caseStudyPaths[index])} className="flex h-full flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary">
                <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                  <Image src={images[index]} alt={item.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col border-t border-white/10 p-5 sm:p-6">
                  <p className="text-sm font-semibold text-primary">{industries[language][index]}</p>
                  <h3 className="mt-2 text-xl font-bold leading-snug">{item.title}</h3>
                  <p className="mt-3 hidden flex-1 text-sm leading-[1.7] text-muted-foreground sm:block">{item.outcome}</p>
                  <span className="mt-5 inline-flex min-h-8 items-center gap-2 self-start text-sm font-semibold text-primary">
                    {language === "zh" ? "查看案例" : "View case study"}<ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </article>
          ))}
          </div>
            <div className="mb-5 mt-14 flex items-center gap-4 pb-4 md:mt-20">
              <h2 id="additional-cases-heading" className="text-sm font-semibold tracking-[0.12em] text-primary">{language === "zh" ? "更多项目" : "More projects"}</h2>
              <span className="text-sm text-muted-foreground">04 — {String(additionalCases.length + 3).padStart(2, "0")}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {additionalCases.map((item, index) => (
                <article key={item.url} className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-colors hover:border-primary/40">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="group flex h-full min-h-36 flex-col p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground">{String(index + 4).padStart(2, "0")}</p>
                      <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold leading-snug">{item.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.industry[language]}{item.platform ? ` · ${item.platform}` : ""}</p>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
