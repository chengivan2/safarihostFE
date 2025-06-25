import { StaticImageData } from 'next/image'

import Blog1 from '@/assets/img/blog/blog6-image1.png'
import Blog2 from '@/assets/img/blog/blog6-image2.png'
import Blog3 from '@/assets/img/blog/blog6-image3.png'

import Service1 from '@/assets/img/icons/service6-icon1.svg'
import Service2 from '@/assets/img/icons/service6-icon2.svg'
import Service3 from '@/assets/img/icons/service6-icon3.svg'
import Service4 from '@/assets/img/icons/service6-icon4.svg'
import Service5 from '@/assets/img/icons/service6-icon5.svg'
import Service6 from '@/assets/img/icons/service6-icon6.svg'

export type ServiceType = {
  image: StaticImageData
  title: string
  comment: string
  number: number
}

export type ChooseUsType = {
  title: string
}

export type BlogType = {
  image: StaticImageData
  date: string
  comment: string
  number: number
}

export const blog: BlogType[] = [
  {
    image: Blog1,
    date: '8 December 2025',
    comment: 'Top 5 Plugins to A Enhance Your WordPress Hosting Experience',
    number: 800,
  },
  {
    image: Blog2,
    date: '5 August 2025',
    comment: 'The Importance of Regular To Backups Your WordPress Site',
    number: 1000,
  },
  {
    image: Blog3,
    date: '15 August 2025',
    comment: 'Different Types of WordPress Hosting: Shared vs Dedicated',
    number: 1200,
  },
]



export const choose: ChooseUsType[] = [
  {
    title: '99.99% Uptime Guarantee',
  },
  {
    title: '24/7 Dedicated Support',
  },
  {
    title: 'Easy Management Tools',
  },
  {
    title: 'Proven Customer Satisfaction',
  },
]

export const choose2: ChooseUsType[] = [
  {
    title: 'Scalable Solutions',
  },
  {
    title: 'Eco-Friendly Hosting',
  },
  {
    title: 'Transparent Pricing',
  },
  {
    title: 'Easy Management Tools',
  },
]

export const service: ServiceType[] = [
  {
    image: Service1,
    title: 'High Speed Performance',
    comment: 'Experience blazing-fast load times with our SSD-powered servers and optimized infrastructure.',
    number: 700,
  },
  {
    image: Service2,
    title: 'Seamless Scalability',
    comment: 'Easily adjust your resources as your business grows. With our flexible plans, down is just a few clicks away.',
    number: 900,
  },
  {
    image: Service3,
    title: 'Unparalleled Uptime',
    comment: 'Say goodbye to downtime with our 99.99% uptime guarantee, supported reliable multi-server infrastructure. ',
    number: 1000,
  },
  {
    image: Service4,
    title: 'Robust Security',
    comment: ' Protect your data with cutting-edge security features, including firewalls, encryption, vulnerability assessments.',
    number: 1300,
  },
  {
    image: Service5,
    title: 'Easy-to-Use Control Panel',
    comment: 'Manage your hosting effortlessly with an intuitive dashboard designed for all skill levels from domain management.',
    number: 1100,
  },
  {
    image: Service6,
    title: '24/7 Expert Support',
    comment: 'Our dedicated support team is always available to assist you, ensuring your hosting experience remains.',
    number: 900,
  },
]
