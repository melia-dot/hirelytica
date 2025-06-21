import blogPosts from '../../data/blog-posts.json';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-purple-600">
              Hirelytica
            </a>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Hirelytica Blog</h1>
          <p className="text-xl opacity-90">
            Insights on recruitment, hiring, and the future of work
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                
                <a 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
