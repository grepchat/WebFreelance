import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Portfolio from '@/components/home/Portfolio'
import ContactForm from '@/components/home/ContactForm'
import Footer from '@/components/home/Footer'
import { LanguageProvider } from '@/context/LanguageContext'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white">
        <Hero />
        <About />
        <Portfolio />
        <ContactForm />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
