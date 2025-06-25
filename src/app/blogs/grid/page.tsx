import CTA from '@/components/CTA'
import Footer2 from '@/components/Footer/Footer2'
import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import {Metadata} from 'next'
import Blog from './components/Blog'
import Hero from './components/Hero'

export const metadata: Metadata = {
    title: 'SafariHost - Blog',
}

const Grid = () => {
    return (
        <>
            <TopBanner/>
            <TopNavBar1/>
            <main>
                <Hero/>
                <Blog/>
                <CTA/>
            </main>
            <Footer2/>
        </>
    )
}

export default Grid
