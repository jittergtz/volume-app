import { DotBackgroundDemo } from "@/components/Next-Ui/DotBackground"
import { NewsPosts } from "@/components/Next-Ui/NewsPosts"

import Link from "next/link"
import React from "react"
import { FaGithub } from "react-icons/fa"

function page() {
  return (
    <div className="h-full  ">
    

      <div className="w-4xl">
        <DotBackgroundDemo />

        <NewsPosts/>
      </div>
    </div>
  )
}

export default page
