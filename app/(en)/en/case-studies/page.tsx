import { CaseStudiesOverview } from "@/components/case-studies-overview"
import { LanguageProvider } from "@/components/language-provider"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({ title: "Shopify Case Studies", description: "Explore WhaleLeap Studio's published Shopify projects and engineering evidence.", path: "/en/case-studies", language: "en", zhPath: "/case-studies", enPath: "/en/case-studies" })

export default function Page() {
  return <LanguageProvider initialLanguage="en"><CaseStudiesOverview /></LanguageProvider>
}
