import Navbar from '@/components/lumiere/Navbar'
import Hero from '@/components/lumiere/Hero'
import Services from '@/components/lumiere/Services'
import About from '@/components/lumiere/About'
import Gallery from '@/components/lumiere/Gallery'
import Promotion from '@/components/lumiere/Promotion'
import Testimonials from '@/components/lumiere/Testimonials'
import Contact from '@/components/lumiere/Contact'
import Footer from '@/components/lumiere/Footer'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import SmoothScroll from '@/components/ui/SmoothScroll'
import ScrollToTop from '@/components/ui/ScrollToTop'

export default function LumierePage() {
  return (
    <>
      <ScrollProgressBar color="from-amber-400 to-amber-500" />
      <SmoothScroll />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Promotion />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop bgColor="bg-amber-400" hoverBgColor="hover:bg-amber-500" />
    </>
  )
}
