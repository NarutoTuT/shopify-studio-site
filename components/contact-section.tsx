"use client"

import { ArrowUpRight, ClipboardCheck, MessageSquare, Timer } from "lucide-react"

import { useLanguage } from "@/components/language-provider"

const copy = {
  zh: {
    checklist: [
      "当前 Shopify 店铺或准备上线的产品",
      "主要市场、广告渠道和目标客户",
      "最想解决的转化、性能或追踪问题",
      "我们会判断下一步适合 Review、Audit、项目实施还是长期支持",
    ],
    eyebrow: "FREE SHOPIFY REVIEW",
    title: "从一次免费 Shopify 店铺诊断开始。",
    description: "你不需要先整理完整需求文档。提交店铺、产品和当前问题，我们会先判断 Shopify 增长路径里的主要阻塞点。",
    primaryCta: "免费 Shopify 店铺诊断",
    secondaryCta: "查看服务体系",
    checklistTitle: "诊断会先看这些",
    contactTitle: "沟通方式",
    emailLabel: "邮箱",
    wechatLabel: "微信",
    responseTitle: "下一步合作路径",
    responseText: "通常在 1 个工作日内回复，判断是否需要 Growth Audit、项目实施或长期技术支持。",
  },
  en: {
    checklist: [
      "Current Shopify store or product context",
      "Primary market, ad channels, and target customers",
      "The conversion, performance, or tracking issue you want to solve",
      "We will recommend Review, Audit, implementation, or ongoing support as the next step",
    ],
    eyebrow: "FREE SHOPIFY REVIEW",
    title: "Start with a free Shopify store review.",
    description: "You do not need a complete requirements document. Submit your store, product context, and current problem. We will identify the main blockers in your Shopify growth path.",
    primaryCta: "Free Shopify Store Review",
    secondaryCta: "View Service System",
    checklistTitle: "What the review looks at",
    contactTitle: "Contact",
    emailLabel: "Email",
    wechatLabel: "WeChat",
    responseTitle: "Next-step path",
    responseText: "We usually reply within 1 business day and recommend whether you need a Growth Audit, implementation project, or ongoing support.",
  },
}

export function ContactSection() {
  const email = "liaoshenyuan1999053@gmail.com"
  const wechat = "11058895969"
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <section id="contact" className="relative overflow-hidden bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0 scroll-mt-24">
      <div className="absolute inset-x-0 top-10 mx-auto h-72 max-w-4xl rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex min-h-[520px] flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-10">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{text.eyebrow}</p>
            <h2 className="max-w-3xl text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.05] tracking-normal text-foreground">
              {text.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-[1.6] text-muted-foreground md:text-lg">
              {text.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/diagnosis"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              {text.primaryCta}
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
            >
              {text.secondaryCta}
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ClipboardCheck className="size-5" />
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
