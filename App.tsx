
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Advantages from './components/Advantages';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-[#FFCF00] selection:text-[#2B2B28]">
        <Navbar />
        <main>
          <Hero />
          
          {/* Trust Bar / Logos */}
          <div className="bg-[#3F4C63] py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
               <span className="text-white font-montserrat font-bold text-lg uppercase tracking-widest">Hamburg Chamber of Commerce</span>
               <span className="text-white font-montserrat font-bold text-lg uppercase tracking-widest">Bettahaus Hafencity</span>
            </div>
          </div>

          <About />
          <Advantages />
          <Gallery />
          <Pricing />
          <Team />
          <Contact />
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </LanguageProvider>
  );
};

export default App;
