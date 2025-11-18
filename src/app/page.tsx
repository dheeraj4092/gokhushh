import HeroWithStory from '@/components/sections/HeroWithStory'
import PhoneTransition from '@/components/sections/PhoneTransition'
import InteractiveSimulations from '@/components/sections/InteractiveSimulations'
import { GokhushHeroVideo } from '@/components/sections/HeroVideoSection'
import GokhushTestimonials from '@/components/sections/TestimonialsSection'
// import LiveDashboard from '@/components/sections/LiveDashboard'
import SafetySection from '@/components/sections/SafetySection'
import AdvertiserSection from '@/components/sections/AdvertiserSection'
import AboutSection from '@/components/sections/AboutSection'
import AppDownload from '@/components/sections/AppDownload'
import ContactSection from '@/components/sections/ContactSection'
import GradientNavigation from '@/components/common/GradientNavigation'
import Footer from '@/components/common/Footer'
import StickyCallToAction from '@/components/common/StickyCallToAction'
import ScrollToTop from '@/components/common/ScrollToTop'

export default function Home() {
  return (
    <>
      {/* Scroll to top on page load */}
      <ScrollToTop />
      
      {/* Main Layout with Dock Navigation */}
      <main className="min-h-screen bg-brand-black">
        <HeroWithStory />
        <PhoneTransition />
        <InteractiveSimulations />
        <GokhushHeroVideo />
        <GokhushTestimonials />
        {/* <LiveDashboard /> */}
        <SafetySection />
        <AdvertiserSection />
        <AboutSection />
        <AppDownload />
        <ContactSection />
      </main>
      
      {/* Gradient Navigation - appears on scroll */}
      <GradientNavigation />
      
      {/* Footer and CTA */}
      <Footer />
      <StickyCallToAction />
    </>
  )
}