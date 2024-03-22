import { Chip, Image } from '@nextui-org/react'
import React from 'react'

function GridOne() {
  return (
  
    <div className='flex flex-col items-center h-36 z-50 md:h-60  w-80 lg:w-[600px] shadow-lg rounded-xl 
     '>
      <Chip
      variant="shadow"
      classNames={{
        base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
        content: "drop-shadow shadow-black text-white", }} >
          Neu 
       </Chip>
   
   <div className='flex'>
        <div className='flex flex-col  justify-center pl-3  z-50 text-4xl lg:text-7xl text-transparent
        bg-clip-text bg-gradient-to-l from-neutral-100  to-neutral-400 w-48 lg:w-max lg:ml-5
        '>
        Volume <p className='text-xl lg:text-3xl lg:w-64'>Jetzt auch App verfügbar!</p>
        </div>
        
        <div className=' flex items-center  ml-auto lg:p-4
        '>
        <Image
        isBlurred
        alt="Volume app icon"
        src='image/volume-icon-pwe.svg'
        className='w-28 h-28 lg:w-48 lg:h-48' />
        </div>
        <div id='divInstallApp'></div>
    </div>

    </div>
  )
}

export default GridOne