'use client'

import { useKeenSliderMode } from '@/hooks/use-keen-slider-mode'
import Image from 'next/image'
import { Arrow } from './arros-carousel'

export function CarrouselGlasses() {
  const { sliderRef, currentSlide, instanceRef } = useKeenSliderMode()

  return (
    <section className="relative w-[400px] lg:w-[1000px]">
      <div ref={sliderRef} className="keen-slider">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="keen-slider__slide relative flex p-10 lg:p-16"
          >
            <div className="absolute left-10 h-[14rem] w-[200px] rotate-12 rounded-lg bg-cyan-100 lg:left-16 lg:w-[280px]" />
            <div className="z-10 h-[14rem] w-full rounded-lg bg-cyan-50 shadow-2xl">
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
          <div className="absolute left-8 top-0 flex h-[20rem] w-full items-center justify-between">
            <div className="z-10 flex h-full w-20 items-center">
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
            </div>
            <div className="z-10 flex h-full w-20 items-center">
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
