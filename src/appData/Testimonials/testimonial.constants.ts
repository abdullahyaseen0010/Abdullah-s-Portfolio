export const TESTIMONIAL_DEFAULTS = {
  MARQUEE_SPEED: 30,
  PAUSE_ON_HOVER: true,
  CARD_WIDTH_MOBILE: 350,
  CARD_WIDTH_DESKTOP: 400,
  STAR_COLOR: '#FFC107',
} as const;

export const ANIMATION_VARIANTS = {
  header: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  badge: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { duration: 0.5, delay: 0.2 }
  },
  stats: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  },
  statCard: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true }
  }
} as const;
