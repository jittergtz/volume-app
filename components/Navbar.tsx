"use client"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import React from "react"

function Navbar() {
  return (
    <nav className="h-16 z-50 flex px-5 justify-between items-center fixed top-0 left-0 w-full bg-black bg-opacity-20 backdrop-blur-sm">
      <span className="text-3xl tracking-tighter text-neutral-200 opacity-70">Volume</span>

      <Button color="primary">
      <Link href={"/"}>
      Anmelden
      </Link>
    </Button>

    </nav>
  )
}

export default Navbar
