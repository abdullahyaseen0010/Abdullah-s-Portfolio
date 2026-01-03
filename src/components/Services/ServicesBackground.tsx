'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useServiceParticles } from '../../lib/hooks/Services/useServiceParticles'

const ServicesBackground = () => {
  const { particles, mounted } = useServiceParticles()

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Diagonal grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, #000 50%, transparent 100%)',
        }}
      />
      
      {/* Floating particles with circular motion */}
      {mounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            x: [0, particle.xOffset, 0],
            y: [0, particle.yOffset, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
            filter: 'blur(0.5px)',
            boxShadow: '0 0 15px var(--gradient-start)',
          }}
        />
      ))}
    </div>
  )
}

export default ServicesBackground