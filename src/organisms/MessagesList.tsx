import { useEffect, useRef } from 'react'
import { LoadingAnimation } from '../components/LoadingAnimation'

interface Message {
  id: string
  content: string
  type: 'user' | 'assistant'
  status: 'sent' | 'pending' | 'error'
}

interface MessagesListProps {
  messages: Message[]
  isLoading: boolean
}

export function MessagesList({ messages, isLoading }: MessagesListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  return (
    <div className="space-y-3 sm:space-y-4 py-3 sm:py-4">
      {messages.map((message) => (
        <div 
          key={message.id}
          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
        >
          <div 
            className={`max-w-[90%] sm:max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-3 ${
              message.type === 'user' 
                ? 'bg-[#E0EAFF] text-[#344054]' 
                : 'bg-[#F2F4F7] text-[#344054]'
            } ${message.status === 'error' ? 'border-2 border-red-500' : ''}`}
          >
            <p className="text-[15px] whitespace-pre-wrap">{message.content}</p>
            {message.status === 'error' && (
              <p className="text-red-500 text-xs mt-1">Ops falhou!. Por favor tente novamente.</p>
            )}
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="flex justify-start mt-2">
          <div className="bg-[#F3F4F6] rounded-2xl p-2 w-24 h-10">
            <LoadingAnimation />
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  )
}

