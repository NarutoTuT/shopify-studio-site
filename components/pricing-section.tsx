"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

gsap.registerPlugin(ScrollTrigger)

const planStyles = [
  { badgeColor: "bg-[#4CAF50]", priceColor: "text-[#4CAF50]" },
  { badgeColor: "bg-[#2196F3]", priceColor: "text-[#2196F3]", popular: true },
  { badgeColor: "bg-[#FF9800]", priceColor: "text-[#FF9800]" },
]

const copy = {
  zh: {
    eyebrow: "PRICING",
    title: "按你现在的阶段，选择合适的交付深度",
    intro: "价格不是按页面数量硬凑，而是按你要解决的销售问题来拆分。",
    note: "以下为建站服务费，不包含 Shopify 官方订阅、第三方 App、域名和支付通道可能产生的费用。",
    from: "起",
    arrow: "›",
    plans: [
      {
        name: "文档模板方案",
        badge: "¥20,000 起",
        price: "20,000",
        outcome: "适合已有参考网站或清楚模块需求的团队。按模块组合开发，先把 Shopify 店铺稳定上线。",
        cta: "选择模块建站",
        features: [
          "参考 1-3 个优秀网站拆解模块",
          "首页、商品页、集合页、关于我们等模块按需选择",
          "基础品牌视觉适配、移动端自适应和基础 SEO",
          "可追加 GA4/GTM、动画、博客和新增 SKU",
          "项目周期约 2-4 周，最长不超过 1.5 个月",
          "上线后 2 个月免费技术支持",
        ],
      },
      {
        name: "设计图定制方案",
        badge: "推荐",
        price: "35,000",
        outcome: "适合需要完整品牌表达和更强转化路径的团队。先做 Figma UI/UX，再按确认设计稿开发 Shopify。",
        cta: "定制我的设计稿",
        features: [
          "首页、产品详情、关于我们、产品系列共 4 个页面",
          "Desktop + Mobile 共 8 张 Figma 设计图",
          "基础设计系统：品牌色、排版规范、间距体系",
          "Liquid、HTML/CSS/JS、GSAP 或 Framer Motion 实现",
          "GA4 电商追踪、GTM 容器和 Product Schema",
          "项目周期约 3-6 周，最长不超过 2 个月",
          "上线后 2 个月免费技术支持",
        ],
      },
      {
        name: "复杂业务定制",
        badge: "按需评估",
        price: "50,000",
        outcome: "适合 SKU 多、批发、询价、ERP、CRM 或复杂履约业务。在定制设计基础上，把网站接进真实业务流程。",
        cta: "规划复杂业务方案",
        features: [
          "包含设计图定制方案的设计与开发基础",
          "B2B 批发、客户分级、询价或分销流程",
          "Xero、ERP、CRM 或物流 API 对接评估",
          "复杂物流、支付、多币种或数据迁移方案",
          "技术 SEO、性能优化和上线验收标准",
          "按业务范围单独确认报价、排期和售后周期，最低 3 个月",
        ],
      },
    ],
  },
  en: {
    eyebrow: "PRICING",
    title: "Choose the right delivery depth for your current stage",
    intro: "Pricing is not padded by page count. It is structured around the sales problem you need to solve.",
    note: "Service fees below do not include Shopify subscriptions, third-party apps, domains, or payment provider fees.",
    from: "from",
    arrow: "›",
    plans: [
      {
        name: "Module-Based Build",
        badge: "from ¥20,000",
        price: "20,000",
        outcome: "For teams with reference sites or clear module needs. We combine selected modules and launch a stable Shopify store.",
        cta: "Choose module build",
        features: [
          "Use 1-3 reference sites to define modules",
          "Homepage, product page, collection, about, and help modules as needed",
          "Basic brand adaptation, responsive layout, and basic SEO",
          "Optional GA4/GTM, animation, blog, and extra SKU work",
          "Typical timeline: 2-4 weeks, capped at 1.5 months",
          "2 months of post-launch technical support",
        ],
      },
      {
        name: "Custom Design Build",
        badge: "Recommended",
        price: "35,000",
        outcome: "For teams that need stronger brand expression and conversion structure. We design in Figma first, then build the approved Shopify site.",
        cta: "Create my Figma design",
        features: [
          "Homepage, product page, about page, and collection page",
          "8 Figma screens: desktop and mobile for each page",
          "Basic design system: brand color, typography, and spacing",
          "Liquid, HTML/CSS/JS, GSAP or Framer Motion implementation",
          "GA4 ecommerce tracking, GTM container, and Product Schema",
          "Typical timeline: 3-6 weeks, capped at 2 months",
          "2 months of post-launch technical support",
        ],
      },
      {
        name: "Complex Business",
        badge: "Scoped quote",
        price: "50,000",
        outcome: "For larger SKU catalogs, wholesale, quote flows, ERP, CRM, or complex fulfillment. We connect the site to the real business workflow.",
        cta: "Plan my complex build",
        features: [
          "Built on the custom design and development foundation",
          "B2B wholesale, customer tiers, quote, or distributor flows",
          "Xero, ERP, CRM, or logistics API assessment",
          "Complex logistics, payments, multi-currency, or data migration",
          "Technical SEO, performance optimization, and launch acceptance checks",
          "Final quote, timeline, and support period confirmed by scope, minimum 3 months",
        ],
      },
    ],
  },
}

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const text = copy[language]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current?.children || [],
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        cardsRef.current?.children || [],
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="pricing" ref={sectionRef} className="relative py-20 md:py-24 px-6 md:px-10 bg-background min-h-screen flex flex-col justify-center overflow-hidden scroll-mt-24">
      <div ref={headerRef} className="max-w-[1500px] mx-auto mb-10 md:mb-14 text-center space-y-3">
        <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">{text.eyebrow}</span>
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-normal text-foreground leading-tight">
          {text.title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-muted-foreground text-sm md:text-base font-medium">
            {text.intro}
          </p>
          <p className="text-muted-foreground/60 text-sm md:text-base">
            {text.note}
          </p>
        </div>
      </div>

      <div 
        ref={cardsRef} 
        className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-stretch w-full"
      >
        {text.plans.map((plan, index) => {
          const styles = planStyles[index]

          return (
            <div
              key={plan.name}
              className={`relative flex flex-col p-6 md:p-8 transition-all duration-500 border ${
                styles.popular 
                  ? "bg-white/10 border-primary/30 shadow-[0_0_80px_rgba(var(--primary),0.1)] md:scale-[1.05] z-10 rounded-3xl" 
                  : "bg-white/[0.03] border-white/10 hover:border-white/20 rounded-2xl"
              }`}
            >
              <div className="flex justify-center mb-5">
                <span className={`px-4 py-1 rounded-full text-[10px] font-bold text-white shadow-lg ${styles.badgeColor} uppercase tracking-widest`}>
                  {plan.badge}
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 uppercase tracking-tight">{plan.name}</h3>
                <p className="mb-5 min-h-[92px] text-sm leading-relaxed text-muted-foreground">{plan.outcome}</p>
                <div className="flex items-start justify-center group cursor-default">
                  <span className={`text-xl md:text-2xl font-bold mt-1 mr-0.5 transition-transform duration-300 group-hover:-translate-y-1 ${styles.priceColor}`}>¥</span>
                  <span className={`text-5xl md:text-6xl font-bold tracking-tighter transition-all duration-300 ${styles.priceColor}`}>{plan.price}</span>
                  {index !== 1 && <span className="text-muted-foreground text-xs mt-8 ml-0.5">{text.from}</span>}
                </div>
              </div>

              <div className="flex-grow space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-muted-foreground/85 text-sm leading-relaxed transition-colors duration-200 hover:text-primary cursor-default">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-auto">
                <a href="/diagnosis" className={`inline-flex items-center justify-center w-full py-3.5 px-8 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] group ${
                  styles.popular ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20" : "bg-white/10 text-foreground hover:bg-white/20"
                }`}>
                  {plan.cta}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">{text.arrow}</span>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
