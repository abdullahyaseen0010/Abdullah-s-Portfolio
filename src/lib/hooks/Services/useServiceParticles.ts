import { useState, useEffect } from 'react'
import { ServiceParticle } from '../../../appData/Services/service'
import { servicesConfig } from '../../../appData/Services/servicesConfig'

export const useServiceParticles = () => {
  const [particles, setParticles] = useState<ServiceParticle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const { count, sizeRange, durationRange, offsetRange } = servicesConfig.particle

    const generatedParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: durationRange.min + Math.random() * (durationRange.max - durationRange.min),
      xOffset: Math.random() * (offsetRange.max - offsetRange.min) + offsetRange.min,
      yOffset: Math.random() * (offsetRange.max - offsetRange.min) + offsetRange.min,
    }))
    
    setParticles(generatedParticles)
    setMounted(true)
  }, [])

  return { particles, mounted }
}