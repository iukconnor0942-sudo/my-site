import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const vlog = defineCollection({
  loader: glob({ base: './src/content/vlog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    cover: z.string().optional(),
    source: z.enum(['bilibili', 'oss']),
    bilibili_id: z.string().optional(),
    oss_url: z.string().optional(),
    description: z.string().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

const gallery = defineCollection({
  loader: glob({ base: './src/content/gallery', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { vlog, writing, gallery };