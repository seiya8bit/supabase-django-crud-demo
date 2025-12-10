import { Button } from "@/components/ui/button"
import { fetchServer } from "@/lib/server";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const profile = await fetchServer(`/profiles/${user?.id}`)

  return (
    <>
      Profile: {JSON.stringify(profile)}
    </>
  );
}
