"use client"

import { Code2, Globe2, Workflow } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

const proofIcons = [Code2, Workflow, Globe2]

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
    title: "A Shopify growth engineering partner for Chinese-founded brands selling globally.",
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
  const proofLabels = language === "zh"
    ? ["Engineering", "Growth Context", "Global Collaboration"]
    : ["Engineering", "Growth Context", "Global Collaboration"]
  const proofGroups = [
    [text.reasons[0], text.reasons[1]],
    [text.reasons[2], text.reasons[3]],
    [text.reasons[4], text.reasons[5]],
  ]
  const capabilityTags = ["SHOPIFY", "LIQUID", "CROSS-BORDER", "BILINGUAL"]

  return (
    <section className="relative overflow-hidden bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(119,252,117,0.28)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 size-[520px] rounded-full bg-cyan-400/[0.045] blur-[130px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mx-auto mb-12 max-w-5xl text-center md:mb-16">
          <p className="section-eyebrow mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase text-primary md:text-sm">
            <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />
            {text.eyebrow}
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-normal text-foreground">{text.title}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.7] text-muted-foreground md:text-lg">{text.description}</p>
        </div>

        <div className="home-module-shell grid items-stretch gap-6 p-4 sm:p-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:p-8">
          <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_35px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:min-h-[520px] sm:p-8">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(119,252,117,0.12),transparent_48%)]" />
            <div aria-hidden="true" className="absolute inset-[12%] animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-primary/20 motion-reduce:animate-none" />
            <div aria-hidden="true" className="absolute inset-[19%] animate-[spin_20s_linear_infinite_reverse] rounded-full border border-cyan-300/15 motion-reduce:animate-none" />

            <div className="relative flex size-[235px] items-center justify-center sm:size-[310px]">
              <div aria-hidden="true" className="absolute inset-0 animate-[spin_22s_linear_infinite] rounded-[46%_54%_57%_43%/48%_42%_58%_52%] border border-primary/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(119,252,117,0.07),rgba(34,211,238,0.06))] shadow-[inset_0_0_55px_rgba(255,255,255,0.06),0_0_70px_rgba(119,252,117,0.12)] backdrop-blur-2xl motion-reduce:animate-none" />
              <div aria-hidden="true" className="absolute inset-6 animate-[spin_16s_linear_infinite_reverse] rounded-[58%_42%_44%_56%/45%_55%_45%_55%] border border-white/15 bg-black/35 motion-reduce:animate-none" />
              <div className="relative text-center">
                <span className="block text-[clamp(4.5rem,9vw,7.5rem)] font-bold leading-none tracking-[-0.08em] text-white drop-shadow-[0_0_28px_rgba(119,252,117,0.28)]">6</span>
                <span className="mt-1 block font-mono text-lg font-semibold tracking-[0.2em] text-primary sm:text-2xl">YEARS</span>
                <span className="mt-3 block font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">Experience core</span>
              </div>
            </div>

            {capabilityTags.map((tag, index) => {
              const positions = [
                "left-4 top-6 sm:left-8 sm:top-9",
                "right-4 top-10 sm:right-8 sm:top-14",
                "bottom-8 left-3 sm:bottom-12 sm:left-7",
                "bottom-5 right-3 sm:bottom-10 sm:right-7",
              ]

              return (
                <span key={tag} className={`absolute ${positions[index]} rounded-full border border-white/15 bg-black/60 px-3 py-2 font-mono text-[9px] tracking-[0.12em] text-white/80 shadow-[0_0_24px_rgba(119,252,117,0.08)] backdrop-blur-xl sm:px-4 sm:text-[10px]`}>
                  <span className="mr-2 inline-block size-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(119,252,117,0.85)]" />
                  {tag}
                </span>
              )
            })}
          </div>

          <div className="grid gap-4">
            {proofGroups.map((group, index) => {
              const Icon = proofIcons[index]

              return (
                <article key={proofLabels[index]} className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-[border-color,background-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.055] hover:shadow-[0_0_42px_rgba(119,252,117,0.1)] sm:p-6">
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/75 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px -translate-x-full bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex items-center justify-between sm:block">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(119,252,117,0.08)]">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-primary sm:hidden">Verified</span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <h3 className="text-xl font-semibold tracking-normal text-foreground">{proofLabels[index]}</h3>
                        <span className="hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-primary sm:inline-flex">
                          <span className="size-1.5 animate-pulse rounded-full bg-primary motion-reduce:animate-none" />
                          Verified
                        </span>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {group.map((reason) => (
                          <div key={reason.title}>
                            <h4 className="mb-1.5 text-sm font-semibold leading-snug text-white/90">{reason.title}</h4>
                            <p className="text-xs leading-[1.65] text-muted-foreground sm:text-sm">{reason.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
