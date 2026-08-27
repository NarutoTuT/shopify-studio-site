import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"
import { LanguageProvider } from "@/components/language-provider"
import { MouseFollowLight } from "@/components/mouse-follow-light"
import { Navbar } from "@/components/navbar"
import { ProblemSection } from "@/components/problem-section"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { SolutionSection } from "@/components/solution-section"
import { TrustSection } from "@/components/trust-section"

export default function EnglishHome() {
  return <LanguageProvider initialLanguage="en"><SmoothScrollProvider><div className="min-h-screen bg-background"><MouseFollowLight /><Navbar /><HeroSection /><ProblemSection /><SolutionSection /><ServicesSection /><ShowcaseSection /><ProcessSection /><TrustSection /><ContactSection /></div></SmoothScrollProvider></LanguageProvider>
}
