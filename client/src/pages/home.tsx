import Header from "@/components/header";
import HeroCarousel from "@/components/hero-carousel";
import ServicesSection from "@/components/services-section";
import DifferentialsSection from "@/components/differentials-section";
import InteractiveTools from "@/components/interactive-tools";
import AdvancedTools from "@/components/advanced-tools";
import TestimonialsSection from "@/components/testimonials-section";
import CaseStudiesSection from "@/components/case-studies-section";
import PricingSection from "@/components/pricing-section";
import ResourcesSection from "@/components/resources-section";
import AboutSection from "@/components/about-section";
import LocationSection from "@/components/location-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <ServicesSection />
      <DifferentialsSection />
      <AdvancedTools />
      <TestimonialsSection />
      <CaseStudiesSection />
      <PricingSection />
      <ResourcesSection />
      <AboutSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      
      {/* Back to Top Button */}
      <Button
        className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ${
          showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        size="sm"
        onClick={scrollToTop}
      >
        <ChevronUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
