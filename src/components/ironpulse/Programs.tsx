'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Flame, Dumbbell, Target } from 'lucide-react'

const programs = [
  {
    id: 1,
    icon: Flame,
    title: 'Похудение',
    description: 'Жиросжигающие тренировки + план питания. Результат: минус 3-8 кг за первый месяц.',
    features: ['HIIT и кардио', 'Дефицит калорий', 'Ежедневный контроль'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600',
  },
  {
    id: 2,
    icon: Dumbbell,
    title: 'Набор массы',
    description: 'Силовые тренировки для роста мышц. Результат: +4-7 кг сухой мышечной массы.',
    features: ['Базовые упражнения', 'Профицит калорий', 'Периодизация'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600',
  },
  {
    id: 3,
    icon: Target,
    title: 'Рельеф и Тонус',
    description: 'Сушка и прорисовка мышц. Результат: видимый пресс и сухое тело.',
    features: ['Кардио + Силовые', 'Циклирование углей', 'Детальная проработка'],
    image: 'https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
]

export default function Programs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="programs" className="section-padding bg-iron-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-iron-accent font-semibold uppercase tracking-widest mb-3 text-sm">Программы</p>
          <h2 className="font-bebas text-5xl md:text-7xl uppercase leading-none mb-6 text-white">
            Выбери свой <span className="text-iron-accent">путь</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Три проверенные программы, адаптированные под твой текущий уровень и цели.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group bg-iron-bg border border-white/5 hover:border-iron-accent/50 transition-all duration-300 overflow-hidden relative"
            >
              <div
                className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${program.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-iron-bg to-transparent" />
              </div>
              
              <div className="relative p-8 -mt-24">
                <div className="w-16 h-16 bg-iron-accent rounded-lg flex items-center justify-center mb-6 transform -skew-x-12">
                  <program.icon className="w-8 h-8 text-white transform skew-x-12" />
                </div>
                <h3 className="font-bebas text-4xl uppercase text-white mb-2">{program.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{program.description}</p>
                
                <ul className="space-y-3">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-iron-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="inline-block mt-8 text-iron-accent hover:text-white transition-colors font-semibold tracking-wider uppercase text-sm">
                  Начать программу &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}