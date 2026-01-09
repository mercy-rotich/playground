'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, User, ChevronDown } from 'lucide-react'
import ThemeToggle from '@/shared/components/ThemeToggle'
import { ROUTES } from '@/shared/constants'

const navLinks = [
  { href: ROUTES.PAST_PAPERS, label: 'Past Papers' },
  { href: ROUTES.CHATBOT, label: 'AI Study Bot' },
  { href: ROUTES.YOUTUBE, label: 'YouTube' },
  { href: '/#pricing', label: 'Pricing' },
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo - Clean, not overdone */}
          <Link href={ROUTES.HOME} className="flex items-center gap-2.5 group">
            <div className="
              w-9 h-9 rounded-lg bg-primary 
              flex items-center justify-center 
              font-bold text-dark text-sm
              group-hover:scale-105 transition-transform
            ">
              OS
            </div>
            <span className="font-semibold text-white text-lg hidden sm:block">
              Okoa Sem
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  relative px-4 py-2 text-sm font-medium
                  text-text-secondary hover:text-white
                  transition-colors duration-200
                  group
                "
              >
                {link.label}
                {/* Underline animation */}
                <span className="
                  absolute bottom-0 left-4 right-4 h-0.5
                  bg-primary scale-x-0 group-hover:scale-x-100
                  transition-transform duration-200 origin-left
                " />
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <div className="hidden sm:inline-flex">
              <ThemeToggle />
            </div>
            {/* Account link - Subtle */}
            <Link
              href={ROUTES.MY_ACCOUNT}
              className="
                hidden sm:flex items-center gap-2 px-3 py-2 
                text-sm text-text-secondary hover:text-white
                transition-colors
              "
            >
              <User className="w-4 h-4" />
              <span className="hidden lg:inline">Account</span>
            </Link>

            {/* Primary CTA */}
            <Link
              href={ROUTES.SIGNUP}
              className="
                hidden sm:inline-flex items-center gap-2
                px-4 py-2 bg-primary text-dark rounded-lg
                text-sm font-medium
                hover:bg-primary-dark transition-colors
                shadow-lg shadow-primary/20
              "
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
                md:hidden p-2 -mr-2
                text-text-secondary hover:text-white
                transition-colors
              "
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full screen, clean */}
      {isMobileMenuOpen && (
        <div className="
          md:hidden fixed inset-0 top-16 z-40
          bg-dark/95 backdrop-blur-xl
          animate-fadeIn
        ">
          <div className="container-custom py-8">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    flex items-center justify-between
                    px-4 py-4 rounded-xl
                    text-lg font-medium text-white
                    hover:bg-white/5 transition-colors
                    animate-fadeInUp
                  "
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                  <ChevronDown className="w-5 h-5 -rotate-90 text-text-muted" />
                </Link>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-center gap-3">
                <ThemeToggle />
              </div>
              <Link
                href={ROUTES.SIGNUP}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  w-full py-4 bg-primary text-dark rounded-xl
                  font-semibold text-center
                  animate-fadeInUp
                "
                style={{ animationDelay: '200ms' }}
              >
                Get Started Free
              </Link>
              <Link
                href={ROUTES.MY_ACCOUNT}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  w-full py-4 bg-white/5 text-white rounded-xl
                  font-semibold text-center flex items-center justify-center gap-2
                  animate-fadeInUp
                "
                style={{ animationDelay: '250ms' }}
              >
                <User className="w-5 h-5" />
                My Account
              </Link>
            </div>

            {/* Mobile footer info */}
            <div className="mt-auto pt-8 text-center text-sm text-text-muted">
              <p>24,847 past papers • 8 universities</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}