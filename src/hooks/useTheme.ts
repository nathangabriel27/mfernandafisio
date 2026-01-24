import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type InitialTheme = {
  theme: Theme
  isSystem: boolean
}

const getInitialTheme = (): InitialTheme => {
  if (typeof window === 'undefined') {
    return { theme: 'light', isSystem: true }
  }

  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') {
    return { theme: stored, isSystem: false }
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return { theme: prefersDark ? 'dark' : 'light', isSystem: true }
}

export const useTheme = () => {
  const initial = getInitialTheme()
  const [theme, setTheme] = useState<Theme>(initial.theme)
  const [isSystem, setIsSystem] = useState(initial.isSystem)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme

    if (isSystem) {
      window.localStorage.removeItem('theme')
      return
    }

    window.localStorage.setItem('theme', theme)
  }, [isSystem, theme])

  useEffect(() => {
    if (!isSystem || typeof window === 'undefined') return

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'dark' : 'light')
    }

    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [isSystem])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
    setIsSystem(false)
  }, [])

  return {
    theme,
    isDark: theme === 'dark',
    isSystem,
    toggleTheme,
  }
}
