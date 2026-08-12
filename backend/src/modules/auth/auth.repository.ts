import {prisma} from '../../config/prisma.ts'

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  })
}

export const createUser = async (data: {
  fullname: string
  email: string
  password: string
  role: 'CANDIDATE' | 'RECRUITER'
}) => {
  return prisma.user.create({
    data,
  })
}