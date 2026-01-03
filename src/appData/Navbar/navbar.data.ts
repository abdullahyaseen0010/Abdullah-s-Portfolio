import { Variants } from 'framer-motion'
import { PORTFOLIO_INFO } from '../../lib/utils/Navbar'

// Navigation links
export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
]

// Theme configuration
export const themeConfig = {
  light: {
    name: '☀️ Light',
    navStyle: 'border-b-2 border-indigo-200',
    hoverEffect: 'hover:text-indigo-600 hover:bg-indigo-50',
  },
  dark: {
    name: '🌙 Dark',
    navStyle: 'border-b-2 border-cyan-500/30',
    hoverEffect: 'hover:text-cyan-400 hover:bg-slate-800/50',
  },
  ocean: {
    name: '🌊 Ocean',
    navStyle: 'border-b-2 border-cyan-400/40 shadow-lg shadow-cyan-500/20',
    hoverEffect: 'hover:text-cyan-300 hover:bg-blue-900/30',
  },
  sunset: {
    name: '🌅 Sunset',
    navStyle: 'border-b-2 border-pink-400/40 shadow-lg shadow-pink-500/20',
    hoverEffect: 'hover:text-orange-300 hover:bg-purple-900/30',
  },
  forest: {
    name: '🌲 Forest',
    navStyle: 'border-b-2 border-green-500/40 shadow-lg shadow-green-500/20',
    hoverEffect: 'hover:text-green-300 hover:bg-green-900/30',
  },
  cyberpunk: {
    name: '🤖 Cyber',
    navStyle: 'border-b-2 border-[#00ffff]/30 shadow-lg shadow-[#00ffff]/20 bg-gradient-to-r from-[#0d0221] via-[#1a0933] to-[#0d0221]',
    hoverEffect: 'hover:text-[#00ff41] hover:bg-[#1a0933]/60',
  },
}

export type ThemeKey = keyof typeof themeConfig

// Logo configurations
export const logoConfigs = {
  light: {
    paths: [
      { d: "M20 5L30 15L20 25L10 15L20 5Z", fill: "#4f46e5" },
      { d: "M20 10L25 15L20 20L15 15L20 10Z", fill: "#8b5cf6" },
      { d: "M18 15H22V25H18V15Z", fill: "#06b6d4" },
    ],
  },
  dark: {
    paths: [
      { d: "M15 8L25 8L30 15L25 22L15 22L10 15L15 8Z", fill: "#22d3ee" },
      { d: "M18 12L22 12L24 15L22 18L18 18L16 15L18 12Z", fill: "#818cf8" },
      { d: "M20 5L20 25", stroke: "#a78bfa", strokeWidth: "2" },
    ],
  },
  ocean: {
    paths: [
      { d: "M20 3C15 3 10 8 10 15C10 22 15 27 20 27C25 27 30 22 30 15C30 8 25 3 20 3Z", fill: "#00d9ff", fillOpacity: "0.3" },
      { d: "M15 15C15 12 17 10 20 10C23 10 25 12 25 15C25 18 23 20 20 20C17 20 15 18 15 15Z", fill: "#00bcd4" },
      { d: "M12 15Q20 8 28 15Q20 22 12 15", fill: "#4dd0e1", fillOpacity: "0.5" },
    ],
  },
  sunset: {
    paths: [
      { d: "M20 5L28 15L20 25L12 15L20 5Z", fill: "#ff6f61" },
      { d: "M20 10L24 15L20 20L16 15L20 10Z", fill: "#ff8a80" },
      { d: "M20 15C20 15 15 18 15 22C15 24 17 25 20 25C23 25 25 24 25 22C25 18 20 15 20 15Z", fill: "#ffd54f" },
    ],
  },
  forest: {
    paths: [
      { d: "M20 5L25 12L22 12L27 19L23 19L28 26H12L17 19H13L18 12H15L20 5Z", fill: "#66bb6a" },
      { d: "M18 26H22V29H18V26Z", fill: "#81c784" },
      { d: "M15 22L20 15L25 22H15Z", fill: "#4caf50", fillOpacity: "0.5" },
    ],
  },
  cyberpunk: {
    paths: [
      { d: "M10 10L20 5L30 10L30 20L20 25L10 20L10 10Z", fill: "none", stroke: "#00ff9f", strokeWidth: "2" },
      { d: "M15 15L20 12L25 15L25 18L20 21L15 18L15 15Z", fill: "#b388ff" },
      { d: "M20 5V25M10 10L30 20M30 10L10 20", stroke: "#b388ff", strokeWidth: "1", strokeOpacity: "0.5" },
    ],
  },
}

// Animation variants
export const animationVariants = {
  menu: {
    closed: {
      opacity: 0,
      x: '-100%',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as Variants,

  item: {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
  } as Variants,

  hamburger: {
    top: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: 45, y: 6 },
    },
    middle: {
      closed: { opacity: 1 },
      open: { opacity: 0 },
    },
    bottom: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: -45, y: -6 },
    },
  },
}

// Navbar configuration
export const navbarConfig = {
  height: 'h-16',
  maxWidth: 'max-w-[1200px]',
  padding: 'px-4 py-1',
  brandName: PORTFOLIO_INFO.name,
  logoViewBox: '0 0 40 30',
  logoSize: { width: 40, height: 32 },
}

// Utility functions
export const getThemeConfig = (theme: string) => {
  return themeConfig[theme as ThemeKey] || themeConfig.dark
}

export const getLogoConfig = (theme: string) => {
  return logoConfigs[theme as ThemeKey] || logoConfigs.dark
}