import type { Metadata } from "next"
import { LanguageProvider } from "@/components/language-provider"
import { ShopifyWebsiteBuildPage } from "@/components/shopify-website-build-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
export const metadata: Metadata = { title: "Shopify Engineering", description: "Shopify storefront engineering, custom theme development, performance cleanup, and launch QA for global brands.", alternates: { canonical: "/en/services/shopify-website-build", languages: { "zh-CN": "/services/shopify-website-build", en: "/en/services/shopify-website-build" } } }
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><ShopifyWebsiteBuildPage /></SmoothScrollProvider></LanguageProvider>}
