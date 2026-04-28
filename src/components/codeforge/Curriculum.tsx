'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const modules = [
  {
    id: 1,
    title: 'Модуль 1: Основы Frontend (HTML, CSS, JavaScript)',
    weeks: 'Недели 1-4',
    description: 'Изучение основ верстки и программирования. Создание 2 полноценных сайтов.',
    topics: ['Семантическая верстка', 'Адаптивный дизайн', 'DOM, события, API', 'Git и деплой'],
  },
  {
    id: 2,
    title: 'Модуль 2: Продвинутый React & State Management',
    weeks: 'Недели 5-9',
    description: 'Глубокое погружение в React. Создание сложных SPA-приложений.',
    topics: ['React Hooks & Patterns', 'Redux / Zustand', 'Роутинг и навигация', 'Оптимизация и тесты'],
  },
  {
    id: 3,
    title: 'Модуль 3: Backend (Node.js, Express, Базы данных)',
    weeks: 'Недели 10-14',
    description: 'Создание серверной части приложений, работа с базами данных и API.',
    topics: ['Node.js и Express', 'PostgreSQL / MongoDB', 'REST API и GraphQL', 'Аутентификация и безопасность'],
  },
  {
    id: 4,
    title: 'Модуль 4: Финальный проект & Карьера',
    weeks: 'Недели 15-24',
    description: 'Командная разработка продукта и подготовка к собеседованиям.',
    topics: ['Архитектура приложения', 'CI/CD и Docker', 'Code Review', 'Собеседования и офферы'],
  },
]

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="curriculum" className="section-padding bg-code-bg">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-code-blue font-semibold tracking-widest uppercase mb-3 text-sm">Программа</p>
          <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-6">
            Путь от новичка до <span className="text-code-purple">Pro</span>
          </h2>
          <p className="text-code-muted text-lg">
            Пошаговая структура обучения. Никакой воды, только навыки, которые требуются работодателям.
          </p>
        </div>

        <div ref={ref} className="space-y-4">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-xl overflow-hidden bg-code-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <div>
                  <span className="text-code-blue text-xs font-bold uppercase tracking-wider mb-1 block">
                    {module.weeks}
                  </span>
                  <h3 className="text-xl font-bold text-white">{module.title}</h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-code-muted" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-code-muted" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-white/10 pt-4">
                  <p className="text-code-muted mb-4">{module.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1 h-1 bg-code-purple rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}