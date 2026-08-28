import { LanguageProvider } from "@/components/language-provider"
import { ShopifyWebsiteBuildPage } from "@/components/shopify-website-build-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"
export const metadata = createSitePageMetadata({ title: "Shopify Engineering", description: "Shopify storefront engineering, custom theme development, performance cleanup, and launch QA for global brands.", path: "/en/services/shopify-website-build", language: "en", zhPath: "/services/shopify-website-build", enPath: "/en/services/shopify-website-build" })
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><ShopifyWebsiteBuildPage /></SmoothScrollProvider></LanguageProvider>}
