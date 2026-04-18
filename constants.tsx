
import React from 'react';
import { 
  FileText, 
  Building2, 
  Ship, 
  BadgeDollarSign, 
  Briefcase, 
  Globe2, 
  ArrowRightLeft,
  Warehouse
} from 'lucide-react';

export const COLORS = {
  dark: '#2B2B28',
  blue: '#3F4C63',
  yellow: '#FFCF00',
  light: '#D2D3D5'
};

export const SERVICES = [
  {
    id: 'doc',
    title: 'Abertura & Documentação',
    description: 'Gestão completa burocrática e jurídica para fundação de GmbH ou UG na Alemanha.',
    icon: <Building2 className="w-8 h-8" />,
    longDescription: 'Cuidamos de todo o processo de registro na junta comercial (Handelsregister), obtenção de número fiscal (Steuernummer) e abertura de conta bancária corporativa.'
  },
  {
    id: 'trade',
    title: 'Importação & Exportação',
    description: 'Logística internacional de produtos e maquinários pesados com foco em conformidade EU.',
    icon: <Ship className="w-8 h-8" />,
    longDescription: 'Gerenciamos o desembaraço aduaneiro, logística porta-a-porta e certificação de maquinários industriais seguindo as normas CE.'
  },
  {
    id: 'finance',
    title: 'Financiamento & Leasing',
    description: 'Viabilidade de capital para expansão e aquisição de ativos no mercado europeu.',
    icon: <BadgeDollarSign className="w-8 h-8" />,
    longDescription: 'Conectamos sua empresa a linhas de crédito alemãs, subsídios governamentais e opções de leasing de alta eficiência para equipamentos.'
  },
  {
    id: 'condo',
    title: 'Condomínio de Empresas',
    description: 'Endereço fiscal premium e espaço de coworking estratégico em território alemão.',
    icon: <Warehouse className="w-8 h-8" />,
    longDescription: 'Estrutura completa com secretariado bilíngue, recebimento de correspondência e salas de reunião para representar sua marca fisicamente na Europa.'
  },
  {
    id: 'eu-trade',
    title: 'Trade União Europeia',
    description: 'Intermediação e parcerias estratégicas com empresas de todo o bloco europeu.',
    icon: <Globe2 className="w-8 h-8" />,
    longDescription: 'Facilitamos o comércio intracomunitário, garantindo que sua empresa aproveite os benefícios do mercado comum sem barreiras fiscais complexas.'
  },
  {
    id: 'compliance',
    title: 'Compliance & Tax',
    description: 'Consultoria tributária contínua para garantir segurança jurídica na Alemanha.',
    icon: <FileText className="w-8 h-8" />,
    longDescription: 'Monitoramento constante de mudanças nas leis alemãs, assegurando que sua operação permaneça 100% regularizada e otimizada fiscalmente.'
  }
];
