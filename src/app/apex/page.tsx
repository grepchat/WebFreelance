import Navbar from '@/components/apex/Navbar'
import Hero from '@/components/apex/Hero'
import Services from '@/components/apex/Services'
import Process from '@/components/apex/Process'
import Gallery from '@/components/apex/Gallery'
import VideoTestimonials from '@/components/apex/VideoTestimonials'
import Calculator from '@/components/apex/Calculator'
import Pricing from '@/components/apex/Pricing'
import Testimonials from '@/components/apex/Testimonials'
import FAQ from '@/components/apex/FAQ'
import Contact from '@/components/apex/Contact'
import Footer from '@/components/apex/Footer'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import SmoothScroll from '@/components/ui/SmoothScroll'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Preloader from '@/components/apex/Preloader'

export default function ApexPage() {
  return (
    <>
      <Preloader />
      <ScrollProgressBar color="from-red-500 to-red-700" />
      <SmoothScroll />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Gallery />
        <VideoTestimonials />
        <Calculator />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop bgColor="bg-red-600" hoverBgColor="hover:bg-red-700" color="text-white" />
    </>
  )
}

