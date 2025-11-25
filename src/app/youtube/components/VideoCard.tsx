'use client'

import { YouTubeVideo } from '@/types'

interface VideoCardProps {
  video: YouTubeVideo
  onClick: () => void
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-dark-card rounded-2xl overflow-hidden border-2 border-dark-lighter transition-all cursor-pointer hover:-translate-y-1 hover:border-primary"
    >
      {/* Thumbnail */}
      <div 
        className="w-full h-[180px] bg-gradient-to-br from-dark-lighter to-dark-card flex items-center justify-center text-5xl relative"
        style={video.thumbnailUrl ? { backgroundImage: `url(${video.thumbnailUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        {!video.thumbnailUrl && '📺'}
        <div className="absolute w-[60px] h-[60px] bg-primary/90 rounded-full flex items-center justify-center text-2xl text-dark">
          ▶
        </div>
      </div>

      {/* Video Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 leading-snug">
          {video.title}
        </h3>
        <p className="text-text-gray text-sm mb-2">
          {video.channel}
        </p>
        <div className="flex gap-4 text-text-gray text-sm">
          <span>👁️ {video.views} views</span>
          <span>📅 {video.publishedAt}</span>
        </div>
      </div>
    </div>
  )
}
