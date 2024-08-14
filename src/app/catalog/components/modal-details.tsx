import { X } from 'phosphor-react'
import Image from 'next/image'
import { useState } from 'react'
import { GlassesProps } from './main'

interface Props {
  showDetails: boolean
  setShowDetails: (value: boolean) => void
  selectedGlasses: GlassesProps
}

export function ModalDetails({
  showDetails,
  setShowDetails,
  selectedGlasses,
}: Props) {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [isZoomVisible, setIsZoomVisible] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget
    const { left, top, width, height } = target.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setZoomPosition({ x, y })
  }

  return (
    <section
      data-value={showDetails}
      className="fixed left-1/2 top-1/2 z-20 hidden w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-clRef_2 p-2 data-[value=true]:block md:w-[600px]"
    >
      <button
        autoFocus
        onClick={() => setShowDetails(false)}
        className="absolute right-2 top-2 z-10 md:right-4 md:top-4"
      >
        <X size={28} />
      </button>

      <article className="relative flex w-full items-center justify-center gap-2">
        <div
          className="relative h-full w-1/2"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsZoomVisible(true)}
          onMouseLeave={() => setIsZoomVisible(false)}
        >
          <Image
            width={300}
            height={300}
            src={selectedGlasses.img}
            alt={selectedGlasses.description}
            className="h-full w-full rounded-lg"
          />
          {isZoomVisible && (
            <div
              className="absolute -top-[410px] left-44 z-10 h-64 w-64 rounded-lg border border-gray-400 bg-cover bg-no-repeat md:-top-36 md:left-[450px]"
              style={{
                backgroundImage: `url(${selectedGlasses.img})`,
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundSize: '200%',
                transform: `translate(-50%, 60%)`,
              }}
            />
          )}
        </div>

        <div className="w-1/2 space-y-4">
          <h3 className="font-bold">{selectedGlasses.type}</h3>

          <p className="text-sm md:text-base">{selectedGlasses.description}</p>

          <footer className="mt-4 flex justify-around">
            <span className="text-green-500">{selectedGlasses.price} R$</span>
          </footer>
        </div>
      </article>
    </section>
  )
}
