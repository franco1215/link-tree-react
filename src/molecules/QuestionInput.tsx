'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SendIcon } from "../atoms/icons"

interface QuestionInputProps {
  placeholder: string
  chatCode: string
}

export function QuestionInput({ placeholder, chatCode }: QuestionInputProps) {
  const [text, setText] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    
    // Navigate to the chat route with the message as a query parameter
    router.push(`/${chatCode}/chat?initialMessage=${encodeURIComponent(text)}`)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white px-5 pb-6">
      <div className="max-w-[480px] mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <input 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            className="w-full h-12 pl-4 pr-12 text-[15px] text-[#101828] placeholder:text-[#9CA3AF] border border-[#E5E7EB] rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#D0D5DD] focus:border-transparent"
          />
          <button 
            type="submit"
            disabled={!text.trim()}
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white cursor-pointer ${
  !text.trim() ? 'bg-[#4F46E5] cursor-not-allowed' : 'bg-[#4F46E5] hover:bg-[#4F46E5]/90'
}`}
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  )
}

