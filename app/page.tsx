import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { PricingSection } from "@/components/pricing-section"
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
          <ServicesSection />
          <ShowcaseSection />
          <PricingSection />
          <ContactSection />
        </div>
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
