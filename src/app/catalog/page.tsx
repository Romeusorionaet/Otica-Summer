'use client'

import { HeaderCatalog } from '@/components/header-catalog'
import Image from 'next/image'
import { Pagination } from '@/utils/pagination'
import glasses from '@/lib/glasses.json'
import { ControlButtonsPagination } from '@/components/control-buttons-pagination'

interface GlassesProps {
  id: string
  type: string
  img: string
  price: string
  description: string
}

export default function Catalog() {
  const { next, prev, currentData, currentPage, maxPage } = Pagination(
    glasses || [],
    12,
  )

  return (
    <div>
      <HeaderCatalog />

      <main className="pt-56">
        <section className="mx-auto flex w-full max-w-[1680px] flex-col gap-10 p-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {currentData().map((item: GlassesProps) => {
              return (
                <article key={item.id} className="duration-700 hover:scale-105">
                  <div className="h-32 w-full md:w-44">
                    <Image
                      width={300}
                      height={300}
                      src={item.img}
                      alt={item.description}
                      className="h-full w-full rounded-lg"
                    />
                  </div>

                  <footer className="flex justify-around">
                    <span>200 RS</span>
                    <span>resina</span>
                  </footer>
                </article>
              )
            })}
          </div>

          {maxPage > 0 && (
            <ControlButtonsPagination
              operation={{ prev, next }}
              currentPage={currentPage}
              maxPage={maxPage}
            />
          )}
        </section>
      </main>
    </div>
  )
}
