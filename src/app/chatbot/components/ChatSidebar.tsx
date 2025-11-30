'use client'

import { Plus, X, Menu, MessageCircle } from 'lucide-react'
import { ChatHistorySection } from '@/types'

interface ChatSidebarProps {
  isOpen: boolean
  onToggle: () => void
  chatHistory: ChatHistorySection[]
  activeChatId: string | null
  onSelectChat: (chatId: string) => void
  onNewChat: () => void
}

export default function ChatSidebar({
  isOpen,
  onToggle,
  chatHistory,
  activeChatId,
  onSelectChat,
  onNewChat,
}: ChatSidebarProps) {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-[72px] left-4 z-[60] p-2 bg-dark-card rounded-lg border border-dark-lighter"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative top-[65px] lg:top-0 left-0 h-[calc(100vh-65px)] lg:h-full w-[280px] bg-[#0F0F0F] border-r border-dark-lighter flex flex-col z-50 lg:z-auto transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* New Chat Button */}
        <div className="p-6 border-b border-dark-lighter">
          <button
            onClick={onNewChat}
            className="w-full flex items-center justify-center gap-2 bg-primary text-dark py-3.5 px-4 rounded-xl font-semibold text-base hover:bg-primary-dark transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>New Chat</span>
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-dark-lighter">
          {chatHistory.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              <div className="text-text-gray text-xs font-semibold uppercase tracking-wider mb-2 px-3">
                {section.label}
              </div>
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelectChat(item.id)}
                  className={`w-full flex items-center gap-3 py-3 px-4 rounded-lg mb-1 transition-all text-left ${
                    activeChatId === item.id
                      ? 'bg-dark-card border-l-[3px] border-primary'
                      : 'hover:bg-dark-card'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-text-gray flex-shrink-0" />
                  <span className="flex-1 text-[15px] text-white truncate">
                    {item.title}
                  </span>
                  <span className="text-xs text-text-gray flex-shrink-0">
                    {item.time}
                  </span>
                </button>
              ))}
            </div>
          ))}

          {chatHistory.length === 0 && (
            <div className="text-center text-text-gray py-8">
              <MessageCircle className="w-10 h-10 mx-auto mb-3 opacity-50" />
              <p className="text-sm">No chat history yet</p>
              <p className="text-xs mt-1">Start a new conversation!</p>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
