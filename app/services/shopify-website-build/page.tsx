import type { Metadata } from "next"

import { LanguageProvider } from "@/components/language-provider"
import { ShopifyWebsiteBuildPage } from "@/components/shopify-website-build-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"

export const metadata: Metadata = {
  title: "Shopify 独立站建设服务",
  description:
    "WhaleLeap Studio 为跨境品牌提供 Shopify 独立站建设服务，覆盖页面结构、Shopify 2.0 主题开发、支付物流、GA4/GTM、基础 SEO 和上线检查。",
}

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <ShopifyWebsiteBuildPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
