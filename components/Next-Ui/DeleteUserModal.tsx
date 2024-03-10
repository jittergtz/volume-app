import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, user} from "@nextui-org/react";
import { BiUserCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useSessionContext } from "@supabase/auth-helpers-react";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import toast from "react-hot-toast";

export default function DeleteUserModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  const router = useRouter()
  const { supabaseClient } = useSessionContext()
  const authModal = useAuthModal()
  const { user } = useUser()


// in development 

    const handleDelete = async () => {
        if (!user) {
            return authModal.onOpen()
          }
   
       
      const { data, error } = await supabaseClient
        .from("users")
        .delete()
        .eq("id", user.id )
      

        

      if (!error && data) {
       toast.success("yeah")
      
      }
    else if (error) {
        console.log(error)
    }}


  return (
    <>
      <Button onPress={onOpen} className='w-80 lg:w-[30rem] ' color="danger" variant="bordered" startContent={<BiUserCircle size={26} />}>
        Account löschen
       </Button>
      

      <Modal 
  
      className="absolute mx-auto "
       placement="center"
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent  >
          {(onClose) => (
            <>
              <ModalHeader  className="flex flex-col gap-1 text-xl">Account löschen</ModalHeader>
              <ModalBody >
                <p className=""> 
                 Diese Aktion kann nicht rückgängig gemacht werden.
                </p>
                <p>
                 Nach dem löschen werden alle Daten aus dein Volume Profil endgütlig entfernt!
                </p>
            
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Abbrechen
                </Button>
                <Button color="primary" onClick={handleDelete} >
                  Fortfahren
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </>
  );
}
