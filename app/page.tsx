"use client"
import { MissingStaticPage } from "next/dist/shared/lib/utils"

import Hero from "../components/Hero"
import Navbar from "../components/marketing/NavbarLp"
import { Button, Chip, Image } from "@nextui-org/react"
import CardLP from "../components/marketing/CardLP"
import { BsSoundwave } from "react-icons/bs"
import AccordionCard from "../components/Next-Ui/Accordion"
import ChipNews from "../components/Next-Ui/ChipNews"
import Link from "next/link"
import GridImgLp from "@/components/Next-Ui/GridImgLp"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"




export default function Home() {

  const ref = useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["end start", "end start"]
})

const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

const {scrollYProgress: completionProgress} = useScroll()





  return (
    <main>
      <Navbar />

      <div className=" 
       h-screen relative">
        <div className="flex justify-center">
        <img
        alt="Landing page background"
        className="z-0 fixed top-0 h-screen w-full  object-cover"
        src="/image/6867640.jpg"/>
        </div>

   
       

        <div className="absolute  justify-center top-36 z-20  left-1/2  transform -translate-x-1/2  ">
          <div className="flex flex-col items-center justify-center">
            <ChipNews/>
            <BsSoundwave className="text-white/80 w-28 h-28 lg:w-36 lg:h-36  xl:w-48 xl:h-48 " />
          </div>
          <h1 className="text-8xl z-50 text-center xl:text-[15rem] lg:text-[11rem] md:text-9xl   tracking-tighter -mt-9 xl:-mt-16 font-semibold text-white/80 ">
            Volume
          </h1>
          <div className="flex justify-center">
          <p className="text-lg lg:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400
          opacity-70 text-center lg:w-96 line-clamp-3">
            Streame gratis musik überall und jedezeit. jetzt noch besser
          </p>
          </div>
          <div className="flex justify-center mt-5 gap-5 ">
   
             
              <Button
            className="bg-black rounded-2xl p-3 px-5
            shadow-md ">
              <Link href={"/dashboard"}>
               Starten
              </Link>
            </Button>
            <Button
            color="primary"
            variant="shadow"
            className="  shadow-md rounded-2xl p-3 px-5 ">
             Premium
             <Chip size="sm">Bald</Chip>
            </Button>
          </div>
        </div>
      </div>


      

      <div className="flex mt-20 w-full justify-center  flex-col">
       
      
        <div className="flex lg:mt-48 mt-28 justify-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-neutral-300 ">
        <GridImgLp/>
        </h1>
      </div>

      <div className="flex justify-center">
      <motion.div
           ref={ref} style={{ scale: scrollYProgress }}
          >
      <h1 className="text-4xl md:text-5xl tracking-tighter w-72 md:w-96  mt-28
          text-transparent bg-clip-text bg-gradient-to-b text-center from-white to-neutral-500">
            Und so einfach gehts
      </h1>
      </motion.div>
      </div>

<div className="flex justify-center">
    
      <motion.section animate={{ x: 100, scale: 1}} initial={{ scale: 0}}
       className="   border">

        <img
        className=" h-96
        border border-green-300"
         src="image/player-prev.jpg"
          alt="App preview picture" />

      </motion.section>

</div>




      <div className=" p-4 flex justify-center  gap-4 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:p-10 ">
          <CardLP />
        </div>
      </div>

        </div>

        

    
  

  

  
    </main>
  )
}
