import { Header } from "../molecules/Header"
import { ProfileInfo } from "../molecules/ProfileInfo"
import { LinksSection } from "../organisms/LinksSection"
import { MessageInputWrapper } from "../molecules/MessageInputWrapper"
import type { ChatResponse } from "../types/chat"

interface ProfileTemplateProps {
  data: ChatResponse
}

export function ProfileTemplate({ data }: ProfileTemplateProps) {
  const { chat } = data

  return (
    <div className="space-y-6 sm:space-y-8 pb-16 sm:pb-20 md:pb-24">
      <Header />
      <ProfileInfo 
        name={chat.name}
        biography={chat.biography}
        imageUrl={chat.urlThumb}
      />
      <LinksSection 
        website={chat.website}
        email={chat.email}
        phoneNumber={chat.phoneNumber}
        instagram={chat.instagram}
      />
      <MessageInputWrapper 
        placeholder={chat.initialMessage}
        chatCode={chat.code}
      />
    </div>
  )
}

