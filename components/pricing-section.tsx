"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const pricingPlans = [
  {
    name: "启动版",
    badge: "验证产品首选",
    badgeColor: "bg-[#4CAF50]",
    price: "17888",
    priceColor: "text-[#4CAF50]",
    features: [
      "Shopify 主题搭建与基础品牌适配",
      "首页、商品页、集合页等 6 个以内定制页面",
      "购物车、产品搜索、邮件订阅和社媒分享",
      "支付、域名、SSL、favicon 基础配置协助",
      "产品批量导入导出与基础 SEO 设置",
      "交付培训与 30 天售后支持",
    ],
  },
  {
    name: "增长版",
    badge: "投放转化首选",
    badgeColor: "bg-[#2196F3]",
    price: "18888",
    priceColor: "text-[#2196F3]",
    popular: true,
    features: [
      "包含启动版全部内容",
      "8 个以内定制页面与转化路径优化",
      "GA4、Meta Pixel、转化事件与渠道追踪",
      "邮件模板、弃购召回和营销组件配置",
      "支付网关、物流规则和多币种配置协助",
      "交付培训与 60 天售后支持",
    ],
  },
  {
    name: "旗舰版",
    badge: "复杂业务首选",
    badgeColor: "bg-[#FF9800]",
    price: "19888",
    priceColor: "text-[#FF9800]",
    features: [
      "包含增长版全部内容",
      "10 个以内定制页面与高级视觉设计",
      "B2B 批发、客户分级、询价或分销流程",
      "Xero、ERP、CRM 或物流 API 对接评估",
      "数据迁移、技术 SEO 与性能优化",
      "交付培训与 90 天售后支持",
    ],
  },
]

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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
        <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">套餐价格</span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-foreground leading-tight">
          建站费用
        </h2>
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-muted-foreground text-sm md:text-base font-medium">
            我们的建站费用是一次性的，无需续费。
          </p>
          <p className="text-muted-foreground/60 text-sm md:text-base">
            以下为建站服务费，不包含 Shopify 官方订阅、第三方 App、域名和支付通道可能产生的费用。
          </p>
        </div>
      </div>

      <div 
        ref={cardsRef} 
        className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-stretch w-full"
      >
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col p-6 md:p-8 transition-all duration-500 border ${
              plan.popular 
                ? "bg-white/10 border-primary/30 shadow-[0_0_80px_rgba(var(--primary),0.1)] md:scale-[1.05] z-10 rounded-3xl" 
                : "bg-white/[0.03] border-white/10 hover:border-white/20 rounded-2xl"
            }`}
          >
            <div className="flex justify-center mb-5">
              <span className={`px-4 py-1 rounded-full text-[10px] font-bold text-white shadow-lg ${plan.badgeColor} uppercase tracking-widest`}>
                {plan.badge}
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 uppercase tracking-tight">{plan.name}</h3>
              <div className="flex items-start justify-center group cursor-default">
                <span className={`text-xl md:text-2xl font-bold mt-1 mr-0.5 transition-transform duration-300 group-hover:-translate-y-1 ${plan.priceColor}`}>¥</span>
                <span className={`text-5xl md:text-6xl font-bold tracking-tighter transition-all duration-300 ${plan.priceColor}`}>{plan.price}</span>
                {index === 2 && <span className="text-muted-foreground text-xs mt-8 ml-0.5">起</span>}
              </div>
            </div>

            <div className="flex-grow space-y-3 mb-10">
              {plan.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex gap-3 text-muted-foreground/85 text-sm leading-relaxed transition-colors duration-200 hover:text-primary cursor-default">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-auto">
              <a href="#contact" className={`inline-flex items-center justify-center w-full py-3.5 px-8 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] group ${
                plan.popular ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20" : "bg-white/10 text-foreground hover:bg-white/20"
              }`}>
                立即沟通
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
