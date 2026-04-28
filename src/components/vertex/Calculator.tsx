'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const typePrices = { office: 60000, retail: 75000, warehouse: 45000 } as const
const conditionMultipliers = { from_scratch: 1.2, renovation: 1.0, finishing: 0.6 }

export default function Calculator() {
  const [type, setType] = useState<keyof typeof typePrices>('office')
  const [area, setArea] = useState(100)
  const [condition, setCondition] = useState<keyof typeof conditionMultipliers>('from_scratch')

  const estimate = typePrices[type] * area * conditionMultipliers[condition]

  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-5xl">
        <div className="bg-vertex-bg rounded-3xl p-8 md:p-12 text-white flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <p className="text-vertex-accent font-bold uppercase tracking-widest mb-3 text-sm">Калькулятор</p>
            <h2 className="font-archivo text-4xl mb-6">Примерная стоимость</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Получите мгновенный расчет стоимости строительства или ремонта.
              Это предварительная оценка, точная смета составляется после замера.
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-300">Тип объекта</label>
                <div className="grid grid-cols-3 gap-3">
                  {['office', 'retail', 'warehouse'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t as any)}
                      className={`py-3 rounded-lg border transition-all text-sm font-medium ${
                        type === t ? 'border-vertex-accent bg-vertex-accent/20 text-white' : 'border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {t === 'office' ? 'Офис' : t === 'retail' ? 'Торговый' : 'Склад'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-300">
                  Площадь: <span className="text-vertex-accent">{area} м²</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-vertex-accent"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>50 м²</span>
                  <span>5000+ м²</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-300">Стадия</label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value as any)}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-vertex-accent outline-none"
                >
                  <option value="from_scratch">Строительство с нуля</option>
                  <option value="renovation">Капитальный ремонт</option>
                  <option value="finishing">Косметическая отделка</option>
                </select>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white/5 rounded-xl p-8 flex flex-col justify-center items-center border border-white/10">
            <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm">Предварительная стоимость</p>
            <div className="text-5xl md:text-6xl font-archivo font-bold text-vertex-accent mb-8">
              {new Intl.NumberFormat('ru-RU').format(Math.round(estimate))} ₽
            </div>
            <p className="text-xs text-gray-500 mb-8 text-center max-w-xs">
              *Стоимость может варьироваться в зависимости от сложности проекта, материалов и сроков.
            </p>
            <a href="#contact" className="w-full block text-center bg-vertex-accent text-white py-4 font-bold uppercase tracking-wider hover:bg-yellow-600 transition-colors rounded">
              Получить точную смету
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}