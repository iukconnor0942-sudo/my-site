import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. 定义笔记集合 (Notes Collection) - 加上了最强保底！
const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default('暂无描述'),
    category: z.string().optional().default('BJU PRESS'),
    cover: z.string().optional().default('/images/notes-cover-1.jpg'),
    order: z.number().optional().default(1),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
    }),
});

const vlog = defineCollection({
  loader: glob({ base: './src/content/vlog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    source: z.enum(['bilibili', 'oss']),
    bilibili_id: z.string().optional(),
    oss_url: z.string().optional(),
    description: z.string().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

const gallery = defineCollection({
  loader: glob({ base: './src/content/gallery', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

const changelog = defineCollection({
  loader: glob({ base: './src/content/changelog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// 2. 统一导出
export const collections = { 
  blog, 
  vlog, 
  writing, 
  gallery, 
  changelog, 
  notes 
};