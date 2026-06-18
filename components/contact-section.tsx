"use client"

import { ArrowUpRight, Mail, MessageSquare, Timer } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

const copy = {
  zh: {
    checklist: [
      "产品品类、目标市场和预计 SKU 数量",
      "是否已有 Shopify 店铺、域名和品牌素材",
      "需要对接的支付、物流、ERP 或 CRM",
      "上线时间、预算范围和最想改善的成交问题",
    ],
    eyebrow: "FREE STORE DIAGNOSIS",
    title: "先判断你的 Shopify 站该怎么卖，再报价。",
    description: "你不需要先整理完整需求文档。把产品、市场、现有问题和上线目标发来，我们会先给出页面结构、功能范围和交付节奏建议。",
    primaryCta: "免费诊断我的 Shopify 站",
    secondaryCta: "查看交付套餐",
    checklistTitle: "发这些信息就够开始",
    contactTitle: "沟通方式",
    emailLabel: "邮箱",
    wechatLabel: "微信",
    responseTitle: "响应节奏",
    responseText: "收到信息后，通常可在 1 个工作日内给出初步范围、优先级和排期。",
    subject: "Shopify 建站咨询",
  },
  en: {
    checklist: [
      "Product category, target market, and estimated SKU count",
      "Whether you already have a Shopify store, domain, and brand assets",
      "Payments, logistics, ERP, or CRM systems that need integration",
      "Launch timing, budget range, and the conversion problem you most want to fix",
    ],
    eyebrow: "FREE STORE DIAGNOSIS",
    title: "Diagnose how your Shopify store should sell before quoting.",
    description: "You do not need a complete requirements document. Send your product, market, current problems, and launch goals. We will suggest page structure, functional scope, and delivery rhythm first.",
    primaryCta: "Get Free Store Diagnosis",
    secondaryCta: "View Packages",
    checklistTitle: "Send these to get started",
    contactTitle: "Contact",
    emailLabel: "Email",
    wechatLabel: "WeChat",
    responseTitle: "Response time",
    responseText: "After receiving the details, we usually provide initial scope, priorities, and timeline within 1 business day.",
    subject: "Shopify build inquiry",
  },
}

export function ContactSection() {
  const email = "liaoshenyuan1999053@gmail.com"
  const wechat = "11058895969"
  const { language } = useLanguage()
  const text = copy[language]
  const subject = encodeURIComponent(text.subject)

  return (
    <section id="contact" className="relative overflow-hidden bg-background px-6 py-24 md:px-10 md:py-32 scroll-mt-24">
      <div className="absolute inset-x-0 top-10 mx-auto h-72 max-w-4xl rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex min-h-[520px] flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-10">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{text.eyebrow}</p>
            <h2 className="max-w-3xl text-[clamp(2.1rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-normal text-foreground">
              {text.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-[1.6] text-muted-foreground md:text-lg">
              {text.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${email}?subject=${subject}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              {text.primaryCta}
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
            >
              {text.secondaryCta}
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="size-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{text.checklistTitle}</h3>
            <div className="space-y-3">
              {text.checklist.map((item) => (
                <p key={item} className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <MessageSquare className="mb-5 size-6 text-primary" />
              <h3 className="mb-2 text-base font-semibold text-foreground">{text.contactTitle}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {text.emailLabel}: {email}
                <br />
                {text.wechatLabel}: {wechat}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Timer className="mb-5 size-6 text-primary" />
              <h3 className="mb-2 text-base font-semibold text-foreground">{text.responseTitle}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text.responseText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

