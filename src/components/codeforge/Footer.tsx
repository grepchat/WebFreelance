'use client'

import Link from 'next/link'
import { Terminal, Instagram, Youtube, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-code-bg border-t border-white/10 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-code-blue/20 rounded">
                <Terminal className="w-6 h-6 text-code-blue" />
              </div>
              <span className="font-space font-bold text-xl tracking-tight text-white">
                Code<span className="text-code-blue">Forge</span>
              </span>
            </div>
            <p className="text-code-muted mb-6 max-w-md leading-relaxed">
              Практические курсы программирования с менторством и гарантией трудоустройства. 
              Мы готовим разработчиков, которых хотят нанять.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-code-blue transition-colors text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-code-blue transition-colors text-gray-400 hover:text-white">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-code-blue transition-colors text-gray-400 hover:text-white">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Навигация</h4>
            <ul className="space-y-4 text-code-muted">
              <li><Link href="#benefits" className="hover:text-code-blue transition-colors">Преимущества</Link></li>
              <li><Link href="#curriculum" className="hover:text-code-blue transition-colors">Программа</Link></li>
              <li><Link href="#pricing" className="hover:text-code-blue transition-colors">Тарифы</Link></li>
              <li><Link href="#faq" className="hover:text-code-blue transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">Контакты</h4>
            <ul className="space-y-4 text-code-muted">
              <li><a href="mailto:support@codeforge.ru" className="hover:text-code-blue transition-colors">support@codeforge.ru</a></li>
              <li><a href="tel:+78001234567" className="hover:text-code-blue transition-colors">8 (800) 123-45-67</a></li>
              <li>Пн-Пт: 10:00 — 19:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CodeForge Academy. Все права защищены.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-code-blue transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-code-blue rounded-full" />
            Хочу такой же сайт
          </Link>
        </div>
      </div>
    </footer>
  )
}