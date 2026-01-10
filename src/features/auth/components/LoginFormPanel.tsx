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
    <div className="w-full flex flex-col">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-2 font-display">
          Welcome Back!
        </h1>
        <p className="text-text-gray text-sm leading-relaxed">
          Sign in to your account to continue learning
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
        <EmailPasswordForm onSubmit={handleEmailPasswordLogin} isLoading={isLoading} />
      </div>

      {/* Divider Section */}
      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#2A2A2A]"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-dark text-text-gray text-xs font-medium">or continue with</span>
        </div>
      </div>

      {/* Google Sign In Button  */}
      <div className="mb-5">
        <GoogleSignInButton onClick={handleGoogleSignIn} isLoading={isLoading} />
      </div>

      {/* Sign Up Link */}
      <div className="text-center mb-4 pt-1">
        <p className="text-text-gray text-xs">
          Don't have an account?{' '}
          <Link href="/register" className="text-primary hover:text-primary-light transition-colors font-semibold">
            Create one
          </Link>
        </p>
      </div>

      {/* Terms */}
      <div className="text-center text-text-gray text-xs leading-relaxed border-t border-[#2A2A2A] pt-4">
        By signing in, you agree to our{' '}
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
