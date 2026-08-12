import bcrypt from 'bcrypt'
import { findUserByEmail, createUser } from './auth.repository.ts'
import { generateToken } from '../../utils/jwt.ts'

export const registerUser = async (data: {
    fullname: string
    email: string
    password: string
    role: 'CANDIDATE' | 'RECRUITER'
}) => {
    const existingUser = await findUserByEmail(data.email)

    if (existingUser) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const user = await createUser({
        fullname: data.fullname,
        email: data.email,
        password: hashedPassword,
        role: data.role,
    })

    const token = generateToken({
        userId: String(user.id),
        role: user.role,
    })

    return {
        token,
        user: {
            id: user.id,
            fullname: user.fullname,
            email: user.email,
            role: user.role,
        },
    }
}

export const loginUser = async (data: {
    email: string
    password: string
    role: 'CANDIDATE' | 'RECRUITER'
}) => {
    const user = await findUserByEmail(data.email)

    if (!user) {
        throw new Error('Invalid email or password')
    }

    const passwordMatch = await bcrypt.compare(
        data.password,
        user.password
    )

    if (!passwordMatch) {
        throw new Error('Invalid email or password')
    }

    // if (user.role !== data.role) {
    //     throw new Error('Incorrect role selected')
    // }

    const token = generateToken({
        userId: String(user.id),
        role: user.role,
    })
    return {
        token,
        user: {
            id: user.id,
            fullname: user.fullname,
            email: user.email,
            role: user.role,
        },
    }
}