// File: /app/page.tsx
'use client'

import { useState } from 'react'

export default function LandingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      role: formData.get('role') as string
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setShowSuccess(true)
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        throw new Error('Failed to sign up')
      }
    } catch (error) {
      console.error('Signup error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSignup = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
        {/* Header */}
        <header className="py-5">
          <div className="max-w-6xl mx-auto px-5">
            <nav className="flex justify-between items-center">
              <div className="text-3xl font-black text-white">Hirelytica</div>
              <div className="hidden md:flex gap-8 items-center">
                <a href="#jobseekers" className="text-white/90 hover:text-white font-medium">For Job Seekers</a>
                <a href="#employers" className="text-white/90 hover:text-white font-medium">For Employers</a>
                <a href="#signup" onClick={scrollToSignup} className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 font-medium transition-colors">Early Access</a>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Hero Section */}
        <main className="py-24">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Let's End the CV Casino
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              The recruitment system is broken. Job seekers waste hours tailoring CVs only to get ignored. Employers drown in irrelevant applications while missing great candidates. We&apos;re fixing both sides.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
              <a href="#jobseekers" className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-shadow">For Job Seekers</a>
              <a href="#employers" className="bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/30 transition-colors">For Employers</a>
            </div>
          </div>
        </main>

        {/* Job Seekers Section */}
        <section id="jobseekers" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">For Job Seekers</h2>
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl max-w-4xl mx-auto mb-12">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  Stop spending hours tailoring CVs to every job only to get ignored. Here's how we fix it:
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Build Your Master Profile</h3>
                <p className="text-gray-600">Upload all your CV versions OR just talk about your experience conversationally - we'll build your master profile either way.</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Generate Instant CVs</h3>
                <p className="text-gray-600">Paste any job description and generate an intelligently-tailored and ATS-optimised CV in seconds.</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Close Gaps with AI</h3>
                <p className="text-gray-600">Discuss conversationally with our AI to address any remaining gaps. Anything new gets added to your master CV, making future applications faster.</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Apply Everywhere</h3>
                <p className="text-gray-600">Get exposure to employers on our platform while keeping full control - take your CVs anywhere, no lock-in.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Employers Section */}
        <section id="employers" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">For Employers</h2>
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  Post a job description and get 20-30 pre-qualified, intelligently matched candidates in minutes instead of hundreds of irrelevant applications. Cut your time-to-hire dramatically while slashing recruiter fees and job board costs.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality Over Volume</h3>
                <p className="text-gray-600">Get 20-30 genuinely matched candidates instead of 500 random applications. Stop drowning in irrelevant resumes.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Find Hidden Gems</h3>
                <p className="text-gray-600">Stop missing great candidates who don't know the keyword game. Our intelligent matching goes beyond buzzword bingo.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Cut Time-to-Hire</h3>
                <p className="text-gray-600">Reduce your hiring timeline from months to weeks. Every day a role stays open costs you productivity and momentum.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <section id="signup" className="py-20 bg-gradient-to-br from-indigo-500 to-purple-600">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">              Ready to Fix Recruitment?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join the early access programme and be among the first to experience recruitment that actually works.
              </p>
            </div>

            {/* Signup Form */}
            <div className="bg-white/95 rounded-3xl p-8 max-w-lg mx-auto shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Get Early Access</h3>
              <p className="text-gray-600 mb-8">Join the revolution - launching soon</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none bg-white text-gray-900 placeholder-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none bg-white text-gray-900 placeholder-gray-500"
                />
                <select
                  name="role"
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none bg-white text-gray-500"
                >
                  <option value="" className="text-gray-500">Select your role</option>
                  <option value="jobseeker">Job Seeker</option>
                  <option value="employer">Employer/HR</option>
                  <option value="recruiter">Recruiter</option>
                </select>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name (Optional)"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none bg-white text-gray-900 placeholder-gray-500"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl text-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-50"
                >
                  {isSubmitting ? 'Signing you up...' : 'Get Early Access'}
                </button>
              </form>

              {showSuccess && (
                <div className="mt-5 bg-green-500 text-white px-4 py-3 rounded-lg text-center font-medium">
                  🎉 Thank you! We&apos;ll be in touch soon with your early access invitation.
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
  )
}