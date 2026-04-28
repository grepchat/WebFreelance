'use client'

import Link from 'next/link'
import { Building2, Instagram, Youtube, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-vertex-bg text-white border-t border-white/10 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="font-archivo text-4xl mb-4">VERTEX<span className="text-vertex-accent">.</span></div>
            <p className="text-gray-400 leading-relaxed">
              Строим будущее бизнеса. Надежность, качество, инновации с 2008 года.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Услуги</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-vertex-accent">Строительство</a></li>
              <li><a href="#services" className="hover:text-vertex-accent">Реконструкция</a></li>
              <li><a href="#services" className="hover:text-vertex-accent">Проектирование</a></li>
              <li><a href="#services" className="hover:text-vertex-accent">Ремонт</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Компания</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#portfolio" className="hover:text-vertex-accent">Проекты</a></li>
              <li><a href="#process" className="hover:text-vertex-accent">Этапы работы</a></li>
              <li><a href="#contact" className="hover:text-vertex-accent">Контакты</a></li>
              <li><Link href="https://codeforge.ru" className="hover:text-vertex-accent">Лендинг создан</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Контакты</h4>
            <p className="text-gray-400">+7 (800) 555-12-34</p>
            <p className="text-gray-400 mt-2">info@vertex-stroy.ru</p>
            <p className="text-gray-400 mt-2">Москва, Пресненская наб., д. 12</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} VERTEX Строй. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-xs hover:text-vertex-accent transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-vertex-accent rounded-full" />
              Хочу такой же сайт
            </Link>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vertex-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vertex-accent transition-colors"><Send className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}