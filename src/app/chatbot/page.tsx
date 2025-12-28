'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { ChatMessage as ChatMessageType, ChatHistorySection, SubscriptionPlan, UserSubscription } from '@/types'
import { CHATBOT_CONFIG, STORAGE_KEYS } from '@/lib/constants'
import CompactHeader from '@/components/shared/CompactHeader'
import ChatSidebar from './components/ChatSidebar'
import ChatMessage from './components/ChatMessage'
import TypingIndicator from './components/TypingIndicator'
import ChatInput from './components/ChatInput'
import SubscriptionModal from './components/SubscriptionModal'

// Helper to generate unique IDs
const generateId = () => Math.random().toString(36).substr(2, 9)

// Helper to get time string
const getTimeString = (date: Date) => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

// Demo chat history for demonstration
const generateDemoChatHistory = (): ChatHistorySection[] => {
  const now = new Date()
  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)

  return [
    {
      label: 'Today',
      items: [
        { id: 'chat-1', title: 'Help with calculus', time: '14:20', date: now },
      ],
    },
    {
      label: 'Yesterday',
      items: [
        { id: 'chat-2', title: 'Physics homework', time: '16:45', date: yesterday },
        { id: 'chat-3', title: 'Essay brainstorming', time: '10:30', date: yesterday },
      ],
    },
    {
      label: 'Last 7 Days',
      items: [
        { id: 'chat-4', title: 'Chemistry concepts', time: 'Mon', date: new Date() },
        { id: 'chat-5', title: 'Programming help', time: 'Sun', date: new Date() },
      ],
    },
  ]
}

