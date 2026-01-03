export const servicesConfig = {
  grid: {
    cols: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: '1.75rem',
  },
  animation: {
    cardHoverDuration: 0.3,
    cardHoverY: -6,
    iconRotationDuration: 0.6,
    staggerDelay: 0.1,
    viewportOnce: true,
  },
  particle: {
    count: 25,
    sizeRange: { min: 2, max: 7 },
    durationRange: { min: 4, max: 7 },
    offsetRange: { min: -40, max: 40 },
  },
}