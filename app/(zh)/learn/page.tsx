import { ArrowUpRight, BarChart3, Calculator, Library } from "lucide-react"

import { LanguageProvider } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "Shopify 建站与增长学习资源",
  description: "WhaleLeap Studio 的 Shopify 建站费用、GA4/GTM 电商追踪与增长工程实用指南。",
  path: "/learn",
  language: "zh",
  zhPath: "/learn",
})

const resources = [
  {
    title: "Shopify 建站多少钱？费用、方案与报价说明",
    description: "了解 Shopify 建站费用构成、三档交付方案、价格差异和通常不包含的第三方费用。",
    href: "/learn/shopify-website-cost",
    label: "Shopify 建站费用",
    icon: Calculator,
  },
  {
    title: "Shopify GA4 / GTM Tracking Plan",
    description: "查看核心电商事件、参数来源、GTM 架构、purchase 去重、收入差异与上线 QA。",
    href: "/learn/shopify-ga4-gtm-tracking-plan",
    label: "GA4 / GTM 追踪",
    icon: BarChart3,
  },
] as const

export default function LearnPage() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <div className="min-h-screen bg-background text-foreground">
          <PageStructuredData
            breadcrumbs={[
              { name: "首页", url: "https://whaleleap.studio/" },
              { name: "学习资源", url: "https://whaleleap.studio/learn" },
            ]}
            page={{
              name: "Shopify 建站与增长学习资源",
              description: "Shopify 建站费用、GA4/GTM 电商追踪与增长工程实用指南。",
              url: "https://whaleleap.studio/learn",
              inLanguage: "zh-CN",
              about: ["Shopify 建站", "Shopify GA4", "Shopify GTM", "Shopify 增长工程"],
            }}
          />
          <Navbar />
          <main id="main-content" tabIndex={-1}>
        <section className="relative overflow-hidden bg-black px-4 pb-16 pt-32 sm:px-6 md:px-10 md:pb-24 md:pt-40">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(119,252,117,0.12),transparent_32%),radial-gradient(circle_at_78%_68%,rgba(34,211,238,0.08),transparent_30%)]" />
          <div className="relative mx-auto max-w-[1500px]">
            <p className="flex items-center gap-2 font-mono text-base font-semibold uppercase tracking-[0.08em] text-primary">
              <Library className="size-5" />
              LEARN
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.04] tracking-normal">
              Shopify 建站与增长学习资源
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-[1.8] text-muted-foreground md:text-lg">
              围绕 Shopify 建站费用、数据追踪和增长工程，把复杂问题整理成可以直接用于决策与实施的指南。
            </p>
          </div>
        </section>

        <section className="bg-background px-4 pb-[70px] pt-14 sm:px-6 md:px-10 md:pb-[110px] md:pt-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.025] lg:grid-cols-2 lg:divide-x lg:divide-white/10">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <article key={resource.href} className="border-b border-white/10 p-6 last:border-b-0 sm:p-8 lg:border-b-0 lg:p-10">
                    <Icon className="size-7 text-primary" />
                    <p className="mt-6 font-mono text-base uppercase tracking-[0.04em] text-cyan-300">{resource.label}</p>
                    <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.3rem)] font-bold leading-tight tracking-normal">{resource.title}</h2>
                    <p className="mt-4 text-base leading-[1.8] text-muted-foreground">{resource.description}</p>
                    <a href={resource.href} className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      阅读指南
                      <ArrowUpRight className="size-5" />
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
          </main>
        </div>
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
