"use client"
import { Image } from '@nextui-org/react'
import React, { useRef } from 'react'
import { SparklesPreview } from './SparklesPrev'
import ButtonToDashboard from './ButtonToDashboard'
import { motion, useScroll, useTransform } from 'framer-motion'
import ParallaxMoveText from './ParallaxMoveText'
import { LampDemo } from './LampDemo'

function HeroLp() {
    const targetRef = useRef<HTMLDivElement>(null)
    const {scrollY,scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.8],[1, 0] )
    const position = useTransform(
        scrollYProgress,
        [1, 0],
        ["sticky top-0", "relative"]
    )


    const backgroundOpacity = useTransform(
        scrollYProgress,
        [1, 0.7],
        [100, 0] // Hier kannst du den Bereich von 0 bis 100 festlegen
    )

    const background = useTransform(
        backgroundOpacity,
        opacity => `linear-gradient(180deg, rgba(0, 0, 0, ${opacity}%), rgba(6, 6, 100, ${opacity}%), rgba(0, 0, 0, ${opacity}%))`
    )
    


  return (
    <>
    <motion.div
    style={ {opacity} }
    ref={targetRef}
    className="fixed w-full sm:h-screen  flex  flex-col justify-center items-center ">
      <SparklesPreview/>
        
      <div className="flex justify-center  -mt-40 sm:mt-0 ">
      <ButtonToDashboard/>
      </div>
      </motion.div>

      <div className="h-screen">

      </div>


      <motion.div 
       style={{ position, background }}
      className="flex-col h-[160rem] flex items-center  pt-40  ">
      <Image
      src="/image/dashboard-prev-main.png"
      alt="preview image"
      width="1200"
      height="1200"
      className="object-cover opacity-100  object-left-top inset-x-0 rounded-2xl mx-auto"/>


    </motion.div>
    </>
  )
}

export default HeroLp