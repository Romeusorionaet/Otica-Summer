'use client'

import { InstagramLogo, WhatsappLogo } from 'phosphor-react'

export function SocialMidia() {
  return (
    <div className="flex gap-8">
      <InstagramLogo size={32} />
      <WhatsappLogo size={32} />
    </div>
  )
}
