import { useState, useEffect } from 'react'

export interface Particle {
  id: number
  size: number
  left: string
  delay: number
  duration: number
  xOffset: number
}

export const useParticles = (count: number = 20) => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const generatedParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
      xOffset: Math.random() * 100 - 50,
    }))
    
    setParticles(generatedParticles)
    setMounted(true)
  }, [count])

  return { particles, mounted }
}