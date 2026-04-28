'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Home } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: 'Программы', href: '#programs' },
    { label: 'Результаты', href: '#results' },
    { label: 'Тренер', href: '#coach' },
    { label: 'Тарифы', href: '#pricing' },
    { label: 'Отзывы', href: '#testimonials' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-iron-bg/95 backdrop-blur-md shadow-lg border-b border-iron-accent/20' : 'bg-gradient-to-b from-iron-bg/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Link href="/ironpulse" className="flex items-center gap-2">
                <Flame className="w-8 h-8 text-iron-accent" />
                <span className="font-bebas text-3xl tracking-wider text-white">IRONPULSE</span>
              </Link>
              <Link href="/" className="ml-3 flex items-center gap-1.5 text-xs text-gray-400 hover:text-iron-accent transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>На главную</span>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-iron-accent transition-colors text-sm font-medium uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden lg:inline-flex btn-primary bg-iron-accent text-white rounded-full text-sm uppercase tracking-wider"
            >
              Начать сейчас
            </a>
          </div>
        </div>
      </motion.header>

      {/* Bottom Tab Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-iron-dark border-t border-white/10">
        <div className="flex justify-around items-center h-16 px-2">
          {[
            { icon: '🏠', href: '#programs', label: 'Главная' },
            { icon: '💪', href: '#results', label: 'Результаты' },
            { icon: '📅', href: '#pricing', label: 'Тарифы' },
            { icon: '📞', href: '#contact', label: 'Запись' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-iron-accent transition-colors w-16"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[10px] uppercase font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}