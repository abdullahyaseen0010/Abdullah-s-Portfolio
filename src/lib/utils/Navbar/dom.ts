
/**
 * Lock body scroll (useful for modals/mobile menus)
 */
export function lockScroll(): void {
  if (typeof document === 'undefined') return
  document.body.style.overflow = 'hidden'
}

/**
 * Unlock body scroll
 */
export function unlockScroll(): void {
  if (typeof document === 'undefined') return
  document.body.style.overflow = ''
}

/**
 * Get element by ID safely
 */
export function getElement(id: string): HTMLElement | null {
  if (typeof document === 'undefined') return null
  return document.getElementById(id)
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  if (typeof window === 'undefined') return false
  
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  )
}
