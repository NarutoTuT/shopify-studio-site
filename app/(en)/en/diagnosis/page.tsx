import type { Metadata } from "next"
import { DiagnosisPage } from "@/components/diagnosis-page"
import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
export const metadata: Metadata = { title: "Free Shopify Store Review", description: "Identify conversion, storefront, performance, and analytics issues before deciding what to rebuild or optimize.", alternates: { canonical: "/en/diagnosis", languages: { "zh-CN": "/diagnosis", en: "/en/diagnosis" } } }
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><DiagnosisPage /></SmoothScrollProvider></LanguageProvider>}
