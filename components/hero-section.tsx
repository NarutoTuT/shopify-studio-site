"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

import { useLanguage } from "@/components/language-provider"

const copy = {
  zh: {
    proofPoints: ["Shopify Theme Development", "Conversion Optimization", "Tracking Setup"],
    eyebrow: "面向海外华人跨境品牌",
    title: "Shopify 增长工程工作室",
    subtitle: "帮助海外华人跨境品牌打造更快、更稳定、更高转化的 Shopify 独立站。",
    description: "从 Shopify 技术建设、主题开发，到转化优化和数据追踪，帮助品牌把流量真正转化为订单。",
    primaryCta: "免费 Shopify 店铺诊断",
    secondaryCta: "查看服务体系",
  },
  en: {
    proofPoints: ["Shopify Theme Development", "Conversion Optimization", "Tracking Setup"],
    eyebrow: "For Chinese-founded global ecommerce brands",
    title: "Shopify Growth Engineering Studio",
    subtitle: "Helping global ecommerce brands build faster, more stable, and higher-converting Shopify stores.",
    description: "From Shopify engineering and theme development to conversion optimization and tracking setup, WhaleLeap helps brands turn traffic into orders.",
    primaryCta: "Free Shopify Store Review",
    secondaryCta: "View Service System",
  },
}

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const text = copy[language]

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
          {text.eyebrow}
        </p>

        <h1 className="hero-animate text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-normal mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] animate-shimmer mx-auto">
          {text.title}
        </h1>

        <p className="hero-animate text-foreground/90 text-[clamp(1rem,1.8vw,1.35rem)] font-semibold tracking-normal leading-[1.5] mb-6 md:mb-8">
          {text.subtitle}
        </p>

        <p className="hero-animate text-muted-foreground text-base md:text-lg font-normal leading-[1.6] mb-8 md:mb-12 max-w-3xl mx-auto">
          {text.description}
        </p>

        <div className="hero-animate flex flex-wrap gap-5 font-medium justify-center">
          <a href="/diagnosis" className="pointer-events-auto bg-primary text-primary-foreground px-8 py-4 md:px-10 md:py-5 text-base rounded-full cursor-pointer hover:brightness-110 transition-all duration-300 active:scale-[0.97] shadow-[0_0_20px_rgba(119,252,117,0.3)]">
            {text.primaryCta}
          </a>
          <a href="#services" className="pointer-events-auto border border-foreground/20 text-foreground px-8 py-4 md:px-10 md:py-5 text-base rounded-full cursor-pointer hover:bg-foreground/5 transition-all duration-300 active:scale-[0.97] backdrop-blur-sm">
            {text.secondaryCta}
          </a>
        </div>

        <div className="hero-animate mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground/75">
          {text.proofPoints.map((point) => (
            <span key={point} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
