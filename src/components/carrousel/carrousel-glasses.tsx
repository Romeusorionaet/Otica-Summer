'use client'

import { useKeenSliderMode } from '@/hooks/use-keen-slider-mode'
import Image from 'next/image'
import { Arrow } from './arrows-carousel'
import Link from 'next/link'

export function CarrouselGlasses() {
  const { sliderRef, currentSlide, instanceRef } = useKeenSliderMode()

  return (
    <section className="relative mx-auto w-[400px] max-md:pl-8 lg:w-[1000px]">
      <div className="flex items-end justify-end max-md:pr-20">
        <Link href="/" className="underline">
          Ver todos
        </Link>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="keen-slider__slide relative flex p-10 lg:p-16"
          >
            <div className="absolute left-10 h-[14rem] w-[200px] rotate-12 rounded-lg bg-clRef_1 lg:left-16 lg:w-[280px]" />
            <div className="z-10 h-[14rem] w-full rounded-lg bg-clRef_2 shadow-2xl">
              <Image
                width={300}
                height={300}
                src="/img/glasses/glasses-1.png"
                alt=""
                className="h-full w-full rounded-lg"
              />
            </div>
          </div>
        ))}

        {instanceRef.current && (
          <div className="absolute right-8 top-0 flex h-full w-full items-center justify-end md:left-0 md:justify-between">
            <div className="z-10 flex h-full w-20 items-end md:items-center">
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
            </div>
            <div className="z-10 flex h-full w-20 items-end md:items-center">
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
