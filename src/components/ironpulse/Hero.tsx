'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Users, Trophy, Target } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-iron-bg via-iron-dark/80 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-iron-accent/20 text-iron-accent text-sm mb-8"
          >
            <Trophy className="w-4 h-4" />
            <span>Трансформация начинается здесь</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="font-bebas text-8xl md:text-9xl xl:text-[10rem] leading-none text-white block">
              СТАНЬ
            </span>
            <span className="font-bebas text-7xl md:text-8xl xl:text-9xl leading-none text-iron-accent block mt-2">
              ЛУЧШЕЙ ВЕРСИЕЙ
            </span>
            <span className="font-bebas text-6xl md:text-7xl xl:text-8xl leading-none text-white block mt-2">
              СЕБЯ
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-gray-300 max-w-xl mt-8 mb-10 leading-relaxed"
          >
            Персональный онлайн-коучинг с программой тренировок и питания. Результат за 90 дней — гарантируем.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#pricing" className="btn-primary bg-iron-accent text-white rounded-full text-lg px-10 py-5">
              Начать трансформацию <ChevronRight className="w-5 h-5 inline" />
            </a>
            <a href="#results" className="btn-primary border-2 border-white/20 text-white rounded-full text-lg px-10 py-5 hover:border-iron-accent hover:text-iron-accent">
              Результаты
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-8 mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-iron-accent" />
              <div>
                <p className="font-bold text-white">2,400+</p>
                <p className="text-gray-400 text-sm">Клиентов</p>
              </div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-iron-accent" />
              <div>
                <p className="font-bold text-white">97%</p>
                <p className="text-gray-400 text-sm">Достигают цели</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
