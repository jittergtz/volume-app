"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { useTrackQuery } from "@/lib/services/apiFetch"
import { Image, Skeleton } from "@nextui-org/react"
import Link from "next/link"
import { Song } from "@/types"
import { useUser } from "@/hooks/useUser"
import PlayPause from "../PlayPause"
import { playPause, setActiveSong } from "@/lib/features/playerSlice"
import PlayLogic from "../musicPlayer/PlayLogic"
import PlaylistSongCard from "./PlaylistSongCard"

interface LikedContentProps {
  songs: Song[]
}

interface TrackProps {
  id: number
  preview: string
  album: {
    cover_big: string
  }
  title: string
  artist: {
    id: number
    name: string
    picture_xl: string
    picture: string
  }
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter()
  const { isLoading, user } = useUser()

  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player
  )

  return (
    <div className="flex flex-col gap-y-2 w-full p-1">
      {songs.map((song: Song, index: number) => {
        if (!songs) {
          return (
            <div
              className=" w-full flex gap-2 items-center rounded-lg"
              key={index}
            >
              <Skeleton className="w-20 h-20 rounded-xl bg-neutral-800"></Skeleton>
              <div className="flex flex-col gap-3">
                <Skeleton className="w-32 h-2 rounded-xl bg-neutral-800"></Skeleton>
                <Skeleton className="w-20 h-2 rounded-xl bg-neutral-800"></Skeleton>
              </div>
            </div>
          )
        }

        return (
          <PlaylistSongCard
            index={index}
            data={song}
            item={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        )
      })}
    </div>
  )
}

export default LikedContent
