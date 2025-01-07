import { Avatar } from "../atoms/Avatar"

interface ProfileInfoProps {
  name: string
  biography: string
  imageUrl: string
}

export function ProfileInfo({ name, biography, imageUrl }: ProfileInfoProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
      <Avatar src={imageUrl} alt={name} />
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#111827]">{name}</h1>
        <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#4B5563] max-w-[560px] mx-auto">{biography}</p>
      </div>
    </div>
  )
}

