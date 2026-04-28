'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    id: 1,
    name: 'Базовый',
    price: '4 990',
    period: 'мес',
    popular: false,
    features: [
      'Персональная программа тренировок',
      'Базовый план питания',
      'Доступ к библиотеке упражнений',
      'Еженедельная корректировка плана',
    ],
    cta: 'Выбрать план',
  },
  {
    id: 2,
    name: 'Про',
    price: '9 990',
    period: 'мес',
    popular: true,
    features: [
      'Всё из Базового',
      'Ежедневный контроль питания',
      'Чат с тренером 24/7',
      'Видео-разборы техники',
      'Доступ к закрытому сообществу',
    ],
    cta: 'Выбрать план',
  },
  {
    id: 3,
    name: 'Премиум',
    price: '19 990',
    period: 'мес',
    popular: false,
    features: [
      'Всё из Про',
      'Индивидуальные созвоны (2 раза/нед)',
      'Полное сопровождение 1 на 1',
      'Персональный магазин добавок',
      'Гарантия результата или возврат',
    ],
    cta: 'Выбрать план',
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="pricing" className="section-padding bg-iron-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-iron-accent font-semibold tracking-widest uppercase mb-3 text-sm">Тарифы</p>
          <h2 className="font-bebas text-5xl md:text-7xl uppercase leading-none mb-6 text-white">
            Инвестируй в <span className="text-iron-accent">себя</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Прозрачные цены. Никаких скрытых платежей. Первый месяц — скидка 20%.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative rounded-xl p-8 border ${
                plan.popular
                  ? 'bg-iron-dark border-iron-accent shadow-2xl shadow-iron-accent/10 scale-105 z-10'
                  : 'bg-iron-dark/50 border-white/10 hover:border-iron-accent/30 transition-colors'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-iron-accent text-white px-4 py-1 text-sm font-bold uppercase tracking-wider rounded-full">
                  Популярный выбор
                </div>
              )}
              <h3 className="font-bebas text-4xl text-white uppercase mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-iron-accent font-bold text-5xl">{plan.price}</span>
                <span className="text-gray-500 text-lg">₽/{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-iron-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full block text-center py-4 font-bold uppercase tracking-widest transition-colors ${
                  plan.popular
                    ? 'bg-iron-accent text-white hover:bg-orange-600'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}