export default function ChatbotPage() {
  // State
  const [messages, setMessages] = useState<ChatMessageType[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeChatId, setActiveChatId] = useState<string | null>('chat-1')
  const [chatHistory, setChatHistory] = useState<ChatHistorySection[]>([])
  const [subscription, setSubscription] = useState<UserSubscription>({ isActive: false })
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const [hasCheckedSubscription, setHasCheckedSubscription] = useState(false)
  const [isLight, setIsLight] = useState(false)

  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Detect theme from body class
  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.body.classList.contains('light-theme'))
    }
    
    checkTheme()
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme()
        }
      })
    })
    
    observer.observe(document.body, { attributes: true })
    
    return () => observer.disconnect()
  }, [])

  // Load subscription and chat history from localStorage
  useEffect(() => {
    // Load subscription status
    const savedSubscription = localStorage.getItem(STORAGE_KEYS.SUBSCRIPTION)
    if (savedSubscription) {
      try {
        const parsed = JSON.parse(savedSubscription)
        // Check if subscription is still active
        if (parsed.expiresAt && new Date(parsed.expiresAt) > new Date()) {
          setSubscription({ ...parsed, isActive: true })
        } else {
          setSubscription({ isActive: false })
          // If not subscribed, show modal immediately
          setShowSubscriptionModal(true)
        }
      } catch {
        setSubscription({ isActive: false })
        setShowSubscriptionModal(true)
      }
    } else {
      // No subscription found, show modal
      setShowSubscriptionModal(true)
    }
    setHasCheckedSubscription(true)

    // Load chat history
    const savedHistory = localStorage.getItem(STORAGE_KEYS.CHAT_HISTORY)
    if (savedHistory) {
      try {
        setChatHistory(JSON.parse(savedHistory))
      } catch {
        setChatHistory(generateDemoChatHistory())
      }
    } else {
      setChatHistory(generateDemoChatHistory())
    }

    // Initialize with welcome message
    const welcomeMessage: ChatMessageType = {
      id: generateId(),
      role: 'assistant',
      content: CHATBOT_CONFIG.WELCOME_MESSAGE,
      timestamp: new Date(),
    }
    setMessages([welcomeMessage])
  }, [])

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages, isTyping])

  // Handle sending a message
  const handleSendMessage = useCallback((content: string) => {
    // Add user message
    const userMessage: ChatMessageType = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])

    // Show typing indicator
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false)

      const responses = CHATBOT_CONFIG.DEMO_RESPONSES
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const botMessage: ChatMessageType = {
        id: generateId(),
        role: 'assistant',
        content: randomResponse,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])

      // Update chat history with the first message as title
      if (messages.length === 1) {
        // This is the first user message in this chat
        const newHistoryItem = {
          id: activeChatId || generateId(),
          title: content.slice(0, 30) + (content.length > 30 ? '...' : ''),
          time: getTimeString(new Date()),
          date: new Date(),
        }

        setChatHistory((prev) => {
          const updated = [...prev]
          if (updated[0]?.label === 'Today') {
            // Check if this chat already exists
            const existingIndex = updated[0].items.findIndex(
              (item) => item.id === activeChatId
            )
            if (existingIndex >= 0) {
              updated[0].items[existingIndex] = newHistoryItem
            } else {
              updated[0].items.unshift(newHistoryItem)
            }
          } else {
            updated.unshift({
              label: 'Today',
              items: [newHistoryItem],
            })
          }
          localStorage.setItem(STORAGE_KEYS.CHAT_HISTORY, JSON.stringify(updated))
          return updated
        })
      }
    }, 1500 + Math.random() * 1000)
  }, [messages.length, activeChatId])

  // Handle new chat
  const handleNewChat = () => {
    const newChatId = generateId()
    setActiveChatId(newChatId)
    setMessages([
      {
        id: generateId(),
        role: 'assistant',
        content: CHATBOT_CONFIG.WELCOME_MESSAGE,
        timestamp: new Date(),
      },
    ])
    setSidebarOpen(false)
  }

  // Handle selecting a chat from history
  const handleSelectChat = (chatId: string) => {
    setActiveChatId(chatId)
    // In a real app, you'd load the messages for this chat
    // For now, just show a new welcome message
    setMessages([
      {
        id: generateId(),
        role: 'assistant',
        content: CHATBOT_CONFIG.WELCOME_MESSAGE,
        timestamp: new Date(),
      },
    ])
    setSidebarOpen(false)
  }

  // Handle subscription success
  const handleSubscriptionSuccess = (plan: SubscriptionPlan) => {
    const expiresAt = new Date()
    if (plan.id === 'daily') {
      expiresAt.setDate(expiresAt.getDate() + 1)
    } else {
      expiresAt.setDate(expiresAt.getDate() + 30)
    }

    const newSubscription: UserSubscription = {
      isActive: true,
      plan,
      expiresAt,
    }

    setSubscription(newSubscription)
    localStorage.setItem(STORAGE_KEYS.SUBSCRIPTION, JSON.stringify(newSubscription))
    setShowSubscriptionModal(false)
  }

  // Theme-aware styles
  const getPageStyle = (): React.CSSProperties => ({
    backgroundColor: isLight ? '#F9FAFB' : '#0A0A0A',
  })

  const getMainAreaStyle = (): React.CSSProperties => ({
    backgroundColor: isLight ? '#FFFFFF' : '#0A0A0A',
  })

  const getChatContainerStyle = (): React.CSSProperties => ({
    backgroundColor: isLight ? '#FFFFFF' : '#0A0A0A',
    scrollbarWidth: 'thin',
    scrollbarColor: isLight ? '#D1D5DB transparent' : '#2A2A2A transparent',
  })

  const getLoadingSpinnerStyle = (): React.CSSProperties => ({
    borderColor: isLight ? 'rgba(16, 216, 69, 0.2)' : 'rgba(16, 216, 69, 0.2)',
    borderTopColor: '#10D845',
  })

  // Don't render until we've checked subscription status
  if (!hasCheckedSubscription) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={getPageStyle()}
      >
        <div 
          className="w-12 h-12 border-4 rounded-full animate-spin"
          style={getLoadingSpinnerStyle()}
        />
      </div>
    )
  }

  return (
    <div 
      className="h-screen flex flex-col overflow-hidden"
      style={getPageStyle()}
    >
      {/* Navigation Header */}
      <CompactHeader />

      {/* Main Container - Full height minus nav */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Sidebar */}
        <ChatSidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          chatHistory={chatHistory}
          activeChatId={activeChatId}
          onSelectChat={handleSelectChat}
          onNewChat={handleNewChat}
        />

        {/* Chat Area */}
        <main 
          className="flex-1 flex flex-col min-w-0 overflow-hidden"
          style={getMainAreaStyle()}
        >
          {/* Messages Container */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 md:p-8"
            style={getChatContainerStyle()}
          >
            <div className="flex flex-col">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              <TypingIndicator isVisible={isTyping} />
            </div>
          </div>

          {/* Input Area */}
          <ChatInput
            onSend={handleSendMessage}
            disabled={isTyping}
            placeholder="Ask me anything..."
          />
        </main>
      </div>

      {/* Subscription Modal */}
      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
        onPaymentSuccess={handleSubscriptionSuccess}
      />
    </div>
  )
}