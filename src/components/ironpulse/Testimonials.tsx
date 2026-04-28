'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  { id: 1, name: 'Елена, 32 года', role: 'Похудела на 15 кг', text: 'За полгода я сбросила 15 кг без жёстких диет и голодовок. Главное — система. Александр дал мне понимание, как правильно питаться и тренироваться.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80' },
  { id: 2, name: 'Игорь, 27 лет', role: 'Набрал 10 кг мышц', text: 'Всегда был худой. Думал, что генетика. Оказалось, просто не было плана. Теперь жму 120 кг и выгляжу как атлет. Спасибо тренеру!', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80' },
  { id: 3, name: 'Ольга, 38 лет', role: 'Вернула форму после родов', text: 'С двумя детьми казалось, что о спорте можно забыть. Но программа адаптирована под мой график. Результат превзошёл ожидания.', avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=80' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))

  return (
    <section id="testimonials" className="section-padding bg-iron-dark">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-iron-accent font-semibold uppercase tracking-widest mb-3 text-sm">Отзывы</p>
          <h2 className="font-bebas text-5xl md:text-7xl uppercase leading-none mb-6 text-white">
            Что говорят <span className="text-iron-accent">клиенты</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-iron-bg rounded-2xl p-8 md:p-12 border border-white/5 relative"
          >
            <Quote className="w-16 h-16 text-iron-accent/20 absolute top-6 left-6" />
            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-iron-accent" />
              <p className="font-bold text-2xl text-white mb-1">{t.name}</p>
              <p className="text-iron-accent font-medium">{t.role}</p>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full bg-iron-accent/20 hover:bg-iron-accent transition-colors">
              <ChevronLeft className="w-6 h-6 text-iron-accent" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-iron-accent w-8' : 'bg-white/30'}`} />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full bg-iron-accent/20 hover:bg-iron-accent transition-colors">
              <ChevronRight className="w-6 h-6 text-iron-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}