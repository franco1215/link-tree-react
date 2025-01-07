import { ProfileTemplate } from "@/src/templates/ProfileTemplate"
import type { ChatResponse } from "@/src/types/chat"

const DEFAULT_CHAT_CODE = 'b4182bff4b3cf75f9e54f4990f9bd153c0c2973c'

async function getChatData(chatCode: string): Promise<ChatResponse> {
  const res = await fetch(
    `https://stream.scaleup.com.br/player/v1/chats/codes/${chatCode}/histories`,
    { next: { revalidate: 60 } }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch chat data')
  }

  return res.json()
}

export default async function HomePage() {
  const data = await getChatData(DEFAULT_CHAT_CODE)
  return <ProfileTemplate data={data} />
}

