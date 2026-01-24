import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

type InViewOptions = {
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
}

type InViewResult<T extends HTMLElement> = {
  ref: RefObject<T | null>
  isInView: boolean
}

export const useInView = <T extends HTMLElement>(
  options: InViewOptions = {}
): InViewResult<T> => {
  const { rootMargin = '0px', threshold = 0.2, once = false } = options
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.disconnect()
          return
        }

        if (!once) {
          setIsInView(false)
        }
      },
      { rootMargin, threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [rootMargin, threshold, once])

  return { ref, isInView }
}
