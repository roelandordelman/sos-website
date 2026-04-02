import { defineCollection, z } from 'astro:content';

const nieuws = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    auteur: z.string().optional(),
    image: z.string().optional(),          // Bestandsnaam in /public, bijv. "nieuws/mijnfoto.jpg"
    linkedin_tekst: z.string().optional(), // Tekst voor LinkedIn post (max ~700 tekens aanbevolen)
  }),
});

const projecten = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    beschrijving: z.string(),
    github: z.string().url().optional(),
    taal: z.string().optional(),
    status: z.enum(['actief', 'archief']).default('actief'),
  }),
});

const edities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    datum: z.date(),
    locatie: z.string().optional(),
    beschrijving: z.string().optional(),
    programma_url: z.string().url().optional(),
    fotos: z.array(z.string()).optional(), // bestandsnamen in public/edities/<slug>/web/
  }),
});

const bestuur = defineCollection({
  type: 'content',
  schema: z.object({
    naam: z.string(),
    rol: z.string(),
    foto: z.string().optional(),
    volgorde: z.number().default(99),
  }),
});

export const collections = { nieuws, projecten, edities, bestuur };
