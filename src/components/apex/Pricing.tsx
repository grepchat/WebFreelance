'use client'

import { Check } from 'lucide-react'

const plans = [
  {
    id: 'essential',
    name: 'Essential',
    price: '15 000',
    desc: 'Базовый уход для поддержания чистоты и блеска вашего авто.',
    features: ['Мойка кузова премиум-шампунем', 'Чернение резины и арок', 'Уборка салона + багги', 'Обработка пластика'],
    btn: 'Выбрать Essential',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: '45 000',
    desc: 'Глубокая очистка и защита кузова. Рекомендуемый выбор.',
    features: ['Всё из Essential', 'Детейлинг полировка кузова', 'Однокомпонентная керамика в подарок', 'Химчистка салона', 'Антидождь на лобовое стекло'],
    btn: 'Выбрать Advanced',
    popular: true,
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: '120 000',
    desc: 'Полная трансформация и максимальная защита. Абсолютное совершенство.',
    features: ['Всё из Advanced', 'Антихром (оклейка хрома пленкой)', 'Оклейка бронепленкой (перед)', 'Керамика в 3 слоя', 'Детейлинг моторного отсека'],
    btn: 'Выбрать Ultimate',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-apex-bg">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="font-oswald text-6xl md:text-8xl text-white uppercase mb-6">
            Пакеты <span className="text-apex-red">услуг</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Выберите один из наших готовых комплексных решений или закажите индивидуальный расчет.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-10 border border-white/10 bg-apex-card ${
                plan.popular ? 'lg:scale-110 z-10 border-apex-red shadow-2xl shadow-red-900/20' : 'hover:border-white/30 transition-colors'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-apex-red text-white text-center py-2 uppercase text-xs font-bold tracking-widest">
                  Выбор наших клиентов
                </div>
              )}
              <h3 className="font-oswald text-4xl text-white uppercase mb-4">{plan.name}</h3>
              <p className="text-gray-400 mb-8 h-12">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-5xl font-oswald text-white">{plan.price} ₽</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-apex-red/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-apex-red" />
                    </div>
                    <span className="text-sm text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block w-full text-center py-4 border border-white text-white uppercase font-bold tracking-wider hover:bg-white hover:text-black transition-colors">
                {plan.btn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}