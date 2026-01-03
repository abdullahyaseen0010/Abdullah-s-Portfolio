'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { servicesHeader } from '../../appData/Services/servicesContent'
import { serviceHeaderVariants } from '../../appData/Services/serviceAnimations'

const ServicesHeader = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={serviceHeaderVariants}
      className="mb-14 text-center relative z-10"
    >
      <h2 
        className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end))'
        }}
      >
        {servicesHeader.title}
      </h2>
      
      <p 
        className="max-w-2xl mx-auto text-lg" 
        style={{ color: 'var(--color-tertiary-content)' }}
      >
        {servicesHeader.description}
      </p>
    </motion.div>
  )
}

export default ServicesHeader