'use client'

import { Github, Mail, Send } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-gray-900">{f.brand}</p>
            <p className="text-sm text-gray-500">{f.tagline}</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/grepchat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-100 transition-colors">
              <Github className="w-5 h-5 text-gray-600" />
            </a>
            <a href="https://t.me/grepchat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-100 transition-colors">
              <Send className="w-5 h-5 text-gray-600" />
            </a>
            <a href="mailto:g.chadakin@mail.ru" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-100 transition-colors">
              <Mail className="w-5 h-5 text-gray-600" />
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-8 pt-6 border-t border-gray-200">
          &copy; {new Date().getFullYear()} {f.brand}. {f.rights}
        </div>
      </div>
    </footer>
  )
}