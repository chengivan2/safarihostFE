
import CTA from '@/components/CTA'
import Footer from '@/components/Footer/Footer'

import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import {Metadata} from 'next'
import Testimonial from '../../components/Testimonial'
import About from './components/About'
import Blog from './components/Blog'
import Choose from './components/Choose'
import Features from './components/Features'
import Hero from './components/Hero'

export const metadata: Metadata = {
    title: 'SafariHost - About Us',
}
const AboutUs = () => {
    return (
        <>
            <TopBanner/>
            <TopNavBar1/>
            <main>
                <Hero/>
                <About/>
                <Choose/>
                <Features/>
                <Testimonial/>
                <Blog/>
                <CTA/>
            </main>
            <Footer/>
        </>
    )
}

export default AboutUs
