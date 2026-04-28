'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-lumiere-bg/95 via-lumiere-bg/70 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lumiere-accent/20 text-lumiere-accent text-sm mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Премиальный сервис для тех, кто ценит себя</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-playfair text-5xl md:text-7xl xl:text-8xl font-bold text-lumiere-dark mb-6 leading-tight"
          >
            Искусство быть <span className="text-lumiere-accent italic">собой</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-lumiere-muted mb-10 max-w-xl leading-relaxed"
          >
            Роскошный бьюти-салон с командой топовых мастеров. Мы создаём не просто красоту — мы создаём уверенность в себе.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="btn-primary bg-lumiere-accent text-white rounded-full text-lg px-10 py-5">
              Записаться онлайн
            </a>
            <a href="#services" className="btn-primary border-2 border-lumiere-dark/20 text-lumiere-dark rounded-full text-lg px-10 py-5 hover:border-lumiere-accent hover:text-lumiere-accent">
              Наши услуги
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-8 mt-16 pt-8 border-t border-lumiere-dark/10"
          >
            <div>
              <p className="font-playfair text-4xl font-bold text-lumiere-dark">4.9</p>
              <p className="text-lumiere-muted text-sm">Рейтинг на Google</p>
            </div>
            <div className="h-12 w-px bg-lumiere-dark/10" />
            <div>
              <p className="font-playfair text-4xl font-bold text-lumiere-dark">2,500+</p>
              <p className="text-lumiere-muted text-sm">Клиентов</p>
            </div>
            <div className="hidden md:block h-12 w-px bg-lumiere-dark/10" />
            <div className="hidden md:block">
              <p className="font-playfair text-4xl font-bold text-lumiere-dark">15+</p>
              <p className="text-lumiere-muted text-sm">Мастеров</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
