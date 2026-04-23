// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import remarkHeadingId from 'remark-heading-id';

// https://astro.build/config
export default defineConfig({
  site: 'https://kryptowatch.de',
  output: 'static',
  integrations: [
    mdx({
      remarkPlugins: [remarkHeadingId],
    }),
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
        },
      },
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
