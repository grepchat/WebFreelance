'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

interface ScrollToTopProps {
  bgColor?: string
  hoverBgColor?: string
  color?: string
}

export default function ScrollToTop({
  bgColor = 'bg-amber-400',
  hoverBgColor = 'hover:bg-amber-500',
  color = 'text-white',
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 ${bgColor} ${hoverBgColor} rounded-full flex items-center justify-center shadow-lg transition-colors`}
    >
      <ArrowUp className={`w-6 h-6 ${color}`} />
    </button>
  )
}
