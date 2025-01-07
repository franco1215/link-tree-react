interface HistoryMessage {
  text: string
  source: 'user' | 'assistant'
}

export interface ChatResponse {
  chat: {
    code: string
    name: string
    urlThumb: string
    initialMessage: string
    biography: string
    phoneNumber?: string
    website?: string
    email?: string
    instagram?: string
  }
  history?: {
    content: HistoryMessage[]
    pageable: {
      pageNumber: number
      pageSize: number
    }
  }
}

