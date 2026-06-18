"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BarChart3, BriefcaseBusiness, CreditCard, LineChart, Palette, Search, Store, Truck } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

gsap.registerPlugin(ScrollTrigger)

const icons = [Store, Palette, CreditCard, Truck, BarChart3, BriefcaseBusiness, Search, LineChart]

const copy = {
  zh: {
    title: "Shopify 独立站开发，围绕成交交付",
    description: "我们把页面、支付、物流、SEO 和数据追踪放在同一条销售路径里做，目标是让店铺上线后能卖、能看数据、能继续优化。",
    services: [
      {
        title: "上线一个能承接销售的 Shopify 店铺",
        description: "根据你的产品、客群和购买路径搭建独立站。交付的不是套模板页面，而是能跑广告、能收单、能继续运营的基础盘。",
      },
      {
        title: "让主题按你的品牌和转化路径走",
        description: "用 Liquid、Section Schemas 和定制样式重做关键区块。用户看到的是清楚的品牌表达，不是被模板限制的拼装感。",
      },
      {
        title: "让海外客户顺利完成付款",
        description: "配置 Shopify Payments、Stripe、PayPal、Afterpay、POLi、Windcave 等常用支付方式，减少结账页掉单。",
      },
      {
        title: "让运费在结账页自动算清",
        description: "对接 Mainfreight、NZ Post、Aramex、CourierPost 等物流规则，客户下单前就能看到清楚的配送成本。",
      },
      {
        title: "把订单接进你的财务和库存流程",
        description: "连接 Xero、库存管理或 ERP，让订单、发票和库存同步起来，减少人工录入和后期对账。",
      },
      {
        title: "支持批发、询价和客户分级销售",
        description: "为 B2B 门户、客户分级定价、询价流程和 CRM 对接设计路径。现成 App 不够用时，再做定制开发。",
      },
      {
        title: "让搜索流量更容易找到你的商品",
        description: "处理 URL、Canonical、冗余代码和内容结构这些 Shopify 常见问题。我们曾帮客户从零做到 4,700+ 关键词排名。",
      },
      {
        title: "知道每一笔订单从哪里来",
        description: "配置 GA4 电商追踪、Meta Pixel、转化事件和渠道归因。你能看到广告、内容和 SKU 到底带来了多少收入。",
      },
    ],
    processSteps: [
      { step: "01", title: "诊断", text: "先看产品、客群、竞品、支付物流和现有数据，判断真正影响成交的环节。" },
      { step: "02", title: "设计", text: "确认首页、商品页、购物路径和品牌视觉，让页面为购买决策服务。" },
      { step: "03", title: "开发", text: "按 Shopify Online Store 2.0 开发主题、区块和关键功能，方便后续运营维护。" },
      { step: "04", title: "上线", text: "完成支付、物流、SEO 基础、数据追踪和培训后交付，让团队能接着跑。" },
    ],
  },
  en: {
    title: "Shopify development built around conversion",
    description: "We connect pages, payments, logistics, SEO, and analytics into one selling path so your store can launch, sell, measure, and keep improving.",
    services: [
      {
        title: "Launch a Shopify store ready to sell",
        description: "We build around your product, audience, and buying path. The result is not a template page, but a store that can run ads, take orders, and keep operating.",
      },
      {
        title: "Make the theme follow your brand and funnel",
        description: "We rebuild key sections with Liquid, Section Schemas, and custom styling so the store feels like your brand, not a forced template.",
      },
      {
        title: "Help overseas customers complete payment",
        description: "We configure Shopify Payments, Stripe, PayPal, Afterpay, POLi, Windcave, and other common payment options to reduce checkout drop-off.",
      },
      {
        title: "Calculate shipping clearly at checkout",
        description: "We connect logistics rules such as Mainfreight, NZ Post, Aramex, and CourierPost so customers see shipping costs before they order.",
      },
      {
        title: "Connect orders to finance and inventory",
        description: "We connect Xero, inventory tools, or ERP workflows so orders, invoices, and stock updates move with less manual work.",
      },
      {
        title: "Support wholesale, quotes, and customer tiers",
        description: "We design paths for B2B portals, tiered pricing, quote flows, and CRM integration. When apps fall short, we build custom logic.",
      },
      {
        title: "Make search traffic find your products",
        description: "We fix common Shopify SEO issues around URLs, canonical tags, app bloat, and content structure. One client grew from zero to 4,700+ keyword rankings.",
      },
      {
        title: "Know where every order comes from",
        description: "We configure GA4 ecommerce tracking, Meta Pixel, conversion events, and attribution so you can see what revenue ads, content, and SKUs create.",
      },
    ],
    processSteps: [
      { step: "01", title: "Diagnose", text: "We review product, audience, competitors, payments, logistics, and existing data to find the real conversion blockers." },
      { step: "02", title: "Design", text: "We define homepage, product pages, buying paths, and brand visuals so every page supports a buying decision." },
      { step: "03", title: "Build", text: "We develop themes, sections, and key functions with Shopify Online Store 2.0 standards for easier operations." },
      { step: "04", title: "Launch", text: "We deliver after payments, logistics, SEO basics, tracking, and training are ready, so your team can keep running." },
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
        <h2 className="animate-line text-[clamp(1.8rem,3vw,2.5rem)] font-semibold tracking-normal text-foreground leading-tight">
          {text.title}
        </h2>
        <p className="animate-line text-muted-foreground text-base md:text-lg leading-[1.6] mt-4 max-w-2xl mx-auto">
          {text.description}
        </p>
      </div>

      <div ref={cardsRef} className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {text.services.map((service, index) => {
          const Icon = icons[index]

          return (
            <div
              key={service.title}
              className="service-card group relative p-6 md:p-8 rounded-xl bg-card border border-border/50 hover:border-border transition-all duration-300 hover:bg-card/80"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.02] to-transparent" />
              
              <span className="mb-5 flex size-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="size-5" />
              </span>
              <h3 className="text-foreground font-semibold text-lg tracking-normal leading-[1.4] mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          )
        })}
      </div>

      <div className="max-w-[1500px] mx-auto mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-4">
        {text.processSteps.map((item) => (
          <div key={item.step} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-xs text-primary">{item.step}</span>
              <span className="h-px w-10 bg-primary/30" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

