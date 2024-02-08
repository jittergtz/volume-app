import * as Dialog from "@radix-ui/react-dialog"
import { BsSoundwave } from "react-icons/bs"
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
            className=" backdrop-blur-3xl bg-black/70  fixed
            inset-0" />
               

                 <img className="absolute translate-x-[-50%] translate-y-[-50%]  top-[50%] left-[50%] " src="/image/shadow-authModel.svg" alt="shadow" />



            <Dialog.Content className="fixed drop-shadow-md border border-neutral-700 
            top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw]
            md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-gradient-to-t from-black via-black to-neutral-800
            backdrop-blur-xl p-[25px] focus:outline-none ">
                <div className="flex flex-col items-center justify-center">
                <BsSoundwave className="text-neutral-100 w-28 h-10 " />
                <h1 className="text-4xl ">Volume</h1>
                   
                   
                </div>
           
        
                   
                    {children}
                
                <div>
                    <Dialog.Close asChild>
                        <button className="text-neutral-400  hover:text-white absolute top-3 right-3
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