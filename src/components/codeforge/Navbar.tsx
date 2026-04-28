'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X, Home } from 'lucide-react'
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
    { label: 'Преимущества', href: '#benefits' },
    { label: 'Программа', href: '#curriculum' },
    { label: 'Ментор', href: '#expert' },
    { label: 'Отзывы', href: '#testimonials' },
    { label: 'Тарифы', href: '#pricing' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-code-bg/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Link href="/codeforge" className="flex items-center gap-2">
                <div className="p-1.5 bg-code-blue/20 rounded">
                  <Terminal className="w-6 h-6 text-code-blue" />
                </div>
                <span className="font-space font-bold text-xl tracking-tight text-white">
                  Code<span className="text-code-blue">Forge</span>
                </span>
              </Link>
              <Link href="/" className="ml-3 flex items-center gap-1.5 text-xs text-code-muted hover:text-white transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>На главную</span>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-code-muted hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="#login" className="text-sm text-code-muted hover:text-white transition-colors">
                Войти
              </a>
              <a href="#pricing" className="btn-primary bg-code-blue hover:bg-blue-600 text-white rounded-lg text-sm">
                Начать обучение
              </a>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-white">
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
            className="fixed inset-0 z-40 bg-code-bg/95 backdrop-blur-xl lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex flex-col items-center justify-center gap-8 h-full pt-20">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-space font-bold text-white hover:text-code-blue"
                >
                  {link.label}
                </a>
              ))}
              <a href="#pricing" className="btn-primary bg-code-blue text-white rounded-lg px-10 py-4 text-lg">
                Начать обучение &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}