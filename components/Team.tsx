import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Team: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="equipe" className="py-16 md:py-24 bg-[#2B2B28] border-t border-[#3F4C63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[#FFCF00] font-bold text-sm tracking-widest uppercase mb-4">{t.team.tag}</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">{t.team.title}</h3>
          <div className="w-16 md:w-24 h-1 bg-[#FFCF00] mx-auto"></div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {t.team.members.map((member: any, idx: number) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}>
              <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0 group">
                <div className={`absolute inset-0 bg-[#FFCF00] rounded-2xl ${idx % 2 === 0 ? 'rotate-6' : '-rotate-6'} group-hover:rotate-0 transition-transform duration-500`}></div>
                <div className="absolute inset-0 bg-[#3F4C63] rounded-2xl overflow-hidden border-2 border-[#FFCF00] z-10">
                   <img 
                     src={member.image} 
                     alt={member.name} 
                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                   />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#FFCF00] font-bold mb-4 md:mb-6 text-sm md:text-lg uppercase tracking-wider">{member.role}</p>
                <p className="text-[#D2D3D5] text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
                  {member.bio}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                   {member.email && (
                     <a href={`mailto:${member.email}`} className="flex items-center space-x-2 text-[#D2D3D5] hover:text-[#FFCF00] transition-colors border-b border-transparent hover:border-[#FFCF00] pb-1">
                       <Mail className="w-5 h-5 text-[#FFCF00]" />
                       <span className="text-sm font-medium">{member.email}</span>
                     </a>
                   )}
                   {member.phone && (
                     <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="flex items-center space-x-2 text-[#D2D3D5] hover:text-[#FFCF00] transition-colors border-b border-transparent hover:border-[#FFCF00] pb-1">
                       <Phone className="w-5 h-5 text-[#FFCF00]" />
                       <span className="text-sm font-medium">{member.phone}</span>
                     </a>
                   )}
                   <a href="#" className="flex items-center space-x-2 text-[#D2D3D5] hover:text-[#FFCF00] transition-colors border-b border-transparent hover:border-[#FFCF00] pb-1">
                     <Linkedin className="w-5 h-5 text-[#FFCF00]" />
                     <span className="text-sm font-medium">LinkedIn</span>
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
