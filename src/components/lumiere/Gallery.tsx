'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    category: 'Стрижки',
    before: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400',
    after: 'https://images.unsplash.com/photo-1596728325488-58c37691e9d2?q=80&w=400',
  },
  {
    id: 2,
    category: 'Окрашивание',
    before: 'https://images.unsplash.com/photo-1567894340315-735d7c361db7?q=80&w=400',
    after: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=400',
  },
  {
    id: 3,
    category: 'Маникюр',
    before: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400',
    after: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=400',
  },
  {
    id: 4,
    category: 'Брови',
    before: 'https://images.unsplash.com/photo-1598257006807-67c1c3f8c584?q=80&w=400',
    after: 'https://images.unsplash.com/photo-1604772659841-a1612a6a9e3c?q=80&w=400',
  },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAfter, setShowAfter] = useState(true)

  const prev = () => setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
  const next = () => setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))

  const currentItem = galleryItems[currentIndex]

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-lumiere-accent font-medium tracking-widest uppercase mb-3 text-sm">Наши работы</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-lumiere-dark mb-4">
            Результат, который <span className="italic text-lumiere-accent">вдохновляет</span>
          </h2>
          <p className="text-lumiere-muted text-lg">
            Посмотрите на преображения наших клиентов.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-lumiere-bg shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={showAfter ? currentItem.after : currentItem.before}
                  alt={currentItem.category}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <button
                onClick={() => setShowAfter(!showAfter)}
                className="px-4 py-2 bg-white/90 text-lumiere-dark rounded-full text-sm font-medium hover:bg-white transition-colors"
              >
                {showAfter ? 'Посмотреть ДО' : 'Посмотреть ПОСЛЕ'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button onClick={prev} className="p-3 rounded-full bg-lumiere-bg hover:bg-lumiere-pink transition-colors">
              <ChevronLeft className="w-6 h-6 text-lumiere-dark" />
            </button>
            <div className="text-center">
              <p className="text-lg font-medium text-lumiere-dark">{currentItem.category}</p>
              <p className="text-lumiere-muted">{currentIndex + 1} / {galleryItems.length}</p>
            </div>
            <button onClick={next} className="p-3 rounded-full bg-lumiere-bg hover:bg-lumiere-pink transition-colors">
              <ChevronRight className="w-6 h-6 text-lumiere-dark" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
