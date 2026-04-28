'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Medal, Award, Star } from 'lucide-react'

const achievements = [
  { icon: Medal, text: 'Мастер спорта по бодибилдингу' },
  { icon: Award, text: 'Сертификат FPA и NASM' },
  { icon: Star, text: 'Более 500 успешных кейсов' },
]

export default function Coach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="coach" className="section-padding bg-iron-dark overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div
                className="rounded-xl overflow-hidden h-[600px] bg-cover bg-center w-full"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1567013127542-491b52977f50?q=80&w=800')",
                }}
              />
            </motion.div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-iron-accent/20 rounded-full blur-3xl z-0" />
            <div className="absolute top-1/2 -right-10 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl z-0" />
            
            <div className="absolute bottom-10 -left-6 z-20 bg-iron-accent p-6 rounded-lg text-white shadow-lg">
              <p className="font-bebas text-4xl leading-none">10+</p>
              <p className="text-sm font-medium opacity-90">Лет опыта</p>
            </div>
          </div>

          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-iron-accent font-semibold tracking-widest uppercase mb-3 text-sm">Тренер</p>
              <h2 className="font-bebas text-5xl md:text-6xl uppercase leading-none mb-6 text-white">
                Александр <span className="text-iron-accent">Волков</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                «Я не просто пишу программы тренировок. Я меняю мышление. Мой подход основан на науке, дисциплине и полной отдаче. Если ты готов работать — я гарантирую результат. Это не магия, это система.»
              </p>

              <div className="space-y-6 mb-10">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-iron-bg flex items-center justify-center border border-white/10">
                      <item.icon className="w-6 h-6 text-iron-accent" />
                    </div>
                    <p className="text-white font-medium text-lg">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <a href="#contact" className="btn-primary bg-white text-iron-bg rounded-none uppercase tracking-widest font-bold px-10 py-5 hover:bg-iron-accent hover:text-white transition-colors skew-x-[-10deg]">
                <span className="skew-x-[10deg] inline-block">Записаться на консультацию</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}