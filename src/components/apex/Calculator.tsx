'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  { id: 'ceramic', name: 'Керамика', base: 45000 },
  { id: 'ppf', name: 'Бронепленка', base: 80000 },
  { id: 'polish', name: 'Полировка', base: 15000 },
]

const carClasses = [
  { id: 'sedan', name: 'Седан', multiplier: 1 },
  { id: 'cuv', name: 'Кроссовер', multiplier: 1.2 },
  { id: 'suv', name: 'Внедорожник', multiplier: 1.4 },
]

export default function Calculator() {
  const [selectedService, setSelectedService] = useState('ceramic')
  const [selectedClass, setSelectedClass] = useState('sedan')

  const service = services.find(s => s.id === selectedService)!
  const car = carClasses.find(c => c.id === selectedClass)!
  const total = service.base * car.multiplier

  return (
    <section id="calculator" className="py-32 bg-apex-card border-y border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-apex-red font-bold uppercase tracking-widest text-sm">Калькулятор</span>
            <h2 className="font-oswald text-5xl md:text-7xl text-white uppercase mt-4 mb-8">
              Рассчитайте <span className="text-gray-500">стоимость</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Выберите необходимую услугу и класс вашего автомобиля, чтобы получить примерную стоимость работ в нашем центре.
            </p>

            <div className="space-y-8">
              <div>
                <label className="text-white text-sm uppercase tracking-wider font-bold mb-4 block">Услуга</label>
                <div className="grid grid-cols-3 gap-4">
                  {services.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`py-4 border text-center transition-all uppercase font-oswald text-lg ${
                        selectedService === s.id
                          ? 'border-apex-red bg-apex-red/10 text-white'
                          : 'border-white/10 text-gray-500 hover:border-white/30'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-white text-sm uppercase tracking-wider font-bold mb-4 block">Класс авто</label>
                <div className="flex gap-4">
                  {carClasses.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedClass(c.id)}
                      className={`flex-1 py-4 border text-center transition-all uppercase font-bold ${
                        selectedClass === c.id
                          ? 'border-white bg-white text-black'
                          : 'border-white/10 text-gray-500 hover:border-white/30'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-apex-bg p-12 border border-white/10">
            <motion.div
              key={total}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6"
            >
              <p className="text-gray-400 uppercase tracking-widest text-sm">Предварительная оценка</p>
              <div className="text-7xl font-oswald text-white">
                {new Intl.NumberFormat('ru-RU').format(total)} <span className="text-3xl text-apex-red">₽</span>
              </div>
              <p className="text-gray-500 text-sm">
                * Окончательная цена зависит от состояния автомобиля и выбранных материалов.
              </p>
              <a href="#contact" className="block w-full bg-apex-red text-white py-5 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors mt-8">
                Записаться по этой цене &rarr;
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}