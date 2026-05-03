'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Heart } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="section-padding bg-lumiere-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lumiere-accent font-medium tracking-widest uppercase mb-3 text-sm">
                О студии
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-lumiere-dark mb-6 leading-tight">
                Больше чем просто <span className="italic text-lumiere-accent">салон</span>
              </h2>
              <p className="text-lumiere-muted text-lg leading-relaxed mb-8">
                LUMIÈRE — это место, где красота встречается с профессионализмом. 
                Мы создали пространство, где каждая деталь продумана для вашего комфорта и удовольствия.
                Наша философия — раскрывать вашу индивидуальность, а не скрывать её.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-lumiere-pink/30 rounded-lg">
                    <Award className="w-6 h-6 text-lumiere-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lumiere-dark text-lg mb-1">Признанные эксперты</h3>
                    <p className="text-lumiere-muted">Наши мастера — победители международных конкурсов и топ-стилисты страны.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-lumiere-pink/30 rounded-lg">
                    <Heart className="w-6 h-6 text-lumiere-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lumiere-dark text-lg mb-1">Забота о здоровье</h3>
                    <p className="text-lumiere-muted">Стерильность, гипоаллергенные материалы и безопасность превыше всего.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={isInView ? { opacity: 1, scale: 1 } : {}}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="relative"
            >
              <div className="rounded-2xl overflow-hidden h-64 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1600')" }} />
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={isInView ? { opacity: 1, scale: 1 } : {}}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="relative mt-8"
            >
              <div className="rounded-2xl overflow-hidden h-64 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1600')" }} />
              <div className="absolute -z-10 bottom-[-16px] right-[-16px] w-full h-full border-2 border-lumiere-accent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}