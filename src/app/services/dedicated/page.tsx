
import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Footer1 from '@/components/Footer/Footer1'

import OurFeatures from '@/components/OurFeatures'
import PricingPlan from '@/components/PricingPlan'
import Testimonial from '@/components/Testimonial'
import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'SafariHost- Web Hosting',
  
}
const Dedicated = () => {
  return (
    <>
      
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Hero />
        <PricingPlan />
        <Features />
        <OurFeatures />
        <Testimonial />
        <Faq />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default Dedicated
