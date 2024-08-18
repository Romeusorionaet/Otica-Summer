'use client'

import { ControlButtonsPagination } from '@/components/control-buttons-pagination'
import Image from 'next/image'
import { Pagination } from '@/utils/pagination'
import glasses from '@/lib/glasses.json'
import { useEffect, useState } from 'react'
import { ModalDetails } from './modal-details'
import { FormInputSearch } from '@/components/form-input-search'
import { useRouter, useSearchParams } from 'next/navigation'

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
  const [filteredGlasses, setFilteredGlasses] =
    useState<GlassesProps[]>(glasses)

  const { next, prev, currentData, currentPage, maxPage } = Pagination(
    filteredGlasses,
    11,
  )

  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  const handleShowDetails = (item: GlassesProps) => {
    setSelectedGlasses(item)
    setShowDetails(true)

    router.push(`/catalog?q=${item.id}`)
  }

  useEffect(() => {
    if (query) {
      setShowDetails(true)
      const uniqueGlasses = glasses.find((item) => item.id === query)

      if (uniqueGlasses) {
        setSelectedGlasses(uniqueGlasses)
      }
    }
  }, [query])

  const handleSubmit = async (query: string) => {
    if (query) {
      const filtered = glasses.filter(
        (item) =>
          item.type.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredGlasses(filtered)
    } else {
      setFilteredGlasses(glasses)
    }
  }

  return (
    <main className="pt-56">
      <div className="my-10 px-1">
        <FormInputSearch handleSubmit={handleSubmit} />
      </div>

      <section className="mx-auto flex w-full max-w-[1000px] flex-col gap-10 p-1">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {currentData().map((item: GlassesProps) => (
            <button
              key={item.id}
              onClick={() => handleShowDetails(item)}
              className="w-40 cursor-pointer duration-700 hover:scale-105"
            >
              <div className="h-32 w-full">
                <Image
                  width={500}
                  height={500}
                  src={item.img}
                  alt={item.description}
                  className="h-full w-full rounded-lg"
                />
              </div>

              <div className="flex justify-around">
                <span>{item.type}</span>
              </div>
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
          params={{ q: selectedGlasses.id }}
        />
      )}
    </main>
  )
}
