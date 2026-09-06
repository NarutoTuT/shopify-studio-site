import { LanguageProvider } from "@/components/language-provider"
import { PrivacyPage } from "@/components/privacy-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "隐私政策",
  description: "了解 WhaleLeap Studio 网站与 WhaleLeap GSC Reader 如何收集、使用、保存和保护表单、分析及 Google Search Console 数据。",
  path: "/privacy",
  language: "zh",
  zhPath: "/privacy",
  enPath: "/en/privacy",
})

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <PrivacyPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
