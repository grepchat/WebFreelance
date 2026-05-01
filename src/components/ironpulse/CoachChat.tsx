'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X, Loader2 } from 'lucide-react'

type ChatMessage = { role: 'user' | 'assistant'; content: string }

const WELCOME: ChatMessage = {
  role: 'assistant',
  content:
    'Привет! Я ИИ-консультант IRONPULSE. Спросите про формат тренировок или коучинг — по ценам и записи лучше написать через форму ниже.',
}

export default function CoachChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open, loading])

  const send = useCallback(async () => {
    const text = input.trim()
    if (!text || loading) return

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/ironpulse-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })
      const data = (await res.json()) as { reply?: string; error?: string; demo?: boolean }

      if (!res.ok) {
        setError(data.error ?? 'Ошибка сети')
        return
      }

      if (data.reply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply! }])
      }
    } catch {
      setError('Не удалось отправить. Проверьте соединение.')
    } finally {
      setLoading(false)
    }
  }, [input, loading, messages])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-24 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-105 md:right-8"
        aria-expanded={open}
        aria-label={open ? 'Закрыть чат' : 'Открыть чат с консультантом'}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div
          className="fixed bottom-40 right-6 z-[60] flex h-[min(420px,calc(100vh-8rem))] w-[min(100vw-2rem,360px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-md md:right-8"
          role="dialog"
          aria-label="Чат консультанта"
        >
          <div className="border-b border-white/10 bg-gradient-to-r from-orange-600/90 to-orange-500/90 px-4 py-3">
            <p className="font-bebas text-lg tracking-wide text-white">IRONPULSE · консультант</p>
            <p className="text-xs text-white/85">ИИ отвечает по общим вопросам; запись — через форму на сайте.</p>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'ml-auto bg-orange-500/90 text-white'
                    : 'mr-auto border border-white/10 bg-zinc-900/80 text-zinc-100'
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="mr-auto flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/80 px-3 py-2 text-sm text-zinc-400">
                <Loader2 className="h-4 w-4 animate-spin" />
                Печатаю…
              </div>
            )}
            {error && <p className="text-center text-xs text-red-400">{error}</p>}
          </div>

          <div className="border-t border-white/10 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && void send()}
                placeholder="Ваш вопрос…"
                className="min-w-0 flex-1 rounded-xl border border-white/15 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-orange-500 focus:outline-none"
                disabled={loading}
                maxLength={2000}
              />
              <button
                type="button"
                onClick={() => void send()}
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white transition-colors hover:bg-orange-600 disabled:opacity-40"
                aria-label="Отправить"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
