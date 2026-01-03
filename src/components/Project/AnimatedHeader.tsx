'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { headerVariants } from '../../appData/Project/projectAnimations'

interface AnimatedHeaderProps {
  iconName: string
  label: string
  title: string
  description: string
}

const AnimatedHeader = ({ title, description }: AnimatedHeaderProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      <h2 
        className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end))'
        }}
      >
        {title}
      </h2>
      
      <p 
        className="max-w-2xl mx-auto mb-8" 
        style={{ color: 'var(--color-tertiary-content)' }}
      >
        {description}
      </p>
    </motion.div>
  )
}

export default AnimatedHeader