import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function ProfilGridCard() {
  return (
    <div className="max-w-[50rem] gap-2 flex flex-col px-8">
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Volume Premium</p>
        <h4 className="text-white font-medium text-large">Blad verfügbar</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/image/gold-volume.jpg"
      />
    </Card>
   
  </div>
  );
}
