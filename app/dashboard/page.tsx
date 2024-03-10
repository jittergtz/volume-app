import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import MobileNavbar from '@/components/MobileNav'
import DashboardAmbientLight from '@/components/Next-Ui/dashboardAmbientLight'



import React from 'react'
import Discover from '@/components/Discover'
import { FaFireFlameCurved } from 'react-icons/fa6'
import Greeting from '@/components/Greeting'
import { Tab, Tabs } from '@nextui-org/react'


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
             href='/dashboard/playlist/favoriten' />
          </div>

        </div>
        
      </Header>





      <div className='px-5 pb-40'>
        <Discover />
    </div>
  
    </main>
  )
}

export default page