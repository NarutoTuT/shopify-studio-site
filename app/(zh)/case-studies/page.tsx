import { CaseStudiesOverview } from "@/components/case-studies-overview"
import { LanguageProvider } from "@/components/language-provider"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({ title: "项目案例", description: "查看 WhaleLeap Studio 的项目案例与公开站点。", path: "/case-studies", language: "zh", zhPath: "/case-studies", enPath: "/en/case-studies" })

export default function Page() {
  return <LanguageProvider><CaseStudiesOverview /></LanguageProvider>
}
