export const getTechDisplay = (tech: string[], maxDisplay: number = 3) => {
  const displayTech = tech.slice(0, maxDisplay)
  const remainingCount = tech.length > maxDisplay ? tech.length - maxDisplay : 0

  return {
    displayTech,
    remainingCount,
    hasMore: remainingCount > 0,
  }
}