import { api } from '@/lib/axios'

interface GetProfileResponse {
  id: string
  name: string
  phone: string | null
  email: string
  role: 'manager' | 'customer'
  createdAt: Date
  updatedAt: Date
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
