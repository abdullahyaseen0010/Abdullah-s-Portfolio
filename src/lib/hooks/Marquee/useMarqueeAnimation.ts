import { useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'
import { calculateMarqueePosition, calculateVelocity } from '../../utils/Marquee/marqueeUtils'

interface UseMarqueeAnimationProps {
  speed: number
  direction: 'left' | 'right'
  isPaused: boolean
}

export const useMarqueeAnimation = ({ 
  speed, 
  direction, 
  isPaused 
}: UseMarqueeAnimationProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const xPos = useRef(0)

  useAnimationFrame((_, delta) => {
    if (!contentRef.current || isPaused) return

    const velocity = calculateVelocity(speed, direction, delta)
    xPos.current += velocity

    const contentWidth = contentRef.current.offsetWidth / 2
    xPos.current = calculateMarqueePosition(xPos.current, contentWidth, direction)

    contentRef.current.style.transform = `translateX(${xPos.current}px)`
  })

  return contentRef
}