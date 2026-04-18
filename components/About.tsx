
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Layers, Target, Rocket, ShieldAlert } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Layers, Target, Rocket];

  return (
    <section id="conceito" className="py-16 md:py-24 bg-[#3F4C63]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-[#FFCF00] font-bold text-sm tracking-widest uppercase mb-4">{t.about.tag}</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6 md:mb-8 leading-tight">
              {t.about.title}
            </h3>
            <div className="w-16 md:w-20 h-1.5 bg-[#FFCF00] mb-6 md:mb-8"></div>
            <p 
              className="text-[#D2D3D5] text-lg md:text-xl leading-relaxed font-light mb-8"
              dangerouslySetInnerHTML={{ __html: t.about.desc }}
            />
            <div className="bg-[#3F4C63]/20 border border-[#3F4C63] p-6 rounded-lg flex items-start space-x-4">
              <ShieldAlert className="w-8 h-8 text-[#FFCF00] flex-shrink-0 mt-1" />
              <p className="text-[#D2D3D5]/90 text-sm italic leading-relaxed">
                {t.about.risk}
              </p>
            </div>
          </div>
          
          <div id="estrutura" className="space-y-6">
            {t.about.layers.map((layer: any, index: number) => {
              const Icon = icons[index];
              return (
                <div key={index} className="bg-[#2B2B28] border border-[#3F4C63] p-8 rounded-xl hover:border-[#FFCF00] transition-colors group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#3F4C63]/30 p-3 rounded-lg group-hover:bg-[#FFCF00]/10 transition-colors">
                      <Icon className="w-6 h-6 text-[#FFCF00]" />
                    </div>
                    <h4 className="text-xl font-montserrat font-bold text-white">{layer.title}</h4>
                  </div>
                  <p className="text-[#D2D3D5]/80 leading-relaxed pl-14">
                    {layer.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
