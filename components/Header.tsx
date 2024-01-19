"use client"
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { twMerge } from 'tailwind-merge'
import ButtonLogin from './ButtonLogin'

interface HeaderProps {
    children: React.ReactNode
    className?: string
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter()

    const handleLogour = () => {

    }
  return (
    <div className={twMerge(`
    h-fit bg-gradient-to-b from-blue-800 p-6`, className)}>
        <div className='w-full flex mb-4 items-center justify-between'>
            <div className='hidden md:flex gap-x-2 items-center'>
                <button
                onClick={() => router.back()} 
                className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
                    <RxCaretLeft size={26} className='text-white'/>
                </button>
                <button
                  onClick={() => router.forward()} 
                 className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
                    <RxCaretRight size={26} className='text-white'/>
                </button>

            </div>
            <div className='md:hidden flex gap-x-2 items-center'>
                <button className='rounded-full p-2 bg-white bg-opacity-10 hover:bg-neutral-300 transition'>
                    <HiHome size={26} className='text-neutral-400'/>
                </button>
                <button className='rounded-full p-2 bg-white bg-opacity-10 hover:bg-neutral-300 transition'>
                    <BiSearch size={26} className='text-neutral-400'/>
                </button>
            

            </div>
            <div className='flex justify-between items-center gap-x-4'>
                <>
                <div>
                    <ButtonLogin>
                        Anmelden
                    </ButtonLogin>
                </div>
                
                </>
            </div>
        </div>

    </div>
  )
}

export default Header