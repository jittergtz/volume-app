"use client"

import { useArtistQuery } from '@/lib/services/apiFetch'
import { Image, Switch } from '@nextui-org/react'
import React, { useEffect } from 'react'


interface Artist {
  name: string
  picture: string
  picture_xl: string
  id: number
}

function ArtistPageHeader({artistData}: any) {


  return (
    <>
    <div className="  border-neutral-800">
    <img
      alt="Artist background"
      className=" object-cover h-40 rounded-t-lg w-full
      blur-2xl lg:blur-3xl
       opacity-60  "
      src={artistData?.picture_xl}/>
  </div>

  <div className=' mb-5 -mt-40 md:px-5 xl:px-10 flex items-center gap-2'>
      <Image
      src={artistData?.picture_xl}
      alt="NextUI Album Cover"
      className=' rounded-full w-28 lg:w-48'
       />

    <div>
    <h1 className='text-3xl tracking-tighter lg:text-5xl xl:text-7xl opacity-60' >
    {artistData?.name}
    </h1>
    <p className='ml-1 text-white'>Künstler*in</p>
    </div>
  </div>
  


  
  </>
  )
}

export default ArtistPageHeader