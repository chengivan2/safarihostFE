import blog1 from '@/assets/img/blog/blog2-image1.png'
import blog2 from '@/assets/img/blog/blog2-image2.png'
import blog3 from '@/assets/img/blog/blog2-image3.png'
import { StaticImageData } from 'next/image'

type MoreBlogType = {
  date: string
  title: string
  image: StaticImageData
}

export const moreblog: MoreBlogType[] = [
  {
    date: '8 December 2025',
    title: 'Top 5 Plugins to A Enhance Your WordPress Hosting Experience',
    image: blog1,
  },
  {
    date: '5 August 2025',
    title: 'The Importance of Regular To Backups Your WordPress Site',
    image: blog2,
  },
  {
    date: '8 December 2025',
    title: 'Different Types of WordPress Hosting: Shared vs Dedicated',
    image: blog3,
  },
]
