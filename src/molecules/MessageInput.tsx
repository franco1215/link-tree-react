'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SendIcon } from "../atoms/icons"

interface MessageInputProps {
  placeholder: string
  onSend: (message: string) => void
  disabled?: boolean
  chatCode?: string
  isChat?: boolean
}

export function MessageInput({ placeholder, onSend, disabled = false, chatCode, isChat = false }: MessageInputProps) {
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || disabled) return

    if (isChat) {
      onSend(message)
      setMessage("")
    } else {
      router.push(`/${chatCode}/chat?initialMessage=${encodeURIComponent(message)}`)
    }
  }

  return (
    <div className={`${isChat ? '' : 'fixed bottom-0 left-0 right-0'} bg-white px-4 sm:px-5 pb-4 sm:pb-6`}>
      <div className="w-full max-w-[560px] mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <input 
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className="w-full h-10 sm:h-12 pl-3 sm:pl-4 pr-10 sm:pr-12 text-[13px] sm:text-[14px] text-[#101828] placeholder:text-[#9CA3AF] border border-[#D0D5DD] rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#D0D5DD] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button 
            type="submit"
            disabled={disabled || !message.trim()}
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-colors ${
              disabled || !message.trim()
                ? 'bg-[#4F46E5] cursor-not-allowed opacity-90' 
                : 'bg-[#4F46E5] hover:bg-[#4F46E5]/90'
            }`}
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  )
}

