"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, Sparkles } from "lucide-react"
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
  "/case-studies/silkgear-case-generated-v2.webp",
  "/case-studies/sculpfun-case-generated-v2.webp",
  "/case-studies/food-gift-real-v2.webp",
  "/case-studies/outdoor-cycling-real-v2.webp",
  "/case-studies/beauty-skincare-real-v2.webp",
  "/case-studies/home-lifestyle-real-v2.webp",
  "/case-studies/sports-retail-real-v2.webp",
]

const copy = {
  zh: {
    eyebrow: "CASE STUDIES",
    title: "案例不只展示视觉，更要展示增长问题如何被解决。",
    description: "这里包含可公开访问的真实项目与精选交付案例。公开项目提供线上链接；其余案例不使用虚假数据，只展示问题、方法、实施和结果。",
    items: [
      {
        title: "SilkGear｜高端科技零售",
        url: "https://www.silkgear.com.au/",
        challenge: "多品牌、高客单科技产品需要同时解决品类发现、产品理解与线下体验衔接。",
        approach: "以场景化品类、编辑式首页和会员体系组织完整的品牌体验。",
        implementation: "首页、集合页、PDP、会员入口及实体门店信息系统。",
        outcome: "形成从品牌发现、产品教育到在线购买和到店体验的统一路径。",
        mobile: {
          challenge: "连接多品牌选品、产品理解与线下体验。",
          approach: "用场景品类、编辑首页和会员体系组织体验。",
          implementation: "首页、集合页、PDP、会员与门店信息。",
          outcome: "统一品牌发现、在线购买和到店体验。",
        },
      },
      {
        title: "SCULPFUN｜专业激光设备",
        url: "https://www.sculpfun.com/",
        challenge: "产品型号、技术参数、材料能力和应用场景复杂，用户选择成本高。",
        approach: "把设备分类、使用结果、参数证明和购买保障组织成连续决策路径。",
        implementation: "首页产品系统、技术型 PDP、机型比较、区域与信任内容。",
        outcome: "让专业设备从参数堆叠转化为更容易理解、比较和购买的产品体验。",
        mobile: {
          challenge: "型号、参数、材料与场景增加选择成本。",
          approach: "串联分类、结果证明、参数与购买保障。",
          implementation: "产品系统、技术 PDP、比较与信任内容。",
          outcome: "让专业设备更容易理解、比较和购买。",
        },
      },
      {
        title: "食品礼盒品牌",
        url: "",
        challenge: "节日流量进入后，需要快速理解礼盒场景、套装价值和配送时效。",
        approach: "把送礼场景、套装组合和订阅复购入口放进同一条购买路径。",
        implementation: "活动页结构、商品页信任内容、套装购买路径。",
        outcome: "更清楚的节日销售路径，便于后续围绕复购和套装继续优化。",
        mobile: {
          challenge: "快速说明送礼场景、套装价值与配送时间。",
          approach: "串联送礼、套装选择与订阅入口。",
          implementation: "活动页、PDP 信任内容与套装路径。",
          outcome: "形成更清楚的节日购买与复购路径。",
        },
      },
      {
        title: "户外与骑行装备",
        url: "",
        challenge: "高客单产品需要解释规格、配件、物流和售后，用户购买决策成本高。",
        approach: "把规格说明、配件联动和配送规则前置到商品页关键决策区。",
        implementation: "PDP 架构、规格模块、配送说明、移动端内容层级。",
        outcome: "减少商品页反复确认成本，为广告落地页提供更清晰的购买路径。",
        mobile: {
          challenge: "购买前需要看懂规格、配件、物流与售后。",
          approach: "把关键决策信息前置到商品页。",
          implementation: "PDP、规格、配送与移动端层级。",
          outcome: "减少确认成本，理顺广告购买路径。",
        },
      },
      {
        title: "美妆护肤出海",
        url: "",
        challenge: "社媒流量需要快速理解功效、成分、适用人群和套装逻辑。",
        approach: "用功效证明、成分解释和套装推荐重新组织页面阅读顺序。",
        implementation: "落地页优化、PDP proof blocks、基础追踪检查。",
        outcome: "让用户从理解产品到进入购物车的路径更连贯。",
        mobile: {
          challenge: "快速解释功效、成分、人群与套装逻辑。",
          approach: "按证明、成分和套装重组阅读顺序。",
          implementation: "落地页、PDP 证明与基础追踪。",
          outcome: "连接产品理解与加购路径。",
        },
      },
      {
        title: "Povison｜全装家具电商",
        url: "https://www.povison.com/",
        challenge: "大体量家具目录覆盖客厅、餐厅、卧室与户外，用户需要在空间、风格、材质和交付条件之间快速判断。",
        approach: "用按空间与品类的双路径、系列内容、灵感指南和全装交付卖点降低大件家具的决策成本。",
        implementation: "首页导航、空间与品类集合、PDP 内容层级、灵感内容以及配送与售后信息。",
        outcome: "把多品类浏览、产品教育和全装家具服务串成更连续的选购路径。",
        mobile: {
          challenge: "多空间、多品类与交付条件增加选择成本。",
          approach: "用空间、品类、指南和全装卖点组织决策。",
          implementation: "导航、集合、PDP、灵感与配送信息。",
          outcome: "连接产品教育、选购与全装交付服务。",
        },
      },
      {
        title: "运动装备零售",
        url: "",
        challenge: "多 SKU、尺码、会员折扣和广告落地页信息分散，选择成本高。",
        approach: "重新整理广告落地页和 PDP 层级，让用户更快判断适合自己的产品。",
        implementation: "广告落地页结构、移动端 UX、优惠信息表达。",
        outcome: "降低广告流量进入后的选择阻力，为后续转化测试建立基础。",
        mobile: {
          challenge: "SKU、尺码、折扣与广告信息分散。",
          approach: "重组落地页与 PDP 决策层级。",
          implementation: "广告页、移动端 UX 与优惠表达。",
          outcome: "降低选择阻力，建立测试基础。",
        },
      },
    ],
  },
  en: {
    eyebrow: "CASE STUDIES",
    title: "Case studies should show how growth problems are solved, not only visual output.",
    description: "This selection combines public live stores with selected delivery work. Live projects link to the storefront; every case avoids invented metrics and focuses on challenge, approach, implementation, and outcome.",
    items: [
      {
        title: "SilkGear · Premium Tech Retail",
        url: "https://www.silkgear.com.au/",
        challenge: "A multi-brand, high-ticket catalog needed to connect product discovery, education, and in-store experience.",
        approach: "Use scenario-led categories, an editorial homepage, and membership to shape one brand experience.",
        implementation: "Homepage, collections, PDPs, membership entry, and physical-store information.",
        outcome: "A unified path from brand discovery and product education to online purchase and in-store experience.",
        mobile: {
          challenge: "Connect selection, education, and in-store experience.",
          approach: "Use categories, editorial content, and membership.",
          implementation: "Home, collections, PDPs, membership, and store info.",
          outcome: "Unify discovery, online purchase, and store visits.",
        },
      },
      {
        title: "SCULPFUN · Professional Laser Systems",
        url: "https://www.sculpfun.com/",
        challenge: "Complex models, technical specifications, material capabilities, and use cases increased decision cost.",
        approach: "Connect product categories, application results, technical proof, and purchase assurance in one decision path.",
        implementation: "Homepage product system, technical PDPs, machine comparison, regional and trust content.",
        outcome: "Professional equipment becomes easier to understand, compare, and purchase instead of reading like a specification dump.",
        mobile: {
          challenge: "Models, specs, materials, and use cases add friction.",
          approach: "Connect categories, proof, specs, and assurance.",
          implementation: "Product system, technical PDPs, comparison, and trust.",
          outcome: "Make professional equipment easier to compare and buy.",
        },
      },
      {
        title: "Food gift box brand",
        url: "",
        challenge: "Seasonal traffic needed to understand gifting context, bundle value, and delivery timing quickly.",
        approach: "Connect gifting scenarios, bundle selection, and subscription entry points in one buying path.",
        implementation: "Campaign page structure, PDP trust content, and bundle purchase path.",
        outcome: "A clearer seasonal sales path that can support future repeat-purchase and bundle optimization.",
        mobile: {
          challenge: "Clarify gifting, bundle value, and delivery timing.",
          approach: "Connect gifting, bundles, and subscription entry.",
          implementation: "Campaign pages, PDP trust, and bundle paths.",
          outcome: "A clearer seasonal purchase and retention path.",
        },
      },
      {
        title: "Outdoor and cycling gear",
        url: "",
        challenge: "High-ticket products required specs, accessories, logistics, and support clarity before purchase.",
        approach: "Bring specs, accessory logic, and shipping rules closer to the main product decision area.",
        implementation: "PDP architecture, spec modules, shipping clarity, and mobile hierarchy.",
        outcome: "Less product-page decision friction and a clearer path for paid traffic.",
        mobile: {
          challenge: "Explain specs, accessories, shipping, and support.",
          approach: "Move decision details closer to purchase.",
          implementation: "PDP, specs, shipping, and mobile hierarchy.",
          outcome: "Less friction for product and paid traffic.",
        },
      },
      {
        title: "Beauty and skincare export",
        url: "",
        challenge: "Social traffic needed faster education around benefits, ingredients, fit, and bundle logic.",
        approach: "Rebuild the page rhythm around proof, ingredient explanation, and bundle recommendations.",
        implementation: "Landing page improvement, PDP proof blocks, and basic tracking review.",
        outcome: "A more connected path from product education to cart entry.",
        mobile: {
          challenge: "Explain benefits, ingredients, fit, and bundles.",
          approach: "Reorder proof, ingredients, and recommendations.",
          implementation: "Landing pages, PDP proof, and tracking review.",
          outcome: "A clearer path from education to cart.",
        },
      },
      {
        title: "Povison · Fully Assembled Furniture",
        url: "https://www.povison.com/",
        challenge: "A large catalog spanning living, dining, bedroom, and outdoor furniture required faster decisions across room, style, material, and delivery.",
        approach: "Use room and category paths, collections, inspiration guides, and the fully assembled proposition to reduce high-ticket decision friction.",
        implementation: "Homepage navigation, room and category collections, PDP hierarchy, inspiration content, delivery, and support information.",
        outcome: "A more continuous path connecting multi-category discovery, product education, and fully assembled furniture service.",
        mobile: {
          challenge: "Rooms, categories, and delivery add choice friction.",
          approach: "Organize decisions by room, category, guides, and assembly.",
          implementation: "Navigation, collections, PDPs, inspiration, and delivery.",
          outcome: "Connect education, selection, and assembled delivery.",
        },
      },
      {
        title: "Sports equipment retail",
        url: "",
        challenge: "Large SKU sets, sizing, member discounts, and ad landing pages created choice friction.",
        approach: "Restructure landing page and PDP hierarchy so shoppers can identify the right product faster.",
        implementation: "Ad landing page structure, mobile UX, and offer clarity.",
        outcome: "Lower choice friction after paid clicks and a better base for conversion testing.",
        mobile: {
          challenge: "SKUs, sizing, discounts, and ads felt fragmented.",
          approach: "Restructure landing and PDP decision hierarchy.",
          implementation: "Ad pages, mobile UX, and offer clarity.",
          outcome: "Lower choice friction and improve test readiness.",
        },
      },
    ],
  },
}

