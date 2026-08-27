"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
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
  const pathname = usePathname()
  const { language, toggleLanguage, localizedPath } = useLanguage()
  const text = copy[language]
  const isHome = pathname === "/" || pathname === "/en"
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
            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-background/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
                {text.serviceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={localizedPath(link.href)}
                    className="block min-h-11 rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
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
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-base font-medium text-foreground transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {text.languageLabel}
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
            {text.languageLabel}
          </button>
          <button
            type="button"
            aria-label={open ? text.closeMenu : text.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl px-6 pb-6">
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
