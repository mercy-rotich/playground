'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ArrowRight, Sparkles, BookOpen, Users, GraduationCap, FileText } from 'lucide-react'
import { ROUTES, PLATFORM_STATS } from '@/lib/constants'

const stats = [
  { 
    number: `${PLATFORM_STATS.TOTAL_PAPERS / 1000}k+`, 
    label: 'Past Papers',
    icon: FileText 
  },
  { 
    number: PLATFORM_STATS.TOTAL_SCHOOLS, 
    label: 'Schools',
    icon: GraduationCap 
  },
  { 
    number: `${PLATFORM_STATS.TOTAL_DEPARTMENTS}+`, 
    label: 'Departments',
    icon: BookOpen 
  },
  { 
    number: `${PLATFORM_STATS.TOTAL_STUDENTS / 1000}k+`, 
    label: 'Students',
    icon: Users 
  },
]

const floatingElements: Array<{ icon: string; delay: string; duration: string; top: string; left: string }> = []

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `${ROUTES.PAST_PAPERS}?q=${encodeURIComponent(searchQuery)}`
  }

  return (
    <section className="hero-section relative w-full min-h-screen overflow-hidden">
      {/* Background Image - Full coverage */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Students studying"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
      </div>
      
      {/* Dark Theme Overlay - Gradient from left */}
      <div 
        className="dark-overlay absolute inset-0 z-[1] transition-opacity duration-500"
        style={{
          background: `
            linear-gradient(
              105deg,
              rgba(0, 0, 0, 0.92) 0%,
              rgba(0, 0, 0, 0.85) 40%,
              rgba(0, 0, 0, 0.6) 60%,
              rgba(0, 0, 0, 0.3) 80%,
              rgba(0, 0, 0, 0.15) 100%
            )
          `
        }}
      />
      
      {/* Light Theme Overlay - Sophisticated gradient */}
      <div 
        className="light-overlay absolute inset-0 z-[1] opacity-0 transition-opacity duration-500"
        style={{ 
          background: `
            linear-gradient(
              105deg,
              rgba(255, 255, 255, 0.98) 0%,
              rgba(255, 255, 255, 0.95) 35%,
              rgba(255, 255, 255, 0.75) 50%,
              rgba(255, 255, 255, 0.4) 65%,
              rgba(255, 255, 255, 0) 80%
            )
          `
        }} 
      />

      {/* Accent glow for light theme */}
      <div 
        className="light-accent-glow absolute inset-0 z-[1] opacity-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 0% 50%, rgba(16, 216, 69, 0.12), transparent 60%),
            radial-gradient(ellipse 50% 50% at 20% 80%, rgba(16, 216, 69, 0.08), transparent 50%)
          `
        }}
      />

      {/* Floating decorative elements */}
      {mounted && floatingElements.map((el, i) => (
        <div
          key={i}
          className="absolute z-[2] text-3xl opacity-20 animate-float pointer-events-none"
          style={{
            top: el.top,
            left: el.left,
            animationDelay: el.delay,
            animationDuration: el.duration,
          }}
        >
          {el.icon}
        </div>
      ))}

      {/* Main Content Grid */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Hero Content */}
        <div className="flex-1 flex items-center pt-20 pb-16">
          <div className="w-[90%] max-w-[1800px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Content - Takes up more space */}
              <div className="lg:col-span-7 xl:col-span-6">
                {/* Animated badge */}
                <div 
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm transform transition-all duration-700 ${
                    mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary">Your Ultimate Study Companion</span>
                </div>

                {/* Main headline with staggered animation */}
                <h1 
                  className={`hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1] transform transition-all duration-700 delay-100 ${
                    mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <span className="text-white block">Never Miss An</span>
                  <span className="text-white block">Exam{' '}
                    <span className="relative inline-block">
                      <span className="text-primary relative z-10">Question</span>
                    </span>
                  </span>
                  <span className="text-primary block">Pattern Again</span>
                </h1>

                {/* Subtitle */}
                <p 
                  className={`hero-subtitle text-lg md:text-xl text-text-gray mb-8 leading-relaxed max-w-xl transform transition-all duration-700 delay-200 ${
                    mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  Access thousands of past papers, AI-powered study tools, and collaborative 
                  learning features designed for students who want to excel.
                </p>

                {/* Search Bar */}
                <form
                  onSubmit={handleSearch}
                  className={`relative mb-8 max-w-xl transform transition-all duration-700 delay-300 ${
                    mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  } ${isSearchFocused ? 'scale-[1.02]' : ''}`}
                >
                  <div 
                    className={`absolute -inset-1 bg-gradient-to-r from-primary/30 to-green-400/30 rounded-2xl blur-lg transition-opacity duration-300 ${
                      isSearchFocused ? 'opacity-100' : 'opacity-0'
                    }`} 
                  />
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                      placeholder="Search for papers, topics, or courses..."
                      className="w-full px-6 py-4 pr-14 bg-dark-card/90 backdrop-blur-xl border-2 border-dark-lighter/50 rounded-xl text-white placeholder:text-text-gray/70 focus:outline-none focus:border-primary transition-all duration-300 shadow-2xl"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary rounded-lg text-white hover:bg-primary-dark transition-all duration-200 hover:scale-105"
                      aria-label="Search"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </form>
                
                {/* CTA Buttons */}
                <div 
                  className={`flex flex-wrap gap-4 transform transition-all duration-700 delay-400 ${
                    mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <Link
                    href={ROUTES.PAST_PAPERS}
                    className="group inline-flex items-center gap-2 btn-primary shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    Browse Past Papers
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link 
                    href={ROUTES.CHATBOT} 
                    className="btn-secondary shadow-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                  >
                    Try AI Study Bot
                  </Link>
                  <Link 
                    href={ROUTES.YOUTUBE} 
                    className="btn-secondary shadow-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                  >
                    Study with YouTube
                  </Link>
                </div>

                {/* Quick stats inline - visible on larger screens */}
                <div 
                  className={`hidden lg:flex items-center gap-8 mt-10 pt-8 transform transition-all duration-700 delay-500 ${
                    mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  {stats.slice(0, 3).map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.number}</div>
                        <div className="text-sm text-text-gray">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Can add floating cards or leave for image visibility */}
              <div className="hidden lg:block lg:col-span-5 xl:col-span-6">
                <div className="relative h-[500px]">
                  <div 
                    className={`absolute top-10 right-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl transform transition-all duration-1000 delay-600 ${
                      mounted ? 'translate-y-0 opacity-100 rotate-3' : 'translate-y-8 opacity-0'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">24,000+</div>
                        <div className="text-white/60 text-sm">Past Papers</div>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`absolute top-40 right-0 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl transform transition-all duration-1000 delay-700 ${
                      mounted ? 'translate-y-0 opacity-100 -rotate-2' : 'translate-y-8 opacity-0'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-green-400/20 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">AI Powered</div>
                        <div className="text-white/60 text-sm">Study Assistant</div>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`absolute bottom-20 right-32 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl transform transition-all duration-1000 delay-800 ${
                      mounted ? 'translate-y-0 opacity-100 rotate-1' : 'translate-y-8 opacity-0'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-400/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Study Groups</div>
                        <div className="text-white/60 text-sm">Collaborate & Learn</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}