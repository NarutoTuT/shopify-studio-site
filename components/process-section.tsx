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
    <section className="bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{text.eyebrow}</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-normal text-foreground">{text.title}</h2>
          </div>
          <p className="max-w-3xl text-base leading-[1.7] text-muted-foreground md:text-lg lg:ml-auto">{text.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {text.steps.map((step, index) => {
            const Icon = icons[index]

            return (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs text-primary">0{index + 1}</span>
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-normal text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
