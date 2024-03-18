import React from 'react'
import Box from './Box'
import Library from './Library'
import SidebarNavigation from './SidebarNavigation'

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {



  return (
    <div className='flex h-screen scrollbar-hide'>
       <div className='hidden md:flex flex-col gap-y-2
         h-full w-[300px] p-2 '>
         <SidebarNavigation/>
      
        <Box className='overflow-y-auto h-full '>
            <Library/>
        </Box>
        
       </div>
       <main className='h-full flex-1 overflow-y-auto py-2'>
        {children}
        
       </main>
    </div>
  
  )
}

export default Sidebar