import {
  ArrowUpRight,
  BarChart3,
  BookOpenText,
  Calculator,
  ChartNoAxesCombined,
  Code2,
  Compass,
  Library,
  TimerReset,
} from "lucide-react"

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
    number: "01",
    title: "Shopify 建站多少钱？费用、方案与报价说明",
    description: "了解 Shopify 建站费用构成、三档交付方案、价格差异和通常不包含的第三方费用。",
    href: "/learn/shopify-website-cost",
    label: "Shopify 建站费用",
    type: "决策指南",
    icon: Calculator,
  },
  {
    number: "02",
    title: "Shopify GA4 / GTM Tracking Plan",
    description: "查看核心电商事件、参数来源、GTM 架构、purchase 去重、收入差异与上线 QA。",
    href: "/learn/shopify-ga4-gtm-tracking-plan",
    label: "GA4 / GTM 追踪",
    type: "技术实施计划",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Shopify 定制开发多少钱？费用构成与报价逻辑说明",
    description: "从功能点、工时、技术风险和验收范围理解定制开发报价。",
    href: "/learn/shopify-custom-development-cost",
    label: "Shopify 定制开发",
    type: "报价指南",
    icon: Code2,
  },
  {
    number: "04",
    title: "Shopify GA4 购买转化追踪不到？排查清单与修复思路",
    description: "用三层定位法排查 purchase 缺失、重复和金额异常。",
    href: "/learn/shopify-ga4-purchase-tracking-fix",
    label: "GA4 故障排查",
    type: "排查清单",
    icon: TimerReset,
  },
  {
    number: "05",
    title: "Shopify 开发者怎么选？工作室 vs 自由职业者选择指南",
    description: "比较 Freelancer、Agency 与 Studio 的范围、排期和责任边界。",
    href: "/learn/hire-shopify-developer",
    label: "合作方选择",
    type: "选择指南",
    icon: Library,
  },
  {
    number: "06",
    title: "Shopify 转化率优化清单：PDP 检查与实操指南",
    description: "从 GA4 定位流失，再检查 PDP 信息、购买动作与信任阻力。",
    href: "/learn/shopify-cro-checklist",
    label: "Shopify CRO",
    type: "PDP 清单",
    icon: ChartNoAxesCombined,
  },
] as const

