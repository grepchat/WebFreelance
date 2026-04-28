'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Home } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: 'Услуги', href: '#services' },
    { label: 'О нас', href: '#about' },
    { label: 'Работы', href: '#gallery' },
    { label: 'Отзывы', href: '#testimonials' },
    { label: 'Контакты', href: '#contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-lumiere-bg/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link href="/lumiere" className="flex items-center gap-2">
              <span className="font-playfair text-2xl font-bold text-lumiere-dark">LUMIÈRE</span>
              <span className="text-lumiere-accent text-xs tracking-widest uppercase">Beauty Studio</span>
            </Link>
            <Link href="/" className="ml-4 flex items-center gap-1.5 text-xs text-lumiere-muted hover:text-lumiere-accent transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>На главную</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lumiere-muted hover:text-lumiere-accent transition-colors text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+78001234567" className="flex items-center gap-2 text-lumiere-dark">
                <Phone className="w-4 h-4 text-lumiere-accent" />
                <span className="text-sm font-medium">8 (800) 123-45-67</span>
              </a>
              <a href="#contact" className="btn-primary bg-lumiere-accent text-white rounded-full">
                Записаться
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
              aria-label="Меню"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute right-0 top-0 h-full w-80 bg-lumiere-bg shadow-2xl p-8 pt-24"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lumiere-dark text-xl font-medium hover:text-lumiere-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-8 border-t border-lumiere-pink">
                <a href="tel:+78001234567" className="flex items-center gap-2 text-lumiere-dark mb-4">
                  <Phone className="w-4 h-4 text-lumiere-accent" />
                  <span>8 (800) 123-45-67</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full bg-lumiere-accent text-white rounded-full"
                >
                  Записаться онлайн
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}