interface AvatarProps {
  src: string
  alt: string
}

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden bg-[#F3F4F6]">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

