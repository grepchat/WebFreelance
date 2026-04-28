'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Керамика', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-32 bg-apex-card border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-apex-red font-bold uppercase tracking-widest text-sm">Контакты</span>
            <h2 className="font-oswald text-5xl md:text-7xl text-white uppercase mt-4 mb-8">
              Запишитесь <br /><span className="text-gray-500">на сервис</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Оставьте заявку, и мы свяжемся с вами для уточнения времени записи и деталей.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-apex-red shrink-0" />
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Адрес</h4>
                  <p className="text-gray-400">Москва, ул. Автозаводская, д. 23, стр 2</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-apex-red shrink-0" />
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Телефон</h4>
                  <p className="text-gray-400">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-apex-red shrink-0" />
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">График работы</h4>
                  <p className="text-gray-400">Ежедневно с 09:00 до 22:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-apex-bg p-10 border border-white/10">
            {submitted ? (
              <div className="h-64 flex items-center justify-center text-center">
                <div>
                  <h3 className="text-2xl text-white font-oswald uppercase">Заявка принята</h3>
                  <p className="text-gray-400 mt-2">Менеджер свяжется с вами.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Ваше имя"
                    className="w-full p-4 bg-black border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-apex-red transition-colors"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Телефон"
                    className="w-full p-4 bg-black border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-apex-red transition-colors"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <select
                    className="w-full p-4 bg-black border border-white/10 text-gray-300 focus:outline-none focus:border-apex-red transition-colors appearance-none"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="Керамика">Керамическое покрытие</option>
                    <option value="Полировка">Полировка кузова</option>
                    <option value="Бронепленка">Оклейка бронепленкой</option>
                    <option value="Химчистка">Химчистка салона</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Марка и модель авто, пожелания"
                    className="w-full p-4 bg-black border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-apex-red transition-colors resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-apex-red text-white py-5 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-3"
                >
                  Записаться <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}