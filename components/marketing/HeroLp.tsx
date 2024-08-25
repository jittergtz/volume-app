"use client"
import { Image } from "@nextui-org/react"
import React, { useRef } from "react"
import { SparklesPreview } from "./SparklesPrev"
import ButtonToDashboard from "./ButtonToDashboard"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { BiChevronRight } from "react-icons/bi"
import { VelocityScroll } from "./ui/textXrotate"
import { motion } from "framer-motion"
import Link from "next/link"

function HeroLp() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <div className="h-[80vh] relative  w-full  ">

    {/* <HeroAnimation/>*/}       
       <motion.div
         initial="hidden"
         animate="visible"
         transition={{ duration: 1 }}
         variants={variants1} className="flex flex-col  justify-center w-full items-center h-full ">
        <h1 className="text-center  py-2 z-40  leading-tight  text-transparent bg-clip-text tracking-tight  bg-gradient-to-t from-neutral-400 to-neutral-100 text-[47px] md:text-7xl  lg:text-8xl  mx-auto">
        Musik die du liebst <br /> schneller entdecken
        </h1>

        <div className="flex  justify-center gap-10  mt-8">
        <Link href={"/dashboard"} className="  z-40 flex items-center  px-4 p-2  border border-neutral-600 hover:bg-gradient-to-b from-neutral-600 to-neutral-400 hover:border-neutral-700/80  text-left text-neutral-300 rounded-full">
        Jetzt Starten <BiChevronRight className='text-neutral-00' size={24}/>
        </Link>
       
          
        
          <Link href={"/news"}  className="text-neutral-200  z-40 px-4 p-2 rounded-full hover:bg-neutral-800">
          Neues
          </Link>
        
        </div>
    
  
       </motion.div>
    



  
    </div>
  )
}

export default HeroLp
