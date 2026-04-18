
import React from 'react';
import { Building2, Zap, HeartPulse, Factory, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Members: React.FC = () => {
  const { t } = useLanguage();
  const icons = [Factory, Building2, HeartPulse, Zap];

  return (
    <section id="membros" className="py-24 bg-[#2B2B28] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#FFCF00] font-bold text-sm tracking-widest uppercase mb-4">{t.members.tag}</h2>
          <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">{t.members.title}</h3>
          <p className="text-[#D2D3D5] text-xl max-w-3xl mx-auto">{t.members.desc}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {t.members.companies.map((company: any, idx: number) => {
            const Icon = icons[idx];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#3F4C63]/10 border border-[#3F4C63]/30 p-8 rounded-2xl hover:bg-[#3F4C63]/20 transition-all flex items-start space-x-6 group"
              >
                <div className="bg-[#2B2B28] p-4 rounded-xl border border-[#3F4C63] group-hover:border-[#FFCF00] transition-colors flex-shrink-0">
                  <Icon className="w-8 h-8 text-[#FFCF00]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">{company.name}</h4>
                  <p className="text-[#D2D3D5]/80 leading-relaxed">{company.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#3F4C63]/40 to-[#2B2B28] border border-[#FFCF00]/30 p-10 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Network className="w-48 h-48 text-[#FFCF00]" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[#FFCF00] p-3 rounded-xl">
                <Network className="w-6 h-6 text-[#2B2B28]" />
              </div>
              <h4 className="text-3xl font-montserrat font-bold text-white">{t.members.synergies.title}</h4>
            </div>
            <p className="text-[#D2D3D5] text-xl leading-relaxed italic">
              "{t.members.synergies.desc}"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Members;
