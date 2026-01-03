'use client'

import { logoConfigs, navbarConfig } from '../../appData/Navbar/navbar.data'
import { useThemeObserver } from '../../lib/hooks/Navbar'

const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  const theme = useThemeObserver('dark')
  const currentLogo = logoConfigs[theme as keyof typeof logoConfigs] || logoConfigs.dark

  return (
    <svg
      width={navbarConfig.logoSize.width}
      height={navbarConfig.logoSize.height}
      viewBox={navbarConfig.logoViewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="transition-all duration-500"
      aria-label="Abdullah Yaseen Logo"
    >
      {currentLogo.paths.map((pathData, index) => (
        <path
          key={index}
          {...pathData}
          className="transition-all duration-500"
        />
      ))}
    </svg>
  )
}

export default Logo
