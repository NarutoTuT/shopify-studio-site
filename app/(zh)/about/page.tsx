import { AboutPage } from "@/components/about-page"
import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "关于我们",
  description:
    "了解 WhaleLeap Studio 的 Shopify 服务方向：独立站建设、主题定制、转化率优化和 GA4/GTM 数据追踪，服务准备出海或需要升级 Shopify 的跨境品牌。",
  path: "/about", language: "zh", zhPath: "/about", enPath: "/en/about",
})

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <AboutPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
