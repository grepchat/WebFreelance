'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  { id: 1, name: 'Анна С.', role: 'Клиент 2 года', text: 'Это не просто салон, это место силы! Мастера — настоящие художники. Уже второй год хожу только сюда.', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80' },
  { id: 2, name: 'Мария К.', role: 'Бьюти-блогер', text: 'Идеальное окрашивание, которое не портит волосы. Рекомендую всем своим подписчикам.', rating: 5, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80' },
  { id: 3, name: 'Екатерина В.', role: 'Постоянный клиент', text: 'Атмосфера, сервис, результат — всё на высоте. Чувствуешь себя королевой.', rating: 5, avatar: 'https://images.unsplash.com/photo-1587654165988-4e1d49d5b666?q=80&w=80' },
  { id: 4, name: 'Ольга П.', role: 'Клиент 1 год', text: 'Впервые довольна маникюром на 100%. Ношу покрытие 4 недели без сколов!', rating: 5, avatar: 'https://images.unsplash.com/photo-1567719147888-91d1e4c1e2c1?q=80&w=80' },
  { id: 5, name: 'Дарья Л.', role: 'VIP клиент', text: 'Лучший спа-массаж в городе. Ухожу как новая. Спасибо команде за заботу!', rating: 5, avatar: 'https://images.unsplash.com/photo-1553907281-5421879c3b20?q=80&w=80' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const t = testimonials[current]

  return (
    <section id="testimonials" className="section-padding bg-lumiere-bg">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-lumiere-accent font-medium tracking-widest uppercase mb-3 text-sm">Отзывы</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-lumiere-dark mb-4">
            Что говорят <span className="italic text-lumiere-accent">клиенты</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-lumiere-pink/30 relative">
            <Quote className="w-16 h-16 text-lumiere-accent/20 absolute top-6 left-6" />
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-4">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-5 h-5 text-lumiere-accent fill-current" />)}
              </div>
              <p className="text-xl md:text-2xl font-medium text-lumiere-dark mb-8 leading-relaxed">"{t.text}"</p>
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-4 border-lumiere-pink/30" />
              <p className="font-bold text-lg text-lumiere-dark">{t.name}</p>
              <p className="text-lumiere-muted">{t.role}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full bg-white hover:bg-lumiere-pink transition-colors shadow-sm"><ChevronLeft className="w-6 h-6 text-lumiere-dark" /></button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-lumiere-accent' : 'bg-lumiere-pink/50'}`} />)}
            </div>
            <button onClick={next} className="p-3 rounded-full bg-white hover:bg-lumiere-pink transition-colors shadow-sm"><ChevronRight className="w-6 h-6 text-lumiere-dark" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}