import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import PlayerFullCard from "./PlayerFullCard";

export default function NextModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <div
    onClick={onOpen}
     className="flex  h-full absolute w-full z-10 justify-center">
    <div className="w-24 h-2 rounded-2xl  bg-white/20" onClick={onOpen}></div>
    </div>

     
      <Modal size="full" backdrop="transparent" shouldBlockScroll={false} hideCloseButton={true} scrollBehavior="outside"  className=" bg-transparent h-full w-full md:w-[320px] rounded-none fixed  -bottom-1 sm:bottom-0" isOpen={isOpen} onOpenChange={onOpenChange}>
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
  );
}
