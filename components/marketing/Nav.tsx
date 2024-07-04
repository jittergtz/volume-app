"use client"

import * as React from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { BiChevronRight } from "react-icons/bi"
import Link from "next/link"

function Nav() {
  const [open, setOpen] = React.useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const menuVariants = {
    open: {
      height: "250px", // Höhe des geöffneten Menüs (anpassen an den Inhalt)
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        opacity: { duration: 0.4 } // schnelleres Verblassen der Opazität
      }
    }
  }

  return (
    <motion.nav
      className={`h-16 fixed top-2 sm:top-0 z-50 max-w-full left-2 right-2 rounded-2xl flex justify-center items-center px-5 backdropcustom transition-all duration-300  border-neutral-800 ${
        hasScrolled ? "border bg-black md:border-none md:bg-transparent md:backdrop-blur-md" : ""
      } ${ open ? "  border-t border-x rounded-none rounded-t-2xl " : ""}`}
    >
      <div className="flex items-center justify-between max-w-5xl w-full md:max-w-7xl">
        <div className="text-neutral-600 text-lg">Volume</div>

        <div className="hidden md:flex gap-7 items-center font-light text-neutral-800">
          <button className="hover:text-neutral-400 transition">Neues</button>
  <button className="bg-gradient-to-l from-pink-600 to-blue-700 hover:bg-white/90 transition p-2 px-4 font-medium text-neutral-200 rounded-full">
          <Link href={"/dashboard"}>
          Jetzt Starten
          </Link>
          </button>
        </div>

        <div className="md:hidden flex">
          <RxHamburgerMenu
            onClick={() => setOpen(!open)}
            className="text-neutral-600  hover:scale-105 hover:cursor-pointer transition"
            size={20}
          />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 right-0 top-[3.9rem] bg-neutral-950/90  z-40 border-x border-b border-neutral-800 text-neutral-300 rounded-b-2xl overflow-hidden md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{ overflow: "hidden" }} // Verhindert, dass der Inhalt außerhalb der Animation sichtbar ist
            
          >
            <div className="flex flex-col gap-4  px-5 py-10 text-neutral-400">
              <button className="w-full text-left ">Neues</button>
            
              <button className="w-full flex items-center text-left text-neutral-50 hover:text-neutral-400 rounded-2xl">
                Jetzt Starten <BiChevronRight className='text-neutral-00' size={26}/>
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Nav