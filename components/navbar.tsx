"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "服务", href: "#services" },
  { label: "案例", href: "#work" },
  { label: "价格", href: "#pricing" },
  { label: "联系", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
        <a href="#" className="text-foreground text-lg font-semibold tracking-[-0.03em]" onClick={() => setOpen(false)}>
          SHOPIFY STUDIO
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-[-0.01em]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-foreground text-background px-5 py-2.5 text-sm font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 tracking-[-0.01em]"
        >
          获取方案
        </a>

        <button
          type="button"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="md:hidden inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl px-6 pb-6">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
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
              获取方案
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
