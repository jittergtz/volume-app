"use client"

import { useArtistQuery } from '@/lib/services/apiFetch'
import { Image, Switch } from '@nextui-org/react'
import React, { useEffect } from 'react'
import FollowButton from '../Next-Ui/FollowButton'


interface Artist {
  name: string
  picture: string
  picture_xl: string
  id: number
}

function ArtistPageHeader({artistData}: any) {
   
  console.log(artistData)

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

  <div className=' mb-5 -mt-36 md:px-5 xl:px-10 flex items-center gap-2'>
      <Image
      src={artistData?.picture_xl}
      alt="NextUI Album Cover"
      className=' rounded-full w-28 lg:w-48 xl:w-56'
       />

    <div>
    <h1 className='text-4xl tracking-tighter lg:text-6xl xl:text-8xl opacity-60' >
    {artistData?.name}
    </h1>
    <p className='ml-1 xl:text-xl text-white'>Künstler*in</p>
    <p><FollowButton/></p>
 
    </div>

  
  </div>
  


  
  </>
  )
}

export default ArtistPageHeader