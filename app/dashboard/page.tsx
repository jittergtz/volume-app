import Header from '@/components/Header'
import ListItem from '@/components/ListItem'

import React from 'react'

function page() {
  return (
    <main className='bg-white bg-opacity-5  rounded-lg h-full 
    w-full overflow-hidden overflow-y-auto'>
      <Header>
        <div className='mb-2'>
          <h1 className='text-neutral-400 text-2xl font-semibold'>
            Willkommen 
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
      <div className='mt-2 mb-7 px-6'>
        <div className='flex justify-between items-center' >
          <h1 className='text-white text-2xl font-semibold'>
            Neue Songs
          </h1>
        </div>
        <div>
          Liste der Songs!
        </div>

      </div>
      
    
     
    </main>
  )
}

export default page