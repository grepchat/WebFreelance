'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Send } from 'lucide-react'

const services = ['Стрижка и укладка', 'Окрашивание', 'Маникюр', 'Косметология', 'Брови/Ресницы', 'Массаж']

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Стрижка и укладка', comment: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Форма записи:', form)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', phone: '', service: 'Стрижка и укладка', comment: '' })
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-lumiere-accent font-medium tracking-widest uppercase mb-3 text-sm">Контакты</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-lumiere-dark mb-6">
              Запишитесь на <span className="italic text-lumiere-accent">приём</span>
            </h2>
            <p className="text-lumiere-muted text-lg mb-8">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lumiere-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-lumiere-accent" />
                </div>
                <div>
                  <p className="font-medium text-lumiere-dark">Москва, ул. Пушкина, 15</p>
                  <p className="text-lumiere-muted text-sm">м. Тверская, 3 мин пешком</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lumiere-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-lumiere-accent" />
                </div>
                <div>
                  <p className="font-medium text-lumiere-dark">8 (800) 123-45-67</p>
                  <p className="text-lumiere-muted text-sm">Ежедневно с 09:00 до 21:00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lumiere-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-lumiere-accent" />
                </div>
                <div>
                  <p className="font-medium text-lumiere-dark">Время работы</p>
                  <p className="text-lumiere-muted text-sm">Пн-Вс: 09:00 — 21:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <form onSubmit={handleSubmit} className="bg-lumiere-bg rounded-2xl p-8 border border-lumiere-pink/30 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <p className="text-xl font-medium text-lumiere-dark mb-2">Спасибо за заявку!</p>
                  <p className="text-lumiere-muted">Мы свяжемся с вами в течение 15 минут.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-lumiere-dark mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-lumiere-pink/40 focus:border-lumiere-accent focus:ring-1 focus:ring-lumiere-accent outline-none transition-colors"
                      placeholder="Анна"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-lumiere-dark mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-lumiere-pink/40 focus:border-lumiere-accent focus:ring-1 focus:ring-lumiere-accent outline-none transition-colors"
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-lumiere-dark mb-2">Услуга</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-lumiere-pink/40 focus:border-lumiere-accent focus:ring-1 focus:ring-lumiere-accent outline-none transition-colors bg-white"
                    >
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-lumiere-dark mb-2">Комментарий</label>
                    <textarea
                      rows={3}
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-lumiere-pink/40 focus:border-lumiere-accent focus:ring-1 focus:ring-lumiere-accent outline-none transition-colors resize-none"
                      placeholder="Ваши пожелания..."
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary bg-lumiere-accent text-white rounded-lg py-4 text-lg mt-2">
                    Записаться на приём →
                  </button>
                  <p className="text-xs text-center text-lumiere-muted">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
