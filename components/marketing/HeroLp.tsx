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
    <div className="h-[80vh] bg-neutral-100  w-full px-2 pb-4 ">


       
       <motion.div
         initial="hidden"
         animate="visible"
         transition={{ duration: 1 }}
         variants={variants1} className="flex flex-col  justify-center w-full items-center h-full ">
        <h1 className="text-center font-[600] md:font-[400] py-2 z-40 leading-tight  text-transparent bg-clip-text tracking-tighter bg-gradient-to-b from-neutral-900 to-neutral-700 text-[42px] md:text-7xl  lg:text-8xl  mx-auto">
        Volume find Music <br /> you love faster
        </h1>

        <div className="flex  justify-center gap-10  mt-8">
        <Link href={"/dashboard"} className="  z-40 flex items-center  px-4 p-2  bg-neutral-900 hover:bg-black/70 text-left text-neutral-200 rounded-full">
        Jetzt Starten <BiChevronRight className='text-neutral-00' size={24}/>
        </Link>
       
          
        
          <Link href={"/news"}  className="text-neutral-800  z-40 px-4 p-2 rounded-full hover:bg-black/20">
          Neues
          </Link>
        
        </div>
    
  
       </motion.div>
      
   



  
    </div>
  )
}

export default HeroLp
