'use client'

import { useEffect } from 'react'
import './past-papers.css'

export default function PastPapersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  useEffect(() => {
    document.body.classList.add('past-papers-page')
    
    return () => {
      document.body.classList.remove('past-papers-page')
    }
  }, [])

  return <>{children}</>
}
