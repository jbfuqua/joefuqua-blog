import { defineCollection, z } from 'astro:content';

// Schema shared by both collections
const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),                   // accepts both string and Date from YAML
  excerpt: z.string().optional(),
  slug: z.string().optional(),
  source: z.string().default('original'),  // 'linkedin' or 'original'
  category: z.string().default('uncategorized'),
});

// Long-form LinkedIn articles + original essays
const articles = defineCollection({
  type: 'content',
  schema: baseSchema,
});

// Algorithm & Blues weekly issues
const anb = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    issue: z.number().optional(),          // issue number e.g. 43
  }),
});

export const collections = { articles, anb };
