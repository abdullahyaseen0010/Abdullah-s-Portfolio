'use client'

import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="/#"]')
      
      if (link) {
        e.preventDefault()
        const href = link.getAttribute('href')
        const id = href?.replace('/#', '')
        
        if (id) {
          const element = document.getElementById(id)
          if (element) {
            // Offset for fixed navbar (64px = h-16)
            const offset = 64
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}