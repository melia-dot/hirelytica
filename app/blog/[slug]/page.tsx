// File: /app/blog/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = {
  'why-recruitment-is-broken': {
    title: 'Why Recruitment is Broken (And How We\'re Fixing It)',
    date: '2025-01-15',
    readTime: '5 min read',
    author: 'Hirelytica Team',
    content: `
The recruitment industry is stuck in the past. While every other sector has embraced digital transformation, hiring still operates like it's 1995. Job seekers spend countless hours tailoring CVs for each application, only to have their resumes disappear into a black hole. Meanwhile, employers are drowning in hundreds of irrelevant applications while the perfect candidates slip through the cracks.

## The Job Seeker's Nightmare

Picture this: You're a talented software developer looking for your next role. You spend 2-3 hours crafting the perfect CV for each position, carefully matching keywords from the job description. You submit your application and... silence. No feedback, no explanation, just rejection or worse – complete radio silence.

This isn't your fault. The system is designed to fail you.

**The problems job seekers face:**
- **The Keyword Lottery**: ATS systems reject 75% of qualified candidates because they don't match arbitrary keywords
- **The Time Sink**: Tailoring CVs for each application is incredibly time-consuming
- **The Black Hole**: No feedback means you can't improve your applications
- **The Guessing Game**: You never know what employers actually want

## The Employer's Headache

Employers aren't evil – they're overwhelmed. Post a job on LinkedIn and watch as 500+ applications flood in within 24 hours. Most are completely irrelevant, but buried somewhere in that pile might be your next star hire.

**The problems employers face:**
- **Volume Overload**: Too many applications to review properly
- **Quality Issues**: Most applications are clearly mass-sent and irrelevant
- **Hidden Talent**: Great candidates who don't know the "keyword game" get filtered out
- **Time Costs**: Each open role costs productivity and momentum

## The Root Cause: Misaligned Incentives

The current system optimizes for quantity over quality. Job boards make money from job postings, so they want maximum applications. ATS systems sell "efficiency" by filtering out as many candidates as possible. Nobody is optimizing for actual matches.

## Our Solution: Intelligent Matching

At Hirelytica, we're flipping the script. Instead of more applications, we focus on better matches.

**For Job Seekers:**
- Build once, apply everywhere: Create a master profile and generate tailored CVs instantly
- AI-powered optimization: Our system knows what employers actually want
- Real feedback: Understand why applications succeed or fail

**For Employers:**
- Quality over quantity: Get 20-30 pre-qualified candidates instead of 500 random applications
- True matching: Find candidates based on actual fit, not keyword bingo
- Faster hiring: Cut your time-to-hire from months to weeks

## The Future of Recruitment

Recruitment should be about connecting the right people with the right opportunities. It shouldn't be a casino where luck determines outcomes. With intelligent matching, transparency, and respect for everyone's time, we can build a system that actually works.

The future is coming. Are you ready to be part of it?
    `
  },
  'the-cv-casino-problem': {
    title: 'The CV Casino: Why Job Applications Feel Like Gambling',
    date: '2025-01-10',
    readTime: '4 min read',
    author: 'Hirelytica Team',
    content: `
Job applications shouldn't feel like playing roulette, but that's exactly what the current system has become. You submit your CV and pray that it somehow makes it past the algorithmic gatekeepers to reach human eyes. The odds? Not in your favor.

## The Numbers Don't Lie

Here's the harsh reality of modern job applications:
- **75%** of resumes are rejected by ATS systems before a human sees them
- **Only 2%** of applicants get called for an interview
- **Job seekers spend 11 hours per week** searching and applying for jobs
- **The average job posting receives 250 applications**

When the success rate is this low, it's not about merit anymore – it's about luck.

## Why the System Became a Casino

The recruitment industry didn't set out to create a gambling system, but that's what happened when technology was added without changing the fundamental approach.

**The ATS Problem**: Applicant Tracking Systems were designed to reduce workload, but they've become overly aggressive filters that eliminate qualified candidates for arbitrary reasons.

**The Keyword Game**: Job descriptions are stuffed with keywords, and candidates try to match them perfectly. It's become less about qualifications and more about gaming the algorithm.

**The Volume Trap**: More applications seem better, but they actually make the problem worse. When employers are overwhelmed, they rely even more heavily on flawed filtering systems.

## The Real Cost

This casino system hurts everyone:

**Job Seekers lose:**
- Time and energy on applications that never get seen
- Confidence when qualified applications are rejected without explanation
- Opportunities when the "wrong" keywords eliminate them from consideration

**Employers lose:**
- Great candidates who don't know how to game the system
- Time reviewing irrelevant applications that somehow made it through
- Money on prolonged hiring processes and recruitment fees

## Breaking the Casino

The solution isn't to get better at gambling – it's to stop playing the game entirely. At Hirelytica, we're building a system based on intelligent matching instead of chance.

Instead of hoping your CV wins the lottery, imagine a system where:
- Your qualifications are understood, not just keyword-matched
- Employers see fewer, but genuinely relevant candidates
- Feedback helps you improve instead of leaving you guessing

The recruitment casino has rigged the game against everyone. It's time to build something better.
    `
  },
  'ats-optimization-guide': {
    title: 'The Complete Guide to ATS Optimization in 2025',
    date: '2025-01-05',
    readTime: '7 min read',
    author: 'Hirelytica Team',
    content: `
ATS (Applicant Tracking System) optimization shouldn't exist. The fact that job seekers need to learn how to trick software just to get their qualifications seen by humans shows how broken the system is. But until we fix recruitment entirely, here's how to beat the machines.

## Understanding the ATS Beast

ATS systems are software that automatically screens resumes before human recruiters see them. Think of them as very primitive AI that looks for exact keyword matches and specific formatting.

**The brutal truth**: 75% of resumes are rejected by ATS systems, often eliminating perfectly qualified candidates for technical reasons that have nothing to do with their ability to do the job.

## The ATS Optimization Playbook

### 1. Keyword Strategy

**Mirror the job description**: Use the exact keywords and phrases from the job posting. If they say "project management," don't say "project coordination."

**Natural integration**: Don't just stuff keywords randomly. Integrate them naturally into your experience descriptions.

**Variations matter**: Include both "SEO" and "Search Engine Optimization" if relevant. ATS systems aren't smart enough to know they're the same thing.

### 2. Formatting Rules

**Keep it simple**: Fancy designs, graphics, and creative layouts confuse ATS systems. Stick to clean, simple formatting.

**Standard headings**: Use conventional section headers like "Experience," "Education," "Skills" – not creative alternatives.

**Bullet points over paragraphs**: ATS systems parse bullet points more reliably than dense paragraphs.

**No headers/footers**: Important information in headers and footers often gets missed entirely.

### 3. Technical Details

**File format matters**: Submit as .docx when possible, .pdf as second choice. Avoid .pages, .txt, or image formats.

**Font choices**: Stick to standard fonts like Arial, Calibri, or Times New Roman. Fancy fonts can cause parsing errors.

**No tables or columns**: ATS systems often scramble information presented in tables or multi-column layouts.

## Common ATS Killers

Avoid these resume elements that confuse ATS systems:

- **Creative layouts** with sidebars or unusual structures
- **Graphics and images** including photos or logos
- **Special characters** like symbols or unusual punctuation
- **Acronyms without explanations** (always spell out on first use)
- **Date formatting variations** (stick to MM/YYYY format)

## The Skills Section Strategy

Your skills section is crucial for ATS optimization:

**Hard skills first**: List technical skills, software, and certifications prominently
**Use exact names**: "Microsoft Excel" not "Excel," "Google Analytics" not "GA"
**Include skill levels**: Many ATS systems look for proficiency indicators

## Beating Industry-Specific ATS Challenges

### Tech Roles
- Include programming languages exactly as listed
- Mention frameworks, tools, and methodologies by name
- Use both acronyms and full names (e.g., "API" and "Application Programming Interface")

### Marketing Roles
- Include platform names (Google Ads, Facebook Ads, HubSpot)
- Mention specific methodologies (Agile, Scrum, Growth Hacking)
- Use metric-based descriptions with numbers

### Finance Roles
- Include certification acronyms (CPA, CFA, FRM)
- Mention specific software (SAP, QuickBooks, Bloomberg Terminal)
- Use industry-standard terminology precisely

## The Human Element

Remember: ATS optimization gets you past the robots, but humans make the final decision. Once your resume passes ATS screening:

**Tell compelling stories**: Use the STAR method (Situation, Task, Action, Result) to describe achievements
**Quantify everything**: Numbers catch human attention after keywords catch ATS attention
**Show impact**: Focus on what you accomplished, not just what you did

## Tools to Help

Several tools can help you optimize for ATS:

- **Jobscan**: Compares your resume against job descriptions and suggests improvements
- **Resume Worded**: Provides ATS-friendly formatting and keyword suggestions
- **ATS Resume Scanner**: Tests how well ATS systems can parse your resume

## The Bigger Picture

While these tips will help you beat ATS systems, remember that this entire game is absurd. You shouldn't need to become an expert in software psychology just to get a job interview.

At Hirelytica, we're building a future where your qualifications matter more than your ability to game algorithms. Until that future arrives, use these strategies to level the playing field.

The goal isn't just to beat the ATS – it's to showcase your real value in a way that both machines and humans can understand.
    `
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-5 bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="max-w-6xl mx-auto px-5">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-black text-white">Hirelytica</Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link href="/#jobseekers" className="text-white/90 hover:text-white font-medium">For Job Seekers</Link>
              <Link href="/#employers" className="text-white/90 hover:text-white font-medium">For Employers</Link>
              <Link href="/blog" className="text-white/90 hover:text-white font-medium">Blog</Link>
              <Link href="/#signup" className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 font-medium transition-colors">Early Access</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Article Header */}
      <section className="py-20 bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-5">
          <Link 
            href="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-white/80">
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
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="prose prose-lg prose-indigo max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-800 mt-12 mb-6">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              } else if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                )
              } else if (paragraph.includes('- **')) {
                // Handle bullet points with bold headers
                const items = paragraph.split('\n').filter(item => item.trim().startsWith('- **'))
                return (
                  <ul key={index} className="space-y-3 my-6">
                    {items.map((item, itemIndex) => {
                      const cleanItem = item.replace('- **', '').replace('**:', ':')
                      const [boldPart, ...rest] = cleanItem.split(': ')
                      return (
                        <li key={itemIndex} className="text-gray-600">
                          <strong className="text-gray-800">{boldPart}:</strong> {rest.join(': ')}
                        </li>
                      )
                    })}
                  </ul>
                )
              } else if (paragraph.trim() && !paragraph.startsWith('**')) {
                return (
                  <p key={index} className="text-gray-600 text-lg leading-relaxed mb-6">
                    {paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>').split('<strong').map((part, partIndex) => {
                      if (part.includes('</strong>')) {
                        const [boldContent, afterBold] = part.split('</strong>')
                        const content = boldContent.replace(' class="text-gray-800">', '')
                        return (
                          <span key={partIndex}>
                            <strong className="text-gray-800">{content}</strong>
                            {afterBold}
                          </span>
                        )
                      }
                      return <span key={partIndex}>{part}</span>
                    })}
                  </p>
                )
              }
              return null
            })}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Skip the CV Casino?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the early access program and be among the first to experience recruitment that actually works for everyone.
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

// Generate static params for known blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}