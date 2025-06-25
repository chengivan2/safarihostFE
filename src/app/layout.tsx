import type {Metadata} from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import 'swiper/swiper-bundle.css'
import 'slick-carousel/slick/slick.css'
import 'nice-select2/dist/css/nice-select2.css'
import 'react-circular-progressbar/dist/styles.css'
import '@/assets/scss/main.scss'

import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import {Nunito_Sans, Outfit} from 'next/font/google'

const Nunito = Nunito_Sans({
    display: 'swap',
    style: ['normal'],
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
})

const Outfits = Outfit({
    display: 'swap',
    style: ['normal'],
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
    title: 'SafariHost - Reliable Affordable Hosting Solutions',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${Nunito.className} ${Outfits.className}`}>
        <AppProvidersWrapper>{children}</AppProvidersWrapper>
        </body>
        </html>
    )
}
