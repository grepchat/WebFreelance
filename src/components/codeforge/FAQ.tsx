'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'Подойдет ли мне курс, если я никогда не программировал?',
    answer: 'Да, программа разработана с нуля. Мы начинаем с основ и постепенно переходим к сложным темам. 80% наших студентов приходили без опыта.',
  },
  {
    id: 2,
    question: 'Сколько времени в неделю нужно учиться?',
    answer: 'Рекомендуем выделять от 10 до 20 часов в неделю. Вы можете заниматься в своем темпе, доступ к урокам остается навсегда.',
  },
  {
    id: 3,
    question: 'Помогаете ли вы с трудоустройством?',
    answer: 'Да, у нас есть центр карьеры. Мы помогаем составить резюме, подготовить портфолио и проводим мок-собеседования с реальными работодателями.',
  },
  {
    id: 4,
    question: 'Какой документ я получу после окончания?',
    answer: 'Вы получите официальный сертификат о прохождении курса и, что важнее, 4 полноценных проекта в портфолио на GitHub.',
  },
  {
    id: 5,
    question: 'Есть ли возможность вернуть деньги?',
    answer: 'Если вы поймете, что курс вам не подходит, мы вернем деньги в течение первых 14 дней обучения без лишних вопросов.',
  },
]

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(1)

  return (
    <section id="faq" className="py-24 bg-code-bg">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-code-blue font-semibold tracking-widest uppercase mb-3 text-sm">FAQ</p>
          <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-6">
            Частые <span className="text-code-purple">вопросы</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-xl overflow-hidden bg-code-card"
            >
              <button
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-medium text-white pr-4">{faq.question}</h3>
                <div className="p-2 rounded-full bg-white/10 text-code-blue shrink-0">
                  {activeId === faq.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <motion.div
                initial={false}
                animate={activeId === faq.id ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}