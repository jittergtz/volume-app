"use client"
import React, { useEffect, useState } from "react"
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react"
import { ShuffleIcon } from "../Next-Ui/ShuffleIcon"
import { NextIcon } from "../Next-Ui/NextIcon"
import { PauseCircleIcon } from "../Next-Ui/PauseCircleIcon"
import { PreviousIcon } from "../Next-Ui/PreviousIcon"
import { RepeatOneIcon } from "../Next-Ui/RepeatOneIcon"
import { HeartIcon } from "../Next-Ui/HeartIcon"
import { FaArrowsTurnRight } from "react-icons/fa6"
import { IoIosClose } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { playPause } from "@/lib/features/playerSlice"
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs"


function PlayerFullCard({onClose, onOpen}: any) {
  const [liked, setLiked] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
  useSelector((state: RootState) => state.player)
  const dispatch = useDispatch()


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
    <Card
      className=" h-full w-full   bg-black/70 backdrop-blur-3xl  rounded-none "
      shadow="sm"
    >
      <button
       onClick={onClose}
       className="   mt-20 ml-auto p-5">
        <IoIosClose size={28} />
      </button>

      <CardBody className="flex overflow-visible  h-full justify-center gap-10  ">
        <div className="flex flex-col items-center gap-2 justify-center  col-span-6 md:col-span-4">
        {activeSong?.album?.cover_big ? (
        <>
        <Image
            alt="Album cover"
            className="object-cover w-64 h-64"
            shadow="md"
            src={activeSong?.album?.cover_big}
          />
       
          <img
          alt="Shadow"
          className="image-card-shadow"
          src={activeSong?.album?.cover_big}
        />
        </>
          ) : (
            <Image
            
              alt="Album cover"
              className="object-cover w-64 h-64 "
              shadow="md"
              src="/image/IMG_7651.jpg"
            />
          )}

          
        </div>

        <div className="flex  px-5 flex-col col-span-6 md:col-span-8">
          <div className="flex  justify-between items-start">
            <div className="flex flex-col gap-0">
              <h3 className=" text-lg text-foreground/90">
                {activeSong?.title ? activeSong?.title : ""}
                </h3>
              <p className="text-small text-foreground/80">
                 {activeSong?.artist.name ? activeSong?.artist.name : ""}
                 </p>
            </div>
            <Button
              isIconOnly
              className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
              radius="full"
              variant="light"
              onPress={() => setLiked((v) => !v)}
            >
              <HeartIcon
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "currentColor" : "none"}
              />
            </Button>
          </div>
     

          <div className="flex w-full  items-center justify-center">
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <RepeatOneIcon className="text-foreground/80" />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <PreviousIcon />
            </Button>

            {isPlaying ? (
            <BsFillPauseFill
             size={65}
              onClick={handlePlayPause}
             className="text-neutral-100 z-50 cursor-pointer"
               />
                ) : (
             <BsFillPlayFill
             size={65}
             onClick={handlePlayPause}
            className="text-neutral-100 z-50  cursor-pointer"
              />
              )}
          


            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <NextIcon />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <ShuffleIcon className="text-foreground/80" />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default PlayerFullCard

function nextSong(arg0: number): any {
  throw new Error("Function not implemented.")
}
function prevSong(arg0: number): any {
  throw new Error("Function not implemented.")
}


