/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Footer() {
  return (

   <footer className='h-20 w-full px-5 bg-black'>
    <div className='bg-gradient-to-r from-black via-neutral-400 to-black w-full h-[1px]'></div>
            <div className='flex h-full items-center justify-center'>
            <div className='max-w-5xl text-sm w-full'>
               <div className='flex items-center justify-between text-zinc-500  gap-2'>
                <div>
                <p>
                © Volume, all rights reserved
                </p>
                </div>
         
                <div>
                  io
                </div>
         
               </div>
            </div>
            </div>
            <div className='flex mt-20 w-full justify-center'>
            <img 
            src="/image/VolumeFooterText.svg"
            alt="logo"
            className='' />
            </div>
     </footer>
  )
}

export default Footer