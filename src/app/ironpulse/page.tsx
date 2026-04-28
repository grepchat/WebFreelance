import Navbar from '@/components/ironpulse/Navbar'
import Hero from '@/components/ironpulse/Hero'
import Programs from '@/components/ironpulse/Programs'
import Results from '@/components/ironpulse/Results'
import Coach from '@/components/ironpulse/Coach'
import Pricing from '@/components/ironpulse/Pricing'
import Testimonials from '@/components/ironpulse/Testimonials'
import Contact from '@/components/ironpulse/Contact'
import Footer from '@/components/ironpulse/Footer'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import SmoothScroll from '@/components/ui/SmoothScroll'
import ScrollToTop from '@/components/ui/ScrollToTop'

export default function IronpulsePage() {
  return (
    <>
      <ScrollProgressBar color="from-orange-500 to-orange-600" />
      <SmoothScroll />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Programs />
        <Results />
        <Coach />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop bgColor="bg-orange-500" hoverBgColor="hover:bg-orange-600" />
    </>
  )
}
