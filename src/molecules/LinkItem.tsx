import { ChevronRightIcon } from "../atoms/icons"

interface LinkItemProps {
  icon: React.ReactNode
  text: string
  href: string
}

export function LinkItem({ icon, text, href }: LinkItemProps) {
  return (
    <a 
      href={href}
      className="flex items-center w-full px-3 sm:px-4 h-12 sm:h-14 hover:bg-gray-50 transition-colors"
    >
      <div className="text-[#4B5563] mr-2 sm:mr-3">{icon}</div>
      <span className="text-[14px] sm:text-[15px] text-[#111827] font-medium">{text}</span>
      <div className="text-[#9CA3AF] ml-auto">
        <ChevronRightIcon />
      </div>
    </a>
  )
}

