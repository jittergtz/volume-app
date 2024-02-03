"use client"

import { Button } from "@nextui-org/react"
import { HeartIcon } from "../Next-Ui/HeartIcon"

import { PreviousIcon } from "../Next-Ui/PreviousIcon"
import { NextIcon } from "../Next-Ui/NextIcon"
import { PauseCircleIcon } from "../Next-Ui/PauseCircleIcon"
import { SetStateAction, useEffect, useState } from "react"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store"

import { playPause } from "@/lib/features/playerSlice"
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

const Player = () => {
  const [liked, setLiked] = useState(false)

  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state: RootState) => state.player)
  const [duration, setDuration] = useState(0)
  const [seekTime, setSeekTime] = useState(0)
  const [appTime, setAppTime] = useState(0)
  const [volume, setVolume] = useState(0.3)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true))
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
      dispatch(nextSong((currentIndex + 1) % currentSongs.length))
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)))
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

  return (
    <>

      {isActive ? (
        <>
        
        <div
          className="fixed bottom-16 sm:bottom-0 backdrop-blur-xl bg-black/30
         border-b px-1 border-neutral-600 rounded-t-xl w-full "
        >
          <NextModal/>

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
                  {activeSong?.album?.cover_big ? (
                    <img
                      alt="Album cover"
                      className="object-cover rounded-lg "
                      height={45}
                      width={45}
                      src={activeSong?.album?.cover_big}
                    />
                  ) : (
                    <img
                      alt="Album cover"
                      className="object-cover rounded-lg "
                      height={45}
                      width={45}
                      src="/image/IMG_7651.jpg"
                    />
                  )}
                  <div>
                    <h3 className="w-36  sm:w-full line-clamp-1 font-semibold text-xs sm:text-small text-foreground/90">
                      {activeSong?.title ? activeSong?.title : ""}
                    </h3>
                    <p className="sm:text-small text-xs text-foreground/80">
                      {activeSong?.artist.name ? activeSong?.artist.name : ""}
                    </p>
                  </div>
                </div>




              

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0"></div>

                    <div className="flex-col">
                      <div className="flex flex-col gap-1"></div>

                      <div className="flex w-full items-center justify-center">
                        {isPlaying ? (
                          <BsFillPauseFill
                            size={45}
                            onClick={handlePlayPause}
                            className="text-neutral-100 cursor-pointer"
                          />
                        ) : (
                          <BsFillPlayFill
                            size={45}
                            onClick={handlePlayPause}
                            className="text-neutral-100  cursor-pointer"
                          />
                        )}
                        {currentSongs?.length && (
                          <MdSkipNext
                            size={30} 
                            className="cursor-pointer text-neutral-400"
                            onClick={handleNextSong}
                          />
                        )}

                  <div className="flex  items-center justify-center ">
                  <Button
                    isIconOnly
                    className="flex  justify-center items-center text-default-900/60 data-[hover]:bg-foreground/10 "
                    radius="full"
                    variant="light"
                    onPress={() => setLiked((v) => !v)}
                  >
                    <HeartIcon
                      size={28}
                      className={liked ? "[&>path]:stroke-transparent" : ""}
                      fill={liked ? "currentColor" : "none"}
                    />
                  </Button>
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
        <div>
       
        </div>
      )}
    </>
  )
}

export default Player
function nextSong(arg0: number): any {
  throw new Error("Function not implemented.")
}

function prevSong(arg0: number): any {
  throw new Error("Function not implemented.")
}
