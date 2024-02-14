import Link from 'next/link';
import React from 'react'
import { FaPlay } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';
import ArtistPageHeader from './ArtistPageHeader';

interface TrackProps {
    id: number;
    preview: string;
    album: {
      cover_big: string;
    };
    title: string;
    artist: {
      id: number
      name: string;
      picture_xl: string
      picture: string
    };
  }



function ArtistCard ({ item, index, data, isPlaying, activeSong}: {
    item: TrackProps,
    index: number,
    data: any,
    isPlaying: any,
    activeSong: any,
  }) {


    const artistUrl = `/dashboard/artist/${item.artist.id}`;

      
  return (
    
    <Link href={artistUrl} key={item.artist.id} className={twMerge('gap-3 hover:bg-white/10 rounded-lg  p-1 w-96   flex items-center animate-appearance-in'
      )}>
     
     <div className='absolute rounded-lg
      overflow-hidden right-0 w-full -z-50 '>
      <img
          alt="Shadow"
          className=" blur-2xl h-[70px]   w-full "
          src={item.artist.picture}
        />
        </div>

        <img
         className='rounded-full w-16 h-16 '
         height={150}
         width={150}
         alt='deezer-pic'
         src={item.artist.picture_xl}
       />


        <div className='text-neutral-200 w-52' >
       <span className='text-lg overflow-x-hidden line-clamp-1'>{item.artist.name}</span>
       <p>Künstler*in</p>
       </div>

       <div className="bg-white/20 transition opacity-0 hover:opacity-100
       rounded-2xl flex items-center justify-center 
        p-4 drop-shadow-md group-hover:opacity-100 hover:scale-110  " >
           <FaPlay className="text-white/90" />
     </div>

  



       
  
     </Link> 
  )
}

export default ArtistCard