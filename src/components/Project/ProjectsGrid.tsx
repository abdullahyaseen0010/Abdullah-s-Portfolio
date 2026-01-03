'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '../../appData/Project/project'
import ProjectCard from './ProjectCard'
import { useProjectHover } from '../../lib/hooks/Project/useProjectHover'
import { projectContainerVariants } from '../../appData/Project/projectAnimations'

interface ProjectsGridProps {
  projects: Project[]
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const { hoveredId, handleHoverStart, handleHoverEnd, isHovered } = useProjectHover()

  return (
    <motion.div
      variants={projectContainerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isHovered={isHovered(project.id)}
            onHoverStart={() => handleHoverStart(project.id)}
            onHoverEnd={handleHoverEnd}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default ProjectsGrid