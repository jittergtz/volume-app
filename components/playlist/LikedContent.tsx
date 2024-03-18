"use client"

import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { Image, Skeleton } from "@nextui-org/react"

import { Song } from "@/types"
import { useUser } from "@/hooks/useUser"
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


  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player
  )

  return (
    <div className="flex flex-col pb-20 gap-y-2 w-full p-1">
      {songs.map((song: Song, index: number) => {
        if (!songs) {
          return (
            <div
              className=" w-full flex gap-2 items-center rounded-lg"
              key={song.song_id}
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
           key={song.song_id}
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
