'use client'

import { CheckCircle } from 'lucide-react'
import { UserProfile } from '@/types'

interface ProfileHeaderProps {
  user: UserProfile
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  const formattedMemberDate = new Date(user.memberSince).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-center gap-6 animate-fadeInUp">
      {/* Profile Image */}
      <div className="relative flex-shrink-0">
        <div className="w-24 h-24 rounded-full border-4 border-dark bg-dark-card flex items-center justify-center text-4xl font-bold text-dark">
          {user.name.charAt(0).toUpperCase()}
        </div>
        {user.isVerified && (
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-success border-4 border-primary rounded-full flex items-center justify-center text-dark">
            <CheckCircle className="w-5 h-5" />
          </div>
        )}
      </div>

      {/* Profile Info */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-1">{user.name}</h1>
        <p className="text-dark/80 text-lg mb-3">{user.email}</p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {user.isVerified && (
            <div className="inline-flex items-center gap-2 bg-success/30 text-dark px-4 py-2 rounded-full font-semibold w-fit mx-auto md:mx-0">
              <CheckCircle className="w-4 h-4" />
              <span>Verified Account</span>
            </div>
          )}
          <div className="text-dark/80 font-medium">
            Member since {formattedMemberDate}
          </div>
          <div className="text-dark/80 font-medium">
            Active {user.lastActiveTime}
          </div>
        </div>
      </div>
    </div>
  )
}

