import { Image } from '@nextui-org/react'
import React from 'react'

function GradientFirst() {
   
  const prevImg = "https://e-cdns-images.dzcdn.net/images/cover/4ba495b1f2534a515f431dba70006972/1000x1000-000000-80-0-0.jpg"

  return (
   <div className='flex flex-col md:flex-row h-[57rem] items-center justify-center p-5
      rounded-2xl'>
         <Image
          alt='app player preview'
          src={prevImg}
          className='w-64 lg:w-96'
          />
            <img alt="Shadow" className="lp-image-card-shadow" src={prevImg} />

   

         <div className='mt-5 md:mt-0 ml-7 w-72 lg:w-[30rem] z-50 text-white/60'>
            <h1 className='text-5xl lg:text-7xl'>
            <p className='text-6xl lg:text-8xl' >Einfacher</p> Musik finden
            <p className=' text-4xl lg:text-4xl'>die dir gefällt.</p>
            </h1>
            
          </div>

       
   </div>
  )
}

export default GradientFirst