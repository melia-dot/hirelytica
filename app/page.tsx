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
      company: formData.get('company') as string
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      {/* Header */}
      <header className="py-5">
        <div className="max-w-6xl mx-auto px-5">
          <nav className="flex justify-between items-center">
            <div className="text-3xl font-black text-white">Hirelytica</div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-white/90 hover:text-white font-medium">Features</a>
              <a href="#about" className="text-white/90 hover:text-white font-medium">About</a>
              <a href="#contact" className="text-white/90 hover:text-white font-medium">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="py-24">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            The Future of Recruitment
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Transform your hiring process with AI-powered candidate matching, automated screening, and intelligent insights that find the perfect fit every time.
          </p>

          {/* Signup Form */}
          <div className="bg-white/95 rounded-3xl p-8 max-w-lg mx-auto shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Get Early Access</h2>
            <p className="text-gray-600 mb-8">Join 500+ companies revolutionizing their hiring process</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none bg-white text-gray-900 placeholder-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none bg-white text-gray-900 placeholder-gray-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none bg-white text-gray-900 placeholder-gray-500"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl text-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-50"
              >
                {isSubmitting ? 'Signing you up...' : 'Sign Up for Early Access'}
              </button>
            </form>

            {showSuccess && (
              <div className="mt-5 bg-green-500 text-white px-4 py-3 rounded-lg text-center font-medium">
                🎉 Thank you! We&apos;ll be in touch soon with your early access invitation.
              </div>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center text-white">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Matching</h3>
              <p className="text-white/80">Advanced algorithms match candidates to roles with 95% accuracy</p>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-white/80">Reduce time-to-hire by 60% with automated screening and scheduling</p>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Smart Analytics</h3>
              <p className="text-white/80">Deep insights into your hiring pipeline and candidate quality metrics</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}