import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://greenberry.ie',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      // If you later add SSR anywhere, keep sitemaps for static routes only
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: {
    inlineStylesheets: 'auto',
    cssMinify: 'lightningcss'
  }
});
