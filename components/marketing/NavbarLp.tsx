"use client"
import useAuthModal from "@/hooks/useAuthModal"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import React from "react"

function Navbar() {
  const authModal = useAuthModal()

  
  return (
    <nav className="h-16 z-50 flex px-5 justify-between items-center fixed top-0 left-0 w-full  backdrop-blur-sm">
      <span className="text-3xl tracking-tighter text-neutral-300">Volume</span>

 
      <div className="flex gap-2 items-center">
      <Link href={"/news"} 
      className="text-neutral-300 hover:text-white hover:cursor-pointer" >
      News
      </Link>
      <Button className="bg-transparent border-2
       text-neutral-300 hover:text-white border-neutral-100/10 " 
            variant="shadow"
            onClick={authModal.onOpen} >
        <Link href={"/dashboard"} >
      Anmelden
      </Link>
    </Button>
    </div>

  

    </nav>
  )
}

export default Navbar
