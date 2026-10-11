import { DiagnosisPage } from "@/components/diagnosis-page"
import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { createSitePageMetadata } from "@/lib/site-metadata"
export const metadata = createSitePageMetadata({ title: "Free Shopify Store Review", description: "Discuss your Shopify store, current issues, and project needs before deciding on diagnosis, development, or ongoing maintenance.", path: "/en/diagnosis", language: "en", zhPath: "/diagnosis", enPath: "/en/diagnosis" })
export default function Page(){return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><DiagnosisPage /></SmoothScrollProvider></LanguageProvider>}
