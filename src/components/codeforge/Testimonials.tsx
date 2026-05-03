'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  { id: 1, name: 'Игорь С.', role: 'Frontend Developer в Тинькофф', text: 'До CodeForge я год пытался учиться сам. За 6 месяцев на курсе я получил больше, чем за всё время. Самое ценное — менторство и ревью кода.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=320' },
  { id: 2, name: 'Мария К.', role: 'Junior Developer в СБЕР', text: 'Пришла из бухгалтерии. Думала, что программирование — это для мужчин. Оказалось, что нужно только желание и хороший наставник. Спасибо Алексею!', rating: 5, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=320' },
  { id: 3, name: 'Дмитрий В.', role: 'Fullstack в Яндекс', text: 'Курс дал мне системное понимание. На собеседовании в Яндекс я чувствовал себя уверенно, потому что знал теорию и имел практику.', rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=320' },
  { id: 4, name: 'Анна Л.', role: 'React Developer в Авито', text: 'Огромное практическое количество задач. 4 проекта в портфолио — именно они помогли мне получить оффер.', rating: 5, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=320' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))

  return (
    <section id="testimonials" className="section-padding bg-code-bg">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-code-blue font-semibold tracking-widest uppercase mb-3 text-sm">Отзывы</p>
          <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-6">
            Истории <span className="text-code-purple">успеха</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-code-card rounded-2xl p-8 md:p-12 border border-white/5 relative"
          >
            <Quote className="w-16 h-16 text-code-blue/10 absolute top-6 left-6" />
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-5 h-5 text-code-blue fill-current" />)}
              </div>
              <p className="text-xl md:text-2xl text-gray-200 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-code-blue/30" />
                  <div>
                    <p className="font-bold text-lg text-white">{t.name}</p>
                    <p className="text-code-blue text-sm">{t.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={prev} className="p-2 rounded-full hover:bg-white/10 transition-colors"><ChevronLeft className="w-6 h-6 text-gray-400" /></button>
                  <button onClick={next} className="p-2 rounded-full hover:bg-white/10 transition-colors"><ChevronRight className="w-6 h-6 text-gray-400" /></button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-code-blue w-8' : 'bg-white/20'}`} />
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Более 4,200 выпускников нашли работу. Рейтинг 4.9 из 5.0 на основании 3,800+ отзывов.
          </p>
        </div>
      </div>
    </section>
  )
}