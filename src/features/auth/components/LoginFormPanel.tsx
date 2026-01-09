'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'
import GoogleSignInButton from './GoogleSignInButton'
import EmailPasswordForm from './EmailPasswordForm'
import { loginWithEmail } from '@/services/auth/authService'

export default function LoginFormPanel() {
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
    <div className="h-full flex flex-col justify-center py-12 px-8 lg:px-16 max-w-xl mx-auto w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-3">
          Welcome Back!
        </h1>
        <p className="text-text-gray text-lg">
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
      <div className="mb-6">
        <EmailPasswordForm onSubmit={handleEmailPasswordLogin} isLoading={isLoading} />
      </div>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#2A2A2A]"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-dark text-text-gray">or continue with</span>
        </div>
      </div>

      {/* Google Sign In Button */}
      <GoogleSignInButton onClick={handleGoogleSignIn} isLoading={isLoading} />

      {/* Sign Up Link */}
      <div className="mt-6 text-center">
        <p className="text-text-gray text-sm">
          Don't have an account?{' '}
          <Link href="/register" className="text-primary hover:text-primary-dark transition-colors font-semibold">
            Create one now
          </Link>
        </p>
      </div>

      {/* Terms */}
      <div className="mt-8 text-center text-text-gray text-xs leading-relaxed">
        By signing in, you agree to our{' '}
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
