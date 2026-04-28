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
    { label: 'Проекты', href: '#portfolio' },
    { label: 'Этапы', href: '#process' },
    { label: 'Контакты', href: '#contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/vertex" className="flex items-center gap-2">
                <div className={`font-archivo text-3xl tracking-tight transition-colors ${isScrolled ? 'text-vertex-bg' : 'text-white'}`}>
                  VERTEX<span className="text-vertex-accent">.</span>
                </div>
              </Link>
              <Link href="/" className={`ml-3 flex items-center gap-1.5 text-xs transition-colors ${isScrolled ? 'text-gray-400 hover:text-vertex-accent' : 'text-white/60 hover:text-white'}`}>
                <Home className="w-3.5 h-3.5" />
                <span>На главную</span>
              </Link>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isScrolled ? 'text-vertex-bg hover:text-vertex-accent' : 'text-white hover:text-vertex-accent'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+78001234567" className={`flex items-center gap-2 text-sm font-bold transition-colors ${isScrolled ? 'text-vertex-bg' : 'text-white'}`}>
                <Phone className="w-4 h-4 text-vertex-accent" />
                8 (800) 123-45-67
              </a>
              <a href="#contact" className="bg-vertex-accent text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-yellow-600 transition-colors">
                Заказать смету
              </a>
            </div>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-vertex-accent">
              {mobileOpen ? <X /> : <Menu />}
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
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex flex-col h-full p-8 gap-6 justify-center">
              <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6 p-2">
                <X className="w-8 h-8 text-vertex-bg" />
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-4xl font-archivo text-vertex-bg"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <a href="tel:+78001234567" className="flex items-center gap-2 text-xl font-bold text-vertex-bg">
                  <Phone className="w-6 h-6 text-vertex-accent" />
                  8 (800) 123-45-67
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}