'use client'

import HeroContent from './HeroContent'
import HeroVisual from './HeroVisual'
import HeroBackground from './HeroBackground'
import { useRoleRotation } from '../../lib/hooks/Hero/useRoleRotation'
import { heroData } from '../../appData/Hero/heroContent'
import { heroContainerVariants, heroItemVariants, roleVariants } from '../../appData/Hero/animations'

const Hero = () => {
  const currentRole = useRoleRotation(heroData.roles)

  return (
    <section className="bg-primary relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <HeroBackground />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-4 pt-22 pb-10 md:grid-cols-2 lg:gap-12 lg:p-12">
        <HeroContent
          currentRole={currentRole}
          roles={heroData.roles}
          containerVariants={heroContainerVariants}
          itemVariants={heroItemVariants}
          roleVariants={roleVariants}
          heroData={heroData}
        />

        <HeroVisual />
      </div>
    </section>
  )
}

export default Hero