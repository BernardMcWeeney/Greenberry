import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
    })
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  build: {
    inlineStylesheets: 'auto', // inlines small page CSS into HTML to avoid blocking
    cssMinify: 'lightningcss'
  },
  site: 'https://greenberry.ie',
});