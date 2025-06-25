import Footer2 from '@/components/Footer/Footer2'

import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'

export const metadata: Metadata = {
  title: 'SafariHost- Web Hosting',
  
}
const Testimonial = () => {
  return (
    <>
      
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Hero />
        <Testimonials />
      </main>
      <Footer2 />
    </>
  )
}

export default Testimonial
