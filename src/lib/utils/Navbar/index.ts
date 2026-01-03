
// Theme utilities
export {
  getStoredTheme,
  saveTheme,
  applyTheme,
  getCurrentTheme,
  initializeTheme,
} from './theme'

// Navigation utilities
export {
  isActiveLink,
  scrollToSection,
  getUrlHash,
  isExternalLink,
} from './navigation'

// Animation utilities
export {
  ANIMATION_DURATION,
  EASING,
  delay,
  getStaggerDelay,
} from './animation'

// Device utilities
export {
  isMobile,
  isTablet,
  isDesktop,
  getViewportWidth,
  prefersReducedMotion,
} from './device'

// DOM utilities
export {
  lockScroll,
  unlockScroll,
  getElement,
  isInViewport,
} from './dom'

// String utilities
export {
  capitalize,
  toKebabCase,
  truncate,
  removeEmoji,
  toTitleCase,
  slugify,
} from './string'

// Constants
export {
  PORTFOLIO_INFO,
  SOCIAL_LINKS,
  NAV_CONFIG,
  BREAKPOINTS,
  Z_INDEX,
  THEMES,
  API_ENDPOINTS,
} from './constants'

// Validators
export {
  isValidEmail,
  isEmpty,
  isValidUrl,
  isDefined,
  isValidPhone,
  isValidLength,
  isAlpha,
  isNumeric,
} from './validators'

// Formatters
export {
  formatDate,
  formatDateTime,
  formatNumber,
  formatCurrency,
  formatFileSize,
  formatPercentage,
  formatRelativeTime,
} from './formatters'

// Class name helper
export { cn } from './cn'