import icon1 from '@/assets/img/icons/contact-page-icon1.svg'
import icon2 from '@/assets/img/icons/contact-page-icon2.svg'
import icon3 from '@/assets/img/icons/contact-page-icon3.svg'
import { StaticImageData } from 'next/image'

export type SupportType = {
  image: StaticImageData
  title: string
  comment: string
}

export const support: SupportType[] = [
  {
    image: icon1,
    title: 'Our Email',
    comment: 'Needhelp@gmail.com',
  },
  {
    image: icon2,
    title: 'Phone',
    comment: '+1 123 456 7890',
  },
  {
    image: icon3,
    title: 'Schedule',
    comment: 'Sunday-Fri: 9 AM – 6 PM',
  },
]
