'use client'

import Marquee from './Marquee'
import { allSkills, skillsSectionContent } from '../../appData/Marquee/skillsContent'
import { marqueeConfig } from '../../appData/Marquee/marqueeConfig'

const SkillsSection = () => {
  return (
    <section className="bg-marquee relative py-12 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-8 text-center">
          <h2 className="text-primary-content mb-3 text-3xl font-bold lg:text-4xl">
            {skillsSectionContent.title}
          </h2>
          <p className="text-tertiary-content text-base lg:text-lg">
            {skillsSectionContent.subtitle}
          </p>
        </div>

        <Marquee 
          items={allSkills} 
          speed={marqueeConfig.defaultSpeed} 
          pauseOnHover={marqueeConfig.defaultPauseOnHover}
          direction={marqueeConfig.defaultDirection}
        />

        <p className="text-tertiary-content mt-6 text-center text-sm opacity-60">
          {skillsSectionContent.hoverHint}
        </p>
      </div>
    </section>
  )
}

export default SkillsSection