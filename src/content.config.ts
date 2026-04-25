import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const authorsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    website: z.string().optional(),
    credentials: z.array(z.string()).optional(), // e.g. ["Certified Bitcoin Professional", "Financial Analyst"]
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    author: z.string().default('admin'), // Now referencing author ID
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    coinSymbols: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    locale: z.enum(['de', 'en']).default('de'),
    factCheckedBy: z.string().optional(), // Reference to another author
  }),
});

const coinsCollection = defineCollection({
  loader: async () => [], // Will be connected to Supabase in the next phase
  schema: z.object({
    id: z.string(), // slug (e.g. 'bitcoin')
    name: z.string(),
    symbol: z.string(),
    logo: z.string().url().optional(),
    totalSupply: z.number(),
    circulatingSupply: z.number(),
    marketCapRank: z.number().optional(),
  }),
});

const unlocksCollection = defineCollection({
  loader: async () => [], // Will be connected to Supabase in the next phase
  schema: z.object({
    id: z.string(),
    coinId: z.string(), // Reference to coin slug
    unlockDate: z.coerce.date(),
    amount: z.number(),
    amountUsd: z.number(),
    percentOfCirculating: z.number(),
    category: z.enum(['Team', 'Investors', 'Ecosystem', 'Advisors', 'Public', 'Community']),
    description: z.string().optional(),
    isCliff: z.boolean().default(true),
  }),
});

export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
  coins: coinsCollection,
  unlocks: unlocksCollection,
};

