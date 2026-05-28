
import { Language } from './types';

export const translations: Record<Language, any> = {
  pt: {
    nav: {
      home: 'Início',
      concept: 'O Conceito',
      structure: 'Estrutura',
      advantages: 'Vantagens',
      investment: 'Investimento',
      members: 'Membros',
      contact: 'Contato',
      cta: 'Fale com um Especialista'
    },
    hero: {
      badge: 'Alcance Global • Expertise Local',
      title: 'Transformando empresas brasileiras em grupos globais ',
      titleAccent: 'autofinanciáveis.',
      desc: 'Mais do que um escritório virtual ou consultoria. A Willkommen é uma plataforma de estruturação internacional com base na Alemanha, projetada em arquitetura clusterizada.',
      ctaPrimary: 'Fale com um Especialista',
      ctaSecondary: 'Conheça o Condomínio Empresarial',
      stats: {
        years: 'Anos de Mercado',
        companies: 'Empresas Abertas',
        volume: 'Volume de Trade'
      }
    },
    about: {
      tag: 'O que é a Willkommen?',
      title: 'Síntese e Estrutura',
      desc: 'A Willkommen atua como gestora e integradora de um condomínio empresarial na Europa. As empresas participantes mantêm <span class="font-bold text-[#FFCF00] uppercase">TOTAL AUTONOMIA JURÍDICA, FINANCEIRA E CONTÁBIL</span>, enquanto se beneficiam de uma infraestrutura robusta.',
      layers: [
        {
          title: 'Camada 1 – Infraestrutura',
          desc: 'Administrativa, Jurídica, Contábil e Bancária.'
        },
        {
          title: 'Camada 2 – Estratégia',
          desc: 'Modelagem financeira, Estruturação de projetos, Marketing e Branding.'
        },
        {
          title: 'Camada 3 – Execução',
          desc: 'Procurement, Financiamento, Logística internacional.'
        }
      ],
      risk: 'Estrutura de Risco: Cada empresa estrutura seus compromissos individuais conforme suas necessidades, respeitando a individualidade de cada membro do condomínio.'
    },
    advantages: {
      tag: 'Diferencial Competitivo',
      title: 'Diferencial Competitivo e Ganho Real',
      subtitle: 'Benefícios estratégicos para o seu negócio',
      cards: [
        {
          title: 'Valuation e Branding',
          desc: 'Posicionamento como marca alemã/europeia, melhorando a percepção de valor para M&A, IPOs e abrindo novos mercados.'
        },
        {
          title: 'Compliance Global',
          desc: 'Adoção de IFRS e governança alemã, reduzindo o risco percebido por bancos.'
        },
        {
          title: 'Custo de Capital',
          desc: 'Queda drástica no custo financeiro, com substituição de garantias patrimoniais por garantias baseadas em faturamento, com a possibilidade de acesso aos atrativos juros europeus.'
        },
        {
          title: 'Acesso e Funding',
          desc: 'Abertura para investidores internacionais, export/trading finance e parcerias com gigantes europeus (Bosch, Siemens, VW, etc.).'
        },
        {
          title: 'Ganhos Operacionais',
          desc: 'Integração da cadeia produtiva e possibilidade de redução de custos logísticos, financeiros e tributários.'
        }
      ]
    },
    pricing: {
      tag: 'Planos e Investimentos',
      title: 'Transparência e Previsibilidade',
      desc: 'Estruture sua operação na Alemanha com custos claros e serviços de excelência.',
      plans: [
        {
          name: 'Setup Inicial',
          price: '10.000 €',
          period: 'taxa única',
          features: [
            'Estruturação de empresa GmbH na Alemanha.',
            'Estrutura de representação na Europa.',
            'Abertura de conta bancária alemã.'
          ]
        },
        {
          name: 'Mensalidade',
          price: '3.000 €',
          period: '/ mês',
          features: [
            'Endereço corporativo premium em Hamburgo.',
            'Gestão administrativa, contabilidade e auditoria (compliance europeu).',
            'Assessoria jurídica contínua e suporte estratégico da equipe.'
          ]
        }
      ],
      additional: {
        title: 'Serviços Adicionais (On-Demand)',
        desc: 'Business Plans bancáveis, Estudos de viabilidade, Export Finance, Corporate Finance, Marketing Digital na Europa, entre outros.'
      }
    },
    members: {
      tag: 'O Condomínio Empresarial',
      title: 'Membros e Sinergias',
      desc: 'Conheça as empresas que já fazem parte do nosso cluster e geram valor em conjunto.',
      companies: [
        {
          name: 'UNIC Automotive & Aerospace GmbH',
          desc: 'Backbone industrial e logístico (Usinagem, manufatura, comércio exterior).'
        },
        {
          name: 'J. Queiroz Steelworks GmbH',
          desc: 'Execução de projetos de infraestrutura complexa (Engenharia, energia, infraestrutura ferroviária).'
        },
        {
          name: 'BR Intercon GmbH (Grupo AMO Saúde)',
          desc: 'Vertical de saúde (Telemedicina, diagnóstico, saúde corporativa e financiamento de equipamentos).'
        },
        {
          name: 'Hardrada Energy Tech GmbH',
          desc: 'Vertical ESG e Energia (Termoconversão, créditos de carbono, soluções sustentáveis).'
        }
      ],
      synergies: {
        title: 'Sinergias do Cluster',
        desc: 'Exemplos de força conjunta: Projetos turnkey industriais (UNIC + J. Queiroz), Plantas de energia sustentável (J. Queiroz + Hardrada) e Redução de custos globais (UNIC + Todos).'
      }
    },
    gallery: {
      tag: 'Bettahaus Hafencity',
      title: 'Nosso Espaço em Hamburgo',
      desc: 'Um ambiente de negócios premium e colaborativo, focado na geração de valor e sucesso da sua operação na Europa.'
    },
    team: {
      tag: 'Nossa Liderança',
      title: 'Sócios Diretores',
      members: [
        {
          name: 'Mauricio Araquam',
          role: 'Managing Director - Brid Logistics GmbH',
          bio: 'Doutor em Ciências (Universidade de Brasília, Instituto de Tecnologia, PPGT, 2017). Assessorou o governo brasileiro em diversos projetos de logística e infraestrutura, incluindo novos sistemas portuários e ferroviários. Presta consultoria em projetos de energia renovável (hidrogênio, energia fotovoltaica e eólica), apoiando as atividades de investidores alemães na Europa, América Latina e Ásia.',
          image: 'https://i.ibb.co/KxcQCmSx/file-1.jpg',
          email: 'mauricio@willkommen.website',
          phone: '+49 175 9765548'
        },
        {
          name: 'Antônio Jordão',
          role: 'LATIN AMERICA DIRECTOR',
          bio: 'Especialista em Gerenciamento de Riscos e Estratégia. Pós-Graduado em Gestão Empresarial (Instituto COPPEAD/UFRJ). Mestrado em Ciências Náuticas (Escola de Guerra Naval). Capitão-de-Fragata da Armada, na Reserva Remunerada da Marinha do Brasil, onde exerceu cargos nas seguintes áreas do conhecimento e da gestão: Salvamento, Defesa Civil, Aviação, Recursos Humanos, Logística, Planejamento Estratégico, Inovação e Ensino.',
          image: 'https://i.ibb.co/Y45X2sWG/file-2.jpg',
          email: 'jordao@willkommen.website',
          phone: '+55 34 9 9221-0009'
        }
      ]
    },
    contact: {
      title: 'Fale Conosco',
      desc: 'Nossos especialistas estão prontos para estruturar sua operação na Europa.',
      info: {
        europe: 'Europa',
        latam: 'América Latina',
        location: 'Hamburg, Germany'
      },
      labels: {
        name: 'Nome Completo',
        email: 'E-mail Corporativo',
        objective: 'Qual seu principal objetivo?',
        message: 'Mensagem',
        submit: 'Enviar Solicitação'
      },
      objectives: [
        'Abertura de Empresa',
        'Informações sobre o Condomínio',
        'Parcerias Estratégicas',
        'Outros'
      ]
    },
    footer: {
      address: 'Versmannstraße 4, Betahaus Hafencity, 20457 Hamburg - Germany',
      site: 'www.bridlogistics.com',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso'
    }
  },
  en: {
    nav: {
      home: 'Home',
      concept: 'The Concept',
      structure: 'Structure',
      advantages: 'Advantages',
      investment: 'Investment',
      members: 'Members',
      contact: 'Contact',
      cta: 'Talk to an Expert'
    },
    hero: {
      badge: 'Global Reach • Local Expertise',
      title: 'Transforming companies into self-financing ',
      titleAccent: 'global groups.',
      desc: 'More than a virtual office or consultancy. Willkommen is an international structuring platform based in Germany, designed in a clustered architecture.',
      ctaPrimary: 'Talk to an Expert',
      ctaSecondary: 'Discover the Business Condominium',
      stats: {
        years: 'Years in Market',
        companies: 'Companies Formed',
        volume: 'Trade Volume'
      }
    },
    about: {
      tag: 'What is Willkommen?',
      title: 'Synthesis and Structure',
      desc: 'Willkommen acts as a manager and integrator of a business condominium in Europe. Participating companies maintain <span class="font-bold text-[#FFCF00] uppercase">FULL LEGAL, FINANCIAL, AND ACCOUNTING AUTONOMY</span> while benefiting from a robust infrastructure.',
      layers: [
        {
          title: 'Layer 1 – Infrastructure',
          desc: 'Administrative, Legal, Accounting, and Banking.'
        },
        {
          title: 'Layer 2 – Strategy',
          desc: 'Financial modeling, Project structuring, Marketing, and Branding.'
        },
        {
          title: 'Layer 3 – Execution',
          desc: 'Procurement, Financing, International logistics.'
        }
      ],
      risk: 'Risk Structure: Each company structures its individual commitments according to its needs, respecting the individuality of each member of the condominium.'
    },
    advantages: {
      tag: 'Competitive Advantage',
      title: 'Competitive Advantage and Real Gain',
      subtitle: 'Strategic benefits for your business',
      cards: [
        {
          title: 'Valuation and Branding',
          desc: 'Positioning as a German/European brand, improving value perception for M&A, IPOs, and opening new markets.'
        },
        {
          title: 'Global Compliance',
          desc: 'Adoption of IFRS and German governance, reducing perceived risk by banks.'
        },
        {
          title: 'Cost of Capital',
          desc: 'Drastic drop in financial cost, replacing asset-based guarantees with revenue-based guarantees, with the possibility of accessing attractive European interest rates.'
        },
        {
          title: 'Access and Funding',
          desc: 'Opening to international investors, export/trading finance, and partnerships with European giants (Bosch, Siemens, VW, etc.).'
        },
        {
          title: 'Operational Gains',
          desc: 'Integration of the production chain and possibility of reducing logistical, financial, and tax costs.'
        }
      ]
    },
    pricing: {
      tag: 'Plans and Investments',
      title: 'Transparency and Predictability',
      desc: 'Structure your operation in Germany with clear costs and excellent services.',
      plans: [
        {
          name: 'Initial Setup',
          price: '10.000 €',
          period: 'one-time fee',
          features: [
            'Structuring of a GmbH company in Germany.',
            'Representation structure in Europe.',
            'Opening of a German bank account.'
          ]
        },
        {
          name: 'Monthly Fee',
          price: '3.000 €',
          period: '/ month',
          features: [
            'Premium corporate address in Hamburg.',
            'Administrative management, accounting, and auditing (European compliance).',
            'Continuous legal advice and strategic support from the team.'
          ]
        }
      ],
      additional: {
        title: 'Additional Services (On-Demand)',
        desc: 'Bankable Business Plans, Feasibility studies, Export Finance, Corporate Finance, Digital Marketing in Europe, among others.'
      }
    },
    members: {
      tag: 'The Business Condominium',
      title: 'Members and Synergies',
      desc: 'Meet the companies that are already part of our cluster and generate value together.',
      companies: [
        {
          name: 'UNIC Automotive & Aerospace GmbH',
          desc: 'Industrial and logistical backbone (Machining, manufacturing, foreign trade).'
        },
        {
          name: 'J. Queiroz Steelworks GmbH',
          desc: 'Execution of complex infrastructure projects (Engineering, energy, railway infrastructure).'
        },
        {
          name: 'BR Intercon GmbH (AMO Saúde Group)',
          desc: 'Health vertical (Telemedicine, diagnostics, corporate health, and equipment financing).'
        },
        {
          name: 'Hardrada Energy Tech GmbH',
          desc: 'ESG and Energy Vertical (Thermoconversion, carbon credits, sustainable solutions).'
        }
      ],
      synergies: {
        title: 'Cluster Synergies',
        desc: 'Examples of joint strength: Industrial turnkey projects (UNIC + J. Queiroz), Sustainable energy plants (J. Queiroz + Hardrada), and Global cost reduction (UNIC + All).'
      }
    },
    gallery: {
      tag: 'Bettahaus Hafencity',
      title: 'Our Space in Hamburg',
      desc: 'A premium and collaborative business environment, focused on generating value and success for your operation in Europe.'
    },
    team: {
      tag: 'Our Leadership',
      title: 'Managing Partners',
      members: [
        {
          name: 'Mauricio Araquam',
          role: 'Managing Director - Brid Logistics GmbH',
          bio: 'Doctor of Science (Brasilia University, Technology Institute, PPGT, 2017). Advised the Brazilian government on several logistics and infrastructure projects, including new port and railway systems. Provides consulting on renewable energy projects (hydrogen, photovoltaic and wind energy), supporting the activities of German investors in Europe, Latin America and Asia.',
          image: 'https://i.ibb.co/KxcQCmSx/file-1.jpg',
          email: 'mauricio@willkommen.website',
          phone: '+49 175 9765548'
        },
        {
          name: 'Antônio Jordão',
          role: 'LATIN AMERICA DIRECTOR',
          bio: 'Risk Management and Strategy Specialist. Postgraduate in Business Management (COPPEAD Institute/UFRJ). Master in Nautical Sciences (Naval War College). Frigate Captain of the Armada, in the Paid Reserve of the Brazilian Navy, where he held positions in the following areas of knowledge and management: Rescue, Civil Defense, Aviation, Human Resources, Logistics, Strategic Planning, Innovation, and Education.',
          image: 'https://i.ibb.co/Y45X2sWG/file-2.jpg',
          email: 'jordao@willkommen.website',
          phone: '+55 34 9 9221-0009'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      desc: 'Our experts are ready to structure your operation in Europe.',
      info: {
        europe: 'Europe',
        latam: 'Latin America',
        location: 'Hamburg, Germany'
      },
      labels: {
        name: 'Full Name',
        email: 'Corporate Email',
        objective: 'What is your main goal?',
        message: 'Message',
        submit: 'Send Request'
      },
      objectives: [
        'Company Formation',
        'Condominium Information',
        'Strategic Partnerships',
        'Others'
      ]
    },
    footer: {
      address: 'Versmannstraße 4, Betahaus Hafencity, 20457 Hamburg - Germany',
      site: 'www.bridlogistics.com',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      concept: 'Das Konzept',
      structure: 'Struktur',
      advantages: 'Vorteile',
      investment: 'Investition',
      members: 'Mitglieder',
      contact: 'Kontakt',
      cta: 'Mit einem Experten sprechen'
    },
    hero: {
      badge: 'Globale Reichweite • Lokale Expertise',
      title: 'Transformation von Unternehmen in selbstfinanzierende ',
      titleAccent: 'globale Gruppen.',
      desc: 'Mehr als ein virtuelles Büro oder eine Beratung. Willkommen ist eine internationale Strukturierungsplattform mit Sitz in Deutschland, entworfen in einer geclusterten Architektur.',
      ctaPrimary: 'Mit einem Experten sprechen',
      ctaSecondary: 'Entdecken Sie das Business-Kondominium',
      stats: {
        years: 'Jahre am Markt',
        companies: 'Gegründete Unternehmen',
        volume: 'Handelsvolumen'
      }
    },
    about: {
      tag: 'Was ist Willkommen?',
      title: 'Synthese und Struktur',
      desc: 'Willkommen agiert als Manager und Integrator eines Business-Kondominiums in Europa. Teilnehmende Unternehmen behalten ihre <span class="font-bold text-[#FFCF00] uppercase">VOLLE RECHTLICHE, FINANZIELLE UND BUCHHALTERISCHE AUTONOMIE</span>, während sie von einer robusten Infrastruktur profitieren.',
      layers: [
        {
          title: 'Schicht 1 – Infrastruktur',
          desc: 'Verwaltung, Recht, Buchhaltung und Bankwesen.'
        },
        {
          title: 'Schicht 2 – Strategie',
          desc: 'Finanzmodellierung, Projektstrukturierung, Marketing und Branding.'
        },
        {
          title: 'Schicht 3 – Ausführung',
          desc: 'Beschaffung, Finanzierung, Internationale Logistik.'
        }
      ],
      risk: 'Risikostruktur: Jedes Unternehmen strukturiert seine individuellen Verpflichtungen nach seinen Bedürfnissen und respektiert die Individualität jedes Mitglieds des Kondominiums.'
    },
    advantages: {
      tag: 'Wettbewerbsvorteil',
      title: 'Wettbewerbsvorteil und realer Gewinn',
      subtitle: 'Strategische Vorteile für Ihr Unternehmen',
      cards: [
        {
          title: 'Bewertung und Branding',
          desc: 'Positionierung als deutsche/europäische Marke, Verbesserung der Wertwahrnehmung für M&A, Börsengänge und Erschließung neuer Märkte.'
        },
        {
          title: 'Globale Compliance',
          desc: 'Einführung von IFRS und deutscher Governance, Verringerung des wahrgenommenen Risikos durch Banken.'
        },
        {
          title: 'Kapitalkosten',
          desc: 'Drastischer Rückgang der Finanzierungskosten, Ersatz von vermögensbasierten Garantien durch umsatzbasierte Garantien, mit der Möglichkeit, auf attraktive europäische Zinssätze zuzugreifen.'
        },
        {
          title: 'Zugang und Finanzierung',
          desc: 'Öffnung für internationale Investoren, Export-/Handelsfinanzierung und Partnerschaften mit europäischen Giganten (Bosch, Siemens, VW usw.).'
        },
        {
          title: 'Operative Gewinne',
          desc: 'Integration der Produktionskette und Möglichkeit zur Senkung von Logistik-, Finanz- und Steuerkosten.'
        }
      ]
    },
    pricing: {
      tag: 'Pläne und Investitionen',
      title: 'Transparenz und Vorhersehbarkeit',
      desc: 'Strukturieren Sie Ihre Operation in Deutschland mit klaren Kosten und exzellenten Dienstleistungen.',
      plans: [
        {
          name: 'Initiales Setup',
          price: '10.000 €',
          period: 'einmalige Gebühr',
          features: [
            'Strukturierung einer GmbH in Deutschland.',
            'Repräsentationsstruktur in Europa.',
            'Eröffnung eines deutschen Bankkontos.'
          ]
        },
        {
          name: 'Monatliche Gebühr',
          price: '3.000 €',
          period: '/ Monat',
          features: [
            'Premium-Firmenadresse in Hamburg.',
            'Verwaltungsmanagement, Buchhaltung und Wirtschaftsprüfung (europäische Compliance).',
            'Kontinuierliche Rechtsberatung und strategische Unterstützung durch das Team.'
          ]
        }
      ],
      additional: {
        title: 'Zusätzliche Dienstleistungen (On-Demand)',
        desc: 'Bankfähige Geschäftspläne, Machbarkeitsstudien, Exportfinanzierung, Corporate Finance, Digitales Marketing in Europa u.a.'
      }
    },
    members: {
      tag: 'Das Business-Kondominium',
      title: 'Mitglieder und Synergien',
      desc: 'Lernen Sie die Unternehmen kennen, die bereits Teil unseres Clusters sind und gemeinsam Wert schaffen.',
      companies: [
        {
          name: 'UNIC Automotive & Aerospace GmbH',
          desc: 'Industrielles und logistisches Rückgrat (Zerspanung, Fertigung, Außenhandel).'
        },
        {
          name: 'J. Queiroz Steelworks GmbH',
          desc: 'Ausführung komplexer Infrastrukturprojekte (Engineering, Energie, Eisenbahninfrastruktur).'
        },
        {
          name: 'BR Intercon GmbH (AMO Saúde Group)',
          desc: 'Gesundheitsvertikale (Telemedizin, Diagnostik, Unternehmensgesundheit und Ausrüstungsfinanzierung).'
        },
        {
          name: 'Hardrada Energy Tech GmbH',
          desc: 'ESG- und Energie-Vertikale (Thermokonversion, Emissionszertifikate, nachhaltige Lösungen).'
        }
      ],
      synergies: {
        title: 'Cluster-Synergien',
        desc: 'Beispiele für gemeinsame Stärke: Industrielle schlüsselfertige Projekte (UNIC + J. Queiroz), Nachhaltige Energieanlagen (J. Queiroz + Hardrada) und Globale Kostensenkung (UNIC + Alle).'
      }
    },
    gallery: {
      tag: 'Bettahaus Hafencity',
      title: 'Unser Raum in Hamburg',
      desc: 'Ein erstklassiges und kollaboratives Geschäftsumfeld, das auf die Wertschöpfung und den Erfolg Ihrer Operation in Europa ausgerichtet ist.'
    },
    team: {
      tag: 'Unsere Führung',
      title: 'Geschäftsführende Gesellschafter',
      members: [
        {
          name: 'Mauricio Araquam',
          role: 'Managing Director - Brid Logistics GmbH',
          bio: 'Doktor der Wissenschaften (Universität Brasília, Institut für Technologie, PPGT, 2017). Beriet die brasilianische Regierung bei mehreren Logistik- und Infrastrukturprojekten, einschließlich neuer Hafen- und Eisenbahnsysteme. Bietet Beratung bei Projekten für erneuerbare Energien (Wasserstoff, Photovoltaik und Windenergie) und unterstützt die Aktivitäten deutscher Investoren in Europa, Lateinamerika und Asien.',
          image: 'https://i.ibb.co/KxcQCmSx/file-1.jpg',
          email: 'mauricio@willkommen.website',
          phone: '+49 175 9765548'
        },
        {
          name: 'Antônio Jordão',
          role: 'LATIN AMERICA DIRECTOR',
          bio: 'Spezialist für Risikomanagement und Strategie. Postgraduiertenabschluss in Unternehmensführung (COPPEAD Institut/UFRJ). Master in Nautik (Marineakademie). Fregattenkapitän der Armada, in der bezahlten Reserve der brasilianischen Marine, wo er Positionen in folgenden Wissens- und Managementbereichen innehatte: Rettungswesen, Zivilschutz, Luftfahrt, Personalwesen, Logistik, strategische Planung, innovation und Bildung.',
          image: 'https://i.ibb.co/Y45X2sWG/file-2.jpg',
          email: 'jordao@willkommen.website',
          phone: '+55 34 9 9221-0009'
        }
      ]
    },
    contact: {
      title: 'Kontakt',
      desc: 'Unsere Experten sind bereit, Ihre Operation in Europa zu strukturieren.',
      info: {
        europe: 'Europa',
        latam: 'Lateinamerika',
        location: 'Hamburg, Germany'
      },
      labels: {
        name: 'Vollständiger Name',
        email: 'Firmen-E-Mail',
        objective: 'Was ist Ihr Hauptziel?',
        message: 'Nachricht',
        submit: 'Anfrage senden'
      },
      objectives: [
        'Unternehmensgründung',
        'Informationen zum Kondominium',
        'Strategische Partnerschaften',
        'Andere'
      ]
    },
    footer: {
      address: 'Versmannstraße 4, Betahaus Hafencity, 20457 Hamburg - Germany',
      site: 'www.bridlogistics.com',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      concept: 'El Concepto',
      structure: 'Estructura',
      advantages: 'Ventajas',
      investment: 'Inversión',
      members: 'Miembros',
      contact: 'Contacto',
      cta: 'Hable con un Especialista'
    },
    hero: {
      badge: 'Alcance Global • Expertise Local',
      title: 'Transformando empresas en grupos globales ',
      titleAccent: 'autofinanciables.',
      desc: 'Más que una oficina virtual o consultoría. Willkommen es una plataforma de estructuración internacional con sede en Alemania, diseñada en arquitectura clúster.',
      ctaPrimary: 'Hable con un Especialista',
      ctaSecondary: 'Conozca el Condominio Empresarial',
      stats: {
        years: 'Años de Mercado',
        companies: 'Empresas Abiertas',
        volume: 'Volumen de Trade'
      }
    },
    about: {
      tag: '¿Qué es Willkommen?',
      title: 'Síntesis y Estructura',
      desc: 'Willkommen actúa como gestora e integradora de un condominio empresarial en Europa. Las empresas participantes mantienen <span class="font-bold text-[#FFCF00] uppercase">TOTAL AUTONOMÍA JURÍDICA, FINANCIERA Y CONTABLE</span>, mientras se benefician de una infraestructura robusta.',
      layers: [
        {
          title: 'Capa 1 – Infraestructura',
          desc: 'Administrativa, Jurídica, Contable y Bancaria.'
        },
        {
          title: 'Capa 2 – Estrategia',
          desc: 'Modelado financiero, Estructuración de proyectos, Marketing e Branding.'
        },
        {
          title: 'Capa 3 – Ejecución',
          desc: 'Procurement, Financiamiento, Logística internacional.'
        }
      ],
      risk: 'Estructura de Riesgo: Cada empresa estructura sus compromisos individuales según sus necesidades, respetando la individualidad de cada miembro del condominio.'
    },
    advantages: {
      tag: 'Diferencial Competitivo',
      title: 'Diferencial Competitivo y Ganancia Real',
      subtitle: 'Beneficios estratégicos para su negocio',
      cards: [
        {
          title: 'Valuation y Branding',
          desc: 'Posicionamiento como marca alemana/europea, mejorando la percepción de valor para M&A, IPOs y abriendo nuevos mercados.'
        },
        {
          title: 'Compliance Global',
          desc: 'Adopción de IFRS y gobernanza alemana, reduciendo el riesgo percibido por los bancos.'
        },
        {
          title: 'Costo de Capital',
          desc: 'Caída drástica en el costo financiero, con sustitución de garantías patrimoniales por garantías basadas en facturación, con la posibilidad de acceso a los atractivos intereses europeos.'
        },
        {
          title: 'Acceso y Funding',
          desc: 'Apertura para inversores internacionales, export/trading finance y alianzas con gigantes europeos (Bosch, Siemens, VW, etc.).'
        },
        {
          title: 'Ganancias Operativas',
          desc: 'Integración de la cadena productiva y posibilidad de reducción de costos logísticos, financieros y tributarios.'
        }
      ]
    },
    pricing: {
      tag: 'Planes e Inversiones',
      title: 'Transparencia y Previsibilidad',
      desc: 'Estructure su operación en Alemania con costos claros y servicios de excelencia.',
      plans: [
        {
          name: 'Setup Inicial',
          price: '10.000 €',
          period: 'tasa única',
          features: [
            'Estructuración de empresa GmbH en Alemania.',
            'Estructura de representación en Europa.',
            'Apertura de cuenta bancaria alemana.'
          ]
        },
        {
          name: 'Mensualidad',
          price: '3.000 €',
          period: '/ mes',
          features: [
            'Dirección corporativa premium en Hamburgo.',
            'Gestión administrativa, contabilidad y auditoría (compliance europeo).',
            'Asesoría jurídica continua y soporte estratégico del equipo.'
          ]
        }
      ],
      additional: {
        title: 'Servicios Adicionales (On-Demand)',
        desc: 'Business Plans bancables, Estudios de viabilidad, Export Finance, Corporate Finance, Marketing Digital en Europa, entre otros.'
      }
    },
    members: {
      tag: 'El Condominio Empresarial',
      title: 'Miembros y Sinergias',
      desc: 'Conozca las empresas que ya forman parte de nuestro clúster y generan valor en conjunto.',
      companies: [
        {
          name: 'UNIC Automotive & Aerospace GmbH',
          desc: 'Backbone industrial y logístico (Mecanizado, manufactura, comercio exterior).'
        },
        {
          name: 'J. Queiroz Steelworks GmbH',
          desc: 'Ejecución de proyectos de infraestructura compleja (Ingeniería, energía, infraestructura ferroviaria).'
        },
        {
          name: 'BR Intercon GmbH (Grupo AMO Saúde)',
          desc: 'Vertical de salud (Telemedicina, diagnóstico, salud corporativa y financiación de equipos).'
        },
        {
          name: 'Hardrada Energy Tech GmbH',
          desc: 'Vertical ESG y Energía (Termoconversión, créditos de carbono, soluciones sostenibles).'
        }
      ],
      synergies: {
        title: 'Sinergias del Clúster',
        desc: 'Ejemplos de fuerza conjunta: Proyectos turnkey industriales (UNIC + J. Queiroz), Plantas de energía sostenible (J. Queiroz + Hardrada) y Reducción de costos globales (UNIC + Todos).'
      }
    },
    gallery: {
      tag: 'Bettahaus Hafencity',
      title: 'Nuestro Espacio en Hamburgo',
      desc: 'Un entorno de negocios premium y colaborativo, enfocado en la generación de valor y éxito de su operación en Europa.'
    },
    team: {
      tag: 'Nuestro Liderazgo',
      title: 'Socios Directores',
      members: [
        {
          name: 'Mauricio Araquam',
          role: 'Managing Director - Brid Logistics GmbH',
          bio: 'Doctor en Ciencias (Universidad de Brasilia, Instituto de Tecnología, PPGT, 2017). Asesoró al gobierno brasileño en diversos proyectos de logística e infraestructura, incluyendo nuevos sistemas portuarios y ferroviarios. Presta consultoría en proyectos de energía renovable (hidrógeno, energía fotovoltaica y eólica), apoyando las actividades de inversores alemanes en Europa, América Latina y Asia.',
          image: 'https://i.ibb.co/KxcQCmSx/file-1.jpg',
          email: 'mauricio@willkommen.website',
          phone: '+49 175 9765548'
        },
        {
          name: 'Antônio Jordão',
          role: 'LATIN AMERICA DIRECTOR',
          bio: 'Especialista en Gestión de Riesgos y Estrategia. Posgrado en Gestión Empresarial (Instituto COPPEAD/UFRJ). Maestría en Ciencias Náuticas (Escuela de Guerra Naval). Capitán de Fragata de la Armada, en la Reserva Remunerada de la Marina de Brasil, donde ejerció cargos en las siguientes áreas de conocimiento y gestión: Salvamento, Defensa Civil, Aviación, Recursos Humanos, Logística, Planificación Estratégica, Innovación y Enseñanza.',
          image: 'https://i.ibb.co/Y45X2sWG/file-2.jpg',
          email: 'jordao@willkommen.website',
          phone: '+55 34 9 9221-0009'
        }
      ]
    },
    contact: {
      title: 'Hable con Nosotros',
      desc: 'Nuestros especialistas están listos para estructurar su operación en Europa.',
      info: {
        europe: 'Europa',
        latam: 'América Latina',
        location: 'Hamburgo, Alemania'
      },
      labels: {
        name: 'Nombre Completo',
        email: 'E-mail Corporativo',
        objective: '¿Cuál es su principal objetivo?',
        message: 'Mensaje',
        submit: 'Enviar Solicitud'
      },
      objectives: [
        'Apertura de Empresa',
        'Información sobre el Condominio',
        'Alianzas Estratégicas',
        'Otros'
      ]
    },
    footer: {
      address: 'Versmannstraße 4, Betahaus Hafencity, 20457 Hamburgo - Alemania',
      site: 'www.bridlogistics.com',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso'
    }
  }
};
