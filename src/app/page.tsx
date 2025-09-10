import Hero from '@/components/sections/Hero'
import StoryCards from '@/components/sections/StoryCards'
import InteractiveSimulations from '@/components/sections/InteractiveSimulations'
import LiveDashboard from '@/components/sections/LiveDashboard'
import SafetySection from '@/components/sections/SafetySection'
import AdvertiserSection from '@/components/sections/AdvertiserSection'
import AboutSection from '@/components/sections/AboutSection'
import AppDownload from '@/components/sections/AppDownload'
import ContactSection from '@/components/sections/ContactSection'
import SidebarNavigation from '@/components/common/SidebarNavigation'
import Footer from '@/components/common/Footer'
import StickyCallToAction from '@/components/common/StickyCallToAction'

export default function Home() {
  return (
    <SidebarNavigation>
      <main className="min-h-screen">
        <Hero />
        <StoryCards />
        <InteractiveSimulations />
        <LiveDashboard />
        <SafetySection />
        <AdvertiserSection />
        <AboutSection />
        <AppDownload />
        <ContactSection />
      </main>
      <Footer />
      <StickyCallToAction />
    </SidebarNavigation>
  )
}