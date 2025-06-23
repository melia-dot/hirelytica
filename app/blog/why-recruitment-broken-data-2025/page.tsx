import Link from 'next/link';

export default function RecruitmentBrokenPost() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Why UK Recruitment is Fundamentally Broken in 2025
        </h1>
        
        <div className="text-gray-600 mb-8 space-x-2">
          <span>Hirelytica Team</span>
          <span>•</span>
          <span>June 18, 2025</span>
          <span>•</span>
          <span>12 min read</span>
        </div>

        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-xl mb-8">
            The UK recruitment industry is facing a systemic crisis that affects millions of job seekers and thousands of employers. Here is the data proving why the system is broken and what we can do to fix it.
          </p>

          <div>
            <h2 className="text-3xl font-bold mb-4">The Numbers Tell the Story</h2>
            <ul className="space-y-2 ml-6 list-disc">
              <li>89% of hiring managers admit their recruitment process is flawed</li>
              <li>Only 2% of job applications result in interviews</li>
              <li>Average time to hire has increased to 45 days</li>
              <li>73% of qualified candidates are rejected by ATS systems</li>
              <li>68% of job seekers report the process as dehumanizing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">The Five Major Problems</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. ATS Systems Block Good Candidates</h3>
                <p>Applicant Tracking Systems reject 75% of qualified candidates due to formatting issues and keyword mismatches. A software engineer with 8 years of experience got only 3 responses from 50 applications because his CV formatting was not ATS-friendly.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2. Entry-Level Jobs Require Experience</h3>
                <p>76% of entry-level positions now require 2+ years of experience. Graduate unemployment sits at 12.3%, yet 84% of employers complain about lack of qualified junior talent.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3. Job Descriptions Are Unrealistic</h3>
                <p>Modern job postings average 23 required skills (up from 8 in 2019). We found a Marketing Executive role requiring 10 different specialized skills for a 28,000 pound salary.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">4. Companies Ghost Candidates</h3>
                <p>67% of job seekers report being ghosted after interviews. Only 23% of companies provide feedback on rejections, creating anxiety and damaging mental health.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">5. Diversity Goals Fall Short</h3>
                <p>While 73% of companies have diversity goals, only 23% use blind recruitment practices. Name-based discrimination affects 25% of ethnic minority candidates.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">The Hirelytica Solution</h2>
            <p className="mb-4">We are building a platform that addresses these problems:</p>
            <ul className="space-y-2 ml-6 list-disc">
              <li>AI-powered matching focused on capability, not keywords</li>
              <li>Transparent processes with real-time feedback</li>
              <li>Skills-first assessment reducing bias</li>
              <li>Data-driven insights for continuous improvement</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Related Reading</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/uk-job-market-crisis-2025" className="text-purple-600 hover:text-purple-700">The UK Job Market Crisis: Why Finding Work Has Never Been Harder</Link></li>
              <li><Link href="/blog/cv-lottery-application-statistics-2025" className="text-purple-600 hover:text-purple-700">The CV Lottery: Why Job Applications Disappear</Link></li>
              <li><Link href="/blog/ats-optimization-complete-guide-2025" className="text-purple-600 hover:text-purple-700">Complete Guide to ATS Optimization</Link></li>
            </ul>
          </div>

          <div className="mt-8">
            <Link href="/blog" className="text-purple-600 hover:text-purple-700">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
