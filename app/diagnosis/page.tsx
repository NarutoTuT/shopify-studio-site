import type { Metadata } from "next"

import { DiagnosisPage } from "@/components/diagnosis-page"
import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll"

export const metadata: Metadata = {
  title: "Shopify 免费诊断",
  description:
    "提交 Shopify 店铺链接、产品品类、目标市场、预算和上线时间，获取页面结构、功能范围、转化问题和交付节奏建议。",
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
