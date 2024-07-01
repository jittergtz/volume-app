"use client"

import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store"

import { nextSong, playPause, prevSong } from "@/lib/features/playerSlice"
import PlayLogic from "./PlayLogic"
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs"
import { MdSkipNext, MdSkipPrevious } from "react-icons/md"
import PlayerFullCard from "../PlayerFullView/PlayerFullCard"
import usePlayerFUllModal from "@/hooks/usePlayerFullModul"
import NextModal from "../PlayerFullView/NextModal"
import LikedButton from "../playlist/LikedButton"
import SongCard from "../SongCard"
import Link from "next/link"
import { useDisclosure } from "@nextui-org/react"
import Image from "next/image"

const Player = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state: RootState) => state.player)
  const [duration, setDuration] = useState(0)
  const [seekTime, setSeekTime] = useState(0)
  const [appTime, setAppTime] = useState(0)
  const [volume, setVolume] = useState(0.3)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const dispatch = useDispatch()

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const divider = () => {
    if (currentSongs?.tracks?.data) {
      return currentSongs.tracks.data.length;
    } else if (currentSongs?.data) {
      return currentSongs.data.length;
    } else {
      return currentSongs.length;
    }
  }

  useEffect(() => {
    if (currentSongs) dispatch(playPause(true))
  }, [currentIndex])

  
  const handlePlayPause = () => {
    if (!isActive) return

    if (isPlaying) {
      dispatch(playPause(false))
    } else {
      dispatch(playPause(true))
    }
  }

  const handleNextSong = () => {
    dispatch(playPause(false))

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % divider() ))
      console.log(nextSong)
    } 
  }

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1))
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)))
    } else {
      dispatch(prevSong(currentIndex - 1))
    }
  }

  let imageUrl
  if (activeSong?.album?.cover_big) {
    imageUrl = activeSong.album.cover_big
  } else if (activeSong?.song_img) {
    imageUrl = activeSong.song_img
  } else {
    imageUrl = "/image/IMG_7651.jpg"
  }

  let artistId
  if (activeSong?.artist?.id) {
    artistId = activeSong.artist.id
  } else if (activeSong?.artist_id) {
    artistId = activeSong.artist_id
  } else {
    null
  }

  return (
    <>
      {isActive ? (
        <>
          <div className="fixed z-40 bottom-20 mb-1 sm:mb-0  w-full sm:bottom-0">
            <div
              onClick={onOpen} // Full Player View
              className=" backdrop-blur-xl  bg-black/40
               px-1 rounded-2xl mx-3 "
            >
              <div className="my-1 mb-2">
                <NextModal //Full Player
                />
              </div>

              <PlayLogic
                activeSong={activeSong}
                volume={volume}
                isPlaying={isPlaying}
                seekTime={seekTime}
                repeat={repeat}
                onEnded={handleNextSong}
              />

              <div>
                <div>
                  <div className="flex md:gap-4 items-center justify-between ">
                    <div className="gap-1 flex">
                      <Image
                        alt="Album cover"
                        className="object-cover rounded-xl "
                        height={48}
                        width={48}
                        src={imageUrl}
                      />

                      <div className="flex flex-col mt-1">
                        <h3 className="w-36   sm:w-full line-clamp-1  text-sm sm:text-small text-foreground/90">
                          {activeSong?.title ? activeSong?.title : ""}
                        </h3>
                        <div className="mt-5 absolute z-50">
                          <Link href={`/dashboard/artist/${artistId}`}>
                            <p className="sm:text-small text-xs text-foreground/80 hover:text-neutral-100">
                              {activeSong?.artist?.name ??
                                activeSong?.artist_name ??
                                ""}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-0"></div>

                        <div className="flex-col">
                          <div className="flex flex-col gap-1"></div>

                          <div className="flex bottom-16 z-50 w-full items-center justify-center">
                            {isPlaying ? (
                              <BsFillPauseFill
                                size={45}
                                onClick={handlePlayPause}
                                className="text-neutral-100 z-50 cursor-pointer"
                              />
                            ) : (
                              <BsFillPlayFill
                                size={45}
                                onClick={handlePlayPause}
                                className="text-neutral-100 z-50  cursor-pointer"
                              />
                            )}

                            <MdSkipNext
                              size={30}
                              className="cursor-pointer z-50 text-neutral-400"
                              onClick={handleNextSong}
                            />

                            <div className="flex  items-center justify-center ">
                         
                              <LikedButton song={activeSong} /> 
                            
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default Player
