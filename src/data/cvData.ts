// src/data/cvData.ts
// Datos reales del CV del Dr. Nicolás Matías Márquez Álvarez

export interface Publication {
  authors: string;
  year: string;
  title: string;
  journal: string;
  doi?: string;
  status: 'published' | 'in-press' | 'under-review' | 'working-paper' | 'book';
  correspondingAuthor?: boolean;
}

export const cvData = {
  fullName: "Dr. Nicolás Matías Márquez Álvarez",
  shortName: "Dr. Nicolás Márquez",
  degree: "PhD in Management",
  institution: "Universidad Adolfo Ibáñez",
  email: "nicolasmarquezalvarez@gmail.com",
  phone: "(+56) 930610500",
  address: "1 sur 660 Dpto 605, Talca, 3460000, Chile",
  position: "Head of Program and Assistant Professor",
  department: "Business Administration",
  workInstitution: "Universidad Santo Tomás",

  researchFields: [
    "Emprendimiento",
    "Innovación y PYMEs",
    "Sostenibilidad",
    "IA y Juicio Emprendedor",
    "Gobernanza de la Innovación",
    "Contextos Institucionales en América Latina"
  ],

  teachingAreas: [
    "Emprendimiento",
    "Creación de Nuevos Negocios",
    "Administración",
    "Gestión de la Innovación",
    "Gestión Estratégica",
    "Negocios Sostenibles",
    "Responsabilidad Social Empresarial",
    "Gestión de Procesos de Negocio",
    "Métodos de Investigación"
  ],

  bio: "Académico e investigador en emprendimiento, innovación y sostenibilidad. Doctor en Management por la Universidad Adolfo Ibáñez (ANID Doctoral Fellow, 2021-2025), con experiencia como Visiting Researcher en University of Nottingham, Reino Unido. Su investigación se enfoca en emprendimiento, innovación en PYMEs, sostenibilidad y las implicancias de la inteligencia artificial en el juicio emprendedor, con particular atención a los contextos latinoamericanos.",

  education: [
    {
      period: "2021 – 2026",
      degree: "PhD in Management",
      institution: "Universidad Adolfo Ibáñez, Peñalolén, Chile",
      details: [
        "ANID Doctoral Fellow, 2021–2025",
        "Doctoral Visiting Researcher, University of Nottingham, Reino Unido",
        "Tesis: \"Green management, innovation and territorial dynamics in Latin America on the road to sustainable development\""
      ]
    },
    {
      period: "2014 – 2015",
      degree: "Master's in Business Administration (MBA)",
      institution: "Universidad de Talca, Chile",
      details: [
        "Graduado con Máximo Distinction",
        "Tesis: \"Business Plan for Civil Nova\""
      ]
    },
    {
      period: "2008 – 2012",
      degree: "BSc in Business Informatics Engineering",
      institution: "Universidad de Talca, Chile",
      details: [
        "Graduado con Máximo Distinction",
        "Tesis: \"Development of a Platform to Promote Labour Market Activity: Recomiendame.cl\""
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
      correspondingAuthor: true
    },
    {
      authors: "Cabezas-Quinto, J. J., Vidal-Silva, C., Serrano-Malebrán, J., & Márquez, N.",
      year: "2025",
      title: "A Dataset and Experimental Evaluation of a Parallel Conflict Detection Solution for Model-Based Diagnosis",
      journal: "Data",
      doi: "10.3390/data10090139",
      status: "published",
      correspondingAuthor: true
    },
    {
      authors: "Cárdenas-Cobo, J., Vidal-Silva, C., & Márquez, N.",
      year: "2025",
      title: "Dataset on Programming Competencies Development Using Scratch and a Recommender System in a Non-WEIRD Primary School Context",
      journal: "Data",
      doi: "10.3390/data10060086",
      status: "published",
      correspondingAuthor: true
    },
    {
      authors: "Carrión León, D. I., Vidal-Silva, C., & Márquez, N.",
      year: "2025",
      title: "Scalable Model-Based Diagnosis with FastDiag: A Dataset and Parallel Benchmark Framework",
      journal: "Data",
      doi: "10.3390/data10090141",
      status: "published",
      correspondingAuthor: true
    },
    {
      authors: "Chávez-Núñez, L., Calderón-Cisneros, J., Yerovi-Ricaurte, E., Ortega-Ponce, L., Márquez, N., & Vidal-Silva, C.",
      year: "2025",
      title: "Local Leadership Under Pressure: Competency Demands for Sustainable Governance in Ecuador",
      journal: "Sustainability",
      doi: "10.3390/su17219720",
      status: "published",
      correspondingAuthor: true
    },
    {
      authors: "Fernandes, A. C., de Moraes, Y., Silva Carvalho, P. H., Sandoval, C., Landim, S. F., & Márquez, N.",
      year: "2025",
      title: "Rehabilitation of Visually Impaired People: Experiences and Relevance According to the Perception of Family Members and Patients",
      journal: "Healthcare",
      doi: "10.3390/healthcare13070712",
      status: "published"
    },
    {
      authors: "González, C. F. G., Navarro, M., Branco, B. H. M., Avello, D., Márquez Álvarez, N., Landim, S. F., & Leiva-Bianch, M.",
      year: "2024",
      title: "Psychosocial Impact of Quarantines: A Systematic Review with Meta-Analysis",
      journal: "Healthcare",
      doi: "10.3390/healthcare12232409",
      status: "published"
    },
    {
      authors: "Kara, A., Spillan, J. E., Cabezas, G. R., Márquez, N., & Nocetti Nuñez, V. R.",
      year: "2023",
      title: "Examining Chilean Students' Interest in Entrepreneurship Education: The Effects of Self-Employment Perceptions, Self-Confidence, and College Type",
      journal: "Latin American Business Review",
      doi: "10.1080/10978526.2023.2275679",
      status: "published"
    },
    {
      authors: "Kara, A., Spillan, J. E., Grunwald, G., Rojas Cabezas, G., Márquez Alvarez, N., & Nocetti Nuñez, V. R.",
      year: "2025",
      title: "Analyzing the Influence of Sustainability Benefits on Chilean Consumers' Intentions to Purchase Refurbished Smartphones",
      journal: "Organizations and Markets in Emerging Economies",
      doi: "10.15388/omee.2025.16.2",
      status: "published"
    },
    {
      authors: "Kara, A., Grunwald, G., Spillan, J. E., Cabezas, G. R., Márquez, N., & Nocetti, V.",
      year: "2025",
      title: "When Environmental Effect Goes Undetected in Refurbished Smartphone Purchases: An fsQCA Approach",
      journal: "Latin American Business Review",
      doi: "10.1080/10978526.2025.2599544",
      status: "published"
    },
    {
      authors: "Márquez, N.",
      year: "2023",
      title: "Teoría aplicada sobre Organización y Sostenibilidad",
      journal: "Independently published",
      status: "book"
    },
    {
      authors: "Márquez, N.",
      year: "2026",
      title: "Reprogramming entrepreneurship: Artificial intelligence, hybrid judgment, and the governance of innovation",
      journal: "The International Journal of Entrepreneurship and Innovation",
      status: "in-press"
    },
    {
      authors: "Márquez, N., & Cancino, C.",
      year: "in Press",
      title: "AI-Augmented Entrepreneurship: Governance and the Automate–Augment Logic Across Ideation, Discovery, Design, and Learning",
      journal: "Revista Academia & Negocios",
      status: "in-press"
    },
    {
      authors: "Márquez, N., Rojas, G., Chacón, S., & Nocetti, V.",
      year: "2023",
      title: "The Quality Of The Services Provided By Business Development Centers And Their Effect On Micro, Small And Medium-Sized Enterprises In Chile",
      journal: "Journal of Developmental Entrepreneurship",
      doi: "10.1142/S1084946723500176",
      status: "published"
    },
    {
      authors: "Muñoz-Cisterna V, Mora R, Márquez Álvarez N, Beckles-Araya JC",
      year: "2026",
      title: "Communication and information resources and product innovation in SMEs: the sequential role of co-creation and process innovation",
      journal: "Management Research: The Journal of the Iberoamerican Academy of Management",
      doi: "10.1108/MRJIAM-07-2025-1765",
      status: "published",
      correspondingAuthor: true
    },
    {
      authors: "Moreno-Castro, D., Franco-Arias, O. O., Pimenteira, C., Márquez, N., & Vidal-Silva, C.",
      year: "2026",
      title: "A Reproducible Computational Pipeline for Cross-Database Scientometric Network Construction: Architecture, Algorithms, and Structural Validation",
      journal: "Computers",
      doi: "10.3390/computers15040213",
      status: "published",
      correspondingAuthor: true
    },
    {
      authors: "Peñaherrera-Veloz, H., Vásquez-Torres, C. F., Campuzano-Rodríguez, M. A., Campuzano-Rodríguez, S. M., Peñaherrera-Veloz, I. V., Márquez, N., & Vidal-Silva, C.",
      year: "2026",
      title: "Advancing Circular Economy In Hospitality: A Global Bibliometric And Thematic Analysis Of Strategies, Challenges, And Managerial Implications",
      journal: "Scientific Culture",
      doi: "10.5281/zenodo.11425165",
      status: "published",
      correspondingAuthor: true
    },
    {
      authors: "Pesantez-Jara, N., Márquez, N., & Vidal-Silva, C.",
      year: "2025",
      title: "Health Education for Promoting Healthy Eating Habits and Preventing Nutrition-Related Diseases: A Technopedagogical Research Study",
      journal: "Journal of Cultural Analysis and Social Change",
      doi: "10.64753/jcasc.v10i4.3876",
      status: "published",
      correspondingAuthor: true
    },
    {
      authors: "Pesantez-Jara, N., Márquez, N., & Vidal-Silva, C.",
      year: "2026",
      title: "Modeling the Nutrition–Academic Intention Gap: A Data-Driven Adaptive Gamified Architecture",
      journal: "Computers",
      doi: "10.3390/computers15030152",
      status: "published",
      correspondingAuthor: true
    },
    {
      authors: "Pérez-Salazar, J., Márquez, N., & Vidal-Silva, C.",
      year: "2026",
      title: "Algorithmic Profiling of Operational Risk: A Data-Driven Predictive Model for Micro-Enterprise Solvency Assessment",
      journal: "Computers",
      doi: "10.3390/computers15020135",
      status: "published",
      correspondingAuthor: true
    },
    {
      authors: "Rivera-Naranjo, C., Márquez, N., & Vidal-Silva, C.",
      year: "2026",
      title: "Data Literacy Through Digital Inquiry: A Visual Framework for Teaching Trade Policy (Ecuador, 1979–2024)",
      journal: "Computers",
      doi: "10.3390/computers15020129",
      status: "published",
      correspondingAuthor: true
    },
    {
      authors: "Rojas-Cabezas, G., Mora-Esquivel, R., Márquez, N., Chacón-Espejo, S., Nocetti-Núñez, V., & Leiva, J. C.",
      year: "2024",
      title: "The influence of institutional context in the relationship between green management, perceived barriers to sustainability and innovation performance in SMEs",
      journal: "Academia Revista Latinoamericana de Administración",
      doi: "10.1108/ARLA-07-2024-0158",
      status: "published",
      correspondingAuthor: true
    },
    {
      authors: "Vinueza-Morales, M., Tupac-Yupanqui, M., Márquez, N., & Vidal-Silva, C.",
      year: "2026",
      title: "A Unified Multi-Dimensional Cost Analysis of Speculative Parallel Conflict Detection and Diagnosis",
      journal: "Computers",
      doi: "10.3390/computers15040201",
      status: "published",
      correspondingAuthor: true
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
      period: "2022 – Presente",
      position: "Head of Program and Assistant Professor",
      institution: "Universidad Santo Tomás, Talca, Chile",
      details: [
        "Head of the Undergraduate Program in Business Administration",
        "Docencia: management, innovation management, entrepreneurship, corporate social responsibility",
        "Outstanding Teacher Award 2023-2 (3.85/4.0)"
      ]
    },
    {
      period: "2023 – Presente",
      position: "Lecturer",
      institution: "Universidad Autónoma de Chile, Talca, Chile",
      details: [
        "Cursos: Business Process Management, Integrated Management Systems",
        "Outstanding Teacher Award 2024 (3.93/4.0)"
      ]
    },
    {
      period: "2018 – 2022",
      position: "Lecturer",
      institution: "Universidad de Talca, Chile",
      details: [
        "Cursos: Management, Management Control, Project Management I & II, Business Intelligence, Data Analysis",
        "Thesis supervisor and examiner (undergraduate level)"
      ]
    },
    {
      period: "2021 – 2022",
      position: "Lecturer",
      institution: "Universidad Católica del Maule, Talca, Chile",
      details: [
        "Cursos: Quantitative Methods, Entrepreneurship and New Venture Creation"
      ]
    },
    {
      period: "2020 – 2022",
      position: "Head of Program",
      institution: "Instituto Profesional Iplacex, Talca, Chile",
      details: [
        "Head of Technical and Professional Programs in Business Administration"
      ]
    }
  ],

  professionalExperience: [
    {
      period: "2018 – Presente",
      position: "Independent Consultant",
      organization: "Public Procurement and Tenders, Talca, Chile",
      details: [
        "Advised private firms on public procurement processes and competitive tendering strategies",
        "Supported the preparation, evaluation, and submission of bids through national public procurement platforms",
        "Provided guidance on cost structures, compliance requirements, and technical documentation"
      ]
    },
    {
      period: "2013 – 2018",
      position: "Commercial and Finance Manager",
      organization: "Protector Security Spa, Talca, Chile",
      details: [
        "Led commercial strategy and financial management for a national security services company with operations across Chile",
        "Oversaw budgeting, financial planning, and cost control processes",
        "Coordinated sales operations and client portfolio management in a multi-site organizational context"
      ]
    },
    {
      period: "2012 – 2013",
      position: "Business Intelligence Analyst",
      organization: "Forestal Santa Blanca S.A., Talca, Chile",
      details: [
        "Developed and analyzed management reports to support strategic and operational decision-making",
        "Performed data analysis related to commercial performance, costs, and operational efficiency",
        "Designed dashboards and indicators to monitor key business processes and organizational outcomes"
      ]
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
    languages: ["Español (Nativo)", "Inglés (Intermedio)"]
  },

  social: {
    linkedin: "#",
    orcid: "#",
    googleScholar: "#"
  },

  services: [
    {
      number: "01",
      title: "Consultoría Académica",
      description: "Asesoría en diseño de investigación, revisión metodológica y preparación de manuscritos para revistas indexadas."
    },
    {
      number: "02",
      title: "Innovación y Emprendimiento",
      description: "Diagnóstico de madurez emprendedora, diseño de programas de aceleración y evaluación de proyectos de inversión social."
    },
    {
      number: "03",
      title: "Gobernanza de Datos",
      description: "Estructuración de comités de innovación con rigor académico y visión estratégica de negocio."
    },
    {
      number: "04",
      title: "Business Intelligence & Analytics",
      description: "En alianza con Datametrik — dashboards ejecutivos, automatización de procesos y análisis predictivo."
    }
  ],

  datametrik: {
    name: "DATAMETRIK",
    tagline: "Business Intelligence & Analytics",
    description: "Somos el punto de unión entre la tecnología y el negocio, convirtiendo la información en visibilidad estratégica para la toma de decisiones.",
    services: [
      "Arquitectura de datos: Consolidamos información crítica en una base confiable, escalable y preparada para acompañar el crecimiento de la operación.",
      "Automatización de procesos: Reducimos carga operativa automatizando flujos clave del negocio para mejorar la eficiencia y continuidad.",
      "Business Intelligence: Convertimos datos dispersos en visibilidad ejecutiva mediante dashboards que consolidan la información del negocio.",
      "Análisis predictivo: Desarrollamos análisis que permiten anticipar escenarios y apoyar decisiones estratégicas de forma oportuna.",
      "Monitoreo operacional: Entregamos visibilidad continua sobre la operación para fortalecer el control, la trazabilidad y la capacidad de respuesta."
    ],
    methodology: [
      { step: "1", title: "Diagnóstico", description: "Analizamos la situación actual de la información, los procesos y las necesidades prioritarias del negocio." },
      { step: "2", title: "Diseño de solución", description: "Estructuramos una solución alineada a los objetivos de gestión y a la realidad operativa de la empresa." },
      { step: "3", title: "Implementación BI", description: "Desarrollamos reportes, indicadores y dashboards confiables para entregar visibilidad clara del negocio." },
      { step: "4", title: "Automatización y mejora continua", description: "Incorporamos automatización, seguimiento y optimización para asegurar resultados sostenibles." }
    ],
    contact: "contacto@datametrik.cl",
    phone: "+569 63321022",
    url: "#"
  }
};
