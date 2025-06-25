import { StaticImageData } from 'next/image'

import Service1 from '@/assets/img/icons/service1-icon1.svg'
import Service2 from '@/assets/img/icons/service1-icon2.svg'
import Service3 from '@/assets/img/icons/service1-icon3.svg'
import Service4 from '@/assets/img/icons/service1-icon4.svg'
import Service5 from '@/assets/img/icons/service1-icon5.svg'
import Service6 from '@/assets/img/icons/service1-icon6.svg'

import Icon1 from '@/assets/img/icons/service3-icon1.svg'
import Icon2 from '@/assets/img/icons/service3-icon2.svg'
import Icon3 from '@/assets/img/icons/service3-icon3.svg'
import Icon4 from '@/assets/img/icons/service3-icon4.svg'

import Blog1 from '@/assets/img/blog/blog4-image1.png'
import Blog2 from '@/assets/img/blog/blog4-image2.png'

import Image1 from '@/assets/img/apps/apps2-image1.png'
import Image2 from '@/assets/img/apps/apps2-image2.png'
import Image3 from '@/assets/img/apps/apps2-image3.png'
import Image4 from '@/assets/img/apps/apps2-image4.png'
import Image5 from '@/assets/img/apps/apps2-image5.png'
import Image6 from '@/assets/img/apps/apps2-image6.png'
import Image7 from '@/assets/img/apps/apps2-image7.png'
import Image8 from '@/assets/img/apps/apps2-image8.png'

import Choose1 from '@/assets/img/icons/choose1-icon1.svg'
import Choose2 from '@/assets/img/icons/choose1-icon2.svg'
import Choose3 from '@/assets/img/icons/choose1-icon3.svg'

import Shape1 from '@/assets/img/shapes/choose1-arrow-shape.png'

import img1 from '@/assets/img/testimonial/tes1-image1.png'
import img2 from '@/assets/img/testimonial/tes1-image2.png'
import img3 from '@/assets/img/testimonial/tes1-image3.png'

import blog1 from '@/assets/img/blog/blog2-image1.png'
import blog2 from '@/assets/img/blog/blog2-image2.png'
import blog3 from '@/assets/img/blog/blog2-image3.png'
import blog4 from '@/assets/img/blog/blog2-image4.png'
import blog5 from '@/assets/img/blog/blog2-image5.png'
import blog6 from '@/assets/img/blog/blog2-image6.png'
import blog7 from '@/assets/img/blog/blog2-image7.png'
import blog8 from '@/assets/img/blog/blog2-image8.png'
import blog9 from '@/assets/img/blog/blog2-image9.png'

import Blogs2 from '@/assets/img/blog/recent-blog1.png'
import Blog3 from '@/assets/img/blog/recent-blog2.png'
import Blog4 from '@/assets/img/blog/recent-blog3.png'
import Blog9 from '@/assets/img/blog/recent-blog4.png'

export type ServiceType = {
  image: StaticImageData
  title: string
  comment: string
  number: number
}

export type TestimonialType = {
  description: string
  title: string
  product: string
}

export type TestimonialsType = {
  image: StaticImageData
  name: string
  title: string
}

export type BlogType = {
  image: StaticImageData
  description: string
  number: number
}

export type Pricing = {
  title: string
}

export type IntergrationsType = {
  image: StaticImageData
  title: string
  number: number
}

export type MapType = {
  title: string
}

export const maps: MapType[] = [
  {
    title: 'Russia',
  },
  {
    title: 'Belgiam',
  },
  {
    title: 'Chaina',
  },
  {
    title: 'England',
  },
  {
    title: 'India',
  },
  {
    title: 'Bhutan',
  },
  {
    title: 'Spain',
  },
  {
    title: 'England',
  },
  {
    title: 'Russia',
  },
  {
    title: 'Germany',
  },
]

export type ChooseType = {
  image: StaticImageData
  title: string
  comment: string
  number: number
  avtar?: StaticImageData
}

export type FaqType = {
  question: string
}

export type ServiceType2 = {
  image: StaticImageData
  title: string
  comment: string
  number: number
}

export type BlogsType = {
  image: StaticImageData
  title: string
  date: string
  number: number
}

export type PopularType = {
  title: string
}

export type Blog2Type = {
  title: string
}

