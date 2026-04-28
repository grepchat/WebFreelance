import Navbar from '@/components/vertex/Navbar'
import Hero from '@/components/vertex/Hero'
import Services from '@/components/vertex/Services'
import Portfolio from '@/components/vertex/Portfolio'
import Process from '@/components/vertex/Process'
import Calculator from '@/components/vertex/Calculator'
import Partners from '@/components/vertex/Partners'
import Testimonials from '@/components/vertex/Testimonials'
import Contact from '@/components/vertex/Contact'
import Footer from '@/components/vertex/Footer'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import SmoothScroll from '@/components/ui/SmoothScroll'
import ScrollToTop from '@/components/ui/ScrollToTop'

export default function VertexPage() {
  return (
    <>
      <ScrollProgressBar color="from-amber-400 to-amber-600" />
      <SmoothScroll />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Calculator />
        <Partners />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop bgColor="bg-amber-400" hoverBgColor="hover:bg-amber-500" />
    </>
  )
}
