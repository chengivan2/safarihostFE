export type PricingType = {
  number: number
  month: string
  count: number
  title: string
  token: string
}

export type Pricing = {
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

export const pricing: PricingType[] = [
  {
    number: 80,
    month: 'Per Month',
    count: 900,
    title: 'Basic Packages',
    token: 'Basic Plan',
  },
  {
    number: 99,
    month: 'Pro Packages',
    count: 1100,
    title: 'Pro Packages',
    token: 'Pro Plan',
  },
  {
    number: 70,
    month: 'Per Month',
    count: 1300,
    title: 'Premium Packages',
    token: 'Premium Plan',
  },
]
