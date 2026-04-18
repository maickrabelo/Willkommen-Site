
import React from 'react';
import { Check, ArrowRight, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="investimento" className="py-16 md:py-24 bg-[#3F4C63]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[#FFCF00] font-bold text-sm tracking-widest uppercase mb-4">{t.pricing.tag}</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">{t.pricing.title}</h3>
          <p className="text-[#D2D3D5] max-w-2xl mx-auto text-lg md:text-xl">
            {t.pricing.desc}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {t.pricing.plans.map((plan: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative bg-[#2B2B28] rounded-2xl p-8 sm:p-10 border ${plan.highlight ? 'border-[#FFCF00] shadow-[0_0_30px_rgba(255,207,0,0.15)]' : 'border-[#3F4C63]'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFCF00] text-[#2B2B28] px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                  Recomendado
                </div>
              )}
              <h4 className="text-2xl font-montserrat font-bold text-white mb-2">{plan.name}</h4>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#FFCF00]">{plan.price}</span>
                <span className="text-[#D2D3D5]/60 ml-2 font-medium">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature: string, fIdx: number) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className="w-5 h-5 text-[#FFCF00] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-[#D2D3D5] leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contato');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2 group ${plan.highlight ? 'bg-[#FFCF00] text-[#2B2B28] hover:shadow-[0_0_20px_rgba(255,207,0,0.4)]' : 'bg-[#3F4C63]/30 text-white hover:bg-[#3F4C63]/50'}`}
              >
                <span>{t.nav.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#3F4C63]/10 border border-[#3F4C63]/30 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <div className="bg-[#FFCF00]/10 p-4 rounded-xl flex-shrink-0">
            <Plus className="w-8 h-8 text-[#FFCF00]" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">{t.pricing.additional.title}</h4>
            <p className="text-[#D2D3D5]/80 leading-relaxed">
              {t.pricing.additional.desc}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
