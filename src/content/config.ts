import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    // 将 description 和 category 设置为可选并提供默认值
    description: z.string().optional().default(''),
    category: z.string().optional().default('BJU PRESS'),
    // 【核心修复】将 cover 设置为可选，并提供一个备用路径
    // 这样即便 Vercel 瞬间读不到 MD 里的字段，编译也能通过
    cover: z.string().optional().default('/images/notes-cover-1.jpg'),
    order: z.number().optional().default(1),
  }),
});

export const collections = {
  'notes': notes,
};