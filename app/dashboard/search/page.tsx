import Header from '@/components/Header'
import MobileNavbar from '@/components/MobileNav'
import SearchAmbientLight from '@/components/Next-Ui/SearchAmbientLight'
import SearchInput from '@/components/SearchInput'
import React from 'react'

function page() {
  return (
   <>
   <div className='rounded-lg'>
   <SearchAmbientLight/>
   <Header>
    <h1 className='text-3xl text-white '>Suche</h1>
   </Header>
   </div>
   <div className='px-5 pb-40' >
    <SearchInput/>
   
    </div>




   
   
   <MobileNavbar/>
   
   
   </>
  )
}

export default page