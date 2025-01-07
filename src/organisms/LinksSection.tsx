import { GlobeIcon, EmailIcon, WhatsAppIcon, InstagramIcon } from "../atoms/icons"
import { LinkItem } from "../molecules/LinkItem"

interface LinksSectionProps {
  website?: string
  email?: string
  phoneNumber?: string
  instagram?: string
}

export function LinksSection({ website, email, phoneNumber, instagram }: LinksSectionProps) {
  const hasLinks = website || email || phoneNumber || instagram

  if (!hasLinks) return null

  return (
    <div className="w-full max-w-[560px] mx-auto rounded-lg sm:rounded-xl overflow-hidden border border-[#E5E7EB] divide-y divide-[#E5E7EB]">
      {website && (
        <LinkItem 
          icon={<GlobeIcon />}
          text="UI Academy"
          href={website}
        />
      )}
      {email && (
        <LinkItem 
          icon={<EmailIcon />}
          text="E-mail"
          href={`mailto:${email}`}
        />
      )}
      {phoneNumber && (
        <LinkItem 
          icon={<WhatsAppIcon />}
          text="WhatsApp"
          href={`https://wa.me/${phoneNumber}`}
        />
      )}
      {instagram && (
        <LinkItem 
          icon={<InstagramIcon />}
          text="Instagram"
          href={`https://www.instagram.com/${instagram}`}
        />
      )}
    </div>
  )
}

