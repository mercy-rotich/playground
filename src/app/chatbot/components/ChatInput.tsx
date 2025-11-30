'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { Send } from 'lucide-react'

interface ChatInputProps {
  onSend: (message: string) => void
  disabled?: boolean
  placeholder?: string
}

export default function ChatInput({ onSend, disabled = false, placeholder = 'Ask me anything...' }: ChatInputProps) {
  const [message, setMessage] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`
    }
  }, [message])

  const handleSend = () => {
    const trimmedMessage = message.trim()
    if (trimmedMessage && !disabled) {
      onSend(trimmedMessage)
      setMessage('')
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-dark border-t border-[#2A2A2A]">
      <div className="max-w-[900px] mx-auto flex gap-4 items-end">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          className="flex-1 bg-dark-card border-2 border-[#2A2A2A] rounded-3xl px-6 py-4 text-white text-base placeholder:text-text-gray focus:border-primary outline-none resize-none max-h-[150px] min-h-[52px] transition-colors disabled:opacity-50 font-[inherit]"
        />
        <button
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          className="w-[52px] h-[52px] flex items-center justify-center bg-primary text-dark rounded-full hover:bg-primary-dark transition-all disabled:bg-[#2A2A2A] disabled:text-text-gray disabled:cursor-not-allowed flex-shrink-0 hover:scale-105"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
