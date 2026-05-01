import type { Metadata } from 'next'
import {
  Manrope,
  Playfair_Display,
  Montserrat,
  Bebas_Neue,
  Inter,
  Space_Grotesk,
  DM_Sans,
  Archivo_Black,
  Oswald,
  Roboto,
} from 'next/font/google'
import '@/styles/globals.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
})
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})
const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})
const dmsans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  display: 'swap',
})
const archivo = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo',
  display: 'swap',
})
const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-oswald',
  display: 'swap',
})
const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

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
      <body
        className={`
          ${manrope.variable} ${playfair.variable}
          ${montserrat.variable} ${bebas.variable}
          ${inter.variable} ${space.variable}
          ${dmsans.variable} ${archivo.variable}
          ${oswald.variable} ${roboto.variable}
        `}
      >
        {children}
      </body>
    </html>
  )
}
