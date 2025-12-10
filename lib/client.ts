import { createClient } from "./supabase/client"

export async function fetchClient(path: string) {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()
  const token = session?.access_token

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`, {
      headers: { Authorization: `Bearer ${token}` },
      credentials: 'include',
    }
  )

  return response.json()
}
