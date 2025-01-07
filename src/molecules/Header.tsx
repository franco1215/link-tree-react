import { Logo } from "../atoms/Logo"

export function Header() {
  return (
    <header className="flex justify-between items-center pt-4 sm:pt-5 md:pt-6 mb-6 sm:mb-8 md:mb-16 w-full max-w-[560px] mx-auto">
      <Logo />
      <a
        href="https://smartplayer.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 sm:px-4 py-1 sm:py-1.5 text-[13px] sm:text-[15px] text-[#374151] bg-white border border-[#E5E7EB] rounded-md hover:bg-gray-50 transition-colors"
      >
        Login
      </a>
    </header>
  )
}

