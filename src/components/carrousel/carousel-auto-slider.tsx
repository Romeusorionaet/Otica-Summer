'use client'

import { useKeenSliderMode } from '@/hooks/use-keen-slider-mode'
import Image from 'next/image'

export function CarouselAutoSlider() {
  const { autoSliderRef } = useKeenSliderMode()

  const imgList = [
    {
      id: 'de3245',
      src: '/img/glasses/glasses-1.png',
    },
    {
      id: '54d68r',
      src: '/img/glasses/glasses-2.png',
    },
  ]

  return (
    <div
      ref={autoSliderRef}
      className="relative mx-auto flex h-1/2 w-60 overflow-hidden rounded-b-lg bg-clRef_1"
    >
      {imgList.map((item) => {
        return (
          <Image
            key={item.id}
            width={300}
            height={300}
            src={item.src}
            alt=""
            className="keen-slider__slide h-full w-full rounded-lg"
          />
        )
      })}
    </div>
  )
}
