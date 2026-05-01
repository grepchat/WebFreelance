import OpenAI from 'openai'
import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `Ты — дружелюбный онлайн-консультант бренда IRONPULSE Coaching (фитнес и онлайн-коучинг).
Отвечай кратко по-русски, 2–5 предложений, без медицинских диагнозов и экстремальных советов.
У тебя нет доступа к реальным ценам и расписанию: если спрашивают стоимость, пакеты, запись или контакты — вежливо направь к блоку контактов и форме на этой же странице сайта.
Не выдумывай скидки и акции. Можешь мотивировать и описывать формат онлайн-тренировок в общих чертах.`

const FALLBACK_REPLY =
  'Привет! Сейчас чат работает в демо-режиме: я пока не могу отвечать на вопросы в полном объёме. Чтобы обсудить программу и записаться, напишите через форму контактов внизу страницы — коуч свяжется с вами напрямую.'

type ClientMessage = { role: 'user' | 'assistant'; content: string }

function sanitizeMessages(raw: unknown): ClientMessage[] {
  if (!Array.isArray(raw)) return []
  const out: ClientMessage[] = []
  for (const item of raw) {
    if (out.length >= 24) break
    if (!item || typeof item !== 'object') continue
    const role = (item as { role?: string }).role
    const content = (item as { content?: string }).content
    if (role !== 'user' && role !== 'assistant') continue
    if (typeof content !== 'string') continue
    const trimmed = content.trim().slice(0, 4000)
    if (!trimmed) continue
    out.push({ role, content: trimmed })
  }
  return out
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const messages = sanitizeMessages(
    typeof body === 'object' && body !== null && 'messages' in body ? (body as { messages: unknown }).messages : null
  )

  const lastUser = [...messages].reverse().find((m) => m.role === 'user')
  if (!lastUser) {
    return NextResponse.json({ error: 'Нужно хотя бы одно сообщение пользователя' }, { status: 400 })
  }

  const apiKey = process.env.OPENAI_API_KEY?.trim()
  if (!apiKey) {
    return NextResponse.json({ reply: FALLBACK_REPLY, demo: true })
  }

  try {
    const openai = new OpenAI({ apiKey })
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 600,
      temperature: 0.7,
    })
    const reply = completion.choices[0]?.message?.content?.trim()
    if (!reply) {
      return NextResponse.json({ error: 'Пустой ответ модели' }, { status: 502 })
    }
    return NextResponse.json({ reply })
  } catch (err) {
    console.error('ironpulse-chat:', err)
    return NextResponse.json(
      { error: 'Не удалось получить ответ. Попробуйте позже или напишите через форму на сайте.' },
      { status: 503 }
    )
  }
}
