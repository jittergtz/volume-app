"use client"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useMemo } from "react"
import { BiSearch } from "react-icons/bi"
import { FaRegUser, FaUser } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { LuLibrary } from "react-icons/lu"
import MobileNavItem from "./MobileNavItem"

function MobileNavbar() {
    const pathname = usePathname()

    const routes = useMemo(() => [
        {
            label: "Startseite",
            icon: HiHome,
            active: pathname === "/dashboard" ,
            href: "/dashboard",
        },
        {
            label: "Suche",
            icon: BiSearch,
            active: pathname === "/dashboard/search",
            href: "/dashboard/search",
        },
        {
            label: "Bibliothek",
            icon: LuLibrary ,
            active: pathname === "/dashboard/library",
            href: "/dashboard/library",
        },
        {
            label: "Profil",
            icon: FaRegUser,
            active: pathname === "/dashboard/profile",
            href: "/dashboard/profile",
        }
    ], [pathname])

  return (
    <nav className="flex sm:hidden h-16 z-50  px-5 justify-around items-center fixed
     bottom-0 left-0 w-full bg-neutral-900/70 backdrop-blur-xl">
        {routes.map((item) => {
            return (
                <MobileNavItem key={item.label} {...item} />
            )
        })}


    </nav>
  )
}

export default MobileNavbar
