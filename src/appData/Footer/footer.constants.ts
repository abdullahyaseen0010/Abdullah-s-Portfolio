export const FOOTER_ANIMATION_VARIANTS = {
  container: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  },
  staggered: (delay: number) => ({
    initial: { opacity: 0, x: -10 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { delay }
  }),
  hover: {
    x: 4
  },
  rotate: {
    whileHover: { rotate: 360 },
    transition: { duration: 0.6 }
  }
} as const;

export const FOOTER_STYLES = {
  backgroundColor: 'var(--color-secondary)',
  neutralColor: 'var(--color-neutral)',
  tertiaryColor: 'var(--color-tertiary-content)',
  gradientStart: 'var(--gradient-start)',
  gradientEnd: 'var(--gradient-end)'
} as const;

export const SOCIAL_ICONS = {
  LinkedIn: 'linkedin',
  Email: 'mail'
} as const;