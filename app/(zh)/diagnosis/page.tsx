import { DiagnosisPage } from "@/components/diagnosis-page"
import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "Free Shopify Review | 免费 Shopify 店铺增长检查",
  description:
    "免费沟通 Shopify 店铺现状、当前问题与项目需求，再判断是否需要书面诊断、开发实施或长期维护。",
  path: "/diagnosis", language: "zh", zhPath: "/diagnosis", enPath: "/en/diagnosis",
})

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <DiagnosisPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
