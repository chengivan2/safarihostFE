import Count from '@/components/Count'
import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer/Footer'

import Testimonial from '@/components/Testimonial'
import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import Choose from '../../../components/Choose'
import Hero from './components/Hero'
import Integration from './components/Integration'
import Pricing from './components/Pricing'

export const metadata: Metadata = {
  title: 'SafariHost - Cloud Services',
}
const page = () => {
  return (
    <>
      
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Hero />
        <Choose />
        <Count />
        <Integration />
        <Pricing />
        <Testimonial />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default page
