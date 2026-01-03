
/**
 * Portfolio owner information
 */
export const PORTFOLIO_INFO = {
  name: 'Abdullah Yaseen',
  title: 'Full Stack Developer',
  location: 'Bahawalpur, Punjab, PK',
  tagline: 'Building digital experiences with modern web technologies',
} as const

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  github: 'https://github.com/abdullahyaseen',
  linkedin: 'https://linkedin.com/in/abdullahyaseen',
  twitter: 'https://twitter.com/abdullahyaseen',
  email: 'abdullah@example.com',
  portfolio: 'https://abdullahyaseen.com',
} as const

/**
 * Navigation configuration
 */
export const NAV_CONFIG = {
  height: 64, // 16 * 4 = 64px (h-16)
  mobileBreakpoint: 768,
  scrollOffset: 80, // Offset for fixed navbar
  animationDuration: 300,
} as const

/**
 * Responsive breakpoints (matching Tailwind)
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

/**
 * Z-index layers
 */
export const Z_INDEX = {
  navbar: 50,
  dropdown: 50,
  mobileMenu: 40,
  modal: 60,
  tooltip: 70,
  overlay: 30,
} as const

/**
 * Color themes
 */
export const THEMES = {
  light: 'light',
  dark: 'dark',
  ocean: 'ocean',
  sunset: 'sunset',
  forest: 'forest',
  cyberpunk: 'cyberpunk',
} as const

/**
 * API endpoints
 */
export const API_ENDPOINTS = {
  contact: '/api/contact',
  projects: '/api/projects',
  blog: '/api/blog',
} as const