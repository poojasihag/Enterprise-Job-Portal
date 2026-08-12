import axios from 'axios'

export const registerUser = (data: {
  fullname: string
  email: string
  password: string
  role: 'CANDIDATE' | 'RECRUITER'
}) => {
  return axios.post('http://localhost:5000/api/users/register', data)
}

// export const loginApi = (data: any) => {
//   return axios.post("/users/login", data);
// }; 

export const loginApi = (data: any) => {
  return axios.post(
    'http://localhost:5000/api/users/login',
    data
  )
}