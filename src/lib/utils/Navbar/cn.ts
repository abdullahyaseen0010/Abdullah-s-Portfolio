
/**
 * Simple class name concatenation
 * For advanced usage, install: npm install clsx tailwind-merge
 * Then use: import { clsx } from 'clsx'; import { twMerge } from 'tailwind-merge'
 * export function cn(...inputs) { return twMerge(clsx(inputs)) }
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}