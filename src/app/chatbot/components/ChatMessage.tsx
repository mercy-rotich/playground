'use client'

import { Copy, Bot, User } from 'lucide-react'
import { ChatMessage as ChatMessageType } from '@/types'

interface ChatMessageProps {
  message: ChatMessageType
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === 'assistant'

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content)
  }

  return (
    <div
      className={`flex gap-4 mb-8 animate-slideIn ${
        isBot ? 'justify-start' : 'justify-end'
      }`}
    >
      {/* Bot Avatar - Only show for bot messages */}
      {isBot && (
        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-primary text-dark">
          <Bot className="w-5 h-5" />
        </div>
      )}

      {/* Message Content */}
      <div
        className={`max-w-[600px] p-4 px-5 ${
          isBot
            ? 'bg-[#2A2A2A] rounded-[4px_18px_18px_18px]'
            : 'bg-[#3A4A3A] rounded-[18px_18px_4px_18px]'
        }`}
      >
        <div className="text-white text-[15px] leading-[1.6] whitespace-pre-wrap">
          {message.content}
        </div>
        <div className="flex items-center gap-2 mt-2 text-xs text-text-gray">
          <span>{formatTime(message.timestamp)}</span>
          {isBot && (
            <button
              onClick={copyToClipboard}
              className="hover:text-white transition-colors p-0.5"
              title="Copy message"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* User Avatar - Only show for user messages */}
      {!isBot && (
        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-gray-500 to-gray-600 text-white">
          <User className="w-5 h-5" />
        </div>
      )}
    </div>
  )
}
