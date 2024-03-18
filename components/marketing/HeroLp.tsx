"use client"
import { Image } from '@nextui-org/react'
import React, { useRef } from 'react'
import { SparklesPreview } from './SparklesPrev'
import ButtonToDashboard from './ButtonToDashboard'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


function HeroLp() {
   useGSAP(() => {
     gsap.to("#hero-text", {
      opacity: 1,
      delay: 0.5,
     })

   },[])
    


  return (
    <>
    <div
    id="hero-text"
    className=" w-full opacity-0 sm:h-screen   flex  flex-col justify-center items-center ">
      <SparklesPreview />
        
      <div className="flex justify-cente z-50  -mt-40 sm:mt-0 ">
      <ButtonToDashboard/>
      </div>
      
    </div>

      <div className="h-40 ">


        

          <div className='absolute max-w-4xl top-[30rem] sm:top-[37rem]  '>
          <div className='bg-shape2  bg-[#381870] opacity-50 shape-bg-blur '></div>
           </div>


            <div className='absolute  sm:top-[34rem] right-0 '>
            <div className='hidden sm:flex bg-shape1 bg-[#2f2f6e] opacity-50 shape-bg-blur'></div>
            </div>
             

            
            <div className='hidden max-w-screen md:flex absolute left-1/2 transform -translate-x-1/2  top-[10rem] '>
            <div className=' bg-shape3 bg-[#381870] opacity-30 shape-bg-blur  max-w-screen'></div>
            </div>


        

      </div>


    
    </>
  )
}

export default HeroLp