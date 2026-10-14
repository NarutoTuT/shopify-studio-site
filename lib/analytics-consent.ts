export const ANALYTICS_CONSENT_STORAGE_KEY = "whaleleap_analytics_consent_v1"
export const ANALYTICS_CONSENT_CHANGED_EVENT = "whaleleap:analytics-consent-changed"

export type AnalyticsConsentChoice = "granted" | "denied" | null

type ReadStorageLike = Pick<Storage, "getItem">
type WriteStorageLike = Pick<Storage, "setItem">

export function readAnalyticsConsent(storage?: ReadStorageLike): AnalyticsConsentChoice {
  try {
    const target = storage ?? (typeof window !== "undefined" ? window.localStorage : undefined)
    const stored = target?.getItem(ANALYTICS_CONSENT_STORAGE_KEY)
    if (!stored) return null
    const parsed = JSON.parse(stored) as { choice?: unknown }
    return parsed.choice === "granted" || parsed.choice === "denied" ? parsed.choice : null
  } catch {
    return null
  }
}

export function storeAnalyticsConsent(choice: Exclude<AnalyticsConsentChoice, null>, storage?: WriteStorageLike) {
  try {
    const target = storage ?? (typeof window !== "undefined" ? window.localStorage : undefined)
    target?.setItem(ANALYTICS_CONSENT_STORAGE_KEY, JSON.stringify({ choice, updatedAt: new Date().toISOString() }))
  } catch {
    // The in-memory choice still applies when storage is unavailable.
  }
}
