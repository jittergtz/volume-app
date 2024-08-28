"use client"
import React from 'react'
import { Bento } from './bento/Bento'

function ConnectSection() {
  return (
    <div className='h-[80vh] bg-black w-full p-5'>
      <div className='flex justify-center'>
        <div className='w-full  max-w-5xl'>
        <Bento/>
        </div>
      </div>
 
    </div>
  )
}

export default ConnectSection