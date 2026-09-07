import { LanguageProvider } from "@/components/language-provider"
import { ShopifyGa4GtmTrackingPlanPage } from "@/components/shopify-ga4-gtm-tracking-plan-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"

export const metadata = createSitePageMetadata({
  title: "Shopify GA4 / GTM Tracking Plan：事件、参数、去重与 QA",
  description:
    "一份面向 Shopify 实施的 GA4 / GTM 追踪计划：核心电商事件、参数来源、GTM 决策、purchase 去重、收入差异排查与上线 QA。",
  path: "/learn/shopify-ga4-gtm-tracking-plan",
  language: "zh",
  zhPath: "/learn/shopify-ga4-gtm-tracking-plan",
  type: "article",
})

export default function Page() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <ShopifyGa4GtmTrackingPlanPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
