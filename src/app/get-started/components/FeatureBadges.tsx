'use client'

import { FileText, Search, Users } from 'lucide-react'

const FEATURES = [
  { label: 'Past Papers', id: 'papers', icon: FileText },
  { label: 'Smart Search', id: 'search', icon: Search },
  { label: 'Study Groups', id: 'groups', icon: Users },
]

export default function FeatureBadges() {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {FEATURES.map((feature) => {
        const Icon = feature.icon
        return (
          <div
            key={feature.id}
            className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
          >
            <Icon className="w-4 h-4" />
            {feature.label}
          </div>
        )
      })}
    </div>
  )
}
