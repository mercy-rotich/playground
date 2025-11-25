'use client'

import { useState, useRef } from 'react'
import { YouTubeVideo } from '@/types'
import { generateDemoVideos } from '@/lib/constants'
import YouTubeHeader from './components/YouTubeHeader'
import SearchSection from './components/SearchSection'
import PopularTopics from './components/PopularTopics'
import VideoResults from './components/VideoResults'
import EmptyState from './components/EmptyState'
import LoadingState from './components/LoadingState'


const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || ''

type SearchState = 'idle' | 'loading' | 'results' | 'empty'

export default function YouTubePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentQuery, setCurrentQuery] = useState('')
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [searchState, setSearchState] = useState<SearchState>('idle')
  const resultsRef = useRef<HTMLDivElement>(null)

  const performSearch = async (query: string) => {
    if (!query.trim()) {
      alert('Please enter a search term')
      return
    }

    setCurrentQuery(query)
    setSearchState('loading')

    // Scroll to results section smoothly
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)

    try {
      if (API_KEY) {
        // YouTube API call
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(query + ' tutorial')}&type=video&key=${API_KEY}`
        )

        if (!response.ok) {
          throw new Error('API call failed')
        }

        const data = await response.json()
        
        if (data.items && data.items.length > 0) {
          const formattedVideos: YouTubeVideo[] = data.items.map((item: {
            id: { videoId: string }
            snippet: {
              title: string
              channelTitle: string
              publishedAt: string
              thumbnails: { medium: { url: string } }
            }
          }) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            channel: item.snippet.channelTitle,
            thumbnailUrl: item.snippet.thumbnails.medium.url,
            views: '', 
            publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString(),
          }))
          setVideos(formattedVideos)
          setSearchState('results')
        } else {
          setVideos([])
          setSearchState('empty')
        }
      } else {
        // demo videos
        const demoVideos = generateDemoVideos(query)
        setVideos(demoVideos)
        setSearchState('results')
      }
    } catch (error) {
      // Fallback to demo results on error
      console.error('YouTube API error:', error)
      const demoVideos = generateDemoVideos(query)
      setVideos(demoVideos)
      setSearchState('results')
    }
  }

  const handleSearch = () => {
    performSearch(searchQuery)
  }

  const handleTopicClick = (topic: string) => {
    setSearchQuery(topic)
    performSearch(topic)
  }

  const handleVideoClick = (videoId: string) => {
    if (API_KEY) {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
    } else {
      alert('This would open the video')
    }
  }

  return (
    <main className="min-h-screen bg-dark">
      <div className="max-w-[1400px] mx-auto px-[5%] py-8">
        <YouTubeHeader />
        
        <SearchSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
        />
        
        <PopularTopics onTopicClick={handleTopicClick} />
        
        <div ref={resultsRef}>
          {searchState === 'idle' && <EmptyState />}
          
          {searchState === 'loading' && <LoadingState query={currentQuery} />}
          
          {searchState === 'results' && (
            <VideoResults
              videos={videos}
              query={currentQuery}
              onVideoClick={handleVideoClick}
            />
          )}
          
          {searchState === 'empty' && <EmptyState hasSearched />}
        </div>
      </div>
    </main>
  )
}
