'use client'

export default function YouTubeHeader() {
  return (
    <div className="text-center mb-8">
      <div className="text-6xl mb-3 inline-block animate-pulse">
        ▶️
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
        Study with YouTube
      </h1>
      <p className="text-text-gray text-lg max-w-[700px] mx-auto">
        Discover educational videos and tutorials to complement your studies. Search for any topic and find the best learning content.
      </p>
    </div>
  )
}
