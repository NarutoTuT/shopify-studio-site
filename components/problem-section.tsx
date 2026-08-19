"use client"

import { BadgeAlert, Gauge, HelpCircle, LineChart, ShieldQuestion, Store } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

const icons = [LineChart, ShieldQuestion, Gauge, Store, BadgeAlert, HelpCircle]

const copy = {
  zh: {
    eyebrow: "GROWTH BLOCKERS",
    title: "很多 Shopify 店铺不是没有流量，而是增长路径在漏单。",
    description:
      "海外华人跨境品牌经常已经有产品、素材和广告预算，但网站没有把访客顺利带到信任、加购和下单。",
    problems: [
      {
        title: "广告有点击，但订单少",
        text: "流量进入网站后，没有被清楚的页面结构、产品价值和购买路径承接。",
      },
      {
        title: "产品页面无法建立购买信任",
        text: "卖点、规格、评价、配送、退换和保障内容没有形成完整的决策闭环。",
      },
      {
        title: "网站速度影响体验",
        text: "主题、图片和 App 堆叠让页面变慢，尤其影响移动端广告流量。",
      },
      {
        title: "Shopify 主题限制增长",
        text: "模板模块不够灵活，运营团队想测试页面和活动时经常被主题结构卡住。",
      },
      {
        title: "数据追踪不完整",
        text: "GA4、GTM、Pixel 和广告平台数据不一致，难以判断预算花在哪里有效。",
      },
      {
        title: "不知道问题在哪里",
        text: "广告、页面、价格、物流、追踪都可能影响转化，但团队缺少系统诊断路径。",
      },
    ],
  },
  en: {
    eyebrow: "GROWTH BLOCKERS",
    title: "Many Shopify stores do not lack traffic. They leak revenue across the buying path.",
    description:
      "Chinese-founded global ecommerce brands often have products, content, and ad budgets, but the store does not guide visitors into trust, cart, and checkout.",
    problems: [
      {
        title: "Clicks do not become orders",
        text: "Paid visitors are not supported by a clear page structure, product value, and buying path.",
      },
      {
        title: "Product pages do not build trust",
        text: "Benefits, specs, reviews, shipping, returns, and guarantees do not form a complete decision path.",
      },
      {
        title: "Store speed hurts experience",
        text: "Themes, images, and app bloat slow down the store, especially for mobile paid traffic.",
      },
      {
        title: "The theme limits growth",
        text: "Rigid templates make it hard for operators to test pages, offers, campaigns, and new content.",
      },
      {
        title: "Tracking is incomplete",
        text: "GA4, GTM, pixels, and ad platforms do not match, making budget decisions hard to trust.",
      },
      {
        title: "The team cannot locate the problem",
        text: "Ads, pages, pricing, logistics, and tracking all affect conversion, but the diagnosis path is unclear.",
      },
    ],
  },
}

export function ProblemSection() {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="lg:sticky lg:top-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{text.eyebrow}</p>
          <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.6rem)] font-bold leading-[1.08] tracking-normal text-foreground">
            {text.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.7] text-muted-foreground md:text-lg">{text.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {text.problems.map((problem, index) => {
            const Icon = icons[index]

            return (
              <article key={problem.title} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors hover:bg-white/[0.06]">
                <span className="mb-5 flex size-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-transform group-hover:scale-105">
                  <Icon className="size-5" />
                </span>
                <h3 className="mb-3 text-lg font-semibold leading-snug tracking-normal text-foreground">{problem.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{problem.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
