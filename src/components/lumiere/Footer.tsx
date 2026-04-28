'use client'

import { MapPin, Phone, Mail, Instagram, Send } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-lumiere-dark text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-playfair text-2xl font-bold">LUMIÈRE</span>
              <span className="text-lumiere-accent text-xs tracking-widest uppercase">Beauty Studio</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Премиальный салон красоты. Мы создаём не просто причёски — мы создаём настроение.
            </p>
          </div>
          <div>
            <h4 className="font-playfair text-lg mb-4">Часы работы</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between"><span>Пн-Пт</span><span>09:00 — 21:00</span></li>
              <li className="flex justify-between"><span>Сб</span><span>10:00 — 20:00</span></li>
              <li className="flex justify-between"><span>Вс</span><span>10:00 — 19:00</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-playfair text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-lumiere-accent" />Москва, ул. Пушкина, 15</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-lumiere-accent" />8 (800) 123-45-67</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-lumiere-accent" />info@lumiere.ru</li>
            </ul>
          </div>
          <div>
            <h4 className="font-playfair text-lg mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lumiere-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lumiere-accent transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} LUMIÈRE Beauty Studio. Все права защищены.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-lumiere-accent rounded-full" />
            Хочу такой же сайт
          </Link>
        </div>
      </div>
    </footer>
  )
}
