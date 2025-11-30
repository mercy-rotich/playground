'use client'

import { Bot } from 'lucide-react'

interface TypingIndicatorProps {
  isVisible: boolean
}

export default function TypingIndicator({ isVisible }: TypingIndicatorProps) {
  if (!isVisible) return null

  return (
    <div className="flex gap-4 mb-8 justify-start">
      {/* Bot Avatar */}
      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-primary text-dark">
        <Bot className="w-5 h-5" />
      </div>

      {/* Typing Dots */}
      <div className="bg-[#2A2A2A] rounded-[18px] p-4 px-5 flex items-center gap-2">
        <span className="w-2 h-2 bg-text-gray rounded-full animate-typing" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 bg-text-gray rounded-full animate-typing" style={{ animationDelay: '200ms' }} />
        <span className="w-2 h-2 bg-text-gray rounded-full animate-typing" style={{ animationDelay: '400ms' }} />
      </div>
    </div>
  )
}
