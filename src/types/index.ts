export interface Service {
  id: string
  title: string
  description: string
  price?: string
  image: string
  icon?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  description?: string
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  period?: string
  features: string[]
  popular?: boolean
  cta: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface NavLink {
  label: string
  href: string
}