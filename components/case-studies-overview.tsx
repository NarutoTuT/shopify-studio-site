"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"
import { caseStudyPaths, copy } from "@/components/showcase-section"
import styles from "./case-studies-overview.module.css"

const featured = [
  { name: "TERRAWULF", subtitle: { zh: "电动越野车工程", en: "Electric dirt bike engineering" }, industry: { zh: "电动越野车", en: "Electric dirt bikes" }, image: "/case-studies/terrawulf/home-live.webp", domain: "terrawulfmoto.com" },
  { name: "LUOKAVRION", subtitle: { zh: "主题定制与交互工程", en: "Theme customization and interactive engineering" }, industry: { zh: "品牌零售", en: "Brand retail" }, image: "/case-studies/luokavrion/homepage-showcase.png", domain: "luokavrion.com" },
  { name: "SILKGEAR", subtitle: { zh: "高端科技零售", en: "Premium technology retail" }, industry: { zh: "科技零售", en: "Technology retail" }, image: "/case-studies/silkgear-live-store.webp", domain: "silkgear.com.au" },
] as const

const projects = [
  { name: "ENGWE", market: { zh: "德国", en: "Germany" }, industry: { zh: "电动自行车", en: "E-bikes" }, url: "https://engwe-bikes.de" },
  { name: "SCULPFUN", industry: { zh: "激光雕刻机", en: "Laser engravers" }, url: "https://www.sculpfun.com" },
  { name: "iKamper", industry: { zh: "车顶帐篷", en: "Roof tents" }, url: "https://ikamper.com" },
  { name: "Protato Health", industry: { zh: "健康品牌", en: "Health brand" }, url: "https://protatohealth.com" },
  { name: "Yarbo", industry: { zh: "智能庭院机器人", en: "Smart yard robotics" }, url: "https://www.yarbo.com" },
  { name: "Buddha Stones", industry: { zh: "饰品", en: "Jewelry" }, url: "https://buddhastoneshop.com" },
  { name: "Tracer Bikes", industry: { zh: "电动自行车", en: "E-bikes" }, url: "https://tracerbikes.com" },
  { name: "JGH Scooter", industry: { zh: "电动滑板车", en: "Electric scooters" }, url: "https://www.jghscooter.com" },
  { name: "DeePower Bike", industry: { zh: "电动自行车", en: "E-bikes" }, url: "https://deepowerbike.com" },
  { name: "Alethia", industry: { zh: "生活方式品牌", en: "Lifestyle brand" }, url: "https://www.alethia.earth/" },
] as const

