// Import Prisma types
import { Prisma } from '@prisma/client'

// Re-export Prisma types for convenience
export type User = Prisma.UserGetPayload<{}>
export type VolunteerProfile = Prisma.VolunteerProfileGetPayload<{}>
export type OrganizationProfile = Prisma.OrganizationProfileGetPayload<{}>
export type Event = Prisma.EventGetPayload<{}>
export type EventRegistration = Prisma.EventRegistrationGetPayload<{}>
export type VolunteerHour = Prisma.VolunteerHourGetPayload<{}>
export type Donation = Prisma.DonationGetPayload<{}>
export type Message = Prisma.MessageGetPayload<{}>

// Re-export enum types from Prisma
export type UserRole = Prisma.UserRole
export type EventCategory = Prisma.EventCategory
export type RegistrationStatus = Prisma.RegistrationStatus
export type DonationType = Prisma.DonationType
export type DonationStatus = Prisma.DonationStatus
export type RecurringFrequency = Prisma.RecurringFrequency

// Enum constants for easy access
export const USER_ROLES = {
  VOLUNTEER: 'VOLUNTEER' as const,
  ORGANIZATION: 'ORGANIZATION' as const,
  ADMIN: 'ADMIN' as const,
}

export const EVENT_CATEGORIES = {
  EDUCATION: 'EDUCATION' as const,
  ENVIRONMENT: 'ENVIRONMENT' as const,
  ANIMAL_CARE: 'ANIMAL_CARE' as const,
  DISASTER_RELIEF: 'DISASTER_RELIEF' as const,
  HEALTHCARE: 'HEALTHCARE' as const,
  COMMUNITY_SERVICE: 'COMMUNITY_SERVICE' as const,
  YOUTH_DEVELOPMENT: 'YOUTH_DEVELOPMENT' as const,
  SENIOR_CARE: 'SENIOR_CARE' as const,
  HOMELESSNESS: 'HOMELESSNESS' as const,
  FOOD_SECURITY: 'FOOD_SECURITY' as const,
  OTHER: 'OTHER' as const,
}

export const EVENT_CATEGORY_LABELS: Record<EventCategory, string> = {
  EDUCATION: 'Education',
  ENVIRONMENT: 'Environment',
  ANIMAL_CARE: 'Animal Care',
  DISASTER_RELIEF: 'Disaster Relief',
  HEALTHCARE: 'Healthcare',
  COMMUNITY_SERVICE: 'Community Service',
  YOUTH_DEVELOPMENT: 'Youth Development',
  SENIOR_CARE: 'Senior Care',
  HOMELESSNESS: 'Homelessness',
  FOOD_SECURITY: 'Food Security',
  OTHER: 'Other',
}

export const REGISTRATION_STATUSES = {
  PENDING: 'PENDING' as const,
  APPROVED: 'APPROVED' as const,
  REJECTED: 'REJECTED' as const,
  CANCELLED: 'CANCELLED' as const,
}

export const REGISTRATION_STATUS_LABELS: Record<RegistrationStatus, string> = {
  PENDING: 'Pending',
  APPROVED: 'Approved',
  REJECTED: 'Rejected',
  CANCELLED: 'Cancelled',
}

export const DONATION_TYPES = {
  ONE_TIME: 'ONE_TIME' as const,
  RECURRING: 'RECURRING' as const,
}

export const DONATION_TYPE_LABELS: Record<DonationType, string> = {
  ONE_TIME: 'One Time',
  RECURRING: 'Recurring',
}

export const DONATION_STATUSES = {
  PENDING: 'PENDING' as const,
  COMPLETED: 'COMPLETED' as const,
  FAILED: 'FAILED' as const,
  CANCELLED: 'CANCELLED' as const,
}

export const DONATION_STATUS_LABELS: Record<DonationStatus, string> = {
  PENDING: 'Pending',
  COMPLETED: 'Completed',
  FAILED: 'Failed',
  CANCELLED: 'Cancelled',
}

export const RECURRING_FREQUENCIES = {
  WEEKLY: 'WEEKLY' as const,
  MONTHLY: 'MONTHLY' as const,
  QUARTERLY: 'QUARTERLY' as const,
  YEARLY: 'YEARLY' as const,
}

export const RECURRING_FREQUENCY_LABELS: Record<RecurringFrequency, string> = {
  WEEKLY: 'Weekly',
  MONTHLY: 'Monthly',
  QUARTERLY: 'Quarterly',
  YEARLY: 'Yearly',
}

// Utility types for forms and API
export interface CreateUserData {
  name: string
  email: string
  password: string
  role: UserRole
}

export interface CreateVolunteerProfileData {
  bio?: string
  skills?: string[]
  interests?: string[]
  location?: string
  availability?: Record<string, any>
  phone?: string
  dateOfBirth?: Date
  emergencyContact?: string
}

export interface CreateOrganizationProfileData {
  name: string
  description?: string
  mission?: string
  website?: string
  phone?: string
  address?: string
  city?: string
  state?: string
  country?: string
  zipCode?: string
  logo?: string
  taxId?: string
  foundedYear?: number
}

export interface CreateEventData {
  title: string
  description: string
  category: EventCategory
  location: string
  latitude?: number
  longitude?: number
  startDate: Date
  endDate: Date
  maxVolunteers?: number
  skills?: string[]
  requirements?: string
  isRemote?: boolean
  image?: string
}

export interface CreateDonationData {
  amount: number
  currency?: string
  type: DonationType
  isRecurring?: boolean
  frequency?: RecurringFrequency
  message?: string
  anonymous?: boolean
} 