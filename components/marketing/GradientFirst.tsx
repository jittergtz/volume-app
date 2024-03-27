"use client"
import { Image } from '@nextui-org/react'
import React from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";



function GradientFirst({imgValue, classNames, text}: {
  imgValue: string,
  text: string,
  classNames: any}) {

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
      gsap.to("#gradient-background", {
        scrollTrigger: {
          trigger: "#gradient-background",
          start: "top center",
          toggleActions: "play none none  none",
        },
        duration: 3,
        delay: 0.5,
        opacity: 1,
      })
    }, [])



  return (
   <div className=' flex flex-col md:flex-row h-[50rem] items-center justify-center p-5
      rounded-2xl'>
         <Image
          alt='app player preview'
          src={imgValue}
          className='w-64 lg:w-96'
          />


         <img
          alt="Shadow"
          className="blur-2xl sm:blur-3xl opacity-0 absolute rounded-full"
          src={imgValue}
         id='gradient-background'
        />

   

         <div className={`mt-5 md:mt-0 ml-7 w-80  lg:w-[33rem] z-40 ${classNames}`}>
            <h1 className='text-5xl lg:text-7xl'>
           {text}
            </h1>
            
          </div>

       
   </div>
  )
}

export default GradientFirst