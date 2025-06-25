import { StaticImageData } from 'next/image'

import Author1 from '@/assets/img/testimonial/tes-page-author1.png'
import Author2 from '@/assets/img/testimonial/tes-page-author2.png'
import Author3 from '@/assets/img/testimonial/tes-page-author3.png'
import Author4 from '@/assets/img/testimonial/tes-page-author4.png'
import Author5 from '@/assets/img/testimonial/tes-page-author5.png'
import Author6 from '@/assets/img/testimonial/tes-page-author6.png'
import Author7 from '@/assets/img/testimonial/tes-page-author7.png'
import Author8 from '@/assets/img/testimonial/tes-page-author8.png'
import Author9 from '@/assets/img/testimonial/tes-page-author9.png'

export type TestimonialType = {
  image: StaticImageData
  name: string
  title: string
}

export const testimonial: TestimonialType[] = [
  {
    image: Author1,
    name: 'Thomas Muller',
    title: 'Amazon Market',
  },
  {
    image: Author2,
    name: 'Stephanie Nicol',
    title: 'Cala Foods',
  },
  {
    image: Author3,
    name: 'Lorri Warf',
    title: 'Seamans Furniture',
  },
  {
    image: Author4,
    name: 'Iva Ryan',
    title: 'J. Brannam',
  },
  {
    image: Author5,
    name: 'Daniel Hamilton',
    title: "Luskin's",
  },
  {
    image: Author6,
    name: 'Kenneth Allen',
    title: 'Auto Works',
  },
  {
    image: Author7,
    name: 'Frances Swann',
    title: "Murray's Discount Auto Stores",
  },
  {
    image: Author8,
    name: 'John Dukes',
    title: 'Auto Works',
  },
  {
    image: Author9,
    name: 'David Elson',
    title: 'Specialty Group',
  },
]
