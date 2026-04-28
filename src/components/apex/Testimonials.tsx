'use client'

import { Quote } from 'lucide-react'

const testimonials = [
  { name: 'Владимир К.', car: 'BMW M5', text: 'Записался на полировку и керамику. Результат — как будто только с завода. Машина выглядит лучше новой!', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80' },
  { name: 'Андрей С.', car: 'Porsche Cayenne', text: 'Оклеили весь перед бронепленкой. Швы не видно, работа ювелирная. Ребята профи своего дела.', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=80' },
  { name: 'Екатерина М.', car: 'Mercedes C-Class', text: 'Химчистка салона просто на высоте. Убрали пятно, с которым я мучилась полгода. Очень рекомендую.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80' },
]

export default function Testimonials() {
  return (
    <section className="py-32 bg-apex-card border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-apex-bg p-10 border border-white/10">
              <Quote className="w-8 h-8 text-apex-red mb-6 opacity-50" />
              <p className="text-gray-300 mb-8 leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-white font-bold uppercase">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.car}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}