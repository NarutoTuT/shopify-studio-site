"use client"

import { ClipboardCheck, Hammer, LineChart, SearchCheck, TrendingUp } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

const icons = [SearchCheck, ClipboardCheck, Hammer, LineChart, TrendingUp]

const copy = {
  zh: {
    eyebrow: "WORKING PROCESS",
    title: "先诊断，再投入。让 Shopify 项目从一开始就降低决策风险。",
    description:
      "早期不需要一次性确定所有需求。我们先判断增长问题，再决定是做 Audit、开发项目，还是进入长期技术支持。",
    steps: [
      {
        title: "免费诊断",
        text: "查看店铺、产品、市场和当前问题，判断 Shopify 增长路径中最明显的阻塞点。",
      },
      {
        title: "Growth Audit",
        text: "深入分析页面结构、主题性能、转化路径和数据追踪，输出优先级路线图。",
      },
      {
        title: "项目实施",
        text: "执行 Shopify Engineering、转化页面优化、Tracking 配置和关键模块开发。",
      },
      {
        title: "数据验证",
        text: "上线后检查事件、页面路径和关键转化数据，确保团队能基于数据复盘。",
      },
      {
        title: "持续优化",
        text: "围绕页面、性能、追踪和技术 backlog 做长期迭代，让店铺持续增长。",
      },
    ],
  },
  en: {
    eyebrow: "WORKING PROCESS",
    title: "Diagnose before you invest. Reduce risk before the Shopify project starts.",
    description:
      "You do not need to define every requirement on day one. We identify growth blockers first, then decide whether you need an audit, project, or ongoing support.",
    steps: [
      {
        title: "Free Review",
        text: "Review the store, product, market, and current issue to identify obvious growth blockers.",
      },
      {
        title: "Growth Audit",
        text: "Analyze page structure, theme performance, conversion paths, and tracking to create a prioritized roadmap.",
      },
      {
        title: "Implementation",
        text: "Execute Shopify engineering, conversion page improvements, tracking setup, and key module development.",
      },
      {
        title: "Measure",
        text: "Check events, page paths, and conversion data after launch so the team can review with confidence.",
      },
      {
        title: "Optimize",
        text: "Iterate on pages, performance, tracking, and the technical backlog for long-term growth.",
      },
    ],
  },
}

export function ProcessSection() {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <section className="relative overflow-hidden bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(119,252,117,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(119,252,117,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mx-auto mb-12 max-w-5xl text-center md:mb-16">
          <p className="section-eyebrow mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase text-primary md:text-sm">
            <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_12px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />
            {text.eyebrow}
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-normal text-foreground">{text.title}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.7] text-muted-foreground md:text-lg">{text.description}</p>
        </div>

        <div className="home-module-shell p-4 sm:p-6 lg:p-8">
          <div className="relative grid gap-4 lg:grid-cols-5">
            <div aria-hidden="true" className="absolute bottom-8 left-[27px] top-8 w-px bg-gradient-to-b from-primary via-primary/45 to-cyan-400/25 shadow-[0_0_14px_rgba(119,252,117,0.35)] lg:bottom-auto lg:left-[8%] lg:right-[8%] lg:top-[58px] lg:h-px lg:w-auto lg:overflow-hidden lg:bg-primary/25 lg:shadow-[0_0_18px_rgba(119,252,117,0.45)]">
              <span className="hidden h-full w-full animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(119,252,117,1),rgba(58,221,255,0.8),transparent)] bg-[length:200%_100%] motion-reduce:animate-none lg:block" />
            </div>

            {text.steps.map((step, index) => {
              const Icon = icons[index]

              return (
                <article key={step.title} className="group relative grid min-w-0 grid-cols-[56px_1fr] gap-4 lg:flex lg:flex-col lg:items-center lg:gap-0">
                  <div className="relative z-10 flex size-14 items-center justify-center rounded-full border border-primary/45 bg-black shadow-[0_0_26px_rgba(119,252,117,0.16),inset_0_0_20px_rgba(119,252,117,0.08)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-500 group-hover:border-primary lg:size-[116px] lg:bg-black/90 lg:shadow-[0_0_45px_rgba(119,252,117,0.12),inset_0_0_30px_rgba(119,252,117,0.08)] lg:group-hover:-translate-y-1 lg:group-hover:shadow-[0_0_55px_rgba(119,252,117,0.3),inset_0_0_35px_rgba(119,252,117,0.13)]">
                    <span aria-hidden="true" className="absolute inset-1.5 rounded-full border border-dashed border-primary/25 lg:inset-2 lg:animate-[spin_16s_linear_infinite] motion-reduce:animate-none" />
                    <span aria-hidden="true" className="absolute inset-5 hidden rounded-full border border-white/10 lg:block" />
                    <Icon className="relative size-5 text-primary lg:mt-6 lg:size-4" />
                    <span className="absolute top-7 hidden font-mono text-2xl font-bold text-white lg:block">0{index + 1}</span>
                  </div>

                  <span aria-hidden="true" className="hidden h-7 w-px bg-gradient-to-b from-primary/80 to-primary/15 lg:block" />

                  <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-[border-color,background-color,box-shadow,transform] duration-500 group-hover:border-primary/40 lg:bg-white/[0.035] lg:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_60px_rgba(0,0,0,0.28)] lg:group-hover:-translate-y-1 lg:group-hover:bg-primary/[0.065] lg:group-hover:shadow-[0_0_38px_rgba(119,252,117,0.1)]">
                    <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px -translate-x-full bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <div className="mb-3 flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-[0.02em] text-primary lg:mb-5 lg:text-sm lg:text-primary/70">
                      <span><span className="lg:hidden">0{index + 1}</span><span className="hidden lg:inline">NODE / 0{index + 1}</span></span>
                      <span><span className="lg:hidden">Process node</span><span className="hidden lg:inline">{(index + 1) * 20}%</span></span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold tracking-normal text-foreground lg:mb-3">{step.title}</h3>
                    <p className="text-base leading-[1.7] text-muted-foreground">{step.text}</p>
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
