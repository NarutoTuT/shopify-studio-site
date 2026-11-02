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

export function CaseStudiesOverview() {
  const { language, localizedPath } = useLanguage()
  const items = copy[language].items.slice(0, caseStudyPaths.length)

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen overflow-hidden bg-background text-foreground">
        <header className="relative px-4 pb-14 pt-32 text-center sm:px-6 md:pb-20 md:pt-40 lg:px-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(119,252,117,0.11),transparent_50%)]" />
          <div className="relative mx-auto max-w-4xl">
            <p className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-base font-semibold text-primary">{language === "zh" ? "项目案例" : "Case studies"}</p>
            <h1 className="mt-6 text-balance text-[clamp(2.1rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight">{language === "zh" ? "Shopify 项目案例" : "Shopify case studies"}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.8] text-muted-foreground md:text-lg">{language === "zh" ? "查看已公开的项目、实际交付范围与工程证据。" : "Explore published projects, delivery scope, and engineering evidence."}</p>
          </div>
        </header>
        <section aria-label={language === "zh" ? "案例列表" : "Case study list"} className="px-4 pb-20 sm:px-6 md:pb-28 lg:px-10">
          <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article key={caseStudyPaths[index]} className="home-module-shell group min-w-0 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <a href={localizedPath(caseStudyPaths[index])} className="flex h-full flex-col overflow-hidden rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary">
                <div className="relative aspect-[4/3] overflow-hidden bg-white/5 sm:aspect-[16/10]">
                  <Image src={images[index]} alt={item.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col border-t border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-7">
                  <p className="text-base font-semibold text-primary">{industries[language][index]}</p>
                  <h2 className="mt-3 text-2xl font-bold leading-snug">{item.title}</h2>
                  <p className="mt-4 flex-1 text-base leading-[1.75] text-muted-foreground">{item.outcome}</p>
                  <span className="mt-7 inline-flex min-h-11 items-center gap-2 self-start text-base font-semibold text-primary">
                    {language === "zh" ? "查看案例" : "View case study"}<ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </article>
          ))}
          </div>
        </section>
      </main>
    </>
  )
}
