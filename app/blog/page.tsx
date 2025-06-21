// File: app/blog/page.tsx
import Link from 'next/link'

const blogPosts = [
  {
    slug: 'why-recruitment-is-broken',
    title: 'Why Recruitment is Broken (And How We\'re Fixing It)',
    excerpt: 'The recruitment industry hasn\'t evolved with technology. Job seekers spend hours crafting CVs that get ignored, while employers drown in irrelevant applications. Here\'s what\'s wrong and how to fix it.',
    date: '2025-01-15',
    readTime: '5 min read',
    author: 'Hirelytica Team'
  },
  {
    slug: 'the-cv-casino-problem',
    title: 'The CV Casino: Why Job Applications Feel Like Gambling',
    excerpt: 'Applying for jobs shouldn\'t feel like playing roulette. We explore why the current system fails both candidates and employers, and what intelligent matching really looks like.',
    date: '2025-01-10',
    readTime: '4 min read',
    author: 'Hirelytica Team'
  },
  {
    slug: 'ats-optimization-guide',
    title: 'The Complete Guide to ATS Optimization in 2025',
    excerpt: 'Applicant Tracking Systems filter out 75% of resumes before human eyes see them. Learn how to write CVs that pass ATS screening while still showcasing your unique value.',
    date: '2025-01-05',
    readTime: '7 min read',
    author: 'Hirelytica Team'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-5 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-5">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-black text-indigo-600">Hirelytica</Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link href="/#jobseekers" className="text-gray-600 hover:text-indigo-600 font-medium">For Job Seekers</Link>
              <Link href="/#employers" className="text-gray-600 hover:text-indigo-600 font-medium">For Employers</Link>
              <Link href="/blog" className="text-indigo-600 font-medium border-b-2 border-indigo-600">Blog</Link>
              <Link href="/#signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-medium transition-colors">Early Access</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Recruitment Insights
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Deep dives into what's broken in recruitment and how we're building a better future for job seekers and employers.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl border-2 border-gray-100 hover:border-indigo-200 transition-colors group">
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>•</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                  >
                    Read More 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Experience Better Recruitment?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers and employers who are part of the recruitment revolution.
          </p>
          <Link 
            href="/#signup"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Get Early Access
          </Link>
        </div>
      </section>
    </div>
  )
}