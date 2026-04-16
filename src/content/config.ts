import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    cover: z.string().optional(),
    order: z.number().optional(),
    // 自动使用你喜欢的 NoteLayout
    layout: z.string().default('../../layouts/NoteLayout.astro'),
  })
});

export const collections = {
  notes: notesCollection,
};