import { defineCollection, z } from 'astro:content';

const changelog = defineCollection({
  type: 'content',
  schema: z.object({ title: z.string() }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    cover: z.string(), // 统一用字符串，避免 image() 校验失败
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { writing, changelog };