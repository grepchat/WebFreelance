'use client'

import { motion } from 'framer-motion'
import { Code2, Play } from 'lucide-react'

const stats = [
  { label: 'Студентов', value: '12,847+' },
  { label: 'Трудоустроено', value: '4,200+' },
  { label: 'Средняя ЗП', value: '120k ₽' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-code-bg/90 via-code-bg/80 to-code-bg/95" />
        </div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-code-blue/20 border border-code-blue/30 text-code-blue text-sm mb-8"
        >
          <Code2 className="w-4 h-4" />
          <span>Практика. Менторство. Результат.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-space font-bold text-white mb-6 leading-tight"
        >
          Стань
          <br />
          <span className="bg-gradient-to-r from-code-blue to-code-purple bg-clip-text text-transparent">
            PRO-разработчиком
          </span>
          <br />
          за 6 месяцев
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Практические курсы с менторством, живыми проектами и гарантией трудоустройства.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#pricing" className="btn-primary bg-gradient-to-r from-code-blue to-code-purple text-white rounded-xl text-lg px-10 py-5 shadow-lg shadow-code-blue/25">
            Начать обучение
          </a>
          <button className="btn-primary border border-gray-700 text-white rounded-xl text-lg px-10 py-5 hover:border-code-blue hover:text-code-blue transition-colors gap-2">
            <Play className="w-5 h-5" />
            Смотреть презентацию
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-800 max-w-lg mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
