import { defineCollection, z } from 'astro:content';

const nieuws = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    auteur: z.string().optional(),
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
  }),
});

export const collections = { nieuws, projecten, edities };
