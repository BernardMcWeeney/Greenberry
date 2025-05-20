import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
    })
  ],
  site: 'https://greenberry.ie',
});