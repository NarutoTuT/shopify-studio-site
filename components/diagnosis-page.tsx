"use client"

import { FormEvent, useState } from "react"
import { AlertCircle, ArrowUpRight, BarChart3, CheckCircle2, Clock3, Globe2, LoaderCircle, Send, ShieldCheck, Target } from "lucide-react"

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
    eyebrow: "FREE SHOPIFY DIAGNOSIS",
    title: "先诊断卖货路径，再决定 Shopify 怎么建。",
    description:
      "这不是泛泛的建站咨询。你提交产品、市场、预算和当前问题后，我们会从页面结构、转化阻力、功能边界和数据追踪四个维度判断优先级。",
    primaryCta: "提交诊断信息",
    secondaryCta: "返回首页",
    trust: ["1 个工作日内初步回复", "不需要完整需求文档", "适合新建站与老站改版"],
    auditTitle: "我们会重点判断",
    auditItems: [
      {
        title: "页面是否匹配投放流量",
        text: "首页、商品页、集合页和信任内容是否能承接广告与自然搜索访客。",
        icon: Target,
      },
      {
        title: "成交链路是否有断点",
        text: "价格呈现、购物车、支付、物流、售后说明是否影响下单决策。",
        icon: ShieldCheck,
      },
      {
        title: "数据是否能支持优化",
        text: "GA4、GTM、转化事件和商品结构化数据是否能支撑投放复盘。",
        icon: BarChart3,
      },
      {
        title: "项目范围是否可控",
        text: "按预算、上线时间和 SKU 复杂度拆出必要功能与可后置功能。",
        icon: Globe2,
      },
    ],
    formTitle: "提交诊断信息",
    formDescription: "信息越具体，初步判断越准确。没有的字段可以留空。",
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
    emailIntro: "你好，我想预约 Shopify 免费诊断。以下是项目信息：",
    submitting: "正在提交…",
    submitSuccess: "提交成功，我们已收到你的诊断信息，将在 1 个工作日内回复。",
    submitError: "提交失败，请稍后重试，或直接发送邮件联系我们。",
    contactRequired: "请至少填写邮箱或微信，方便我们回复你。",
    emailInvalid: "请输入有效的邮箱地址。",
    responseTitle: "提交后会得到什么",
    responseItems: ["页面结构建议", "功能范围判断", "预算梯度建议", "下一步交付节奏"],
    noteTitle: "适合提交的情况",
    noteText: "已经有产品、准备投放广告、现有站点转化不稳，或需要判断模板方案与定制方案怎么选。",
    scenariosTitle: "4 类常见诊断场景",
    scenariosIntro: "不同入口进来的用户，诊断重点不同。我们会先判断你现在应该解决范围、体验、转化还是数据问题。",
    scenarios: [
      {
        title: "Shopify 新建站",
        text: "判断页面结构、SKU 复杂度、预算梯度、上线周期，以及模板方案和设计图定制方案怎么选。",
      },
      {
        title: "主题定制",
        text: "判断现有主题是否还能继续改，还是应该复制主题开发、重构模块，或重新规划整站。",
      },
      {
        title: "转化优化",
        text: "判断问题在商品页、集合页、购物车、支付物流、信任内容、移动端体验还是广告流量匹配。",
      },
      {
        title: "GA4/GTM 追踪",
        text: "判断当前事件是否能支持投放复盘，是否缺少 view_item、add_to_cart、begin_checkout、purchase 等关键事件。",
      },
    ],
    prepTitle: "提交前最好准备这些信息",
    prepIntro: "不用写完整需求文档，但这些信息越清楚，初步判断越准确。",
    prepItems: ["店铺链接或参考站", "产品品类与 SKU 数量", "预算范围和上线时间", "当前最明显的问题", "是否已有广告投放、GA4 或 GTM"],
    faqTitle: "诊断 FAQ",
    faqs: [
      {
        q: "这个诊断收费吗？",
        a: "初步诊断不收费。我们会先判断问题类型、优先级和大致范围；如果需要详细方案、页面设计、代码开发或长期优化，会再单独确认报价。",
      },
      {
        q: "多久会回复？",
        a: "通常 1 个工作日内给出初步回复。信息越完整，判断越快；如果涉及复杂系统、ERP/CRM、B2B 或多市场，可能需要补充资料后再评估。",
      },
      {
        q: "必须已经有 Shopify 店铺吗？",
        a: "不必须。新品牌可以提交产品、目标市场、参考站和预算；已有 Shopify 店铺则建议附上店铺链接和当前问题。",
      },
      {
        q: "预算还不确定可以提交吗？",
        a: "可以。预算不确定时，我们会先按 ¥20,000 起、¥35,000 起、¥50,000 起三个梯度判断哪些范围适合先做，哪些应该后置。",
      },
    ],
  },
  en: {
    eyebrow: "FREE SHOPIFY DIAGNOSIS",
    title: "Diagnose the selling path before deciding how to build Shopify.",
    description:
      "This is not generic website advice. After you share product, market, budget, and current blockers, we evaluate page structure, conversion friction, feature scope, and analytics priorities.",
    primaryCta: "Submit Diagnosis Brief",
    secondaryCta: "Back Home",
    trust: ["Initial reply within 1 business day", "No full requirements doc needed", "For new builds and redesigns"],
    auditTitle: "What we evaluate",
    auditItems: [
      {
        title: "Traffic-to-page fit",
        text: "Whether homepage, product pages, collections, and trust content can support paid and organic visitors.",
        icon: Target,
      },
      {
        title: "Conversion path gaps",
        text: "Whether pricing, cart, payments, logistics, and after-sales details create purchase friction.",
        icon: ShieldCheck,
      },
      {
        title: "Analytics readiness",
        text: "Whether GA4, GTM, conversion events, and product structured data support optimization.",
        icon: BarChart3,
      },
      {
        title: "Controlled scope",
        text: "How to split must-have and later-stage features based on budget, timing, and SKU complexity.",
        icon: Globe2,
      },
    ],
    formTitle: "Submit your brief",
    formDescription: "The more specific the input, the sharper the first diagnosis. Leave unknown fields blank.",
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
    emailIntro: "Hi, I would like to request a free Shopify diagnosis. Project details:",
    submitting: "Submitting…",
    submitSuccess: "Submitted successfully. We received your brief and will reply within 1 business day.",
    submitError: "Submission failed. Please try again later or contact us by email.",
    contactRequired: "Please enter at least an email or WeChat so we can reply.",
    emailInvalid: "Please enter a valid email address.",
    responseTitle: "What you get next",
    responseItems: ["Page structure advice", "Feature scope assessment", "Budget range guidance", "Delivery rhythm suggestion"],
    noteTitle: "Good fit",
    noteText: "Use this if you have products, plan to run ads, have unstable conversion, or need to choose between template and custom builds.",
    scenariosTitle: "4 Common Diagnosis Scenarios",
    scenariosIntro: "Different starting points need different decisions. We first judge whether the problem is scope, experience, conversion, or tracking.",
    scenarios: [
      {
        title: "New Shopify build",
        text: "Assess page structure, SKU complexity, budget tier, launch timeline, and whether a module build or custom design build fits.",
      },
      {
        title: "Theme customization",
        text: "Judge whether the current theme is worth customizing, should be duplicated for development, needs module refactoring, or should be rebuilt.",
      },
      {
        title: "Conversion optimization",
        text: "Find whether the issue is product pages, collections, cart, payments, logistics, trust content, mobile UX, or traffic fit.",
      },
      {
        title: "GA4/GTM tracking",
        text: "Check whether events support campaign review and whether key events like view_item, add_to_cart, begin_checkout, and purchase are missing.",
      },
    ],
    prepTitle: "Information to prepare before submitting",
    prepIntro: "You do not need a full requirements document. These details make the first diagnosis more accurate.",
    prepItems: ["Store URL or reference site", "Product category and SKU count", "Budget range and launch timeline", "Most obvious current problem", "Whether ads, GA4, or GTM are already active"],
    faqTitle: "Diagnosis FAQ",
    faqs: [
      {
        q: "Is the diagnosis free?",
        a: "The initial diagnosis is free. We first identify problem type, priority, and rough scope. Detailed plans, page design, code development, or ongoing optimization are quoted separately.",
      },
      {
        q: "How fast will you reply?",
        a: "Usually within 1 business day. More complete input leads to faster judgment. Complex systems, ERP/CRM, B2B, or multi-market work may require follow-up details.",
      },
      {
        q: "Do I need an existing Shopify store?",
        a: "No. New brands can submit product, target market, references, and budget. Existing stores should include the store URL and current blocker.",
      },
      {
        q: "Can I submit if my budget is not clear yet?",
        a: "Yes. If budget is unclear, we judge what fits the ¥20,000, ¥35,000, and ¥50,000 tiers, then separate must-have scope from later-stage work.",
      },
    ],
  },
}

