import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

type JwtPayload = {
  userId: string
  role: 'CANDIDATE' | 'RECRUITER'
}
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

export const generateToken = (payload: JwtPayload) => {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET!,
    {
      expiresIn: '1d',
    }
  )
}


export const verifyToken = (token: string) => {
  return jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as JwtPayload
}


