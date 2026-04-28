'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

interface ScrollProgressBarProps {
  color?: string
}

export default function ScrollProgressBar({ color = 'from-amber-400 to-amber-600' }: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} origin-left z-50`}
    />
  )
}
