import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().optional(),
    cover: z.string().optional(),
    order: z.number().optional(),
    // 自动使用 NoteLayout
    layout: z.string().default('../../layouts/NoteLayout.astro'),
  })
});

export const collections = { notes };