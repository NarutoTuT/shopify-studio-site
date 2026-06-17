"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: "🏪",
    title: "定制商城搭建",
    description: "标准建站从 $2,500 USD 起。根据你的品牌调性和用户旅程定制 Shopify 独立站，不是套模板。Online Store 2.0 标准开发。"
  },
  {
    icon: "🎨",
    title: "主题深度定制",
    description: "Liquid 模板编辑、Section Schemas、自定义 CSS、性能调优。Shopify 主题按你的品牌走，不是你迁就模板。"
  },
  {
    icon: "💳",
    title: "支付网关集成",
    description: "Shopify Payments、Stripe、PayPal、Afterpay、POLi、Windcave……覆盖新西兰和澳洲主流支付方式。多币种支持。"
  },
  {
    icon: "🚚",
    title: "物流 API 配置",
    description: "Mainfreight、NZ Post、Aramex、CourierPost 实时运费计算，不再手动维护运费表，结账时自动算好。"
  },
  {
    icon: "📊",
    title: "ERP & 财务集成",
    description: "Xero 财务同步、库存管理、ERP 对接。订单→发票→库存全自动化，零手工录入。"
  },
  {
    icon: "💼",
    title: "CRM & B2B 批发",
    description: "CRM 集成、B2B 批发门户、客户分级定价、询价流程。我们也做 Shopify 自研 App 开发，现成方案搞不定的我们能写。"
  },
  {
    icon: "🔍",
    title: "Shopify SEO 优化",
    description: "Shopify 的 SEO 有自己的坑：URL 结构限制、Canonical 标签问题、App 冗余代码。我们专门针对 Shopify 做技术 SEO 和内容优化。已帮客户从零做到 4,700+ 关键词排名。"
  },
  {
    icon: "📈",
    title: "数据追踪 & 分析",
    description: "GA4 电商追踪、Facebook Pixel、转化追踪、自定义仪表盘。精确到 SKU 级别的渠道归因，知道每个渠道赚了多少。"
  }
]

const processSteps = [
  { step: "01", title: "诊断", text: "梳理产品、客群、竞品、支付物流和现有数据，先判断该做什么。" },
  { step: "02", title: "设计", text: "确认首页、商品页、购物路径和品牌视觉，减少后期返工。" },
  { step: "03", title: "开发", text: "按 Shopify Online Store 2.0 标准开发主题、区块和关键功能。" },
  { step: "04", title: "上线", text: "完成支付、物流、SEO 基础、数据追踪和运营培训后交付。" },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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
        <h2 className="animate-line text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-[-0.03em] text-foreground leading-tight">
          Shopify独立站开发 — 全栈建站能力
        </h2>
        <p className="animate-line text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto">
          {"从视觉设计到主题开发，从支付物流到数据分析，围绕“上线后能卖货”组织交付，而不是只交一个页面。"}
        </p>
      </div>

      <div ref={cardsRef} className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card group relative p-6 md:p-8 rounded-xl bg-card border border-border/50 hover:border-border transition-all duration-300 hover:bg-card/80"
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.02] to-transparent" />
            
            <span className="text-3xl mb-4 block">{service.icon}</span>
            <h3 className="text-foreground font-semibold text-lg tracking-[-0.02em] mb-3">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-[1500px] mx-auto mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-4">
        {processSteps.map((item) => (
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
