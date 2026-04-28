// src/components/lumiere/MobileTabBar.tsx
'use client'

import { Scissors, Info, Image, Star, Phone } from 'lucide-react'

export default function MobileTabBar() {
  const tabs = [
    { icon: Scissors, href: '#services', label: 'Услуги' },
    { icon: Info, href: '#about', label: 'О нас' },
    { icon: Image, href: '#gallery', label: 'Работы' },
    { icon: Star, href: '#testimonials', label: 'Отзывы' },
    { icon: Phone, href: '#contact', label: 'Запись' },
  ]

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-lumiere-pink shadow-2xl">
      <div className="flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => (
          <a
            key={tab.href}
            href={tab.href}
            className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-lumiere-accent transition-colors w-16"
          >
            <tab.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
