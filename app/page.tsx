import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ServicesSection } from "@/components/services-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { ProcessSection } from "@/components/process-section"
import { TrustSection } from "@/components/trust-section"
import { ContactSection } from "@/components/contact-section"
import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { MouseFollowLight } from "@/components/mouse-follow-light"
import { LanguageProvider } from "@/components/language-provider"

export default function Home() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <div className="bg-background min-h-screen">
          <MouseFollowLight />
          <Navbar />
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <ServicesSection />
          <ShowcaseSection />
          <ProcessSection />
          <TrustSection />
          <ContactSection />
        </div>
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
