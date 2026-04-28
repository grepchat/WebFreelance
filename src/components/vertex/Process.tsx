'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ClipboardCheck, PenTool, HardHat, CheckCircle, Key } from 'lucide-react'

const steps = [
  { icon: ClipboardCheck, title: '1. Заявка', desc: 'Вы оставляете заявку, мы связываемся для уточнения задач.' },
  { icon: PenTool, title: '2. Проект', desc: 'Разрабатываем проектную документацию и смету.' },
  { icon: HardHat, title: '3. Стройка', desc: 'Выполняем работы с еженедельными отчетами.' },
  { icon: CheckCircle, title: '4. Контроль', desc: 'Технический надзор и проверка качества на каждом этапе.' },
  { icon: Key, title: '5. Сдача', desc: 'Передача объекта с полным пакетом документов и гарантией.' },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="process" className="py-24 bg-vertex-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-vertex-accent font-bold uppercase tracking-widest mb-3 text-sm">Как мы работаем</p>
          <h2 className="font-archivo text-5xl text-vertex-bg mb-6">Этапы <span className="text-vertex-accent">сотрудничества</span></h2>
        </div>
        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 border-4 border-vertex-light">
                  <step.icon className="w-10 h-10 text-vertex-accent" />
                </div>
                <h3 className="text-xl font-bold text-vertex-bg mb-2">{step.title}</h3>
                <p className="text-vertex-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}