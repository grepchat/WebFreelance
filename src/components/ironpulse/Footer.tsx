'use client'

import Link from 'next/link'
import { Flame, Instagram, Youtube, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-iron-dark border-t border-white/10 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/ironpulse" className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-iron-accent" />
            <span className="font-bebas text-2xl tracking-wider text-white">IRONPULSE</span>
          </Link>
          
          <div className="flex gap-8">
            <a href="#programs" className="text-gray-400 hover:text-iron-accent transition-colors">Программы</a>
            <a href="#coach" className="text-gray-400 hover:text-iron-accent transition-colors">Тренер</a>
            <a href="#contact" className="text-gray-400 hover:text-iron-accent transition-colors">Контакты</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-iron-accent transition-colors text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-iron-accent transition-colors text-gray-400 hover:text-white">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-iron-accent transition-colors text-gray-400 hover:text-white">
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} IRONPULSE Coaching. Все права защищены.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-iron-accent transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-iron-accent rounded-full" />
            Хочу такой же сайт
          </Link>
        </div>
      </div>
    </footer>
  )
}