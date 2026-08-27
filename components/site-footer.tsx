import { ArrowUpRight, Mail, MessageCircle } from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"

type SiteFooterProps = {
  language: "zh" | "en"
}

const footerCopy = {
  zh: {
    ariaLabel: "网站底部导航",
    description: "面向跨境品牌的 Shopify 建站、主题定制、转化优化与数据追踪工作室。",
    servicesTitle: "服务体系",
    navigationTitle: "网站导航",
    contactTitle: "开始沟通",
    serviceLinks: [
      { label: "Shopify 建站", href: "/services/shopify-website-build" },
      { label: "主题定制", href: "/services/shopify-theme-customization" },
      { label: "转化率优化", href: "/services/shopify-conversion-optimization" },
      { label: "GA4 / GTM 数据追踪", href: "/services/shopify-ga4-gtm" },
    ],
    navigationLinks: [
      { label: "案例", href: "/#work" },
      { label: "价格", href: "/pricing" },
      { label: "关于我们", href: "/about" },
      { label: "免费诊断", href: "/diagnosis" },
    ],
    contactText: "发送店铺链接、当前问题和目标，我们会先判断适合的下一步。",
    contactCta: "开始免费诊断",
    privacy: "提交的信息仅用于回复咨询和项目沟通，不会用于无关营销。",
    copyright: "Shopify Growth Engineering Studio",
  },
  en: {
    ariaLabel: "Website footer navigation",
    description: "Shopify engineering, theme customization, conversion optimization, and measurement for global ecommerce brands.",
    servicesTitle: "Services",
    navigationTitle: "Navigate",
    contactTitle: "Start a conversation",
    serviceLinks: [
      { label: "Shopify Engineering", href: "/services/shopify-website-build" },
      { label: "Theme Customization", href: "/services/shopify-theme-customization" },
      { label: "Conversion Optimization", href: "/services/shopify-conversion-optimization" },
      { label: "GA4 / GTM Tracking", href: "/services/shopify-ga4-gtm" },
    ],
    navigationLinks: [
      { label: "Case Studies", href: "/#work" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Free Review", href: "/diagnosis" },
    ],
    contactText: "Share your store, current blocker, and goal. We will recommend the most useful next step.",
    contactCta: "Start a Free Review",
    privacy: "Submitted information is used only to reply to your inquiry and discuss a potential project.",
    copyright: "Shopify Growth Engineering Studio",
  },
}

function localizedPath(path: string, language: SiteFooterProps["language"]) {
  if (language === "zh") return path
  return `/en${path === "/" ? "" : path}`
}

export function SiteFooter({ language }: SiteFooterProps) {
  const text = footerCopy[language]
  const year = new Date().getFullYear()

  return (
    <footer aria-label={text.ariaLabel} className="relative overflow-hidden bg-black px-4 pb-4 pt-0 sm:px-6 md:px-10 md:pb-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[18%] bottom-[-14rem] h-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_12%_0%,rgba(119,252,117,0.11),transparent_28%),radial-gradient(circle_at_88%_100%,rgba(34,211,238,0.08),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.75fr_0.65fr_1fr] lg:gap-12">
          <div className="max-w-md">
            <a href={localizedPath("/", language)} className="inline-flex min-h-11 items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60" aria-label={language === "zh" ? "返回中文首页" : "Return to English home"}>
              <BrandLogo />
            </a>
            <p className="mt-5 text-base leading-[1.75] text-white/58">{text.description}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-base text-white/70">
              <a href="mailto:liaoshenyuan1999053@gmail.com" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/[0.055] px-4 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                <Mail className="size-5 text-primary" />
                Email
              </a>
              <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/[0.055] px-4">
                <MessageCircle className="size-5 text-cyan-300" />
                WeChat 11058895969
              </span>
            </div>
          </div>

          <nav aria-label={text.servicesTitle}>
            <h2 className="text-base font-semibold text-white">{text.servicesTitle}</h2>
            <div className="mt-5 grid gap-2">
              {text.serviceLinks.map((link) => (
                <a key={link.href} href={localizedPath(link.href, language)} className="inline-flex min-h-11 items-center text-base leading-snug text-white/55 transition-colors hover:text-primary focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <nav aria-label={text.navigationTitle}>
            <h2 className="text-base font-semibold text-white">{text.navigationTitle}</h2>
            <div className="mt-5 grid gap-2">
              {text.navigationLinks.map((link) => (
                <a key={link.href} href={localizedPath(link.href, language)} className="inline-flex min-h-11 items-center text-base text-white/55 transition-colors hover:text-primary focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <h2 className="text-base font-semibold text-white">{text.contactTitle}</h2>
            <p className="mt-5 text-base leading-[1.75] text-white/58">{text.contactText}</p>
            <a href={localizedPath("/diagnosis", language)} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
              {text.contactCta}
              <ArrowUpRight className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 text-base leading-relaxed text-white/40 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-3xl">{text.privacy}</p>
          <p className="shrink-0">© {year} WhaleLeap Studio · {text.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
