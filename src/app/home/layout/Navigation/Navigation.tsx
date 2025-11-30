'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, User } from 'lucide-react'
import { ROUTES } from '@/lib/constants'

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#features', label: 'Features' },
  { href: ROUTES.SCHOOLS, label: 'Schools' },
  { href: ROUTES.PRICING, label: 'Pricing' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-dark border-b border-dark-lighter backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-dark font-bold text-lg transition-transform group-hover:scale-110">
              OS
            </div>
            <span className="text-xl font-bold text-primary">Okoa Sem</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={ROUTES.SIGNUP}
              className="btn-primary"
            >
              Get Started
            </Link>
            <Link
              href={ROUTES.MY_ACCOUNT}
              className="w-11 h-11 bg-dark-card border-2 border-dark-lighter rounded-xl flex items-center justify-center text-text-gray hover:border-primary hover:text-primary transition-all"
              title="My Account"
            >
              <User className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-lighter">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-white hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-dark-lighter">
                <Link
                  href={ROUTES.SIGNUP}
                  className="block w-full btn-primary text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.MY_ACCOUNT}
                  className="flex items-center gap-2 py-2 text-white hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="w-5 h-5" />
                  My Account
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}