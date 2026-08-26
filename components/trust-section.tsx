"use client"

import { BadgeCheck, Code2, Globe2, Languages, ShoppingBag, Workflow } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

const icons = [Code2, BadgeCheck, ShoppingBag, Workflow, Languages, Globe2]

const copy = {
  zh: {
    eyebrow: "WHY WHALELEAP",
    title: "更懂海外华人跨境品牌的 Shopify 技术增长伙伴。",
    description:
      "WhaleLeap 不是单纯交付页面的外包团队。我们用前端工程、Shopify 经验和跨境电商理解，帮助品牌把技术建设和增长目标连接起来。",
    reasons: [
      {
        title: "6 年前端开发经验",
        text: "理解组件化、性能、响应式和长期维护，不只会套模板。",
      },
      {
        title: "Shopify Theme / Liquid 经验",
        text: "熟悉主题结构、Liquid、sections、blocks 和 Shopify 前端实现边界。",
      },
      {
        title: "跨境电商项目经验",
        text: "理解中国品牌出海、海外华人创业和独立站运营的实际限制。",
      },
      {
        title: "懂技术，也理解业务",
        text: "能把老板、运营、投放和开发之间的需求翻译成可执行方案。",
      },
      {
        title: "中文沟通",
        text: "复杂需求可以直接用中文讨论，减少海外服务沟通成本。",
      },
      {
        title: "海外市场经验",
        text: "围绕全球市场的 Shopify 店铺、支付、物流、追踪和用户体验做判断。",
      },
    ],
  },
  en: {
    eyebrow: "WHY WHALELEAP",
    title: "A Shopify growth engineering partner built for Chinese-founded global brands.",
    description:
      "WhaleLeap is not a page-delivery outsourcing team. We connect frontend engineering, Shopify experience, and cross-border ecommerce context to growth outcomes.",
    reasons: [
      {
        title: "6 years of frontend experience",
        text: "Strong foundation in components, performance, responsive UX, and maintainable implementation.",
      },
      {
        title: "Shopify Theme / Liquid experience",
        text: "Familiar with theme architecture, Liquid, sections, blocks, and Shopify frontend constraints.",
      },
      {
        title: "Cross-border ecommerce context",
        text: "Understands Chinese brands going global, overseas Chinese founders, and real DTC operations.",
      },
      {
        title: "Technical and commercial thinking",
        text: "Translates founder, operator, media buyer, and developer needs into executable plans.",
      },
      {
        title: "Chinese communication",
        text: "Complex requirements can be discussed directly in Chinese, reducing the cost of overseas service communication.",
      },
      {
        title: "Global market experience",
        text: "Reviews Shopify stores around global payments, logistics, tracking, and customer experience.",
      },
    ],
  },
}

export function TrustSection() {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <section className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{text.eyebrow}</p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-normal text-foreground">{text.title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-[1.7] text-muted-foreground md:text-lg">{text.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {text.reasons.map((reason, index) => {
            const Icon = icons[index]

            return (
              <article key={reason.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <span className="mb-5 flex size-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mb-2 text-base font-semibold leading-snug tracking-normal text-foreground">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