export function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isCarouselHoveredRef = useRef(false)
  const [api, setApi] = useState<CarouselApi>()
  const { language } = useLanguage()
  const text = copy[language]

  useEffect(() => {
    if (!api) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) return

    const interval = setInterval(() => {
      if (isCarouselHoveredRef.current) return

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
    <section id="work" ref={sectionRef} className="relative flex scroll-mt-24 flex-col justify-center overflow-hidden bg-background pb-[50px] pt-0 md:pb-[100px] md:pt-0">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10">
        <div ref={titleRef} className="mb-8 text-center md:mb-16">
          <p className="section-eyebrow animate-line mb-4 text-sm font-semibold uppercase text-primary">{text.eyebrow}</p>
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
                className="basis-[92%] pl-3 sm:basis-[85%] md:basis-[75%] md:pl-8 lg:basis-[72%] xl:basis-[64%]"
              >
                <div
                  className="group"
                  onMouseEnter={() => {
                    isCarouselHoveredRef.current = true
                  }}
                  onMouseLeave={() => {
                    isCarouselHoveredRef.current = false
                  }}
                  onFocusCapture={() => {
                    isCarouselHoveredRef.current = true
                  }}
                  onBlurCapture={() => {
                    isCarouselHoveredRef.current = false
                  }}
                >
                  <article className="home-module-shell group relative transition-all duration-700 hover:-translate-y-1">
                    <div className="overflow-hidden">
                      <img
                        src={images[index]}
                        alt={item.title}
                        width={1672}
                        height={941}
                        className="aspect-[4/3] w-full object-cover object-center transition-transform duration-1000 ease-out sm:aspect-[16/9] md:group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative z-20 mx-0 -mt-5 mb-0 md:mx-8 md:-mt-36 md:mb-3">
                      <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-white/[0.16] bg-black/25 p-3 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.20),inset_0_-1px_0_rgba(255,255,255,0.04),0_22px_60px_rgba(0,0,0,0.34)] backdrop-blur-[24px] backdrop-saturate-150 md:p-4">
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.025)_42%,rgba(255,255,255,0.06)_100%)]" />
                        <div aria-hidden="true" className="pointer-events-none absolute -top-20 left-[8%] h-36 w-1/2 rounded-full bg-white/[0.07] blur-3xl" />

                        <div className="relative z-10">
                          <div className="mb-2 flex flex-wrap items-center justify-between gap-2 md:mb-1">
                            <div className="flex min-w-0 items-center gap-3">
                              <Sparkles className="size-4 shrink-0 text-primary md:size-5" />
                              <h3 className="text-base font-semibold tracking-tight md:text-lg">
                                {item.title}
                              </h3>
                            </div>
                            {item.url ? (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 text-sm font-semibold tracking-[0.02em] text-primary transition-colors hover:border-primary/60 hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                aria-label={`${language === "zh" ? "查看线上案例" : "View live case"}: ${item.title}`}
                              >
                                <span>LIVE STORE</span>
                                <ArrowUpRight className="size-4" aria-hidden="true" />
                              </a>
                            ) : (
                              <span className="inline-flex min-h-9 shrink-0 items-center rounded-full border border-white/15 bg-white/[0.05] px-3 text-sm font-semibold tracking-[0.02em] text-muted-foreground">
                                SELECTED WORK
                              </span>
                            )}
                          </div>
                          <div className="mt-3 grid grid-cols-2 gap-2 md:mt-2 md:gap-0">
                            {[
                              ["Challenge", item.challenge, item.mobile.challenge],
                              ["Approach", item.approach, item.mobile.approach],
                              ["Implementation", item.implementation, item.mobile.implementation],
                              ["Outcome", item.outcome, item.mobile.outcome],
                            ].map(([label, value, mobileValue]) => (
                              <div key={label} className="min-w-0 rounded-xl border border-white/10 bg-black/10 px-2 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm md:rounded-none md:border-0 md:bg-transparent md:px-3 md:py-2 md:shadow-none md:backdrop-blur-none md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-white/10 md:[&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-white/10">
                                <div className="mb-1 whitespace-nowrap text-sm font-bold normal-case tracking-[0.02em] text-primary md:text-base md:uppercase">{label}</div>
                                <p className="text-sm leading-[1.45] text-muted-foreground md:text-base md:leading-[1.45]">
                                  <span className="md:hidden">{mobileValue}</span>
                                  <span className="hidden md:inline">{value}</span>
                                </p>
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
