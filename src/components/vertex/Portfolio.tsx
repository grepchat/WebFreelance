'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { id: 1, category: 'Офисы', title: 'БЦ "Горизонт"', area: '12,500 м²', location: 'Москва', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600' },
  { id: 2, category: 'ТЦ', title: 'ТК "Мегаполис"', area: '28,000 м²', location: 'Санкт-Петербург', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600' },
  { id: 3, category: 'Склады', title: 'Логопарк "Юг"', area: '15,000 м²', location: 'Краснодар', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1600' },
  { id: 4, category: 'Офисы', title: 'Коворкинг "Среда"', area: '3,500 м²', location: 'Казань', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600' },
  { id: 5, category: 'ТЦ', title: 'ТРЦ "Арена"', area: '42,000 м²', location: 'Новосибирск', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600' },
  { id: 6, category: 'Склады', title: 'Складской комплекс №5', area: '8,200 м²', location: 'Екатеринбург', image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1600' },
];

const categories = ['Все', 'Офисы', 'ТЦ', 'Склады'];

export default function Portfolio() {
  const [filter, setFilter] = useState('Все');
  const filtered = filter === 'Все' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-vertex-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-vertex-accent font-bold uppercase tracking-widest mb-3 text-sm">Портфолио</p>
          <h2 className="font-archivo text-5xl md:text-6xl text-vertex-bg mb-6">
            Наши <span className="text-vertex-accent">проекты</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${filter === cat ? 'bg-vertex-bg text-white shadow-lg' : 'bg-white text-vertex-muted hover:bg-gray-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div
                  className="h-80 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-vertex-accent text-white text-xs font-bold uppercase rounded mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <span>{project.area}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
