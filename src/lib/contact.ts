export async function sendToEmailJS(name: string, phone: string) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    console.warn('EmailJS not configured. Lead:', { name, phone })
    return { success: true }
  }

  try {
    const emailjs = await import('@emailjs/browser')
    const res = await emailjs.default.send(serviceId, templateId, { name, phone }, publicKey)
    return { success: res.status === 200 }
  } catch (err) {
    console.error('EmailJS error:', err)
    return { success: false, error: String(err) }
  }
}

export async function sendToTelegram(name: string, phone: string) {
  const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
  const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.warn('Telegram not configured. Lead:', { name, phone })
    return { success: true }
  }

  const message = '🔔 New lead from grepchat!\n\nName: ' + name + '\nPhone: ' + phone + '\nTime: ' + new Date().toLocaleString('ru-RU')

  try {
    const res = await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    })
    return { success: res.ok }
  } catch (err) {
    console.error('Telegram error:', err)
    return { success: false, error: String(err) }
  }
}

export async function submitContactForm(name: string, phone: string) {
  const [emailResult, telegramResult] = await Promise.allSettled([
    sendToEmailJS(name, phone),
    sendToTelegram(name, phone),
  ])

  const emailOk = emailResult.status === 'fulfilled' && emailResult.value.success
  const telegramOk = telegramResult.status === 'fulfilled' && telegramResult.value.success

  if (!emailOk && !telegramOk) {
    console.log('Lead (fallback):', { name, phone })
  }

  return { success: emailOk || telegramOk }
}