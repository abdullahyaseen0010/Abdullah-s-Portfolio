'use client'

import { useState, useEffect } from 'react'
import { getCurrentTheme } from '../../utils/Navbar'

/**
 * Hook to observe theme changes on document element
 * Used by Logo component to update SVG colors
 */
export function useThemeObserver(
  defaultTheme: 'light' | 'dark' | 'ocean' | 'sunset' | 'forest' | 'cyberpunk' = 'dark'
) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    // Get initial theme
    const currentTheme = getCurrentTheme(defaultTheme)
    setTheme(currentTheme)

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = getCurrentTheme(defaultTheme)
          setTheme(newTheme)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [defaultTheme])

  return theme
}