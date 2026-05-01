'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Phone, Mail } from 'lucide-react'
import { submitContactForm } from '@/lib/contact'
import { useLanguage } from '@/context/LanguageContext'
import PrivacyPolicyModal from '@/components/ui/PrivacyPolicyModal'

export default function ContactForm() {
  const { t } = useLanguage()
  const c = t.contact
  const [privacyOpen, setPrivacyOpen] = useState(false)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [messenger, setMessenger] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    setLoading(true)
    const result = await submitContactForm(name, phone, messenger, message)
    setLoading(false)
    if (result.success) {
      setSubmitted(true)
      setName('')
      setPhone('')
      setMessenger('')
      setMessage('')
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      setSubmitError('Не удалось отправить заявку. Проверьте настройки EmailJS и попробуйте снова.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{c.badge}</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">{c.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {c.description}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <span>{c.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <span>{c.telegram}</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              {submitted ? (
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{c.form.thanks}</h3>
                  <p className="text-gray-600">{c.form.thanksDesc}</p>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{c.form.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                      placeholder={c.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{c.form.phoneLabel}</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                      placeholder={c.form.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{c.form.messengerLabel}</label>
                    <input
                      type="text"
                      value={messenger}
                      onChange={(e) => setMessenger(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                      placeholder={c.form.messengerPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{c.form.messageLabel}</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white resize-none"
                      placeholder={c.form.messagePlaceholder}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <><Send className="w-4 h-4" /> {c.form.submit}</>
                    )}
                  </button>
                  <p className="text-xs text-center text-gray-400">
                    {c.form.privacyBefore}
                    <button
                      type="button"
                      onClick={() => setPrivacyOpen(true)}
                      className="text-blue-600 underline decoration-blue-600/30 underline-offset-2 hover:decoration-blue-600"
                    >
                      {c.form.privacyLink}
                    </button>
                  </p>
                  {submitError ? (
                    <p className="text-sm text-center text-red-600">{submitError}</p>
                  ) : null}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      <PrivacyPolicyModal
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title={t.privacyPolicy.title}
        closeLabel={t.privacyPolicy.close}
        sections={t.privacyPolicy.sections}
        variant="light"
      />
    </section>
  )
}