const problemLinks = [
  { title: "建站预算怎么判断", description: "先看费用区间、范围和常见额外成本。", href: "/learn/shopify-website-cost", icon: Calculator },
  { title: "需要定制 Shopify", description: "了解功能点、工时与定制报价逻辑。", href: "/learn/shopify-custom-development-cost", icon: Code2 },
  { title: "有流量但转化不稳", description: "用 PDP 清单检查购买路径和信息阻力。", href: "/learn/shopify-cro-checklist", icon: ChartNoAxesCombined },
  { title: "追踪数据对不上", description: "按三层定位法排查 purchase 故障。", href: "/learn/shopify-ga4-purchase-tracking-fix", icon: TimerReset },
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
            <section className="service-hero relative flex min-h-[82svh] items-center overflow-hidden bg-[#020403] px-4 pb-14 pt-28 sm:px-6 md:px-10 md:pb-20 md:pt-32 lg:min-h-[88svh]">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,#0a110c_0%,#040605_48%,#010202_100%)]" />
              <div aria-hidden="true" className="absolute -inset-[42%] animate-theme-aurora-orbit rounded-[42%] bg-[conic-gradient(from_35deg,transparent_0_15%,rgba(34,211,238,0.2)_25%,transparent_39%,rgba(119,252,117,0.28)_52%,transparent_67%,rgba(34,211,238,0.14)_80%,transparent_94%)] opacity-75 blur-3xl will-change-transform motion-reduce:animate-none" />
              <div aria-hidden="true" className="absolute -inset-x-[18%] -top-[24%] h-[118%] animate-theme-aurora-drift bg-[radial-gradient(ellipse_at_62%_38%,rgba(119,252,117,0.22),transparent_27%),radial-gradient(ellipse_at_34%_68%,rgba(34,211,238,0.16),transparent_30%)] opacity-80 blur-2xl will-change-transform motion-reduce:animate-none" />
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(119,252,117,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.16)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]" />
              <div aria-hidden="true" className="absolute -left-[30vw] inset-y-[7%] w-[28vw] animate-theme-liquid-compile bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.02)_18%,rgba(119,252,117,0.14)_50%,rgba(34,211,238,0.03)_72%,transparent)] mix-blend-screen will-change-transform motion-reduce:animate-none">
                <span className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/70 to-transparent shadow-[0_0_24px_rgba(119,252,117,0.5)]" />
              </div>
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.16)_62%,rgba(0,0,0,0.66)_100%)]" />
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px animate-shimmer bg-gradient-to-r from-transparent via-primary/65 to-transparent bg-[length:200%_100%] motion-reduce:animate-none" />
              <div className="relative z-10 mx-auto w-full max-w-[1500px] text-center">
                <p className="flex items-center justify-center gap-2 font-mono text-base font-semibold uppercase tracking-[0.08em] text-primary">
                  <Library className="size-5" />
                  LEARN / SHOPIFY GROWTH LIBRARY
                </p>
                <h1 className="mx-auto mt-6 max-w-[1050px] bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-[clamp(2.55rem,7vw,4.8rem)] font-bold leading-[1.04] tracking-normal text-transparent animate-shimmer motion-reduce:animate-none">Shopify 建站与增长学习资源</h1>
                <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.8] text-muted-foreground md:text-lg">围绕 Shopify 建站费用、数据追踪和增长工程，把复杂问题整理成可以直接用于决策与实施的指南。</p>
                <div className="mx-auto mt-9 grid max-w-3xl gap-3 sm:grid-cols-3">
                  {["6 篇深度指南", "建站 + 数据 + CRO", "持续维护更新"].map((item, index) => (
                    <div key={item} className={`flex min-h-14 items-center justify-center rounded-full border px-4 py-3 text-base font-semibold backdrop-blur-md ${index === 0 ? "border-primary/25 bg-primary/[0.08] text-primary" : "border-white/10 bg-black/20 text-white/68"}`}>{item}</div>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-black px-4 py-[50px] sm:px-6 md:px-10 md:py-[100px]">
              <div className="mx-auto max-w-[1500px]">
                <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
                  <p className="font-mono text-base uppercase tracking-[0.06em] text-primary">LEARNING RESOURCES</p>
                  <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">从业务判断到技术实施</h2>
                  <p className="mt-4 text-base leading-[1.8] text-muted-foreground md:text-lg">先理解范围、成本和数据链路，再决定应该投入哪一项工作。</p>
                </div>
                <div className="relative overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_20%_16%,rgba(119,252,117,0.12),transparent_30%),radial-gradient(circle_at_84%_76%,rgba(34,211,238,0.075),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.065),rgba(255,255,255,0.012))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_42px_110px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-5 lg:p-7">
                  <div className="grid gap-3 lg:grid-cols-2">
                  {resources.map((resource) => {
                    const Icon = resource.icon
                    return (
                      <article key={resource.href} className={`group flex min-h-[330px] flex-col justify-between rounded-[2rem_1.1rem_2.35rem_1.35rem] p-6 sm:min-h-[340px] sm:p-8 lg:min-h-[350px] lg:p-10 ${resource.number === "01" ? "bg-primary/[0.055]" : "bg-cyan-300/[0.035]"}`}>
                        <div>
                          <div className="flex items-center justify-between gap-4"><span className={`flex size-14 items-center justify-center rounded-full border ${resource.number === "01" ? "border-primary/35 bg-primary/10 text-primary" : "border-cyan-300/30 bg-cyan-300/[0.08] text-cyan-200"}`}><Icon className="size-6" /></span><span className="font-mono text-base text-white/38">{resource.number} / {resource.type}</span></div>
                          <p className={`mt-8 font-mono text-base uppercase tracking-[0.04em] ${resource.number === "01" ? "text-primary" : "text-cyan-300"}`}>{resource.label}</p>
                          <h3 className="mt-4 text-2xl font-bold leading-tight tracking-normal">{resource.title}</h3>
                          <p className="mt-5 text-base leading-[1.8] text-muted-foreground">{resource.description}</p>
                        </div>
                        <a href={resource.href} aria-label={`阅读：${resource.title}`} className="mt-8 inline-flex min-h-12 w-fit items-center gap-2 rounded-full border border-white/15 bg-black/20 px-6 text-base font-semibold text-white transition-colors hover:border-primary/40 hover:bg-primary hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">阅读指南<ArrowUpRight className="size-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
                      </article>
                    )
                  })}
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
              <div className="mx-auto max-w-[1500px]">
                <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
                  <p className="flex items-center justify-center gap-2 font-mono text-base uppercase tracking-[0.06em] text-primary"><Compass className="size-5" />BROWSE BY PROBLEM</p>
                  <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">从当前问题开始</h2>
                  <p className="mt-4 text-base leading-[1.8] text-muted-foreground md:text-lg">不必先理解所有技术名词。选择最接近的业务问题，直接进入对应指南或服务范围。</p>
                </div>
                <div className="relative overflow-hidden rounded-[2.8rem_1.45rem_3.2rem_1.8rem] border border-white/20 bg-[radial-gradient(circle_at_84%_18%,rgba(34,211,238,0.07),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_35px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-5">
                  <div className="grid gap-2 md:grid-cols-2">
                    {problemLinks.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <a key={item.title} href={item.href} className={`group grid min-h-40 grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[1.55rem] p-5 transition-colors hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-6 ${index === 0 ? "bg-primary/[0.055]" : "bg-black/18"}`}>
                          <span className="flex size-12 items-center justify-center rounded-full bg-black/25 text-primary"><Icon className="size-5" /></span>
                          <span><span className="block text-xl font-semibold text-white">{item.title}</span><span className="mt-2 block text-base leading-[1.65] text-muted-foreground">{item.description}</span></span>
                          <ArrowUpRight className="size-5 text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
              <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[3.2rem_1.5rem_3.6rem_1.8rem] border border-white/25 bg-[linear-gradient(115deg,rgba(255,255,255,0.075),rgba(255,255,255,0.015)_38%,rgba(34,211,238,0.045)_72%,rgba(119,252,117,0.075))] px-7 py-12 shadow-[inset_0_2px_0_rgba(255,255,255,0.22),0_45px_110px_rgba(0,0,0,0.45),0_0_80px_rgba(119,252,117,0.08)] backdrop-blur-3xl md:px-14 md:py-16">
                <div className="grid gap-8 text-center lg:grid-cols-[1fr_auto] lg:items-end lg:text-left">
                  <div><p className="flex items-center justify-center gap-2 font-mono text-base uppercase tracking-[0.06em] text-cyan-300 lg:justify-start"><BookOpenText className="size-5" />FROM READING TO ACTION</p><h2 className="mt-4 max-w-4xl text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">不确定应该先解决建站、转化还是追踪问题？</h2><p className="mx-auto mt-5 max-w-3xl text-base leading-[1.8] text-muted-foreground md:text-lg lg:mx-0">发送店铺链接和当前问题，我们先判断最值得检查的环节，不要求你先整理完整技术需求。</p></div>
                  <a href="/diagnosis" className="mx-auto inline-flex min-h-14 w-fit items-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:mx-0">开始免费诊断<ArrowUpRight className="size-5" /></a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
