'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('VERTEX Lead:', form)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-vertex-bg text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-vertex-accent font-bold uppercase tracking-widest mb-3 text-sm">Контакты</p>
            <h2 className="font-archivo text-5xl mb-6">
              Начнем <span className="text-vertex-accent">проект?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Оставьте заявку на расчет стоимости. Мы свяжемся с вами в течение 2 часов 
              для обсуждения деталей и выезда на объект.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-vertex-accent mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-lg">Головной офис</p>
                  <p className="text-gray-400">г. Москва, Пресненская наб., д. 12, Башня «Федерация»</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-vertex-accent mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-lg">Телефон</p>
                  <p className="text-gray-400">8 (800) 555-12-34</p>
                  <p className="text-sm text-gray-500">Пн-Пт: 09:00 — 18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-vertex-accent mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-lg">Email</p>
                  <p className="text-gray-400">info@vertex-stroy.ru</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white text-vertex-bg p-8 rounded-2xl"
          >
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-2">Заявка принята</h3>
                <p className="text-gray-500">Наш менеджер свяжется с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-vertex-bg/70">Имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full p-4 bg-gray-100 rounded-lg border border-gray-200 focus:border-vertex-accent focus:ring-1 focus:ring-vertex-accent outline-none transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-vertex-bg/70">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full p-4 bg-gray-100 rounded-lg border border-gray-200 focus:border-vertex-accent focus:ring-1 focus:ring-vertex-accent outline-none transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-vertex-bg/70">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full p-4 bg-gray-100 rounded-lg border border-gray-200 focus:border-vertex-accent focus:ring-1 focus:ring-vertex-accent outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-vertex-bg/70">Сообщение</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full p-4 bg-gray-100 rounded-lg border border-gray-200 focus:border-vertex-accent focus:ring-1 focus:ring-vertex-accent outline-none transition-colors resize-none"
                    placeholder="Опишите ваш проект..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-vertex-accent text-white py-4 font-bold uppercase tracking-wider hover:bg-yellow-600 transition-colors rounded-lg flex items-center justify-center gap-2"
                >
                  Получить смету <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}