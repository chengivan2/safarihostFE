import Footer2 from '@/components/Footer/Footer2'
import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import FAQ from './components/FAQ'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'SafariHost - FAQ',
}
const page = () => {
  return (
    <>
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Hero />
        <FAQ />
      </main>
      <Footer2 />
    </>
  )
}

export default page
