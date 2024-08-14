'use client'

import { ControlButtonsPagination } from '@/components/control-buttons-pagination'
import Image from 'next/image'
import { Pagination } from '@/utils/pagination'
import glasses from '@/lib/glasses.json'
import { useState } from 'react'
import { ModalDetails } from './modal-details'

export interface GlassesProps {
  id: string
  type: string
  img: string
  price: string
  description: string
}

export function Main() {
  const [showDetails, setShowDetails] = useState(false)
  const [selectedGlasses, setSelectedGlasses] = useState<GlassesProps | null>(
    null,
  )

  const { next, prev, currentData, currentPage, maxPage } = Pagination(
    glasses || [],
    11,
  )

  const handleShowDetails = (item: GlassesProps) => {
    setSelectedGlasses(item)
    setShowDetails(true)
  }

  return (
    <main className="pt-56">
      <section className="mx-auto flex w-full max-w-[1000px] flex-col gap-10 p-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {currentData().map((item: GlassesProps) => (
            <button
              key={item.id}
              onClick={() => handleShowDetails(item)}
              className="cursor-pointer duration-700 hover:scale-105"
            >
              <header className="h-32 w-full">
                <Image
                  width={300}
                  height={300}
                  src={item.img}
                  alt={item.description}
                  className="h-full w-full rounded-lg"
                />
              </header>

              <footer className="flex justify-around">
                <span>{item.price} R$</span>
                <span>{item.type}</span>
              </footer>
            </button>
          ))}
        </div>

        {maxPage > 0 && (
          <ControlButtonsPagination
            operation={{ prev, next }}
            currentPage={currentPage}
            maxPage={maxPage}
          />
        )}
      </section>

      <div
        data-value={showDetails}
        className="fixed inset-0 z-10 hidden bg-black/50 backdrop-blur-md data-[value=true]:block"
      />

      {selectedGlasses && showDetails && (
        <ModalDetails
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          selectedGlasses={selectedGlasses}
        />
      )}
    </main>
  )
}
