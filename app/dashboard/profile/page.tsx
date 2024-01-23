"use client"

import Header from '@/components/Header'
import MobileNavbar from '@/components/MobileNav'
import useAuthModal from '@/hooks/useAuthModal'
import { useUser } from '@/hooks/useUser'
import { Button } from '@nextui-org/react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'


function page() {
    const router = useRouter()
    const authModal = useAuthModal()

    const supabaseClient = useSupabaseClient()
    const { user } = useUser()

    const handleLogout = async () => {
      const { error } = await supabaseClient.auth.signOut()
        //Todo : reset any playing song
      router.refresh()

      if(error){
        toast.error(error.message)
      } else {
        toast.success("Ausgeloggt")
      }
    }


  return (
    <>
        <Header>
        <div className='sm:mb-2'>
          <h1 className='text-neutral-100 mt-10 text-3xl font-bold'>
            Profil Einstellungen 
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4
          gap-3 mt-4'>
          </div>
           </div>
        </Header>


        <div className='border m-5 h-72'>
       

        </div>


        

       
       
        <div className=' flex p-5 w-full  justify-center '>

        { user ? (
                  <div className='flex  items-center'>
                   <Button 
                   onClick={handleLogout}
                   className='rounded-full  px-20 w-full  '>
                    Ausloggen
                   </Button>
                  </div>
               ): (
               <>
                <div>
                <Button
                color='primary'
                className='rounded-full  px-20  '
                onClick={authModal.onOpen}>
                    Anmelden
                </Button>
                 </div>
            
                </>
               )}

</div>



    <MobileNavbar/>
    </>
  )
}


export default page