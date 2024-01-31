"use client"
import React, { useRef } from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {marketingCards} from "@/content/marketing/marketing.json"
import { motion, useScroll, useTransform } from "framer-motion";




function CardLP() {
const cards = marketingCards

const ref = useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["0 4", "0.7 1"]
})

const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
const scale = useTransform(scrollYProgress, [0, 0], [0, 1])
  return (

    <>
    { cards.map((data) => {
      return (
        <>
        <motion.div ref={ref} style={{ scale: scrollYProgress }} className="grid max-w-4xl ">
        <Card  key={data.title} className="py-4 ">
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
      </motion.div>
    </>
      )
    })
}
    </>
  );
}

export default CardLP







{/*

     <div  className="bg-neutral-800 relative border border-neutral-700 p-2
      rounded-xl flex flex-col justify-center animate-appearance-in">
           <img
             className='rounded-xl'
             height={270}
             width={270}
             alt='cover'
             src={data.image}
           />
 
           <span className='overflow-x-hidden line-clamp-1'>{data.title}</span>
           <span className='text-xs overflow-x-hidden line-clamp-1'>{data.artist}</span>
           
           <button className=' w-full h-full absolute rounded-xl text-center text-black'>
            <FaPlay className='h-3 sm:h-8' />
          </button>
         </div>








*/}