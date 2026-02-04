import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { useInteraction } from './InteractionContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openAuthModal, scrollToSection } = useInteraction();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 py-4 px-4 sm:px-6">
      <div className={`max-w-6xl mx-auto transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border border-zinc-100 rounded-full py-3 px-6' : 'bg-transparent py-2'
      }`}>
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Logo className="h-8" />
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
             <div className="bg-zinc-100/50 rounded-full px-2 py-1 flex items-center gap-1">
                <button onClick={() => handleNavClick('features')} className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-white hover:shadow-sm rounded-full transition-all">
                  Features
                </button>
                <button onClick={() => handleNavClick('testimonials')} className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-white hover:shadow-sm rounded-full transition-all">
                  Reviews
                </button>
                <button onClick={() => handleNavClick('faq')} className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-white hover:shadow-sm rounded-full transition-all">
                  FAQ
                </button>
                <button onClick={() => handleNavClick('cta')} className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-white hover:shadow-sm rounded-full transition-all">
                  Contact
                </button>
             </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
             <button onClick={openAuthModal} className="text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors">
               Log in
             </button>
            <button onClick={openAuthModal} className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
              Start for free
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-900 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white rounded-3xl border border-zinc-100 shadow-xl p-6 z-40">
          <div className="flex flex-col space-y-4">
            <button onClick={() => handleNavClick('features')} className="text-lg font-medium text-zinc-900 p-2 hover:bg-zinc-50 rounded-xl text-left">Features</button>
            <button onClick={() => handleNavClick('testimonials')} className="text-lg font-medium text-zinc-900 p-2 hover:bg-zinc-50 rounded-xl text-left">Reviews</button>
            <button onClick={() => handleNavClick('faq')} className="text-lg font-medium text-zinc-900 p-2 hover:bg-zinc-50 rounded-xl text-left">FAQ</button>
            <div className="h-px bg-zinc-100 my-2"></div>
            <button onClick={() => {openAuthModal(); setIsMobileMenuOpen(false);}} className="bg-zinc-900 text-white px-6 py-4 rounded-xl text-lg font-medium w-full">
              Start for free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};