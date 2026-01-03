'use client'

import { motion } from 'framer-motion'
import { animationVariants } from '../../appData/Navbar/navbar.data'

interface NavbarMenuButtonProps {
  isMenuOpen: boolean
  onClick: () => void
}

const NavbarMenuButton = ({ isMenuOpen, onClick }: NavbarMenuButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative z-50 flex h-6 w-6 flex-col justify-center md:hidden"
      animate={isMenuOpen ? 'open' : 'closed'}
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
    >
      <motion.span
        variants={animationVariants.hamburger.top}
        className="bg-primary-content mb-1.5 h-0.5 w-full origin-center"
      />
      <motion.span
        variants={animationVariants.hamburger.middle}
        className="bg-primary-content mb-1.5 h-0.5 w-full"
      />
      <motion.span
        variants={animationVariants.hamburger.bottom}
        className="bg-primary-content h-0.5 w-full origin-center"
      />
    </motion.button>
  )
}

export default NavbarMenuButton