'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { getTechDisplay } from '../../lib/utils/Project/techStackUtils'
import { projectsConfig } from '../../appData/Project/projectsConfig'

interface TechStackProps {
  tech: string[]
}

const TechStack = ({ tech }: TechStackProps) => {
  const { displayTech, remainingCount, hasMore } = getTechDisplay(
    tech, 
    projectsConfig.maxTechDisplay
  )

  return (
    <div className="flex flex-wrap gap-1.5 mb-4">
      {displayTech.map((techItem, index) => (
        <motion.span
          key={techItem}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className="px-2 py-0.5 text-xs font-mono rounded"
          style={{
            color: 'var(--color-tertiary-content)',
            backgroundColor: 'var(--color-secondary)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'var(--color-border)'
          }}
        >
          {techItem}
        </motion.span>
      ))}
      {hasMore && (
        <span 
          className="px-2 py-0.5 text-xs" 
          style={{ color: 'var(--color-tertiary-content)' }}
        >
          +{remainingCount}
        </span>
      )}
    </div>
  )
}

export default TechStack