import CTA from '@/components/CTA'
import Footer from '@/components/Footer/Footer'

import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import DomainName from './components/DomainName'
import Hero from './components/Hero'
import PricingPlan from './components/PricingPlan'

export const metadata: Metadata = {
  title: 'SafariHost - Pricing',
}

const Pricing = () => {
  return (
    <>
      
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Hero />
        <PricingPlan />
        <DomainName />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default Pricing
