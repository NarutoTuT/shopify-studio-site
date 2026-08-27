"use client"

import { FormEvent, useState } from "react"
import { AlertCircle, ArrowUpRight, BarChart3, CheckCircle2, ChevronDown, Clock3, Gauge, Globe2, LoaderCircle, Send, ShieldCheck, Target } from "lucide-react"

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
  zh: {
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
      about: ["Free Shopify Review", "Shopify 增长检查", "Shopify 转化优化", "Shopify 数据追踪"],
    },
  },
  en: {
    breadcrumbs: [
      { name: "Home", url: "https://whaleleap.studio/en" },
      { name: "Free Shopify Review", url: "https://whaleleap.studio/en/diagnosis" },
    ],
    service: {
      name: "Free Shopify Review",
      description: "A review of Shopify technical foundations, conversion paths, and tracking systems to identify the issues limiting storefront growth.",
      url: "https://whaleleap.studio/en/diagnosis",
    },
    page: {
      type: "WebPage" as const,
      name: "Free Shopify Review",
      description: "Identify the key issues affecting Shopify conversion and get initial recommendations for engineering, page experience, and measurement.",
      url: "https://whaleleap.studio/en/diagnosis",
      about: ["Free Shopify Review", "Shopify growth review", "Shopify conversion optimization", "Shopify analytics"],
    },
  },
}

const growthSignalMeta = [
  { code: "TRAFFIC", zh: ["广告点击", "落地页", "购买路径"], en: ["Ad clicks", "Landing page", "Purchase path"] },
  { code: "CONVERSION", zh: ["首页结构", "PDP", "信任内容"], en: ["Homepage", "PDP", "Trust content"] },
  { code: "ENGINEERING", zh: ["主题结构", "App 负载", "移动体验"], en: ["Theme structure", "App load", "Mobile UX"] },
  { code: "TRACKING", zh: ["GA4", "Pixel", "关键事件"], en: ["GA4", "Pixel", "Key events"] },
]

