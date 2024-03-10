"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FaPlay } from "react-icons/fa"


interface ListItem {
    image: string
    name: string
    href: string
}



const ListItem: React.FC<ListItem> = ({
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
        overflow-hidden gap-x-4 bg-neutral-600/20 sm:hover:bg-neutral-400/20
        transition pr-4 ">
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image
                className="object-cover "
                src={image}
                fill
                alt="liked"
                 />
            </div>
            <p className="font-medium transcate py-5" >
                    {name}
                 </p>
                 <div className="absolute transition opacity-0 
                 rounded-full flex items-center justify-center bg-neutral-200/90
                 p-4 drop-shadow-md right-5 sm:group-hover:opacity-100 hover:scale-110 " >
                    <FaPlay className="text-black/90" />
                 </div>

        </button>
        
     );
}
 
export default ListItem;