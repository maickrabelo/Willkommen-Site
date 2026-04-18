
import React from 'react';
import { Globe, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2B2B28] pt-20 pb-10 border-t border-[#3F4C63] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <img 
                src="https://i.ibb.co/833GRQP/2-Logo-Willkommen.png" 
                alt="Willkommen Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-white font-montserrat font-bold text-2xl tracking-tighter uppercase">
                WILLKOMMEN<span className="text-[#FFCF00]">DE</span>
              </span>
            </div>
            <div className="flex items-start space-x-3 text-[#D2D3D5]/40 text-xs">
              <MapPin className="w-4 h-4 flex-shrink-0 text-[#FFCF00]" />
              <p>{t.footer.address}</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Links</h4>
            <ul className="space-y-4 text-[#D2D3D5]/60 text-sm">
              <li><a href={`https://${t.footer.site}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCF00]">{t.footer.site}</a></li>
              <li><a href="#" className="hover:text-[#FFCF00]">{t.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-[#FFCF00]">{t.footer.terms}</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">International</h4>
            <div className="flex items-center space-x-4 bg-[#3F4C63]/10 p-4 rounded-xl border border-[#3F4C63]/30">
              <img 
                src="https://i.ibb.co/833GRQP/2-Logo-Willkommen.png" 
                alt="Willkommen Certification" 
                className="h-12 w-auto grayscale opacity-50 object-contain"
              />
              <div>
                <p className="text-white text-[10px] font-bold uppercase tracking-widest">Certified Partner</p>
                <p className="text-[#D2D3D5]/60 text-[10px]">Willkommen Deutschland</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-[#3F4C63] flex flex-col md:flex-row justify-between items-center text-[#D2D3D5]/40 text-xs">
          <p>Copyright © {new Date().getFullYear()} WILLKOMMEN DEUTSCHLAND GmbH. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span className="flex items-center"><Globe className="w-3 h-3 mr-1"/> Worldwide Operations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
