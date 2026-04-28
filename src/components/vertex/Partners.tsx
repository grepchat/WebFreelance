// src/components/vertex/Partners.tsx
'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'Сбербанк', logo: '🏦' },
  { name: 'Газпром', logo: '🏭' },
  { name: 'Яндекс', logo: '🔍' },
  { name: 'МТС', logo: '📱' },
  { name: 'РЖД', logo: '🚂' },
  { name: 'Росатом', logo: '☢️' },
]

const certificates = [
  'Лицензия Минстроя №123456',
  'СРО "Строительный комплекс"',
  'ISO 9001:2015',
  'ISO 14001:2015',
]

export default function PartnersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Партнёры и лицензии</span>
          <h2 className="text-3xl md:text-4xl font-archivo-black text-slate-900 mt-2">Нам доверяют</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Сотрудничаем с ведущими компаниями России</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-4xl"
            >
              <span>{partner.logo}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-8"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Лицензии и сертификаты</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certificates.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-3 h-3 bg-amber-400 rounded-full flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
