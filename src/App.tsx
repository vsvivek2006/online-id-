import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import WhatIsCricketID from '@/components/WhatIsCricketID';
import WhyChooseUs from '@/components/WhyChooseUs';
import IDTypes from '@/components/IDTypes';
import HowToGet from '@/components/HowToGet';
import IPL2026 from '@/components/IPL2026';
import Features from '@/components/Features';
import GenuineProvider from '@/components/GenuineProvider';
import FAQs from '@/components/FAQs';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-[#02160e]">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <WhatIsCricketID />
        <WhyChooseUs />
        <IDTypes />
        <HowToGet />
        <IPL2026 />
        <Features />
        <GenuineProvider />
        <FAQs />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