function BrandMarquee({ slanted = false }: { slanted?: boolean }) {
  const names = slanted
    ? ["TERRAWULF", "LUOKAVRION", "SILKGEAR", "ENGWE", "SCULPFUN", "IKAMPER", "YARBO"]
    : ["TERRAWULF", "LUOKAVRION", "SILKGEAR"]
  return (
    <div className={slanted ? styles.slantedMarquee : styles.topMarquee} aria-hidden="true">
      <div className={slanted ? styles.slantedTrack : styles.topTrack}>
        {[0, 1].map((copyIndex) => (
          <div className={styles.marqueeGroup} key={copyIndex}>
            {names.map((name, index) => (
              <span className={styles.marqueeItem} key={name}>
                {index > 0 && <span className={slanted ? styles.star : styles.dot}>{slanted ? "✦" : ""}</span>}
                <span className={!slanted && index % 2 === 0 ? styles.outlined : undefined}>{name}</span>
              </span>
            ))}
            <span className={slanted ? styles.star : styles.dot}>{slanted ? "✦" : ""}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CaseStudiesOverview() {
  const { language, localizedPath } = useLanguage()
  const cases = copy[language].items.slice(0, featured.length)
  const trackRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const moveTo = useCallback((index: number) => {
    const track = trackRef.current
    const first = track?.querySelector<HTMLElement>("[data-case-slide]")
    if (!track || !first) return
    const next = (index + featured.length) % featured.length
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollTo({ left: next * (first.getBoundingClientRect().width + gap), behavior: reducedMotion ? "instant" : "smooth" })
    setActive(next)
  }, [reducedMotion])

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    const element = carouselRef.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (paused || !visible || reducedMotion) return
    const timer = window.setInterval(() => moveTo(active + 1), 6000)
    return () => window.clearInterval(timer)
  }, [active, moveTo, paused, reducedMotion, visible])

  const syncActive = () => {
    const track = trackRef.current
    const first = track?.querySelector<HTMLElement>("[data-case-slide]")
    if (!track || !first) return
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
    setActive(Math.max(0, Math.min(featured.length - 1, Math.round(track.scrollLeft / (first.getBoundingClientRect().width + gap)))))
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className={styles.page}>
        <BrandMarquee />
        <header className={styles.pageHeader}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>WHALELEAP / {language === "zh" ? "项目案例" : "WORK"}</p>
            <div className={styles.headerRow}>
              <h1>CASE STUDIES</h1>
              <p>{language === "zh" ? "从完整案例到线上项目，浏览不同品牌的数字体验。" : "Explore in-depth case studies and live projects across different brands."}</p>
            </div>
          </div>
        </header>
        <section className={styles.featuredSection} aria-labelledby="featured-title" ref={carouselRef}
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false) }}
          onTouchStart={() => setPaused(true)} onTouchEnd={() => setPaused(false)}>
          <div className={styles.container}>
            <div className={styles.featuredBar}>
              <h2 id="featured-title" className={styles.sectionLabel}><span className={styles.labelDot} />{language === "zh" ? "精选案例" : "Featured cases"}</h2>
              <div className={styles.controls}>
                <span aria-live="polite" className={styles.count}>{String(active + 1).padStart(2, "0")} <span>/ 03</span></span>
                <span className={styles.progress} aria-hidden="true"><span style={{ width: `${((active + 1) / featured.length) * 100}%` }} /></span>
                <button type="button" className={styles.roundButton} onClick={() => moveTo(active - 1)} aria-label={language === "zh" ? "上一个案例" : "Previous case"}><ArrowLeft size={20} /></button>
                <button type="button" className={styles.roundButton} onClick={() => moveTo(active + 1)} aria-label={language === "zh" ? "下一个案例" : "Next case"}><ArrowRight size={20} /></button>
              </div>
            </div>
            <div className={styles.carouselTrack} ref={trackRef} onScroll={syncActive}
              onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); moveTo(active + (event.key === "ArrowRight" ? 1 : -1)) } }}
              tabIndex={0} aria-label={language === "zh" ? "精选案例轮播，使用左右方向键切换" : "Featured cases carousel, use arrow keys to navigate"}>
              {featured.map((item, index) => (
                <article className={styles.featuredCard} data-case-slide key={item.name}>
                  <div className={styles.browserFrame}>
                    <div className={styles.browserBar}><span className={styles.browserDots}><i /><i /><i /></span><span className={styles.address}>{item.domain}</span><span className={styles.live}>● LIVE STORE</span></div>
                    <div className={styles.browserImage}><Image src={item.image} alt={`${item.name} ${language === "zh" ? "网站截图" : "storefront screenshot"}`} fill sizes="(max-width: 640px) 86vw, (max-width: 1100px) 44vw, 560px" className={styles.caseImage} /></div>
                  </div>
                  <div className={styles.caseDetails}>
                    <div className={styles.cardTop}><span>{String(index + 1).padStart(2, "0")} <span>/ 03</span></span><span className={styles.pill}>{item.industry[language]}</span></div>
                    <h3>{item.name}</h3>
                    <p className={styles.subtitle}>{item.subtitle[language]}</p>
                    <div className={styles.result}><span>{language === "zh" ? "结果" : "RESULT"}</span><strong>{cases[index].mobile.outcome}</strong></div>
                    <dl className={styles.caseFacts}>
                      <div><dt>{language === "zh" ? "挑战" : "CHALLENGE"}</dt><dd>{cases[index].mobile.challenge}</dd></div>
                      <div><dt>{language === "zh" ? "方法" : "APPROACH"}</dt><dd>{cases[index].mobile.approach}</dd></div>
                      <div><dt>{language === "zh" ? "实施" : "DELIVERY"}</dt><dd>{cases[index].mobile.implementation}</dd></div>
                    </dl>
                    <a className={styles.caseLink} href={localizedPath(caseStudyPaths[index])}>{language === "zh" ? "查看案例" : "View case"}<span aria-hidden="true">→</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <BrandMarquee slanted />
        <section className={styles.projectsSection} aria-labelledby="projects-title">
          <div className={styles.container}>
            <div className={styles.projectsHeader}><h2 id="projects-title" className={styles.sectionLabel}><span className={styles.labelDot} />{language === "zh" ? "更多线上项目" : "More live projects"}</h2><span>04 — 13</span></div>
            <ol className={styles.projectList} start={4}>
              {projects.map((item, index) => (
                <li key={item.url}>
                  <a className={styles.projectRow} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`${item.name}, ${item.industry[language]}, ${language === "zh" ? "在新窗口打开" : "opens in a new tab"}`}>
                    <span className={styles.projectNumber}>{String(index + 4).padStart(2, "0")}</span>
                    <span className={styles.projectIdentity}><span className={styles.projectName}>{item.name.toUpperCase()}</span>{"market" in item && <span className={styles.market}>{item.market[language]}</span>}<span className={styles.mobileIndustry}>{item.industry[language]}</span></span>
                    <span className={styles.projectIndustry}>{item.industry[language]}</span>
                    <span className={styles.projectPlatform}>SHOPIFY</span>
                    <span className={styles.projectArrow} aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </>
  )
}