const diagnosisStructuredData = {
  breadcrumbs: [
    { name: "首页", url: "https://whaleleap.studio/" },
    { name: "Shopify 免费诊断", url: "https://whaleleap.studio/diagnosis" },
  ],
  service: {
    name: "Shopify 免费诊断",
    description: "为跨境品牌判断 Shopify 建站、主题定制、转化优化和 GA4/GTM 数据追踪的优先级、范围和下一步交付节奏。",
    url: "https://whaleleap.studio/diagnosis",
  },
  page: {
    type: "WebPage" as const,
    name: "Shopify 免费诊断",
    description: "提交 Shopify 店铺链接、产品品类、目标市场、预算和当前问题，获取页面结构、功能范围、转化问题和交付节奏的初步诊断。",
    url: "https://whaleleap.studio/diagnosis",
    inLanguage: "zh-CN",
    about: ["Shopify 免费诊断", "Shopify 建站咨询", "Shopify 转化优化", "Shopify GA4/GTM 追踪"],
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageStructuredData
        breadcrumbs={diagnosisStructuredData.breadcrumbs}
        faqItems={copy.zh.faqs}
        service={diagnosisStructuredData.service}
        page={diagnosisStructuredData.page}
      />
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#111111] to-[#050505]" />
          <div className="absolute inset-x-0 top-28 mx-auto h-72 max-w-4xl rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="mb-5 inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {text.eyebrow}
              </p>
              <h1 className="max-w-4xl text-[clamp(2.4rem,5vw,4.8rem)] font-bold leading-[1.04] tracking-normal">
                {text.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-[1.7] text-muted-foreground md:text-lg">
                {text.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {text.trust.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-primary" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <Clock3 className="mb-4 size-6 text-primary" />
                  <h2 className="mb-3 text-base font-semibold">{text.responseTitle}</h2>
                  <div className="space-y-2">
                    {text.responseItems.map((item) => (
                      <p key={item} className="text-sm leading-relaxed text-muted-foreground">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <Send className="mb-4 size-6 text-primary" />
                  <h2 className="mb-3 text-base font-semibold">{text.noteTitle}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{text.noteText}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur md:p-8">
              <div className="mb-7">
                <h2 className="text-2xl font-bold tracking-normal">{text.formTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text.formDescription}</p>
              </div>

              <div className="grid gap-5">
                <Field label={text.labels.storeUrl}>
                  <input
                    className={inputClass()}
                    value={form.storeUrl}
                    onChange={(event) => updateField("storeUrl", event.target.value)}
                    placeholder={text.placeholders.storeUrl}
                    type="url"
                  />
                </Field>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label={text.labels.category}>
                    <input
                      className={inputClass()}
                      value={form.category}
                      onChange={(event) => updateField("category", event.target.value)}
                      placeholder={text.placeholders.category}
                    />
                  </Field>
                  <Field label={text.labels.market}>
                    <input
                      className={inputClass()}
                      value={form.market}
                      onChange={(event) => updateField("market", event.target.value)}
                      placeholder={text.placeholders.market}
                    />
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
                  <textarea
                    className={`${inputClass()} min-h-32 py-3`}
                    value={form.problem}
                    onChange={(event) => updateField("problem", event.target.value)}
                    placeholder={text.placeholders.problem}
                  />
                </Field>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label={text.labels.email}>
                    <input
                      className={inputClass()}
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder={text.placeholders.email}
                      type="email"
                      autoComplete="email"
                      aria-describedby="contact-submit-status"
                    />
                  </Field>
                  <Field label={text.labels.wechat}>
                    <input
                      className={inputClass()}
                      value={form.wechat}
                      onChange={(event) => updateField("wechat", event.target.value)}
                      placeholder={text.placeholders.wechat}
                      autoComplete="off"
                      aria-describedby="contact-submit-status"
                    />
                  </Field>
                </div>

                <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="company-website">Company website</label>
                  <input
                    id="company-website"
                    name="companyWebsite"
                    value={form.companyWebsite}
                    onChange={(event) => updateField("companyWebsite", event.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
              </div>

              {submitState !== "idle" && submitState !== "submitting" && (
                <div
                  id="contact-submit-status"
                  role={submitState === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={`mt-5 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm leading-relaxed ${
                    submitState === "success"
                      ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
                      : "border-red-400/25 bg-red-400/10 text-red-200"
                  }`}
                >
                  {submitState === "success" ? (
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                  ) : (
                    <AlertCircle className="mt-0.5 size-4 shrink-0" />
                  )}
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
                <a
                  href="/"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
                >
                  {text.secondaryCta}
                </a>
              </div>
            </form>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black px-6 py-16 md:px-10">
          <div className="mx-auto max-w-[1500px]">
            <h2 className="mb-6 text-2xl font-bold tracking-normal">{text.auditTitle}</h2>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {text.auditItems.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <Icon className="mb-5 size-6 text-primary" />
                    <h3 className="mb-3 text-base font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">{text.scenariosTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.scenariosIntro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {text.scenarios.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-semibold tracking-normal">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">{text.prepTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text.prepIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {text.prepItems.map((item) => (
                <p key={item} className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <h2 className="mb-8 text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight tracking-normal">{text.faqTitle}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {text.faqs.map((item) => (
                <article key={item.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-semibold tracking-normal">{item.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
