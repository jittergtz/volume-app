"use client"
import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react"
import ChipNews from "./ChipNews"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function GridImgLp() {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to("#grid", {
      scrollTrigger: {
        trigger: "#grid",
        start: "top center",
        toggleActions: "play none resume reverse",
      },
      duration: 1.3,
      opacity: 1,
    })
  }, [])
  return (
    <div id="grid" className="flex opacity-0 flex-col items-center gap-10">
      <ChipNews text={"Änderugen mit Version 0.9"} />
      <div className="max-w-[1100px] gap-5 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 bg-transparent shadow-none  sm:col-span-4 max-h-[380px]  ">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full  object-cover"
            src="/image/grid-1.png"
          />
        </Card>
        <Card className="col-span-12 bg-transparent shadow-none  sm:col-span-4 max-h-[380px] ">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0  object-cover"
            src="/image/grid-2y.png"
          />
        </Card>
        <Card className="col-span-12 bg-transparent shadow-none max-h-[380px]  sm:col-span-4 ">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full  object-cover"
            src="/image/grid-3a.png"
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full bg-transparent shadow-none max-h-[380px]   col-span-12 sm:col-span-5"
        >
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full    object-cover"
            src="/image/grid-4.png"
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full  bg-transparent shadow-none max-h-[380px]    col-span-12 sm:col-span-7"
        >
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full rounded-3xl object-cover "
            src="/image/grid-5.png"
          />
        </Card>
      </div>
    </div>
  )
}
