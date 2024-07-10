"use client"
import React, { useEffect, useState } from "react"
import FollowButton from "./FollowButton"
import { Follow } from "@/types"
import { useRouter } from "next/navigation"
import { useSessionContext } from "@supabase/auth-helpers-react"
import useAuthModal from "@/hooks/useAuthModal"
import { useUser } from "@/hooks/useUser"
import { Button, Image } from "@nextui-org/react"
import toast from "react-hot-toast"
import { CheckIcon } from "../Next-Ui/CheckIcon"




  interface FollowProps {
    artist: {
    id: number;
    name: string;
    picture_xl: string; 
    picture_medium: string;
    }
  }


const FollowComp: React.FC<FollowProps> = ({ artist }) => {

  const router = useRouter()
  const { supabaseClient } = useSessionContext()
  const authModal = useAuthModal()
  const { user } = useUser()

  const [isFollowed, setIsFollowed] = useState<boolean>(false)

  useEffect(() => {
    if (!user?.id) {
      return authModal.onOpen
    }

    const fetchData = async () => {
      setIsFollowed(false)
      const { data, error } = await supabaseClient
        .from("followed_artists")
        .select("*")
        .eq("user_id", user.id)
        .eq("id", artist?.id )
        .single()

      if (!error && data) {
        setIsFollowed(true)
      }
    }

    fetchData()
  }, [artist, supabaseClient, user?.id])

  const handleClick = async () => {
    if (!user) {
      return authModal.onOpen()
    }

    if (isFollowed) {
      const { error } = await supabaseClient
        .from("followed_artists")
        .delete()
        .eq("user_id", user.id)
        .eq("id", artist?.id)

      if (error) {
        toast.error(error.message)
      } else {
        setIsFollowed(false)
      }
    } else {
      const { error } = await supabaseClient
      .from("followed_artists")
      .insert({
        id: artist?.id ,
        user_id: user?.id,
        name: artist?.name,
        picture_xl: artist?.picture_xl,

      })

      if (error) {
        toast.error(error.message)
      } else {
        setIsFollowed(true)
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } flex items-center gap-2 bg-white/20 backdrop-blur-xl  animate-appearance-in shadow-lg p-1 px-3 rounded-lg pointer-events-auto  ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex items-center gap-2 justify-center">
            <img
            alt="artist img"
            src={artist.picture_medium}
            className="h-10 w-10 rounded-full"

            />
            <div className="flex  items-center text-white text-center">
               Gefolgt  <CheckIcon className="ml-1" />
              </div>
           
              </div>
           
          </div>
        ))
      }
    }

    router.refresh()
  }

  
  
  
  return (
    <div>
      <FollowButton 
      isFollowed={isFollowed}
       handleClick={handleClick}
       />
    </div>
  )
}

export default FollowComp
