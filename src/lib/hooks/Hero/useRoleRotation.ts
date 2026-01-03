import { useState, useEffect } from 'react'

export const useRoleRotation = (roles: string[], interval: number = 3000) => {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, interval)

    return () => clearInterval(timer)
  }, [roles.length, interval])

  return currentRole
}