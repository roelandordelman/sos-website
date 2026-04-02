import { defineConfig } from 'astro/config';

export default defineConfig({
  // Test-URL via Codeberg Pages:
  site: 'https://roelandordelman.codeberg.page',
  base: '/sos-website',

  // Zodra het domein is gekoppeld, vervang bovenstaande door:
  // site: 'https://openspraaktechnologie.org',
  // (en verwijder de base regel)
});
