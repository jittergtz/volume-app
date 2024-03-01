"use client";

import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useSessionContext } from "@supabase/auth-helpers-react";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { HeartIcon } from "./Next-Ui/HeartIcon";
import { Button } from "@nextui-org/react";

interface LikeButtonProps {
  song: {
    id: number;
    preview: string;
    album: {
      cover_big: string;
    };
    title: string;
    artist: {
      id: number
      name: string;
      picture_xl: string
      picture: string
    };
  }
};

const LikedButton: React.FC<LikeButtonProps> = ({
  song
}) => {

    const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state: RootState) => state.player)

  const router = useRouter();
  const {
    supabaseClient
  } = useSessionContext();
  const authModal = useAuthModal();
  const { user } = useUser();

  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }
  
    const fetchData = async () => {
        setIsLiked(false)
      const { data, error } = await supabaseClient
        .from('liked_songs')
        .select('*')
        .eq('user_id', user.id)
        .eq('song_id', song.id)
        .single();

      if (!error && data) {
        setIsLiked(true);
      }
    }

    fetchData();
  }, [song, supabaseClient, user?.id, activeSong?.album.cover_big ]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = async () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (isLiked) {
      const { error } = await supabaseClient
        .from('liked_songs')
        .delete()
        .eq('user_id', user.id)
        .eq('song_id', song.id)

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(false);
      }
    } else {
      const { error } = await supabaseClient
        .from('liked_songs')
        .insert({
          song_id: song.id,
          user_id: user.id,
          preview: song.preview,
          song_title: song.title,
          artist_name: song.artist.name,
          song_img: song.album.cover_big
        });

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(true);
        toast.success('Favorisiert');
      }
    }

    router.refresh();
  }


  return (
    <Button
    isIconOnly
    className="text-default-900/60 z-50 data-[hover]:bg-foreground/10 "
    radius="full"
    variant="light"
    onClick={handleLike}
  >
    <HeartIcon
      className={isLiked ? "[&>path]:stroke-transparent" : ""}
      fill={isLiked ? "#d1d1d1" : "none"}
    />
  </Button>
  );
}

export default LikedButton;