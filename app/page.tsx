// import Navigation from "@/components/navigation"
// import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"

import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigations"
import HeroSection from "@/components/Hero"

export default function RutrickWebsite() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      
      <ContactSection />
      <Footer />
    </div>
  )
}
