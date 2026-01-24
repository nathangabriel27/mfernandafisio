import { useEffect, useRef, useState } from 'react'
import type { SectionId } from '../types/site'

export const useActiveSection = (sectionIds: SectionId[]) => {
  const [activeId, setActiveId] = useState<SectionId>(sectionIds[0])
  const ratiosRef = useRef(new Map<SectionId, number>())

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (!elements.length || !('IntersectionObserver' in window)) return

    const headerValue = getComputedStyle(document.documentElement)
      .getPropertyValue('--header-h')
      .trim()
    const headerHeight = Number.parseFloat(headerValue) || 88
    const thresholds = [0.15, 0.35, 0.55]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as SectionId
          ratiosRef.current.set(
            id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          )
        })

        const scrollTop =
          document.scrollingElement?.scrollTop ?? window.scrollY

        if (scrollTop < 10) {
          setActiveId((current) =>
            current === sectionIds[0] ? current : sectionIds[0]
          )
          return
        }

        let bestId = sectionIds[0]
        let bestRatio = -1

        sectionIds.forEach((id) => {
          const ratio = ratiosRef.current.get(id) ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        if (bestRatio <= 0) return

        setActiveId((current) => (current === bestId ? current : bestId))
      },
      { rootMargin: `-${headerHeight}px 0px -55% 0px`, threshold: thresholds }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
