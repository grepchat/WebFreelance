'use client'

import { useState } from 'react'

const services = [
  {
    id: 1,
    title: 'Строительство зданий',
    desc: 'Возведение коммерческих объектов с нуля под ключ.',
    icon: '🏗️',
  },
  {
    id: 2,
    title: 'Ремонт и отделка',
    desc: 'Комплексные ремонтные работы любой сложности.',
    icon: '🔧',
  },
  {
    id: 3,
    title: 'Проектирование',
    desc: 'Архитектурное проектирование и разработка документации.',
    icon: '📐',
  },
  {
    id: 4,
    title: 'Реконструкция',
    desc: 'Усиление конструкций, перепланировка, модернизация.',
    icon: '🔄',
  },
]

export default function Services() {
  const [activeId, setActiveId] = useState(1)

  return (
    <section id="services" className="py-24 bg-vertex-bg text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <p className="text-vertex-accent font-bold uppercase tracking-widest mb-3 text-sm">Наши услуги</p>
            <h2 className="font-archivo text-5xl mb-6 leading-tight">
              Полный цикл <br className="hidden md:block" />
              <span className="text-vertex-accent">строительных работ</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Мы выполняем весь спектр работ: от проектирования до сдачи объекта.
              Собственные бригады, контроль качества, гарантия 5 лет.
            </p>
            <a href="#contact" className="inline-block bg-vertex-accent text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-yellow-600 transition-colors">
              Заказать услугу →
            </a>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`p-8 rounded-xl transition-all duration-300 cursor-pointer border ${
                  activeId === service.id
                    ? 'bg-white/10 border-vertex-accent'
                    : 'bg-white/5 border-transparent hover:bg-white/10'
                }`}
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}