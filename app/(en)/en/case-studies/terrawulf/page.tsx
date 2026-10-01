import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { TerrawulfCaseStudyPage } from "@/components/terrawulf-case-study-page"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "Terrawulf eBike Shopify Engineering Case Study",
  description: "Public design-to-live and Shopify engineering evidence for Terrawulf's electric dirt bike storefront, M7 product page, merchant-editable sections, and responsive QA.",
  path: "/en/case-studies/terrawulf",
  language: "en",
  zhPath: "/case-studies/terrawulf",
  enPath: "/en/case-studies/terrawulf",
  type: "article",
})

export default function Page() {
  return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><TerrawulfCaseStudyPage language="en" /></SmoothScrollProvider></LanguageProvider>
}
