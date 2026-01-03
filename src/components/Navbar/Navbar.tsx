'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import NavbarLogo from './NavbarLogo'
import NavbarMenuButton from './NavbarMenuButton'
import NavbarDesktopMenu from './NavbarDesktopMenu'
import NavbarMobileMenu from './NavbarMobileMenu'
import { navLinks, getThemeConfig } from '../../appData/Navbar/navbar.data'
import { useTheme, useClickOutside, useScrollLock } from '../../lib/hooks/Navbar'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
  const pathname = usePathname()

  // Custom hooks
  const { currentTheme, changeTheme } = useTheme('dark')
  useClickOutside('theme-dropdown', () => setIsThemeMenuOpen(false), isThemeMenuOpen)
  useScrollLock(isMenuOpen)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleThemeMenu = () => setIsThemeMenuOpen(!isThemeMenuOpen)

  const handleThemeChange = (theme: string) => {
    changeTheme(theme)
    setIsThemeMenuOpen(false)
    setIsMenuOpen(false)
  }

  const config = getThemeConfig(currentTheme)

  return (
    <nav className={`border-border fixed top-0 left-0 right-0 z-50 h-16 bg-primary transition-all duration-500 ${config.navStyle}`}>
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4 py-1">
        <NavbarLogo isMenuOpen={isMenuOpen} />

        <NavbarMenuButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />

        <NavbarDesktopMenu
          navLinks={navLinks}
          pathname={pathname}
          hoverEffect={config.hoverEffect}
          currentTheme={currentTheme}
          isThemeMenuOpen={isThemeMenuOpen}
          toggleThemeMenu={toggleThemeMenu}
          changeTheme={handleThemeChange}
        />

        <NavbarMobileMenu
          isMenuOpen={isMenuOpen}
          navLinks={navLinks}
          pathname={pathname}
          hoverEffect={config.hoverEffect}
          currentTheme={currentTheme}
          changeTheme={handleThemeChange}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </nav>
  )
}

export default Navbar