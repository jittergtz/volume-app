"use client"
import React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function InfoText() {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to("#info-text", {
      scrollTrigger: {
        trigger: "#info-text",
        start: "50px 80% ",
        toggleActions: "play none resume reverse",
      },
      duration: 1,
      opacity: 1,
    })
  }, [])

  return (
    <div className="flex justify-center w-full px-10">
      <div
        id="info-text"
        className="opacity-0 text-xs sm:text-sm text-indigo-100 max-w-2xl flex w-full justify-between  gap-5"
      >
        <p className="w-60">
          Lorem ipsum atque soluta perspiciatis aliquam,temporibus, unde sed ab
          quisquam erjrpgjerpojrpogjrepogj erpgojreg esse consequatur accusamus
          harum quibusdam ut?
        </p>

        <p className="w-60">
          Lorem ipsum, dolor sit amet consectetur aecati dicta quibusdam ducimus
          iure soluta iusto temporibus, ab ipsum, blanditiis quia saepe! Nam
          atque excepturi facilis.
        </p>
      </div>
    </div>
  )
}

export default InfoText
