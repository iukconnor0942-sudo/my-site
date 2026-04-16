import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  // 使用最新的 glob loader
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(), // 设为可选提高容错率
    category: z.string(),
    // 允许 cover 缺失或为空字符串，彻底解决 Required 报错
    cover: z.string().optional().or(z.literal('')), 
    order: z.number().optional(),
  }),
});

export const collections = {
  'notes': notes,
};