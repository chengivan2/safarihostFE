import { StaticImageData } from 'next/image'

import Icon1 from '@/assets/img/icons/service-details2-hero-icon1.svg'
import Icon2 from '@/assets/img/icons/service-details2-hero-icon2.svg'
import Icon3 from '@/assets/img/icons/service-details2-hero-icon3.svg'
import Icon4 from '@/assets/img/icons/service-details2-hero-icon4.svg'

export type BoxAreaType = {
  image: StaticImageData
  title: string
}

export const box: BoxAreaType[] = [
  {
    image: Icon1,
    title: ' Safe And Secured',
  },
  {
    image: Icon2,
    title: '99.99% Uptime ',
  },
  {
    image: Icon3,
    title: 'Automatic Update ',
  },
  {
    image: Icon4,
    title: 'Speed Guarantee ',
  },
]
