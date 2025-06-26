import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why Global Recruitment is Broken",
  alternates: {
    canonical: "https://hirelytica.com/blog/why-recruitment-broken-data-2025",
  },
};

import { notFound } from 'next/navigation';
import Link from 'next/link';
import blogPosts from '../../../data/blog-posts.json';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Only load content when needed - this makes the bundle much smaller
async function getBlogContent(slug: string): Promise<string> {
  // Simple content mapping - could be moved to separate files later
  const contentMap: Record<string, string> = {
    'why-recruitment-is-broken': `The recruitment industry is experiencing a crisis of trust. Job seekers send hundreds of applications into the void, whilst employers struggle to find qualified candidates despite being flooded with resumes.

## The Numbers Tell the Story

Recent studies reveal that the average job posting receives 250+ applications, yet 75% are never properly reviewed. Meanwhile, 40% of job seekers report feeling like their applications disappear into a "black hole."

## What Went Wrong

The rise of ATS was supposed to solve efficiency problems. Instead, it created new ones:

- **Over-reliance on Keywords**: Systems filter based on keyword matching, eliminating qualified candidates
- **Resume Gaming**: Job seekers optimise for algorithms rather than showcasing skills  
- **Lost Human Connection**: Personal elements get lost in automated screening

## The Real Cost

This broken system costs businesses $240 billion annually in the US alone. More importantly, it costs people opportunities and career growth.

## Our Solution

At Hirelytica, we believe recruitment should be about potential, not just past performance. We combine AI-powered matching with human insight for more equitable hiring.`,

    'cv-casino-job-applications': `Job hunting today feels uncomfortably similar to gambling. You submit application after application, hoping one will hit the jackpot, with no real understanding of what improves your odds.

## The Gambling Psychology

Like in a casino, job seekers experience variable reward schedules. You never know when the next application might result in an interview, creating an addictive cycle of hope and disappointment.

The average job seeker submits 54 applications before receiving an offer. That is a 1.8% success rate - worse odds than many casino games.

## House Always Wins

In the recruitment casino, various players extract value whilst job seekers bear the cost:

- **ATS Vendors** profit from filtering software
- **Job Boards** make money from application volume, not successful matches
- **Resume Writers** capitalise on candidate desperation

## Breaking Free

Smart job seekers are finding ways to bypass the casino entirely through direct networking, skills demonstration, and targeted applications.`,

    'ats-optimization-guide-2025': `ATS process over 75% of resumes before they reach human eyes. Understanding optimisation whilst maintaining authenticity is crucial for 2025 job search success.

## Understanding Modern ATS

Today's platforms evolved beyond simple keyword matching, using natural language processing and machine learning. However, they still have limitations smart candidates can navigate.

## Best Practices

### Format for Success
- Use standard sections and ATS-friendly fonts
- Avoid complex elements that confuse parsing
- Save in compatible formats (PDF/Word)

### Strategic Keywords
- Mirror job language when accurate
- Include keyword variations
- Context matters - use meaningful sentences
- Balance is key - avoid keyword stuffing

## The Future

As AI advances, expect ATS systems to become more sophisticated. This means authentic, well-crafted resumes will become increasingly important.

Focus on optimisation that enhances rather than replaces genuine qualifications.`
  };

  return contentMap[slug] || '';
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const content = await getBlogContent(slug);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              Hirelytica
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-purple-600">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-600 text-sm space-x-4 mb-6">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="text-gray-800 leading-relaxed whitespace-pre-line">
            {content}
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Published on {post.date} by {post.author}
            </div>
            <Link 
              href="/blog" 
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              More Articles
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
