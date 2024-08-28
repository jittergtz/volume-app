"use client"
import { Image } from "@nextui-org/react"
import React, { useRef } from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { StartButton } from "./Nav"


function HeroLp() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <div className="h-[90vh] bg-gradient-to-t from-black to-zinc-900 relative overflow-hidden w-full  ">
    
     
       <motion.div
         initial="hidden"
         animate="visible"
         transition={{ duration: 1 }}
         variants={variants1} className="flex flex-col  justify-center w-full items-center h-full ">
        <h1 className="text-center  py-2 z-40 font-[600] md:font-[400] leading-tight  text-transparent bg-clip-text tracking-tighter  bg-gradient-to-t from-neutral-400 to-neutral-100 text-[38px] sm:text-[50px] md:text-7xl lg:text-8xl xl:text-[110px]  mx-auto">
        Musik die du liebst <br /> schneller entdecken
        </h1>

        <div className="flex  justify-center gap-10  mt-8">
        <StartButton/>
       
          
        
          <Link href={"/news"}  className="text-neutral-200 flex items-center justify-center z-40 px-4 p-2 rounded-full hover:border-[2px] border-neutral-700">
          Neues
          </Link>
        
        </div>
    
  
       </motion.div>
    



  
    </div>
  )
}

export default HeroLp
