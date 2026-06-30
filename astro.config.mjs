// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nicolasmarquezalvarez.cl',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-CL', en: 'en-US' }
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
