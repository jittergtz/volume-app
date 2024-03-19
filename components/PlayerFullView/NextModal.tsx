"use client"
import React, { useEffect, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import PlayerFullCard from "./PlayerFullCard";
import { useWindowSize } from 'react-use';

export default function NextModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
   

  function useIsSM() {
    const { width } = useWindowSize();
    return width > 640;
  }
  

  const isSM = useIsSM();

   return (
    <>
    <div
    onClick={onOpen}
     className="flex  h-full absolute w-full z-10 justify-center">
    <div className="w-24 h-2 rounded-2xl  bg-white/20" onClick={onOpen}></div>
    </div>

     
      <Modal size="full" backdrop="transparent" isDismissable={!isSM} shouldBlockScroll={false} hideCloseButton={true} scrollBehavior="outside"  className=" bg-transparent h-full w-full md:w-[320px] rounded-none fixed  bottom-4 sm:bottom-0" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent >
          {(onClose) => (
            <>

              <PlayerFullCard
              onClose={onClose}
              onOpen={onOpen}
                />
            
            </>
          )}
        </ModalContent>
      </Modal>

   
    </>
  )
}
