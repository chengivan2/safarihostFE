
import Count from '@/components/Count'
import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer/Footer'
import Hosting from '@/components/Hosting'

import Testimonial from '@/components/Testimonial'
import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import {Metadata} from 'next'
import BoxArea from './components/BoxArea'
import Features from './components/Features'
import Hero from './components/Hero'

export const metadata: Metadata = {
    title: 'SafariHost - Reliable & Affordable Hosting',
}
const Shared = () => {
    return (
        <>

            <TopBanner/>
            <TopNavBar1/>
            <main>
                <Hero/>
                <BoxArea/>
                <Count/>
                <Features/>
                <Hosting/>
                <Testimonial/>
                <Faq/>
                <CTA/>
            </main>
            <Footer/>
        </>
    )
}

export default Shared
