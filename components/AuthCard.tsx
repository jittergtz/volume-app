"use client"
import useAuthModal from '@/hooks/useAuthModal'
import { useUser } from '@/hooks/useUser'
import { Button } from '@nextui-org/react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'





function AuthCard() {
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
    <div className=' flex p-5  w-full  justify-center '>

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
  )
}

export default AuthCard