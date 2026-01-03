import { LucideIcon } from 'lucide-react'

export interface Service {
  id: number
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
  gradient: string
}

export interface ServiceParticle {
  id: number
  size: number
  left: string
  top: string
  delay: number
  duration: number
  xOffset: number
  yOffset: number
}