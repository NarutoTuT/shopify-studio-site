"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, BarChart3, Code2, ShoppingCart } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

gsap.registerPlugin(ScrollTrigger)

const icons = [Code2, ShoppingCart, BarChart3]
const serviceLinks = [
  "/services/shopify-website-build",
  "/services/shopify-conversion-optimization",
  "/services/shopify-ga4-gtm",
]

const copy = {
  zh: {
    eyebrow: "SERVICE SYSTEM",
    title: "围绕 Shopify 增长，而不是围绕开发任务拆服务。",
    description: "三个服务方向对应三个核心问题：技术底座是否稳定、购买路径是否能转化、数据是否能指导下一步。",
    problemLabel: "PROBLEM",
    solutionLabel: "SOLUTION",
    capabilityLabel: "BEST FOR",
    cta: "查看服务详情",
    services: [
      {
        label: "01",
        title: "Shopify Engineering",
        problem: "你的 Shopify 店铺需要一个稳定、快速、可维护的技术底座。",
        solution: "我们建设和优化主题结构、核心页面模块、性能基础和技术 SEO，让运营团队后续能持续迭代。",
        capability: "适合新建站、主题改版、Liquid 模块、Custom Sections 和性能优化。",
      },
      {
        label: "02",
        title: "Conversion Optimization",
        problem: "你有流量，但用户没有被顺利带到信任、加购和下单。",
        solution: "我们重组首页、产品页、活动页、移动端体验和购买路径，让页面更清楚地服务成交。",
        capability: "适合广告落地页、PDP 优化、移动端体验、信任内容和活动页面优化。",
      },
      {
        label: "03",
        title: "Growth Analytics & Tracking",
        problem: "你不知道广告、页面和订单之间的真实关系。",
        solution: "我们配置 GA4、GTM、Meta Pixel 和 Google Ads Tracking，帮助团队看清转化路径和增长机会。",
        capability: "适合基础数据追踪、广告转化事件、归因问题排查和增长复盘体系。",
      },
    ],
  },
  en: {
    eyebrow: "SERVICE SYSTEM",
    title: "Services structured around Shopify growth, not development tasks.",
    description: "Three service pillars map to three core problems: technical foundation, conversion path, and growth tracking.",
    problemLabel: "PROBLEM",
    solutionLabel: "SOLUTION",
    capabilityLabel: "BEST FOR",
    cta: "View Service Details",
    services: [
      {
        label: "01",
        title: "Shopify Engineering",
        problem: "Your Shopify store needs a stable, fast, and maintainable technical foundation.",
        solution: "We build and improve theme structure, key page modules, performance foundations, and technical SEO so your team can keep iterating.",
        capability: "For new builds, theme redesigns, Liquid modules, custom sections, and performance improvements.",
      },
      {
        label: "02",
        title: "Conversion Optimization",
        problem: "You have traffic, but shoppers are not guided into trust, cart, and checkout.",
        solution: "We restructure homepage, PDPs, campaign pages, mobile UX, and buying paths so pages support revenue.",
        capability: "For ad landing pages, PDP optimization, mobile UX, trust content, and campaign pages.",
      },
      {
        label: "03",
        title: "Growth Analytics & Tracking",
        problem: "You cannot clearly connect ads, pages, and orders.",
        solution: "We set up GA4, GTM, Meta Pixel, and Google Ads tracking so teams can see conversion paths and growth opportunities.",
        capability: "For tracking setup, ad conversion events, attribution cleanup, and growth reporting foundations.",
      },
    ],
  },
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const consoleRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { language } = useLanguage()
  const text = copy[language]
  const activeService = text.services[activeIndex]
  const ActiveIcon = icons[activeIndex]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current?.querySelectorAll(".animate-line") || [],
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        consoleRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: consoleRef.current,
            start: "top 75%",
            end: "top 25%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden bg-background px-6 pb-[50px] pt-0 scroll-mt-24 md:px-10 md:pb-[100px] md:pt-0">
      <div className="pointer-events-none absolute -left-48 top-1/3 size-[32rem] rounded-full bg-primary/[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute -right-48 bottom-0 size-[30rem] rounded-full bg-primary/[0.055] blur-[150px]" />

      <div ref={titleRef} className="relative mx-auto mb-12 max-w-[1500px] text-center md:mb-16">
        <p className="animate-line mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          <span className="size-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)]" />
          {text.eyebrow}
        </p>
        <h2 className="animate-line text-[clamp(1.8rem,3vw,2.5rem)] font-semibold tracking-normal text-foreground leading-tight">
          {text.title}
        </h2>
        <p className="animate-line text-muted-foreground text-base md:text-lg leading-[1.6] mt-4 max-w-2xl mx-auto">
          {text.description}
        </p>
      </div>

      <div ref={consoleRef} className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/65 shadow-[0_42px_120px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(119,252,117,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(119,252,117,0.4)_1px,transparent_1px)] [background-size:36px_36px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px animate-shimmer bg-gradient-to-r from-transparent via-primary to-transparent bg-[length:200%_100%] shadow-[0_0_20px_rgba(119,252,117,0.75)] motion-reduce:animate-none" />

        <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-7">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35 md:text-[11px]">
            <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_rgba(119,252,117,0.8)] motion-reduce:animate-none" />
            Service command center
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/70 md:text-[11px]">System 0{activeIndex + 1} / 03</span>
        </div>

        <div className="relative border-b border-white/10 p-3 lg:hidden" role="tablist" aria-label={text.eyebrow}>
          <div className="grid grid-cols-3 gap-2">
            {text.services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="service-panel"
                onClick={() => setActiveIndex(index)}
                className={`rounded-xl border px-3 py-3 font-mono text-xs font-semibold tracking-[0.14em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${activeIndex === index ? "border-primary/45 bg-primary/10 text-primary shadow-[0_0_20px_rgba(119,252,117,0.12)]" : "border-white/10 bg-white/[0.025] text-white/35"}`}
              >
                {service.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative grid lg:min-h-[570px] lg:grid-cols-[0.42fr_1fr]">
          <div className="hidden border-r border-white/10 p-4 lg:block" role="tablist" aria-label={text.eyebrow}>
            <div className="space-y-3">
              {text.services.map((service, index) => {
                const Icon = icons[index]
                const isActive = activeIndex === index

                return (
                  <button
                    key={service.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="service-panel"
                    onClick={() => setActiveIndex(index)}
                    className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${isActive ? "border-primary/45 bg-primary/[0.08] shadow-[0_0_32px_rgba(119,252,117,0.1)]" : "border-white/10 bg-white/[0.025] hover:border-primary/20 hover:bg-white/[0.045]"}`}
                  >
                    {isActive && <span className="absolute inset-y-3 left-0 w-px bg-primary shadow-[0_0_12px_rgba(119,252,117,0.9)]" />}
                    <span className="flex items-center gap-4">
                      <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 ${isActive ? "border-primary/35 bg-primary/10 text-primary shadow-[0_0_18px_rgba(119,252,117,0.18)]" : "border-white/10 bg-black/25 text-white/40"}`}>
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className={`block font-mono text-[10px] tracking-[0.16em] ${isActive ? "text-primary" : "text-white/30"}`}>{service.label}</span>
                        <span className="mt-1 block text-sm font-semibold leading-snug text-white">{service.title}</span>
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div id="service-panel" role="tabpanel" tabIndex={0} aria-live="polite" className="relative p-5 focus-visible:outline-none md:p-8 lg:p-10">
            <div key={`${language}-${activeService.title}`} className="animate-in fade-in slide-in-from-right-3 duration-500">
              <div className="mb-8 flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Active service · {activeService.label}</p>
                  <h3 className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-white md:text-4xl">{activeService.title}</h3>
                </div>
                <span className="hidden size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_30px_rgba(119,252,117,0.15)] sm:flex">
                  <ActiveIcon className="size-6" />
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/75">{text.problemLabel}</p>
                  <p className="mt-4 text-sm leading-[1.75] text-white/75 md:text-base">{activeService.problem}</p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/75">{text.solutionLabel}</p>
                  <p className="mt-4 text-sm leading-[1.75] text-white/58 md:text-base">{activeService.solution}</p>
                </article>
              </div>

              <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/[0.045] p-5 md:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80">{text.capabilityLabel}</p>
                <p className="mt-3 text-sm leading-[1.75] text-white/58 md:text-base">{activeService.capability}</p>
              </div>

              <a href={serviceLinks[activeIndex]} className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_28px_rgba(119,252,117,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                {text.cta}
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
