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
        name: "启动版",
        badge: "适合验证产品",
        price: "17888",
        outcome: "适合有产品、想把 Shopify 正式上线的团队。交付一个品牌基础完整、支付可用、商品可管理的独立站。",
        cta: "启动我的 Shopify 站",
        features: [
          "品牌视觉和 Shopify 主题基础适配",
          "首页、商品页、集合页等 6 个以内定制页面",
          "购物车、产品搜索、邮件订阅和社媒入口",
          "支付、域名、SSL 和 favicon 配置协助",
          "产品批量导入导出与基础 SEO 设置",
          "交付培训与 30 天上线支持",
        ],
      },
      {
        name: "增长版",
        badge: "推荐",
        price: "18888",
        outcome: "适合准备投放广告，或现有店铺转化不稳的团队。交付一套更适合流量成交和数据追踪的销售路径。",
        cta: "优化我的转化路径",
        features: [
          "包含启动版全部交付内容",
          "8 个以内定制页面与购买路径优化",
          "GA4、Meta Pixel、转化事件与渠道追踪",
          "邮件模板、弃购召回和营销组件配置",
          "支付网关、物流规则和多币种配置协助",
          "交付培训与 60 天增长支持",
        ],
      },
      {
        name: "旗舰版",
        badge: "适合复杂业务",
        price: "19888",
        outcome: "适合 SKU 多、批发、询价、ERP 或复杂履约业务。交付的不只是前台页面，而是能接进业务流程的 Shopify 系统。",
        cta: "规划复杂业务方案",
        features: [
          "包含增长版全部交付内容",
          "10 个以内定制页面与高级视觉设计",
          "B2B 批发、客户分级、询价或分销流程",
          "Xero、ERP、CRM 或物流 API 对接评估",
          "数据迁移、技术 SEO 与性能优化",
          "交付培训与 90 天运营支持",
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
        name: "Launch",
        badge: "Product validation",
        price: "17,888",
        outcome: "For teams with products ready to launch on Shopify. You get a store with brand basics, payments, and product management ready.",
        cta: "Launch my Shopify store",
        features: [
          "Basic brand and Shopify theme adaptation",
          "Up to 6 custom pages",
          "Cart, product search, email capture, and social entry points",
          "Payment, domain, SSL, and favicon setup support",
          "Product import/export and basic SEO setup",
          "Delivery training and 30 days of launch support",
        ],
      },
      {
        name: "Growth",
        badge: "Recommended",
        price: "18,888",
        outcome: "For teams preparing paid traffic, or stores with unstable conversion. You get a selling path built for traffic, conversion, and tracking.",
        cta: "Improve my conversion path",
        features: [
          "Everything in Launch",
          "Up to 8 custom pages and buying path optimization",
          "GA4, Meta Pixel, conversion events, and attribution",
          "Email templates, abandoned cart, and marketing components",
          "Payment gateway, logistics rules, and multi-currency setup support",
          "Delivery training and 60 days of growth support",
        ],
      },
      {
        name: "Flagship",
        badge: "Complex business",
        price: "19,888",
        outcome: "For larger SKU catalogs, wholesale, quote flows, ERP, or complex fulfillment. You get a Shopify system connected to your business flow.",
        cta: "Plan my complex build",
        features: [
          "Everything in Growth",
          "Up to 10 custom pages with advanced visual design",
          "B2B wholesale, customer tiers, quotes, or distributor flows",
          "Xero, ERP, CRM, or logistics API assessment",
          "Data migration, technical SEO, and performance optimization",
          "Delivery training and 90 days of operations support",
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
                  {index === 2 && <span className="text-muted-foreground text-xs mt-8 ml-0.5">{text.from}</span>}
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
                <a href="#contact" className={`inline-flex items-center justify-center w-full py-3.5 px-8 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] group ${
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

