'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-apex-bg via-apex-bg/50 to-transparent" />

      <div className="container-custom relative z-10 pt-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mb-8"
          >
            <div className="w-24 h-2 bg-apex-red mb-4" />
            <h2 className="font-oswald text-xl md:text-2xl uppercase tracking-[0.3em] text-white mb-2">
              Премиум детейлинг центр
            </h2>
            <p className="text-apex-metal text-sm uppercase tracking-wider">Москва • Санкт-Петербург</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-oswald text-6xl md:text-8xl lg:text-9xl uppercase leading-none text-white mb-6"
          >
            Ваш авто
            <span className="block text-apex-red">заслуживает</span>
            совершенства
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg text-apex-metal max-w-lg mb-10"
          >
            Профессиональный детейлинг премиум-класса. Полировка, керамика, защита.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="btn-primary bg-apex-red text-white rounded-lg uppercase tracking-wider"
            >
              Записаться
            </a>
            <a
              href="#gallery"
              className="btn-primary border-2 border-white/20 text-white rounded-lg uppercase tracking-wider hover:border-white/40"
            >
              Наши работы
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
