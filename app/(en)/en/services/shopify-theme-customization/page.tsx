import { LanguageProvider } from "@/components/language-provider"
import { ShopifyThemeCustomizationPage } from "@/components/shopify-theme-customization-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"
export const metadata = createSitePageMetadata({ title: "Shopify Theme Customization", description: "Custom Shopify Liquid development, configurable sections, page modules, responsive behavior, and theme performance work.", path: "/en/services/shopify-theme-customization", language: "en", zhPath: "/services/shopify-theme-customization", enPath: "/en/services/shopify-theme-customization" })
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><ShopifyThemeCustomizationPage /></SmoothScrollProvider></LanguageProvider>}
