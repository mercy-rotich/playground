'use client'

import { useEffect } from 'react'
import Navigation from '@/shared/components/layout/Navigation/Navigation'
import Footer from '@/shared/components/layout/Footer/Footer'
import SignUpCard from '@/features/auth/components/SignUpCard'

export default function LoginPage() {
  // Add class to body when page mounts
  useEffect(() => {
    document.body.classList.add('get-started-page')

    return () => {
      document.body.classList.remove('get-started-page')
    }
  }, [])

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Main Container */}
      <div
        className="min-h-screen flex items-center justify-center px-4 md:px-[5%] py-8 md:py-12"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(196, 248, 42, 0.08), transparent 60%)',
        }}
      >
        <SignUpCard />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
