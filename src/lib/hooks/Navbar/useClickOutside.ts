'use client'

import { useEffect } from 'react'

export function useClickOutside(
  className: string,
  handler: () => void,
  enabled: boolean = true
) {
  useEffect(() => {
    if (!enabled) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const element = target.closest(`.${className}`)
      
      if (!element) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [className, handler, enabled])
}