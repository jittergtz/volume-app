import * as Dialog from "@radix-ui/react-dialog"
import { IoMdClose } from "react-icons/io"


 interface ModalProps {
    isOpen: boolean
    onChange: (open: boolean) => void
    title: string
    description: string
    children: React.ReactNode
 }

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
}) => {
    return ( 
       <Dialog.Root
       open={isOpen}
       defaultOpen={isOpen}
       onOpenChange={onChange} 
       >
        <Dialog.Portal>
            <Dialog.Overlay
            className="bg-neutrral-900/20 backdrop-blur-sm fixed
            inset-0" />
            <Dialog.Content className="fixed drop-shadow-md border border-neutral-700
            top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw]
            md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-neutral-900/60
            backdrop-blur-xl p-[25px] focus:outline-none ">
                <Dialog.Title className="text-xl text-center font-bold mb-4">
                    {title}
                </Dialog.Title>
                <Dialog.Description className="mb-5 text-sm leading-normal text-center">
                    {description}
                </Dialog.Description>
                   
                    {children}
                
                <div>
                    <Dialog.Close asChild>
                        <button className="text-neutral-400 hover:text-white absolute top-3 right-3
                        inline-flex h-10 w-20 appearance-none items-center justify-center rounded-full " >
                            <IoMdClose/>
                        </button>
                    </Dialog.Close>
                </div>



            </Dialog.Content>
        </Dialog.Portal>
            
       </Dialog.Root>
     );
}
 
export default Modal;