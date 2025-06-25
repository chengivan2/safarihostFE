
import CTA from '@/components/CTA'
import Footer1 from '@/components/Footer/Footer1'

import Testimonial from '@/components/Testimonial'
import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import Choose from './components/Choose'
import Hero from './components/Hero'
import Pricing from './components/Pricing'

export const metadata: Metadata = {
  title: 'SafariHost- Web Hosting',
}

const DomainPage = () => {
  return (
    <>
      
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Hero />
        <div className="space100" />
        <Choose />
        <Pricing />
        <Testimonial />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default DomainPage
