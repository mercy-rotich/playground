'use client'

import { ReactNode } from 'react'

interface GoogleSignInButtonProps {
  onClick: () => void
  isLoading?: boolean
}

export default function GoogleSignInButton({ onClick, isLoading = false }: GoogleSignInButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full py-4 bg-white text-dark rounded-2xl font-semibold text-base flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mb-6"
    >
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 via-red-500 to-green-500 flex items-center justify-center text-white font-bold text-sm">
        G
      </div>
      <span>{isLoading ? 'Signing in...' : 'Continue with Google'}</span>
    </button>
  )
}
