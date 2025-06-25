import CTA from '@/components/CTA'
import Footer1 from '@/components/Footer/Footer1'

import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import {Metadata} from 'next'
import Hero from './components/Hero'
import Support from './components/Support'

export const metadata: Metadata = {
    title: 'Contact SafariHost',
}

const Contact = () => {
    return (
        <>

            <TopBanner/>
            <TopNavBar1/>
            <main>
                <Hero/>
                <Support/>
                <CTA/>
            </main>
            <Footer1/>
        </>
    )
}

export default Contact
