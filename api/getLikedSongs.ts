import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getLikedSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();


  let { data: liked_songs, error } = await supabase
  .from('liked_songs')
  .select('*')
  .eq('user_id', session?.user?.id)
          
    
  console.log(liked_songs)
  if (!liked_songs) return [];


  return liked_songs.map((item) => ({
    ...item
  }))
};

export default getLikedSongs;