'use client'

import { useState, useEffect } from 'react'
import { isMobile, isTablet, isDesktop } from '../../utils/Navbar'

/**
 * Hook to detect device type
 */
export function useMediaQuery() {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    const checkDevice = () => {
      if (isMobile()) {
        setDeviceType('mobile')
      } else if (isTablet()) {
        setDeviceType('tablet')
      } else {
        setDeviceType('desktop')
      }
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return {
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
  }
}