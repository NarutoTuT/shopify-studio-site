"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

const copy = {
  zh: {
    navLinks: [
      { label: "服务", href: "#services" },
      { label: "案例", href: "#work" },
      { label: "价格", href: "#pricing" },
      { label: "联系", href: "#contact" },
    ],
    cta: "免费诊断",
    languageLabel: "EN",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
  },
  en: {
    navLinks: [
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#work" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
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
  const { language, toggleLanguage } = useLanguage()
  const text = copy[language]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : ""}`}>
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        <a href="#" className="text-foreground text-lg font-semibold tracking-normal" onClick={() => setOpen(false)}>
          SHOPIFY STUDIO
        </a>

        <div className="hidden md:flex items-center gap-8">
          {text.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-[-0.01em]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
          >
            {text.languageLabel}
          </button>
          <a
            href="#contact"
            className="inline-flex bg-foreground text-background px-5 py-2.5 text-sm font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 tracking-[-0.01em]"
          >
            {text.cta}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 text-sm font-medium text-foreground"
          >
            {text.languageLabel}
          </button>
          <button
            type="button"
            aria-label={open ? text.closeMenu : text.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl px-6 pb-6">
          <div className="flex flex-col gap-1 pt-2">
            {text.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              {text.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

