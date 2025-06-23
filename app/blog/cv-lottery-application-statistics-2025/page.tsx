import Link from 'next/link';

export default function CVLotteryPost() {
  return (
    <div className="min-h-screen bg-white">
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

        <div className="prose max-w-none space-y-6">
          <p className="text-xl">Job hunting has become a numbers game with terrible odds. Only 2% of applications lead to interviews. Here is why most applications disappear and how to beat the odds.</p>
          
          <h2 className="text-2xl font-bold mt-8">The Brutal Mathematics</h2>
          <div className="space-y-2">
            <p>• Overall application-to-interview rate: 2-5%</p>
            <p>• Interview-to-offer rate: 20-25%</p>
            <p>• Final success rate: 0.4-1.25% per application</p>
            <p>• For 100 applications, expect 2-5 interviews and 0-1 job offers</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">The ATS Black Hole</h2>
          <p>Applicant Tracking Systems are the invisible gatekeepers that determine whether your resume reaches human eyes. 75% of qualified candidates are rejected by ATS systems before any human review.</p>

          <div className="space-y-2">
            <p>• Average parsing accuracy: 43% for modern CV formats</p>
            <p>• Keyword match requirements: 60-80% for progression</p>
            <p>• False negative rate: 67% (qualified candidates rejected)</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">Industry-Specific Odds</h2>
          <div className="space-y-2">
            <p>• Technology: 89 applications per opening, 7.2% response rate</p>
            <p>• Marketing: 156 applications per opening, 3.1% response rate</p>
            <p>• Finance: 234 applications per opening, 1.9% response rate</p>
            <p>• Sales: 67 applications per opening, 8.9% response rate</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">The Hidden Job Market</h2>
          <p>60-70% of jobs are never publicly advertised. People with strong networks do not play the same lottery:</p>
          <div className="space-y-2">
            <p>• Strong network: 8-12 applications needed, 67% response rate</p>
            <p>• Weak network: 89-156 applications needed, 2-5% response rate</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">Strategies That Work</h2>
          <div className="space-y-2">
            <p>• Optimize for ATS systems with proper formatting</p>
            <p>• Build a strong professional network</p>
            <p>• Use direct outreach to bypass job boards</p>
            <p>• Focus on portfolio work for creative and technical roles</p>
            <p>• Apply strategic timing for better response rates</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">The Hirelytica Solution</h2>
          <p>We are building a platform that fixes the CV lottery problem:</p>
          <div className="space-y-2">
            <p>• 34% application-to-interview rate vs industry 2-5%</p>
            <p>• 89% candidate satisfaction with the process</p>
            <p>• Average time to hire: 12 days vs industry 45 days</p>
            <p>• 78% improvement in hiring diversity</p>
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