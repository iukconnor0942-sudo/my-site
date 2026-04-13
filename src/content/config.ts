import { defineCollection, z } from 'astro:content';

const changelog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    cover: z.string(), // 这里一定要用 z.string()
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'writing': writing,
  'changelog': changelog,
};