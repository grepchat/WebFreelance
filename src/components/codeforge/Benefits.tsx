'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Code, Briefcase, Rocket } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Менторство 24/7',
    description: 'Персональный ментор из топ-компании, который отвечает на вопросы в течение 2 часов.',
  },
  {
    icon: Code,
    title: 'Реальные проекты',
    description: 'За время обучения вы создадите 4 полноценных проекта для своего портфолио в GitHub.',
  },
  {
    icon: Briefcase,
    title: 'Помощь в трудоустройстве',
    description: 'Центр карьеры с подготовкой к собеседованиям и рекомендациями в партнерские компании.',
  },
  {
    icon: Rocket,
    title: 'Обновляемая программа',
    description: 'Мы ежегодно обновляем стек технологий. Вы учите только то, что нужно рынку прямо сейчас.',
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="benefits" className="py-24 bg-code-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-code-blue/10 rounded-full mb-6">
            <Rocket className="w-6 h-6 text-code-blue" />
          </div>
          <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-6">
            Почему выбирают <span className="text-code-blue">CodeForge?</span>
          </h2>
          <p className="text-code-muted text-lg leading-relaxed">
            Мы не просто учим писать код. Мы создаем профессиональных разработчиков.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-code-card rounded-xl p-8 border border-white/5 hover:border-code-blue/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-code-blue/10 flex items-center justify-center mb-6 group-hover:bg-code-blue/20 transition-colors">
                <item.icon className="w-7 h-7 text-code-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-code-muted leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}