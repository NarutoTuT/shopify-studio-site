import { LanguageProvider } from "@/components/language-provider"
import { SilkGearCaseStudyPage } from "@/components/silkgear-case-study-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "SilkGear Shopify Case Study: Premium Technology Retail",
  description: "How WhaleLeap Studio designed and developed SilkGear's Shopify storefront, with public design-to-live evidence and clear delivery boundaries.",
  path: "/en/case-studies/silkgear",
  language: "en",
  zhPath: "/case-studies/silkgear",
  enPath: "/en/case-studies/silkgear",
  type: "article",
})

export default function Page() {
  return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><SilkGearCaseStudyPage language="en" /></SmoothScrollProvider></LanguageProvider>
}
