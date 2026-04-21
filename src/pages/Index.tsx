import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingSpinner from "@/components/ui/snow-ball-loading-spinner";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import PortfolioSection from "@/components/PortfolioSection";
import ClienteleSection from "@/components/ClienteleSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      AOS.init({ duration: 800, offset: 80, once: true });
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-500">
        <LoadingSpinner />
        <p className="mt-6 font-body text-[10px] uppercase tracking-[5px] text-wine-medium">
          Harry Malik
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      <Navigation />
      <HeroSection />
      <CredibilityStrip />
      <PortfolioSection />
      <ClienteleSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
