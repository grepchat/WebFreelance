'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gift, Clock } from 'lucide-react'

export default function Promotion() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 32, seconds: 45 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const total = prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1
        if (total <= 0) return prev
        return {
          days: Math.floor(total / 86400),
          hours: Math.floor((total % 86400) / 3600),
          minutes: Math.floor((total % 3600) / 60),
          seconds: total % 60,
        }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-padding bg-gradient-to-r from-lumiere-accent/10 to-lumiere-pink/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lumiere-accent/20 text-lumiere-accent text-sm mb-6">
            <Gift className="w-4 h-4" />
            <span>Ограниченное предложение</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-lumiere-dark mb-4">
            Скидка 20% на первый визит 
          </h2>
          <p className="text-lumiere-muted text-lg mb-8 max-w-2xl mx-auto">
            Запишитесь на любую услугу до конца недели и получите скидку на первое посещение. 
            Мы хотим, чтобы вы полюбили нашу студию с первого раза.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            {[{ label: 'Дней', value: timeLeft.days }, { label: 'Часов', value: timeLeft.hours }, { label: 'Минут', value: timeLeft.minutes }, { label: 'Секунд', value: timeLeft.seconds }].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-md w-20 sm:w-24">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock className="w-4 h-4 text-lumiere-accent" />
                </div>
                <p className="font-bold text-3xl text-lumiere-dark">{String(item.value).padStart(2, '0')}</p>
                <p className="text-xs text-lumiere-muted">{item.label}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary bg-lumiere-accent text-white rounded-full px-10 py-5 text-lg">
            Записаться со скидкой →
          </a>
        </motion.div>
      </div>
    </section>
  )
}