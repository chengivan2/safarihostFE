
import Count from '@/components/Count'
import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Footer2 from '@/components/Footer/Footer2'
import Hosting from '@/components/Hosting'

import Testimonial from '@/components/Testimonial'
import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import Hero from './components/Hero'
import Pricing from './components/Pricing'

export const metadata: Metadata = {
  title: 'SafariHost- Web Hosting',
  
}
const VIPHosting = () => {
  return (
    <>
      
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Hero />
        <Pricing />
        <Features />
        <Hosting />
        <Count />
        <Faq />
        <Testimonial />
        <div className="space100" />
        <CTA />
      </main>
      <Footer2 />
    </>
  )
}

export default VIPHosting
