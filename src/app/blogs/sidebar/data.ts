import blog1 from '@/assets/img/blog/blog2-image1.png'
import blog2 from '@/assets/img/blog/blog2-image2.png'
import blog3 from '@/assets/img/blog/blog2-image3.png'
import blog4 from '@/assets/img/blog/blog2-image4.png'
import blog5 from '@/assets/img/blog/blog2-image5.png'
import blog6 from '@/assets/img/blog/blog2-image6.png'
import blog7 from '@/assets/img/blog/blog2-image7.png'
import blog8 from '@/assets/img/blog/blog2-image8.png'
import { StaticImageData } from 'next/image'

export type BlogsType = {
  image: StaticImageData
  title: string
  date: string
  number: number
}

export const blogs: BlogsType[] = [
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
  {
    image: blog4,
    title: 'Why Choosing the Right Web Hosting Provider Of Matters',
    date: '15 August 2025',
    number: 1200,
  },
  {
    image: blog5,
    title: 'Different Types of Web Hosting: Shared, VPS, Dedicated, Cloud',
    date: '15 August 2025',
    number: 1200,
  },
  {
    image: blog6,
    title: 'How 100% Uptime Impacts to Your Business Hosting Success',
    date: '15 August 2025',
    number: 1200,
  },
  {
    image: blog7,
    title: 'The Benefits of Embracing Of Open Source in Development',
    date: '15 August 2025',
    number: 1200,
  },
  {
    image: blog8,
    title: 'How We Ensure Security in Our Web Hosting Services',
    date: '15 August 2025',
    number: 1200,
  },
]
