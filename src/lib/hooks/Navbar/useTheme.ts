'use client'

import { useState, useEffect } from 'react'
import { ThemeKey } from '../../../appData/Navbar/navbar.data'
import { getStoredTheme, saveTheme, applyTheme, getCurrentTheme } from '../../utils/Navbar'

export function useTheme(defaultTheme: ThemeKey = 'dark') {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>(defaultTheme)

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = getStoredTheme(defaultTheme)
    applyTheme(savedTheme)
    setCurrentTheme(savedTheme)
  }, [defaultTheme])

  // Watch for theme changes via MutationObserver
  useEffect(() => {
    const theme = getCurrentTheme(defaultTheme)
    setCurrentTheme(theme)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = getCurrentTheme(defaultTheme)
          setCurrentTheme(newTheme)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [defaultTheme])

  const changeTheme = (theme: string) => {
    applyTheme(theme)
    saveTheme(theme)
    setCurrentTheme(theme as ThemeKey)
  }

  return { currentTheme, changeTheme }
}
