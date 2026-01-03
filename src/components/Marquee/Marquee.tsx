'use client'

import { useState } from 'react'
import { LucideIcon } from 'lucide-react'
import { useMarqueeAnimation } from '../../lib/hooks/Marquee/useMarqueeAnimation'

interface MarqueeItem {
  name: string
  icon: LucideIcon
}

interface MarqueeProps {
  items: MarqueeItem[]
  speed?: number
  pauseOnHover?: boolean
  direction?: 'left' | 'right'
}

const Marquee = ({
  items,
  speed = 40,
  pauseOnHover = true,
  direction = 'left',
}: MarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false)
  const contentRef = useMarqueeAnimation({ speed, direction, isPaused })

  return (
    <div
      className="relative cursor-pointer overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div ref={contentRef} className="flex w-max gap-4 lg:gap-6">
        {/* Original content */}
        <div className="flex shrink-0 items-center gap-4 lg:gap-6">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={`${item.name}-${index}`}
                className="border-border bg-secondary/50 flex items-center gap-3 rounded-xl border px-6 py-3 backdrop-blur-sm transition-all hover:bg-secondary lg:px-8 lg:py-4"
              >
                <Icon className="text-accent h-5 w-5 lg:h-6 lg:w-6" />
                <span className="text-primary-content whitespace-nowrap text-sm font-medium lg:text-base">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 items-center gap-4 lg:gap-6" aria-hidden="true">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={`${item.name}-duplicate-${index}`}
                className="border-border bg-secondary/50 flex items-center gap-3 rounded-xl border px-6 py-3 backdrop-blur-sm transition-all hover:bg-secondary lg:px-8 lg:py-4"
              >
                <Icon className="text-accent h-5 w-5 lg:h-6 lg:w-6" />
                <span className="text-primary-content whitespace-nowrap text-sm font-medium lg:text-base">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Marquee