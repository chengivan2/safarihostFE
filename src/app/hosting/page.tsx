import CTA from '@/components/CTA'
import Footer2 from '@/components/Footer/Footer2'

import Testimonial from '@/components/Testimonial'
import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import Hero from './components/Hero'
import Service from './components/Service'
import WorkArea from './components/WorkArea'

export const metadata: Metadata = {
  title: 'SafariHost - Web Hosting',
  description: 'Experience lightning-fast web hosting with SafariHost. Our reliable and secure hosting solutions are designed to keep your website running smoothly. Get started today!',
}
const Hosting = () => {
  return (
    <>
      
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Hero />
        <Service />
        <WorkArea />
        <Testimonial />
        <CTA />
      </main>
      <Footer2 />
    </>
  )
}

export default Hosting
