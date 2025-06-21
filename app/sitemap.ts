export default function sitemap() {
  return [
    {
      url: 'https://hirelytica.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://hirelytica.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly', 
      priority: 0.8,
    },
    {
      url: 'https://hirelytica.com/blog/why-recruitment-is-broken',
      lastModified: new Date('2025-06-18'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://hirelytica.com/blog/cv-casino-job-applications',
      lastModified: new Date('2025-06-12'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://hirelytica.com/blog/ats-optimization-guide-2025',
      lastModified: new Date('2025-06-05'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
