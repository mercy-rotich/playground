'use client'

import { YOUTUBE_TOPICS } from '@/lib/constants'

interface PopularTopicsProps {
  onTopicClick: (topic: string) => void
}

export default function PopularTopics({ onTopicClick }: PopularTopicsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-primary mb-4">🔥 Popular Topics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {YOUTUBE_TOPICS.map((topic) => (
          <button
            key={topic.query}
            onClick={() => onTopicClick(topic.query)}
            className="bg-dark-card px-5 py-3 rounded-xl border-2 border-dark-lighter text-center font-semibold text-sm transition-all hover:border-primary hover:bg-primary/10 hover:-translate-y-1"
          >
            {topic.icon} {topic.label}
          </button>
        ))}
      </div>
    </div>
  )
}
