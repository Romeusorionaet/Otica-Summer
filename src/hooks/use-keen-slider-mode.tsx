'use client'

import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useMemo } from 'react'

export function useKeenSliderMode() {
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

  return {
    autoSliderRef,
  }
}
