import Header from '@/components/Header'
import MobileNavbar from '@/components/MobileNav'
import ArtistFollowCard from '@/components/libraryQ/ArtistFollowCard'
import LibraryBody from '@/components/libraryQ/LibraryBody'
import React from 'react'
import { TbPlaylist } from 'react-icons/tb'

function page() {
  return (

    <>
     <div className='bg-neutral-950  rounded-lg min-h-full'>
       <div className='rounded-lg'>
        <Header>
       
          <div className='flex items-center text-neutral-100/70 gap-1 mt-10'>
          <h1 className=' z-50  text-3xl'>
            Bibliothek
          </h1>
          <TbPlaylist size={26} />
          </div>
         </Header>
          <LibraryBody/>
          <div className='p-1 lg:px-10'>
          <ArtistFollowCard/>
          </div>
         </div>
        
      
      <div className='px-5'>
        



        </div>
      


       
       




        </div>
  



    </>

  )
}

export default page