const afterStepMeta = {
  zh: ["提交后即时确认", "预计 1–2 个工作日", "识别主要增长阻塞点", "明确下一步优化优先级"],
  en: ["Confirmed after submission", "Expected within 1–2 business days", "Identify the primary growth blockers", "Clarify the next optimization priorities"],
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="grid min-w-0 gap-2">
      <span className="text-base font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}

function inputClass() {
  return "min-h-14 w-full min-w-0 rounded-[1.1rem] border border-white/10 bg-black/30 px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/55 focus:border-primary/60 focus:ring-2 focus:ring-primary/15"
}

function SelectField({
  value,
  options,
  onChange,
}: {
  value: string
  options: string[]
  onChange: (value: string) => void
}) {
  return (
    <div className="relative min-w-0">
      <select className={`${inputClass()} appearance-none pr-14`} value={value} onChange={(event) => onChange(event.target.value)}>
        <option value=""></option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      <span aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-primary shadow-sm shadow-black/20">
        <ChevronDown className="size-[18px]" strokeWidth={2.25} />
      </span>
    </div>
  )
}

export function DiagnosisPage() {
  const { language, localizedPath } = useLanguage()
  const text = copy[language]
  const structuredData = diagnosisStructuredData[language]
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const [startedAt, setStartedAt] = useState(() => Date.now())
  const [activeGrowthSignal, setActiveGrowthSignal] = useState(0)
  const email = "liaoshenyuan1999053@gmail.com"
  const activeGrowthItem = text.whyItems[activeGrowthSignal]
  const activeGrowthMeta = growthSignalMeta[activeGrowthSignal]

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
    <form id="review-form" onSubmit={handleSubmit} className="scroll-mt-28 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-5 md:p-8">
      <div className="mb-7">
        <p className="mb-3 text-base font-semibold uppercase tracking-[0.08em] text-primary">Review Form</p>
        <h2 className="text-xl font-bold tracking-normal sm:text-2xl">{text.formTitle}</h2>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">{text.formDescription}</p>
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
            <SelectField value={form.stage} options={text.options.stage} onChange={(value) => updateField("stage", value)} />
          </Field>
          <Field label={text.labels.skuCount}>
            <SelectField value={form.skuCount} options={text.options.skuCount} onChange={(value) => updateField("skuCount", value)} />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label={text.labels.budget}>
            <SelectField value={form.budget} options={text.options.budget} onChange={(value) => updateField("budget", value)} />
          </Field>
          <Field label={text.labels.timeline}>
            <SelectField value={form.timeline} options={text.options.timeline} onChange={(value) => updateField("timeline", value)} />
          </Field>
        </div>

        <Field label={text.labels.problem}>
          <textarea className={`${inputClass()} min-h-36 py-4`} value={form.problem} onChange={(event) => updateField("problem", event.target.value)} placeholder={text.placeholders.problem} />
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
        <div id="contact-submit-status" role={submitState === "error" ? "alert" : "status"} aria-live="polite" className={`mt-5 flex items-start gap-3 rounded-xl border px-4 py-4 text-base leading-relaxed ${submitState === "success" ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200" : "border-red-400/25 bg-red-400/10 text-red-200"}`}>
          {submitState === "success" ? <CheckCircle2 className="mt-0.5 size-5 shrink-0" /> : <AlertCircle className="mt-0.5 size-5 shrink-0" />}
          <span>{submitMessage}{submitState === "error" && <> {" "}<a className="font-semibold underline underline-offset-4" href={`mailto:${email}?subject=${encodeURIComponent(text.emailSubject)}`}>{email}</a></>}</span>
        </div>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button type="submit" disabled={submitState === "submitting"} className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-65">
          {submitState === "submitting" ? text.submitting : text.primaryCta}
          {submitState === "submitting" ? <LoaderCircle className="size-5 animate-spin" /> : <ArrowUpRight className="size-5" />}
        </button>
        <a href={localizedPath("/")} className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 px-6 text-base font-semibold text-foreground transition-colors hover:bg-white/5">{text.secondaryCta}</a>
      </div>
    </form>
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData breadcrumbs={structuredData.breadcrumbs} faqItems={[]} service={structuredData.service} page={structuredData.page} language={language} />
      <Navbar />
      <main>
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#020403] px-4 pb-16 pt-28 sm:px-6 md:px-10 md:pb-20 md:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_43%,rgba(119,252,117,0.13),transparent_31%),radial-gradient(ellipse_at_78%_36%,rgba(34,211,238,0.11),transparent_30%),linear-gradient(135deg,#020403,#07100b_52%,#010202)]" />
          <div aria-hidden="true" className="absolute -inset-x-[18%] -top-[22%] h-[118%] animate-cro-signal-orbit bg-[radial-gradient(ellipse_at_66%_34%,rgba(34,211,238,0.19),transparent_28%),radial-gradient(ellipse_at_34%_68%,rgba(119,252,117,0.24),transparent_31%)] opacity-90 blur-2xl will-change-transform motion-reduce:animate-none" />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.13] [background-image:radial-gradient(circle,rgba(119,252,117,0.4)_1px,transparent_1.4px)] [background-size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 size-[min(76vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/14 shadow-[0_0_100px_rgba(119,252,117,0.08)]">
            <span className="absolute inset-[8%] animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-primary/20 motion-reduce:animate-none" />
            <span className="absolute inset-[20%] animate-[spin_36s_linear_infinite_reverse] rounded-full border border-cyan-300/15 motion-reduce:animate-none" />
            <span className="absolute inset-[34%] animate-pulse rounded-full bg-primary/[0.045] shadow-[0_0_90px_rgba(119,252,117,0.12)] motion-reduce:animate-none" />
            <span className="absolute left-1/2 top-1/2 h-[122%] w-px -translate-x-1/2 -translate-y-1/2 rotate-[58deg] bg-gradient-to-b from-transparent via-cyan-300/35 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.28)]" />
          </div>

          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-65" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
            <defs><linearGradient id="diagnosis-hero-flow-primary" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#77fc75" stopOpacity="0" /><stop offset="30%" stopColor="#77fc75" stopOpacity="0.62" /><stop offset="72%" stopColor="#22d3ee" stopOpacity="0.3" /><stop offset="100%" stopColor="#77fc75" stopOpacity="0" /></linearGradient></defs>
            <g className="animate-cro-signal-orbit motion-reduce:animate-none">
              <path d="M-80 700 C260 510 430 790 790 650 S1290 420 1680 610" fill="none" stroke="url(#diagnosis-hero-flow-primary)" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="110 34" vectorEffect="non-scaling-stroke" />
              <path d="M80 215 C350 360 470 170 800 325 S1270 510 1560 245" fill="none" stroke="rgba(34,211,238,0.26)" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="7 17" vectorEffect="non-scaling-stroke" />
              <path d="M250 40 C420 250 570 290 800 450 S1160 680 1400 850" fill="none" stroke="rgba(119,252,117,0.2)" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="4 22" vectorEffect="non-scaling-stroke" />
            </g>
          </svg>

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
            {text.heroCards.map((item, index) => {
              const Icon = [Globe2, Target, BarChart3][index]
              const position = index === 0 ? "left-[7%] top-[30%]" : index === 1 ? "right-[7%] top-[32%]" : "bottom-[12%] right-[18%]"
              return <div key={item.title} className={`absolute flex items-center gap-3 rounded-full bg-black/25 px-4 py-3 text-base text-white/38 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_28px_rgba(119,252,117,0.07)] backdrop-blur-sm ${position}`}><span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary/65"><Icon className="size-4" /></span><span><strong className="block font-mono text-base font-medium uppercase text-primary/65">0{index + 1} · {item.title}</strong><span className="mt-1 block text-base">{item.text}</span></span></div>
            })}
          </div>

          <span aria-hidden="true" className="absolute left-0 top-[34%] h-1.5 w-28 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] motion-reduce:hidden" />
          <span aria-hidden="true" className="absolute left-0 top-[70%] h-1.5 w-36 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-[1px] [animation-delay:1.8s] motion-reduce:hidden" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.22)_58%,rgba(0,0,0,0.62)_100%)]" />

          <div className="pointer-events-none relative z-10 mx-auto w-full max-w-[95%] px-2 text-center lg:max-w-6xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-mono text-base font-semibold uppercase tracking-[0.08em] text-primary shadow-[0_0_28px_rgba(119,252,117,0.1)] backdrop-blur-sm"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />{text.eyebrow}</p>
            <h1 className="mx-auto bg-gradient-to-r from-white via-primary to-white bg-[length:200%_100%] bg-clip-text text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-normal text-transparent animate-shimmer motion-reduce:animate-none">{text.title}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.7] text-white/72 md:text-lg">{text.description}</p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#review-form" className="pointer-events-auto inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-[0_0_30px_rgba(119,252,117,0.28)] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98] sm:px-10">
                {text.primaryCta}
                <ArrowUpRight className="size-5" />
              </a>
              <a href={localizedPath("/")} className="pointer-events-auto inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-black/15 px-8 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-10">
                {text.secondaryCta}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:mt-14">
              {text.trust.map((item) => (
                <span key={item} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-base text-white/62 backdrop-blur-sm">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="growth-signals" className="scroll-mt-24 bg-black px-4 py-[50px] sm:px-6 md:px-10 md:py-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.08em] text-cyan-300">Diagnostic signals / 04</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.whyTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground md:text-lg">{text.whyDescription}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_82%_24%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_18%_76%,rgba(119,252,117,0.1),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(34,211,238,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.3)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div aria-hidden="true" className="absolute left-0 top-[36%] h-1.5 w-24 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] motion-reduce:hidden" />

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <span className="flex items-center gap-3 font-mono text-base uppercase text-primary"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />Growth blockers detected</span>
                <span className="font-mono text-base uppercase text-white/35">04 signals indexed</span>
              </div>

              <div className="relative z-10 mt-7 hidden min-w-0 grid-cols-[0.4fr_0.6fr] gap-7 lg:grid">
                <div role="group" aria-label={language === "zh" ? "增长问题信号目录" : "Growth signal directory"} className="space-y-2 rounded-[1.7rem] bg-black/20 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.065)]">
                  {text.whyItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = activeGrowthSignal === index
                    return (
                      <button type="button" key={item.title} aria-pressed={isActive} aria-controls="growth-signal-analysis" onClick={() => setActiveGrowthSignal(index)} className={"group relative flex min-h-[90px] w-full items-center gap-4 overflow-hidden rounded-[1.35rem] px-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none " + (isActive ? "bg-white/[0.09] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_30px_rgba(119,252,117,0.07)]" : "bg-transparent hover:bg-white/[0.035]")}>
                        <span className={"flex size-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300 " + (isActive ? "bg-primary text-black" : "bg-white/[0.045] text-cyan-300/45 group-hover:text-primary")}><Icon className="size-5" /></span>
                        <span className="min-w-0"><span className={"block font-mono text-base uppercase " + (isActive ? "text-primary" : "text-cyan-300/38")}>0{index + 1} · {growthSignalMeta[index].code}</span><strong className={"mt-1 block text-base leading-snug " + (isActive ? "text-white" : "text-white/52 group-hover:text-white/75")}>{item.title}</strong></span>
                        {isActive && <span aria-hidden="true" className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/65 to-transparent" />}
                      </button>
                    )
                  })}
                </div>

                <div id="growth-signal-analysis" role="region" aria-live="polite" aria-label={language === "zh" ? "当前增长问题分析" : "Current growth signal analysis"} className="relative flex min-h-[455px] min-w-0 items-center overflow-hidden rounded-[1.7rem] bg-black/18 px-7 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] xl:px-12">
                  <div aria-hidden="true" className="absolute right-[7%] top-[9%] size-64 rounded-full border border-dashed border-primary/12" />
                  <div aria-hidden="true" className="absolute right-[13%] top-[17%] size-44 animate-[spin_24s_linear_infinite] rounded-full border border-cyan-300/10 motion-reduce:animate-none" />
                  <div key={language + activeGrowthSignal} className="relative z-10 max-w-3xl animate-in fade-in slide-in-from-right-3 duration-300 motion-reduce:animate-none">
                    <div className="flex items-center gap-4"><span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">{(() => { const Icon = activeGrowthItem.icon; return <Icon className="size-6" /> })()}</span><div><span className="font-mono text-base uppercase text-primary">Signal / 0{activeGrowthSignal + 1} of 04</span><span className="mt-1 block font-mono text-base uppercase text-white/32">{activeGrowthMeta.code} detected</span></div></div>
                    <h3 className="mt-7 max-w-2xl text-3xl font-bold leading-tight text-white">{activeGrowthItem.title}</h3>
                    <p className="mt-6 max-w-2xl text-base leading-[1.9] text-white/62">{activeGrowthItem.text}</p>
                    <div className="mt-8 flex flex-wrap gap-2">{activeGrowthMeta[language].map((tag) => <span key={tag} className="rounded-full bg-white/[0.05] px-4 py-2 text-base text-white/55">{tag}</span>)}</div>
                    <div className="mt-9 flex items-center gap-3 font-mono text-base uppercase text-primary"><AlertCircle className="size-5" />Diagnostic signal detected</div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-6 space-y-2 lg:hidden">
                {text.whyItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeGrowthSignal === index
                  return (
                    <div key={item.title} className={"overflow-hidden rounded-[1.35rem] bg-black/18 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)] transition-colors duration-300 motion-reduce:transition-none " + (isActive ? "bg-white/[0.075]" : "")}>
                      <button type="button" aria-expanded={isActive} aria-controls={`mobile-growth-signal-${index}`} onClick={() => setActiveGrowthSignal(index)} className="flex min-h-[78px] w-full items-center gap-3 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <span className={"flex size-11 shrink-0 items-center justify-center rounded-full " + (isActive ? "bg-primary text-black" : "bg-white/[0.045] text-cyan-300/55")}><Icon className="size-5" /></span>
                        <span className="min-w-0"><span className="font-mono text-base uppercase text-primary/70">0{index + 1} · {growthSignalMeta[index].code}</span><strong className="mt-1 block text-base leading-snug text-white">{item.title}</strong></span>
                      </button>
                      {isActive && <div id={`mobile-growth-signal-${index}`} role="region" className="pb-6 pl-0 sm:pl-14"><p className="text-base leading-[1.8] text-white/60">{item.text}</p><div className="mt-5 flex flex-wrap gap-2">{growthSignalMeta[index][language].map((tag) => <span key={tag} className="rounded-full bg-black/20 px-3 py-2 text-base text-white/52">{tag}</span>)}</div><div className="mt-5 flex items-center gap-2 font-mono text-base uppercase text-primary"><AlertCircle className="size-5" />Signal detected</div></div>}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="review-scope" className="scroll-mt-24 bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.08em] text-primary">Review scope / 03</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.reviewTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground md:text-lg">{text.reviewDescription}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_18%_30%,rgba(119,252,117,0.095),transparent_25%),radial-gradient(circle_at_50%_36%,rgba(80,240,180,0.07),transparent_25%),radial-gradient(circle_at_82%_30%,rgba(34,211,238,0.08),transparent_25%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:rounded-[2.7rem_1.55rem_3rem_1.9rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(119,252,117,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.28)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div aria-hidden="true" className="absolute left-0 top-[43%] h-1.5 w-40 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-primary to-cyan-300/90 blur-[1px] motion-reduce:hidden" />

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <span className="flex items-center gap-3 font-mono text-base uppercase text-primary"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />Full spectrum review</span>
                <span className="font-mono text-base uppercase text-white/35">03 systems connected</span>
              </div>

              <div className="relative z-10 mt-8">
                <span aria-hidden="true" className="absolute bottom-3 left-6 top-3 w-px bg-gradient-to-b from-primary/12 via-primary/48 to-cyan-300/18 lg:hidden" />
                <div className="grid min-w-0 gap-2 lg:grid-cols-3 lg:gap-0">
                  {text.reviewAreas.map((item, index) => {
                    const Icon = item.icon
                    const tone = index === 0 ? "text-primary bg-primary/11 shadow-[0_0_28px_rgba(119,252,117,0.13)]" : index === 1 ? "text-[#6ef0b7] bg-[#6ef0b7]/10 shadow-[0_0_28px_rgba(110,240,183,0.1)]" : "text-cyan-300 bg-cyan-300/10 shadow-[0_0_28px_rgba(34,211,238,0.1)]"
                    const code = index === 0 ? "FOUNDATION" : index === 1 ? "JOURNEY" : "MEASUREMENT"
                    return (
                      <article key={item.title} className="relative min-w-0 py-6 pl-14 pr-2 lg:min-h-[390px] lg:px-7 lg:py-9 lg:text-center xl:px-10">
                        <div aria-hidden="true" className={"absolute inset-[8%] -z-10 rounded-full blur-3xl " + (index === 0 ? "bg-primary/[0.035]" : index === 1 ? "bg-[#6ef0b7]/[0.025]" : "bg-cyan-300/[0.025]")} />
                        <span className={"absolute left-0 top-6 flex size-12 items-center justify-center rounded-full lg:static lg:mx-auto lg:size-16 " + tone}><Icon className="size-5 lg:size-7" /></span>
                        <p className="font-mono text-base uppercase tracking-[0.04em] text-primary/72 lg:mt-6">0{index + 1} · {code}</p>
                        <h3 className="mt-2 text-xl font-bold leading-tight text-white lg:mt-3 lg:text-2xl">{item.title}</h3>
                        <p className="mt-4 text-base leading-[1.8] text-white/57">{item.text}</p>
                        <div className="mt-6 flex flex-wrap gap-2 lg:justify-center">
                          {item.items.map((detail) => <span key={detail} className="rounded-full bg-black/22 px-3 py-2 text-base text-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">{detail}</span>)}
                        </div>
                        <div className="mt-7 hidden items-center justify-center gap-2 font-mono text-base uppercase text-white/32 lg:flex"><span className="size-2 rounded-full bg-primary/65" />Scan channel online</div>
                      </article>
                    )
                  })}
                </div>

                <div className="relative mx-auto mt-4 flex max-w-2xl flex-col items-center overflow-hidden rounded-[42%_58%_52%_48%/58%_42%_58%_42%] bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.13),transparent_24%),linear-gradient(135deg,rgba(119,252,117,0.14),rgba(34,211,238,0.055),rgba(0,0,0,0.22))] px-6 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_55px_rgba(119,252,117,0.09)] lg:mt-1 lg:max-w-xl">
                  <span aria-hidden="true" className="absolute inset-4 animate-[spin_28s_linear_infinite] rounded-[45%_55%_48%_52%] border border-dashed border-primary/18 motion-reduce:animate-none" />
                  <Target className="relative size-7 text-primary" />
                  <strong className="relative mt-3 text-xl leading-tight text-white">Growth Review Coverage</strong>
                  <span className="relative mt-2 font-mono text-base uppercase text-primary">Engineering + Conversion + Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="fit-check" className="scroll-mt-24 bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px]">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.08em] text-cyan-300">Fit check / 04</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.fitTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground md:text-lg">{text.fitIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_12%_38%,rgba(119,252,117,0.11),transparent_25%),radial-gradient(circle_at_88%_62%,rgba(34,211,238,0.075),transparent_27%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(119,252,117,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.28)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div aria-hidden="true" className="absolute left-0 top-1/2 h-1.5 w-40 -translate-y-1/2 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-primary to-cyan-300/90 blur-[1px] motion-reduce:hidden" />

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <span className="flex items-center gap-3 font-mono text-base uppercase text-primary"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />Qualification signals online</span>
                <span className="font-mono text-base uppercase text-white/35">04 matches available</span>
              </div>

              <div className="relative z-10 mt-8">
                <svg aria-hidden="true" className="absolute inset-x-[4%] top-4 hidden h-[270px] w-[92%] lg:block" viewBox="0 0 1200 270" preserveAspectRatio="none">
                  <path d="M20 150 C170 28 290 28 410 145 S650 260 780 145 S1030 28 1180 135" fill="none" stroke="rgba(119,252,117,0.2)" strokeWidth="2" strokeDasharray="7 12" />
                  <path d="M20 150 C170 28 290 28 410 145 S650 260 780 145 S1030 28 1180 135" fill="none" stroke="rgba(34,211,238,0.08)" strokeWidth="11" opacity="0.45" />
                </svg>
                <span aria-hidden="true" className="absolute bottom-4 left-6 top-4 w-px bg-gradient-to-b from-primary/18 via-primary/58 to-cyan-300/20 lg:hidden" />

                <div className="relative grid gap-2 lg:min-h-[310px] lg:grid-cols-[repeat(4,minmax(0,1fr))_1.05fr] lg:items-center lg:gap-4">
                  {text.fitItems.map((item, index) => {
                    const position = index === 0 ? "lg:-translate-y-8" : index === 1 ? "lg:translate-y-9" : index === 2 ? "lg:translate-y-9" : "lg:-translate-y-8"
                    return (
                      <div key={item} className={"relative flex min-h-[84px] items-center gap-4 pl-14 pr-2 lg:min-h-0 lg:flex-col lg:justify-center lg:px-3 lg:text-center " + position}>
                        <span className="absolute left-0 flex size-12 items-center justify-center rounded-full bg-primary/11 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_25px_rgba(119,252,117,0.14)] lg:static lg:size-16"><CheckCircle2 className="size-5 lg:size-7" /></span>
                        <div><span className="font-mono text-base uppercase text-primary/70">Match / 0{index + 1}</span><p className="mt-1 text-base font-semibold leading-snug text-white lg:mt-3 lg:text-lg">{item}</p></div>
                      </div>
                    )
                  })}

                  <div className="relative mt-4 overflow-hidden rounded-[44%_56%_50%_50%/58%_44%_56%_42%] bg-[radial-gradient(circle_at_36%_18%,rgba(255,255,255,0.14),transparent_25%),linear-gradient(145deg,rgba(119,252,117,0.17),rgba(34,211,238,0.055),rgba(0,0,0,0.28))] px-6 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_0_50px_rgba(119,252,117,0.11)] lg:mt-0 lg:translate-y-3 lg:px-5">
                    <span aria-hidden="true" className="absolute inset-3 animate-[spin_24s_linear_infinite] rounded-[46%_54%_44%_56%] border border-dashed border-primary/20 motion-reduce:animate-none" />
                    <ShieldCheck className="relative mx-auto size-7 text-primary" />
                    <strong className="relative mt-3 block text-xl leading-tight text-white">Good fit detected</strong>
                    <a href="#review-form" className="relative mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-base font-bold text-primary-foreground shadow-[0_0_26px_rgba(119,252,117,0.22)] transition-all hover:brightness-110 active:scale-[0.98] lg:w-auto">{text.primaryCta}<ArrowUpRight className="size-5" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-10">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 text-base font-semibold uppercase tracking-[0.08em] text-primary">Review Form</p>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.formTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.formDescription}</p>
            </div>
            {reviewForm}
          </div>
        </section>

        <section className="bg-black px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="font-mono text-base font-semibold uppercase tracking-[0.08em] text-cyan-300">Review pipeline / 04</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.afterTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground md:text-lg">{text.afterIntro}</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_14%_24%,rgba(119,252,117,0.11),transparent_26%),radial-gradient(circle_at_86%_70%,rgba(34,211,238,0.09),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.058),rgba(255,255,255,0.012))] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_40px_110px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:rounded-[2.6rem_1.5rem_3rem_1.8rem] sm:px-6 sm:py-7 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(119,252,117,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.28)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-1">
                <span className="flex items-center gap-3 font-mono text-base uppercase text-primary"><span className="size-2 animate-pulse rounded-full bg-primary shadow-[0_0_14px_rgba(119,252,117,0.9)] motion-reduce:animate-none" />Request flow online</span>
                <span className="font-mono text-base uppercase text-white/35">04 stages connected</span>
              </div>

              <div className="relative z-10 mt-9 lg:mt-12">
                <span aria-hidden="true" className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-primary/55 via-cyan-300/30 to-cyan-300/10 lg:hidden" />
                <span aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-primary/55 via-cyan-300/30 to-cyan-300/12 lg:block" />
                <span aria-hidden="true" className="absolute left-[7%] top-[29px] hidden h-1.5 w-28 animate-cro-data-flow rounded-full bg-gradient-to-r from-transparent via-primary to-cyan-300/90 blur-[1px] motion-reduce:hidden lg:block" />

                <ol className="relative grid gap-2 lg:grid-cols-4 lg:gap-4">
                  {text.afterItems.map((item, index) => {
                    const StepIcon = [CheckCircle2, Clock3, Gauge, Send][index]
                    const isReceived = index === 0 && submitState === "success"
                    return (
                      <li key={item} className="relative min-h-[138px] pl-16 pr-2 lg:min-h-[230px] lg:px-4 lg:text-center">
                        <span className={`absolute left-0 top-0 flex size-12 items-center justify-center rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_28px_rgba(119,252,117,0.12)] transition-colors duration-300 lg:static lg:mx-auto lg:size-16 ${isReceived ? "bg-primary text-black" : index === 0 ? "bg-primary/12 text-primary" : "bg-cyan-300/10 text-cyan-300"}`}>
                          <StepIcon className="size-5 lg:size-7" />
                        </span>
                        <p className="font-mono text-base uppercase tracking-[0.04em] text-primary/75 lg:mt-6">0{index + 1} · {index === 0 ? "REQUEST" : index === 1 ? "QUEUE" : index === 2 ? "REVIEW" : "DIRECTION"}</p>
                        <h3 className="mt-2 text-xl font-bold leading-tight text-white">{item}</h3>
                        <p className="mt-3 text-base leading-[1.75] text-white/55">{afterStepMeta[language][index]}</p>
                        {index === 0 && (
                          <span aria-live="polite" className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-2 text-base font-medium ${isReceived ? "bg-primary/13 text-primary" : "bg-white/[0.045] text-white/45"}`}>
                            <span className={`size-2 rounded-full ${isReceived ? "bg-primary shadow-[0_0_12px_rgba(119,252,117,0.85)]" : "bg-white/30"}`} />
                            {isReceived ? (language === "zh" ? "已收到请求" : "Request received") : (language === "zh" ? "等待提交" : "Awaiting submission")}
                          </span>
                        )}
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 pb-[50px] pt-0 sm:px-6 md:px-10 md:pb-[100px] md:pt-0">
          <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[3.2rem_1.5rem_3.6rem_1.8rem] border border-white/25 bg-[linear-gradient(115deg,rgba(255,255,255,0.075),rgba(255,255,255,0.015)_38%,rgba(34,211,238,0.045)_72%,rgba(119,252,117,0.06))] px-6 py-11 shadow-[inset_0_2px_0_rgba(255,255,255,0.24),inset_0_-2px_0_rgba(119,252,117,0.1),0_45px_110px_rgba(0,0,0,0.5),0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-3xl sm:px-7 sm:py-12 md:px-14 md:py-16">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(34,211,238,0.15),transparent_28%),radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.08),transparent_32%)]" />
            <div aria-hidden="true" className="absolute inset-x-[7%] top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div aria-hidden="true" className="absolute -bottom-8 right-[8%] rotate-[-8deg] space-y-2 font-mono text-base leading-relaxed text-cyan-300/16">
              <p>growth signals · conversion · tracking</p>
              <p>review / audit / implementation</p>
              <p>priority · direction · next action</p>
            </div>
            <div aria-hidden="true" className="absolute bottom-[22%] right-[2%] h-px w-[62%] rotate-[-8deg] animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.55),rgba(119,252,117,0.8),transparent)] bg-[length:200%_100%] shadow-[0_0_25px_rgba(119,252,117,0.35)] motion-reduce:animate-none" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
              <div>
                <span className="mb-5 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_28px_rgba(119,252,117,0.12)]"><Send className="size-6" /></span>
                <p className="font-mono text-base font-semibold uppercase tracking-[0.08em] text-primary">Growth audit / next step</p>
                <h2 className="mt-3 max-w-4xl text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-normal">{text.auditCtaTitle}</h2>
                <p className="mt-4 max-w-3xl text-base leading-[1.75] text-muted-foreground md:text-lg">{text.auditCtaText}</p>
                <a href={localizedPath("/#services")} className="mt-5 inline-flex min-h-12 items-center text-base font-semibold text-cyan-200 underline decoration-cyan-300/35 underline-offset-4 transition-colors hover:text-primary focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  {text.auditCtaSecondary}
                </a>
              </div>

              <a href="#review-form" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-[0_0_28px_rgba(119,252,117,0.22)] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98] sm:w-fit lg:min-w-[220px]">
                {text.auditCtaButton}
                <ArrowUpRight className="size-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
