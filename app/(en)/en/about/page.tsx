import type { Metadata } from "next"
import { AboutPage } from "@/components/about-page"
import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
export const metadata: Metadata = { title: "About", description: "Learn how WhaleLeap Studio approaches Shopify engineering, conversion, analytics, and long-term storefront iteration.", alternates: { canonical: "/en/about", languages: { "zh-CN": "/about", en: "/en/about" } } }
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><AboutPage /></SmoothScrollProvider></LanguageProvider>}
