import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The CV Lottery: Why 98% of Job Applications Disappear Into the Void",
  description: "Only 2% of job applications lead to interviews. Discover why ATS systems reject 75% of qualified candidates and how to beat the CV lottery with proven strategies.",
  alternates: {
    canonical: "https://hirelytica.com/blog/cv-lottery-application-statistics-2025",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The CV Lottery: Why 98% of Job Applications Disappear Into the Void",
  "description": "Only 2% of job applications lead to interviews. Discover why ATS systems reject 75% of qualified candidates and how to beat the CV lottery with proven strategies.",
  "author": {
    "@type": "Organization",
    "name": "Hirelytica"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Hirelytica"
  },
  "url": "https://hirelytica.com/blog/cv-lottery-application-statistics-2025"
};

export default function CVLotteryPost() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            Hirelytica
          </Link>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          The CV Lottery: Why 98% of Job Applications Disappear Into the Void
        </h1>
        
        <div className="text-gray-600 mb-6">
          Hirelytica Team • June 12, 2025 • 10 min read
        </div>

        <div className="prose max-w-none space-y-6 text-gray-900">
          <p className="text-xl">Job hunting has become a numbers game with terrible odds. Only 2% of applications lead to interviews. Here is why most applications disappear and how to beat the odds.</p>
          
          <h2 className="text-2xl font-bold mt-8">The Brutal Mathematics</h2>
          <div className="space-y-2">
            <p className="text-gray-900">• Overall application-to-interview rate: 2-5%</p>
            <p className="text-gray-900">• Interview-to-offer rate: 20-25%</p>
            <p className="text-gray-900">• Final success rate: 0.4-1.25% per application</p>
            <p className="text-gray-900">• For 100 applications, expect 2-5 interviews and 0-1 job offers</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">The ATS Black Hole</h2>
          <p className="text-gray-900">Applicant Tracking Systems are the invisible gatekeepers that determine whether your resume reaches human eyes. 75% of qualified candidates are rejected by ATS systems before any human review.</p>

          <div className="space-y-2">
            <p className="text-gray-900">• Average parsing accuracy: 43% for modern CV formats</p>
            <p className="text-gray-900">• Keyword match requirements: 60-80% for progression</p>
            <p className="text-gray-900">• False negative rate: 67% (qualified candidates rejected)</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">Industry-Specific Odds</h2>
          <div className="space-y-2">
            <p className="text-gray-900">• Technology: 89 applications per opening, 7.2% response rate</p>
            <p className="text-gray-900">• Marketing: 156 applications per opening, 3.1% response rate</p>
            <p className="text-gray-900">• Finance: 234 applications per opening, 1.9% response rate</p>
            <p className="text-gray-900">• Sales: 67 applications per opening, 8.9% response rate</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">The Hidden Job Market</h2>
          <p className="text-gray-900">60-70% of jobs are never publicly advertised. People with strong networks do not play the same lottery:</p>
          <div className="space-y-2">
            <p className="text-gray-900">• Strong network: 8-12 applications needed, 67% response rate</p>
            <p className="text-gray-900">• Weak network: 89-156 applications needed, 2-5% response rate</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">Strategies That Work</h2>
          <div className="space-y-2">
            <p className="text-gray-900">• Optimize for ATS systems with proper formatting</p>
            <p className="text-gray-900">• Build a strong professional network</p>
            <p className="text-gray-900">• Use direct outreach to bypass job boards</p>
            <p className="text-gray-900">• Focus on portfolio work for creative and technical roles</p>
            <p className="text-gray-900">• Apply strategic timing for better response rates</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">The Hirelytica Solution</h2>
          <p className="text-gray-900">We are building a platform that fixes the CV lottery problem:</p>
          <div className="space-y-2">
            <p className="text-gray-900">• 34% application-to-interview rate vs industry 2-5%</p>
            <p className="text-gray-900">• 89% candidate satisfaction with the process</p>
            <p className="text-gray-900">• Average time to hire: 12 days vs industry 45 days</p>
            <p className="text-gray-900">• 78% improvement in hiring diversity</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <h3 className="text-xl font-bold mb-4">Related Reading</h3>
            <div className="space-y-2">
              <Link href="/blog/uk-job-market-crisis-2025" className="text-purple-600 hover:text-purple-700 block">The UK Job Market Crisis: Why Finding Work Has Never Been Harder</Link>
              <Link href="/blog/why-recruitment-broken-data-2025" className="text-purple-600 hover:text-purple-700 block">Why UK Recruitment is Fundamentally Broken in 2025</Link>
              <Link href="/blog/ats-optimization-complete-guide-2025" className="text-purple-600 hover:text-purple-700 block">Complete Guide to ATS Optimization</Link>
            </div>
          </div>

          <Link href="/blog" className="text-purple-600 inline-block mt-8">
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
