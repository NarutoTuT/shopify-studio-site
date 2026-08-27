import type { Metadata } from "next"
import { LanguageProvider } from "@/components/language-provider"
import { ShopifyGa4GtmPage } from "@/components/shopify-ga4-gtm-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
export const metadata: Metadata = { title: "Shopify GA4 and GTM Tracking", description: "GA4, GTM, ecommerce events, ad conversion signals, Product Schema, and pre-launch tracking validation for Shopify.", alternates: { canonical: "/en/services/shopify-ga4-gtm", languages: { "zh-CN": "/services/shopify-ga4-gtm", en: "/en/services/shopify-ga4-gtm" } } }
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><ShopifyGa4GtmPage /></SmoothScrollProvider></LanguageProvider>}
