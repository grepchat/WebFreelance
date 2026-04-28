// src/components/vertex/Testimonials.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Александр Новиков',
    position: 'Генеральный директор, БЦ "Атлантик"',
    text: 'VERTEX Строй проявили себя как надёжный партнёр. Сложный проект бизнес-центра был завершён в срок с высоким качеством. Особо отмечу профессионализм инженеров и строгий контроль на каждом этапе.',
    rating: 5,
    project: 'БЦ "Атлантик", 12 500 м²'
  },
  {
    id: 2,
    name: 'Елена Соколова',
    position: 'Директор по развитию, ТРЦ "Мегаполис"',
    text: 'Работа с VERTEX — это пример идеального подрядчика. Все договорённости соблюдаются, бюджет прозрачен, а качество отделки превзошло ожидания.',
    rating: 5,
    project: 'ТРЦ "Мегаполис", 45 000 м²'
  },
  {
    id: 3,
    name: 'Дмитрий Волков',
    position: 'Логистический парк "Северный"',
    text: 'Складской комплекс такого масштаба — задача не из лёгких. VERTEX справились блестяще: учли все технические требования и сдали объект раньше срока.',
    rating: 5,
    project: 'Логистический парк "Северный", 28 000 м²'
  }
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Отзывы</span>
          <h2 className="text-3xl md:text-4xl font-archivo-black text-slate-900 mt-2">Что говорят клиенты</h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <Quote className="w-12 h-12 text-amber-400/30 mb-6" />
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">"{testimonials[current].text}"</p>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="font-bold text-slate-900">{testimonials[current].name}</p>
              <p className="text-gray-600 text-sm">{testimonials[current].position}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 bg-white rounded-full shadow-md hover:shadow-lg">
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
            <button onClick={next} className="p-3 bg-white rounded-full shadow-md hover:shadow-lg">
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
