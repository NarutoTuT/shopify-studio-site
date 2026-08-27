import type { Metadata } from "next"
import { LanguageProvider } from "@/components/language-provider"
import { ShopifyThemeCustomizationPage } from "@/components/shopify-theme-customization-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
export const metadata: Metadata = { title: "Shopify Theme Customization", description: "Custom Shopify Liquid development, configurable sections, page modules, responsive behavior, and theme performance work.", alternates: { canonical: "/en/services/shopify-theme-customization", languages: { "zh-CN": "/services/shopify-theme-customization", en: "/en/services/shopify-theme-customization" } } }
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><ShopifyThemeCustomizationPage /></SmoothScrollProvider></LanguageProvider>}
