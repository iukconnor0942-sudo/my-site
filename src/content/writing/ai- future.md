---
title: "人工智能的未来必将成为我们不可或缺的工具"
date: "2026-04-13"
description: "探讨AI如何从单纯的算法演变为人类智慧的延伸..."
cover: "/images/writing/ai-future-cover.jpg"  <-- 注意这里！
tags: ["人工智能", "深度思考"]
---

### 序言
在数字时代的图书馆里，每一行代码都是一本书...

这里可以开始写你的文章内容了！如果你有数学公式，记得直接用 KaTeX 哦：
例如：当 AI 计算损失函数时，我们会用到 $J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2$。

$$
E = mc^2
$$

[点击下载本文 PDF 版本](#) ```

---

### 🎨 步骤三：创建文章列表页 (图书馆大厅)

新建 **`src/pages/posts/index.astro`**。这里我们使用**古典米色调**和**衬线字体**来营造图书馆的宁静感。

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';
import { Image } from 'astro:assets';

const allPosts = await getCollection('posts');
// 按日期排序
allPosts.sort((a, b) => Date.parse(b.data.date) - Date.parse(a.data.date));
---

<BaseLayout title="藏书阁 · 康予纳安">
  <main class="library-hall">
    <header class="hall-header">
      <h1>藏书阁</h1>
      <p>“静谧求索，保持清醒。”</p>
    </header>

    <div class="article-grid">
      {allPosts.map(post => (
        <a href={`/posts/${post.slug}`} class="article-card">
          <div class="cover-wrapper">
            <Image src={post.data.cover} alt={post.data.title} />
          </div>
          <div class="card-info">
            <span class="date">{post.data.date}</span>
            <h2>{post.data.title}</h2>
            <p>{post.data.description}</p>
          </div>
        </a>
      ))}
    </div>
  </main>
</BaseLayout>

<style>
  .library-hall {
    max-width: 1000px;
    margin: 0 auto;
    padding: 4rem 2rem;
    background-color: #fdfbf7; /* 羊皮纸/古籍背景色 */
  }
  .hall-header {
    text-align: center;
    margin-bottom: 4rem;
    border-bottom: 1px solid #d4c5b0;
    padding-bottom: 2rem;
  }
  .hall-header h1 {
    font-family: "Noto Serif SC", serif; /* 建议在 BaseLayout 引入这个字体 */
    color: #3d2b1f; /* 深木色 */
    font-size: 2.5rem;
  }
  .article-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem;
  }
  .article-card {
    text-decoration: none;
    color: inherit;
    background: white;
    border: 1px solid #e8e0d5;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  .article-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(61, 43, 31, 0.1);
  }
  .cover-wrapper {
    height: 200px;
    overflow: hidden;
  }
  .cover-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card-info {
    padding: 1.5rem;
  }
  .card-info h2 {
    font-family: "Noto Serif SC", serif;
    font-size: 1.25rem;
    margin: 0.5rem 0;
    color: #3d2b1f;
  }
  .date { font-size: 0.8rem; color: #a69683; }
  .card-info p { font-size: 0.9rem; color: #666; line-height: 1.6; }
</style>