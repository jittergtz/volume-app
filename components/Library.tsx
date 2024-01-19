"use client"

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
    const onClick = () => {

    }

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                    <div className="inline-flex items-center gap-x-2"> 
                        <TbPlaylist size={26} className="text-neutral-400"/>
                        <p className="text-neutral-400 ">
                            Deine Bibliothek
                        </p>
                    </div>
                    <AiOutlinePlus size={20} className="text-neutral-400 
                    cursor-pointer hover:text-white transition"/>
            </div>
            <div className="flex felx-col gap-y-2 mt-4 px-3">
                Liste deiner Playlisten!
            </div>
        </div>
      );
}
 
export default Library;



