import { LanguageProvider } from "@/components/language-provider"
import { ShopifyWebsiteBuildPage } from "@/components/shopify-website-build-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "Shopify Engineering | Shopify 技术建设与增长基础优化",
  description:
    "WhaleLeap Studio 为海外华人跨境品牌提供 Shopify Engineering 服务，覆盖 Shopify Theme Development、Liquid 开发、Custom Sections、性能优化、Technical SEO 和 Launch QA。",
  path: "/services/shopify-website-build", language: "zh", zhPath: "/services/shopify-website-build", enPath: "/en/services/shopify-website-build",
})

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <ShopifyWebsiteBuildPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
