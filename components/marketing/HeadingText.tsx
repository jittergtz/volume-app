"use client"
import React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function HeadingText() {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from("#heading-2", {
      scrollTrigger: {
        trigger: "#heading-2",
        start: "top center",
        toggleActions: "play none resume reverse",
      },
      y: 200,
      duration: 2,
      opacity: 0,
    })
  }, [])
  return (
    <div
      id="heading-2"
      className="flex opacity-100 flex-col items-center justify-center "
    >
      <h1 className="text-[10rem] md:text-[25rem] text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-white">
        30s
      </h1>
      <p className="text-4xl sm:text-[4rem] line-clamp-2 text-center leading-normal text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-white">
        um neue Songs zu entdecken.
      </p>
    </div>
  )
}

export default HeadingText
