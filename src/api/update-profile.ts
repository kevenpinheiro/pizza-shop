import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  await api.put('/profile', { name, description })
}
