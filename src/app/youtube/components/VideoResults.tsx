'use client'

import { YouTubeVideo } from '@/types'
import VideoCard from './VideoCard'

interface VideoResultsProps {
  videos: YouTubeVideo[]
  query: string
  onVideoClick: (videoId: string) => void
}

export default function VideoResults({ videos, query, onVideoClick }: VideoResultsProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Results for "{query}"</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onClick={() => onVideoClick(video.id)}
          />
        ))}
      </div>
    </div>
  )
}
