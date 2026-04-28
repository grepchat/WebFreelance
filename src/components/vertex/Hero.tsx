'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '15+', label: 'Лет опыта' },
  { value: '2.5 млн', label: 'м² построено' },
  { value: '180', label: 'Объектов' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-vertex-bg/70" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="w-20 h-1 bg-vertex-accent mb-8" />
          <p className="text-vertex-accent font-bold uppercase tracking-[0.3em] mb-4 text-sm">
            Строительная компания №1
          </p>
          <h1 className="font-archivo text-5xl md:text-7xl xl:text-8xl text-white leading-tight mb-6">
            Строим будущее
            <br />
            <span className="text-vertex-accent">вашего бизнеса</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">
            Проектируем и строим офисы, склады, ТЦ и производственные объекты под ключ. Сроки, бюджет, качество — наши гарантии.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#portfolio" className="btn-primary bg-vertex-accent text-vertex-bg font-bold rounded-full text-lg px-10 py-5">
              Наши проекты
            </a>
            <a href="#contact" className="btn-primary border-2 border-white/20 text-white rounded-full text-lg px-10 py-5 hover:border-vertex-accent hover:text-vertex-accent">
              Связаться
            </a>
          </div>

          <div className="flex items-center gap-8 mt-16 pt-8 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-archivo text-3xl text-vertex-accent">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
