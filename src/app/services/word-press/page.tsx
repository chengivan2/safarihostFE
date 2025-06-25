
import Choose from '@/components/Choose'
import Count from '@/components/Count'
import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import Footer1 from '@/components/Footer/Footer1'

import PricingPlan from '@/components/PricingPlan'
import Testimonial from '@/components/Testimonial'
import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import Features from './components/Features'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'SafariHost- Web Hosting',
  
}
const WordPress = () => {
  return (
    <>
      
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Hero />
        <Choose />
        <div className="space100" />
        <Features />
        <PricingPlan />
        <Count />
        <Faq />
        <Testimonial />
        <div className="space100" />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default WordPress
