import Footer from '@/components/Footer/Footer'

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
      <Footer />
    </>
  )
}

export default Testimonial
