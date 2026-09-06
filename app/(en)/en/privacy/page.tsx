import { LanguageProvider } from "@/components/language-provider"
import { PrivacyPage } from "@/components/privacy-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "Privacy Policy",
  description: "Learn how the WhaleLeap Studio website and WhaleLeap GSC Reader collect, use, store, and protect form, analytics, and Google Search Console data.",
  path: "/en/privacy",
  language: "en",
  zhPath: "/privacy",
  enPath: "/en/privacy",
})

export default function Page() {
  return (
    <LanguageProvider initialLanguage="en">
      <SmoothScrollProvider>
        <PrivacyPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
