import { defineConfig } from 'astro/config';

export default defineConfig({
  // Productie-URL (zodra het domein is gekoppeld aan Codeberg Pages):
  site: 'https://openspraaktechnologie.org',

  // Zolang je test via Codeberg Pages zonder eigen domein, gebruik dit:
  // site: 'https://opensource-spraakherkenning-nl.codeberg.page',
  // base: '/sos-website',
});
