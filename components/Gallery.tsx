import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const images = [
    {
      src: 'gallery-1.jpg',
      alt: 'Meeting Room'
    },
    {
      src: 'gallery-2.jpg',
      alt: 'Open Office Space'
    },
    {
      src: 'gallery-3.jpg',
      alt: 'Collaborative Lounge Space'
    }
  ];

  return (
    <section className="bg-[#2B2B28] py-16 md:py-24 border-t border-[#3F4C63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[#FFCF00] font-bold text-sm tracking-widest uppercase mb-4">{t.gallery.tag}</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6 leading-tight">
            {t.gallery.title}
          </h3>
          <p className="text-[#D2D3D5] text-lg md:text-xl font-light max-w-2xl mx-auto">
            {t.gallery.desc}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="relative group overflow-hidden rounded-2xl shadow-xl border border-[#3F4C63]"
            >
              <div className="aspect-[4/5] md:aspect-square overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B28]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
