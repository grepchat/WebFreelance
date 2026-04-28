'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const results = [
  {
    id: 1,
    name: 'Алексей, 28 лет',
    time: '12 недель',
    change: '-14 кг',
    before: 'https://images.unsplash.com/photo-1571019614529-894629376720?q=80&w=400',
    after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400',
    story: 'Работа в офисе и фастфуд привели меня к 98 кг. За 3 месяца мы снизили вес до 84 кг, при этом я чувствую себя лучше, чем в 20 лет.',
  },
  {
    id: 2,
    name: 'Мария, 34 года',
    time: '8 недель',
    change: '-8 кг / Рельеф',
    before: 'https://images.unsplash.com/photo-1594381898411-846e63f5b76f?q=80&w=400',
    after: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400',
    story: 'После родов я думала, что форма уже не вернется. С программой IRONPULSE я не только вернула форму, но и стала сильнее!',
  },
  {
    id: 3,
    name: 'Дмитрий, 40 лет',
    time: '16 недель',
    change: '+9 кг массы',
    before: 'https://images.unsplash.com/photo-1583454155184-777ef5f632d4?q=80&w=400',
    after: 'https://images.unsplash.com/photo-1581009146145-6ef6e7764a15?q=80&w=400',
    story: 'Всегда был худым. Думал, что генетика. Оказалось, просто не хватало системы. Теперь я жму 100 кг и выгляжу атлетом.',
  },
]

export default function Results() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="results" className="section-padding bg-iron-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-iron-accent font-semibold uppercase tracking-widest mb-3 text-sm">Результаты</p>
          <h2 className="font-bebas text-5xl md:text-7xl uppercase leading-none mb-6 text-white">
            Реальные <span className="text-iron-accent">истории</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Эти люди могли сдаться. Но они выбрали действие.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-iron-dark border border-white/5 rounded-xl overflow-hidden group"
            >
              <div className="grid grid-cols-2 h-64">
                <div className="relative">
                  <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: `url('${item.before}')` }} />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 uppercase font-bold">До</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${item.after}')` }} />
                  <span className="absolute top-2 right-2 bg-iron-accent text-white text-xs px-2 py-1 uppercase font-bold">После</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-xl text-white">{item.name}</h3>
                  <span className="text-iron-accent font-bebas text-2xl">{item.change}</span>
                </div>
                <p className="text-sm text-gray-400 italic mb-4">"{item.story}"</p>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-iron-accent h-full rounded-full" style={{ width: '100%' }} />
                </div>
                <p className="text-xs text-gray-500 text-right mt-1">Время трансформации: {item.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}