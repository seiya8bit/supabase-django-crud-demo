import { Button } from "@/components/ui/button"
import { fetchServer } from "@/lib/server";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const myProfile = await fetchServer(`/profiles/${user?.id}`)
  const othersProfile = await fetchServer('/profiles/2b5e90e5-e35c-4031-8bb0-898d2b1402d8')

  return (
    <div className="flex flex-col gap-4">
      <span>My Profile: {JSON.stringify(myProfile)}</span>
      <span>Dummy Profile: {JSON.stringify(othersProfile)}</span>
    </div>
  );
}
