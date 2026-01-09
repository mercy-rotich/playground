'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'
import GoogleSignInButton from './GoogleSignInButton'
import EmailPasswordRegisterForm from './EmailPasswordRegisterForm'
import { registerWithEmail } from '@/services/auth/authService'

export default function RegisterFormPanel() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleEmailPasswordRegister = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      // Call the register API
      const response = await registerWithEmail({ name, email, password })
      
      // Store the token
      localStorage.setItem('authToken', response.token)
      
      
      alert('Registration successful!\n\nWelcome to Okoa SEM! You will be redirected to the dashboard.')
      console.log('User registered:', response.user)
      
    } catch (error: any) {
      console.error('Registration error:', error)
      setError(error.message || 'Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    setIsLoading(true)
    setError(null)
    try {
      
      console.log('Initiating Google Sign-Up...')
    
      alert('Google Sign-Up would be implemented here.\n\nIn a real application, this would:\n1. Open Google OAuth flow\n2. Create user account\n3. Redirect to dashboard')
    } catch (error: any) {
      console.error('Sign-up error:', error)
      setError(error.message || 'Google sign-up failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-full flex flex-col justify-center py-12 px-8 lg:px-16 max-w-xl mx-auto w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-3">
          Create Account
        </h1>
        <p className="text-text-gray text-lg">
          Join thousands of students achieving academic excellence
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
      <div className="mb-6">
        <EmailPasswordRegisterForm onSubmit={handleEmailPasswordRegister} isLoading={isLoading} />
      </div>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#2A2A2A]"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-dark text-text-gray">or sign up with</span>
        </div>
      </div>

      {/* Google Sign Up Button */}
      <GoogleSignInButton onClick={handleGoogleSignUp} isLoading={isLoading} />

      {/* Login Link */}
      <div className="mt-6 text-center">
        <p className="text-text-gray text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:text-primary-dark transition-colors font-semibold">
            Sign in
          </Link>
        </p>
      </div>

      {/* Terms */}
      <div className="mt-8 text-center text-text-gray text-xs leading-relaxed">
        By creating an account, you agree to our{' '}
        <Link href="/terms" className="text-primary hover:text-primary-dark transition-colors">
          Terms of Service
        </Link>
        {' '}and{' '}
        <Link href="/privacy" className="text-primary hover:text-primary-dark transition-colors">
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}
