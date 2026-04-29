export async function sendToEmailJS(name: string, phone: string, messenger: string, message: string) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    console.warn('EmailJS not configured. Lead:', { name, phone, messenger, message })
    return { success: true }
  }

  try {
    const emailjs = await import('@emailjs/browser')
    const res = await emailjs.default.send(serviceId, templateId, { name, phone, messenger, message }, publicKey)
    return { success: res.status === 200 }
  } catch (err) {
    console.error('EmailJS error:', err)
    return { success: false, error: String(err) }
  }
}

export async function sendToTelegram(name: string, phone: string, messenger: string, message: string) {
  const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
  const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.warn('Telegram not configured. Lead:', { name, phone, messenger, message })
    return { success: true }
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
  const [emailResult, telegramResult] = await Promise.allSettled([
    sendToEmailJS(name, phone, messenger, message),
    sendToTelegram(name, phone, messenger, message),
  ])

  const emailOk = emailResult.status === 'fulfilled' && emailResult.value.success
  const telegramOk = telegramResult.status === 'fulfilled' && telegramResult.value.success

  if (!emailOk && !telegramOk) {
    console.log('Lead (fallback):', { name, phone, messenger, message })
  }

  return { success: emailOk || telegramOk }
}