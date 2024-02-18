"use client"
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { twMerge } from 'tailwind-merge'
import ButtonLogin from './ButtonLogin'
import useAuthModal from '@/hooks/useAuthModal'
import AuthModal from './AuthModal'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@/hooks/useUser'
import { FaRegUser, FaUserAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'
import Link from 'next/link'
import SearchAmbientLight from './Next-Ui/SearchAmbientLight'

interface HeaderProps {
    children: React.ReactNode
    className?: string
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
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
    <div className={twMerge(`
      h-fit  p-6`, className)}>



        <div className=' hidden sm:flex  w-full sm:mb-4 items-center justify-between '>
            <div className='hidden md:flex gap-x-2 items-center'>
                <button
                onClick={() => router.back()} 
                className='rounded-full bg-opacity-30 bg-neutral-200 flex items-center justify-center hover:bg-neutral-800 transition'>
                    <RxCaretLeft size={26} className='text-white'/>
                </button>
                <button
                  onClick={() => router.forward()} 
                 className='rounded-full bg-opacity-30 bg-neutral-200 flex items-center justify-center hover:bg-neutral-800 transition'>
                    <RxCaretRight size={26} className='text-white'/>
                </button>
            </div>
            <div className='md:hidden flex gap-x-2 items-center'>
                <button
                
                 className='rounded-full p-2 bg-white bg-opacity-10 hover:bg-neutral-500 transition'>
                   <Link href={"/dashboard"}>
                    <HiHome size={26} className='text-neutral-200'/>
                    </Link>
                </button>
                <button
                 className='rounded-full p-2 bg-white bg-opacity-10 hover:bg-neutral-500 transition'>
                  <Link href={"/dashboard/search"}>
                    <BiSearch size={26} className='text-neutral-200'/>
                </Link>
                </button>
            

            </div>
            <div className='flex justify-between items-center gap-x-4'>
               
               { user ? (
                  <div className='flex gap-x-4 items-center'>
                   <button 
                   onClick={() => router.push("/dashboard/profile")}
                   className='bg-white/20 hover:bg-white/50 transition p-3 rounded-full'>
                  
                   <FaRegUser className='text-neutral-100' />
                   </button>
                  </div>
               ): (
               <>
                <div>
                <ButtonLogin
                onClick={authModal.onOpen}>
                    Anmelden
                </ButtonLogin>
                 </div>
            
                </>
               )}
                
            
            </div>
        </div>
        {children}
    </div>
  )
}

export default Header