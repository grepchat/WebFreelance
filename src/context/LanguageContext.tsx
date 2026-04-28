"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { translations, type Locale } from '@/translations'

type LanguageContextType = {
  locale: Locale
  t: (typeof translations)['ru']
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ru')
  const t = translations[locale]

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'ru' ? 'en' : 'ru'))
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
