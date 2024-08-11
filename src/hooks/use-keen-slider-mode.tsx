'use client'

import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useMemo, useState } from 'react'

export function useKeenSliderMode() {
  const [widthScreen, setWidthScreen] = useState<number>()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setWidthScreen(window.innerWidth) // for an initial value

    window.onresize = () => {
      setWidthScreen(window.innerWidth)
    }
  }, [widthScreen])

  const animation = useMemo(() => {
    return { duration: 300, easing: (t: number) => t }
  }, [])

  const [autoSliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: true,
  })

  const duration = 3000

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider.current) {
        const currentIdx = slider.current.track.details.rel
        slider.current.moveToIdx(currentIdx + 1, true, animation)
      }
    }, duration)

    return () => {
      clearInterval(interval)
    }
  }, [animation, slider])

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: false,
    initial: 0,
    slides: {
      perView: widthScreen && widthScreen <= 1000 ? 1.5 : 2.5,
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return {
    sliderRef,
    currentSlide,
    instanceRef,
    autoSliderRef,
  }
}
