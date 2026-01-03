export const calculateMarqueePosition = (
  currentPos: number,
  contentWidth: number,
  direction: 'left' | 'right'
) => {
  if (direction === 'left' && currentPos <= -contentWidth) {
    return 0
  } else if (direction === 'right' && currentPos >= 0) {
    return -contentWidth
  }
  return currentPos
}

export const calculateVelocity = (
  speed: number,
  direction: 'left' | 'right',
  delta: number
) => {
  const velocity = direction === 'left' ? -speed : speed
  return (velocity * delta) / 1000
}