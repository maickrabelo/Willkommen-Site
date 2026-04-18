
import React from 'react';
import { Send, PhoneCall, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-16 md:py-24 bg-[#2B2B28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#3F4C63] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        >
          {/* Info Side */}
          <div className="lg:w-1/3 bg-[#2B2B28] p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#3F4C63]">
            <div>
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-6">{t.contact.title}</h3>
              <p className="text-[#D2D3D5] mb-10 md:mb-12">
                {t.contact.desc}
              </p>

              <div className="space-y-8">
                {[
                  { icon: <PhoneCall />, text: "+49 175 9765548", sub: t.contact.info.europe },
                  { icon: <PhoneCall />, text: "+55 34 9221-0009", sub: t.contact.info.latam },
                  { icon: <MapPin />, text: "Versmannstraße 4, Betahaus Hafencity", sub: t.contact.info.location }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 cursor-default"
                  >
                    <div className="w-10 h-10 bg-[#3F4C63] rounded flex items-center justify-center text-[#FFCF00]">
                      {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                    </div>
                    <div>
                      <p className="text-white font-bold">{item.text}</p>
                      <p className="text-[#D2D3D5] text-sm">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#3F4C63]">
              <p className="text-xs text-[#D2D3D5]/40 uppercase tracking-widest font-bold">Horário de Brasília</p>
              <p className="text-[#D2D3D5] text-sm font-medium">Segunda a Sexta, 08:00 - 18:00</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-bold mb-2">{t.contact.labels.name}</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01, borderColor: "#FFCF00" }}
                    type="text" 
                    className="w-full bg-[#2B2B28]/50 border border-[#3F4C63] rounded-lg px-4 py-3 text-white focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold mb-2">{t.contact.labels.email}</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01, borderColor: "#FFCF00" }}
                    type="email" 
                    className="w-full bg-[#2B2B28]/50 border border-[#3F4C63] rounded-lg px-4 py-3 text-white focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-bold mb-2">{t.contact.labels.objective}</label>
                <motion.select 
                  whileFocus={{ scale: 1.01, borderColor: "#FFCF00" }}
                  className="w-full bg-[#2B2B28]/50 border border-[#3F4C63] rounded-lg px-4 py-3 text-white focus:outline-none transition-all appearance-none"
                >
                  {t.contact.objectives.map((obj: string) => (
                    <option key={obj}>{obj}</option>
                  ))}
                </motion.select>
              </div>

              <div>
                <label className="block text-white text-sm font-bold mb-2">{t.contact.labels.message}</label>
                <motion.textarea 
                  whileFocus={{ scale: 1.01, borderColor: "#FFCF00" }}
                  rows={4}
                  className="w-full bg-[#2B2B28]/50 border border-[#3F4C63] rounded-lg px-4 py-3 text-white focus:outline-none transition-all"
                ></motion.textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#FFCF00] text-[#2B2B28] py-4 rounded-lg font-bold text-lg shadow-lg flex items-center justify-center space-x-2 group"
              >
                <span>{t.contact.labels.submit}</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
