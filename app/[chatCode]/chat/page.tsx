import { ChatTemplate } from "@/src/templates/ChatTemplate"
import type { ChatResponse } from "@/src/types/chat"

async function getChatData(chatCode: string): Promise<ChatResponse> {
  try {
    const res = await fetch(
      `https://stream.scaleup.com.br/player/v1/chats/codes/${chatCode}/histories`,
      { next: { revalidate: 60 } }
    )

    if (!res.ok) {
      throw new Error('Failed to fetch chat data')
    }

    return res.json()
  } catch (error) {
    console.error('Error fetching chat data:', error)
    // Return a minimal valid ChatResponse object
    return {
      chat: {
        code: chatCode,
        name: 'Chat',
        urlThumb: '/placeholder.svg',
        initialMessage: 'Welcome! How can I help you today?',
        biography: '',
      }
    }
  }
}

export default async function ChatPage({
  params,
  searchParams
}: {
  params: { chatCode: string }
  searchParams: { initialMessage?: string }
}) {
  const data = await getChatData(params.chatCode)
  
  return <ChatTemplate 
    chatCode={params.chatCode} 
    chatData={data} 
    initialMessage={searchParams.initialMessage}
  />
}

