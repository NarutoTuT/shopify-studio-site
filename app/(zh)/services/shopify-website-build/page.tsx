import { LanguageProvider } from "@/components/language-provider"
import { ShopifyWebsiteBuildPage } from "@/components/shopify-website-build-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "Shopify 定制开发 | 主题、Liquid 与独立站开发",
  description:
    "WhaleLeap Studio 为海外华人跨境品牌提供 Shopify 定制开发，覆盖主题开发、Liquid、Custom Sections、性能优化、Technical SEO 和上线 QA。",
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
