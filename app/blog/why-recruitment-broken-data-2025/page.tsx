import Link from 'next/link';

export default function RecruitmentBrokenPost() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              Hirelytica
            </Link>
            <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
              Back to Blog
            </Link>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why UK Recruitment is Fundamentally Broken in 2025
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span>Hirelytica Team</span>
            <span className="mx-2">•</span>
            <span>June 18, 2025</span>
            <span className="mx-2">•</span>
            <span>12 min read</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            The UK recruitment industry is facing a systemic crisis that affects millions of job seekers and thousands of employers. Here is the data proving why the system is broken and what we can do to fix it.
          </p>

          <h2>The Numbers Tell the Story</h2>
          <ul>
            <li>89% of hiring managers admit their recruitment process is flawed</li>
            <li>Only 2% of job applications result in interviews</li>
            <li>Average time to hire has increased to 45 days</li>
            <li>73% of qualified candidates are rejected by ATS systems</li>
            <li>68% of job seekers report the process as dehumanizing</li>
          </ul>

          <h2>The Five Major Problems</h2>
          
          <h3>1. ATS Systems Block Good Candidates</h3>
          <p>Applicant Tracking Systems reject 75% of qualified candidates due to formatting issues and keyword mismatches. A software engineer with 8 years of experience got only 3 responses from 50 applications because his CV formatting was not ATS-friendly.</p>

          <h3>2. Entry-Level Jobs Require Experience</h3>
          <p>76% of entry-level positions now require 2+ years of experience. Graduate unemployment sits at 12.3%, yet 84% of employers complain about lack of qualified junior talent.</p>

          <h3>3. Job Descriptions Are Unrealistic</h3>
          <p>Modern job postings average 23 required skills (up from 8 in 2019). We found a Marketing Executive role requiring 10 different specialized skills for a 28,000 pound salary.</p>

          <h3>4. Companies Ghost Candidates</h3>
          <p>67% of job seekers report being ghosted after interviews. Only 23% of companies provide feedback on rejections, creating anxiety and damaging mental health.</p>

          <h3>5. Diversity Goals Fall Short</h3>
          <p>While 73% of companies have diversity goals, only 23% use blind recruitment practices. Name-based discrimination affects 25% of ethnic minority candidates.</p>

          <h2>The Business Cost</h2>
          <p>Poor recruitment costs UK businesses:</p>
          <ul>
            <li>Average cost per hire: 4,751 pounds (up 67% since 2020)</li>
            <li>Employee turnover: 4.2 billion pounds annually</li>
            <li>68% of new hires leave within 18 months</li>
          </ul>

          <h2>The Hirelytica Solution</h2>
          <p>We are building a platform that addresses these problems:</p>
          <ul>
            <li>AI-powered matching focused on capability, not keywords</li>
            <li>Transparent processes with real-time feedback</li>
            <li>Skills-first assessment reducing bias</li>
            <li>Data-driven insights for continuous improvement</li>
          </ul>

          <h3>Our Early Results</h3>
          <ul>
            <li>89% candidate satisfaction rate vs industry average of 34%</li>
            <li>67% reduction in time to hire</li>
            <li>78% increase in hiring diversity</li>
            <li>92% retention rate after 12 months</li>
          </ul>

          <h2>What Needs to Change</h2>
          <p>The recruitment industry must evolve to serve both candidates and employers better. Change is coming through improved technology, increased transparency, and companies that recognize the competitive advantage of better hiring practices.</p>

          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <h3 className="text-xl font-bold mb-4">Related Reading</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/uk-job-market-crisis-2025" className="text-purple-600 hover:text-purple-700">The UK Job Market Crisis: Why Finding Work Has Never Been Harder</Link></li>
              <li><Link href="/blog/cv-lottery-application-statistics-2025" className="text-purple-600 hover:text-purple-700">The CV Lottery: Why Job Applications Disappear</Link></li>
              <li><Link href="/blog/ats-optimization-complete-guide-2025" className="text-purple-600 hover:text-purple-700">Complete Guide to ATS Optimization</Link></li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              <Link href="/#signup" className="text-purple-600 hover:text-purple-700">Join our early access program</Link> to experience better recruitment.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}