import { Variants } from 'framer-motion'

export const serviceHeaderVariants: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
}

export const serviceCardVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
}

export const serviceCTAVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { delay: 0.6 }
  },
}

export const featureItemVariants = {
  initial: { opacity: 0, x: -10 },
  whileInView: { 
    opacity: 1, 
    x: 0,
  },
}