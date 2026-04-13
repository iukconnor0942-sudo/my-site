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
    cover: z.string(), // 使用字符串以兼容 public 文件夹路径
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { writing, changelog };