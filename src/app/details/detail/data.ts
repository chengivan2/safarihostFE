import { StaticImageData } from 'next/image'

import blog1 from '@/assets/img/blog/blog2-image1.png'
import blog2 from '@/assets/img/blog/blog2-image2.png'
import blog3 from '@/assets/img/blog/blog2-image3.png'

export type BlogType = {
  image: StaticImageData
  title: string
  date: string
  number: number
}

export const blog: BlogType[] = [
  {
    image: blog1,
    title: 'Top 5 Plugins to A Enhance Your WordPress Hosting Experience',
    date: '8 December 2025',
    number: 800,
  },
  {
    image: blog2,
    title: 'The Importance of Regular To Backups Your WordPress Site',
    date: '5 August 2025',
    number: 1000,
  },
  {
    image: blog3,
    title: 'Different Types of WordPress Hosting: Shared vs Dedicated',
    date: '15 August 2025',
    number: 1200,
  },
]
