"use client"

import { FormEvent, useRef, useState } from "react"
import { readLeadAttribution } from "@/lib/lead-attribution"

const options = ["转化低", "速度慢", "改版", "追踪不准", "其他"]
const budgets = ["2 万以下", "2–3.5 万", "3.5–5 万", "5 万以上"]
const inputClass = "min-h-12 w-full rounded-xl border border-white/20 bg-white/5 px-4 text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"

export function HomeStoreCheckForm() {
  const [status, setStatus] = useState("")
  const [pending, setPending] = useState(false)
  const [startedAt, setStartedAt] = useState(() => Date.now())
  const inFlight = useRef(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (inFlight.current) return
    const form = event.currentTarget
    const data = new FormData(form)
    const email = String(data.get("email") || "").trim()
    const wechat = String(data.get("wechat") || "").trim()
    const whatsapp = String(data.get("whatsapp") || "").trim()
    if (!email && !wechat && !whatsapp) {
      setStatus("请填写邮箱、微信或 WhatsApp 中至少一项。")
      return
    }
    inFlight.current = true
    setPending(true)
    setStatus("")
    try {
      const attribution = readLeadAttribution()
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "store_check",
          storeUrl: data.get("storeUrl"),
          problem: `${data.get("problemType")}: ${data.get("problem")}`,
          budget: data.get("budget"),
          timeline: data.get("timeline"),
          email, wechat, whatsapp,
          companyWebsite: data.get("companyWebsite"),
          startedAt, language: "zh",
          pageUrl: window.location.href,
          referrer: document.referrer,
          ctaSource: attribution.ctaSource || "homepage_form",
          firstTouchLandingPath: attribution.firstTouch?.landingPath || "",
          firstTouchReferrerHost: attribution.firstTouch?.referrerHost || "",
          firstTouchUtmSource: attribution.firstTouch?.utmSource || "",
          firstTouchUtmMedium: attribution.firstTouch?.utmMedium || "",
          firstTouchUtmCampaign: attribution.firstTouch?.utmCampaign || "",
          sessionLandingPath: attribution.sessionTouch?.landingPath || "",
          sessionReferrerHost: attribution.sessionTouch?.referrerHost || "",
          sessionUtmSource: attribution.sessionTouch?.utmSource || "",
          sessionUtmMedium: attribution.sessionTouch?.utmMedium || "",
          sessionUtmCampaign: attribution.sessionTouch?.utmCampaign || "",
        }),
      })
      const result = await response.json() as { accepted?: boolean; submissionId?: string; message?: string }
      if (!response.ok || !result.accepted) throw new Error(result.message || "提交未成功，请稍后重试。")
      form.reset()
      setStartedAt(Date.now())
      setStatus("感谢提交。我们会先了解店铺现状与需求，再联系你讨论下一步。")
      try {
        ;(window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "generate_lead", {
          submission_id: result.submissionId,
          lead_source: "homepage_store_check",
          cta_source: attribution.ctaSource || "homepage_form",
        })
      } catch { /* Analytics is optional. */ }
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "提交失败，请稍后重试。")
    } finally {
      inFlight.current = false
      setPending(false)
    }
  }

  return <section id="store-check" className="bg-background px-4 py-20 sm:px-6 lg:px-10">
    <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
      <h2 className="text-3xl font-bold">免费店铺检查</h2>
      <p className="mt-3 text-base text-muted-foreground">先了解你的店铺和问题；是否提供书面诊断，会根据项目情况确认。</p>
      <form onSubmit={submit} className="mt-8 grid gap-5">
        <label className="grid gap-2 text-base">店铺链接 *<input name="storeUrl" type="url" required placeholder="https://example.com" className={inputClass} /></label>
        <label className="grid gap-2 text-base">想解决的问题 *<select name="problemType" required defaultValue="" className={inputClass}><option className="text-black" value="" disabled>请选择</option>{options.map((value) => <option className="text-black" key={value}>{value}</option>)}</select></label>
        <label className="grid gap-2 text-base">补充说明 *<textarea name="problem" required rows={3} className={`${inputClass} py-3`} /></label>
        <label className="grid gap-2 text-base">预算区间<select name="budget" defaultValue="" className={inputClass}><option className="text-black" value="">暂不确定</option>{budgets.map((value) => <option className="text-black" key={value}>{value}</option>)}</select></label>
        <label className="grid gap-2 text-base">期望上线时间<input name="timeline" className={inputClass} /></label>
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="grid gap-2 text-base">邮箱<input name="email" type="email" autoComplete="email" className={inputClass} /></label>
          <label className="grid gap-2 text-base">微信<input name="wechat" className={inputClass} /></label>
          <label className="grid gap-2 text-base">WhatsApp<input name="whatsapp" className={inputClass} /></label>
        </div>
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[10000px]" />
        <p className="text-base text-muted-foreground">邮箱、微信或 WhatsApp 至少填写一项。免费阶段为初步沟通，不保证完整审计报告或统一回复时间。</p>
        <button type="submit" disabled={pending} className="min-h-12 rounded-full bg-primary px-6 text-base font-bold text-primary-foreground disabled:opacity-60">{pending ? "提交中…" : "提交店铺信息"}</button>
        <p role="status" aria-live="polite" className="text-base">{status}</p>
      </form>
    </div>
  </section>
}
