"use client"
import React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BsSoundwave } from "react-icons/bs"

function FooterText() {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to("#volume-icon", {
      scrollTrigger: {
        trigger: "#volume-icon",
        toggleActions: "play none resume reverse",
      },
      duration: 1,
      opacity: 1,
    })
  }, [])

  return (
    <div id="volume-icon" className="flex justify-center opacity-0">
      <BsSoundwave className="text-gray-900" size={240} />
    </div>
  )
}

export default FooterText
