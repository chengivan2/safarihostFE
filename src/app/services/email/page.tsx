
import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import Footer1 from '@/components/Footer/Footer1'
import Hosting from '@/components/Hosting'

import OurFeatures from '@/components/OurFeatures'
import Testimonial from '@/components/Testimonial'
import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import Hero from './components/Hero'
import Service from './components/Service'

export const metadata: Metadata = {
  title: 'SafariHost- Web Hosting',
  
}
const Email = () => {
  return (
    <>
      
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Hero />
        <Service />
        <OurFeatures />
        <Hosting />
        <Faq />
        <Testimonial />
        <div className="space100" />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default Email
