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

      <Button className="bg-transparent border-2 border-neutral-100/30 " 
            variant="shadow"
            onClick={authModal.onOpen} >
        <Link href={"/dashboard"} >
      Anmelden
      </Link>
    </Button>

    </nav>
  )
}

export default Navbar
