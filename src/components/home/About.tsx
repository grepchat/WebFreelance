'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Rocket, Zap } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const iconMap = [Code2, Palette, Rocket, Zap]

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{a.badge}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {a.title} <span className="text-blue-600">{a.name}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-gray-700 mt-5 leading-relaxed"
          >
            {a.description}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-gray-500 mt-3 leading-relaxed"
          >
            {a.automation}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {a.skills.map((skill: { title: string; desc: string }, i: number) => {
            const Icon = iconMap[i] || Code2
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex h-full flex-col p-5 md:p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors border border-gray-100"
              >
                <Icon className="w-7 h-7 md:w-8 md:h-8 text-blue-600 mb-3 shrink-0" />
                <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{skill.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-snug mt-auto">{skill.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}