import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import PlayerFullCard from "./PlayerFullCard";

export default function NextModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <div
    onClick={onOpen}
     className="flex h-12  absolute w-full z-10 justify-center">
         <Button className="w-24 h-2  bg-white/20" onPress={onOpen}></Button>
    </div>
     
      <Modal size="full"  className="md:w-max-[300px] h-full w-full fixed bottom-0 bg-transparent" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
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
