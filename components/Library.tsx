

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";


import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import ListItem from "./ListItem";
import ArtistFollowCard from "./libraryQ/ArtistFollowCard";

const Library = () => {


    return (
        <div className="flex flex-col p-1">
            <div className="flex items-center justify-between px-5 pt-4">
                    <div className="inline-flex items-center gap-x-2"> 
                        <TbPlaylist size={26} className="text-neutral-400"/>
                        <p className=" text-neutral-400 ">
                            Deine Bibliothek
                        </p>
                    </div>
                 
              
                   
            </div>
            <div className="flex felx-co mb-5 gap-y-2 mt-4 px-3">
                Liste deiner Playlisten!
            </div>
          <div className="flex flex-col gap-2">
            <ListItem 
            name="Favoriten"
            image="/image/volume-heartIcon.svg"
             href='/dashboard/playlist/favoriten' />


            <ArtistFollowCard/>
             </div>
        </div>
      );
}
 
export default Library;



