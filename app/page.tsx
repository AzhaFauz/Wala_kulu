"use client";

import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import BuiltSection from "./components/built-section";
import TrustedBySection from "./components/trusted-by-section";
import OptimizeSection from "./components/optimize-section";
import CustomerExperienceSection from "./components/customer-experience-section";
import CustomerSupportSection from "./components/customer-support-section";
import OurClientsSection from "./components/our-clients-section";
import PricingSection from "./components/pricing-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex flex-col items-center justify-center grow px-4 py-12 sm:px-6 lg:px-8 text-center">
        <HeroSection />
        <BuiltSection />
        <TrustedBySection />
        <OptimizeSection />
        <CustomerExperienceSection />
        <OurClientsSection />
        <PricingSection />
        <CustomerSupportSection />
      </main>
      <Footer />
    </div>
  );
}
