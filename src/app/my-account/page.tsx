'use client'

import { useEffect, useState } from 'react'
import { UserProfile, UserSubscription, SubscriptionPlan } from '@/types'
import { PRICING } from '@/lib/constants'

import ProfileHeader from './components/ProfileHeader'
import AccountDetails from './components/AccountDetails'
import SubscriptionCard from './components/SubscriptionCard'
import PaymentPlans from './components/PaymentPlans'

// Mock user data - in production, fetch from API
const mockUser: UserProfile = {
  id: '1',
  email: 'cherotichm182@gmail.com',
  name: 'Mercy Cherotich',
  avatar: undefined,
  subscriptionStatus: 'free',
  createdAt: new Date('2025-09-12'),
  lastActive: new Date(),
  isVerified: true,
  memberSince: new Date('2025-09-12'),
  lastActiveTime: '4 minutes ago',
}

const mockSubscription: UserSubscription = {
  isActive: false,
}

// Convert PRICING to SubscriptionPlan format
const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'daily',
    name: PRICING.DAILY.name,
    duration: String(PRICING.DAILY.duration),
    durationLabel: '1 Day',
    price: PRICING.DAILY.amount,
  },
  {
    id: 'monthly',
    name: PRICING.MONTHLY.name,
    duration: String(PRICING.MONTHLY.duration),
    durationLabel: '30 Days',
    price: PRICING.MONTHLY.amount,
  },
]

export default function MyAccountPage() {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [subscription, setSubscription] = useState<UserSubscription | null>(null)

  useEffect(() => {
    // In production, fetch real user data from API
    // Simulate loading delay
    const timer = setTimeout(() => {
      setUser(mockUser)
      setSubscription(mockSubscription)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleSelectPlan = (plan: SubscriptionPlan) => {
    // In production, this would initiate the payment flow
    console.log('Selected plan:', plan)
  }

  const handleViewHistory = () => {
    alert('Payment history modal would open here')
  }

  if (!user || !subscription) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark">
    

      {/* Main Content */}
      <main className="container-custom py-8">
        {/* Profile Header */}
        <ProfileHeader user={user} />

       
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <AccountDetails user={user} />
          </div>

          <div>
            <SubscriptionCard
              subscription={subscription}
              onViewHistory={handleViewHistory}
            />
          </div>
        </div>

        {/* Payment Plans - Full Width */}
        <PaymentPlans plans={subscriptionPlans} onSelectPlan={handleSelectPlan} />
      </main>
    </div>
  )
}
