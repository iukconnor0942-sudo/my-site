// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind'; // 如果你使用了 Tailwind 记得保留
// 导入数学公式支持插件
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.connor-cam4.cc', 
    // 康纳，如果你的项目里没安装 tailwind，请把下面的 tailwind() 删掉
    integrations: [mdx(), sitemap(), tailwind()],
    
    // 【核心修复】Markdown 魔法配置，让你的 $x+y$ 正常显示
    markdown: {
        remarkPlugins: [remarkMath],
        // 如果渲染还有微小错位，可以给 rehypeKatex 传参数，但目前这样是最稳的
        rehypePlugins: [rehypeKatex],
    },

    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Atkinson',
            cssVariable: '--font-atkinson',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/atkinson-regular.woff'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/atkinson-bold.woff'],
                        weight: 700,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
    ],
});