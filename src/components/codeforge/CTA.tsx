'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, Code2 } from 'lucide-react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('CTA Lead:', email)
    setSubmitted(true)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-code-bg to-code-card border-t border-white/5">
      <div className="container-custom max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-code-blue to-code-purple rounded-3xl p-1"
        >
          <div className="bg-code-card rounded-[22px] p-8 md:p-16">
            <Code2 className="w-16 h-16 text-code-blue mx-auto mb-8 animate-pulse-slow" />
            <h2 className="font-space text-4xl md:text-6xl font-bold text-white mb-6">
              Готов начать свой путь?
            </h2>
            <p className="text-code-muted text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Оставь свой email и получи бесплатный вводный урок + консультацию ментора. 
              Количество мест в потоке ограничено.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
                <p className="text-2xl font-bold text-white">Урок уже в пути!</p>
                <p className="text-gray-400">Проверь почту {email}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Твой email"
                  className="flex-1 px-6 py-5 bg-code-bg border border-white/10 rounded-xl focus:border-code-blue focus:ring-2 focus:ring-code-blue/50 outline-none transition-all text-white placeholder-gray-500 text-lg"
                />
                <button
                  type="submit"
                  className="btn-primary bg-white text-code-bg font-bold rounded-xl text-lg px-10 py-5 hover:bg-gray-100 transition-colors shrink-0 flex items-center justify-center gap-2"
                >
                  Получить урок <Send className="w-5 h-5" />
                </button>
              </form>
            )}
            
            <p className="text-xs text-gray-500 mt-6">
              Мы не рассылаем спам. Только полезные материалы и анонсы потоков.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}