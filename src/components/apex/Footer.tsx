'use client'

import Link from 'next/link'
import { Shield, Instagram, Youtube, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border-2 border-apex-red flex items-center justify-center transform rotate-45">
                <Shield className="w-4 h-4 text-white transform -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-oswald text-2xl font-bold tracking-wider text-white">
                  APEX
                </span>
                <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">
                  Detailing Center
                </span>
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-8">
              Премиальный детейлинг центр в Москве. Мы создаем совершенство из каждой детали вашего автомобиля.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all text-gray-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all text-gray-400">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all text-gray-400">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Навигация</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Процесс</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Портфолио</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Пакеты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Контакты</h4>
            <ul className="space-y-4 text-gray-400">
              <li>+7 (999) 123-45-67</li>
              <li>info@apex-detailing.ru</li>
              <li>Москва, ул. Автозаводская, д. 23</li>
              <li>Ежедневно 09:00 — 22:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} APEX Detailing Center. Все права защищены.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-apex-red rounded-full" />
            Хочу такой же сайт
          </Link>
        </div>
      </div>
    </footer>
  )
}