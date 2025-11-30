'use client'

import { useState } from 'react'
import { Gem, AlertTriangle, History } from 'lucide-react'
import { SubscriptionPlan, UserSubscription } from '@/types'

interface SubscriptionCardProps {
  subscription: UserSubscription
  onViewHistory?: () => void
}

export default function SubscriptionCard({ subscription, onViewHistory }: SubscriptionCardProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-primary">Subscription</h2>
      </div>

      <div className="bg-dark-card border-2 border-dark-lighter rounded-2xl p-8 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0">
            <Gem className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">Current Plan</h3>
            <p className="text-text-gray text-sm">
              {subscription.isActive && subscription.plan
                ? subscription.plan.name
                : 'No Active Plan'}
            </p>
          </div>
        </div>

        {/* Alert */}
        {!subscription.isActive && (
          <div className="bg-warning/10 border border-warning/30 rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <p className="text-warning text-sm">
              Subscribe to access premium features and unlock all content
            </p>
          </div>
        )}

        {/* Active Subscription Info */}
        {subscription.isActive && subscription.expiresAt && (
          <div className="bg-success/10 border border-success/30 rounded-xl p-4 mb-6">
            <p className="text-success text-sm font-semibold">
              Your subscription expires on{' '}
              {new Date(subscription.expiresAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        )}

        {/* View History Button */}
        <button
          onClick={onViewHistory}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="w-full py-3 px-4 bg-primary/10 border border-primary/30 rounded-xl text-primary font-semibold hover:bg-primary/20 transition-all flex items-center justify-center gap-2"
        >
          <History className="w-4 h-4" />
          <span>View Payment History</span>
        </button>
      </div>
    </div>
  )
}

