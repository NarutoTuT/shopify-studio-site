import type { Metadata } from "next"

import { LanguageProvider } from "@/components/language-provider"
import { ShopifyConversionOptimizationPage } from "@/components/shopify-conversion-optimization-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"

export const metadata: Metadata = {
  title: "Shopify 转化率优化服务",
  description:
    "为 Shopify 店铺提供转化率优化服务，覆盖首页首屏、商品页结构、信任内容、价格优惠、购物车结账、移动端体验和数据复盘。",
}

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <ShopifyConversionOptimizationPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
