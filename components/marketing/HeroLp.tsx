"use client"
import { Image } from '@nextui-org/react'
import React, { useRef } from 'react'
import { SparklesPreview } from './SparklesPrev'
import ButtonToDashboard from './ButtonToDashboard'
import { motion, useScroll, useTransform } from 'framer-motion'
import ParallaxMoveText from './ParallaxMoveText'
import { LampDemo } from './LampDemo'

function HeroLp() {
   
    


  return (
    <>
    <div
    className=" w-full sm:h-screen   flex  flex-col justify-center items-center ">
      <SparklesPreview/>
        
      <div className="flex justify-cente z-50  -mt-40 sm:mt-0 ">
      <ButtonToDashboard/>
      </div>
      
    </div>

      <div className="h-72">


        

          <div className='absolute max-w-4xl top-[30rem] sm:top-[37rem] '>
          <div className='bg-shape2  bg-[#381870] opacity-50 shape-bg-blur'></div>
           </div>


            <div className='absolute  sm:top-[34rem] right-0 '>
            <div className='hidden sm:flex bg-shape1 bg-[#2f2f6e] opacity-50 shape-bg-blur'></div>
            </div>
             

            
            <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2  top-[10rem] '>
            <div className=' bg-shape3 bg-[#381870] opacity-30 shape-bg-blur'></div>
            </div>


        

      </div>


    
    </>
  )
}

export default HeroLp