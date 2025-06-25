
import Footer1 from '@/components/Footer/Footer1'
import Hero from '@/components/Hero'

import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import Blog from './components/Blog'
import MoreBlog from './components/MoreBlog'

export const metadata: Metadata = {
  title: 'SafariHost - Blog Detail Left',
}

const BlogDetailLeft = () => {
  return (
    <>
      
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Hero />
        <Blog />
        <MoreBlog />
      </main>
      <Footer1 />
    </>
  )
}

export default BlogDetailLeft
