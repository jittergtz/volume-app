import Header from '@/components/Header'
import MobileNavbar from '@/components/MobileNav'
import AmbientBackground from '@/components/libraryQ/AmbientBackground'
import ArtistFollowCard from '@/components/libraryQ/ArtistFollowCard'
import LibraryBody from '@/components/libraryQ/LibraryBody'

import React from 'react'
import { TbPlaylist } from 'react-icons/tb'

function page() {
  return (

    <>
     <div className='bg-neutral-950 relative overflow-hidden rounded-lg min-h-full pb-28'>
       <AmbientBackground/>
       
  
     

          <div className='flex p-5 items-center text-neutral-100/70 gap-1 '>
          <h1 className=' z-50 text-3xl'>
            Bibliothek
          </h1>
          <TbPlaylist size={26} />
          </div>
     
          <LibraryBody/>
          <div className='lg:px-10'>
            <div className='text-sm p-2 text-neutral-300'>Folge ich</div>
          <ArtistFollowCard/>
          </div>
         </div>
        
      
      <div className='px-5'>
        



        </div>
      


       
       




    
  



    </>

  )
}

export default page