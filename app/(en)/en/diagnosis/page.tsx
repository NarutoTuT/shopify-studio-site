import { DiagnosisPage } from "@/components/diagnosis-page"
import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"
export const metadata = createSitePageMetadata({ title: "Free Shopify Store Review", description: "Identify conversion, storefront, performance, and analytics issues before deciding what to rebuild or optimize.", path: "/en/diagnosis", language: "en", zhPath: "/diagnosis", enPath: "/en/diagnosis" })
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><DiagnosisPage /></SmoothScrollProvider></LanguageProvider>}
