'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowArcLeft } from 'phosphor-react'

export function HeaderCatalog() {
  return (
    <div className="fixed z-20 w-full bg-clRef_2">
      <header className="top-0 mx-auto flex w-full max-w-[1680px] items-end justify-center gap-20 p-8">
        <Link
          href="/"
          className="flex items-center gap-4 font-bold duration-700 hover:scale-105"
        >
          <ArrowArcLeft /> Voltar
        </Link>

        <div className="h-32 w-full md:w-44">
          <Image
            width={300}
            height={300}
            src="/img/logo.png"
            alt=""
            className="h-full w-full rounded-lg"
          />
        </div>
      </header>
    </div>
  )
}
