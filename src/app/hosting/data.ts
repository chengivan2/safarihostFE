import Service1 from '@/assets/img/icons/service5-icon1.svg'
import Service2 from '@/assets/img/icons/service5-icon2.svg'
import Service3 from '@/assets/img/icons/service5-icon3.svg'
import Service4 from '@/assets/img/icons/service5-icon4.svg'
import Service6 from '@/assets/img/icons/service5-icon6.svg'
import { StaticImageData } from 'next/image'

export type ServiceType = {
  image: StaticImageData
  title: string
  name: string
  number: number
}

export const service: ServiceType[] = [
  {
    image: Service1,
    title: 'VPS Hosting',
    number: 300,
    name: 'service5-content1',
  },
  {
    image: Service2,
    title: 'Shared Hosting',
    number: 400,
    name: 'service5-content2',
  },
  {
    image: Service4,
    title: 'Cloud Hosting',
    number: 600,
    name: 'service5-content4',
  },
  {
    image: Service3,
    title: 'Dedicated Hosting',
    number: 500,
    name: 'service5-content3',
  },
  {
    image: Service6,
    title: 'WordPress Hosting',
    number: 400,
    name: 'service5-content5',
  },
]
