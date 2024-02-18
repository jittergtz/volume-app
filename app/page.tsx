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
import { SparklesPreview } from "@/components/marketing/SparklesPrev"
import { TabsDemo } from "@/components/marketing/ProductTab"
import ButtonToDashboard from "@/components/marketing/ButtonToDashboard"
import { HeroParallaxDemo } from "@/components/marketing/HeroParallaxDemo"




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

      <div className="  relative">
     

   
       
        <SparklesPreview/>
     
      </div>
      
      <div className="flex justify-center">
      <ButtonToDashboard/>
      </div>
 
      
      
      
      <TabsDemo/>



      <div className="h-48">

      </div>
      <HeroParallaxDemo/>


      

      <div className="h-96">

      </div>
  

  

  
    </main>
  )
}
