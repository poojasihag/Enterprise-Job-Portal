import type { Request, Response } from 'express'
import {
  registerUser,
  loginUser,
} from './auth.service.ts'

export const register = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await registerUser(req.body)

    return res.status(201).json({
      message: 'Registration successful',
      ...result,
    })
  } catch (error: any) {
    console.error(error)

    return res.status(400).json({
      message: error.message,
    })
  }
}

export const login = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await loginUser(req.body)

    return res.status(200).json({
      message: 'Login successful',
      ...result,
    })
  } catch (error: any) {
    console.error(error)

    return res.status(401).json({
      message: error.message,
    })
  }
}