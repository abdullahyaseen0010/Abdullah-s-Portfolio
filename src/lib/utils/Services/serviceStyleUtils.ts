export const getServiceCardStyles = (isHovered: boolean, color?: string) => {
  return {
    borderColor: isHovered ? color : undefined,
  }
}

export const getIconBoxShadow = (isHovered: boolean, color: string) => {
  return isHovered ? `0 10px 40px ${color}40` : 'none'
}

export const getIconAnimationConfig = (isHovered: boolean) => {
  return {
    rotate: isHovered ? [0, 5, -5, 0] : 0,
    scale: isHovered ? 1.1 : 1,
  }
}

export const getGlowAnimationConfig = (isHovered: boolean) => {
  return {
    opacity: isHovered ? 0.2 : 0.1,
    scale: isHovered ? [1, 1.3, 1] : 1,
  }
}

export const getCornerDecorationConfig = (isHovered: boolean) => {
  return {
    opacity: isHovered ? 1 : 0,
    scale: isHovered ? 1 : 0.8,
  }
}