// src/app/home/components/Hero/Hero.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'
import { ROUTES, PLATFORM_STATS } from '@/lib/constants'

const stats = [
  { number: `${PLATFORM_STATS.TOTAL_PAPERS / 1000}k+`, label: 'Past Papers' },
  { number: PLATFORM_STATS.TOTAL_SCHOOLS, label: 'Schools' },
  { number: `${PLATFORM_STATS.TOTAL_DEPARTMENTS}+`, label: 'Departments' },
  { number: `${PLATFORM_STATS.TOTAL_STUDENTS / 1000}k+`, label: 'Students' },
]

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    window.location.href = `${ROUTES.PAST_PAPERS}?q=${encodeURIComponent(searchQuery)}`
  }

  return (
    <section className="hero-section relative w-full flex items-center overflow-hidden min-h-screen">
      {/* Background Image - Always visible */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      />
      
      {/* Dark Theme Overlay (default) */}
      <div className="dark-overlay absolute inset-0 bg-gradient-to-br from-[rgba(10,10,10,0.85)] to-[rgba(10,10,10,0.75)] z-[1] transition-opacity duration-300" />
      
      {/* Light Theme Overlay - Reduced opacity for clarity, as requested */}
      <div className="light-overlay absolute inset-0 z-[1] opacity-0 transition-opacity duration-300" style={{ 
        // Reduced opacity to ~55% so the image is clear and not "too white"
        background: 'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(243,244,246,0.50) 50%, rgba(229,231,235,0.45) 100%)'
      }} />
      
      {/* Decorative glow */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(196, 248, 42, 0.12), transparent 50%)' }} />

      {/* Content */}
      <div className="relative z-10 w-[90%] max-w-[1800px] mx-auto py-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-15 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up text-white">
              Never Miss An Exam
              <br />
              <span className="text-primary">Question Pattern</span> Again
            </h1>

            <p className="text-lg md:text-xl text-text-gray mb-8 animate-fade-in-up animation-delay-200">
              Access 24,000+ past papers from 8 schools and 50+ departments. Search by topic,
              upload notes, and collaborate with study groups.
            </p>

            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="relative mb-8 animate-fade-in-up animation-delay-400"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for papers, topics, or courses..."
                // Added shadow-2xl for high visibility
                className="w-full px-6 py-4 pr-14 bg-dark-card/80 backdrop-blur-xl border-2 border-dark-lighter rounded-xl text-white placeholder:text-text-gray focus:outline-none focus:border-primary transition-all shadow-2xl"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-gray hover:text-primary transition-colors"
                aria-label="Search"
              >
                <Search className="w-6 h-6" />
              </button>
            </form>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
              <Link
                href={ROUTES.PAST_PAPERS}
                // Added shadow-lg
                className="inline-flex items-center gap-2 btn-primary shadow-lg hover:shadow-primary/25"
              >
                Browse Past Papers
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href={ROUTES.CHATBOT} className="btn-secondary shadow-lg">
                Try AI Study Bot
              </Link>
              <Link href={ROUTES.YOUTUBE} className="btn-secondary shadow-lg">
                Study with YouTube
              </Link>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                // Added shadow-xl to stat cards
                className="stat-card group relative overflow-hidden bg-gradient-to-br from-dark-card/85 to-dark-card/70 backdrop-blur-2xl border-2 border-primary/15 rounded-3xl p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/25 animate-fade-in-right shadow-xl"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                {/* Gradient bar on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Radial glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-primary/20 group-hover:w-48 group-hover:h-48 transition-all duration-700" />

                <div className="relative z-10">
                  <span className="block text-4xl lg:text-5xl font-extrabold bg-gradient-to-br from-primary to-white bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </span>
                  <span className="block text-text-gray font-semibold tracking-wide">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}