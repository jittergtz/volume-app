"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AnyNode } from "postcss"
import { FaPlay } from "react-icons/fa"





const PlaylistItem = () => {
    const router = useRouter()

  
    return ( 
        <button
        onClick={onClick}
         className="relative group flex items-center rounded-md
        overflow-hidden gap-x-4  hover:bg-neutral-900
        transition pr-4 ">
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image
                className="object-cover rounded-lg "
                src={image}
                fill
                alt="liked"
                 />
            </div>
            <p className="font-medium transcate py-5" >
     
                 </p>
     

        </button>
        
     );
}
 
export default PlaylistItem;