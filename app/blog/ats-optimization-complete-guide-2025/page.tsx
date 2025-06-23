import Link from 'next/link';

export default function ATSGuidePost() {
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
          Beat ATS Systems in 2025: Complete Guide to Resume Optimization
        </h1>
        
        <div className="text-gray-600 mb-6">
          Hirelytica Team • June 5, 2025 • 15 min read
        </div>

        <div className="prose max-w-none space-y-6">
          <p className="text-xl">Master Applicant Tracking Systems with proven strategies that achieve 98% pass rates. This comprehensive guide shows you exactly how to optimize your resume for ATS success.</p>
          
          <h2 className="text-2xl font-bold mt-8">Understanding ATS Systems</h2>
          <p>Applicant Tracking Systems are software that automate recruitment by collecting applications, parsing resumes, scoring candidates, and filtering applications before human review. 99% of Fortune 500 companies and 68% of UK employers use ATS software.</p>

          <div className="space-y-2">
            <p>• Workday: 28% market share, keyword-heavy scoring</p>
            <p>• SuccessFactors: 19%, strong formatting tolerance</p>
            <p>• BambooHR: 14%, simple parsing and basic matching</p>
            <p>• Greenhouse: 12%, modern interface with portfolio integration</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">The ATS Parsing Process</h2>
          <p>When you submit your application, the ATS:</p>
          <div className="space-y-2">
            <p>• Converts your file into readable text</p>
            <p>• Identifies document structure and sections</p>
            <p>• Extracts contact information and work history</p>
            <p>• Analyzes content for keyword matches</p>
            <p>• Assigns a score based on predetermined criteria</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">Format Optimization Rules</h2>
          
          <h3 className="text-xl font-semibold mt-6">File Format</h3>
          <div className="space-y-2">
            <p>• Use .docx or .pdf formats only</p>
            <p>• For PDFs: ensure text is selectable, not embedded as images</p>
            <p>• File naming: FirstName_LastName_Resume.docx</p>
            <p>• Test your file by copying and pasting content</p>
          </div>

          <h3 className="text-xl font-semibold mt-6">Layout Requirements</h3>
          <div className="space-y-2">
            <p>• Single column layout only (no side panels)</p>
            <p>• Standard margins: 0.5-1 inch on all sides</p>
            <p>• Consistent spacing throughout</p>
            <p>• Left-aligned text (avoid centered content)</p>
          </div>

          <h3 className="text-xl font-semibold mt-6">Typography Guidelines</h3>
          <div className="space-y-2">
            <p>• Standard fonts: Arial, Calibri, Times New Roman, Helvetica</p>
            <p>• Font size: 10-12pt for body text, 14-16pt for headings</p>
            <p>• No special characters or decorative elements</p>
            <p>• Use basic punctuation only</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">Section Structure</h2>
          
          <h3 className="text-xl font-semibold mt-6">Required Sections (in order)</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">1. Contact Information</p>
              <p>Full name, phone, email, city/country, LinkedIn URL</p>
            </div>
            <div>
              <p className="font-semibold">2. Professional Summary</p>
              <p>2-3 sentences with target job title, years of experience, key skills</p>
            </div>
            <div>
              <p className="font-semibold">3. Professional Experience</p>
              <p>Reverse chronological order, company name, job title, dates (MM/YYYY), 3-5 bullet points per role</p>
            </div>
            <div>
              <p className="font-semibold">4. Education</p>
              <p>Degree type, major, institution name, graduation year</p>
            </div>
            <div>
              <p className="font-semibold">5. Skills</p>
              <p>Technical skills, software proficiencies, industry-specific skills</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8">Keyword Optimization Strategy</h2>
          
          <h3 className="text-xl font-semibold mt-6">Research Process</h3>
          <div className="space-y-2">
            <p>• Extract all technical skills from job posting</p>
            <p>• Note required software and tools</p>
            <p>• Identify industry terminology and repeated phrases</p>
            <p>• Review 5-10 similar job postings for common requirements</p>
            <p>• Create master keyword list with variations</p>
          </div>

          <h3 className="text-xl font-semibold mt-6">Placement Strategy</h3>
          <div className="space-y-2">
            <p>• Professional Summary: 30% of keywords (most important skills)</p>
            <p>• Experience Section: 50% (weave keywords into job descriptions)</p>
            <p>• Skills Section: 20% (remaining technical skills)</p>
            <p>• Natural Integration: never just list keywords, use in context</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">Testing Your Optimization</h2>
          
          <h3 className="text-xl font-semibold mt-6">The Copy-Paste Test</h3>
          <div className="space-y-2">
            <p>• Select all content and copy from your resume</p>
            <p>• Paste into plain text editor</p>
            <p>• Check if all text is readable and properly formatted</p>
            <p>• Look for strange characters or spacing issues</p>
          </div>

          <h3 className="text-xl font-semibold mt-6">Online ATS Testing Tools</h3>
          <div className="space-y-2">
            <p>• Jobscan.co: ATS compatibility testing and optimization</p>
            <p>• ResumeWorded: ATS scoring and improvement suggestions</p>
            <p>• TopResume: Basic compatibility testing</p>
            <p>• Aim for 80%+ compatibility score</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">Common Mistakes to Avoid</h2>
          <div className="space-y-2">
            <p>• Using tables or text boxes for layout</p>
            <p>• Multiple columns that confuse parsing</p>
            <p>• Special fonts that do not render properly</p>
            <p>• Vague job titles that do not match industry standards</p>
            <p>• Missing keywords critical for the role</p>
            <p>• Inconsistent date formatting</p>
          </div>

          <h2 className="text-2xl font-bold mt-8">Industry-Specific Tips</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Technology Roles</p>
              <p>Include specific programming languages, cloud platforms, development methodologies, and both technical and soft skills.</p>
            </div>
            <div>
              <p className="font-semibold">Marketing Roles</p>
              <p>Specify digital channels, marketing automation tools, analytics platforms, and campaign strategies.</p>
            </div>
            <div>
              <p className="font-semibold">Sales Roles</p>
              <p>Include CRM systems, sales methodologies, quota achievements with percentages, and industry terminology.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8">The Bottom Line</h2>
          <p>ATS optimization is not optional in 2025. With 99% of large companies using these systems, your resume must be optimized to pass automated screening. Follow these guidelines to dramatically improve your chances of reaching human reviewers.</p>

          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <h3 className="text-xl font-bold mb-4">Related Reading</h3>
            <div className="space-y-2">
              <Link href="/blog/uk-job-market-crisis-2025" className="text-purple-600 hover:text-purple-700 block">The UK Job Market Crisis: Why Finding Work Has Never Been Harder</Link>
              <Link href="/blog/why-recruitment-broken-data-2025" className="text-purple-600 hover:text-purple-700 block">Why UK Recruitment is Fundamentally Broken in 2025</Link>
              <Link href="/blog/cv-lottery-application-statistics-2025" className="text-purple-600 hover:text-purple-700 block">The CV Lottery: Why Job Applications Disappear</Link>
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