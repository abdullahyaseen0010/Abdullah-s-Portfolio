/**
 * Check if link is active based on pathname
 */
export function isActiveLink(pathname: string, href: string): boolean {
  // Exact match for home
  if (href === '/' || href === '/#home') {
    return pathname === '/'
  }
  
  // Check if current path includes the link
  return pathname.includes(href.replace('/#', ''))
}

/**
 * Scroll to section smoothly
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId.replace('#', ''))
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/**
 * Get hash from URL (e.g., /#projects -> projects)
 */
export function getUrlHash(): string | null {
  if (typeof window === 'undefined') return null
  return window.location.hash.replace('#', '') || null
}

/**
 * Check if URL is external
 */
export function isExternalLink(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://')
}