'use client'

import { useEffect } from 'react'
import '@/features/youtube/youtube.css'

export default function YouTubeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  useEffect(() => {
    document.body.classList.add('youtube-page')
    
    return () => {
      document.body.classList.remove('youtube-page')
    }
  }, [])

  return <>{children}</>
}
