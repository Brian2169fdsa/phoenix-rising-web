export interface ServicePlan {
  id: string
  name: string
  description: string
  priceEnvKey: string
  basePrice: number
  recurringPrice?: number
  mode: 'payment' | 'subscription'
}

export const CATALOG: Record<string, ServicePlan> = {
  residential_standard: {
    id: 'residential_standard',
    name: 'Residential Standard',
    description: 'Up to 20 panes, interior + exterior',
    priceEnvKey: 'STRIPE_PRICE_RESIDENTIAL_STANDARD',
    basePrice: 189,
    recurringPrice: 159,
    mode: 'payment',
  },
  residential_deluxe: {
    id: 'residential_deluxe',
    name: 'Residential Deluxe',
    description: 'Up to 35 panes, interior + exterior',
    priceEnvKey: 'STRIPE_PRICE_RESIDENTIAL_DELUXE',
    basePrice: 249,
    recurringPrice: 209,
    mode: 'payment',
  },
  residential_premium: {
    id: 'residential_premium',
    name: 'Residential Premium',
    description: '35+ panes, large/2-story homes',
    priceEnvKey: 'STRIPE_PRICE_RESIDENTIAL_PREMIUM',
    basePrice: 329,
    recurringPrice: 279,
    mode: 'payment',
  },
  maintenance_monthly: {
    id: 'maintenance_monthly',
    name: 'Monthly Maintenance',
    description: 'Monthly recurring window cleaning',
    priceEnvKey: 'STRIPE_PRICE_MAINTENANCE_MONTHLY',
    basePrice: 159,
    mode: 'subscription',
  },
  maintenance_quarterly: {
    id: 'maintenance_quarterly',
    name: 'Quarterly Maintenance',
    description: 'Quarterly recurring window cleaning',
    priceEnvKey: 'STRIPE_PRICE_MAINTENANCE_QUARTERLY',
    basePrice: 209,
    mode: 'subscription',
  },
}

export const TAX_RATE = 0.086 // AZ/Maricopa estimated

export function estimate(data: {
  service: string
  size?: string
  stories?: string
  hardWater?: boolean
  frequency?: string
  panels?: string
}): number | null {
  const { service, size, stories, hardWater, frequency, panels } = data

  if (service === 'residential') {
    let base = size === 'large' ? 329 : size === 'medium' ? 249 : 189
    if (stories === '2') base += 60
    if (stories === '3+') base += 140
    if (hardWater) base += 80
    const mult = frequency === 'monthly' ? 0.84 : frequency === 'quarterly' ? 0.92 : 1
    return Math.round(base * mult)
  }
  if (service === 'solar') {
    let base = 149
    const count = parseInt(panels || '0')
    if (count >= 20) base += 100
    else if (count >= 10) base += 50
    return base
  }
  if (service === 'screens') return 59
  return null // commercial/high-rise/post-construction = quote
}
