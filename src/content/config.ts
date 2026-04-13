import { defineCollection, z } from 'astro:content';

const changelog = defineCollection({ /* 保持你原来的配置 */ });

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    cover: z.string(), // 核心修复：改为 z.string()，避免路径校验报错
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { changelog, writing };