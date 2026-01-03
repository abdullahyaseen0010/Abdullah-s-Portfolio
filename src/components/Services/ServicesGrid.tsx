'use client'

import React from 'react'
import { services } from '../../appData/Services/servicesContent'
import ServiceCard from './ServiceCard'
import { useServiceHover } from '../../lib/hooks/Services/useServiceHover'

const ServicesGrid = () => {
  const { hoveredId, handleHoverStart, handleHoverEnd, isHovered } = useServiceHover()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          isHovered={isHovered(service.id)}
          onHoverStart={() => handleHoverStart(service.id)}
          onHoverEnd={handleHoverEnd}
        />
      ))}
    </div>
  )
}

export default ServicesGrid