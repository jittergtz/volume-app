"use client"
import { Button } from '@nextui-org/react';
import { useUser } from '@/hooks/useUser';
import { useSessionContext } from '@supabase/auth-helpers-react';

import React, { useEffect, useState } from 'react'
import AccordionCard from './Next-Ui/Accordion';
import { BiUserCircle } from 'react-icons/bi';
import AuthCard from './AuthCard';
import DeleteUserModal from './Next-Ui/DeleteUserModal';

function ProfilData() {
  const [isUser, setIsUser] = useState<any>(null);
  const { supabaseClient } = useSessionContext();
  const { user } = useUser();


  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchData = async () => {
      setIsUser(null);
      const { data: users, error } = await supabaseClient
        .from("users")
        .select("*")
        .single();

      if (!error && users) {
        setIsUser(users.full_name);
      }
    };

    fetchData();
  }, [supabaseClient, user?.id]);
 
 
 
 
 
  return (
   <>

<div className='flex gap-3 flex-col items-center justify-center'> 
         {isUser && <> <div className='rounded-xl bg-neutral-900 flex flex-col items-start p-2 px-3 w-80 lg:w-[30rem]'>
         <p className='text-white text-sm'>Name</p> <p className='text-neutral-400 text-md'>{isUser}</p>
          </div>
          <div className='rounded-xl bg-neutral-800 flex flex-col items-start p-2 px-3 w-80 lg:w-[30rem]'>
          <p className='text-white text-sm'>Email</p> <p className='text-neutral-400 text-md'>{user?.email}</p>
           </div>
           <div className='mt-1'>
           </div>
           </> }
        <AuthCard/>

       
   
       <AccordionCard/>
    
        </div>
   
   </>
  )
}

export default ProfilData