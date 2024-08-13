'use client'

import { InstagramLogo, WhatsappLogo } from 'phosphor-react'

export function SquareWithSocialMedia() {
  return (
    <div>
      <div className="absolute left-28 top-96 flex h-20 w-20 items-center justify-center rounded-md bg-green-500 duration-700 hover:scale-105 max-sm:left-10">
        <WhatsappLogo size={100} color="#ffff" />
      </div>
      <div className="absolute right-20 top-96 flex h-16 w-16 items-center justify-center rounded-md bg-pink-600 duration-700 hover:scale-105">
        <InstagramLogo size={100} color="#ffff" />
      </div>
      <div className="absolute left-0 top-44 h-10 w-10 rounded-md bg-clRef_5" />
      <div className="absolute left-20 top-[30rem] h-10 w-10 rounded-md bg-clRef_5" />
    </div>
  )
}
