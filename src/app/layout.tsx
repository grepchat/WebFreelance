import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Grepchat Landings',
  description: 'Портфолио продающих лендингов для бизнеса от grepchat',
  icons: {
    icon: [
      {
        url: '/favicon/favicon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
