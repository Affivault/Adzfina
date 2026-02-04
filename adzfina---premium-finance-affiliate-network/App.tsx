import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { Features } from './components/Features';
import { ScrollingBanner } from './components/ScrollingBanner';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { InteractionProvider } from './components/InteractionContext';

const App: React.FC = () => {
  return (
    <InteractionProvider>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-lime-100 selection:text-lime-900">
        <Navbar />
        <main>
          <Hero />
          <LogoCloud />
          <Features />
          <ScrollingBanner />
          <Testimonials />
          <FAQ />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </InteractionProvider>
  );
};

export default App;