export type Language = 'en' | 'ar'

export interface Course {
  id: string
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  price: number
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
}

export interface Trip {
  id: string
  name: string
  nameAr: string
  date: string
  location: string
  locationAr: string
  price: number
  maxParticipants: number
  currentParticipants: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  roleAr: string
  image: string
  certification: string
  experience: number
}
