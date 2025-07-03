// File: app/blog/page.tsx
// Automated Blog Discovery - No more manual JSON updates!

import Link from 'next/link';
import fs from 'fs';
import path from 'path';

// Auto-discover blog posts from the file system
async function getBlogPosts() {
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
          
          // Extract metadata from the file
          const metadata = extractMetadata(fileContent, slug);
          if (metadata) {
            posts.push(metadata);
          }
        }
      } catch (error) {
        console.warn(`Error reading blog post ${slug}:`, error);
      }
    }
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

// Extract metadata from the blog post file
function extractMetadata(fileContent: string, slug: string) {
  try {
    // Extract title from metadata
    const titleMatch = fileContent.match(/title:\s*["'`](.*?)["'`]/);
    const title = titleMatch ? titleMatch[1] : generateTitleFromSlug(slug);
    
    // Extract description from metadata
    const descMatch = fileContent.match(/description:\s*["'`](.*?)["'`]/);
    const description = descMatch ? descMatch[1] : '';
    
    // Extract date from time dateTime attribute
    const dateMatch = fileContent.match(/dateTime=["'`](.*?)["'`]/);
    let date = dateMatch ? dateMatch[1] : null;
    
    // If no date found, try to extract from content
    if (!date) {
      const contentDateMatch = fileContent.match(/<time[^>]*>(.*?)<\/time>/);
      date = contentDateMatch ? contentDateMatch[1] : 'Recent';
    }
    
    // Extract author from content
    const authorMatch = fileContent.match(/•\s*(.*?)\s*•.*?min read/);
    const author = authorMatch ? authorMatch[1] : 'Hirelytica Team';
    
    // Extract read time
    const readTimeMatch = fileContent.match(/(\d+)\s*min read/);
    const readTime = readTimeMatch ? `${readTimeMatch[1]} min read` : '5 min read';
    
    // Create excerpt from description or generate from title
    const excerpt = description || generateExcerpt(title);
    
    return {
      slug,
      title: cleanText(title),
      excerpt: cleanText(excerpt),
      author: cleanText(author),
      date: formatDate(date),
      readTime
    };
    
  } catch (error) {
    console.warn(`Error extracting metadata for ${slug}:`, error);
    return null;
  }
}

// Helper function to generate title from slug
function generateTitleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Helper function to generate excerpt from title
function generateExcerpt(title: string): string {
  // Create a generic excerpt based on the title
  return `Read our latest insights on ${title.toLowerCase()} and discover evidence-based strategies for modern recruitment and hiring.`;
}

// Helper function to clean extracted text
function cleanText(text: string): string {
  return text
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .trim();
}

// Helper function to format date
function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return dateStr; // Return original if can't parse
    }
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  } catch {
    return dateStr;
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              Hirelytica
            </Link>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Hirelytica Blog</h1>
          <p className="text-xl opacity-90">
            Insights on recruitment, hiring, and the future of work
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts found. Check your blog directory structure.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}