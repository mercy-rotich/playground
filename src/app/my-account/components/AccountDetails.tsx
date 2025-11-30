'use client'

import { User, Mail, CheckCircle } from 'lucide-react'
import { UserProfile } from '@/types'

interface AccountDetailsProps {
  user: UserProfile
}

export default function AccountDetails({ user }: AccountDetailsProps) {
  const infoRows = [
    {
      label: 'Full Name',
      value: user.name,
      icon: User,
      color: 'text-primary',
      bgColor: 'bg-primary/15',
    },
    {
      label: 'Email Address',
      value: user.email,
      icon: Mail,
      color: 'text-secondary',
      bgColor: 'bg-secondary/15',
    },
    {
      label: 'Account Status',
      value: user.isVerified ? 'Verified' : 'Not Verified',
      icon: CheckCircle,
      color: user.isVerified ? 'text-success' : 'text-text-gray',
      bgColor: user.isVerified ? 'bg-success/15' : 'bg-text-gray/15',
    },
  ]

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-primary">Account Details</h2>
      </div>

      <div className="bg-dark-card border-2 border-dark-lighter rounded-2xl p-8">
        {infoRows.map((row, idx) => {
          const Icon = row.icon
          return (
            <div
              key={idx}
              className={`flex items-center gap-4 py-4 ${
                idx !== infoRows.length - 1 ? 'border-b border-dark-lighter' : ''
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${row.bgColor}`}>
                <Icon className={`w-6 h-6 ${row.color}`} />
              </div>
              <div className="flex-1">
                <div className="text-text-gray text-sm mb-1">{row.label}</div>
                <div className="text-white text-lg font-semibold">{row.value}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

