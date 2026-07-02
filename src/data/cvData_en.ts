// src/data/cvData_en.ts
// English translation of CV data for Dr. Nicolás Matías Márquez Álvarez

export interface Publication {
  authors: string;
  year: string;
  title: string;
  journal: string;
  doi?: string;
  status: 'published' | 'in-press' | 'under-review' | 'working-paper' | 'book';
  correspondingAuthor?: boolean;
  section?: 'eis' | 'otros';
}

export const cvData = {
  fullName: "Nicolás Matías Márquez Álvarez",
  shortName: "Nicolás Márquez",
  degree: "MBA, PhD in Management",
  institution: "Universidad Adolfo Ibáñez",
  email: "nicolasmarquezalvarez@gmail.com",
  phone: "",
  address: "1 sur 660 Dpto 605, Talca, 3460000, Chile",
  position: "Head of Program and Assistant Professor",
  department: "Business Administration",
  workInstitution: "Universidad Santo Tomás",

  researchFields: [
    "Entrepreneurship",
    "Innovation and SMEs",
    "Sustainability",
    "AI and Entrepreneurial Judgment",
    "Innovation Governance",
    "Institutional Contexts in Latin America"
  ],

  teachingAreas: [
    "Entrepreneurship",
    "New Venture Creation",
    "Management",
    "Innovation Management",
    "Strategic Management",
    "Sustainable Business",
    "Corporate Social Responsibility",
    "Business Process Management",
    "Research Methods"
  ],

  bio: "Academic and researcher in entrepreneurship, innovation and sustainability. PhD in Management from Universidad Adolfo Ibáñez (ANID Doctoral Fellow, 2021-2025), with experience as Visiting Researcher at the University of Nottingham, United Kingdom. His research focuses on entrepreneurship, SME innovation, sustainability, and the implications of artificial intelligence on entrepreneurial judgment, with particular attention to Latin American contexts.",

  education: [
    {
      period: "2021 – 2026",
      degree: "PhD in Management",
      institution: "Universidad Adolfo Ibáñez, Peñalolén, Chile",
      details: [
        "ANID Doctoral Fellow, 2021–2025",
        "Doctoral Visiting Researcher, University of Nottingham, Reino Unido",
        "Thesis: \"Green management, innovation and territorial dynamics in Latin America on the road to sustainable development\""
      ]
    },
    {
      period: "2014 – 2015",
      degree: "Master's in Business Administration (MBA)",
      institution: "Universidad de Talca, Chile",
      details: [
        "Graduated with Maximum Distinction",
        "Thesis: \"Business Plan for Civil Nova\""
      ]
    },
    {
      period: "2008 – 2012",
      degree: "BSc in Business Informatics Engineering",
      institution: "Universidad de Talca, Chile",
      details: [
        "Graduated with Maximum Distinction",
        "Thesis: \"Development of a Platform to Promote Labour Market Activity: Recomiendame.cl\""
      ]
    }
  ],

  publications: [
    {
      authors: "Cabezas, G. R., Esquivel, R. M., Márquez, N., Espejo, S. C., Nuñez, V. N., & Bonilla, J. C. L.",
      year: "2024",
      title: "Green management, perceived barriers to sustainability, and innovation performance in Latin American SMEs",
      journal: "International Journal of Business Environment",
      doi: "10.1504/IJBE.2024.139669",
      status: "published",
      correspondingAuthor: true,
      section: "eis"
    },
    {
      authors: "Cabezas-Quinto, J. J., Vidal-Silva, C., Serrano-Malebrán, J., & Márquez, N.",
      year: "2025",
      title: "A Dataset and Experimental Evaluation of a Parallel Conflict Detection Solution for Model-Based Diagnosis",
      journal: "Data",
      doi: "10.3390/data10090139",
      status: "published",
      correspondingAuthor: true,
      section: "otros"
    },
    {
      authors: "Cárdenas-Cobo, J., Vidal-Silva, C., & Márquez, N.",
      year: "2025",
      title: "Dataset on Programming Competencies Development Using Scratch and a Recommender System in a Non-WEIRD Primary School Context",
      journal: "Data",
      doi: "10.3390/data10060086",
      status: "published",
      correspondingAuthor: true,
      section: "otros"
    },
    {
      authors: "Carrión León, D. I., Vidal-Silva, C., & Márquez, N.",
      year: "2025",
      title: "Scalable Model-Based Diagnosis with FastDiag: A Dataset and Parallel Benchmark Framework",
      journal: "Data",
      doi: "10.3390/data10090141",
      status: "published",
      correspondingAuthor: true,
      section: "otros"
    },
    {
      authors: "Chávez-Núñez, L., Calderón-Cisneros, J., Yerovi-Ricaurte, E., Ortega-Ponce, L., Márquez, N., & Vidal-Silva, C.",
      year: "2025",
      title: "Local Leadership Under Pressure: Competency Demands for Sustainable Governance in Ecuador",
      journal: "Sustainability",
      doi: "10.3390/su17219720",
      status: "published",
      correspondingAuthor: true,
      section: "eis"
    },
    {
      authors: "Fernandes, A. C., de Moraes, Y., Silva Carvalho, P. H., Sandoval, C., Landim, S. F., & Márquez, N.",
      year: "2025",
      title: "Rehabilitation of Visually Impaired People: Experiences and Relevance According to the Perception of Family Members and Patients",
      journal: "Healthcare",
      doi: "10.3390/healthcare13070712",
      status: "published",
      section: "otros"
    },
    {
      authors: "González, C. F. G., Navarro, M., Branco, B. H. M., Avello, D., Márquez Álvarez, N., Landim, S. F., & Leiva-Bianch, M.",
      year: "2024",
      title: "Psychosocial Impact of Quarantines: A Systematic Review with Meta-Analysis",
      journal: "Healthcare",
      doi: "10.3390/healthcare12232409",
      status: "published",
      section: "otros"
    },
    {
      authors: "Kara, A., Spillan, J. E., Cabezas, G. R., Márquez, N., & Nocetti Nuñez, V. R.",
      year: "2023",
      title: "Examining Chilean Students' Interest in Entrepreneurship Education: The Effects of Self-Employment Perceptions, Self-Confidence, and College Type",
      journal: "Latin American Business Review",
      doi: "10.1080/10978526.2023.2275679",
      status: "published",
      section: "eis"
    },
    {
      authors: "Kara, A., Spillan, J. E., Grunwald, G., Rojas Cabezas, G., Márquez Alvarez, N., & Nocetti Nuñez, V. R.",
      year: "2025",
      title: "Analyzing the Influence of Sustainability Benefits on Chilean Consumers' Intentions to Purchase Refurbished Smartphones",
      journal: "Organizations and Markets in Emerging Economies",
      doi: "10.15388/omee.2025.16.2",
      status: "published",
      section: "eis"
    },
    {
      authors: "Kara, A., Grunwald, G., Spillan, J. E., Cabezas, G. R., Márquez, N., & Nocetti, V.",
      year: "2025",
      title: "When Environmental Effect Goes Undetected in Refurbished Smartphone Purchases: An fsQCA Approach",
      journal: "Latin American Business Review",
      doi: "10.1080/10978526.2025.2599544",
      status: "published",
      section: "eis"
    },
    {
      authors: "Márquez, N.",
      year: "2023",
      title: "Teoría aplicada sobre Organización y Sostenibilidad",
      journal: "Independently published",
      status: "book",
      section: "eis"
    },
    {
      authors: "Márquez, N.",
      year: "2026",
      title: "Reprogramming entrepreneurship: Artificial intelligence, hybrid judgment, and the governance of innovation",
      journal: "The International Journal of Entrepreneurship and Innovation",
      status: "in-press",
      section: "eis"
    },
    {
      authors: "Márquez, N., & Cancino, C.",
      year: "in Press",
      title: "AI-Augmented Entrepreneurship: Governance and the Automate–Augment Logic Across Ideation, Discovery, Design, and Learning",
      journal: "Revista Academia & Negocios",
      status: "in-press",
      section: "eis"
    },
    {
      authors: "Márquez, N., Rojas, G., Chacón, S., & Nocetti, V.",
      year: "2023",
      title: "The Quality Of The Services Provided By Business Development Centers And Their Effect On Micro, Small And Medium-Sized Enterprises In Chile",
      journal: "Journal of Developmental Entrepreneurship",
      doi: "10.1142/S1084946723500176",
      status: "published",
      section: "eis"
    },
    {
      authors: "Muñoz-Cisterna V, Mora R, Márquez Álvarez N, Beckles-Araya JC",
      year: "2026",
      title: "Communication and information resources and product innovation in SMEs: the sequential role of co-creation and process innovation",
      journal: "Management Research: The Journal of the Iberoamerican Academy of Management",
      doi: "10.1108/MRJIAM-07-2025-1765",
      status: "published",
      correspondingAuthor: true,
      section: "eis"
    },
    {
      authors: "Moreno-Castro, D., Franco-Arias, O. O., Pimenteira, C., Márquez, N., & Vidal-Silva, C.",
      year: "2026",
      title: "A Reproducible Computational Pipeline for Cross-Database Scientometric Network Construction: Architecture, Algorithms, and Structural Validation",
      journal: "Computers",
      doi: "10.3390/computers15040213",
      status: "published",
      correspondingAuthor: true,
      section: "otros"
    },
    {
      authors: "Peñaherrera-Veloz, H., Vásquez-Torres, C. F., Campuzano-Rodríguez, M. A., Campuzano-Rodríguez, S. M., Peñaherrera-Veloz, I. V., Márquez, N., & Vidal-Silva, C.",
      year: "2026",
      title: "Advancing Circular Economy In Hospitality: A Global Bibliometric And Thematic Analysis Of Strategies, Challenges, And Managerial Implications",
      journal: "Scientific Culture",
      doi: "10.5281/zenodo.11425165",
      status: "published",
      correspondingAuthor: true,
      section: "otros"
    },
    {
      authors: "Pesantez-Jara, N., Márquez, N., & Vidal-Silva, C.",
      year: "2025",
      title: "Health Education for Promoting Healthy Eating Habits and Preventing Nutrition-Related Diseases: A Technopedagogical Research Study",
      journal: "Journal of Cultural Analysis and Social Change",
      doi: "10.64753/jcasc.v10i4.3876",
      status: "published",
      correspondingAuthor: true,
      section: "otros"
    },
    {
      authors: "Pesantez-Jara, N., Márquez, N., & Vidal-Silva, C.",
      year: "2026",
      title: "Modeling the Nutrition–Academic Intention Gap: A Data-Driven Adaptive Gamified Architecture",
      journal: "Computers",
      doi: "10.3390/computers15030152",
      status: "published",
      correspondingAuthor: true,
      section: "otros"
    },
    {
      authors: "Pérez-Salazar, J., Márquez, N., & Vidal-Silva, C.",
      year: "2026",
      title: "Algorithmic Profiling of Operational Risk: A Data-Driven Predictive Model for Micro-Enterprise Solvency Assessment",
      journal: "Computers",
      doi: "10.3390/computers15020135",
      status: "published",
      correspondingAuthor: true,
      section: "otros"
    },
    {
      authors: "Rivera-Naranjo, C., Márquez, N., & Vidal-Silva, C.",
      year: "2026",
      title: "Data Literacy Through Digital Inquiry: A Visual Framework for Teaching Trade Policy (Ecuador, 1979–2024)",
      journal: "Computers",
      doi: "10.3390/computers15020129",
      status: "published",
      correspondingAuthor: true,
      section: "otros"
    },
    {
      authors: "Rojas-Cabezas, G., Mora-Esquivel, R., Márquez, N., Chacón-Espejo, S., Nocetti-Núñez, V., & Leiva, J. C.",
      year: "2024",
      title: "The influence of institutional context in the relationship between green management, perceived barriers to sustainability and innovation performance in SMEs",
      journal: "Academia Revista Latinoamericana de Administración",
      doi: "10.1108/ARLA-07-2024-0158",
      status: "published",
      correspondingAuthor: true,
      section: "eis"
    },
    {
      authors: "Vinueza-Morales, M., Tupac-Yupanqui, M., Márquez, N., & Vidal-Silva, C.",
      year: "2026",
      title: "A Unified Multi-Dimensional Cost Analysis of Speculative Parallel Conflict Detection and Diagnosis",
      journal: "Computers",
      doi: "10.3390/computers15040201",
      status: "published",
      correspondingAuthor: true,
      section: "otros"
    }
  ] as Publication[],

  underReview: [
    {
      authors: "Márquez, N.",
      year: "2026",
      title: "Entrepreneurial Judgment in the Age of AI: Toward a Theory of Governed Judgment",
      journal: "Journal of Small Business and Enterprise Development"
    },
    {
      authors: "Márquez, N., Sánchez, P., Bravo-Ortega, C., & Novelli, M.",
      year: "2025",
      title: "Touristification and rural silent spatial appropriation",
      journal: "Annals of Tourism Research"
    },
    {
      authors: "Márquez, N., Rojas, G., Mora, R., & Leiva, J. C.",
      year: "2025",
      title: "Green Management and SME Performance in Latin America: The Mediating Roles of Innovation and Perceived Sustainability Benefits",
      journal: "Academia Revista Latinoamericana de Administración"
    },
    {
      authors: "Pinto-Gutiérrez, C., Bravo-Ortega, C., Márquez, N., & Vienne, V.",
      year: "2025",
      title: "Carbon risk exposure and firm performance: Evidence from Chile using satellite CO₂ observations",
      journal: "Sustainable Development"
    }
  ],

  workingPapers: [
    "Márquez, N., & Castillo, M. Systematic review for the use of AI in editorial process review.",
    "Márquez, N., & Aravena, C. Gender Bias and Context in Pitch Evaluation Entrepreneurs.",
    "Márquez, N., Bravo-Ortega, C., & Symmes, F. Entrepreneurship as a mechanism to mitigate rural-to-urban migration."
  ],

  academicPositions: [
    {
      period: "2022 – Present",
      institution: "Universidad Santo Tomás, Talca, Chile",
      role: { es: "Jefe de Carrera y Profesor Asistente", en: "Head of Program and Assistant Professor" },
      details: {
        es: [
          "Director de la Carrera de Ingeniería Comercial",
          "Docencia: gestión, gestión de la innovación, emprendimiento y responsabilidad social empresarial",
          "Premio al Mejor Docente 2023-2 (3.85/4.0)"
        ],
        en: [
          "Head of the Undergraduate Program in Business Administration",
          "Teaching: management, innovation management, entrepreneurship, corporate social responsibility",
          "Outstanding Teacher Award 2023-2 (3.85/4.0)"
        ]
      }
    },
    {
      period: "2023 – Present",
      institution: "Universidad Autónoma de Chile, Talca, Chile",
      role: { es: "Profesor", en: "Lecturer" },
      details: {
        es: [
          "Cursos: Gestión de Procesos de Negocio, Sistemas de Gestión Integrados",
          "Premio al Mejor Docente 2024 (3.93/4.0)"
        ],
        en: [
          "Courses: Business Process Management, Integrated Management Systems",
          "Outstanding Teacher Award 2024 (3.93/4.0)"
        ]
      }
    },
    {
      period: "2018 – 2022",
      institution: "Universidad de Talca, Chile",
      role: { es: "Profesor", en: "Lecturer" },
      details: {
        es: [
          "Cursos: Gestión, Control de Gestión, Gestión de Proyectos I y II, Business Intelligence, Análisis de Datos",
          "Director y evaluador de tesis (pregrado)"
        ],
        en: [
          "Courses: Management, Management Control, Project Management I & II, Business Intelligence, Data Analysis",
          "Thesis supervisor and examiner (undergraduate level)"
        ]
      }
    },
    {
      period: "2021 – 2022",
      institution: "Universidad Católica del Maule, Talca, Chile",
      role: { es: "Profesor", en: "Lecturer" },
      details: {
        es: [
          "Cursos: Métodos Cuantitativos, Emprendimiento y Creación de Nuevos Negocios"
        ],
        en: [
          "Courses: Quantitative Methods, Entrepreneurship and New Venture Creation"
        ]
      }
    },
    {
      period: "2020 – 2022",
      institution: "Instituto Profesional Iplacex, Talca, Chile",
      role: { es: "Jefe de Carrera", en: "Head of Program" },
      details: {
        es: [
          "Director de Programas Técnicos y Profesionales en Administración"
        ],
        en: [
          "Head of Technical and Professional Programs in Business Administration"
        ]
      }
    }
  ],

  professionalExperience: [
    {
      period: "2018 – Present",
      organization: "Public Procurement and Tenders, Talca, Chile",
      role: { es: "Consultor Independiente", en: "Independent Consultant" },
      details: {
        es: [
          "Asesoró a empresas privadas en procesos de compras públicas y estrategias de licitación competitiva",
          "Apoyó la preparación, evaluación y presentación de ofertas a través de plataformas nacionales de compras públicas",
          "Brindó orientación sobre estructuras de costos, requisitos de cumplimiento y documentación técnica"
        ],
        en: [
          "Advised private firms on public procurement processes and competitive tendering strategies",
          "Supported the preparation, evaluation, and submission of bids through national public procurement platforms",
          "Provided guidance on cost structures, compliance requirements, and technical documentation"
        ]
      }
    },
    {
      period: "2013 – 2018",
      organization: "Protector Security Spa, Talca, Chile",
      role: { es: "Gerente Comercial y Financiero", en: "Commercial and Finance Manager" },
      details: {
        es: [
          "Lideró la estrategia comercial y la gestión financiera de una empresa nacional de servicios de seguridad con operaciones en todo Chile",
          "Supervisó los procesos de presupuesto, planificación financiera y control de costos",
          "Coordinó las operaciones de ventas y la gestión de cartera de clientes en un contexto organizacional multisitio"
        ],
        en: [
          "Led commercial strategy and financial management for a national security services company with operations across Chile",
          "Oversaw budgeting, financial planning, and cost control processes",
          "Coordinated sales operations and client portfolio management in a multi-site organizational context"
        ]
      }
    },
    {
      period: "2012 – 2013",
      organization: "Forestal Santa Blanca S.A., Talca, Chile",
      role: { es: "Analista de Business Intelligence", en: "Business Intelligence Analyst" },
      details: {
        es: [
          "Desarrolló y analizó informes de gestión para apoyar la toma de decisiones estratégicas y operativas",
          "Realizó análisis de datos relacionados con el rendimiento comercial, costos y eficiencia operativa",
          "Diseñó dashboards e indicadores para monitorear procesos clave del negocio y resultados organizacionales"
        ],
        en: [
          "Developed and analyzed management reports to support strategic and operational decision-making",
          "Performed data analysis related to commercial performance, costs, and operational efficiency",
          "Designed dashboards and indicators to monitor key business processes and organizational outcomes"
        ]
      }
    }
  ],

  references: [
    {
      name: "Víctor Nocetti",
      position: "Director of School, Ingeniería Comercial",
      institution: "Universidad Santo Tomás",
      email: "vnocetti@santotomas.cl"
    },
    {
      name: "Claudio Bravo-Ortega",
      position: "Associate Professor, Business School",
      institution: "Universidad Adolfo Ibáñez",
      email: "claudio.bravo@uai.cl"
    },
    {
      name: "Patricio Sánchez-Campos",
      position: "Director of Student Recruitment & Educational Partnerships",
      institution: "University of Nottingham",
      email: "Patricio.SanchezCampos@nottingham.ac.uk"
    }
  ],

  skills: {
    analysis: ["Power BI", "Tableau", "SPSS", "Stata", "Nvivo"],
    process: ["ARIS", "Bizagi"],
    databases: ["SQL", "MySQL", "Excel"],
    languages: ["Spanish (Native)", "English (Intermediate)"]
  },

  social: {
    linkedin: "https://www.linkedin.com/in/nicol%C3%A1s-m%C3%A1rquez-96869069/",
    orcid: "#",
    googleScholar: "#",
    researchGate: "https://www.researchgate.net/profile/Nicolas-Marquez-14"
  },

  servicesTagline: "My approach combines academic experience, applied research, and practical management knowledge — bridging evidence, strategy, and action.",
  services: [
    {
      number: "01",
      title: "Academic Consulting",
      description: "Advisory services in research design, methodological review, and manuscript preparation for indexed journals."
    },
    {
      number: "02",
      title: "Business Development",
      description: "Support in business model formulation, market opportunity assessment, and growth strategy design for companies and entrepreneurs."
    },
    {
      number: "03",
      title: "Innovation",
      description: "Innovation maturity assessment, acceleration program design, and social investment project evaluation."
    },
    {
      number: "04",
      title: "Business Process Management",
      description: "Process analysis, redesign, and optimization using BPM methodologies and specialized tools such as ARIS and Bizagi."
    },
    {
      number: "05",
      title: "Business Intelligence & Analytics",
      description: "In partnership with Datametrik — executive dashboards, process automation and predictive analytics."
    }
  ],

  datametrik: {
    name: "DATAMETRIK",
    tagline: "We transform data into decisions that generate results.",
    description: "Datametrik is a consulting firm specialized in Business Intelligence and Analytics that helps companies organize their information, automate processes, and transform data into clear visibility for better decision-making.",
    services: [
      "Data Architecture: We consolidate critical information into a reliable, scalable database ready to support operational growth.",
      "Process Automation: We reduce operational workload by automating key business flows to improve efficiency and continuity.",
      "Business Intelligence: We transform scattered data into executive visibility through dashboards that consolidate business information.",
      "Predictive Analytics: We develop analyses that enable scenario anticipation and support strategic decisions in a timely manner.",
      "Operational Monitoring: We provide continuous visibility over operations to strengthen control, traceability, and responsiveness."
    ],
    methodology: [
      { step: "1", title: "Diagnosis", description: "We analyze the business, processes, and information sources to identify needs and opportunities." },
      { step: "2", title: "Data", description: "We integrate, clean, and structure data to ensure quality, consistency, and security." },
      { step: "3", title: "Automation", description: "We automate processes and workflows to increase efficiency and reduce operational errors." },
      { step: "4", title: "Visualization", description: "We convert data into clear, interactive, and reliable dashboards and reports." },
      { step: "5", title: "Analytics", description: "We apply analytics to discover patterns, measure performance, and anticipate scenarios." },
      { step: "6", title: "AI", description: "We use artificial intelligence and machine learning to predict, recommend, and continuously optimize." },
      { step: "7", title: "Results", description: "We generate measurable impact through more accurate, agile, and data-driven decisions." }
    ],
    contact: "contacto@datametrik.cl",
    phone: "+569 63321022",
    url: "https://datametrik.cl"
  }
};
