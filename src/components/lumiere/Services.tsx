'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scissors, Palette, Sparkles, Droplets, Eye, Flower2 } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Scissors,
    title: 'Стрижки и укладки',
    description: 'Женские и мужские стрижки, креативные укладки для любого события.',
    price: 'от 2,500 ₽',
    image: "https://images.unsplash.com/photo-1560859251-d563a49c5e4a?q=80&w=400",
  },
  {
    id: 2,
    icon: Palette,
    title: 'Окрашивание',
    description: 'Балаяж, шатуш, аиртач, однотонное окрашивание премиум- составами.',
    price: 'от 4,500 ₽',
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400",
  },
  {
    id: 3,
    icon: Sparkles,
    title: 'Маникюр и педикюр',
    description: 'Классический, аппаратный, комбинированный маникюр с покрытием.',
    price: 'от 1,800 ₽',
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400",
  },
  {
    id: 4,
    icon: Droplets,
    title: 'Косметология',
    description: 'Чистки, пилинги, уходовые процедуры, массаж лица, мезотерапия.',
    price: 'от 3,000 ₽',
    image: "https://images.unsplash.com/photo-1512290923982-8139d8988837?q=80&w=400",
  },
  {
    id: 5,
    icon: Eye,
    title: 'Брови и ресницы',
    description: 'Архитектура бровей, ламинирование, наращивание ресниц.',
    price: 'от 1,500 ₽',
    image: "https://images.unsplash.com/photo-1588776814546-77853232873c?q=80&w=400",
  },
  {
    id: 6,
    icon: Flower2,
    title: 'Расслабляющий массаж',
    description: 'Классический, расслабляющий, антистресс-массаж всего тела.',
    price: 'от 3,500 ₽',
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-lumiere-accent font-medium tracking-widest uppercase mb-3 text-sm">
            Наши услуги
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-lumiere-dark mb-4">
            Всё для вашей <span className="italic text-lumiere-accent">красоты</span>
          </h2>
          <p className="text-lumiere-muted text-lg">
            Полный спектр бьюти-услуг от профессионалов своего дела.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-lumiere-bg rounded-2xl overflow-hidden card-hover border border-lumiere-pink/30"
            >
              <div
                className="h-52 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-lumiere-accent/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-lumiere-accent" />
                    </div>
                    <h3 className="font-medium text-lg text-lumiere-dark">{service.title}</h3>
                  </div>
                </div>
                <p className="text-lumiere-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lumiere-accent font-bold text-lg">{service.price}</span>
                  <a
                    href="#contact"
                    className="text-sm text-lumiere-dark font-medium hover:text-lumiere-accent transition-colors underline underline-offset-4"
                  >
                    Записаться →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
