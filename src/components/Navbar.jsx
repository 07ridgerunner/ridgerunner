'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY > 100) setIsOpen(false); // Close on scroll
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#why-us' },
    { name: 'Packages', href: '#packages' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 shadow-lg py-2 backdrop-blur-md'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-1 sm:gap-4">
        {/* 1. Logo (Left) */}
        <div className="flex-1 lg:flex-none">
          <a 
            href="#home" 
            className={`inline-flex items-center group transition-all duration-300 rounded-full
              ${scrolled ? 'bg-kashmir-950/90 py-1.5 px-3 sm:px-4 shadow-lg backdrop-blur-md' : 'bg-transparent py-0 px-0'}`}
          >
            <div className={`relative transition-all duration-300 w-auto ${scrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-12'}`}>
              <img 
                src="/logo.png" 
                alt="Honor Tour Logo" 
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
              />
            </div>
          </a>
        </div>

        {/* 2. Mobile Center/Desktop Right: Inquiry Now Button */}
        <div className="flex items-center order-2 lg:order-3">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openInquiryModal'))}
            className="flex items-center gap-1.5 bg-saffron-500 hover:bg-saffron-600 text-white text-[10px] sm:text-sm font-bold px-3 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all shadow-lg hover:shadow-saffron-200 active:scale-95 whitespace-nowrap"
          >
            <i className="fas fa-paper-plane text-[9px] sm:text-xs" />
            Inquiry Now
          </button>
        </div>

        {/* 3. Desktop Nav Links (Hidden on Mobile) + Hamburger */}
        <div className="flex-1 lg:flex-none flex justify-end items-center gap-4 lg:gap-0 order-3 lg:order-2">
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] uppercase tracking-wider font-bold transition-all hover:text-gold-400
                  ${scrolled ? 'text-kashmir-900' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden flex flex-col items-center justify-center w-9 h-9 rounded-xl transition-all
              ${scrolled ? 'bg-kashmir-50' : 'bg-white/10 backdrop-blur border border-white/20'}`}
            aria-label="Toggle menu"
          >
            <div className={`w-4 h-0.5 rounded-full transition-all mb-1 ${scrolled ? 'bg-kashmir-950' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-4 h-0.5 rounded-full transition-all mb-1 ${scrolled ? 'bg-kashmir-950' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-4 h-0.5 rounded-full transition-all ${scrolled ? 'bg-kashmir-950' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Side Menu) */}
      <div className={`lg:hidden fixed inset-0 z-[60] transition-visibility duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Drawer Content */}
        <div 
          className={`absolute top-0 right-0 h-screen w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col p-6
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <img src="/logo.png" alt="Honor Tour Logo" className="h-12 w-auto object-contain" />
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-kashmir-900 group active:scale-90 transition-transform"
            >
              <i className="fas fa-times text-lg group-hover:rotate-90 transition-transform" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-4 rounded-2xl text-lg font-bold text-kashmir-900 hover:bg-kashmir-50 active:bg-kashmir-50 transition-colors border-b border-gray-50 last:border-0"
              >
                {link.name}
                <i className="fas fa-chevron-right text-xs text-kashmir-300" />
              </a>
            ))}
          </div>

          {/* Social / Contact in Drawer */}
          <div className="mt-auto">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4 ml-4">Direct Contact</p>
            <a
              href="https://wa.me/919682300904"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-saffron-500 hover:bg-saffron-600 text-white font-bold py-4 rounded-2xl shadow-xl transition-all shadow-saffron-100 group"
            >
              <i className="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
