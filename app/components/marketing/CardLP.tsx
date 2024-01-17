"use client"
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {marketingCards} from "@/content/marketing/marketing.json"




function CardLP() {
const cards = marketingCards

  return (

    <>
    { cards.map((data) => {
      return (
        <>
        <div className="grid max-w-4xl ">
        <Card key={data.title} className="py-4 ">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold line-clamp-1">{data.category}</p>
          <small className="text-default-500 line-clamp-1 ">Tracks: {data.tracks}</small>
          <h4 className="font-bold text-large line-clamp-1 w-36 sm:w-44 ">{data.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover sm:w-48 sm:h-48 w-36 h-36 rounded-xl"
            src={data.image}
            width={270}
            height={270}
          />
        </CardBody>
      </Card>
      </div>
    </>
      )
    })
}
    </>
  );
}

export default CardLP