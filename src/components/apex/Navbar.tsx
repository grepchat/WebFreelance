'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield, Home } from 'lucide-react'
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
    { label: 'Процесс', href: '#process' },
    { label: 'Работы', href: '#gallery' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Пакеты', href: '#pricing' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-apex-bg/95 backdrop-blur-md border-white/10 py-3' 
            : 'bg-gradient-to-b from-black/80 to-transparent border-transparent py-5'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/apex" className="flex items-center gap-3 group">
                <div className="w-10 h-10 border-2 border-apex-red flex items-center justify-center transform rotate-45 group-hover:bg-apex-red transition-colors duration-300">
                  <Shield className="w-5 h-5 text-white transform -rotate-45 group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-oswald text-2xl font-bold tracking-wider text-white leading-none">
                    APEX
                  </span>
                  <span className="text-[10px] tracking-[0.3em] text-apex-metal uppercase font-medium">
                    Detailing Center
                  </span>
                </div>
              </Link>
              <Link href="/" className="ml-3 flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>На главную</span>
              </Link>
            </div>

            <nav className="hidden xl:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium group relative"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-apex-red transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-6">
              <a href="tel:+79991234567" className="text-white font-bold tracking-wider">
                +7 (999) 123-45-67
              </a>
              <a
                href="#contact"
                className="btn-primary bg-apex-red text-white rounded-none uppercase tracking-widest text-xs font-bold px-8 py-4 hover:bg-red-700 transition-colors"
              >
                Записаться онлайн
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-white"
            >
              {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl xl:hidden"
          >
            <div className="flex flex-col h-full justify-center items-center gap-8 p-8">
              <button 
                onClick={() => setMobileOpen(false)} 
                className="absolute top-8 right-8 text-white hover:text-apex-red transition-colors"
              >
                <X className="w-10 h-10" />
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-oswald uppercase tracking-widest text-white hover:text-apex-red transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-8 bg-apex-red text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors"
              >
                Записаться онлайн &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}