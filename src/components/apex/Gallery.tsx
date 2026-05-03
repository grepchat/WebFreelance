'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  { id: 1, title: 'Porsche 911 GT3 — Polishing', url: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600' },
  { id: 2, title: 'BMW X5 M — Ceramic', url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600' },
  { id: 3, title: 'Mercedes G-Class — Film', url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600' },
  { id: 4, title: 'Audi RS7 — Interior', url: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1600' },
  { id: 5, title: 'Tesla Model S — Detailing', url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600' },
  { id: 6, title: 'Lamborghini Huracan — PPF', url: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1600' },
]

export default function Gallery() {
  const [activeId, setActiveId] = useState(1)

  return (
    <section id="gallery" className="py-32 bg-apex-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-apex-red font-oswald uppercase tracking-[0.3em] mb-3 text-sm">Портфолио</p>
          <h2 className="font-oswald text-5xl md:text-6xl uppercase text-white mb-4">
            Наши <span className="text-apex-red">работы</span>
          </h2>
          <p className="text-apex-metal">Каждый проект — результат высочайшего уровня мастерства</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
              onMouseEnter={() => setActiveId(img.id)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-oswald uppercase tracking-wide">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
