'use client'

import { useEffect } from 'react'
import GetStartedHeader from './components/GetStartedHeader'
import SignUpCard from './components/SignUpCard'

export default function GetStartedPage() {
  // Add class to body when page mounts to hide main nav/footer
  useEffect(() => {
    document.body.classList.add('get-started-page')

    return () => {
      document.body.classList.remove('get-started-page')
    }
  }, [])

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      {/* Header */}
      <GetStartedHeader />

      {/* Main Container */}
      <div
        className="flex-1 flex items-center justify-center px-4 md:px-[5%] py-8 md:py-12"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(196, 248, 42, 0.08), transparent 60%)',
        }}
      >
        <SignUpCard />
      </div>
    </div>
  )
}
