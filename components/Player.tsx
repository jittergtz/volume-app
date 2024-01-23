"use client"

import { Button, Card, CardBody, Slider } from "@nextui-org/react";
import { HeartIcon } from "./Next-Ui/HeartIcon";
import { RepeatOneIcon } from "./Next-Ui/RepeatOneIcon";
import { PreviousIcon } from "./Next-Ui/PreviousIcon";
import { NextIcon } from "./Next-Ui/NextIcon";
import { PauseCircleIcon } from "./Next-Ui/PauseCircleIcon";
import { ShuffleIcon } from "./Next-Ui/ShuffleIcon";
import { useState } from "react";
import Image from "next/image";



const Player = () => {
    const [liked, setLiked] = useState(false);

    
    return ( 
        <div className="fixed bottom-16 sm:bottom-0 backdrop-blur-xl
        border-b p-1 border-neutral-400 rounded-t-xl
        w-full ">

<div
     
    >
      <div>
        <div className="flex md:gap-4 items-center justify-between ">
          <div className=" gap-2 flex">
            <Image
         alt="Album cover"
        className="object-cover rounded-lg "
        objectFit='cover'
        height={40}
        width={40}
        src="/image/IMG_7651.jpg"
                     
        
            />
            <div>
            <h3 className="font-semibold text-xs sm:text-small text-foreground/90">Daily Mix</h3>
                <p className="sm:text-small text-xs text-foreground/80">12 Tracks</p>
             </div>
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">

              </div>
       
              <div className="flex-col">

              <div className="flex flex-col gap-1">
           
            </div>

            <div className="flex w-full items-center justify-center">
        
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PreviousIcon size={23} />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PauseCircleIcon size={40} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <NextIcon size={23}/>
              </Button>
       
            </div>
          </div>
  
      
      
       

          </div>
             </div>

             <div className="flex  items-center justify-center ">
            <Button
                isIconOnly
                className="flex  justify-center items-center text-default-900/60 data-[hover]:bg-foreground/10 "
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon size={26}
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
              </div>
      


     

           
        </div>
      </div>
    </div>

          
        </div>
     );
}
 
export default Player;