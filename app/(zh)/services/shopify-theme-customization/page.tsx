import { LanguageProvider } from "@/components/language-provider"
import { ShopifyThemeCustomizationPage } from "@/components/shopify-theme-customization-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "Shopify 主题定制与 Liquid 开发",
  description:
    "提供 Shopify 主题定制、Liquid 开发、Shopify 2.0 section/block、商品页模块、集合页模板、Figma 到 Shopify 和移动端适配服务。",
  path: "/services/shopify-theme-customization", language: "zh", zhPath: "/services/shopify-theme-customization", enPath: "/en/services/shopify-theme-customization",
})

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <ShopifyThemeCustomizationPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
