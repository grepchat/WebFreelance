type ContactResult = { success: boolean; error?: string }

function isConfigured(value: string | undefined) {
  if (!value) return false
  return !value.trim().toLowerCase().startsWith('your_')
}

export async function sendToEmailJS(name: string, phone: string, messenger: string, message: string): Promise<ContactResult> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!isConfigured(serviceId) || !isConfigured(templateId) || !isConfigured(publicKey)) {
    console.warn('EmailJS is not configured with real credentials.')
    return { success: false, error: 'EmailJS is not configured' }
  }
  const safeServiceId = serviceId as string
  const safeTemplateId = templateId as string
  const safePublicKey = publicKey as string

  try {
    const emailjs = await import('@emailjs/browser')
    const res = await emailjs.default.send(safeServiceId, safeTemplateId, { name, phone, messenger, message }, safePublicKey)
    return { success: res.status === 200 }
  } catch (err) {
    console.error('EmailJS error:', err)
    return { success: false, error: String(err) }
  }
}

export async function sendToTelegram(name: string, phone: string, messenger: string, message: string): Promise<ContactResult> {
  const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
  const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

  if (!isConfigured(token) || !isConfigured(chatId)) {
    console.warn('Telegram not configured. Lead:', { name, phone, messenger, message })
    return { success: false, error: 'Telegram is not configured' }
  }

  const tgMessage =
    '🔔 Новая заявка с grepchat!\n\n' +
    '👤 Имя: ' + name + '\n' +
    '📞 Телефон: ' + phone + '\n' +
    '💬 Контакт: ' + (messenger || '—') + '\n' +
    '📝 Сообщение: ' + (message || '—') + '\n' +
    '⏰ Время: ' + new Date().toLocaleString('ru-RU')

  try {
    const res = await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: tgMessage }),
    })
    return { success: res.ok }
  } catch (err) {
    console.error('Telegram error:', err)
    return { success: false, error: String(err) }
  }
}

export async function submitContactForm(name: string, phone: string, messenger: string, message: string) {
  const emailResult = await sendToEmailJS(name, phone, messenger, message)
  if (!emailResult.success) {
    return { success: false, error: emailResult.error ?? 'EmailJS send failed' }
  }

  // Telegram is optional; it should never block successful EmailJS delivery.
  void sendToTelegram(name, phone, messenger, message)
  return { success: true }
}