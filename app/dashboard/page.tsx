import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import MobileNavbar from '@/components/MobileNav'
import TitleTest from '@/components/TitleTest'



import React from 'react'

function page() {
  return (
    <main className='bg-white bg-opacity-5  rounded-lg h-full 
    w-full overflow-hidden overflow-y-auto'>
      <Header>
        <div className='sm:mb-2'>
          <h1 className='text-neutral-400 text-2xl font-semibold'>
            Startseite
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4
          gap-3 mt-4'>
            <ListItem 
            name="Favoriten"
            image="/image/volume-heartIcon.svg"
             href='liked' />
          </div>

        </div>
        
      </Header>
      <div className='mt-2 px-6'>
        <div className='flex justify-between items-center' >
          <h1 className='text-white text-2xl font-semibold'>
            Entdecke Neues
          </h1>
        </div>
     
     </div>
      <div className='px-5 pb-40'>
        <TitleTest />
    </div>
      
      <MobileNavbar/>
    </main>
  )
}

export default page