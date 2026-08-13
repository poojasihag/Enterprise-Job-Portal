import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { z } from 'zod'
import { loginApi } from '../../lib/api/auth'
import { useNavigate } from 'react-router-dom'

type LoginProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Please enter a valid email'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters'),

  role: z.enum(['CANDIDATE', 'RECRUITER']),
})

type FormData = z.infer<typeof loginSchema>

export default function LoginForm({ setIsLogin }: LoginProps) {
  const navigate = useNavigate()

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    role: 'CANDIDATE',
  })

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({})

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Remove error when user starts correcting the field
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const handleRole = (role: 'CANDIDATE' | 'RECRUITER') => {
    setFormData((prev) => ({
      ...prev,
      role,
    }))

    setErrors((prev) => ({
      ...prev,
      role: '',
    }))
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    // Validate form with Zod
    const result = loginSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {}

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData

        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      })

      setErrors(fieldErrors)
      return
    }

    try {
      setLoading(true)
      setErrors({})

      console.log('LOGIN DATA:', result.data)

      const response = await loginApi(result.data)

      console.log('LOGIN SUCCESS:', response.data)

      const { token, user } = response.data

      localStorage.setItem('token', token)
      if (!token || !user) {
        throw new Error('Invalid login response')
      }

      localStorage.setItem('token', token)
      localStorage.setItem(
        'user',
        JSON.stringify(user)
      )
      if (user?.role === 'CANDIDATE') {
        navigate('/candidate/dashboard', {
          replace: true,
        })
      } else if (user?.role === 'RECRUITER') {
        navigate('/recruiter/dashboard', {
          replace: true,
        })
      }
    } catch (error: any) {
      console.error('LOGIN ERROR:', error)

      setErrors({
        email:
          error?.response?.data?.message ||
          'Login failed. Please check your email and password.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="my-10 flex w-full flex-col items-center gap-7"
    >
      {/* Role */}
      <div className="flex w-70 flex-col items-center justify-center">
        <div className="flex h-12 w-70 flex-row items-center justify-center rounded-md bg-blue-200">
          <button
            type="button"
            onClick={() => handleRole('CANDIDATE')}
            className={`h-9 w-33 rounded-md text-black ${formData.role === 'CANDIDATE'
              ? 'bg-white shadow-2xl'
              : 'bg-blue-200'
              }`}
          >
            Candidate
          </button>

          <button
            type="button"
            onClick={() => handleRole('RECRUITER')}
            className={`h-9 w-33 rounded-md text-black ${formData.role === 'RECRUITER'
              ? 'bg-white shadow-2xl'
              : 'bg-blue-200'
              }`}
          >
            Recruiter
          </button>
        </div>

        {errors.role && (
          <span className="mt-1 text-sm text-red-600">
            {errors.role}
          </span>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Work Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-60 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="mb-5">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Security Password
        </label>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-60 rounded-xl border border-gray-300 bg-white px-4 py-3 pr-10 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? (
              <Eye size={18} />
            ) : (
              <EyeOff size={18} />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="mt-1 text-sm text-red-600">
            {errors.password}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-60 rounded-xl border border-gray-300 bg-blue-300 px-4 py-3 text-sm hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>

      {/* Register */}
      <div className="flex flex-row gap-1">
        <span>New to the platform?</span>

        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className="text-blue-500 hover:border-b-2 hover:border-blue-700 hover:text-blue-700"
        >
          Sign Up
        </button>
      </div>
    </form>
  )
}

