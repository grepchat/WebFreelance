'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Search, SprayCan, Check } from 'lucide-react'

const steps = [
  { icon: Search, title: '1. Осмотр и Диагностика', desc: 'Тщательная оценка состояния ЛКП толщиномером.' },
  { icon: SprayCan, title: '2. Подготовка', desc: 'Глубокая очистка и обезжиривание поверхности.' },
  { icon: Shield, title: '3. Основная работа', desc: 'Полировка, оклейка или нанесение покрытий.' },
  { icon: Check, title: '4. Отделка и Защита', desc: 'Финишный контроль качества и рекомендации.' },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="py-32 bg-apex-card border-t border-white/5">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="font-oswald text-5xl md:text-7xl text-white uppercase mb-5">
            Процесс <span className="text-apex-red">работы</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Прозрачные этапы работы, которые гарантируют идеальный результат вашего автомобиля.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative" ref={ref}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 border-l border-apex-red/30"
            >
              <div className="absolute -left-5 top-0 w-10 h-10 bg-apex-bg border border-apex-red flex items-center justify-center rounded">
                <step.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-oswald text-white mb-4 uppercase">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}