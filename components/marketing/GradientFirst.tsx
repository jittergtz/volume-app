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
          toggleActions: "play none resume reverse",
        },
        duration: 3,
        opacity: 1,
      })
    }, [])



  return (
   <div className=' flex mt-96 flex-col md:flex-row h-[50rem] items-center justify-center p-5
      rounded-2xl z-0'>
         <Image
          alt='app player preview'
          src={imgValue}
          className='w-64 lg:w-96'
          />


         {// eslint-disable-next-line @next/next/no-img-element
         <img
          alt="Shadow"
          className="blur-2xl z-0 w-[830px] h-[380px] sm:blur2xl opacity-0 absolute "
          src={imgValue}
         id='gradient-background'
        />}

   

         <div className={`mt-5 md:mt-0 ml-7 w-80  lg:w-[33rem] z-40 ${classNames}`}>
            <h1 className='text-5xl py-2 lg:text-7xl'>
           {text}
            </h1>
            
          </div>

       
   </div>
  )
}

export default GradientFirst