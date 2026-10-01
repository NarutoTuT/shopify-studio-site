"use client"

import { ANALYTICS_CONSENT_EVENT } from "@/components/google-analytics"

export function PrivacySettingsButton({ label }: { label: string }) {
  return (
    <button
      className="text-white/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-primary focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
      onClick={() => window.dispatchEvent(new Event(ANALYTICS_CONSENT_EVENT))}
      type="button"
    >
      {label}
    </button>
  )
}
