import { defineCollection, z } from 'astro:content';
const changelog = defineCollection({ /* 你之前的配置 */ });

const writing = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    cover: image(), 
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { changelog, writing };