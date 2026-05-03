'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Globe } from 'lucide-react'

export default function Expert() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="expert" className="py-24 bg-code-card">
      <div className="container-custom">
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-code-blue to-code-purple rounded-2xl transform rotate-3 scale-[0.98] opacity-50" />
              <div
                className="relative h-[500px] bg-cover bg-center rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600')",
                }}
              />
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-code-blue font-semibold tracking-widest uppercase mb-3 text-sm">Главный ментор</p>
              <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-6">
                Алексей <span className="text-code-purple">Петров</span>
              </h2>
              <p className="text-code-muted text-lg mb-6 leading-relaxed">
                «Я прошел путь от стажера до Lead разработчика в Яндексе за 3 года. \\nЯ знаю, какие навыки действительно ценятся, и учу только тому, что поможет вам получить работу. \\nМоя миссия — сэкономить вам годы самостоятельного изучения.»
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-code-blue rounded-full" />
                  <span>8 лет опыта коммерческой разработки</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-code-purple rounded-full" />
                  <span>Ex-Team Lead в Яндексе и Avito</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-code-blue rounded-full" />
                  <span>Обучил более 2000 студентов, 80% нашли работу</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-2 text-code-muted hover:text-code-blue transition-colors">
                  <Github className="w-5 h-5" /> <span>GitHub</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-code-muted hover:text-code-blue transition-colors">
                  <Linkedin className="w-5 h-5" /> <span>LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-code-muted hover:text-code-blue transition-colors">
                  <Globe className="w-5 h-5" /> <span>Блог</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}