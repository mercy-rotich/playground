'use client'

import { useEffect } from 'react'

export default function MarkingSchemesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    document.body.classList.add('marking-schemes-page')
    
    return () => {
      document.body.classList.remove('marking-schemes-page')
    }
  }, [])

  return <>{children}</>
}
