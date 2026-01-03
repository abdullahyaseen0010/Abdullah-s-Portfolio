import { useState } from 'react'

export const useProjectHover = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handleHoverStart = (id: number) => setHoveredId(id)
  const handleHoverEnd = () => setHoveredId(null)

  return {
    hoveredId,
    handleHoverStart,
    handleHoverEnd,
    isHovered: (id: number) => hoveredId === id,
  }
}