// Zorgt altijd voor een trailing slash op de base URL,
// ongeacht of Astro hem toevoegt of niet.
const raw = import.meta.env.BASE_URL ?? '/';
export const base = raw.endsWith('/') ? raw : raw + '/';
