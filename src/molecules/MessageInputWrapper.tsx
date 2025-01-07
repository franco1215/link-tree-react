'use client'

import { MessageInput } from "./MessageInput"

interface MessageInputWrapperProps {
  placeholder: string
  chatCode: string
}

export function MessageInputWrapper({ placeholder, chatCode }: MessageInputWrapperProps) {
  return (
    <MessageInput 
      placeholder={placeholder}
      onSend={() => {}}
      chatCode={chatCode}
    />
  )
}

