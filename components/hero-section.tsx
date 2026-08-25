"use client"

import Image from "next/image"
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
  const sectionRef = useRef<HTMLElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const text = copy[language]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const finePointer = window.matchMedia("(pointer: fine)").matches
    const q = gsap.utils.selector(section)

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(q(".hero-animate"), { opacity: 1, y: 0, filter: "blur(0px)" })
        return
      }

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

      gsap.to(backgroundRef.current, {
        scale: 1.045,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      q(".hero-flow-line").forEach((line, index) => {
        gsap.to(line, {
          strokeDashoffset: index % 2 === 0 ? -420 : 420,
          duration: 18 + index * 4,
          repeat: -1,
          ease: "none",
        })
      })

      q(".hero-flow-particles").forEach((line, index) => {
        gsap.to(line, {
          strokeDashoffset: index % 2 === 0 ? -260 : 260,
          duration: 20 + index * 3,
          repeat: -1,
          ease: "none",
        })
      })

      gsap.to(q(".hero-flow-glow"), {
        opacity: 0.75,
        scale: 1.08,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }, section)

    let handlePointerMove: ((event: PointerEvent) => void) | undefined
    let handlePointerLeave: (() => void) | undefined

    if (!reducedMotion && finePointer && backgroundRef.current) {
      const moveX = gsap.quickTo(backgroundRef.current, "x", { duration: 1.2, ease: "power3.out" })
      const moveY = gsap.quickTo(backgroundRef.current, "y", { duration: 1.2, ease: "power3.out" })

      handlePointerMove = (event: PointerEvent) => {
        moveX((event.clientX / window.innerWidth - 0.5) * 16)
        moveY((event.clientY / window.innerHeight - 0.5) * 12)
      }

      handlePointerLeave = () => {
        moveX(0)
        moveY(0)
      }

      section.addEventListener("pointermove", handlePointerMove, { passive: true })
      section.addEventListener("pointerleave", handlePointerLeave)
    }

    return () => {
      if (handlePointerMove) section.removeEventListener("pointermove", handlePointerMove)
      if (handlePointerLeave) section.removeEventListener("pointerleave", handlePointerLeave)
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div ref={backgroundRef} className="pointer-events-none absolute -inset-[3%] z-0 transform-gpu will-change-transform">
        <Image
          src="/hero/whaleleap-growth-current-v1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-bottom"
          aria-hidden="true"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-black/35 via-transparent to-black/30" />
      <div className="hero-flow-glow pointer-events-none absolute inset-x-[18%] top-[16%] z-[2] h-[48%] rounded-full bg-primary/[0.055] opacity-45 blur-3xl" />

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] h-full w-full opacity-55"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-current-primary" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#77fc75" stopOpacity="0" />
            <stop offset="28%" stopColor="#77fc75" stopOpacity="0.38" />
            <stop offset="72%" stopColor="#dfffe0" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#77fc75" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-current-secondary" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#77fc75" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="hero-flow-line"
          d="M-120 690 C230 500 430 820 760 720 S1260 430 1720 610"
          fill="none"
          stroke="url(#hero-current-primary)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="140 38"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="hero-flow-particles"
          d="M-120 690 C230 500 430 820 760 720 S1260 430 1720 610"
          fill="none"
          stroke="#77fc75"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="1 42"
          opacity="0.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="hero-flow-line"
          d="M-100 825 C320 620 620 930 980 760 S1400 540 1700 700"
          fill="none"
          stroke="url(#hero-current-secondary)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="105 46"
          vectorEffect="non-scaling-stroke"
        />
        <g className="hidden md:block">
          <path
            className="hero-flow-line"
            d="M1160 -80 C1470 150 1210 360 1710 510"
            fill="none"
            stroke="url(#hero-current-primary)"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeDasharray="90 52"
            opacity="0.65"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="hero-flow-particles"
            d="M1160 -80 C1470 150 1210 360 1710 510"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="1 54"
            opacity="0.32"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.28)_58%,rgba(0,0,0,0.48)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[5] bg-black/15" />

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
