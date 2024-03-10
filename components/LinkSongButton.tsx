"use client"
import React from "react"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
} from "@nextui-org/react"
import { FaDeezer, FaLocationArrow, FaSpotify } from "react-icons/fa6"
import { SiApplemusic, SiYoutubemusic } from "react-icons/si"
import Link from "next/link"
import { AiFillAmazonCircle } from "react-icons/ai"

export default function LinkSongButton({activeSong}: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()


  let artistName :string
  if (activeSong?.artist?.name) {
    artistName = activeSong.artist.name
  } else if (activeSong?.artist_name) {
    artistName = activeSong.artist_name
  } else {
    null
  }




  return (
    <>
      <Button
        size="md"
        className="bg-black/20 backdrop-blur-3xl"
        onPress={onOpen}
      >
        übertragen
        <FaLocationArrow />
      </Button>
      <Modal backdrop="transparent" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="h-[340px] bg-black/10 backdrop-blur-xl flex items-center  justify-center">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                
              </ModalHeader>
              <ModalBody className="text-neutral-200 flex flex-col items  gap-6 w-full px-5  text-2xl">

   
                
                
            
                <Link
                className="flex items-center gap-4 justify-center bg-neutral-900/40 hover:bg-neutral-800 text-white/70 p-2 px-3 rounded-xl"
                 href={`https://open.spotify.com/search/${artistName}%20${activeSong.title}`}>
                 Spotify
                 <FaSpotify
                 className="text-green-500" 
                 />
                 </Link>
             


                <Link
                className="flex items-center gap-4 justify-center bg-neutral-900/40 hover:bg-neutral-800 text-white/70 p-2 px-3 rounded-xl"
                 href={`https://www.deezer.com/search/${artistName}%20${activeSong.title}`}>
                 Deezer
                 <FaDeezer 
                  className="text-violet-500" 
                 />
                 </Link>




                 <Link
                className="flex items-center gap-4 justify-center bg-neutral-900/40 hover:bg-neutral-800 text-white/70 p-2 px-3 rounded-xl"
                 href={`https://music.youtube.com/search?q=${artistName}+${activeSong.title}`}>
                  Youtube music
                  <SiYoutubemusic
                  className="text-red-700 rounded-md "  
                  />
                 </Link>

                 <Link
                className="flex items-center gap-4 justify-center bg-neutral-900/40 hover:bg-neutral-800 text-white/70 p-2 px-3 rounded-xl"
                 href={`https://music.amazon.de/search/${artistName}+${activeSong.title}`}>
                  Amazon music
                  <AiFillAmazonCircle 
                  className="text-cyan-500 rounded-md "  
                  />
                 </Link>
                 

              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
