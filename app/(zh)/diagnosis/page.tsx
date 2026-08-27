import type { Metadata } from "next"

import { DiagnosisPage } from "@/components/diagnosis-page"
import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll"

export const metadata: Metadata = {
  title: "Free Shopify Review | 免费 Shopify 店铺增长检查",
  description:
    "发现影响 Shopify 独立站转化的关键问题，获得 Shopify 技术、页面体验和数据追踪方面的初步优化建议。",
  alternates: { canonical: "/diagnosis", languages: { "zh-CN": "/diagnosis", en: "/en/diagnosis" } },
}

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <DiagnosisPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
