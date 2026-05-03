// src/components/apex/VideoTestimonials.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ThumbsUp } from 'lucide-react'

const videos = [
  {
    id: 1,
    title: 'Результат после полировки',
    client: 'Алексей, владелец BMW M5',
    car: 'BMW M5 Competition',
    thumbnail: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=1200',
    likes: 234,
  },
  {
    id: 2,
    title: 'Керамическое покрытие',
    client: 'Дмитрий, владелец Mercedes S-Class',
    car: 'Mercedes-Benz S-Class',
    thumbnail: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200',
    likes: 189,
  },
  {
    id: 3,
    title: 'Химчистка салона',
    client: 'Елена, владелец Porsche Cayenne',
    car: 'Porsche Cayenne',
    thumbnail: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200',
    likes: 312,
  },
]

export default function VideoTestimonialsSection() {
  const [playing, setPlaying] = useState<number | null>(null)

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-red-500 font-semibold text-sm uppercase tracking-[0.2em]">Видео-отзывы</span>
          <h2 className="text-3xl md:text-5xl font-oswald text-white uppercase mt-2">Результаты на видео</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-4">Посмотрите, как преображаются автомобили наших клиентов</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setPlaying(video.id === playing ? null : video.id)}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-zinc-900">
                {playing === video.id ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <p className="text-white">▶ Видео-плеер (заглушка)</p>
                  </div>
                ) : (
                  <>
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="eager" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-xl">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-white font-oswald text-lg uppercase">{video.title}</h3>
                <p className="text-zinc-400 text-sm mt-1">{video.client}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-zinc-500 text-xs">{video.car}</span>
                  <span className="flex items-center gap-1 text-zinc-500 text-xs"><ThumbsUp className="w-3 h-3" />{video.likes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
