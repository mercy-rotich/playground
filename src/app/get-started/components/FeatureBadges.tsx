'use client'

const FEATURES = [
  { label: 'Past Papers', id: 'papers' },
  { label: 'Smart Search', id: 'search' },
  { label: 'Study Groups', id: 'groups' },
]

export default function FeatureBadges() {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {FEATURES.map((feature) => (
        <div
          key={feature.id}
          className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-semibold"
        >
          {feature.label}
        </div>
      ))}
    </div>
  )
}
