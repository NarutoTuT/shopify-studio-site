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
  "https://images.unsplash.com/photo-1549007994-cb92ca817bc7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
]

const copy = {
  zh: {
    eyebrow: "CASE STUDIES",
    title: "不同行业，需要不同的成交结构",
    description: "我们不会把同一套模板套给所有品牌。真实项目会根据产品、客单价、市场和履约方式重新设计，并用转化和收入指标验证。",
    label: "行业路径",
    items: [
      {
        title: "食品礼盒品牌",
        description: "把节日礼盒页做成复购入口，突出送礼场景、套装组合和订阅购买。",
        metrics: ["转化提升 XX%", "复购收入 +XX%"],
      },
      {
        title: "户外与骑行装备",
        description: "用规格筛选、配件联动和清楚的运费规则，减少用户在商品页来回确认。",
        metrics: ["加购率 +XX%", "客服咨询 -XX%"],
      },
      {
        title: "美妆护肤出海",
        description: "把功效证明、成分解释和套装推荐放进购买路径，让社媒流量更快理解产品。",
        metrics: ["落地页转化 +XX%", "套装收入 +XX%"],
      },
      {
        title: "家居生活方式",
        description: "用空间场景、系列搭配和内容导购，把浏览行为引导到组合购买。",
        metrics: ["客单价 +XX%", "内容点击 +XX%"],
      },
      {
        title: "运动装备零售",
        description: "为多 SKU、尺码选择和会员折扣设计清楚的广告落地页，减少选择成本。",
        metrics: ["广告 ROAS +XX%", "下单转化 +XX%"],
      },
    ],
  },
  en: {
    eyebrow: "CASE STUDIES",
    title: "Different industries need different selling structures",
    description: "We do not apply one template to every brand. Each project is rebuilt around product type, AOV, market, and fulfillment, then judged by conversion and revenue signals.",
    label: "Industry path",
    items: [
      {
        title: "Food gift box brand",
        description: "Turn seasonal gift pages into repeat purchase entry points with gifting scenarios, bundles, and subscriptions.",
        metrics: ["Conversion +XX%", "Repeat revenue +XX%"],
      },
      {
        title: "Outdoor and cycling gear",
        description: "Use specs, accessory linking, and clear shipping rules to reduce back-and-forth before purchase.",
        metrics: ["Add-to-cart +XX%", "Support tickets -XX%"],
      },
      {
        title: "Beauty and skincare export",
        description: "Bring proof, ingredient education, and bundle recommendations into the buying path so social traffic understands faster.",
        metrics: ["Landing CVR +XX%", "Bundle revenue +XX%"],
      },
      {
        title: "Home lifestyle brand",
        description: "Use room scenes, collection pairing, and content-led shopping to guide browsing into bundled orders.",
        metrics: ["AOV +XX%", "Content clicks +XX%"],
      },
      {
        title: "Sports equipment retail",
        description: "Design clearer ad landing pages for large SKU sets, sizing, and member discounts to reduce decision friction.",
        metrics: ["Ad ROAS +XX%", "Checkout CVR +XX%"],
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

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 4000)

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
    <section id="work" ref={sectionRef} className="relative py-24 md:py-32 bg-background overflow-hidden min-h-[90vh] flex flex-col justify-center scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
        <div ref={titleRef} className="mb-12 md:mb-16 text-center">
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
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {text.items.map((item, index) => (
              <CarouselItem key={item.title} className="pl-4 md:pl-8 basis-[85%] md:basis-[75%] lg:basis-[65%] xl:basis-[55%]">
                <div className="group space-y-8">
                  <div className="relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-card shadow-2xl transition-all duration-700 hover:border-border/80">
                    <img
                      src={images[index]}
                      alt={item.title}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-4 bottom-4 z-20 md:inset-x-10 md:bottom-10">
                      <div className="rounded-2xl bg-background/70 backdrop-blur-xl border border-white/20 shadow-2xl text-foreground p-5 md:p-6">
                        <div className="mb-2 flex items-center gap-3">
                          <Sparkles className="size-5 text-primary" />
                          <span className="text-base md:text-lg font-semibold tracking-tight">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          {item.metrics.map((metric) => (
                            <span key={metric} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:block">
            <CarouselPrevious className="left-8 size-14 rounded-2xl bg-background/20 backdrop-blur-md border-white/10 hover:bg-background/40" />
            <CarouselNext className="right-8 size-14 rounded-2xl bg-background/20 backdrop-blur-md border-white/10 hover:bg-background/40" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

