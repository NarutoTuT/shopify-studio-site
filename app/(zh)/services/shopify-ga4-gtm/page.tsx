import { LanguageProvider } from "@/components/language-provider"
import { ShopifyGa4GtmPage } from "@/components/shopify-ga4-gtm-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "Shopify GA4 / GTM 数据追踪配置",
  description:
    "为 Shopify 店铺配置 GA4、GTM、电商事件、Meta Pixel、Google Ads 转化基础和 Product Schema，帮助跨境品牌复盘广告与成交数据。",
  path: "/services/shopify-ga4-gtm", language: "zh", zhPath: "/services/shopify-ga4-gtm", enPath: "/en/services/shopify-ga4-gtm",
})

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <ShopifyGa4GtmPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
