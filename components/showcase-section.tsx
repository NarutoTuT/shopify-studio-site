"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sparkles } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useLanguage } from "@/components/language-provider"

gsap.registerPlugin(ScrollTrigger)

const images = [
  "/case-studies/food-gift-real-v2.png",
  "/case-studies/outdoor-cycling-real-v2.png",
  "/case-studies/beauty-skincare-real-v2.png",
  "/case-studies/home-lifestyle-real-v2.png",
  "/case-studies/sports-retail-real-v2.png",
]

const copy = {
  zh: {
    eyebrow: "CASE STUDIES",
    title: "案例不只展示视觉，更要展示增长问题如何被解决。",
    description: "在没有可公开真实数据时，我们不使用虚假指标。案例重点展示 Challenge、Approach、Implementation 和 Outcome。",
    label: "行业路径",
    items: [
      {
        title: "食品礼盒品牌",
        challenge: "节日流量进入后，需要快速理解礼盒场景、套装价值和配送时效。",
        approach: "把送礼场景、套装组合和订阅复购入口放进同一条购买路径。",
        implementation: "活动页结构、商品页信任内容、套装购买路径",
        outcome: "更清楚的节日销售路径，便于后续围绕复购和套装继续优化。",
      },
      {
        title: "户外与骑行装备",
        challenge: "高客单产品需要解释规格、配件、物流和售后，用户购买决策成本高。",
        approach: "把规格说明、配件联动和配送规则前置到商品页关键决策区。",
        implementation: "PDP 架构、规格模块、配送说明、移动端内容层级",
        outcome: "减少商品页反复确认成本，为广告落地页提供更清晰的购买路径。",
      },
      {
        title: "美妆护肤出海",
        challenge: "社媒流量需要快速理解功效、成分、适用人群和套装逻辑。",
        approach: "用功效证明、成分解释和套装推荐重新组织页面阅读顺序。",
        implementation: "落地页优化、PDP proof blocks、基础追踪检查",
        outcome: "让用户从理解产品到进入购物车的路径更连贯。",
      },
      {
        title: "家居生活方式",
        challenge: "用户浏览空间内容后，没有自然进入系列搭配和组合购买。",
        approach: "用空间场景、系列搭配和内容导购连接浏览行为与商品选择。",
        implementation: "集合页体验、内容导购路径、交叉推荐模块",
        outcome: "让内容不只停留在展示，而是进入可购买的商品路径。",
      },
      {
        title: "运动装备零售",
        challenge: "多 SKU、尺码、会员折扣和广告落地页信息分散，选择成本高。",
        approach: "重新整理广告落地页和 PDP 层级，让用户更快判断适合自己的产品。",
        implementation: "广告落地页结构、移动端 UX、优惠信息表达",
        outcome: "降低广告流量进入后的选择阻力，为后续转化测试建立基础。",
      },
    ],
  },
  en: {
    eyebrow: "CASE STUDIES",
    title: "Case studies should show how growth problems are solved, not only visual output.",
    description: "When real public data is unavailable, we do not use fake metrics. Each case focuses on challenge, approach, implementation, and outcome.",
    label: "Industry path",
    items: [
      {
        title: "Food gift box brand",
        challenge: "Seasonal traffic needed to understand gifting context, bundle value, and delivery timing quickly.",
        approach: "Connect gifting scenarios, bundle selection, and subscription entry points in one buying path.",
        implementation: "Campaign page structure, PDP trust content, bundle purchase path",
        outcome: "A clearer seasonal sales path that can support future repeat-purchase and bundle optimization.",
      },
      {
        title: "Outdoor and cycling gear",
        challenge: "High-ticket products required specs, accessories, logistics, and support clarity before purchase.",
        approach: "Bring specs, accessory logic, and shipping rules closer to the main product decision area.",
        implementation: "PDP architecture, spec modules, shipping clarity, mobile hierarchy",
        outcome: "Less product-page decision friction and a clearer path for paid traffic.",
      },
      {
        title: "Beauty and skincare export",
        challenge: "Social traffic needed faster education around benefits, ingredients, fit, and bundle logic.",
        approach: "Rebuild the page rhythm around proof, ingredient explanation, and bundle recommendations.",
        implementation: "Landing page improvement, PDP proof blocks, basic tracking review",
        outcome: "A more connected path from product education to cart entry.",
      },
      {
        title: "Home lifestyle brand",
        challenge: "Shoppers browsed lifestyle content but did not naturally move into collections and bundles.",
        approach: "Connect room scenes, collection pairing, and content-led shopping with product selection.",
        implementation: "Collection UX, content-led shopping path, cross-sell modules",
        outcome: "Content becomes part of a shoppable path instead of only a brand display.",
      },
      {
        title: "Sports equipment retail",
        challenge: "Large SKU sets, sizing, member discounts, and ad landing pages created choice friction.",
        approach: "Restructure landing page and PDP hierarchy so shoppers can identify the right product faster.",
        implementation: "Ad landing page structure, mobile UX, offer clarity",
        outcome: "Lower choice friction after paid clicks and a better base for conversion testing.",
      },
    ],
  },
}

