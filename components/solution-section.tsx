"use client"

import { BarChart3, Code2, MousePointerClick } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

const icons = [Code2, MousePointerClick, BarChart3]

const copy = {
  zh: {
    eyebrow: "GROWTH METHOD",
    title: "WhaleLeap 用工程、转化和追踪一起解决 Shopify 增长问题。",
    description:
      "我们不把 Shopify 项目拆成单独的页面开发任务，而是把技术底座、购买路径和数据体系放在同一个增长框架里。",
    pillars: [
      {
        label: "Engineering",
        title: "Shopify 技术建设",
        text: "建设 Shopify 主题、Liquid 模块、Custom Sections、性能基础和技术 SEO，让店铺稳定、快速、可维护。",
      },
      {
        label: "Conversion",
        title: "转化路径优化",
        text: "优化首页、产品页、活动页、移动端体验和购物路径，让用户更快理解产品并产生购买信任。",
      },
      {
        label: "Tracking",
        title: "数据追踪体系",
        text: "配置 GA4、GTM、Meta Pixel 和 Google Ads Tracking，让品牌看清流量、页面和订单之间的关系。",
      },
    ],
  },
  en: {
    eyebrow: "GROWTH METHOD",
    title: "WhaleLeap solves Shopify growth problems through engineering, conversion, and tracking.",
    description:
      "We do not treat Shopify projects as isolated page tasks. We connect technical foundations, buying paths, and data systems in one growth framework.",
    pillars: [
      {
        label: "Engineering",
        title: "Shopify Engineering",
        text: "Build Shopify themes, Liquid modules, custom sections, performance foundations, and technical SEO for a faster, maintainable store.",
      },
      {
        label: "Conversion",
        title: "Conversion Paths",
        text: "Improve homepage, PDPs, campaign pages, mobile UX, and buying paths so shoppers understand and trust faster.",
      },
      {
        label: "Tracking",
        title: "Growth Tracking",
        text: "Set up GA4, GTM, Meta Pixel, and Google Ads tracking so brands can connect traffic, pages, and orders.",
      },
    ],
  },
}

export function SolutionSection() {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <section className="relative overflow-hidden bg-background px-6 py-20 md:px-10 md:py-28">
      <div className="absolute inset-x-0 top-1/2 mx-auto h-72 max-w-4xl -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1500px]">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{text.eyebrow}</p>
          <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-bold leading-[1.08] tracking-normal text-foreground">{text.title}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.7] text-muted-foreground md:text-lg">{text.description}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {text.pillars.map((pillar, index) => {
            const Icon = icons[index]

            return (
              <article key={pillar.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{pillar.label}</span>
                  <span className="flex size-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-bold tracking-normal text-foreground">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{pillar.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
