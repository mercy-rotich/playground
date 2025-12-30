'use client'

import { useEffect } from 'react'
import '@/features/chatbot/chatbot.css'

export default function ChatbotLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Add chatbot-page class to body when this layout is mounted
  useEffect(() => {
    document.body.classList.add('chatbot-page')
    
   
    return () => {
      document.body.classList.remove('chatbot-page')
    }
  }, [])

  return <>{children}</>
}
