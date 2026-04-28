import Navbar from '@/components/codeforge/Navbar'
import Hero from '@/components/codeforge/Hero'
import Benefits from '@/components/codeforge/Benefits'
import Curriculum from '@/components/codeforge/Curriculum'
import Expert from '@/components/codeforge/Expert'
import Testimonials from '@/components/codeforge/Testimonials'
import Pricing from '@/components/codeforge/Pricing'
import FAQ from '@/components/codeforge/FAQ'
import CTA from '@/components/codeforge/CTA'
import Footer from '@/components/codeforge/Footer'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import SmoothScroll from '@/components/ui/SmoothScroll'
import ScrollToTop from '@/components/ui/ScrollToTop'

export default function CodeForgePage() {
  return (
    <>
      <ScrollProgressBar color="from-blue-500 to-purple-600" />
      <SmoothScroll />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Benefits />
        <Curriculum />
        <Expert />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>
      <ScrollToTop bgColor="bg-blue-600" hoverBgColor="hover:bg-blue-700" color="text-white" />
    </>
  )
}
