"use client"

import { useEffect, useState } from "react"
import { BarChart3, Code2, MousePointerClick } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

const icons = [Code2, MousePointerClick, BarChart3]

const desktopNodePositions = [
  "left-1/2 top-[5%] -translate-x-1/2",
  "left-[5%] top-[42%]",
  "right-[5%] top-[42%]",
]

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
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reducedMotion || isPaused) return

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % text.pillars.length)
    }, 4200)

    return () => window.clearInterval(interval)
  }, [isPaused, text.pillars.length])

  const ActiveIcon = icons[activeIndex]
  const activePillar = text.pillars[activeIndex]
  const selectPillar = (index: number) => {
    setActiveIndex(index)
    setIsPaused(true)
  }

  return (
    <section className="relative overflow-hidden bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(119,252,117,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(119,252,117,0.35)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute inset-x-[12%] top-[28%] h-[46%] rounded-full bg-primary/10 blur-[130px]" />
      <div className="relative mx-auto max-w-[1500px]">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)]" />
            {text.eyebrow}
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-normal text-foreground">{text.title}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.7] text-muted-foreground md:text-lg">{text.description}</p>
        </div>

        <div
          className="relative hidden h-[680px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl md:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(119,252,117,0.13),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.015),transparent)]" />
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle,rgba(119,252,117,0.35)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />

          <div className="absolute left-7 top-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
            <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.8)] motion-reduce:animate-none" />
            Growth engine online
          </div>
          <div className="absolute right-7 top-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
            Node 0{activeIndex + 1} / 03
          </div>

          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 1000 680" preserveAspectRatio="none">
            {[
              "M500 266 L500 112",
              "M465 294 L190 350",
              "M535 294 L810 350",
            ].map((path, index) => (
              <g key={path}>
                <path d={path} fill="none" stroke="#77fc75" strokeWidth="12" opacity={activeIndex === index ? 0.12 : 0.025} className="transition-opacity duration-700" />
                <path d={path} fill="none" stroke="#77fc75" strokeWidth={activeIndex === index ? 2 : 1} strokeDasharray="9 12" opacity={activeIndex === index ? 0.95 : 0.22} className="transition-all duration-700" />
              </g>
            ))}
          </svg>

          <div className="absolute left-1/2 top-[39%] flex size-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/35 bg-black/75 shadow-[0_0_80px_rgba(119,252,117,0.2),inset_0_0_42px_rgba(119,252,117,0.09)]">
            <div className="absolute inset-3 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-primary/25 motion-reduce:animate-none" />
            <div className="absolute inset-7 animate-pulse rounded-full bg-primary/10 blur-md motion-reduce:animate-none" />
            <div className="relative text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/70">Shopify</span>
              <strong className="mt-1 block text-sm font-bold tracking-[0.12em] text-white">GROWTH</strong>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/70">Engine</span>
            </div>
          </div>

          {text.pillars.map((pillar, index) => {
            const Icon = icons[index]
            const isActive = activeIndex === index

            return (
              <button
                key={pillar.title}
                type="button"
                aria-pressed={isActive}
                onClick={() => selectPillar(index)}
                className={`absolute ${desktopNodePositions[index]} group flex w-[230px] items-center gap-4 rounded-2xl border p-4 text-left backdrop-blur-xl transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                  isActive
                    ? "border-primary/55 bg-primary/[0.09] shadow-[0_0_40px_rgba(119,252,117,0.15),inset_0_0_24px_rgba(119,252,117,0.04)]"
                    : "border-white/10 bg-white/[0.035] hover:border-primary/25 hover:bg-white/[0.055]"
                }`}
              >
                <span className={`flex size-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 ${isActive ? "border-primary/45 bg-primary/15 text-primary shadow-[0_0_22px_rgba(119,252,117,0.2)]" : "border-white/10 bg-black/30 text-white/45"}`}>
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className={`block font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${isActive ? "text-primary" : "text-white/35"}`}>{pillar.label}</span>
                  <span className="mt-1 block text-sm font-semibold text-white">{pillar.title}</span>
                </span>
              </button>
            )
          })}

          <div key={activePillar.title} className="absolute inset-x-[18%] bottom-7 overflow-hidden rounded-2xl border border-primary/25 bg-black/65 p-6 shadow-[0_0_50px_rgba(119,252,117,0.08)] backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-3 duration-500">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_18px_rgba(119,252,117,0.75)]" />
            <div className="flex items-start gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <ActiveIcon className="size-5" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Active node · 0{activeIndex + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{activePillar.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-[1.75] text-white/55 md:text-base">{activePillar.text}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative space-y-3 md:hidden">
          <div className="pointer-events-none absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent" />
          {text.pillars.map((pillar, index) => {
            const Icon = icons[index]
            const isActive = activeIndex === index

            return (
              <div key={pillar.title} className="relative pl-12">
                <span className={`absolute left-[14px] top-6 size-3 rounded-full border transition-all duration-500 ${isActive ? "border-primary bg-primary shadow-[0_0_18px_rgba(119,252,117,0.9)]" : "border-white/20 bg-black"}`} />
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => selectPillar(index)}
                  className={`w-full overflow-hidden rounded-2xl border p-4 text-left backdrop-blur-xl transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${isActive ? "border-primary/45 bg-primary/[0.08] shadow-[0_0_32px_rgba(119,252,117,0.11)]" : "border-white/10 bg-white/[0.035]"}`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`flex size-10 items-center justify-center rounded-xl border ${isActive ? "border-primary/35 bg-primary/10 text-primary" : "border-white/10 bg-black/25 text-white/45"}`}>
                      <Icon className="size-[18px]" />
                    </span>
                    <span>
                      <span className={`block font-mono text-[10px] uppercase tracking-[0.18em] ${isActive ? "text-primary" : "text-white/35"}`}>{pillar.label}</span>
                      <span className="mt-1 block text-[15px] font-semibold text-white">{pillar.title}</span>
                    </span>
                  </span>
                  {isActive && (
                    <span className="mt-4 block border-t border-primary/15 pt-4 text-sm leading-[1.75] text-white/55 animate-in fade-in slide-in-from-top-2 duration-300">
                      {pillar.text}
                    </span>
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
