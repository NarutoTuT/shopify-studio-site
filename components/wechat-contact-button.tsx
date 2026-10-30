"use client"

import { MessageCircle } from "lucide-react"
import { readAnalyticsConsent } from "@/lib/analytics-consent"

export function WechatContactButton() {
  async function copyWechat() {
    try { await navigator.clipboard.writeText("11058895969") } catch { /* Copy can be unavailable in restricted browsers. */ }
    if (readAnalyticsConsent() === "granted") {
      try { (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "contact_click", { method: "wechat" }) } catch { /* Analytics is optional. */ }
    }
  }
  return <button type="button" onClick={copyWechat} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/[0.055] px-4 text-base transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60" title="复制微信号">
    <MessageCircle className="size-5 text-cyan-300" />WeChat 11058895969
  </button>
}
