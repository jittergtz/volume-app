"use client"
import React from 'react'
import { Bento } from './bento/Bento'
import { LampTwo } from '../LampDemo'


function ConnectSection() {
  return (
    <div className='min-h-[80vh] relative bg-black w-full p-5'>
      <div className="absolute z-0 h-full w-full bg-[radial-gradient(#242424_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute h-full w-full bg-[radial-gradient(#_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className='flex justify-center'>
        <div className='w-full mt-64  max-w-5xl'>
     
        <Bento/>
        </div>
      </div>
 
    </div>
  )
}

export default ConnectSection