export type CategoryType = {
  title: string
}

export type Blog3Type = {
  image: StaticImageData
  title: string
  date: string
  number: number
}


export type Pricing2Type = {
  title: string
}

export const pricing2: Pricing[] = [
  {
    title: 'Free Domain ($9.87)',
  },
  {
    title: 'Unlimited Website',
  },
  {
    title: 'Weekly On Backups',
  },
  {
    title: 'Unlimited Free SSL',
  },
  {
    title: 'Dedicated IP Address',
  },
  {
    title: '100 GB SSD Storage',
  },
  {
    title: '24/7 System Monitoring',
  },
  {
    title: '20+ Payment Methods',
  },
]

export const latestblogs: Blog3Type[] = [
  {
    image: Blogs2,
    title: 'The Importance of Regular To Backups Your WordPress Site',
    date: '5 August 2025',
    number: 1000,
  },
  {
    image: Blog3,
    title: 'Different Types of WordPress Hosting: Shared vs Dedicated',
    date: '15 August 2025',
    number: 1200,
  },
  {
    image: Blog4,
    title: 'Why Choosing the Right Web Hosting Provider Of Matters',
    date: '15 August 2025',
    number: 1200,
  },
  {
    image: Blog9,
    title: 'The Pros and Cons of Managed vs. Unmanaged Web Hosting',
    date: '15 August 2025',
    number: 1200,
  },
]

export const category: CategoryType[] = [
  {
    title: 'VPS Hosting',
  },
  {
    title: 'Shared Hosting',
  },
  {
    title: 'Cloud Hosting',
  },
  {
    title: 'WordPress Hosting',
  },
  {
    title: 'Email Hosting',
  },
  {
    title: 'Dedicated Hosting',
  },
]

export const links: Blog2Type[] = [
  {
    title: 'Protects Against Data Loss',
  },
  {
    title: 'Ensures Quick Recovery',
  },
  {
    title: 'Provides Peace of Mind',
  },
]

export const links2: Blog2Type[] = [
  {
    title: 'Safeguards Security Breaches',
  },
  {
    title: 'Protects Against Human Error',
  },
  {
    title: 'Compliance Requirements',
  },
]

export const popular: PopularType[] = [
  {
    title: 'Web Hosting',
  },
  {
    title: 'Dedicated Hosting',
  },
  {
    title: 'Managed Hosting',
  },
  {
    title: 'Reseller Hosting',
  },
  {
    title: 'Cloud Hosting',
  },
  {
    title: 'Hosting Perfomance',
  },
  {
    title: 'server management',
  },
  {
    title: 'open source',
  },
]

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
  {
    image: blog9,
    title: 'The Pros and Cons of Managed vs. Unmanaged Web Hosting',
    date: '15 August 2025',
    number: 1200,
  },
]

export const faq: FaqType[] = [
  {
    question: 'Can I upgrade or downgrade my hosting plan?',
  },
  {
    question: 'What is SSL certificate, do you provide one?',
  },
  {
    question: "How do you ensure my website's security?",
  },
  {
    question: 'Can I install custom software on my server?',
  },
  {
    question: 'How do I transfer my domain to your service?',
  },
]

export const testimonials: TestimonialsType[] = [
  {
    image: img1,
    name: 'Samuel Kiehn',
    title: 'LMN Enterprises',
  },
  {
    image: img2,
    name: 'Alberta Moore',
    title: 'Businessman',
  },
  {
    image: img3,
    name: 'Lana Bogisichr',
    title: 'UVW Company',
  },
  {
    image: img1,
    name: 'Samuel Kiehn',
    title: 'LMN Enterprises',
  },
  {
    image: img2,
    name: 'Alberta Moore',
    title: 'Businessman',
  },
  {
    image: img3,
    name: 'Lana Bogisichr',
    title: 'UVW Company',
  },
]

export const intergration: IntergrationsType[] = [
  {
    image: Image1,
    title: 'PHP Version Control',
    number: 800,
  },
  {
    image: Image2,
    title: 'Speed Optimizes',
    number: 1000,
  },
  {
    image: Image3,
    title: 'Free All Migration',
    number: 1200,
  },
  {
    image: Image4,
    title: 'Regular All Backup',
    number: 900,
  },
  {
    image: Image5,
    title: 'eCommerce Shop',
    number: 1100,
  },
  {
    image: Image6,
    title: 'Free SSL Certificate',
    number: 1200,
  },
  {
    image: Image7,
    title: 'Drupal Hosting',
    number: 700,
  },
  {
    image: Image8,
    title: 'WP Version Control',
    number: 1000,
  },
]

