
import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1467226319480-601939339396?auto=format&fit=crop&q=80&w=1920" 
          alt="Frankfurt Skyline" 
          className="w-full h-full object-cover opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B2B28] via-[#2B2B28]/90 to-transparent"></div>
      </motion.div>

      {/* Floating Logo with Counter-Parallax */}
      <motion.img 
        style={{ y: y2, opacity }}
        src="https://i.ibb.co/833GRQP/2-Logo-Willkommen.png" 
        alt="" 
        className="absolute top-1/2 right-10 w-96 h-auto opacity-5 pointer-events-none hidden lg:block object-contain"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="inline-flex items-center space-x-2 bg-[#3F4C63]/50 border border-[#3F4C63] px-3 py-1 rounded-full">
              <Globe className="w-4 h-4 text-[#FFCF00]" />
              <span className="text-[#D2D3D5] text-[10px] sm:text-xs font-semibold uppercase tracking-widest">{t.hero.badge}</span>
            </div>
            <img 
              src="https://i.ibb.co/833GRQP/2-Logo-Willkommen.png" 
              alt="Willkommen Logo" 
              className="h-8 sm:h-12 w-auto brightness-110 object-contain"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-white leading-tight mb-4 sm:mb-6"
          >
            {t.hero.title} <span className="text-[#FFCF00]">{t.hero.titleAccent}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-[#D2D3D5] mb-8 sm:mb-10 leading-relaxed max-w-2xl"
          >
            {t.hero.desc}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center space-x-2 bg-[#FFCF00] text-[#2B2B28] px-8 py-4 rounded font-bold text-lg hover:shadow-[0_0_20px_rgba(255,207,0,0.4)] transition-shadow"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, borderColor: "#FFCF00" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 bg-transparent border-2 border-[#3F4C63] text-white px-8 py-4 rounded font-bold text-lg transition-colors"
            >
              {t.hero.ctaSecondary}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
