'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    id: 'basic',
    name: 'Базовый',
    price: '49,900',
    perMonth: '8,317',
    features: ['Доступ ко всем видеоурокам', 'Домашние задания с проверкой', 'Доступ в чат студентов', 'Сертификат об окончании'],
    cta: 'Выбрать Базовый',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Продвинутый',
    price: '89,900',
    perMonth: '14,983',
    features: ['Всё из Базового', 'Персональный ментор', '12 созвонов с ментором', 'Помощь в составлении резюме', 'Мок-собеседования'],
    cta: 'Выбрать Продвинутый',
    popular: true,
  },
  {
    id: 'vip',
    name: 'VIP',
    price: '149,900',
    perMonth: '24,983',
    features: ['Всё из Продвинутого', 'Безлимитные созвоны с ментором', 'Гарантия трудоустройства (или возврат)', 'Индивидуальная карьерная стратегия', 'Доступ к курсам навсегда'],
    cta: 'Выбрать VIP',
    popular: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="pricing" className="py-24 bg-code-card">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-code-blue font-semibold tracking-widest uppercase mb-3 text-sm">Тарифы</p>
          <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-6">
            Инвестиция в <span className="text-code-purple">карьеру</span>
          </h2>
          <p className="text-code-muted text-lg">
            Доступна рассрочка от банков-партнеров без процентов и переплат.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 rounded-xl border transition-all ${
                plan.popular
                  ? 'bg-code-bg border-code-purple shadow-xl shadow-code-purple/10 scale-105 z-10'
                  : 'bg-code-bg border-white/10 hover:border-code-blue/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-code-purple text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                  Лучший выбор
                </div>
              )}
              <h3 className="font-space text-3xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price} ₽</span>
                <p className="text-sm text-code-muted mt-1">или {plan.perMonth} ₽/мес в рассрочку</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-code-blue shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full text-center py-4 rounded-lg font-bold transition-colors ${
                  plan.popular
                    ? 'bg-code-purple text-white hover:bg-purple-600'
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