
import AuthCard from '@/components/AuthCard'
import Header from '@/components/Header'
import MobileNavbar from '@/components/MobileNav'

import React from 'react'



function page() {



  return (
    <>
        <Header>
        <div className='sm:mb-2'>
          <h1 className='text-white z-50 mt-10 text-3xl'>
            Profil
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4
          gap-3 mt-4'>
          </div>
           </div>
        </Header>


   

        
        <AuthCard/>
       
       




    <MobileNavbar/>
    </>
  )
}


export default page