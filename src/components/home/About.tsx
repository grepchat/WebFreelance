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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{a.badge}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-gray-900 mt-2">
            {a.title} <span className="text-blue-600">{a.name}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-gray-600 mt-4 leading-relaxed">
            {a.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {a.skills.map((skill: { title: string; desc: string }, i: number) => {
            const Icon = iconMap[i] || Code2
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors border border-gray-100"
              >
                <Icon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{skill.title}</h3>
                <p className="text-sm text-gray-500">{skill.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}