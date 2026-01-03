import { ThemeKey } from '../../../appData/Navbar/navbar.data'

/**
 * Get theme from localStorage with fallback
 */
export function getStoredTheme(fallback: ThemeKey = 'dark'): ThemeKey {
  if (typeof window === 'undefined') return fallback
  
  try {
    const stored = localStorage.getItem('theme')
    return (stored as ThemeKey) || fallback
  } catch {
    return fallback
  }
}

/**
 * Save theme to localStorage
 */
export function saveTheme(theme: string): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem('theme', theme)
  } catch (error) {
    console.error('Failed to save theme:', error)
  }
}

/**
 * Apply theme to document
 */
export function applyTheme(theme: string): void {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', theme)
}

/**
 * Get current theme from document
 */
export function getCurrentTheme(fallback: ThemeKey = 'dark'): ThemeKey {
  if (typeof document === 'undefined') return fallback
  return (document.documentElement.getAttribute('data-theme') as ThemeKey) || fallback
}

/**
 * Initialize theme on app load
 */
export function initializeTheme(defaultTheme: ThemeKey = 'dark'): ThemeKey {
  const savedTheme = getStoredTheme(defaultTheme)
  applyTheme(savedTheme)
  return savedTheme
}