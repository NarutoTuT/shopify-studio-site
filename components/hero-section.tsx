"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const proofPoints = ["Shopify 2.0 主题开发", "支付与物流对接", "SEO 与转化优化"]

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(contentRef)

      gsap.fromTo(
        q(".hero-animate"),
        {
          opacity: 0,
          y: 30,
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.3,
        }
      )
    }, contentRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#101010] to-[#050505]" />
      <div className="absolute inset-x-0 top-24 mx-auto h-80 max-w-4xl rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

      <div ref={contentRef} className="relative z-10 pointer-events-none w-full max-w-[95%] lg:max-w-6xl px-6 md:px-10 pb-12 md:pb-16 pt-32 text-center mx-auto">
        <p className="hero-animate mb-5 inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          面向跨境卖家的 Shopify 独立站方案
        </p>

        <h1 className="hero-animate text-[clamp(2.5rem,6vw,6.8rem)] font-bold leading-[1.05] tracking-tight mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] animate-shimmer mx-auto">
          把 Shopify 做成真正能成交的独立站
        </h1>

        <p className="hero-animate text-foreground/90 text-[clamp(1.15rem,2.3vw,2rem)] font-semibold tracking-tight mb-6 md:mb-8">
          从品牌视觉、主题开发到支付物流和数据追踪，一次打通上线链路。
        </p>

        <p className="hero-animate text-muted-foreground text-[clamp(1rem,1.4vw,1.25rem)] font-normal leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
          适合已经有产品、准备做跨境销售，或者现有 Shopify 店铺转化率不理想的团队。交付重点不是“好看模板”，而是可运营、可追踪、可持续优化的销售系统。
        </p>

        <div className="hero-animate flex flex-wrap gap-5 font-medium justify-center">
          <a href="#contact" className="pointer-events-auto bg-primary text-primary-foreground px-8 py-4 md:px-10 md:py-5 text-base rounded-full cursor-pointer hover:brightness-110 transition-all duration-300 active:scale-[0.97] shadow-[0_0_20px_rgba(119,252,117,0.3)]">
            预约诊断
          </a>
          <a href="#work" className="pointer-events-auto border border-foreground/20 text-foreground px-8 py-4 md:px-10 md:py-5 text-base rounded-full cursor-pointer hover:bg-foreground/5 transition-all duration-300 active:scale-[0.97] backdrop-blur-sm">
            查看方案示例
          </a>
        </div>

        <div className="hero-animate mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground/75">
          {proofPoints.map((point) => (
            <span key={point} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
