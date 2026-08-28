import { LanguageProvider } from "@/components/language-provider"
import { ShopifyGa4GtmPage } from "@/components/shopify-ga4-gtm-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"
export const metadata = createSitePageMetadata({ title: "Shopify GA4 and GTM Tracking", description: "GA4, GTM, ecommerce events, ad conversion signals, Product Schema, and pre-launch tracking validation for Shopify.", path: "/en/services/shopify-ga4-gtm", language: "en", zhPath: "/services/shopify-ga4-gtm", enPath: "/en/services/shopify-ga4-gtm" })
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><ShopifyGa4GtmPage /></SmoothScrollProvider></LanguageProvider>}
