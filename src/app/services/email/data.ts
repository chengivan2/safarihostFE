import { StaticImageData } from 'next/image'

import Icon1 from '@/assets/img/icons/service1-icon1.svg'
import Icon2 from '@/assets/img/icons/service1-icon2.svg'
import Icon3 from '@/assets/img/icons/service1-icon3.svg'

export type ServiceType = {
  image: StaticImageData
  title: string
  comment: string
  number: number
}

export const service: ServiceType[] = [
  {
    image: Icon1,
    title: 'VPS Hosting',
    comment: 'Virtual Private Server (VPS) hosting is a powerful solution for businesses and individuals who need more an control.',
    number: 300,
  },
  {
    image: Icon2,
    title: 'Shared Hosting',
    comment: "In shared hosting, multiple websites are hosted on a single server, sharing the server's resources such as CPU.",
    number: 400,
  },
  {
    image: Icon3,
    title: 'Cloud Hosting',
    comment: 'Cloud hosting is a modern and highly scalable web hosting solution that to utilizes a network of virtual servers.',
    number: 500,
  },
]
