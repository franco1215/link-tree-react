import { ProfileTemplate } from "@/src/templates/ProfileTemplate"
import type { ChatResponse } from "@/src/types/chat"

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

export default async function ProfilePage({
  params
}: {
  params: { chatCode: string }
}) {
  const data = await getChatData(params.chatCode)
  return <ProfileTemplate data={data} />
}

