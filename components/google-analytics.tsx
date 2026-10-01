"use client"

import { useEffect, useState } from "react"

export const ANALYTICS_CONSENT_EVENT = "whaleleap:open-consent-settings"

const CONSENT_STORAGE_KEY = "whaleleap_analytics_consent_v1"
const GA_SCRIPT_ID = "whaleleap-google-analytics"

type ConsentChoice = "granted" | "denied" | null
type Language = "zh" | "en"

type GoogleWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}

const copy = {
  zh: {
    label: "网站分析设置",
    title: "帮助我们了解网站表现",
    description: "我们仅在你同意后加载 Google Analytics，用于了解页面访问和改进体验。拒绝不会影响网站功能。",
    accept: "接受分析",
    reject: "仅必要功能",
    privacy: "查看隐私政策",
  },
  en: {
    label: "Website analytics settings",
    title: "Help us understand website performance",
    description: "We load Google Analytics only after you consent, to understand page visits and improve the experience. Declining does not affect site functionality.",
    accept: "Accept analytics",
    reject: "Necessary only",
    privacy: "View privacy policy",
  },
} satisfies Record<Language, Record<string, string>>

function readStoredConsent(): ConsentChoice {
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!stored) return null
    const parsed = JSON.parse(stored) as { choice?: unknown }
    return parsed.choice === "granted" || parsed.choice === "denied" ? parsed.choice : null
  } catch {
    return null
  }
}

function storeConsent(choice: Exclude<ConsentChoice, null>) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({ choice, updatedAt: new Date().toISOString() }))
  } catch {
    // Consent still applies for the current page when storage is unavailable.
  }
}

function clearGoogleAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"))

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${window.location.hostname}; SameSite=Lax`
  }
}

function enableGoogleAnalytics(measurementId: string) {
  const googleWindow = window as GoogleWindow
  ;(googleWindow as unknown as Record<string, boolean>)[`ga-disable-${measurementId}`] = false
  googleWindow.dataLayer = googleWindow.dataLayer || []
  googleWindow.gtag = googleWindow.gtag || function gtag(...args: unknown[]) {
    googleWindow.dataLayer?.push(args)
  }

  googleWindow.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  })
  googleWindow.gtag("js", new Date())
  googleWindow.gtag("config", measurementId)

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement("script")
    script.id = GA_SCRIPT_ID
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)
  }
}

function disableGoogleAnalytics(measurementId: string) {
  const googleWindow = window as GoogleWindow
  ;(googleWindow as unknown as Record<string, boolean>)[`ga-disable-${measurementId}`] = true
  googleWindow.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  })
  clearGoogleAnalyticsCookies()
}

export function GoogleAnalytics({ language }: { language: Language }) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const [choice, setChoice] = useState<ConsentChoice>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const storedChoice = readStoredConsent()
    setChoice(storedChoice)
    setIsOpen(storedChoice === null)

    const openSettings = () => setIsOpen(true)
    window.addEventListener(ANALYTICS_CONSENT_EVENT, openSettings)
    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, openSettings)
  }, [])

  useEffect(() => {
    if (!measurementId || choice !== "granted") return
    enableGoogleAnalytics(measurementId)
  }, [choice, measurementId])

  if (!measurementId || !isOpen) return null

  const text = copy[language]
  const privacyPath = language === "zh" ? "/privacy" : "/en/privacy"

  const choose = (nextChoice: Exclude<ConsentChoice, null>) => {
    if (nextChoice === "denied") disableGoogleAnalytics(measurementId)
    storeConsent(nextChoice)
    setChoice(nextChoice)
    setIsOpen(false)
  }

  return (
    <section aria-label={text.label} className="fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-[980px] rounded-lg border border-white/15 bg-[#080b09]/[0.97] p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:inset-x-6 sm:p-6" role="dialog">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-lg font-semibold">{text.title}</h2>
          <p className="mt-2 text-base leading-relaxed text-white/70">
            {text.description}{" "}
            <a className="underline decoration-white/35 underline-offset-4 hover:text-primary focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60" href={privacyPath}>{text.privacy}</a>
          </p>
        </div>
        <div className="flex shrink-0 flex-col-reverse gap-3 sm:flex-row">
          <button className="min-h-12 rounded-full border border-white/20 px-5 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70" onClick={() => choose("denied")} type="button">{text.reject}</button>
          <button className="min-h-12 rounded-full bg-primary px-5 text-base font-semibold text-primary-foreground transition-[filter] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70" onClick={() => choose("granted")} type="button">{text.accept}</button>
        </div>
      </div>
    </section>
  )
}