export function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const [api, setApi] = useState<CarouselApi>()
  const { language } = useLanguage()
  const text = copy[language]

  useEffect(() => {
    if (!api) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 7000)

    return () => clearInterval(interval)
  }, [api])

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
        ".showcase-carousel",
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
            trigger: ".showcase-carousel",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="relative flex scroll-mt-24 flex-col justify-center overflow-hidden bg-background py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
        <div ref={titleRef} className="mb-8 text-center md:mb-16">
          <p className="animate-line mb-4 text-sm font-semibold tracking-[0.2em] text-primary uppercase">{text.eyebrow}</p>
          <h2 className="animate-line text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-normal text-foreground leading-[1.12]">
            {text.title}
          </h2>
          <p className="animate-line text-muted-foreground text-base md:text-lg mt-6 max-w-3xl leading-[1.6] mx-auto">
            {text.description}
          </p>
        </div>
      </div>

      <div className="showcase-carousel w-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          aria-label={language === "zh" ? "案例轮播" : "Case studies carousel"}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-8">
            {text.items.map((item, index) => (
              <CarouselItem
                key={item.title}
                aria-label={`${index + 1} / ${text.items.length}`}
                className="basis-[92%] pl-3 sm:basis-[85%] md:basis-[75%] md:pl-8 lg:basis-[65%] xl:basis-[55%]"
              >
                <div className="group">
                  <article className="relative overflow-hidden rounded-3xl border border-border/40 bg-card shadow-2xl transition-all duration-700 hover:border-border/80 md:rounded-[2.5rem]">
                    <div className="overflow-hidden">
                      <img
                        src={images[index]}
                        alt={item.title}
                        className="aspect-[16/9] w-full object-cover transition-transform duration-1000 ease-out md:group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative z-20 mx-3 -mt-12 mb-3 md:mx-8 md:-mt-36 md:mb-5">
                      <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-white/[0.16] bg-black/25 p-4 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.20),inset_0_-1px_0_rgba(255,255,255,0.04),0_22px_60px_rgba(0,0,0,0.34)] backdrop-blur-[24px] backdrop-saturate-150 md:p-5">
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.025)_42%,rgba(255,255,255,0.06)_100%)]" />
                        <div aria-hidden="true" className="pointer-events-none absolute -top-20 left-[8%] h-36 w-1/2 rounded-full bg-white/[0.07] blur-3xl" />

                        <div className="relative z-10">
                          <div className="mb-2 flex items-center gap-3">
                            <Sparkles className="size-4 shrink-0 text-primary md:size-5" />
                            <h3 className="text-sm font-semibold tracking-tight md:text-lg">
                              {item.title}
                            </h3>
                          </div>
                          <div className="mt-3 grid grid-cols-2 gap-2 md:mt-3 md:gap-0">
                            {[
                              ["Challenge", item.challenge],
                              ["Approach", item.approach],
                              ["Implementation", item.implementation],
                              ["Outcome", item.outcome],
                            ].map(([label, value]) => (
                              <div key={label} className="rounded-xl border border-white/10 bg-black/10 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm md:rounded-none md:border-0 md:bg-transparent md:px-4 md:py-2 md:shadow-none md:backdrop-blur-none md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-white/10 md:[&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-white/10">
                                <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-primary md:text-[10px] md:tracking-[0.18em]">{label}</div>
                                <p className="text-[11px] leading-[1.5] text-muted-foreground md:text-[13px] md:leading-[1.5]">{value}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:block">
            <CarouselPrevious className="top-[32%] left-8 size-14 rounded-2xl border-white/10 bg-background/20 backdrop-blur-md hover:bg-background/40" />
            <CarouselNext className="top-[32%] right-8 size-14 rounded-2xl border-white/10 bg-background/20 backdrop-blur-md hover:bg-background/40" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
