"use client"
import AuthCard from '@/components/AuthCard'
import Header from '@/components/Header'
import AccordionCard from '@/components/Next-Ui/Accordion'

import { Button } from '@nextui-org/react'
import { useUser } from '@supabase/auth-helpers-react'
import { supabase } from '@supabase/auth-ui-shared'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

function page() {



  const  user  = useUser();


  return (
    <>
    <div className='bg-neutral-950 rounded-lg pb-64'>
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
      


      


        <div className='flex gap-3 flex-col items-center justify-center'> 
         {user &&   <div className='rounded-xl bg-neutral-800 flex flex-col items-start p-2 px-3 w-80 lg:w-[30rem]'>
         <p className='text-white text-sm'>Email</p> <p className='text-neutral-400 text-md'>{user?.email}</p>
          </div>}
        <AuthCard/>
       {user && <Button className='w-80 lg:w-[30rem] ' color="danger" variant="bordered" startContent={<BiUserCircle size={26} />}>
        Account löschen
       </Button> } 
       <AccordionCard/>
    
        </div>
       
       




        </div>
    </>
  )
}


export default page