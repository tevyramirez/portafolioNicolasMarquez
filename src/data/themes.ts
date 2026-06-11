// src/data/themes.ts
// 11 estilos visuales con nombres en español simples y numerados

export interface Theme {
  id: string;
  number: number;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  layoutClass: 'arch-classic' | 'arch-bento' | 'arch-cards' | 'arch-timeline';
  description: string;
}

export const THEMES: Theme[] = [
  {
    id: 'style-01',
    number: 1,
    name: 'Académico Borgoña',
    primaryColor: '#8B0000',
    secondaryColor: '#FAFAFA',
    fontFamily: 'Georgia, serif',
    layoutClass: 'arch-classic',
    description: 'Columna central clásica, ideal para CV formal y publicaciones'
  },
  {
    id: 'style-02',
    number: 2,
    name: 'Esmeralda Sostenible',
    primaryColor: '#0F766E',
    secondaryColor: '#F0FDFA',
    fontFamily: 'system-ui, sans-serif',
    layoutClass: 'arch-bento',
    description: 'Retícula moderna para sostenibilidad e innovación social'
  },
  {
    id: 'style-03',
    number: 3,
    name: 'Índigo Tecnológico',
    primaryColor: '#4338CA',
    secondaryColor: '#F3F4F6',
    fontFamily: '"Inter", sans-serif',
    layoutClass: 'arch-cards',
    description: 'Tarjetas interactivas para investigación en IA'
  },
  {
    id: 'style-04',
    number: 4,
    name: 'Pizarra Ejecutiva',
    primaryColor: '#334155',
    secondaryColor: '#D97706',
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    layoutClass: 'arch-timeline',
    description: 'Línea de tiempo minimalista para consultoría'
  },
  {
    id: 'style-05',
    number: 5,
    name: 'Ocre Editorial',
    primaryColor: '#B45309',
    secondaryColor: '#FEF3C7',
    fontFamily: 'Garamond, serif',
    layoutClass: 'arch-classic',
    description: 'Estilo editorial para ensayos y docencia de posgrado'
  },
  {
    id: 'style-06',
    number: 6,
    name: 'Carbón Minimalista',
    primaryColor: '#1F2937',
    secondaryColor: '#FFFFFF',
    fontFamily: '"Inter", sans-serif',
    layoutClass: 'arch-timeline',
    description: 'Alta sobriedad ejecutiva, libre de distractores'
  },
  {
    id: 'style-07',
    number: 7,
    name: 'Cobalto Investigación',
    primaryColor: '#1D4ED8',
    secondaryColor: '#ECFDF5',
    fontFamily: 'system-ui, sans-serif',
    layoutClass: 'arch-bento',
    description: 'Redes de investigación y cooperación internacional'
  },
  {
    id: 'style-08',
    number: 8,
    name: 'Ámbar Decisión',
    primaryColor: '#B45309',
    secondaryColor: '#0F172A',
    fontFamily: '"Inter", sans-serif',
    layoutClass: 'arch-cards',
    description: 'Emprendimiento práctico y transferencia tecnológica'
  },
  {
    id: 'style-09',
    number: 9,
    name: 'Teal Ejecutivo',
    primaryColor: '#0D9488',
    secondaryColor: '#F4F4F5',
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    layoutClass: 'arch-timeline',
    description: 'Vinculación con aceleradoras de negocios'
  },
  {
    id: 'style-10',
    number: 10,
    name: 'Carmesí Innovación',
    primaryColor: '#991B1B',
    secondaryColor: '#F8FAFC',
    fontFamily: 'system-ui, sans-serif',
    layoutClass: 'arch-bento',
    description: 'Programas de aceleración y laboratorios de innovación'
  },
  {
    id: 'style-11',
    number: 11,
    name: 'Alto Contraste',
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    fontFamily: '"Courier New", monospace',
    layoutClass: 'arch-classic',
    description: 'Accesibilidad visual estricta y revisión de manuscritos'
  }
];
