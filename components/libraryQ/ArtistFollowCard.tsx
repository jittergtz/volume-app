import getFollowedArtists from '@/api/getFollowedArtists'
import { Image, Skeleton } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'


const ArtistFollowCard = async () => {
  const artist = await getFollowedArtists()

  return (
    <div className='flex  flex-col gap-2 scrollbar-hide '>
    {artist?.map((artist: any, index: number) => {
      if (!artist) {
        return (
          <div
            className=" w-full flex gap-2 items-center rounded-lg"
            key={index}
          >
            <Skeleton className="w-20 h-20 rounded-xl bg-neutral-800"></Skeleton>
            <div className="flex flex-col gap-3">
              <Skeleton className="w-32 h-2 rounded-xl bg-neutral-800"></Skeleton>
              <Skeleton className="w-20 h-2 rounded-xl bg-neutral-800"></Skeleton>
            </div>
          </div>
        )
      }


    
      return (
        <div key={index} className='w-full h-16 hover:bg-neutral-900 rounded-md'>
        <Link href={`/dashboard/artist/${artist.id}`}>
         <div className='flex items-center gap-2'>
          <Image 
          className='h-16 w-16 rounded-full p-1'
          alt='artist image'
          src={artist?.picture_xl}
          />
          <div className=''>
          <h1 className=''>{artist?.name}</h1>
          <p className='text-sm text-neutral-400'>
            Künstler
          </p>
          </div>
          </div>
          </Link>
        </div>
    
      )
    })}
    </div>
 
  )
}

export default ArtistFollowCard




