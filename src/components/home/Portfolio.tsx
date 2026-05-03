'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const projectImages = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200', // LUMIÈRE — salon
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200', // IRONPULSE — gym
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200', // CodeForge — code
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200', // VERTEX — construction
  'https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=1200', // APEX — car
]

const projectPaths = ['/lumiere', '/ironpulse', '/codeforge', '/vertex', '/apex']

export default function Portfolio() {
  const { t } = useLanguage()
  const p = t.portfolio

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{p.badge}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {p.title}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm md:text-base text-gray-500 mt-3 max-w-md mx-auto">
            {p.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]">
          {p.projects.map((project: { name: string; niche: string; desc: string; highlight?: string }, i: number) => (
            <motion.div
              key={projectPaths[i]}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full min-h-0"
            >
              <Link href={projectPaths[i]} className="group block h-full min-h-0">
                <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="h-44 shrink-0 overflow-hidden md:h-48">
                    <img
                      src={projectImages[i]}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6 min-h-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full shrink-0">{project.niche}</span>
                      <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors shrink-0 mt-0.5" />
                    </div>
                    {project.highlight ? (
                      <div className="mb-2 flex items-center">
                        <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-amber-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm leading-tight">
                          <Sparkles className="h-3.5 w-3.5 shrink-0" />
                          <span className="break-words">{project.highlight}</span>
                        </span>
                      </div>
                    ) : null}
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">{project.name}</h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-snug flex-1">{project.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg">
            {p.cta} <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}