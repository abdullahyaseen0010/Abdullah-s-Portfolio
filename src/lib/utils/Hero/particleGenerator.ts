export interface ParticleConfig {
  id: number
  size: number
  left: string
  delay: number
  duration: number
  xOffset: number
}

export const generateParticles = (count: number): ParticleConfig[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2,
    xOffset: Math.random() * 100 - 50,
  }))
}