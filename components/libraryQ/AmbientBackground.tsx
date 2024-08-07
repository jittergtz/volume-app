"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useState } from "react"

function AmbientBackground() {
  useGSAP(() => {
    gsap.to("#animate", {
      opacity: 0.3,
      delay: 0.5,
      duration: 2.5,
    })
  }, [])
  return (
    <div
      id="animate"
      className="absolute  flex z-0 blur-xl opacity-0 top-2 -left-48  rotate-45 w-[30rem] rounded-lg h-20 md:h-28 md:w-[30rem]
   bg-gradient-to-r from-neutral-100  "
    ></div>
  )
}

export default AmbientBackground
