import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { TerrawulfCaseStudyPage } from "@/components/terrawulf-case-study-page"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "Terrawulf eBike Shopify Engineering 案例",
  description: "WhaleLeap Studio 为 Terrawulf 构建电动越野车 Shopify 店铺：Figma 到线上实现、OS 2.0 架构、Liquid、复杂 PDP、响应式开发与 QA。",
  path: "/case-studies/terrawulf",
  language: "zh",
  zhPath: "/case-studies/terrawulf",
  type: "article",
})

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <TerrawulfCaseStudyPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
