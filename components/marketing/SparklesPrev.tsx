"use client"
import React from "react"
import { SparklesCore } from "./Sparkles"
import ChipNews from "../Next-Ui/ChipNews"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"


export function SparklesPreview() {

  useGSAP(() => {
    gsap.to("#sparkles", {
      opacity: 1,
      delay: 1.2,
    })
  }, [])

  return (
    <div className="h-[30rem] md:h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="flex z-40 mb-5 flex-col items-center justify-center">
        <ChipNews text={"Neuigkeiten Volume 0.9 🎉"} />
      </div>
      <h1
        className="text-8xl md:text-[13rem] z-40  text-center    tracking-tighter  text-transparent
        bg-clip-text bg-gradient-to-b from-white to-neutral-500 "
      >
        Volume
      </h1>
      <div id="sparkles" className="w-[40rem] opacity-0  h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20   top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore 
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full "
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full   h-full bg-gray-950 [mask-image:radial-gradient(210px_200px_at_top,transparent_30%,white)] md:[mask-image:radial-gradient(350px_200px_at_top,transparent_30%,white)]  "></div>
      </div>
    </div>
  )
}

