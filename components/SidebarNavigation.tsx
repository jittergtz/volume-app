"use client"
import React, { useMemo } from 'react'
import Box from './Box'
import SidebarItem from './SidebarItem'
import { usePathname } from 'next/navigation'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'

function SidebarNavigation() {
    
    const pathname = usePathname()

    const routes = useMemo(() => [
        {
            label: "Startseite",
            icon: HiHome,
            active: pathname !== "/dashboard/search",
            href: "/dashboard",
        },
        {
            label: "Suche",
            icon: BiSearch,
            active: pathname === "/dashboard/search",
            href: "/dashboard/search",
        }
    ], [pathname])



  return (
    <div>
        <Box>
         <div className='flex flex-col gap-y-4 px-5 py-4'>
            {routes.map((item) => {
            return <SidebarItem key={item.label} {...item} />
            })}
         </div>
        </Box>
    </div>
  )
}

export default SidebarNavigation