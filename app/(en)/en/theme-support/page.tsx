"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"

export default function ThemeSupportPage() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [message, setMessage] = useState("")
  const [startedAt] = useState(() => Date.now())

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === "sending") return
    setState("sending")
    setMessage("")
    try {
      const body = new FormData(event.currentTarget)
      body.set("startedAt", String(startedAt))
      const response = await fetch("/api/theme-support", { method: "POST", body })
      const result = await response.json() as { message?: string; ticketId?: string; receiptSent?: boolean }
      if (!response.ok) throw new Error(result.message || "We could not send your request. Please try again.")
      setState("sent")
      setMessage(`Request received. Your reference is ${result.ticketId}.${result.receiptSent ? " A receipt has been sent to your email." : " Save this reference; the email receipt is delayed."}`)
      event.currentTarget.reset()
    } catch (error) {
      setState("error")
      setMessage(error instanceof Error ? error.message : "We could not send your request. Please try again.")
    }
  }

  const field = "w-full rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-white outline-none focus:border-lime-300"
  return <main className="mx-auto max-w-3xl px-6 py-16 text-white">
    <p className="text-sm uppercase tracking-widest text-lime-300">WhaleLeap Studio</p>
    <h1 className="mt-4 text-4xl font-bold">WhaleLeap Custom Theme support</h1>
    <p className="mt-5 text-zinc-300">Ask about theme setup or report a theme issue. We reply within two business days. For a faster investigation, include the affected page and steps to reproduce the issue.</p>
    <Link href="/en/theme-docs" className="mt-5 inline-block text-lime-300 underline">Read theme documentation</Link>
    <form onSubmit={submit} className="mt-10 space-y-6" encType="multipart/form-data">
      <div className="hidden" aria-hidden="true"><label>Company website<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="block space-y-2"><span>Name *</span><input className={field} name="name" required maxLength={120} autoComplete="name" /></label>
      <label className="block space-y-2"><span>Email address *</span><input className={field} name="email" type="email" required maxLength={254} autoComplete="email" /></label>
      <label className="block space-y-2"><span>Shopify store URL *</span><input className={field} name="storeUrl" type="url" required maxLength={500} placeholder="https://your-store.myshopify.com" /></label>
      <label className="block space-y-2"><span>Theme name</span><input className={field} name="themeName" value="WhaleLeap Custom Theme" readOnly /></label>
      <label className="block space-y-2"><span>Issue and steps to reproduce *</span><textarea className={`${field} min-h-40`} name="problem" required maxLength={5000} placeholder="What happened? Which page is affected? What steps reproduce it?" /></label>
      <label className="block space-y-2"><span>Screenshot (optional; PNG, JPEG, or WebP; up to 5 MB)</span><input className={field} name="screenshot" type="file" accept="image/png,image/jpeg,image/webp" /></label>
      <button className="rounded-lg bg-lime-300 px-6 py-3 font-semibold text-black disabled:opacity-50" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send support request"}</button>
      {message && <p role="status" aria-live="polite" className={state === "error" ? "text-red-300" : "text-lime-300"}>{message}</p>}
    </form>
  </main>
}
