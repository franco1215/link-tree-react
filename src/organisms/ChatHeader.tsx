import { ArrowLeft } from 'lucide-react'

interface ChatHeaderProps {
  onBack: () => void
  name: string
  imageUrl: string
}

export function ChatHeader({ onBack, name, imageUrl }: ChatHeaderProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 p-4 sm:p-5 border-b border-[#E5E7EB]">
      <button onClick={onBack} className="text-[#111827]">
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-[15px] sm:text-[17px] font-semibold text-[#111827]">
          {name}
        </span>
      </div>
    </div>
  )
}

