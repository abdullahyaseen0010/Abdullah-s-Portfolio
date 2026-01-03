'use client'

import { useEffect } from 'react'
import { lockScroll, unlockScroll } from '../../utils/Navbar'

/**
 * Lock/unlock body scroll (useful for mobile menu)
 */
export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      lockScroll()
    } else {
      unlockScroll()
    }

    return () => {
      unlockScroll()
    }
  }, [isLocked])
}
