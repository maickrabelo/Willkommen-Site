
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, ShieldCheck, Coins, Globe, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Advantages: React.FC = () => {
  const { t } = useLanguage();
  const icons = [<TrendingUp />, <ShieldCheck />, <Coins />, <Globe />, <Settings />];

  return (
    <section id="vantagens" className="py-16 md:py-24 bg-[#2B2B28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-[#FFCF00] font-bold text-sm tracking-widest uppercase mb-4">{t.advantages.tag}</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">{t.advantages.title}</h3>
          <p className="text-[#D2D3D5] text-lg md:text-xl">{t.advantages.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.advantages.cards.map((card: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#3F4C63]/10 border border-[#3F4C63]/30 p-8 rounded-2xl hover:bg-[#3F4C63]/20 transition-all group"
            >
              <motion.div 
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: idx * 0.5 
                }}
                className="w-12 h-12 bg-[#FFCF00] rounded-xl flex items-center justify-center text-[#2B2B28] mb-6 group-hover:bg-white transition-colors"
              >
                {React.cloneElement(icons[idx] as React.ReactElement, { className: "w-6 h-6" })}
              </motion.div>
              <h4 className="text-xl font-bold text-white mb-4">{card.title}</h4>
              <p className="text-[#D2D3D5]/70 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
