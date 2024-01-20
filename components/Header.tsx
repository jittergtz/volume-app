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
    h-fit  p-6`, className)}>


        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-20 z-0 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[26.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#773ab5] to-[#3c98f4] opacity-45"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-20 z-0 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(90%-1rem)] aspect-[1155/678] w-[26.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e6cdff] to-[#0560bb] opacity-45"
          />
        </div>


        <div className='w-full flex mb-4 items-center justify-between'>
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
                <button className='rounded-full p-2 bg-white bg-opacity-10 hover:bg-neutral-500 transition'>
                    <HiHome size={26} className='text-neutral-200'/>
                </button>
                <button className='rounded-full p-2 bg-white bg-opacity-10 hover:bg-neutral-500 transition'>
                    <BiSearch size={26} className='text-neutral-200'/>
                </button>
            

            </div>
            <div className='flex justify-between items-center gap-x-4'>
                <>
                <div>
                    <ButtonLogin
                    onClick={() => {}}>
                        Anmelden
                    </ButtonLogin>
                </div>
                
                </>
            </div>
        </div>
        {children}
    </div>
  )
}

export default Header