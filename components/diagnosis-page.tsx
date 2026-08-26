"use client"

import { FormEvent, useState } from "react"
import { AlertCircle, ArrowUpRight, BarChart3, CheckCircle2, Clock3, Gauge, Globe2, LoaderCircle, Send, ShieldCheck, Target } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { PageStructuredData } from "@/components/page-structured-data"
import { useLanguage } from "@/components/language-provider"

type FormState = {
  storeUrl: string
  category: string
  market: string
  stage: string
  skuCount: string
  budget: string
  timeline: string
  problem: string
  email: string
  wechat: string
  companyWebsite: string
}

const initialForm: FormState = {
  storeUrl: "",
  category: "",
  market: "",
  stage: "",
  skuCount: "",
  budget: "",
  timeline: "",
  problem: "",
  email: "",
  wechat: "",
  companyWebsite: "",
}

const copy = {
  zh: {
    eyebrow: "FREE SHOPIFY REVIEW",
    title: "免费 Shopify 店铺增长检查",
    description: "发现影响独立站转化的关键问题，获得 Shopify 技术、页面体验和数据追踪方面的优化建议。",
    primaryCta: "开始免费检查",
    secondaryCta: "返回首页",
    trust: ["面向海外华人跨境品牌", "1-2 个工作日内回复", "不需要完整需求文档"],
    heroCards: [
      { title: "Engineering", text: "主题、性能、移动端体验" },
      { title: "Conversion", text: "首页、商品页、CTA、信任内容" },
      { title: "Tracking", text: "GA4、Pixel、Events" },
    ],
    whyTitle: "为什么 Shopify 店铺需要一次增长检查？",
    whyDescription: "很多店铺的问题不在单一页面，而是广告流量、页面说服力、技术性能和数据追踪之间没有形成闭环。",
    whyItems: [
      {
        title: "广告流量浪费",
        text: "广告有点击，但落地页和商品页没有把用户顺利带到信任、加购和下单。",
        icon: Target,
      },
      {
        title: "页面转化问题",
        text: "首页结构、PDP 说服力、CTA 和信任内容可能正在制造隐性流失。",
        icon: ShieldCheck,
      },
      {
        title: "技术性能问题",
        text: "主题结构、App 堆叠、速度和移动端体验会直接影响用户耐心。",
        icon: Gauge,
      },
      {
        title: "数据追踪问题",
        text: "GA4、Pixel 和关键事件不完整时，很难判断增长问题到底出在哪里。",
        icon: BarChart3,
      },
    ],
    reviewTitle: "What We Review",
    reviewDescription: "Free Shopify Review 会从三个方向判断当前店铺的主要增长阻塞点。",
    reviewAreas: [
      {
        title: "Shopify Engineering",
        text: "检查店铺技术基础是否支持更稳定的体验和后续增长。",
        items: ["Theme", "Performance", "Mobile Experience"],
        icon: Globe2,
      },
      {
        title: "Conversion Optimization",
        text: "检查页面是否能建立信任、解释价值，并推动用户进入购买路径。",
        items: ["Homepage", "PDP", "CTA", "Trust"],
        icon: Target,
      },
      {
        title: "Growth Tracking",
        text: "检查数据追踪是否足够支撑广告复盘和后续优化判断。",
        items: ["GA4", "Pixel", "Events"],
        icon: BarChart3,
      },
    ],
    fitTitle: "Who It Is For",
    fitIntro: "如果你已经有产品、流量或 Shopify 店铺，但不确定哪里影响转化，这个入口适合先做低成本判断。",
    fitItems: ["Shopify 品牌", "跨境电商品牌", "正在投放广告的网站", "想提升转化的网站"],
    formTitle: "提交 Free Shopify Review 信息",
    formDescription: "保留现有字段即可提交。信息越具体，初步判断越准确；不确定的字段可以留空。",
    labels: {
      storeUrl: "Shopify 店铺链接",
      category: "产品品类",
      market: "目标市场",
      stage: "当前阶段",
      skuCount: "预计 SKU 数量",
      budget: "预算区间",
      timeline: "期望上线时间",
      problem: "最想解决的问题",
      email: "邮箱",
      wechat: "微信（选填）",
    },
    placeholders: {
      storeUrl: "https://your-store.com",
      category: "例如：户外装备 / 美妆护肤 / 家居生活",
      market: "例如：美国、欧洲、东南亚",
      problem: "例如：广告有点击但转化低，商品页说服力不足，数据追踪不清楚",
      email: "name@company.com",
      wechat: "微信号",
    },
    options: {
      stage: ["新品牌建站", "已有 Shopify 改版", "主题功能开发", "数据追踪优化", "B2B/批发定制"],
      skuCount: ["1-20", "21-100", "101-500", "500+"],
      budget: ["¥20,000 起", "¥35,000 左右", "¥50,000+", "需要先评估"],
      timeline: ["2-4 周", "3-6 周", "6 周以上", "暂不确定"],
    },
    emailSubject: "Shopify 免费诊断咨询",
    submitting: "正在提交…",
    submitSuccess: "已收到请求。我们会在 1-2 个工作日内完成初步问题判断，并给出优化建议方向。",
    submitError: "提交失败，请稍后重试，或直接发送邮件联系我们。",
    contactRequired: "请至少填写邮箱或微信，方便我们回复你。",
    emailInvalid: "请输入有效的邮箱地址。",
    afterTitle: "提交后会发生什么？",
    afterIntro: "这不是简单的 thank you。提交后，我们会把你的店铺放入初步检查队列。",
    afterItems: ["已收到请求", "1-2 个工作日回复", "提供初步问题判断", "给出优化建议方向"],
    auditCtaTitle: "需要更深入的方案？下一步是 Shopify Growth Audit。",
    auditCtaText: "Free Review 用来判断方向。若问题复杂，我们会建议进入 Growth Audit，进一步拆解页面、技术、追踪和实施优先级。",
    auditCtaButton: "先提交免费检查",
    auditCtaSecondary: "查看服务体系",
  },
  en: {
    eyebrow: "FREE SHOPIFY REVIEW",
    title: "Free Shopify Store Growth Review",
    description: "Find the key issues affecting store conversion and get optimization direction across Shopify engineering, page experience, and tracking.",
    primaryCta: "Start Free Review",
    secondaryCta: "Back Home",
    trust: ["For Chinese-founded global brands", "Reply within 1-2 business days", "No full requirements doc needed"],
    heroCards: [
      { title: "Engineering", text: "Theme, performance, mobile UX" },
      { title: "Conversion", text: "Homepage, PDP, CTA, trust" },
      { title: "Tracking", text: "GA4, Pixel, Events" },
    ],
    whyTitle: "Why does a Shopify store need a growth review?",
    whyDescription: "Most store problems are not isolated to one page. Paid traffic, page persuasion, technical performance, and tracking need to work together.",
    whyItems: [
      {
        title: "Paid traffic gets wasted",
        text: "Clicks arrive, but landing pages and product pages may not move visitors toward trust, cart, and checkout.",
        icon: Target,
      },
      {
        title: "Page conversion issues",
        text: "Homepage structure, PDP persuasion, CTAs, and trust content can create invisible drop-off.",
        icon: ShieldCheck,
      },
      {
        title: "Technical performance issues",
        text: "Theme structure, app load, speed, and mobile experience directly affect user patience.",
        icon: Gauge,
      },
      {
        title: "Tracking issues",
        text: "Without clean GA4, Pixel, and events, it is hard to know where growth is blocked.",
        icon: BarChart3,
      },
    ],
    reviewTitle: "What We Review",
    reviewDescription: "The Free Shopify Review identifies blockers across engineering, conversion, and tracking.",
    reviewAreas: [
      {
        title: "Shopify Engineering",
        text: "Review whether the technical foundation can support a stable experience and future growth.",
        items: ["Theme", "Performance", "Mobile Experience"],
        icon: Globe2,
      },
      {
        title: "Conversion Optimization",
        text: "Review whether pages build trust, explain value, and move visitors into the purchase path.",
        items: ["Homepage", "PDP", "CTA", "Trust"],
        icon: Target,
      },
      {
        title: "Growth Tracking",
        text: "Review whether tracking supports campaign review and optimization decisions.",
        items: ["GA4", "Pixel", "Events"],
        icon: BarChart3,
      },
    ],
    fitTitle: "Who It Is For",
    fitIntro: "Use this if you already have products, traffic, or a Shopify store, but are unsure what blocks conversion.",
    fitItems: ["Shopify brands", "Cross-border ecommerce brands", "Stores running paid ads", "Stores trying to improve conversion"],
    formTitle: "Submit your Free Shopify Review brief",
    formDescription: "The existing fields are enough to submit. The more specific the input, the sharper the first review.",
    labels: {
      storeUrl: "Shopify store URL",
      category: "Product category",
      market: "Target market",
      stage: "Current stage",
      skuCount: "Estimated SKU count",
      budget: "Budget range",
      timeline: "Launch timeline",
      problem: "Main problem to solve",
      email: "Email",
      wechat: "WeChat (optional)",
    },
    placeholders: {
      storeUrl: "https://your-store.com",
      category: "Outdoor gear / beauty / home lifestyle",
      market: "US, Europe, Southeast Asia",
      problem: "Paid clicks do not convert, product page lacks persuasion, analytics are unclear",
      email: "name@company.com",
      wechat: "WeChat ID",
    },
    options: {
      stage: ["New brand build", "Existing Shopify redesign", "Theme feature development", "Analytics optimization", "B2B/wholesale customization"],
      skuCount: ["1-20", "21-100", "101-500", "500+"],
      budget: ["From ¥20,000", "Around ¥35,000", "¥50,000+", "Need assessment first"],
      timeline: ["2-4 weeks", "3-6 weeks", "6+ weeks", "Not sure yet"],
    },
    emailSubject: "Free Shopify diagnosis inquiry",
    submitting: "Submitting...",
    submitSuccess: "Request received. We will complete an initial assessment within 1-2 business days and share optimization direction.",
    submitError: "Submission failed. Please try again later or contact us by email.",
    contactRequired: "Please enter at least an email or WeChat so we can reply.",
    emailInvalid: "Please enter a valid email address.",
    afterTitle: "What happens after submission?",
    afterIntro: "This is not a simple thank-you flow. Your store enters the first review queue.",
    afterItems: ["Request received", "Reply within 1-2 business days", "Initial problem assessment", "Optimization direction"],
    auditCtaTitle: "Need a deeper plan? The next step is a Shopify Growth Audit.",
    auditCtaText: "The Free Review identifies direction. If the problem is complex, we may suggest a Growth Audit to break down page, technical, tracking, and implementation priorities.",
    auditCtaButton: "Start with Free Review",
    auditCtaSecondary: "View Services",
  },
}

