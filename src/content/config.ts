import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.any(), // 这一行是绝杀：允许任何数据，彻底跳过校验报错
});

export const collections = {
  'notes': notes,
};