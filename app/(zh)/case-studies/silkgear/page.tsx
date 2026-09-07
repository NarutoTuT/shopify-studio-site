import { LanguageProvider } from "@/components/language-provider"
import { SilkGearCaseStudyPage } from "@/components/silkgear-case-study-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "SilkGear Shopify 案例：高端科技零售体验",
  description:
    "WhaleLeap Studio 的 SilkGear Shopify 项目案例，记录多品类科技零售站点的挑战、范围、诊断、关键决策、实施证据、结果与限制。",
  path: "/case-studies/silkgear",
  language: "zh",
  zhPath: "/case-studies/silkgear",
  type: "article",
})

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <SilkGearCaseStudyPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
