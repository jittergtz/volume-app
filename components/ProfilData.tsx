"use client"
import { Button } from '@nextui-org/react';
import { useUser } from '@supabase/auth-helpers-react';

import React from 'react'
import AccordionCard from './Next-Ui/Accordion';
import { BiUserCircle } from 'react-icons/bi';
import AuthCard from './AuthCard';

function ProfilData() {
    const  user  = useUser();
  return (
   <>

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
   
   </>
  )
}

export default ProfilData