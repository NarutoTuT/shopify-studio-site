"use client"

import { useState } from "react"
import {
  BadgeAlert,
  CreditCard,
  Database,
  Gauge,
  HelpCircle,
  LineChart,
  PackageSearch,
  ShieldCheck,
  ShieldQuestion,
  ShoppingCart,
  Store,
  Users,
} from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/components/language-provider"

const icons = [LineChart, ShieldQuestion, Gauge, Store, BadgeAlert, HelpCircle]
const stageIcons = [Users, PackageSearch, ShieldCheck, ShoppingCart, CreditCard, Database]
const stages = ["TRAFFIC", "PRODUCT", "TRUST", "CART", "CHECKOUT", "DATA"]

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
  const [activeIndex, setActiveIndex] = useState(2)
  const ActiveProblemIcon = icons[activeIndex]
  const ActiveStageIcon = stageIcons[activeIndex]
  const activeProblem = text.problems[activeIndex]

  const selectAccordionItem = (value: string) => {
    if (!value) return
    setActiveIndex(Number(value.replace("problem-", "")))
  }

  return (
    <section className="relative overflow-hidden bg-black px-6 py-[50px] md:px-10 md:py-[100px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(119,252,117,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(119,252,117,0.32)_1px,transparent_1px)] [background-size:38px_38px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 size-[420px] rounded-full bg-primary/[0.08] blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-10 size-[460px] rounded-full bg-[#ff5f45]/[0.055] blur-[130px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mx-auto mb-10 max-w-5xl text-center md:mb-14">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />
            {text.eyebrow}
          </p>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-normal text-foreground">
            {text.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.7] text-muted-foreground md:text-lg">{text.description}</p>
        </div>

        <div className="relative lg:hidden">
          <div aria-hidden="true" className="absolute bottom-7 left-[27px] top-7 w-px bg-gradient-to-b from-primary/75 via-[#ff9a3c]/55 to-[#ff654a]/20 shadow-[0_0_16px_rgba(119,252,117,0.3)]" />

          <Accordion type="single" value={`problem-${activeIndex}`} onValueChange={selectAccordionItem} className="space-y-3">
            {text.problems.map((problem, index) => {
              const Icon = icons[index]
              const number = String(index + 1).padStart(2, "0")
              const isActive = activeIndex === index

              return (
                <AccordionItem
                  key={problem.title}
                  value={`problem-${index}`}
                  className={`group/item relative ml-[4.5rem] overflow-hidden rounded-2xl border px-4 backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 last:border-b ${
                    isActive
                      ? "border-[#ff7657]/55 bg-[rgba(255,107,74,0.07)] shadow-[0_0_36px_rgba(255,107,74,0.12),inset_0_0_28px_rgba(255,107,74,0.035)]"
                      : "border-white/10 bg-white/[0.035]"
                  }`}
                >
                  <div aria-hidden="true" className={`absolute -left-[4.6rem] top-4 z-10 flex size-14 items-center justify-center rounded-full border bg-black transition-all duration-300 ${
                    isActive
                      ? "border-[#ff7657]/70 text-[#ff8062] shadow-[0_0_28px_rgba(255,107,74,0.35),inset_0_0_22px_rgba(255,107,74,0.12)]"
                      : "border-primary/35 text-primary shadow-[0_0_22px_rgba(119,252,117,0.12)]"
                  }`}>
                    <span className={`absolute inset-1.5 rounded-full border border-dashed ${isActive ? "animate-[spin_12s_linear_infinite] border-[#ff7657]/35 motion-reduce:animate-none" : "border-primary/20"}`} />
                    <Icon className="relative size-5" />
                  </div>

                  <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent transition-opacity duration-300 ${isActive ? "via-[#ff7657] opacity-100 shadow-[0_0_18px_rgba(255,107,74,0.85)]" : "via-primary opacity-0"}`} />
                  <div aria-hidden="true" className={`pointer-events-none absolute -right-12 -top-16 size-32 rounded-full blur-3xl transition-opacity duration-300 ${isActive ? "bg-[#ff654a]/15 opacity-100" : "opacity-0"}`} />

                  <AccordionTrigger className="group py-4 text-left hover:no-underline focus-visible:border-transparent focus-visible:ring-1 focus-visible:ring-primary/45 [&>svg]:size-8 [&>svg]:rounded-full [&>svg]:border [&>svg]:border-white/10 [&>svg]:bg-white/[0.04] [&>svg]:p-2 [&>svg]:text-white/55 [&>svg]:shadow-[inset_0_0_12px_rgba(255,255,255,0.03)] [&>svg]:transition-all [&[data-state=open]>svg]:border-primary/40 [&[data-state=open]>svg]:bg-primary/10 [&[data-state=open]>svg]:text-primary [&[data-state=open]>svg]:shadow-[0_0_18px_rgba(119,252,117,0.22)]">
                    <span className="min-w-0 pr-2">
                      <span className={`mb-1.5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] ${isActive ? "text-[#ff8062]" : "text-primary/65"}`}>
                        <span>{number}</span>
                        <span>{stages[index]}</span>
                        {isActive && <span>· LEAK DETECTED</span>}
                      </span>
                      <span className="block text-[15px] font-semibold leading-snug text-foreground">
                        {problem.title}
                      </span>
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="pb-5 pr-8">
                    <div className="relative border-l border-[#ff7657]/30 pl-4">
                      <span className="absolute -left-[3px] top-1 size-[5px] rounded-full bg-[#ff7657] shadow-[0_0_10px_rgba(255,107,74,0.9)]" />
                      <p className="text-sm leading-[1.75] text-white/58">{problem.text}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>

        <div className="relative hidden overflow-hidden rounded-[2rem] border border-white/10 bg-black/65 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_40px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:block xl:p-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(119,252,117,0.08),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(119,252,117,0.28)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />

          <div className="relative flex items-center justify-between gap-4 border-b border-white/8 pb-5">
            <div className="flex items-center gap-3">
              <span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Growth Leak Scanner</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
              <span>Scan mode</span>
              <span className="text-white/70">Manual</span>
            </div>
          </div>

          <div className="relative mt-8">
            <div aria-hidden="true" className="absolute left-[7%] right-[7%] top-[55px] h-[2px] overflow-hidden bg-primary/35 shadow-[0_0_16px_rgba(119,252,117,0.38)]">
              <span className="block h-full w-full animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(119,252,117,1),rgba(255,154,60,0.9),transparent)] bg-[length:200%_100%] motion-reduce:animate-none" />
            </div>

            <div className="relative grid grid-cols-6 gap-3">
              {text.problems.map((problem, index) => {
                const ProblemIcon = icons[index]
                const StageIcon = stageIcons[index]
                const isActive = activeIndex === index

                return (
                  <button
                    key={problem.title}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    className="group flex min-w-0 flex-col items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7657]/65 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  >
                    <span className={`relative z-10 flex size-[110px] items-center justify-center rounded-full border bg-black/90 transition-[border-color,box-shadow,transform] duration-500 group-hover:-translate-y-1 ${
                      isActive
                        ? "border-[#ff7657]/75 text-[#ff8062] shadow-[0_0_46px_rgba(255,107,74,0.32),inset_0_0_32px_rgba(255,107,74,0.12)]"
                        : "border-primary/40 text-primary shadow-[0_0_32px_rgba(119,252,117,0.12),inset_0_0_26px_rgba(119,252,117,0.07)] group-hover:border-primary/80 group-hover:shadow-[0_0_42px_rgba(119,252,117,0.22)]"
                    }`}>
                      <span aria-hidden="true" className={`absolute inset-2 rounded-full border border-dashed ${isActive ? "animate-[spin_10s_linear_infinite] border-[#ff7657]/45 motion-reduce:animate-none" : "animate-[spin_18s_linear_infinite] border-primary/22 motion-reduce:animate-none"}`} />
                      <span aria-hidden="true" className={`absolute inset-5 rounded-full border ${isActive ? "border-[#ff7657]/25" : "border-white/10"}`} />
                      <StageIcon className="relative size-7" />
                    </span>

                    <span className={`mt-3 h-7 w-px bg-gradient-to-b ${isActive ? "from-[#ff7657] to-[#ff7657]/15" : "from-primary/70 to-primary/10"}`} />

                    <span className={`relative block h-full min-h-[116px] w-full overflow-hidden rounded-xl border p-4 text-center backdrop-blur-xl transition-[border-color,background-color,box-shadow,transform] duration-500 group-hover:-translate-y-1 ${
                      isActive
                        ? "border-[#ff7657]/55 bg-[rgba(255,107,74,0.075)] shadow-[0_0_34px_rgba(255,107,74,0.13)]"
                        : "border-white/10 bg-white/[0.035] group-hover:border-primary/30 group-hover:bg-primary/[0.045]"
                    }`}>
                      <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${isActive ? "via-[#ff7657] shadow-[0_0_14px_rgba(255,107,74,0.75)]" : "via-primary/50"}`} />
                      <span className={`mb-2 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] ${isActive ? "text-[#ff8062]" : "text-primary/70"}`}>
                        <ProblemIcon className="size-3.5" />
                        {stages[index]}
                      </span>
                      <span className="block text-xs font-semibold leading-[1.55] text-white/88 xl:text-sm">{problem.title}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div key={`${language}-${activeIndex}`} aria-live="polite" className="relative mt-6 grid overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_26px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-2 duration-400 lg:grid-cols-[0.95fr_1.2fr_0.55fr]">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#ff7657]/10 via-[#ff7657] to-cyan-300/30 shadow-[0_0_18px_rgba(255,107,74,0.75)]" />

            <div className="p-6 xl:p-7">
              <p className="mb-4 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ff8062]">
                <span className="size-2 animate-pulse rounded-full bg-[#ff7657] shadow-[0_0_12px_rgba(255,107,74,0.9)] motion-reduce:animate-none" />
                Leak detected
              </p>
              <h3 className="text-xl font-bold tracking-normal text-white xl:text-2xl">{activeProblem.title}</h3>
              <p className="mt-4 text-sm leading-[1.75] text-white/58 xl:text-base">{activeProblem.text}</p>
            </div>

            <div className="relative min-h-[190px] overflow-hidden border-x border-white/8 bg-black/25 p-5">
              <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(62,220,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(62,220,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
              <div className="relative flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-300/65">
                <span>Signal scan</span>
                <span>Node 0{activeIndex + 1}</span>
              </div>
              <svg aria-hidden="true" className="absolute inset-x-5 bottom-7 h-[105px] w-[calc(100%-2.5rem)]" viewBox="0 0 500 110" preserveAspectRatio="none">
                <path d="M0 68 C45 55 62 84 105 67 S170 43 210 64 S275 88 320 59 S390 35 430 58 S470 76 500 50" fill="none" stroke="rgba(67,221,255,0.45)" strokeWidth="2" />
                <path d="M0 79 C50 66 85 94 130 73 S205 57 250 77 S325 96 365 71 S445 52 500 72" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              </svg>
              <span aria-hidden="true" className="absolute bottom-5 top-10 w-px animate-[problem-scan_3.2s_ease-in-out_infinite] bg-[#ff7657] shadow-[0_0_18px_rgba(255,107,74,0.9)] motion-reduce:hidden" />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-6 text-center">
              <span className="relative flex size-20 items-center justify-center rounded-full border border-[#ff7657]/50 bg-[rgba(255,107,74,0.08)] text-[#ff8062] shadow-[0_0_35px_rgba(255,107,74,0.18),inset_0_0_22px_rgba(255,107,74,0.08)]">
                <span aria-hidden="true" className="absolute inset-2 animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-[#ff7657]/35 motion-reduce:animate-none" />
                <ActiveProblemIcon className="relative size-7" />
              </span>
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">Active node</span>
                <span className="mt-1 block font-mono text-xs font-semibold text-white">{stages[activeIndex]}</span>
              </div>
              <ActiveStageIcon className="size-4 text-primary/55" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
