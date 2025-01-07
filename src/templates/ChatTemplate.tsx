'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChatHeader } from "../organisms/ChatHeader"
import { MessagesList } from "../organisms/MessagesList"
import { MessageInput } from "../molecules/MessageInput"
import { sendMessage } from "../actions/sendMessage"
import type { ChatResponse } from "../types/chat"

interface Message {
  id: string
  content: string
  type: 'user' | 'assistant'
  status: 'sent' | 'pending' | 'error'
}

interface ChatTemplateProps {
  chatCode: string
  chatData: ChatResponse
  initialMessage?: string
}

export function ChatTemplate({ chatCode, chatData, initialMessage }: ChatTemplateProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    initializeChat()
  }, [])

  const initializeChat = async () => {
    const initialMessages = chatData.history?.content
      ? chatData.history.content.map((msg, index) => ({
          id: `initial-${index}`,
          content: msg.text,
          type: msg.source === 'user' ? 'user' : 'assistant',
          status: 'sent' as const
        }))
      : [{
          id: 'initial',
          content: chatData.chat.initialMessage,
          type: 'assistant' as const,
          status: 'sent' as const
        }]

    setMessages(initialMessages)

    if (initialMessage) {
      try {
        await handleSendMessage(initialMessage)
      } catch (error) {
        console.error('Error sending initial message:', error)
      }
    }
  }

  const handleSendMessage = async (text: string) => {
    if (!text?.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      type: 'user',
      status: 'sent'
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await sendMessage(chatCode, text)
      const responseText = await response.text()
      const lines = responseText.split('\n').filter(line => line.trim())
      
      for (const line of lines) {
        if (line.startsWith('data:')) {
          const jsonData = JSON.parse(line.slice(5))
          
          if (jsonData.answer && jsonData.source === 'assistant') {
            const assistantMessage: Message = {
              id: Date.now().toString(),
              content: jsonData.answer,
              type: 'assistant',
              status: 'sent'
            }
            setMessages(prev => [...prev, assistantMessage])
            break
          }
        }
      }
    } catch (error) {
      console.error('Failed to send message:', error)
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          content: `Error: ${error instanceof Error ? error.message : 'An error occurred'}`,
          type: 'assistant',
          status: 'error'
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <ChatHeader 
        onBack={() => router.back()} 
        name={chatData.chat.name}
        imageUrl={chatData.chat.urlThumb}
      />
      <div className="flex-1 overflow-y-auto px-4 sm:px-5">
        <MessagesList messages={messages} isLoading={isLoading} />
      </div>
      <div className="p-4 sm:p-5">
        <MessageInput 
          placeholder="Type your message..."
          onSend={handleSendMessage}
          disabled={isLoading}
          isChat={true}
        />
      </div>
    </div>
  )
}

