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

gsap.registerPlugin(ScrollTrigger)

const showcaseItems = [
  {
    title: "食品礼盒品牌",
    description: "强调送礼场景、套装组合、节日活动和复购订阅。",
    image: "https://images.unsplash.com/photo-1549007994-cb92ca817bc7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "户外与骑行装备",
    description: "突出规格筛选、配件联动、运费规则和售后说明。",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "美妆护肤出海",
    description: "围绕功效证明、成分解释、套装推荐和社媒转化。",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "家居生活方式",
    description: "用空间氛围、系列搭配、内容导购提升客单价。",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "运动装备零售",
    description: "适合多 SKU、尺码选择、会员折扣和广告落地页。",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
  }
]

export function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const [api, setApi] = useState<CarouselApi>()

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
          <p className="animate-line mb-4 text-sm font-semibold tracking-[0.2em] text-primary uppercase">行业方案示例</p>
          <h2 className="animate-line text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-tight text-foreground leading-[1.1]">
            不同行业，需要不同的卖货结构
          </h2>
          <p className="animate-line text-muted-foreground text-xl md:text-2xl mt-6 max-w-3xl leading-relaxed mx-auto">
            下面是适合 Shopify 搭建的典型方案方向。真实项目会根据产品、客单价、市场和履约方式重新设计。
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
            {showcaseItems.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-8 basis-[85%] md:basis-[75%] lg:basis-[65%] xl:basis-[55%]">
                <div className="group space-y-8">
                  <div className="relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-card shadow-2xl transition-all duration-700 hover:border-border/80">
                    <img
                      src={item.image}
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
