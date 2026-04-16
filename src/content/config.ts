import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default('暂无描述'),
    category: z.string(),
    // 关键修复：如果缺失字段，默认指向一张占位图或空字符串，并允许可选
    cover: z.string().optional().default('/images/notes-cover-1.jpg'),
    order: z.number().optional().default(1),
  }),
});

export const collections = {
  'notes': notes,
};