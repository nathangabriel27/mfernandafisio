import { useEffect, useRef } from 'react'
import type { SectionId } from '../types/site'

export const useSnapScroll = (sectionIds: SectionId[]) => {
  const isSnappingRef = useRef(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (!sections.length) return

    const headerValue = getComputedStyle(document.documentElement)
      .getPropertyValue('--header-h')
      .trim()
    const headerHeight = Number.parseFloat(headerValue) || 88

    const getCurrentIndex = () => {
      const position = window.scrollY + headerHeight + 4
      let currentIndex = 0

      sections.forEach((section, index) => {
        if (position >= section.offsetTop) {
          currentIndex = index
        }
      })

      return currentIndex
    }

    const handleWheel = (event: WheelEvent) => {
      if (isSnappingRef.current) return

      if (event.ctrlKey) return

      if (Math.abs(event.deltaY) < 8) return

      event.preventDefault()

      const currentIndex = getCurrentIndex()
      const nextIndex = event.deltaY > 0
        ? Math.min(currentIndex + 1, sections.length - 1)
        : Math.max(currentIndex - 1, 0)

      if (nextIndex === currentIndex) return

      isSnappingRef.current = true
      sections[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' })

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(() => {
        isSnappingRef.current = false
      }, 800)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [sectionIds])
}
