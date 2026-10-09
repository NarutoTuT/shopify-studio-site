import { ArrowUpRight } from "lucide-react"

const copy = {
  zh: {
    eyebrow: "RELATED CASE STUDIES",
    title: "相关案例",
    description: "查看真实 Shopify 项目如何把设计、工程实现和购买路径连接起来。",
    cta: "查看案例",
    items: [
      {
        title: "Terrawulf｜电动越野车工程",
        description: "高客单产品信息架构、Shopify OS 2.0、Liquid、Custom Sections 与响应式 QA。",
        href: "/case-studies/terrawulf",
      },
      {
        title: "SilkGear｜高端科技零售",
        description: "多品牌商品发现、编辑式首页、集合页、PDP 与线上线下体验衔接。",
        href: "/case-studies/silkgear",
      },
    ],
  },
  en: {
    eyebrow: "RELATED CASE STUDIES",
    title: "Related case studies",
    description: "See how real Shopify projects connect design, engineering, and the path to purchase.",
    cta: "View case study",
    items: [
      {
        title: "Terrawulf · Electric Dirt Bike Engineering",
        description: "High-ticket product architecture, Shopify OS 2.0, Liquid, custom sections, and responsive QA.",
        href: "/en/case-studies/terrawulf",
      },
      {
        title: "SilkGear · Premium Tech Retail",
        description: "Multi-brand discovery, editorial homepage, collections, PDPs, and online-to-store experience.",
        href: "/en/case-studies/silkgear",
      },
    ],
  },
} as const

export function RelatedCaseStudies({ language }: { language: "zh" | "en" }) {
  const text = copy[language]

  return (
    <section className="bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="font-mono text-base font-semibold uppercase tracking-[0.08em] text-cyan-300">{text.eyebrow}</p>
          <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.title}</h2>
          <p className="mt-4 text-base leading-[1.75] text-muted-foreground md:text-lg">{text.description}</p>
        </div>
        <div className="grid overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.025] md:grid-cols-2 md:divide-x md:divide-white/10">
          {text.items.map((item) => (
            <a key={item.href} href={item.href} className="group min-w-0 border-b border-white/10 p-6 transition-colors last:border-b-0 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary md:border-b-0 md:p-8">
              <h3 className="text-xl font-bold tracking-normal">{item.title}</h3>
              <p className="mt-3 text-base leading-[1.75] text-muted-foreground">{item.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-primary">
                {text.cta}
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
