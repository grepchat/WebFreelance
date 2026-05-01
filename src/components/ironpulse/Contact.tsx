'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import PrivacyPolicyModal from '@/components/ui/PrivacyPolicyModal'
import { translations } from '@/translations'

const ru = translations.ru

const goals = [
  { id: 'loss', label: 'Похудение' },
  { id: 'muscle', label: 'Набор массы' },
  { id: 'tone', label: 'Рельеф и тонус' },
  { id: 'health', label: 'Здоровье и выносливость' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', goal: 'loss', comment: '' })
  const [submitted, setSubmitted] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('IRONPULSE Lead:', form)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', phone: '', goal: 'loss', comment: '' })
  }

  return (
    <section id="contact" className="section-padding bg-iron-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-iron-accent/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-iron-accent font-semibold uppercase tracking-widest mb-3 text-sm">Начни сейчас</p>
            <h2 className="font-bebas text-5xl md:text-7xl uppercase leading-none mb-6 text-white">
              Готов к <span className="text-iron-accent">трансформации?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Запишись на бесплатную консультацию. Разберем твою цель и составим план действий.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-iron-dark rounded-xl border border-white/10 p-8 md:p-12 shadow-xl"
          >
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-20 h-20 text-iron-accent mx-auto mb-6" />
                <h3 className="text-3xl font-bebas uppercase text-white mb-4">Заявка принята!</h3>
                <p className="text-gray-400 text-lg">Тренер свяжется с тобой в Telegram или по телефону в течение 24 часов.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2 uppercase tracking-wider font-medium">Твое имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-4 bg-iron-bg border border-white/10 rounded-lg focus:border-iron-accent focus:ring-1 focus:ring-iron-accent outline-none transition-all text-white placeholder-gray-600"
                      placeholder="Введи имя"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2 uppercase tracking-wider font-medium">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-4 bg-iron-bg border border-white/10 rounded-lg focus:border-iron-accent focus:ring-1 focus:ring-iron-accent outline-none transition-all text-white placeholder-gray-600"
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2 uppercase tracking-wider font-medium">Твоя цель</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {goals.map((goal) => (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => setForm({ ...form, goal: goal.id })}
                        className={`py-3 px-4 rounded-lg border transition-all text-sm font-medium ${
                          form.goal === goal.id
                            ? 'border-iron-accent bg-iron-accent/10 text-white'
                            : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-gray-300'
                        }`}
                      >
                        {goal.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2 uppercase tracking-wider font-medium">Комментарий (необязательно)</label>
                  <textarea
                    rows={3}
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full px-4 py-4 bg-iron-bg border border-white/10 rounded-lg focus:border-iron-accent focus:ring-1 focus:ring-iron-accent outline-none transition-all text-white placeholder-gray-600 resize-none"
                    placeholder="Расскажите кратко о себе..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary bg-iron-accent text-white rounded-lg font-bold uppercase tracking-widest text-lg py-5 hover:bg-orange-600 transition-colors skew-x-[-10deg]"
                >
                  <span className="skew-x-[10deg] inline-flex items-center justify-center gap-3">
                    Записаться бесплатно <Send className="w-5 h-5" />
                  </span>
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  {ru.contact.form.privacyBefore}
                  <button
                    type="button"
                    onClick={() => setPrivacyOpen(true)}
                    className="text-iron-accent underline decoration-iron-accent/40 underline-offset-2 hover:decoration-iron-accent"
                  >
                    {ru.contact.form.privacyLink}
                  </button>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <PrivacyPolicyModal
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title={ru.privacyPolicy.title}
        closeLabel={ru.privacyPolicy.close}
        sections={ru.privacyPolicy.sections}
        variant="dark"
      />
    </section>
  )
}