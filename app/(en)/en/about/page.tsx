import { AboutPage } from "@/components/about-page"
import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"
export const metadata = createSitePageMetadata({ title: "About WhaleLeap Studio", description: "Learn how WhaleLeap Studio approaches Shopify engineering, conversion, analytics, and long-term storefront iteration.", path: "/en/about", language: "en", zhPath: "/about", enPath: "/en/about" })
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><AboutPage /></SmoothScrollProvider></LanguageProvider>}
