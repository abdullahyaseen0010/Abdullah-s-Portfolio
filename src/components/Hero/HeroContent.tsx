'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import { 
  Sparkles, 
  Linkedin, 
  Mail
} from 'lucide-react'

interface HeroContentProps {
  currentRole: number
  roles: string[]
  containerVariants: Variants
  itemVariants: Variants
  roleVariants: Variants
  heroData: {
    name: string
    description: string
    badge: { text: string }
    cta: {
      primary: { text: string; href: string }
      linkedin: { text: string; href: string }
    }
  }
}

const HeroContent = ({ 
  currentRole, 
  roles, 
  containerVariants, 
  itemVariants, 
  roleVariants,
  heroData 
}: HeroContentProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="z-10 flex flex-col justify-center space-y-6 lg:space-y-8"
    >
      <motion.div variants={itemVariants} className="space-y-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-accent inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium"
        >
          <Sparkles className="h-4 w-4" />
          {heroData.badge.text}
        </motion.div>

        <h1 className="space-y-2">
          <motion.span
            variants={itemVariants}
            className="text-neutral block text-4xl font-bold lg:text-5xl"
          >
            Hi, I&#39;m{' '}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </motion.span>

          <div className="h-16 lg:h-20">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                variants={roleVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-accent block text-3xl font-bold lg:text-4xl"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </div>
        </h1>
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-tertiary-content text-lg lg:text-xl"
      >
        {heroData.description}
      </motion.h2>

      <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
        <motion.a
          href={heroData.cta.primary.href}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent group inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40"
        >
          <Mail className="h-4 w-4" />
          {heroData.cta.primary.text}
        </motion.a>

        <motion.a
          href={heroData.cta.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-border text-neutral inline-flex items-center gap-2 rounded-lg border bg-secondary/50 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-secondary"
        >
          <Linkedin className="h-4 w-4" />
          {heroData.cta.linkedin.text}
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default HeroContent