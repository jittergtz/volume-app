import { DotBackgroundDemo } from "@/components/Next-Ui/DotBackground"
import { TracingBeamComp } from "@/components/Next-Ui/TracingBeamComp"
import Link from "next/link"
import React from "react"
import { FaGithub } from "react-icons/fa"

function page() {
  return (
    <div className="h-full  ">
    

      <div className="w-4xl">
        <DotBackgroundDemo />

        <TracingBeamComp />
      </div>
    </div>
  )
}

export default page
