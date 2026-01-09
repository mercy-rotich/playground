'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Info, AlertCircle } from 'lucide-react'
import FeatureBadges from './FeatureBadges'
import GoogleSignInButton from './GoogleSignInButton'
import EmailPasswordForm from './EmailPasswordForm'
import { loginWithEmail, loginWithGoogle } from '@/services/auth/authService'

export default function SignUpCard() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleEmailPasswordLogin = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      // Call the login API
      const response = await loginWithEmail({ email, password })
      
    
      localStorage.setItem('authToken', response.token)
     
      alert('Login successful!\n\nIn a real application, you would be redirected to the dashboard.')
      console.log('User logged in:', response.user)
      
     
    } catch (error: any) {
      console.error('Login error:', error)
      setError(error.message || 'Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    setError(null)
    try {
     
      console.log('Initiating Google Sign-In...')
    
      alert('Google Sign-In would be implemented here.\n\nIn a real application, this would:\n1. Open Google OAuth flow\n2. Authenticate the user\n3. Create/update user profile\n4. Redirect to dashboard')
    } catch (error: any) {
      console.error('Sign-in error:', error)
      setError(error.message || 'Google sign-in failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-dark-card border-2 border-[#2A2A2A] rounded-3xl p-12 md:p-10 max-w-[480px] w-full animate-fadeInUp shadow-2xl relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
            <BookOpen className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-primary">Welcome Back!</span>
          </h1>
          <p className="text-text-gray text-base leading-relaxed">
            Sign in to continue your academic journey
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-500 text-sm leading-relaxed">{error}</p>
          </div>
        )}

        {/* Email/Password Form */}
        <EmailPasswordForm onSubmit={handleEmailPasswordLogin} isLoading={isLoading} />

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#2A2A2A]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-dark-card text-text-gray">or continue with</span>
          </div>
        </div>

        {/* Google Sign In Button */}
        <GoogleSignInButton onClick={handleGoogleSignIn} isLoading={isLoading} />

        {/* Info Box */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 flex gap-3 mb-8">
          <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-text-gray text-sm leading-relaxed">
            New to Okoa SEM?{' '}
            <Link href="/register" className="text-primary hover:text-primary-dark transition-colors font-semibold">
              Create an account
            </Link>
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
    </div>
  )
}