const diagnosisStructuredData = {
  breadcrumbs: [
    { name: "首页", url: "https://whaleleap.studio/" },
    { name: "Free Shopify Review", url: "https://whaleleap.studio/diagnosis" },
  ],
  service: {
    name: "Free Shopify Review",
    description: "为海外华人跨境品牌检查 Shopify 技术基础、页面转化路径和数据追踪体系，判断影响独立站增长的关键问题。",
    url: "https://whaleleap.studio/diagnosis",
  },
  page: {
    type: "WebPage" as const,
    name: "Free Shopify Review",
    description: "发现影响 Shopify 独立站转化的关键问题，获得 Shopify 技术、页面体验和数据追踪方面的初步优化建议。",
    url: "https://whaleleap.studio/diagnosis",
    inLanguage: "zh-CN",
    about: ["Free Shopify Review", "Shopify 增长检查", "Shopify 转化优化", "Shopify 数据追踪"],
  },
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}

function inputClass() {
  return "min-h-12 rounded-xl border border-white/10 bg-black/30 px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/55 focus:border-primary/60 focus:ring-2 focus:ring-primary/15"
}

export function DiagnosisPage() {
  const { language } = useLanguage()
  const text = copy[language]
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const [startedAt, setStartedAt] = useState(() => Date.now())
  const email = "liaoshenyuan1999053@gmail.com"

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    if (submitState !== "idle" && submitState !== "submitting") {
      setSubmitState("idle")
      setSubmitMessage("")
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.email.trim() && !form.wechat.trim()) {
      setSubmitState("error")
      setSubmitMessage(text.contactRequired)
      return
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setSubmitState("error")
      setSubmitMessage(text.emailInvalid)
      return
    }

    setSubmitState("submitting")
    setSubmitMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          language,
          startedAt,
          pageUrl: window.location.href,
          referrer: document.referrer,
          utmSource: new URLSearchParams(window.location.search).get("utm_source") || "",
          utmMedium: new URLSearchParams(window.location.search).get("utm_medium") || "",
          utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
        }),
      })
      const result = (await response.json().catch(() => null)) as { message?: string } | null

      if (!response.ok) {
        throw new Error(result?.message || text.submitError)
      }

      setForm(initialForm)
      setStartedAt(Date.now())
      setSubmitState("success")
      setSubmitMessage(text.submitSuccess)
      ;(window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "generate_lead", {
        lead_source: "diagnosis_form",
      })
    } catch (error) {
      setSubmitState("error")
      setSubmitMessage(error instanceof Error && error.message ? error.message : text.submitError)
    }
  }

  const reviewForm = (
    <form id="review-form" onSubmit={handleSubmit} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur md:p-8">
      <div className="mb-7">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Review Form</p>
        <h2 className="text-2xl font-bold tracking-normal">{text.formTitle}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text.formDescription}</p>
      </div>

      <div className="grid gap-5">
        <Field label={text.labels.storeUrl}>
          <input className={inputClass()} value={form.storeUrl} onChange={(event) => updateField("storeUrl", event.target.value)} placeholder={text.placeholders.storeUrl} type="url" />
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label={text.labels.category}>
            <input className={inputClass()} value={form.category} onChange={(event) => updateField("category", event.target.value)} placeholder={text.placeholders.category} />
          </Field>
          <Field label={text.labels.market}>
            <input className={inputClass()} value={form.market} onChange={(event) => updateField("market", event.target.value)} placeholder={text.placeholders.market} />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label={text.labels.stage}>
            <select className={inputClass()} value={form.stage} onChange={(event) => updateField("stage", event.target.value)}>
              <option value=""></option>
              {text.options.stage.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label={text.labels.skuCount}>
            <select className={inputClass()} value={form.skuCount} onChange={(event) => updateField("skuCount", event.target.value)}>
              <option value=""></option>
              {text.options.skuCount.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label={text.labels.budget}>
            <select className={inputClass()} value={form.budget} onChange={(event) => updateField("budget", event.target.value)}>
              <option value=""></option>
              {text.options.budget.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label={text.labels.timeline}>
            <select className={inputClass()} value={form.timeline} onChange={(event) => updateField("timeline", event.target.value)}>
              <option value=""></option>
              {text.options.timeline.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label={text.labels.problem}>
          <textarea className={`${inputClass()} min-h-32 py-3`} value={form.problem} onChange={(event) => updateField("problem", event.target.value)} placeholder={text.placeholders.problem} />
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label={text.labels.email}>
            <input className={inputClass()} value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder={text.placeholders.email} type="email" autoComplete="email" aria-describedby="contact-submit-status" />
          </Field>
          <Field label={text.labels.wechat}>
            <input className={inputClass()} value={form.wechat} onChange={(event) => updateField("wechat", event.target.value)} placeholder={text.placeholders.wechat} autoComplete="off" aria-describedby="contact-submit-status" />
          </Field>
        </div>

        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="company-website">Company website</label>
          <input id="company-website" name="companyWebsite" value={form.companyWebsite} onChange={(event) => updateField("companyWebsite", event.target.value)} tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {submitState !== "idle" && submitState !== "submitting" && (
        <div
          id="contact-submit-status"
          role={submitState === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`mt-5 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm leading-relaxed ${
            submitState === "success" ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200" : "border-red-400/25 bg-red-400/10 text-red-200"
          }`}
        >
          {submitState === "success" ? <CheckCircle2 className="mt-0.5 size-4 shrink-0" /> : <AlertCircle className="mt-0.5 size-4 shrink-0" />}
          <span>
            {submitMessage}
            {submitState === "error" && (
              <>
                {" "}
                <a className="font-semibold underline underline-offset-4" href={`mailto:${email}?subject=${encodeURIComponent(text.emailSubject)}`}>
                  {email}
                </a>
              </>
            )}
          </span>
        </div>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-65"
        >
          {submitState === "submitting" ? text.submitting : text.primaryCta}
          {submitState === "submitting" ? <LoaderCircle className="size-4 animate-spin" /> : <ArrowUpRight className="size-4" />}
        </button>
        <a href="/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-white/5">
          {text.secondaryCta}
        </a>
      </div>
    </form>
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData breadcrumbs={diagnosisStructuredData.breadcrumbs} faqItems={[]} service={diagnosisStructuredData.service} page={diagnosisStructuredData.page} />
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#111111] to-[#050505]" />
          <div className="absolute inset-x-0 top-28 mx-auto h-72 max-w-4xl rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-5 inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">{text.eyebrow}</p>
              <h1 className="max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[1.04] tracking-normal">{text.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-[1.7] text-muted-foreground md:text-lg">{text.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {text.trust.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-primary" />
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#review-form" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]">
                  {text.primaryCta}
                  <ArrowUpRight className="size-4" />
                </a>
                <a href="/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-white/5">
                  {text.secondaryCta}
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {text.heroCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                  <p className="text-sm font-semibold text-primary">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black px-6 py-[50px] md:px-10 md:py-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">{text.whyTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.whyDescription}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {text.whyItems.map((item) => {
                const Icon = item.icon

                return (
                  <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <Icon className="mb-5 size-6 text-primary" />
                    <h3 className="mb-3 text-base font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">{text.reviewTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.reviewDescription}</p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {text.reviewAreas.map((item) => {
                const Icon = item.icon

                return (
                  <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <Icon className="mb-5 size-6 text-primary" />
                    <h3 className="text-lg font-semibold tracking-normal">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.items.map((detail) => (
                        <span key={detail} className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">{text.fitTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.fitIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {text.fitItems.map((item) => (
                <p key={item} className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Review Form</p>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">{text.formTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.formDescription}</p>
            </div>
            {reviewForm}
          </div>
        </section>

        <section className="border-y border-white/10 bg-black px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Clock3 className="mb-5 size-7 text-primary" />
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">{text.afterTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.afterIntro}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {text.afterItems.map((item, index) => (
                <article key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-sm font-semibold text-primary">0{index + 1}</p>
                  <p className="mt-4 text-base font-semibold text-foreground">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 pb-[50px] pt-0 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1100px] rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 md:p-10">
            <Send className="mb-5 size-7 text-primary" />
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">{text.auditCtaTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{text.auditCtaText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#review-form" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]">
                {text.auditCtaButton}
                <ArrowUpRight className="size-4" />
              </a>
              <a href="/#services" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-white/5">
                {text.auditCtaSecondary}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
