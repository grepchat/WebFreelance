'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Droplets, Sun, Zap, Layers } from 'lucide-react'


const services = [
  { icon: Shield, title: 'Керамическое покрытие', desc: 'Защита кузова до 5 лет. Гидрофобный эффект и зеркальный блеск.', price: 'от 45,000 ₽' },
  { icon: Zap, title: 'Полировка кузова', desc: 'Удаление царапин, паутинки и окислов. Восстановление глубины цвета.', price: 'от 15,000 ₽' },
  { icon: Layers, title: 'Бронепленка PPF', desc: 'Антигравийная защита зон риска. Выдерживает мелкие сколы и царапины.', price: 'от 80,000 ₽' },
  { icon: Droplets, title: 'Химчистка салона', desc: 'Глубокая очистка кожи, пластика и текстиля с озонированием.', price: 'от 12,000 ₽' },
  { icon: Sun, title: 'Тонировка стекол', desc: 'Атермальная и классическая пленка премиум-класса (SunTek, Llumar).', price: 'от 8,000 ₽' },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="services" className="py-32 bg-apex-bg">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <div className="max-w-2xl">
            <span className="text-apex-red font-bold tracking-widest uppercase text-sm">Сервис</span>
            <h2 className="text-6xl md:text-7xl font-oswald text-white uppercase mt-4">
              Наши <span className="text-gray-500">услуги</span>
            </h2>
          </div>
          <a href="#pricing" className="hidden md:block border-b border-apex-red text-white pb-2 hover:text-apex-red transition-colors">
            Все тарифы на одной странице &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="bg-[#151515] p-10 border border-white/5 hover:border-apex-red/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <s.icon size={100} className="text-white rotate-12" />
              </div>
              <s.icon className="w-10 h-10 text-apex-red mb-8" />
              <h3 className="text-3xl font-oswald text-white mb-4 uppercase">{s.title}</h3>
              <p className="text-gray-400 mb-10 leading-relaxed">{s.desc}</p>
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-xl text-white font-oswald">{s.price}</span>
                <a href="#contact" className="text-sm uppercase tracking-wider text-apex-red hover:text-white transition-colors">Подробнее &rarr;</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}