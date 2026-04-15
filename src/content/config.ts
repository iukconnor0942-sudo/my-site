import { defineCollection, z } from 'astro:content';

// 1. 定义笔记集合 (Notes Collection)
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

// 2. 如果你还有之前的 blog 或其他集合，也要一并在这里定义
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// 3. 统一导出所有集合
// 注意：这里的 key 名 'notes' 必须和 getCollection('notes') 里的字符串完全一致
export const collections = {
  'notes': notes,
  'blog': blog,
};