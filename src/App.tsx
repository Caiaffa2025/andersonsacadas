import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OriginStory } from './components/OriginStory';
import { WhyAndersonSacadas } from './components/WhyAndersonSacadas';
import { ServicesBento } from './components/ServicesBento';
import { CustomPartsShowcase } from './components/CustomPartsShowcase';
import { DiagnosticCalculator } from './components/DiagnosticCalculator';
import { InteractiveComparison } from './components/InteractiveComparison';
import { BalconyInfoAndQuiz } from './components/BalconyInfoAndQuiz';
import { BlogAndExpertTips } from './components/BlogAndExpertTips';
import { SupportedBrands } from './components/SupportedBrands';
import { ProcessSteps } from './components/ProcessSteps';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { SEOHead } from './components/SEOHead';
import { AIChatWidget } from './components/AIChatWidget';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalInitialTopic, setModalInitialTopic] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (topic?: string) => {
    setModalInitialTopic(topic);
    setQuoteModalOpen(true);
  };

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <SEOHead />
      <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-200 transition-colors duration-300 overflow-x-hidden max-w-full w-full relative pb-14 md:pb-0">
        
        {/* Subtle Horizontal Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* 3-Zone Top Bar & Vertical Navigation Menu */}
        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Main Content Flow */}
        <main className="flex-grow overflow-x-hidden max-w-full w-full">
          
          {/* Hero Section */}
          <Hero 
            onOpenQuoteModal={handleOpenQuoteModal} 
            onScrollToSimulator={handleScrollToSimulator} 
          />

          {/* Origin Story: Since 2014 & Market Pain Point Solution */}
          <OriginStory />

          {/* Why Anderson Sacadas: 10 Core Differentiators & Guarantees */}
          <WhyAndersonSacadas />

          {/* Core Services Bento Grid */}
          <ServicesBento onSelectService={(service) => handleOpenQuoteModal(`Serviço: ${service}`)} />

          {/* In-House Fabrication of Rare & Patented Parts */}
          <CustomPartsShowcase onOpenQuoteModal={handleOpenQuoteModal} />

          {/* Interactive Diagnostic Calculator */}
          <DiagnosticCalculator onOpenQuoteModal={handleOpenQuoteModal} />

          {/* Before & After Interactive Showcase */}
          <InteractiveComparison />

          {/* Technical Guide & Interactive Knowledge Quiz */}
          <BalconyInfoAndQuiz />

          {/* Expert Blog & Real-Time Search Grounding */}
          <BlogAndExpertTips />

          {/* All Supported Brands & Universal Compatibility */}
          <SupportedBrands />

          {/* Methodical Process Steps */}
          <ProcessSteps />

          {/* Social Proof & Concrete Testimonials */}
          <Testimonials />

          {/* FAQ Accordion */}
          <FaqSection />

        </main>

        {/* Footer */}
        <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Quick Quote Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialTopic={modalInitialTopic}
        />

        {/* Fixed Back to Top Button */}
        <ScrollToTopButton />

        {/* AI Customer Support Chat Assistant */}
        <AIChatWidget />

        {/* Discreet Floating WhatsApp Button */}
        <FloatingWhatsApp />

      </div>
    </ThemeProvider>
  );
}


