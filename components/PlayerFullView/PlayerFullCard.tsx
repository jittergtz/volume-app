"use client"
import React, { useEffect, useState } from "react"
import { Card, CardBody, Image, Button } from "@nextui-org/react"
import { ShuffleIcon } from "../Next-Ui/ShuffleIcon"
import { NextIcon } from "../Next-Ui/NextIcon"

import { PreviousIcon } from "../Next-Ui/PreviousIcon"
import { RepeatOneIcon } from "../Next-Ui/RepeatOneIcon"
import { IoIosClose } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { nextSong ,playPause, prevSong } from "@/lib/features/playerSlice"
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs"
import LinkSongButton from "../LinkSongButton"
import LikedButton from "../playlist/LikedButton"
import Link from "next/link"
import { useWindowSize } from "react-use"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { twMerge } from "tailwind-merge"

function PlayerFullCard({ onClose, onOpen }: any) {
  const [shuffle, setShuffle] = useState(false)

  useGSAP(() => {
    gsap.to("#animate", {
    opacity: 0.8,
     duration: 2,
     
    })
  },[])

  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
  useSelector((state: RootState) => state.player)
  const dispatch = useDispatch()
  

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
    } else {
      dispatch(nextSong(Math.floor(Math.random() * divider() )))
    }
  }
  
  
  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong( divider() - 1))
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

  function useIsSM() {
    const { width } = useWindowSize();
    return width > 540;
  }
  

  const isSM = useIsSM();

  return (
    <Card
      className=" h-full w-full  bg-black sm:bg-black/80 backdrop-blur-2xl sm:backdrop-blur-2xl   rounded-none "
      shadow="sm"
    >
      <button onClick={onClose} className=" mt-20 ml-auto p-5">
        <IoIosClose size={28} />
      </button>

      <CardBody  className="flex overflow-visible  h-full justify-center gap-10  ">
        <div className="flex flex-col items-center gap-2 justify-center  col-span-6 md:col-span-4">
          {imageUrl ? (
            <>
              <Image
   
                alt="Album cover"
                className="object-cover w-64 h-64"
                shadow="md"
                src={imageUrl}
              />
             { // eslint-disable-next-line @next/next/no-img-element
              <img id="animate" alt="Shadow" className={`${isSM ? 'image-card-shadow' : 'image-card-shadow-mobile'}`} src={imageUrl} /> }
            </>
          ) : (
            <Image
              alt="Album cover"
              className="object-cover w-64 h-64"
              shadow="md"
              src="/image/IMG_7651.jpg"
            />
          )}

          <LinkSongButton
          activeSong={activeSong} />
        </div>

        <div className="flex   px-5 flex-col col-span-6 md:col-span-8">
          <div className="flex  justify-between items-start">
            <div className="flex flex-col gap-0">
              <h3 className=" text-lg text-foreground/90">
                {activeSong?.title ? activeSong?.title : ""}
              </h3>
              <p className="sm:text-small text-xs text-foreground/80 hover:text-neutral-100 w-max   z-50">
                <Link onClick={onClose} href={`/dashboard/artist/${artistId}`}>
                  {activeSong?.artist?.name ?? activeSong?.artist_name ?? ""}
                </Link>
              </p>
            </div>
            <LikedButton song={activeSong} />
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
              onClick={handlePrevSong }
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
              onClick={handleNextSong}
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <NextIcon />
            </Button>
            <Button
              onClick={() => {shuffle ? setShuffle(false): setShuffle(true)}}
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >{shuffle ? (
              <ShuffleIcon className="text-white" />
            ): (
              <ShuffleIcon className="text-foreground/50" />
            )}   
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default PlayerFullCard


