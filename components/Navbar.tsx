
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.concept, href: '#conceito' },
    { name: t.nav.structure, href: '#estrutura' },
    { name: t.nav.advantages, href: '#vantagens' },
  ];

  const languages = [
    { code: 'pt', label: 'Português' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#2B2B28]/95 shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative flex items-center">
              <img 
                src="https://i.ibb.co/wZ1pzGbR/3-Logo-Willkommen.png" 
                alt="Willkommen Deutschland Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#D2D3D5] hover:text-[#FFCF00] transition-colors font-medium text-xs xl:text-sm uppercase tracking-wider whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}

            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-[#D2D3D5] hover:text-[#FFCF00] font-bold text-xs uppercase tracking-widest border border-[#3F4C63] px-3 py-1.5 rounded transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>{language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#2B2B28] border border-[#3F4C63] rounded shadow-2xl py-2 animate-in fade-in slide-in-from-top-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as Language);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-[#3F4C63] transition-colors ${language === lang.code ? 'text-[#FFCF00] font-bold' : 'text-[#D2D3D5]'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-[#3F4C63] text-white px-4 py-2 rounded font-semibold hover:bg-[#FFCF00] hover:text-[#2B2B28] transition-all duration-300 text-xs xl:text-sm whitespace-nowrap">
              {t.nav.cta}
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#D2D3D5] hover:text-[#FFCF00]"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#2B2B28] border-t border-[#3F4C63] py-4 px-4 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[#D2D3D5] hover:text-[#FFCF00] py-2 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex border-t border-[#3F4C63] pt-4 space-x-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as Language);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xs font-bold px-2 py-1 rounded border ${language === lang.code ? 'bg-[#FFCF00] text-[#2B2B28] border-[#FFCF00]' : 'text-[#D2D3D5] border-[#3F4C63]'}`}
              >
                {lang.code.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="w-full bg-[#FFCF00] text-[#2B2B28] py-3 rounded font-bold">
            {t.nav.cta}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
