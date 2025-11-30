'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogIn } from 'lucide-react'
import FeatureBadges from './FeatureBadges'
import GoogleSignInButton from './GoogleSignInButton'

export default function SignUpCard() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
     
      console.log('Initiating Google Sign-In...')
      // For now, just show a message
      alert('Google Sign-In would be implemented here.\n\nIn a real application, this would:\n1. Open Google OAuth flow\n2. Authenticate the user\n3. Create/update user profile\n4. Redirect to dashboard')
      setIsLoading(false)
    } catch (error) {
      console.error('Sign-in error:', error)
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-dark-card border-2 border-[#2A2A2A] rounded-3xl p-12 md:p-10 max-w-[480px] w-full animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 animate-float">
          🎓
        </div>
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-primary">Welcome Back!</span>
        </h1>
        <p className="text-text-gray text-base leading-relaxed">
          Sign in to continue your academic journey
        </p>
      </div>

      {/* Google Sign In Button */}
      <GoogleSignInButton onClick={handleGoogleSignIn} isLoading={isLoading} />

      {/* Info Box */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 flex gap-3 mb-8">
        <div className="text-blue-500 text-xl flex-shrink-0">ℹ️</div>
        <p className="text-text-gray text-sm leading-relaxed">
          Sign in with your Google account to access all features
        </p>
      </div>

      {/* Feature Badges */}
      <FeatureBadges />

      {/* Terms */}
      <div className="text-center text-text-gray text-sm leading-relaxed mb-6">
        By signing in, you agree to our{' '}
        <Link href="/terms" className="text-primary hover:text-primary-dark transition-colors">
          Terms of Service
        </Link>
        {' '}and{' '}
        <Link href="/privacy" className="text-primary hover:text-primary-dark transition-colors">
          Privacy Policy
        </Link>
      </div>

      {/* Back Link */}
      <div className="text-center">
        <Link
          href="/"
          className="text-text-gray hover:text-primary transition-colors text-base"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
