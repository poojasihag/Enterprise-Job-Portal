import { z } from 'zod'

export const registerSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(1, 'Full name is required'),

  email: z
    .string()
    .trim()
    .email('Invalid email'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters'),

  role: z.enum(['CANDIDATE', 'RECRUITER']),
})

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Invalid email'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters'),

  role: z.enum(['CANDIDATE', 'RECRUITER']),
})