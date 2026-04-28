'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t, toggleLocale, locale } = useLanguage()
  const h = t.hero

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 25% 50%, #6366f1 0%, transparent 50%), radial-gradient(circle at 75% 30%, #06b6d4 0%, transparent 50%)',
      }} />
      <div className="container-custom text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Language switch */}
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleLocale}
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-gray-300 text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-all"
            >
              {t.languageSwitch}
            </button>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-600 mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            {h.available}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
            {h.greeting} <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{h.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {h.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#portfolio" className="px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-lg">
              {h.ctaWorks}
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-blue-500 hover:text-blue-600 transition-all">
              {h.ctaContact}
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400">
          {h.tech.map((tech: string) => (
            <span key={tech} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> {tech}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}