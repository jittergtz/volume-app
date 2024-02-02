import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import MobileNavbar from '@/components/MobileNav'
import DashboardAmbientLight from '@/components/Next-Ui/dashboardAmbientLight'



import React from 'react'
import Discover from '@/components/Discover'
import { FaFireFlameCurved } from 'react-icons/fa6'
import Greeting from '@/components/Greeting'

function page() {
  return (
    <main className='bg-white bg-opacity-5  rounded-lg h-full 
    w-full overflow-hidden overflow-y-auto'>
   
      <DashboardAmbientLight/>
      <Header>
        <div className='sm:mb-2'>
        <Greeting/>
         
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4
          gap-3 mt-4'>
            <ListItem 
            name="Favoriten"
            image="/image/volume-heartIcon.svg"
             href='/dashboard/liked' />
          </div>

        </div>
        
      </Header>
      <div className='mt-2 px-6'>
        <div className='flex justify-between items-center' >
          <div>
          <h1 className='text-white text-2xl font-semibold'>
            Entdecke Neues
          </h1>
          <p className='flex gap-1 text-white/70 items-center'>
            Beliebt    
             <FaFireFlameCurved 
             className='h-3 text-white/60' />
          </p>
          </div>
        </div>
     
     </div>
      <div className='px-5 pb-40'>
        <Discover />
    </div>
      
      <MobileNavbar/>
    </main>
  )
}

export default page