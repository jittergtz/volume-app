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
    <div className="absolute top-0 z-0 h-[80vh] w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#3C3C3C,rgba(255,255,255,0))]"></div>

       
       <motion.div
         initial="hidden"
         animate="visible"
         transition={{ duration: 1 }}
         variants={variants1} className="flex flex-col  justify-center w-full items-center h-full ">
        <h1 className="text-center  py-2 z-40 leading-tight  text-transparent bg-clip-text tracking-tighter bg-gradient-to-b from-neutral-300 to-neutral-400 text-[42px] md:text-7xl  lg:text-8xl  mx-auto">
        Volume find Music <br /> you love faster
        </h1>

        <div className="flex  justify-center gap-10  mt-8">
        <Link href={"/dashboard"} className="  z-40 flex items-center  px-4 p-2  bg-neutral-900 hover:bg-white/40 text-left text-neutral-200 rounded-full">
        Jetzt Starten <BiChevronRight className='text-neutral-00' size={24}/>
        </Link>
       
          
        
          <Link href={"/news"}  className="text-neutral-200  z-40 px-4 p-2 rounded-full hover:bg-white/40">
          Neues
          </Link>
        
        </div>
    
  
       </motion.div>
      
   



  
    </div>
  )
}

export default HeroLp
