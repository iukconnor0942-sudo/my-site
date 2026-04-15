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
    cover: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// 重点：必须定义并导出 notes
const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    cover: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { changelog, writing, notes };