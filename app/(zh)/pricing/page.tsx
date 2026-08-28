import { LanguageProvider } from "@/components/language-provider"
import { PricingPage } from "@/components/pricing-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "Shopify 建站价格",
  description:
    "查看 Shopify 建站价格梯度：文档模板方案 ¥20,000 起，设计图定制方案 ¥35,000 起，复杂业务定制 ¥50,000 起，并包含模块加购参考。",
  path: "/pricing", language: "zh", zhPath: "/pricing", enPath: "/en/pricing",
})

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <PricingPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
