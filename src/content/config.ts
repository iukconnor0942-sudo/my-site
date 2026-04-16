import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // 确保使用最新的 glob loader
import { z } from 'astro/zod';

// 1. 定义笔记集合 (Notes Collection)
const notes = defineCollection({
  // 使用最新的 loader 模式，适配你的项目结构
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    // 【关键修复】将 cover 设置为可选，并允许空字符串，防止因为路径解析导致的编译中断
    cover: z.string().optional().or(z.literal('')), 
    order: z.number().optional(),
  }),
});

// 2. 博客集合
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// 3. 统一导出
export const collections = {
  'notes': notes,
  'blog': blog,
};