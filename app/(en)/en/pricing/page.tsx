import { LanguageProvider } from "@/components/language-provider"
import { PricingPage } from "@/components/pricing-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"
export const metadata = createSitePageMetadata({ title: "Shopify Development Pricing", description: "Compare Shopify build packages, add-ons, support terms, and project scope boundaries.", path: "/en/pricing", language: "en", zhPath: "/pricing", enPath: "/en/pricing" })
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><PricingPage /></SmoothScrollProvider></LanguageProvider>}
