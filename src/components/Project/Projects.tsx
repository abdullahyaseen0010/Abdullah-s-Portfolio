import React from 'react'
import ProjectsGrid from './ProjectsGrid'
import SectionHeader from './SectionHeader'
import FloatingParticles from './FloatingParticles'
import { projects, projectsSectionContent } from '../../appData/Project/projectsContent'
import { projectsConfig } from '../../appData/Project/projectsConfig'

const Projects = () => {
  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto">
      <SectionHeader 
        iconName={projectsSectionContent.iconName}
        label={projectsSectionContent.label}
        title={projectsSectionContent.title}
        description={projectsSectionContent.description}
      />
      
      <ProjectsGrid projects={projects} />
      
      <FloatingParticles count={projectsConfig.particlesCount} />
    </section>
  )
}

export default Projects