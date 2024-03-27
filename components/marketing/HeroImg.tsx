"use client"

import { Image } from '@nextui-org/react'
import React from 'react'

import gsap from "gsap"
import { useGSAP } from "@gsap/react"


function HeroImg() {
   
        useGSAP(() => {
            gsap.from("#cor", {
             y: 400,
             duration: 2,
            })
       
          },[])
           
   

  return (
    <div id='cor' className='' >



<div className="relative z-40 inline-flex  overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2a275c_0%,#7a85a3_50%,#2a275c_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-gray-950 hover:bg-transparent  text-sm font-medium text-neutral-200 backdrop-blur-3xl">
     <Image
alt="hero-img"
className="rounded-2xl   shadow border-gray-700 
object-cover max-h-[580px]"
src="image/hero-img1.png"
/>
   
  </span>

</div>

</div>
  )
}

export default HeroImg