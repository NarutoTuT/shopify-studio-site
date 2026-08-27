import type { Metadata } from "next"
import { LanguageProvider } from "@/components/language-provider"
import { PricingPage } from "@/components/pricing-page"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
export const metadata: Metadata = { title: "Shopify Development Pricing", description: "Compare Shopify build packages, add-ons, support terms, and project scope boundaries.", alternates: { canonical: "/en/pricing", languages: { "zh-CN": "/pricing", en: "/en/pricing" } } }
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><PricingPage /></SmoothScrollProvider></LanguageProvider>}
