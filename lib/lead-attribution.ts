import { readAnalyticsConsent } from "@/lib/analytics-consent"

export const FIRST_TOUCH_STORAGE_KEY = "whaleleap_first_touch_v1"
export const SESSION_TOUCH_STORAGE_KEY = "whaleleap_session_touch_v1"
export const CTA_SOURCE_STORAGE_KEY = "whaleleap_cta_source_v1"

export type AttributionTouch = {
  landingPath: string
  referrerHost: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmContent: string
  utmTerm: string
  capturedAt: string
}

export type LeadAttribution = {
  firstTouch: AttributionTouch | null
  sessionTouch: AttributionTouch | null
  ctaSource: string
}

type ReadStorage = Pick<Storage, "getItem">
type WriteStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">

function truncate(value: string, length = 300) {
  return value.trim().slice(0, length)
}

export function createAttributionTouch(href: string, referrer: string, capturedAt = new Date().toISOString()): AttributionTouch {
  const url = new URL(href)
  let referrerHost = ""
  try {
    referrerHost = referrer ? new URL(referrer).hostname : ""
  } catch {
    referrerHost = ""
  }

  return {
    landingPath: truncate(`${url.pathname}${url.hash}`, 500),
    referrerHost: truncate(referrerHost, 200),
    utmSource: truncate(url.searchParams.get("utm_source") || ""),
    utmMedium: truncate(url.searchParams.get("utm_medium") || ""),
    utmCampaign: truncate(url.searchParams.get("utm_campaign") || ""),
    utmContent: truncate(url.searchParams.get("utm_content") || ""),
    utmTerm: truncate(url.searchParams.get("utm_term") || ""),
    capturedAt,
  }
}

function readJson<T>(storage: ReadStorage, key: string): T | null {
  try {
    const value = storage.getItem(key)
    return value ? (JSON.parse(value) as T) : null
  } catch {
    return null
  }
}

export function persistAttribution(touch: AttributionTouch, localStorage: WriteStorage, sessionStorage: WriteStorage) {
  if (!localStorage.getItem(FIRST_TOUCH_STORAGE_KEY)) {
    localStorage.setItem(FIRST_TOUCH_STORAGE_KEY, JSON.stringify(touch))
  }
  if (!sessionStorage.getItem(SESSION_TOUCH_STORAGE_KEY)) {
    sessionStorage.setItem(SESSION_TOUCH_STORAGE_KEY, JSON.stringify(touch))
  }
}

export function clearAttribution(localStorage: WriteStorage, sessionStorage: WriteStorage) {
  localStorage.removeItem(FIRST_TOUCH_STORAGE_KEY)
  sessionStorage.removeItem(SESSION_TOUCH_STORAGE_KEY)
  sessionStorage.removeItem(CTA_SOURCE_STORAGE_KEY)
}

export function deriveCtaSource(pathname: string) {
  const normalized = pathname.replace(/^\/en(?=\/|$)/, "") || "/"
  if (normalized === "/") return "homepage"
  const parts = normalized.split("/").filter(Boolean)
  if (parts[0] === "services" && parts[1]) return `service:${parts[1]}`
  if (parts[0] === "case-studies" && parts[1]) return `case-study:${parts[1]}`
  if (parts[0] === "pricing") return "pricing"
  if (parts[0] === "learn") return parts[1] ? `learn:${parts[1]}` : "learn"
  return `page:${parts.join(":") || "unknown"}`
}

export function readLeadAttribution(
  localStorage?: ReadStorage,
  sessionStorage?: ReadStorage,
  consentStorage?: ReadStorage,
): LeadAttribution {
  if (typeof window === "undefined" && (!localStorage || !sessionStorage || !consentStorage)) {
    return { firstTouch: null, sessionTouch: null, ctaSource: "" }
  }

  const local = localStorage ?? window.localStorage
  const session = sessionStorage ?? window.sessionStorage
  if (readAnalyticsConsent(consentStorage ?? local) !== "granted") {
    return { firstTouch: null, sessionTouch: null, ctaSource: "" }
  }

  return {
    firstTouch: readJson<AttributionTouch>(local, FIRST_TOUCH_STORAGE_KEY),
    sessionTouch: readJson<AttributionTouch>(session, SESSION_TOUCH_STORAGE_KEY),
    ctaSource: truncate(session.getItem(CTA_SOURCE_STORAGE_KEY) || "", 200),
  }
}
