"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FaPlay } from "react-icons/fa"


interface PlaylistItem {
    image: string
    name: string
    href: string
}



const PlaylistItem: React.FC<PlaylistItem> = ({
    image,
    name,
    href
}) => {
    const router = useRouter()

    const onClick = () =>{
        router.push(href)
    }

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
                    {name}
                 </p>
     

        </button>
        
     );
}
 
export default PlaylistItem;