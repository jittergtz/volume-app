
import AuthCard from '@/components/AuthCard'
import Header from '@/components/Header'
import AccordionCard from '@/components/Next-Ui/Accordion'
import ProfilData from '@/components/ProfilData'

import { Button } from '@nextui-org/react'

import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

function page() {






  return (
    <>
    <div className='bg-neutral-950 rounded-lg h-full pb-64'>
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
      


         <ProfilData/>


       
       




        </div>
    </>
  )
}


export default page