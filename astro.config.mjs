// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://datametrik.cl', // Cambiar por la URL de Cloudflare Pages o dominio personalizado
  vite: {
    plugins: [tailwindcss()]
  }
});
