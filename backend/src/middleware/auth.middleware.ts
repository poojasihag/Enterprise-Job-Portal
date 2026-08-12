import type { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt.ts'

declare global {
  namespace Express {
    interface Request {
      user: ReturnType<typeof verifyToken>
    }
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({
        message: 'Authentication required',
      })
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
      return res.status(401).json({
        message: 'Invalid token',
      })
    }

    const decoded = verifyToken(token)

    req.user = decoded

    next()
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid or expired token',
    })
  }
}