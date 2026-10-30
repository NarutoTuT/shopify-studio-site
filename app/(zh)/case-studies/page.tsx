import { CaseStudiesOverview } from "@/components/case-studies-overview"
import { LanguageProvider } from "@/components/language-provider"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({ title: "Shopify 项目案例", description: "查看 WhaleLeap Studio 的 Shopify 项目案例与工程交付证据。", path: "/case-studies", language: "zh", zhPath: "/case-studies", enPath: "/en/case-studies" })

export default function Page() {
  return <LanguageProvider><CaseStudiesOverview /></LanguageProvider>
}
