import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import ChipNews from "./ChipNews";

export default function GridImgLp() {
  return (
    <div className="flex flex-col items-center gap-10">
      <ChipNews
      text={"Änderugen mit Version 0.9"}/>
    <div className="max-w-[1100px] gap-5 grid grid-cols-12 grid-rows-2 px-8">
    <Card className="col-span-12 bg-transparent shadow-none  sm:col-span-4  h-[380px]">
  
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full  object-cover"
        src="/image/play.png"
      />
    </Card>
    <Card className="col-span-12 bg-transparent shadow-none  sm:col-span-4 h-[380px]">
  
      <Image
        removeWrapper
        alt="Card background"
        className="z-0  object-cover"
        src="/image/uber.png"
      />
    </Card>
    <Card className="col-span-12 bg-transparent shadow-none  sm:col-span-4 h-[380px]">

      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full  object-cover"
        src="/image/cards.png"
      />
    </Card>
    <Card isFooterBlurred className="w-full bg-transparent shadow-none   h-[380px] col-span-12 sm:col-span-5">
 
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full    object-cover"
        src="/image/fav.png"
      />
    
    </Card>
    <Card isFooterBlurred className="w-full bg-transparent shadow-none    h-[380px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">

      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0  object-cover "
        src="/image/lil.png"
      />

    </Card>
  </div>
</div>
  );
}
