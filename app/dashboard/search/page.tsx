import Header from '@/components/Header'
import MobileNavbar from '@/components/MobileNav'
import SearchInput from '@/components/SearchInput'
import React from 'react'

function page() {
  return (
   <>
   <Header>
    <h1 className='text-3xl font-bold p-2'>Suche</h1>
    <div className='pb-40' >
    <SearchInput/>
    </div>
    
   </Header>


   
   
   <MobileNavbar/>
   
   
   </>
  )
}

export default page