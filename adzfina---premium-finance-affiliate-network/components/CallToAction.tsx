import React from 'react';
import { useInteraction } from './InteractionContext';

export const CallToAction: React.FC = () => {
  const { openAuthModal, scrollToSection } = useInteraction();

  return (
    <section id="cta" className="py-20 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
             
            {/* Abstract visuals */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-lime-400 rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20 translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
               <div className="inline-flex items-center gap-2 bg-zinc-800 text-lime-300 text-xs font-bold px-3 py-1 rounded-full mb-6 border border-zinc-700">
                  <span className="w-2 h-2 rounded-full bg-lime-400"></span>
                  Trusted by 1k+ affiliates
               </div>
               
               <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                   Build a long-term partnership with AdzFina.
               </h2>
               <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
                   Automate lead generation and customer engagement in diverse and dynamic real-world settings.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={openAuthModal} className="bg-lime-400 text-zinc-900 px-8 py-4 rounded-full font-bold hover:bg-lime-300 transition-colors shadow-lg shadow-lime-900/20">
                     Get Started
                  </button>
                  <button onClick={() => scrollToSection('features')} className="bg-transparent border border-zinc-700 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-colors">
                     Learn More
                  </button>
               </div>
            </div>

        </div>
      </div>
    </section>
  );
};