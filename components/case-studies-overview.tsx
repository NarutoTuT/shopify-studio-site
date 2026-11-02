"use client"

import Image from "next/image"
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
      <main id="main-content" className="mx-auto max-w-[1400px] px-4 pb-24 pt-36 sm:px-6 lg:px-10">
        <p className="text-base font-semibold text-primary">{language === "zh" ? "项目案例" : "Case studies"}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{language === "zh" ? "Shopify 项目案例" : "Shopify case studies"}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">{language === "zh" ? "查看已公开的项目、实际交付范围与工程证据。" : "Explore published projects, delivery scope, and engineering evidence."}</p>
        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <article key={caseStudyPaths[index]} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <a href={localizedPath(caseStudyPaths[index])} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                  <Image src={images[index]} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-base text-primary">{industries[language][index]}</p>
                  <h2 className="mt-2 text-2xl font-bold">{item.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.outcome}</p>
                  <span className="mt-5 inline-block text-base font-semibold text-primary">{language === "zh" ? "查看详情 →" : "View case study →"}</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
