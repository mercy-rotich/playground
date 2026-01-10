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
    <div className="w-full flex flex-col">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-2 font-display">
          Create Account
        </h1>
        <p className="text-text-gray text-sm leading-relaxed">
          Join thousands of students and start learning today
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 bg-red-500/10 border border-red-500/30 rounded-lg p-3 flex gap-2">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-500 text-xs leading-relaxed">{error}</p>
        </div>
      )}

      {/* Email/Password Form */}
      <div className="mb-4">
        <EmailPasswordRegisterForm onSubmit={handleEmailPasswordRegister} isLoading={isLoading} />
      </div>

      {/* Divider Section */}
      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#2A2A2A]"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-dark text-text-gray text-xs font-medium">or sign up with</span>
        </div>
      </div>

      {/* Google Sign Up Button */}
      <div className="mb-5">
        <GoogleSignInButton onClick={handleGoogleSignUp} isLoading={isLoading} />
      </div>

      {/* Login Link */}
      <div className="text-center mb-4 pt-1">
        <p className="text-text-gray text-xs">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:text-primary-light transition-colors font-semibold">
            Sign in
          </Link>
        </p>
      </div>

      {/* Terms */}
      <div className="text-center text-text-gray text-xs leading-relaxed border-t border-[#2A2A2A] pt-4">
        By creating an account, you agree to our{' '}
        <Link href="/terms" className="text-primary hover:text-primary-dark transition-colors">
          Terms
        </Link>
        {' & '}
        <Link href="/privacy" className="text-primary hover:text-primary-dark transition-colors">
          Privacy
        </Link>
      </div>
    </div>
  )
}
