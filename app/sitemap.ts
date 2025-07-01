// app/sitemap.ts

import { MetadataRoute } from 'next'
import blogPosts from '../data/blog-posts.json'

export default function sitemap(): MetadataRoute.Sitemap {
  // Generate blog URLs dynamically from your JSON file
  const blogUrls = blogPosts.map((post) => ({
    url: `https://hirelytica.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://hirelytica.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://hirelytica.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // All blog posts dynamically added
    ...blogUrls
  ]
}