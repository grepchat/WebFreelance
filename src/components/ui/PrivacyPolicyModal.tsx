'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

export type PrivacyPolicySection = { title: string; body: string }

type PrivacyPolicyModalProps = {
  open: boolean
  onClose: () => void
  title: string
  closeLabel: string
  sections: PrivacyPolicySection[]
  /** e.g. focus ring / accent for link contrast on dark pages */
  variant?: 'light' | 'dark'
}

export default function PrivacyPolicyModal({
  open,
  onClose,
  title,
  closeLabel,
  sections,
  variant = 'light',
}: PrivacyPolicyModalProps) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const panel =
    variant === 'dark'
      ? 'bg-zinc-900 border border-white/10 text-gray-200'
      : 'bg-white border border-gray-200 text-gray-800'
  const heading = variant === 'dark' ? 'text-white' : 'text-gray-900'
  const muted = variant === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const subh = variant === 'dark' ? 'text-iron-accent' : 'text-blue-600'

  return (
    <div className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        aria-label={closeLabel}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-policy-title"
        className={`relative max-h-[min(85vh,640px)] w-full max-w-lg overflow-y-auto rounded-2xl shadow-2xl ${panel}`}
      >
        <div className={`sticky top-0 z-10 flex items-center justify-between gap-4 border-b px-5 py-4 ${variant === 'dark' ? 'border-white/10 bg-zinc-900/95' : 'border-gray-100 bg-white/95'}`}>
          <h2 id="privacy-policy-title" className={`text-lg font-semibold ${heading}`}>
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className={`rounded-lg p-2 transition-colors ${variant === 'dark' ? 'text-gray-400 hover:bg-white/10 hover:text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
            aria-label={closeLabel}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-5 px-5 py-5">
          {sections.map((s) => (
            <section key={s.title}>
              <h3 className={`text-sm font-semibold ${variant === 'dark' ? 'text-iron-accent' : subh}`}>{s.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{s.body}</p>
            </section>
          ))}
        </div>
        <div className={`sticky bottom-0 border-t px-5 py-4 ${variant === 'dark' ? 'border-white/10 bg-zinc-900/95' : 'border-gray-100 bg-white/95'}`}>
          <button
            type="button"
            onClick={onClose}
            className={
              variant === 'dark'
                ? 'w-full rounded-xl bg-iron-accent py-3 text-sm font-semibold text-white hover:bg-orange-600'
                : 'w-full rounded-xl bg-gray-900 py-3 text-sm font-medium text-white hover:bg-gray-800'
            }
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
