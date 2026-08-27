import type { Metadata } from "next"
import { LanguageProvider } from "@/components/language-provider"
import { ShopifyConversionOptimizationPage } from "@/components/shopify-conversion-optimization-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
export const metadata: Metadata = { title: "Shopify Conversion Optimization", description: "Diagnose and improve Shopify product pages, cart and checkout paths, trust content, mobile UX, and measurement quality.", alternates: { canonical: "/en/services/shopify-conversion-optimization", languages: { "zh-CN": "/services/shopify-conversion-optimization", en: "/en/services/shopify-conversion-optimization" } } }
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><ShopifyConversionOptimizationPage /></SmoothScrollProvider></LanguageProvider>}
