import { LanguageProvider } from "@/components/language-provider"
import { LuokavrionCaseStudyPage } from "@/components/luokavrion-case-study-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "LUOKAVRION Shopify Theme Customization Case Study",
  description: "Verified Shopify theme customization for LUOKAVRION, covering Liquid sections, JSON templates, Theme Editor configuration, responsive implementation, and Three.js interaction.",
  path: "/en/case-studies/luokavrion",
  language: "en",
  zhPath: "/case-studies/luokavrion",
  enPath: "/en/case-studies/luokavrion",
  type: "article",
})

export default function Page() {
  return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><LuokavrionCaseStudyPage language="en" /></SmoothScrollProvider></LanguageProvider>
}
