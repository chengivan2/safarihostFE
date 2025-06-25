import { StaticImageData } from 'next/image'


import Blog1 from '@/assets/img/blog/blog1-image1.png'
import Blog2 from '@/assets/img/blog/blog1-image2.png'
import Blog3 from '@/assets/img/blog/blog1-image3.png'


export type BlogType = {
  image: StaticImageData
  comment: string
  number: number
}

export const blog: BlogType[] = [
  {
    image: Blog1,
    comment: 'Building For Business Consulting Strategies Navigate Uncertainty ',
    number: 700,
  },
  {
    image: Blog2,
    comment: 'Join the thousands businesses that trust SafariHost for reliable, security',
    number: 900,
  },
  {
    image: Blog3,
    comment: 'Simplify your web hosting with SafariHost intuitive best platform',
    number: 1100,
  },
]
