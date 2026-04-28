'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'Сколько времени занимает полная полировка и керамика?', a: 'Обычно от 1 до 3 дней в зависимости от состояния кузова и типа покрытия. Мы не торопимся, чтобы добиться идеального результата.' },
  { q: 'Даете ли вы гарантию на работы?', a: 'Да, мы даем официальную гарантию от 1 года на химчистку до 5 лет на керамические покрытия и бронепленку.' },
  { q: 'Какие материалы вы используете?', a: 'Только премиум бренды: Gtechniq, Ceramic Pro, Llumar, SunTek, Koch Chemie.' },
  { q: 'Можно ли остаться на время работ?', a: 'У нас есть комфортная зона ожидания с кофе, ТВ и Wi-Fi. Либо оставьте авто и заберите готовым.' },
  { q: 'Есть ли у вас парковка?', a: 'Да, у нас есть охраняемый теплый бокс на 10 машин для комфортной работы в любое время года.' },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-32 bg-apex-bg">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-apex-red font-bold uppercase tracking-widest text-sm">FAQ</span>
          <h2 className="font-oswald text-5xl md:text-6xl text-white uppercase mt-4">
            Вопросы и <span className="text-gray-500">ответы</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-sm overflow-hidden bg-apex-card">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span className="text-lg text-white font-medium pr-4">{faq.q}</span>
                <div className="text-apex-red">
                  {activeIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: activeIndex === i ? 'auto' : 0, opacity: activeIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}