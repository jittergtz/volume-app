"use client"

import { useEffect, useState } from "react"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { useSessionContext } from "@supabase/auth-helpers-react"

import { useUser } from "@/hooks/useUser"
import useAuthModal from "@/hooks/useAuthModal"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { HeartIcon } from "../Next-Ui/HeartIcon"
import { Button, Image } from "@nextui-org/react"

interface LikeButtonProps {
  song: any
}

const LikedButton: React.FC<LikeButtonProps> = ({ song }) => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state: RootState) => state.player)

  const router = useRouter()
  const { supabaseClient } = useSessionContext()
  const authModal = useAuthModal()
  const { user } = useUser()

  const [isLiked, setIsLiked] = useState<boolean>(false)

  useEffect(() => {
    if (!user?.id) {
      return authModal.onOpen
    }

    const fetchData = async () => {
      setIsLiked(false)
      const { data, error } = await supabaseClient
        .from("liked_songs")
        .select("*")
        .eq("user_id", user.id)
        .eq("song_id", song.id || song.song_id)
        .single()

      if (!error && data) {
        setIsLiked(true)
      }
    }

    fetchData()
  }, [song, supabaseClient, user?.id])

  const handleLike = async () => {
    if (!user) {
      return authModal.onOpen()
    }

    if (isLiked) {
      const { error } = await supabaseClient
        .from("liked_songs")
        .delete()
        .eq("user_id", user.id)
        .eq("song_id", song.id || song.song_id)

      if (error) {
        toast.error(error.message)
      } else {
        setIsLiked(false)
      }
    } else {
      const { error } = await supabaseClient.from("liked_songs")
      .insert({
        song_id: song.id || song.song_id,
        user_id: user.id,
        preview: song.preview,
        title: song.title,
        artist_name: song.artist?.name || song.artist_name,
        song_img: song.album?.cover_big || song.song_img,
        artist_id: song.artist?.id || song.artist_id,
      })

      if (error) {
        toast.error(error.message)
      } else {
        setIsLiked(true)
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } w-64  flex items-center gap-2 bg-white/20 backdrop-blur-xl shadow-lg  animate-appearance-in rounded-lg pointer-events-auto  ring-1 ring-black ring-opacity-5`}
          >
            <Image
              alt="favoriten img"
              src="/image/favoriten-icon.svg"
              className="h-10 w-10 rounded-md"
            />
            <div className="text-white">Zu Favoriten hinzugefügt.</div>
          </div>
        ))
      }
    }

    router.refresh()
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
        fill={isLiked ? "#5c69ff" : "none"}
      />
    </Button>
  )
}

export default LikedButton
