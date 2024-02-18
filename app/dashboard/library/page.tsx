import Header from '@/components/Header'
import MobileNavbar from '@/components/MobileNav'
import LibraryBody from '@/components/libraryQ/LibraryBody'
import React from 'react'
import { TbPlaylist } from 'react-icons/tb'

function page() {
  return (

    <>
     <div className='bg-neutral-950  rounded-lg h-full'>
       <div className='bg-gradient-to-b rounded-lg from-neutral-700/40'>
        <Header>
       
          <div className='flex items-center text-neutral-100/70 gap-1 mt-10'>
          <h1 className=' z-50  text-3xl'>
            Bibliothek
          </h1>
          <TbPlaylist size={27} />
          </div>
         </Header>
         </div>
        
      
      <div className='px-5'>
        <LibraryBody/>



        </div>
      


       
       




        </div>
  



    </>

  )
}

export default page