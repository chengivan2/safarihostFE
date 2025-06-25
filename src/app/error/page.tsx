import Footer2 from '@/components/Footer/Footer2'

import TopBanner from '@/components/TopNav/TopBanner'
import TopNavBar1 from '@/components/TopNav/TopNavBar1'
import { Metadata } from 'next'
import Error from './components/Error'

export const metadata: Metadata = {
  title: 'SafariHost - Error',
}
const ErrorPage = () => {
  return (
    <>
      
      <TopBanner />
      <TopNavBar1 />
      <main>
        <Error />
      </main>
      <Footer2 />
    </>
  )
}

export default ErrorPage
