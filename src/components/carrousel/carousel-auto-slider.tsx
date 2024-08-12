'use client'

import { useKeenSliderMode } from '@/hooks/use-keen-slider-mode'
import Image from 'next/image'

export function CarouselAutoSlider() {
  const { autoSliderRef } = useKeenSliderMode()

  const imgList = [
    {
      id: 'de3245',
      src: '/img/people-models/woman-2.png',
    },
    {
      id: '54d68r',
      src: '/img/people-models/woman-1.png',
    },
  ]

  return (
    <div
      ref={autoSliderRef}
      className="mx-auto flex h-1/2 w-60 overflow-hidden rounded-b-lg bg-clRef_1"
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