export const testimonial: TestimonialType[] = [
  {
    description:
      "We've integrated the POS software with our online store, and it's made managing both so much easier. The synchronization between our physical and online inventory is seamless, &amp; the centralized data helps",
    title: 'Thomas Muller ',
    product: 'Amazon Market',
  },
  {
    description:
      "We've integrated the POS software with our online store, and it's made managing both so much easier. The synchronization between our physical and online inventory is seamless, &amp; the centralized data helps",
    title: 'Thomas Muller ',
    product: 'Amazon Market',
  },
]

export const pricing: Pricing[] = [
  {
    title: 'Unlimited Website',
  },
  {
    title: 'Weekly On Backups',
  },
  {
    title: 'Unlimited Free SSL',
  },
  {
    title: 'Dedicated IP Address',
  },
]

export const blog: BlogType[] = [
  {
    image: Blog1,
    description: '15+ Essential Tips for Choosing the Right Web Hosting Service',
    number: 900,
  },
  {
    image: Blog2,
    description: 'The Ultimate Guide to Securing Your Website: A Best Practices',
    number: 1100,
  },
]

export const service: ServiceType[] = [
  {
    image: Service1,
    title: 'VPS Hosting',
    comment: 'Virtual Private Server (VPS) hosting is a powerful solution for businesses and individuals who need more an control.',
    number: 300,
  },
  {
    image: Service2,
    title: 'Shared Hosting',
    comment: "In shared hosting, multiple websites are hosted on a single server, sharing the server's resources such as CPU.",
    number: 400,
  },
  {
    image: Service3,
    title: 'Cloud Hosting',
    comment: 'Cloud hosting is a modern and highly scalable web hosting solution that to utilizes a network of virtual servers.',
    number: 500,
  },
  {
    image: Service4,
    title: 'WordPress Hosting',
    comment: "WordPress hosting is a specialized web hosting service special optimized for to WordPress, the world's most popular.",
    number: 600,
  },
  {
    image: Service5,
    title: 'Email Hosting',
    comment: 'Cloud hosting is a modern and highly scalable web hosting solution that to utilizes a network of virtual servers.',
    number: 700,
  },
  {
    image: Service6,
    title: 'Dedicated Hosting',
    comment: 'Dedicated hosting is premium web to hosting solution where entire server is dedicated to a single client or website.',
    number: 400,
  },
]

export const choose: ChooseType[] = [
  {
    image: Choose1,
    title: 'Safe And Secure',
    comment: 'Managing your website is a breeze to with our intuitive control panel.',
    number: 800,
    avtar: Shape1,
  },
  {
    image: Choose2,
    title: 'Money Back Guarantee',
    comment: "We prioritize your website's security, implementing advance measures like.",
    number: 1000,
    avtar: Shape1,
  },
  {
    image: Choose3,
    title: 'Dedicated Support',
    comment: 'We care about the planet as much as we care about your to website.',
    number: 1200,
  },
]

export const service3: ServiceType2[] = [
  {
    image: Icon1,
    title: 'Fast And Reliable',
    comment: 'Our Shared Hosting solutions designed to the provide top-tier performance &amp; security hosting without breaking bank.',
    number: 800,
  },
  {
    image: Icon2,
    title: '24/7 Customer Support',
    comment: 'Our Shared Hosting solutions designed to the provide top-tier performance &amp; security hosting without breaking bank.',
    number: 1000,
  },
]
export const service2: ServiceType2[] = [
  {
    image: Icon3,
    title: 'Use Control Panel',
    comment: 'Our Shared Hosting solutions designed to the provide top-tier performance &amp; security hosting without breaking bank.',
    number: 800,
  },
  {
    image: Icon4,
    title: 'One-Click Innstalltions',
    comment: 'Our Shared Hosting solutions designed to the provide top-tier performance &amp; security hosting without breaking bank.',
    number: 1000,
  },
]
