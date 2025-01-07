import { useState } from "react"
import { SendIcon } from "../atoms/icons"

interface ChatInputProps {
  onSend: (message: string) => void
  disabled: boolean
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !disabled) {
      onSend(message)
      setMessage("")
    }
  }

  const isButtonDisabled = disabled || message.trim() === ""

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input 
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        disabled={disabled}
        className="w-[560px] h-12 min-h-[40px] px-4 py-3 text-[14px] text-[#101828] placeholder:text-[#9CA3AF] border border-[#D0D5DD] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#D0D5DD] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button 
        type="submit"
        disabled={isButtonDisabled || disabled}
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors ${
          isButtonDisabled || disabled
            ? 'bg-[#4F46E5] cursor-not-allowed opacity-50' 
            : 'bg-[#4F46E5] hover:bg-[#4338CA]'
        }`}
      >
        <SendIcon />
      </button>
    </form>
  )
}

