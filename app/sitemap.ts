// File: app/sitemap.ts
// Automated sitemap generation - no more manual JSON dependency

import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Auto-discover blog posts from the file system
function getBlogPosts() {
  const blogDir = path.join(process.cwd(), 'app/blog');
  
  try {
    // Get all directories in the blog folder
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    
    // Filter to only directories (excluding page.tsx and other files)
    const blogDirs = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
    
    const posts = [];
    
    for (const slug of blogDirs) {
      try {
        const postPath = path.join(blogDir, slug, 'page.tsx');
        
        // Check if the page.tsx file exists
        if (fs.existsSync(postPath)) {
          const fileContent = fs.readFileSync(postPath, 'utf-8');
          
          // Extract date from the file for lastModified
          const dateMatch = fileContent.match(/dateTime=["'`](.*?)["'`]/);
          let lastModified = dateMatch ? new Date(dateMatch[1]) : new Date();
          
          // If date parsing fails, use current date
          if (isNaN(lastModified.getTime())) {
            lastModified = new Date();
          }
          
          posts.push({
            slug,
            lastModified
          });
        }
      } catch (error) {
        console.warn(`Error reading blog post ${slug}:`, error);
      }
    }
    
    return posts;
    
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hirelytica.com';
  
  // Get blog posts dynamically
  const blogPosts = getBlogPosts();
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];
  
  // Dynamic blog post pages
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  
  return [...staticPages, ...blogPages];
}