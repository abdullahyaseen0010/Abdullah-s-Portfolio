import { Variants } from 'framer-motion'

export const projectContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const projectCardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
}

export const headerVariants: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
}

export const techBadgeVariants = {
  initial: (index: number) => ({ opacity: 0, scale: 0.8 }),
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: index * 0.05 },
  }),
}