"use client"
import { Image } from "@nextui-org/react"
import React, { useRef } from "react"
import { SparklesPreview } from "./SparklesPrev"
import ButtonToDashboard from "./ButtonToDashboard"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

function HeroLp() {
  useGSAP(() => {
    gsap.to("#hero-text", {
      opacity: 1,
      delay: 0.5,
    })
  }, [])

  useGSAP(() => {
    gsap.to("#spotlight", {
      opacity: 0.2,
      delay: 1,
      duration: 2,
    })
  }, [])

  return (
    <>
      <div
        id="hero-text"
        className=" w-full opacity-0   flex  flex-col justify-center items-center "
      >
        <div
          id="spotlight"
          className="absolute top-0 left-16 lg:-top-28 xl:-top-96 lg:left-28 xl:left-80 z-50 -rotate-45 h-96 w-24 md:h-[40rem] md:w-[10rem] lg:h-[48rem] xl:h-[80rem] blur-3xl bg-indigo-300 opacity-0"
        ></div>

        <SparklesPreview />

        <div className="flex justify-cente z-50 mb-5  -mt-40  ">
          <ButtonToDashboard />
        </div>
      </div>
    </>
  )
}

export default HeroLp
