import type { Metadata } from "next"

import { LanguageProvider } from "@/components/language-provider"
import { ShopifyWebsiteCostPage } from "@/components/shopify-website-cost-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"

export const metadata: Metadata = {
  title: "Shopify 建站多少钱？费用、方案与报价说明",
  description:
    "了解 Shopify 建站费用构成：¥20,000 起的文档模板方案、¥35,000 起的设计图定制方案、¥50,000 起的复杂业务定制，以及常见不包含费用。",
  alternates: { canonical: "/learn/shopify-website-cost", languages: { "zh-CN": "/learn/shopify-website-cost" } },
}

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <ShopifyWebsiteCostPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
