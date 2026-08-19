"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BarChart3, Code2, ShoppingCart } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

gsap.registerPlugin(ScrollTrigger)

const icons = [Code2, ShoppingCart, BarChart3]

const copy = {
  zh: {
    eyebrow: "SERVICE SYSTEM",
    title: "围绕 Shopify 增长，而不是围绕开发任务拆服务。",
    description: "三个服务方向对应三个核心问题：技术底座是否稳定、购买路径是否能转化、数据是否能指导下一步。",
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
  const cardsRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const text = copy[language]

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
        cardsRef.current?.querySelectorAll(".service-card") || [],
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
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
    <section id="services" ref={sectionRef} className="relative py-24 md:py-32 px-6 md:px-10 bg-background scroll-mt-24">
      <div ref={titleRef} className="max-w-[1500px] mx-auto mb-16 md:mb-20 text-center">
        <p className="animate-line mb-4 text-sm font-semibold tracking-[0.2em] text-primary uppercase">{text.eyebrow}</p>
        <h2 className="animate-line text-[clamp(1.8rem,3vw,2.5rem)] font-semibold tracking-normal text-foreground leading-tight">
          {text.title}
        </h2>
        <p className="animate-line text-muted-foreground text-base md:text-lg leading-[1.6] mt-4 max-w-2xl mx-auto">
          {text.description}
        </p>
      </div>

      <div ref={cardsRef} className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        {text.services.map((service, index) => {
          const Icon = icons[index]

          return (
            <div
              key={service.title}
              className="service-card group relative p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 hover:bg-card/80"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.02] to-transparent" />
              
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{service.label}</span>
                <span className="flex size-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-5" />
                </span>
              </div>
              <h3 className="text-foreground font-semibold text-lg tracking-normal leading-[1.4] mb-3">
                {service.title}
              </h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p className="text-foreground/90">{service.problem}</p>
                <p className="text-muted-foreground">{service.solution}</p>
                <p className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-muted-foreground/85">{service.capability}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
