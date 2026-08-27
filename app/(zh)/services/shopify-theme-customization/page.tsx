import type { Metadata } from "next"

import { LanguageProvider } from "@/components/language-provider"
import { ShopifyThemeCustomizationPage } from "@/components/shopify-theme-customization-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"

export const metadata: Metadata = {
  title: "Shopify 主题定制与 Liquid 开发",
  description:
    "提供 Shopify 主题定制、Liquid 开发、Shopify 2.0 section/block、商品页模块、集合页模板、Figma 到 Shopify 和移动端适配服务。",
  alternates: { canonical: "/services/shopify-theme-customization", languages: { "zh-CN": "/services/shopify-theme-customization", en: "/en/services/shopify-theme-customization" } },
}

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <ShopifyThemeCustomizationPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
