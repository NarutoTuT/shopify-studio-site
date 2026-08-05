import { NextResponse } from "next/server"

type ContactPayload = {
  storeUrl?: unknown
  category?: unknown
  market?: unknown
  stage?: unknown
  skuCount?: unknown
  budget?: unknown
  timeline?: unknown
  problem?: unknown
  email?: unknown
  wechat?: unknown
  companyWebsite?: unknown
  language?: unknown
  startedAt?: unknown
  pageUrl?: unknown
  referrer?: unknown
  utmSource?: unknown
  utmMedium?: unknown
  utmCampaign?: unknown
}

const labels = {
  zh: {
    subject: "Shopify 免费诊断咨询",
    intro: "收到一份新的 Shopify 免费诊断信息：",
    fields: ["店铺链接", "产品品类", "目标市场", "当前阶段", "SKU 数量", "预算区间", "上线时间", "主要问题", "邮箱", "微信", "提交页面", "来源页面", "UTM Source", "UTM Medium", "UTM Campaign"],
    invalid: "请至少填写邮箱或微信，并检查邮箱格式。",
    failed: "提交失败，请稍后重试。",
    rateLimited: "提交过于频繁，请稍后再试。",
    confirmationSubject: "我们已收到你的 Shopify 诊断信息",
    confirmationTitle: "诊断信息已收到",
    confirmationBody: "感谢你的提交。我们会查看你的店铺、产品与当前问题，通常在 1 个工作日内回复。",
  },
  en: {
    subject: "Free Shopify diagnosis inquiry",
    intro: "A new Shopify diagnosis brief was submitted:",
    fields: ["Store URL", "Product category", "Target market", "Current stage", "SKU count", "Budget", "Timeline", "Main problem", "Email", "WeChat", "Page URL", "Referrer", "UTM Source", "UTM Medium", "UTM Campaign"],
    invalid: "Please enter an email or WeChat and check the email format.",
    failed: "Submission failed. Please try again later.",
    rateLimited: "Too many submissions. Please try again later.",
    confirmationSubject: "We received your Shopify diagnosis brief",
    confirmationTitle: "Your brief has been received",
    confirmationBody: "Thanks for submitting your details. We will review your store, product, and current blockers and usually reply within 1 business day.",
  },
} as const

const fieldKeys = ["storeUrl", "category", "market", "stage", "skuCount", "budget", "timeline", "problem", "email", "wechat", "pageUrl", "referrer", "utmSource", "utmMedium", "utmCampaign"] as const
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const rateLimitWindowMs = 10 * 60 * 1000
const rateLimitMax = 5
const submissionsByIp = new Map<string, number[]>()

function clean(value: unknown, maxLength = 1000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }
    return entities[character]
  })
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (submissionsByIp.get(ip) || []).filter((timestamp) => now - timestamp < rateLimitWindowMs)
  recent.push(now)
  submissionsByIp.set(ip, recent)
  return recent.length > rateLimitMax
}

async function sendEmail(apiKey: string, body: Record<string, unknown>, idempotencyKey: string) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(body),
  })
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ message: labels.zh.invalid }, { status: 400 })
  }

  const language = payload.language === "en" ? "en" : "zh"
  const text = labels[language]
  const values = fieldKeys.map((key) => clean(payload[key], key === "problem" ? 3000 : 500))
  const email = values[fieldKeys.indexOf("email")]
  const wechat = values[fieldKeys.indexOf("wechat")]
  const honeypot = clean(payload.companyWebsite)
  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : 0

  if (honeypot || !startedAt || Date.now() - startedAt < 1500) {
    return NextResponse.json({ ok: true })
  }

  if ((!email && !wechat) || (email && !emailPattern.test(email))) {
    return NextResponse.json({ message: text.invalid }, { status: 400 })
  }

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
  const ip = forwardedFor || request.headers.get("x-real-ip") || "unknown"

  if (isRateLimited(ip)) {
    return NextResponse.json({ message: text.rateLimited }, { status: 429 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL
  const to = process.env.CONTACT_EMAIL_TO || "liaoshenyuan1999053@gmail.com"

  if (!apiKey || !from) {
    console.error("Contact form email is not configured: RESEND_API_KEY and RESEND_FROM_EMAIL are required.")
    return NextResponse.json({ message: text.failed }, { status: 503 })
  }

  const rows = fieldKeys.map((_, index) => `${text.fields[index]}: ${values[index] || "-"}`)
  const htmlRows = fieldKeys
    .map((_, index) => `<tr><td style="padding:8px 16px 8px 0;color:#6b7280;vertical-align:top">${escapeHtml(text.fields[index])}</td><td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(values[index] || "-")}</td></tr>`)
    .join("")

  try {
    const submissionId = crypto.randomUUID()
    const response = await sendEmail(
      apiKey,
      {
          from,
          to: [to],
          reply_to: email || undefined,
          subject: text.subject,
          text: [text.intro, "", ...rows].join("\n"),
          html: `<div style="font-family:Arial,sans-serif;color:#111827"><p>${escapeHtml(text.intro)}</p><table style="border-collapse:collapse">${htmlRows}</table></div>`,
      },
      `diagnosis-${submissionId}`,
    )

    if (!response.ok) {
      const providerError = await response.text()
      console.error("Resend rejected contact form email:", response.status, providerError)
      return NextResponse.json({ message: text.failed }, { status: 502 })
    }

    if (email) {
      const confirmation = await sendEmail(
        apiKey,
        {
          from,
          to: [email],
          reply_to: to,
          subject: text.confirmationSubject,
          text: `${text.confirmationTitle}\n\n${text.confirmationBody}`,
          html: `<div style="font-family:Arial,sans-serif;color:#111827;line-height:1.7"><h1 style="font-size:24px">${escapeHtml(text.confirmationTitle)}</h1><p>${escapeHtml(text.confirmationBody)}</p></div>`,
        },
        `diagnosis-confirmation-${submissionId}`,
      )

      if (!confirmation.ok) {
        console.error("Resend rejected diagnosis confirmation email:", confirmation.status, await confirmation.text())
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form email failed:", error)
    return NextResponse.json({ message: text.failed }, { status: 502 })
  }
}
