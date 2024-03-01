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

export default function LinkSongButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

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

   
                
                
                <div className="flex items-center gap-4 justify-center bg-neutral-900/40 p-2 px-3 rounded-xl" >
                 Spotify
                 <FaSpotify
                 className="text-green-500" 
                 />
                 </div>
                
                <span className="flex items-center gap-4 justify-center bg-neutral-900/40 p-2 px-3 rounded-xl">
                  Deezer
                  <FaDeezer 
                  className="text-violet-500" />
                </span>
                <span className="flex items-center gap-4 justify-center bg-neutral-900/40 p-2 px-3 rounded-xl">
                  Apple Music
                  <SiApplemusic
                  className="text-red-500" />
                  
                </span>
                <span className="flex items-center text-md  gap-4 justify-center bg-neutral-900/40 p-2 px-3 rounded-xl">
                <div className="flex items-center gap-4 "   >
                  Youtube Music
                  <SiYoutubemusic
                  className="text-red-700 rounded-md "  
                  />
                  </div>
                </span>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
