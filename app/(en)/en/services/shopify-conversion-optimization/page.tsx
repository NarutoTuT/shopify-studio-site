import { LanguageProvider } from "@/components/language-provider"
import { ShopifyConversionOptimizationPage } from "@/components/shopify-conversion-optimization-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"
export const metadata = createSitePageMetadata({ title: "Shopify Conversion Optimization", description: "Diagnose and improve Shopify product pages, cart and checkout paths, trust content, mobile UX, and measurement quality.", path: "/en/services/shopify-conversion-optimization", language: "en", zhPath: "/services/shopify-conversion-optimization", enPath: "/en/services/shopify-conversion-optimization" })
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><ShopifyConversionOptimizationPage /></SmoothScrollProvider></LanguageProvider>}
