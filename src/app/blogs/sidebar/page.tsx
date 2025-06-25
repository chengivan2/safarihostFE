import CTA from '@/components/CTA'
import Footer from '@/components/Footer/Footer'

import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import Blog from './components/Blog'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'SafariHost - Blog Sidebar',
}

const Sidebar = () => {
  return (
    <>
      
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Hero />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default Sidebar
