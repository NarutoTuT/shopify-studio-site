"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, BarChart3, Calculator, ChartNoAxesCombined, ChevronDown, Code2, Library, Menu, TimerReset, X } from "lucide-react"
import { usePathname } from "next/navigation"

import { BrandLogo } from "@/components/brand-logo"
import { useLanguage } from "@/components/language-provider"

const copy = {
  zh: {
    servicesLabel: "服务",
    serviceLinks: [
      { label: "Shopify Engineering", href: "/services/shopify-website-build" },
      { label: "Shopify Theme Customization", href: "/services/shopify-theme-customization" },
      { label: "Conversion Optimization", href: "/services/shopify-conversion-optimization" },
      { label: "Growth Analytics & Tracking", href: "/services/shopify-ga4-gtm" },
    ],
    learnLabel: "学习资源",
    learnAllLabel: "查看全部学习资源",
    learnMenuEyebrow: "SHOPIFY GROWTH LIBRARY",
    learnMenuHeading: "6 篇深度指南",
    learnMenuText: "建站、数据与 CRO，从判断到落地",
    learnGroups: [
      {
        label: "建站与开发",
        links: [
          { label: "Shopify 建站费用", href: "/learn/shopify-website-cost", icon: Calculator, description: "费用构成、三档方案与逻辑" },
          { label: "Shopify 定制开发报价", href: "/learn/shopify-custom-development-cost", icon: Code2, description: "功能点、工时与定制报价逻辑" },
          { label: "开发者还是工作室", href: "/learn/hire-shopify-developer", icon: Library, description: "合作模式、报价与合同边界" },
        ],
      },
      {
        label: "数据与增长",
        links: [
          { label: "GA4 / GTM Tracking Plan", href: "/learn/shopify-ga4-gtm-tracking-plan", icon: BarChart3, description: "事件契约、参数与上线 QA" },
          { label: "GA4 Purchase 排查", href: "/learn/shopify-ga4-purchase-tracking-fix", icon: TimerReset, description: "缺失、重复与对账排查" },
          { label: "PDP 转化率优化清单", href: "/learn/shopify-cro-checklist", icon: ChartNoAxesCombined, description: "信息、购买与信任阻力检查" },
        ],
      },
    ],
    navLinks: [
      { label: "案例", href: "/#work" },
      { label: "价格", href: "/pricing" },
      { label: "关于", href: "/about" },
    ],
    cta: "免费诊断",
    languageLabel: "EN",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
  },
  en: {
    servicesLabel: "Services",
    serviceLinks: [
      { label: "Shopify Engineering", href: "/services/shopify-website-build" },
      { label: "Shopify Theme Customization", href: "/services/shopify-theme-customization" },
      { label: "Conversion Optimization", href: "/services/shopify-conversion-optimization" },
      { label: "Growth Analytics & Tracking", href: "/services/shopify-ga4-gtm" },
    ],
    learnLabel: "Learn",
    learnAllLabel: "View all learning resources",
    learnMenuEyebrow: "SHOPIFY GROWTH LIBRARY",
    learnMenuHeading: "6 in-depth guides",
    learnMenuText: "Build, data, and CRO — from decision to launch",
    learnGroups: [
      {
        label: "Build & Development",
        links: [
          { label: "Shopify Website Cost", href: "/learn/shopify-website-cost", icon: Calculator, description: "Cost, tiers, pricing logic" },
          { label: "Custom Development Cost", href: "/learn/shopify-custom-development-cost", icon: Code2, description: "Scope, effort, and quoting logic" },
          { label: "Developer or Studio", href: "/learn/hire-shopify-developer", icon: Library, description: "Models, pricing, contract scope" },
        ],
      },
      {
        label: "Data & Growth",
        links: [
          { label: "GA4 / GTM Tracking Plan", href: "/learn/shopify-ga4-gtm-tracking-plan", icon: BarChart3, description: "Event contract, params, QA" },
          { label: "GA4 Purchase Troubleshooting", href: "/learn/shopify-ga4-purchase-tracking-fix", icon: TimerReset, description: "Missing, duplicate, reconciliation" },
          { label: "PDP CRO Checklist", href: "/learn/shopify-cro-checklist", icon: ChartNoAxesCombined, description: "Info, purchase, trust friction" },
        ],
      },
    ],
    navLinks: [
      { label: "Case Studies", href: "/#work" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
    ],
    cta: "Free Diagnosis",
    languageLabel: "中文",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [learnOpen, setLearnOpen] = useState(false)
  const pathname = usePathname()
  const { language, toggleLanguage, localizedPath } = useLanguage()
  const text = copy[language]
  const isHome = pathname === "/" || pathname === "/en"
  const isChineseOnlyPage = pathname === "/learn" || pathname.startsWith("/learn/")
  const homeHref = isHome ? "#" : localizedPath("/")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border/50 bg-background/80 backdrop-blur-md" : ""}`}>
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-3.5 lg:px-12">
        <a href={homeHref} className="inline-flex min-h-11 min-w-0 items-center" aria-label={language === "zh" ? "WhaleLeap Studio 首页" : "WhaleLeap Studio home"} onClick={() => setOpen(false)}>
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-1 rounded-full px-2 text-base text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              {text.servicesLabel}
              <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-72 origin-top -translate-x-1/2 -translate-y-2 scale-[0.98] pt-4 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-background/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
                {text.serviceLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={localizedPath(link.href)}
                    style={{ transitionDelay: `${80 + index * 40}ms` }}
                    className="-translate-y-1 block min-h-11 rounded-xl px-4 py-3 text-base font-medium text-muted-foreground opacity-0 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {text.navLinks.map((link) => (
            <a
              key={link.href}
              href={localizedPath(link.href)}
              className="inline-flex min-h-11 items-center rounded-full px-1 text-base tracking-[-0.01em] text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              {link.label}
            </a>
          ))}
          <div className="group">
            <a
              href={localizedPath("/learn")}
              className="inline-flex min-h-11 items-center gap-1 rounded-full px-1 text-base tracking-[-0.01em] text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              {text.learnLabel}
              <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
            </a>
            <div className="invisible absolute inset-x-0 top-full z-50 px-6 pt-4 opacity-0 transition-opacity duration-200 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 lg:px-12">
              <div className="mx-auto max-w-[1500px] origin-top -translate-y-2 scale-[0.99] rounded-2xl border border-white/10 bg-background/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl transition-transform duration-200 ease-out group-hover:translate-y-0 group-hover:scale-100 group-focus-within:translate-y-0 group-focus-within:scale-100">
                <div className="grid gap-3 lg:grid-cols-[300px_1fr]">
                  <div className="relative overflow-hidden rounded-xl bg-white/[0.03] p-5">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-12 size-36 rounded-full bg-primary/10 blur-2xl" />
                    <span className="relative flex size-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary"><Library className="size-5" /></span>
                    <p className="relative mt-4 font-mono text-base font-semibold uppercase tracking-[0.06em] text-primary">{text.learnMenuEyebrow}</p>
                    <p className="relative mt-2 text-lg font-bold text-foreground">{text.learnMenuHeading}</p>
                    <p className="relative mt-1 text-base leading-[1.6] text-muted-foreground">{text.learnMenuText}</p>
                    <a href={localizedPath("/learn")} className="relative mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 text-base font-semibold text-primary transition-colors hover:bg-primary/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">{text.learnAllLabel}<ArrowUpRight className="size-4" /></a>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {text.learnGroups.map((group, groupIndex) => (
                      <div key={group.label} className="rounded-xl bg-white/[0.025] p-2">
                        <p className="px-3 pb-2 pt-1 font-mono text-base font-semibold text-primary">{group.label}</p>
                        {group.links.map((link, linkIndex) => {
                          const Icon = link.icon
                          return (
                            <a key={link.href} href={localizedPath(link.href)} style={{ transitionDelay: `${60 + (groupIndex * 3 + linkIndex) * 35}ms` }} className="group/link relative -translate-y-1 flex items-start gap-3 rounded-lg px-3 py-3 text-base opacity-0 transition-all duration-200 ease-out hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                              <span aria-hidden="true" className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full bg-primary/70 opacity-0 transition-all duration-200 group-hover/link:h-8 group-hover/link:opacity-100" />
                              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-primary transition-colors group-hover/link:border-primary/40 group-hover/link:bg-primary/10"><Icon className="size-4" /></span>
                              <span className="min-w-0 flex-1">
                                <span className="block font-semibold text-foreground">{link.label}</span>
                                <span className="mt-1 block leading-[1.5] text-muted-foreground">{link.description}</span>
                              </span>
                              <ArrowUpRight className="mt-1 size-4 shrink-0 text-white/25 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-primary" />
                            </a>
                          )
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-base font-medium text-foreground transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {isChineseOnlyPage ? "EN Home" : text.languageLabel}
          </button>
          <a
            href={localizedPath("/diagnosis")}
            className="inline-flex min-h-11 items-center rounded-full bg-foreground px-5 py-2.5 text-base font-medium tracking-[-0.01em] text-background transition-all duration-300 hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {text.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 text-base font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {isChineseOnlyPage ? "EN Home" : text.languageLabel}
          </button>
          <button
            type="button"
            aria-label={open ? text.closeMenu : text.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {open ? <X className="size-5 animate-in fade-in zoom-in-75 duration-150" /> : <Menu className="size-5 animate-in fade-in zoom-in-75 duration-150" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden max-h-[calc(100svh-4.5rem)] origin-top overflow-y-auto overscroll-contain border-t border-white/10 bg-background/95 px-6 pb-8 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 ease-out">
          <div className="flex flex-col gap-1 pt-2">
            <div className="px-2 pb-2 pt-3 text-base font-semibold uppercase tracking-[0.08em] text-primary">
              {text.servicesLabel}
            </div>
            {text.serviceLinks.map((link) => (
              <a
                key={link.href}
                href={localizedPath(link.href)}
                onClick={() => setOpen(false)}
                className="min-h-11 rounded-xl px-4 py-3 text-base text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 h-px bg-white/10" />
            {text.navLinks.map((link) => (
              <a
                key={link.href}
                href={localizedPath(link.href)}
                onClick={() => setOpen(false)}
                className="min-h-11 rounded-xl px-2 py-3 text-base text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              aria-expanded={learnOpen}
              onClick={() => setLearnOpen((value) => !value)}
              className="flex min-h-11 items-center justify-between rounded-xl px-2 py-3 text-left text-base text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              {text.learnLabel}
              <ChevronDown className={`size-4 transition-transform duration-200 ${learnOpen ? "rotate-180" : ""}`} />
            </button>
            {learnOpen && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-3 animate-in fade-in slide-in-from-top-1 duration-200 ease-out">
                {text.learnGroups.map((group) => (
                  <div key={group.label} className="pb-3 last:pb-0">
                    <p className="px-2 py-2 font-mono text-base font-semibold text-primary">{group.label}</p>
                    {group.links.map((link) => {
                      const Icon = link.icon
                      return (
                        <a key={link.href} href={localizedPath(link.href)} onClick={() => { setOpen(false); setLearnOpen(false) }} className="flex min-h-11 items-start gap-3 rounded-xl px-3 py-3 text-base hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-primary"><Icon className="size-4" /></span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-semibold text-foreground">{link.label}</span>
                            <span className="mt-1 block leading-[1.5] text-muted-foreground">{link.description}</span>
                          </span>
                        </a>
                      )
                    })}
                  </div>
                ))}
                <a href={localizedPath("/learn")} onClick={() => { setOpen(false); setLearnOpen(false) }} className="mt-2 flex min-h-11 items-center justify-between rounded-xl border border-primary/20 bg-primary/[0.06] px-4 py-3 text-base font-semibold text-primary">{text.learnAllLabel}<span aria-hidden="true">→</span></a>
              </div>
            )}
            <a
              href={localizedPath("/diagnosis")}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              {text.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
