import { Image } from '@nextui-org/react'
import React from 'react'

function GridOne() {
  return (
    <div className='flex h-40 z-50 md:h-72 w-[800px] bg-gradient-to-tl from-neutral-800 to-neutral-950 shadow-lg rounded-xl'>

        <div className='flex p-4 z-50 text-3xl text-transparent
        bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-600
        w-40 '>
        Volume bald als Pwa
        </div>
        <Image
        alt=""
        src='image/volume-icon-pwe.svg'
        className='w-40 h-40' />


    </div>
  )
}

export default GridOne