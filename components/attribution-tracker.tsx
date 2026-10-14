"use client"

import { useEffect } from "react"

import { ANALYTICS_CONSENT_CHANGED_EVENT, readAnalyticsConsent } from "@/lib/analytics-consent"
import {
  CTA_SOURCE_STORAGE_KEY,
  clearAttribution,
  createAttributionTouch,
  deriveCtaSource,
  persistAttribution,
} from "@/lib/lead-attribution"

export function AttributionTracker() {
  useEffect(() => {
    const syncAttribution = () => {
      try {
        if (readAnalyticsConsent() === "granted") {
          persistAttribution(createAttributionTouch(window.location.href, document.referrer), window.localStorage, window.sessionStorage)
        } else {
          clearAttribution(window.localStorage, window.sessionStorage)
        }
      } catch {
        // Attribution must never affect navigation or form availability.
      }
    }

    const captureCta = (event: MouseEvent) => {
      try {
        if (readAnalyticsConsent() !== "granted") return
        const target = event.target instanceof Element ? event.target.closest("a") : null
        const href = target?.getAttribute("href")
        if (!href) return
        const destination = new URL(href, window.location.href)
        if (destination.origin !== window.location.origin || !/^\/(?:en\/)?diagnosis\/?$/.test(destination.pathname)) return
        window.sessionStorage.setItem(CTA_SOURCE_STORAGE_KEY, deriveCtaSource(window.location.pathname))
      } catch {
        // CTA attribution is optional and must not block the click.
      }
    }

    syncAttribution()
    window.addEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, syncAttribution)
    document.addEventListener("click", captureCta, true)
    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, syncAttribution)
      document.removeEventListener("click", captureCta, true)
    }
  }, [])

  return null
}
