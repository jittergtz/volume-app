import { Follow, Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getFollowedArtists = async (): Promise<Follow[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();


  let { data: followed_artists, error } = await supabase
  .from('followed_artists')
  .select('*')
  .eq('user_id', session?.user?.id)
  .order('created_at', { ascending: false })
          


  if (!followed_artists) return [];


  return followed_artists.map((item) => ({
    ...item
  }))
};

export default getFollowedArtists;