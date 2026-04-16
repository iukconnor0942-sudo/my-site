import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    // 全部改为可选并提供默认值，消除 "Required" 报错
    description: z.string().optional().default('暂无描述'),
    category: z.string().optional().default('BJU PRESS'),
    cover: z.string().optional().default('/images/notes-cover-1.jpg'),
    order: z.number().optional().default(1),
  }),
});

export const collections = {
  'notes': notes,
};